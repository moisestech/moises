import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const BASE = process.env.BASE ?? 'http://localhost:3001'
const OUT = 'scripts/.trust-qa'
mkdirSync(OUT, { recursive: true })

const routes = (process.env.ROUTES ?? 'the-loop').split(',')
const widths = (process.env.WIDTHS ?? '390,768,1280,1440').split(',').map(Number)
const themes = (process.env.THEMES ?? 'light,dark').split(',')
/** Diagrams live in collapsed panels, so auditing them means opening those first. */
const depth = process.env.DEPTH === '1'

const browser = await chromium.launch()
let failures = 0

for (const route of routes) {
  const url = route.startsWith('/') ? `${BASE}${route}` : `${BASE}/workshop/trust-is-not-a-vibe/learn/${route}`
  for (const width of widths) {
    for (const theme of themes) {
      const context = await browser.newContext({
        viewport: { width, height: 900 },
        colorScheme: theme,
        deviceScaleFactor: 1,
      })
      const page = await context.newPage()
      const errors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text())
      })
      await page.goto(url, { waitUntil: 'networkidle' })
      await page.waitForTimeout(400)

      if (depth) {
        // Scoped to the lesson: the site's off-canvas mobile menu also uses
        // details, and opening that measures a drawer no reader has open.
        await page.evaluate(() => {
          document.querySelectorAll('main details').forEach((el) => el.setAttribute('open', ''))
        })
        await page.waitForTimeout(300)
      }

      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth
        /*
          Whether the page actually scrolls sideways, not just whether
          scrollWidth exceeds the viewport. The site's off-canvas menu is a
          fixed element parked off screen, so it inflates scrollWidth on every
          page while nothing is reachable.
        */
        window.scrollTo(1000, 0)
        const scrolled = window.scrollX
        window.scrollTo(0, 0)

        const inFixed = (el) => {
          for (let node = el; node; node = node.parentElement) {
            if (getComputedStyle(node).position === 'fixed') return true
          }
          return false
        }
        // Name the content, not the wrapper: skip anything already inside a
        // sideways scroller, which is meant to exceed its box.
        const wide = [...document.querySelectorAll('main *')]
          .filter((el) => {
            if (el.getBoundingClientRect().right <= docWidth + 1) return false
            if (inFixed(el)) return false
            for (let n = el.parentElement; n; n = n.parentElement) {
              const o = getComputedStyle(n).overflowX
              if (o === 'auto' || o === 'scroll') return false
            }
            return true
          })
          .sort((a, b) => b.getBoundingClientRect().width - a.getBoundingClientRect().width)
          .map((el) => `${el.tagName}.${String(el.className).slice(0, 50)} w=${Math.round(el.getBoundingClientRect().width)}`)

        return { scrollX: scrolled > 0, scrolled, count: wide.length, sample: wide.slice(0, 3) }
      })

      /*
        Every diagram must be readable without seeing it, and every marker id
        must be unique. The kit scopes ids per instance because the hand-rolled
        diagrams shared one `trust-arrow`, which made every `url(#...)` on a
        page with two diagrams resolve to whichever rendered first.
      */
      const svg = await page.evaluate(() => {
        const graphics = [...document.querySelectorAll('svg[role="img"]')]
        const untitled = graphics
          .filter((el) => !el.querySelector('title')?.textContent?.trim())
          .map((el) => String(el.getAttribute('class')).slice(0, 40))
        const ids = [...document.querySelectorAll('svg [id]')].map((el) => el.id)
        const duplicates = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))]
        return { graphics: graphics.length, untitled, duplicates }
      })

      const h1s = await page.locator('h1').count()
      const label = `${route.replace(/\//g, '_')}-${width}-${theme}${depth ? '-depth' : ''}`
      await page.screenshot({ path: `${OUT}/${label}.png`, fullPage: true })

      const bad =
        overflow.scrollX ||
        overflow.count > 0 ||
        h1s > 1 ||
        errors.length > 0 ||
        svg.untitled.length > 0 ||
        svg.duplicates.length > 0
      if (bad) failures += 1
      console.log(
        `${bad ? 'FAIL' : 'ok  '} ${label} h1=${h1s} scrollX=${overflow.scrolled} wideEls=${overflow.count} svg=${svg.graphics} errors=${errors.length}`
      )
      if (overflow.count) console.log('        wide:', overflow.sample.join(' | '))
      if (svg.untitled.length) console.log('        untitled svg:', svg.untitled.join(' | '))
      if (svg.duplicates.length) console.log('        duplicate svg ids:', svg.duplicates.join(' | '))
      if (errors.length) console.log('        console:', errors.slice(0, 2).join(' | '))
      await context.close()
    }
  }
}

await browser.close()
console.log(failures ? `\n${failures} viewport(s) need attention` : '\nall viewports clean')
process.exit(failures ? 1 : 0)
