import { mkdirSync } from 'fs'
import { join } from 'path'
import { chromium } from 'playwright'

const BASE = process.env.BASE ?? 'http://localhost:3003'
const LEARN = `${BASE}/workshop/trust-is-not-a-vibe/learn`
const OVERVIEW = `${BASE}/workshop/trust-is-not-a-vibe`
const SHOTS = join(process.cwd(), 'tmp', 'trust-idea-quote')
const KAHNEMAN = 'What you see is all there is.'
const NIST = 'AI systems are inherently socio-technical in nature.'

mkdirSync(SHOTS, { recursive: true })

const results = []
function check(name, pass, detail = '') {
  results.push({ name, pass, detail })
  console.log(`${pass ? 'ok  ' : 'FAIL'} ${name}${detail ? ` — ${detail}` : ''}`)
}

async function waitForSteps(page) {
  await page.waitForFunction(
    () => Number(document.querySelector('[data-trust-steps]')?.getAttribute('data-trust-steps')) > 0,
    null,
    { timeout: 30000 }
  )
}

async function dismissPresentTransition(page) {
  const banner = page.locator('[data-trust-present-transition]')
  if ((await banner.count()) > 0 && (await banner.first().isVisible())) {
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(300)
  }
}

async function revealQuote(page, text) {
  const locator = page.locator('[data-trust-idea-quote]').getByText(text)
  for (let i = 0; i < 12; i += 1) {
    if ((await locator.count()) > 0 && (await locator.first().isVisible())) return true
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(200)
  }
  return (await locator.count()) > 0 && (await locator.first().isVisible())
}

async function quoteState(page) {
  return page.locator('[data-trust-idea-quote]').evaluate((el) => {
    const words = [...el.querySelectorAll('[data-trust-idea-quote-word]')].map((node) => ({
      text: node.textContent,
      opacity: getComputedStyle(node).opacity,
      revealed: node.getAttribute('data-revealed'),
    }))
    const cite = el.querySelector('cite')
    const why = el.querySelector('[data-trust-idea-quote-why]')
    const kicker = el.querySelector('[data-trust-idea-quote-kicker]')
    const bridge = el.querySelector('[data-trust-idea-quote-bridge]')
    const rule = el.querySelector('[data-trust-idea-quote-rule]')
    const mark = el.querySelector('[data-trust-idea-quote-mark]')
    return {
      text: el.textContent,
      settled: el.getAttribute('data-trust-idea-quote-settled'),
      words,
      citeOpacity: cite ? getComputedStyle(cite.parentElement).opacity : null,
      whyOpacity: why ? getComputedStyle(why).opacity : null,
      kicker: kicker?.textContent?.trim() ?? null,
      bridge: bridge?.textContent?.trim() ?? null,
      ruleTransform: rule ? getComputedStyle(rule).transform : null,
      ruleBg: rule ? getComputedStyle(rule).backgroundColor : null,
      markTransform: mark ? getComputedStyle(mark).transform : null,
      citeLinks: el.querySelectorAll('cite a').length,
    }
  })
}

const browser = await chromium.launch()

{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await ctx.newPage()
  await page.addInitScript(() => {
    localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
  })
  await page.goto(`${LEARN}/looks-right?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await dismissPresentTransition(page)
  await page.locator('[data-trust-step]').filter({ hasText: 'The idea' }).first().waitFor({ state: 'visible' })
  const found = await revealQuote(page, KAHNEMAN)
  check('present Looks Right quote text is visible to locator', found)
  const early = await quoteState(page)
  check('Kahneman string is in the DOM', early.text.includes(KAHNEMAN), early.text.slice(0, 80))
  check(
    'present type-on starts before the quote settles',
    early.settled !== 'true' && early.words.some((w) => Number(w.opacity) < 0.99),
    `settled=${early.settled} opacities=${early.words.map((w) => w.opacity).join(',')}`
  )
  check(
    'word spans keep spaces in the DOM',
    early.text.includes(KAHNEMAN) && early.words.map((w) => w.text).join(' ') === KAHNEMAN,
    JSON.stringify(early.words.map((w) => w.text))
  )
  check('present cite has no source link', early.citeLinks === 0)
  check('Why this matters here kicker is present', early.kicker === 'Why this matters here')
  check(
    'bridge is not a second quote',
    early.bridge === 'The polished card is all you can see — missing evidence still counts.'
  )
  const quote = page.locator('[data-trust-idea-quote]')
  await quote.screenshot({ path: join(SHOTS, 'looks-right-present-typing.png') })
  await page.locator('[data-trust-idea-quote][data-trust-idea-quote-settled]').waitFor({ timeout: 15000 })
  const idle = await quoteState(page)
  check('after type-on the quote settles', idle.settled === 'true')
  check(
    'after type-on every word is full ink',
    idle.words.every((w) => Number(w.opacity) > 0.99),
    idle.words.map((w) => w.opacity).join(',')
  )
  await quote.screenshot({ path: join(SHOTS, 'looks-right-present-idle.png') })
  await quote.hover()
  await page.waitForTimeout(350)
  const hovered = await quoteState(page)
  check(
    'hover lengthens or brightens the left rule',
    hovered.ruleTransform !== idle.ruleTransform || hovered.ruleBg !== idle.ruleBg,
    `transform ${idle.ruleTransform} -> ${hovered.ruleTransform}; bg ${idle.ruleBg} -> ${hovered.ruleBg}`
  )
  check(
    'hover lifts the quotation mark',
    hovered.markTransform !== idle.markTransform,
    `${idle.markTransform} -> ${hovered.markTransform}`
  )
  await quote.screenshot({ path: join(SHOTS, 'looks-right-present-hover.png') })
  await ctx.close()
}

{
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: 'reduce',
  })
  const page = await ctx.newPage()
  await page.addInitScript(() => {
    localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
  })
  await page.goto(`${LEARN}/looks-right?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await dismissPresentTransition(page)
  const found = await revealQuote(page, KAHNEMAN)
  check('reduced-motion present finds Kahneman immediately', found)
  const state = await quoteState(page)
  const hiddenWords = state.words.filter((w) => Number(w.opacity) < 0.99)
  check(
    'reduced-motion shows every quote word without waiting',
    hiddenWords.length === 0,
    hiddenWords.map((w) => w.text).join('|')
  )
  check('reduced-motion shows attribution immediately', Number(state.citeOpacity) > 0.99, String(state.citeOpacity))
  check('reduced-motion shows the bridge immediately', Number(state.whyOpacity) > 0.99, String(state.whyOpacity))
  check('reduced-motion Kahneman string is in the DOM', state.text.includes(KAHNEMAN))
  await page.locator('[data-trust-idea-quote]').screenshot({ path: join(SHOTS, 'looks-right-present-reduced.png') })
  await ctx.close()
}

{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.addInitScript(() => {
    localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
  })
  await page.goto(`${LEARN}/looks-right`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  const ideaQuote = page.locator('[data-trust-panel-open] [data-trust-idea-quote]').getByText(KAHNEMAN)
  check('self-paced Looks Right contains Kahneman', await ideaQuote.isVisible())
  check(
    'self-paced Kahneman is in the DOM',
    await page.locator('[data-trust-idea-quote]').evaluate((el) => el.textContent.includes('What you see is all there is.'))
  )
  await page.goto(OVERVIEW, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  check(
    'self-paced overview shows NIST',
    await page.locator('#why-it-matters [data-trust-idea-quote]').getByText(NIST).isVisible()
  )
  check(
    'self-paced NIST cite links the framework PDF',
    (await page.locator('#why-it-matters [data-trust-idea-quote] cite a').getAttribute('href')) ===
      'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf'
  )
  await page.goto(`${OVERVIEW}?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await page.getByRole('navigation', { name: 'On this page' }).getByRole('button', { name: /Why it matters/ }).click()
  await page.waitForTimeout(400)
  const nistFound = await revealQuote(page, NIST)
  check('overview present pages to NIST', nistFound)
  check(
    'overview present NIST has no source link',
    (await page.locator('[data-trust-idea-quote] cite a').count()) === 0
  )
  check(
    'overview present NIST string is in the DOM',
    await page.locator('[data-trust-idea-quote]').evaluate((el, text) => el.textContent.includes(text), NIST)
  )
  await ctx.close()
}

await browser.close()
const failed = results.filter((item) => !item.pass)
console.log(`\n${results.length - failed.length}/${results.length} passed`)
if (failed.length) process.exit(1)
