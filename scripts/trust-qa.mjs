import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const BASE = process.env.BASE ?? 'http://localhost:3001'
const OUT = 'scripts/.trust-qa'
mkdirSync(OUT, { recursive: true })

const routes = (process.env.ROUTES ?? 'the-loop').split(',')
const widths = (process.env.WIDTHS ?? '390,768,1280,1440').split(',').map(Number)
const themes = (process.env.THEMES ?? 'light,dark').split(',')

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

      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth
        const wide = [...document.querySelectorAll('*')]
          .filter((el) => el.getBoundingClientRect().right > docWidth + 1)
          .map((el) => `${el.tagName}.${String(el.className).slice(0, 60)}`)
        return {
          scrollX: document.documentElement.scrollWidth > docWidth + 1,
          count: wide.length,
          sample: wide.slice(0, 3),
        }
      })

      const h1s = await page.locator('h1').count()
      const label = `${route.replace(/\//g, '_')}-${width}-${theme}`
      await page.screenshot({ path: `${OUT}/${label}.png`, fullPage: true })

      const bad = overflow.scrollX || h1s > 1 || errors.length > 0
      if (bad) failures += 1
      console.log(
        `${bad ? 'FAIL' : 'ok  '} ${label} h1=${h1s} overflowX=${overflow.scrollX} wideEls=${overflow.count} errors=${errors.length}`
      )
      if (overflow.scrollX) console.log('        wide:', overflow.sample.join(' | '))
      if (errors.length) console.log('        console:', errors.slice(0, 2).join(' | '))
      await context.close()
    }
  }
}

await browser.close()
console.log(failures ? `\n${failures} viewport(s) need attention` : '\nall viewports clean')
process.exit(failures ? 1 : 0)
