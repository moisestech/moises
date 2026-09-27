import { mkdirSync } from 'fs'
import { join } from 'path'
import { chromium } from 'playwright'

const BASE = process.env.BASE ?? 'http://localhost:3003'
const LEARN = `${BASE}/workshop/trust-is-not-a-vibe/learn`
const SHOTS = join(process.cwd(), 'tmp', 'trust-harness-see')
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

async function openPortion(page, label) {
  const btn = page.locator('[data-trust-step][aria-expanded]').filter({ hasText: label }).first()
  await btn.waitFor({ state: 'attached', timeout: 15000 })
  if ((await btn.getAttribute('aria-expanded')) !== 'true') {
    await btn.evaluate((el) => el.click())
    await page.waitForTimeout(200)
  }
}

async function dismissPresentTransition(page) {
  const banner = page.locator('[data-trust-present-transition]')
  if ((await banner.count()) > 0 && (await banner.first().isVisible())) {
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(300)
  }
}

async function advanceHarnessExample(page) {
  const next = page.getByRole('button', { name: /^Next example/ })
  if ((await next.count()) > 0) {
    if (!(await next.isEnabled())) return false
    await next.click()
    await page.waitForTimeout(150)
    return true
  }
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(150)
  return true
}

async function pageUntilHarness(page, locator) {
  for (let i = 0; i < 40; i += 1) {
    if ((await locator.count()) > 0 && (await locator.first().isVisible())) return true
    const moved = await advanceHarnessExample(page)
    if (!moved) return false
  }
  return false
}

async function completeGoldenSet(page) {
  for (let i = 0; i < 24; i += 1) {
    const groups = page.getByRole('group', { name: /^Sort / })
    if ((await groups.count()) > 0 && (await groups.first().isVisible())) {
      await groups.first().getByRole('button').first().click()
      await page.waitForTimeout(120)
      const placed = Number(await page.getAttribute('[data-trust-harness-golden-placed]', 'data-trust-harness-golden-placed'))
      if (placed >= 8) {
        await page.waitForTimeout(200)
        return
      }
    }
    await advanceHarnessExample(page)
  }
}

const browser = await chromium.launch()

{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.addInitScript(() => {
    localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
  })
  await page.goto(`${LEARN}/the-harness`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'The idea')

  const first = page.getByText('The model proposes.', { exact: true })
  const second = page.getByText('The harness is what must be true before a write.', { exact: true })
  const third = page.getByText('Match a control, name one gate, then vote as a team.', { exact: true })
  check('self-paced The idea shows the first claim', await first.isVisible())
  check('self-paced The idea shows the harness beat', await second.isVisible())
  check('self-paced The idea shows the do-now', await third.isVisible())
  const a = await first.boundingBox()
  const b = await second.boundingBox()
  const c = await third.boundingBox()
  check(
    'self-paced space between first two sentences',
    Boolean(a && b && b.y >= a.y + a.height + 8),
    `${Math.round(a?.y ?? 0)}+${Math.round(a?.height ?? 0)} / ${Math.round(b?.y ?? 0)}`
  )
  check(
    'self-paced space before the do-now',
    Boolean(b && c && c.y >= b.y + b.height + 8),
    `${Math.round(b?.y ?? 0)}+${Math.round(b?.height ?? 0)} / ${Math.round(c?.y ?? 0)}`
  )
  await page.screenshot({ path: join(SHOTS, 'self-idea.png'), fullPage: true })

  await openPortion(page, 'See it')
  check(
    'self-paced See it drops idea-05',
    (await page.locator('[data-trust-idea-portrait="idea-05-the-harness-golden-dataset-first"]').count()) === 0
  )
  check('self-paced See it keeps eval-08', await page.locator('[data-trust-eval-diagram="eval-08"]').isVisible())
  check('self-paced See it opens on the golden-set activity', await page.getByText('Eight variants of the same request').isVisible())
  check(
    'self-paced See it gates later portraits',
    (await page.locator('[data-trust-idea-portrait="idea-06-the-harness-four-graders-have-blind-spots"]').count()) === 0 &&
      (await page.locator('[data-trust-idea-portrait="idea-08-the-harness-regression-whac-a-mole"]').count()) === 0
  )
  await page.screenshot({ path: join(SHOTS, 'self-see-1.png'), fullPage: true })

  await completeGoldenSet(page)
  const grader = page.locator('[data-trust-idea-portrait="idea-06-the-harness-four-graders-have-blind-spots"]')
  const regression = page.locator('[data-trust-idea-portrait="idea-08-the-harness-regression-whac-a-mole"]')
  check('self-paced can page to four-graders', await pageUntilHarness(page, grader))
  check('self-paced can page to regression', await pageUntilHarness(page, regression))
  await ctx.close()
}

{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await ctx.newPage()
  await page.addInitScript(() => {
    localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
  })
  await page.goto(`${LEARN}/the-harness?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await dismissPresentTransition(page)
  await openPortion(page, 'The idea')
  const first = page.getByText('The model proposes.', { exact: true })
  const second = page.getByText('The harness is what must be true before a write.', { exact: true })
  const third = page.getByText('Match a control, name one gate, then vote as a team.', { exact: true })
  check('present The idea starts on the first sentence', await first.isVisible())
  check('present The idea holds the second sentence', !(await second.isVisible()))
  check('present The idea holds the do-now', !(await third.isVisible()))
  await page.screenshot({ path: join(SHOTS, 'present-idea-1.png'), fullPage: true })
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(250)
  check('present The idea pages the harness beat', await second.isVisible())
  check('present The idea still holds the do-now', !(await third.isVisible()))
  await page.screenshot({ path: join(SHOTS, 'present-idea-2.png'), fullPage: true })
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(250)
  check('present The idea pages the do-now', await third.isVisible())
  await page.screenshot({ path: join(SHOTS, 'present-idea-3.png'), fullPage: true })

  await openPortion(page, 'See it')
  check('present See it opens on the golden-set intro', await page.getByText('Eight variants of the same request').isVisible())
  check(
    'present See it drops idea-05',
    (await page.locator('[data-trust-idea-portrait="idea-05-the-harness-golden-dataset-first"]').count()) === 0
  )
  check('present See it keeps eval-08', await page.locator('[data-trust-eval-diagram="eval-08"]').isVisible())
  await page.screenshot({ path: join(SHOTS, '01-present-see-1.png'), fullPage: true })
  await ctx.close()
}

await browser.close()
const failed = results.filter((row) => !row.pass)
console.log(failed.length ? `\n${failed.length} failed` : `\n${results.length} passed`)
process.exit(failed.length ? 1 : 0)
