import { mkdirSync } from 'fs'
import { join } from 'path'
import { chromium } from 'playwright'

const FACT_SHOTS = join(process.cwd(), 'tmp', 'trust-overview-facts')
const QUESTION_SHOTS = join(process.cwd(), 'tmp', 'trust-overview-question')
const WHY_SHOTS = join(process.cwd(), 'tmp', 'trust-overview-why')
const PATH_SHOTS = join(process.cwd(), 'tmp', 'trust-overview-path')

const BASE = process.env.BASE ?? 'http://localhost:3001'
const LEARN = `${BASE}/workshop/trust-is-not-a-vibe/learn`
const OVERVIEW = `${BASE}/workshop/trust-is-not-a-vibe`

const results = []
function check(name, pass, detail = '') {
  results.push({ name, pass, detail })
  console.log(`${pass ? 'ok  ' : 'FAIL'} ${name}${detail ? ` — ${detail}` : ''}`)
}

/**
 * Sections server-render their step attributes but only join the registry after
 * hydration. Waiting on the count avoids an early keypress reading zero steps,
 * which looks like "past the last step" and jumps to the next chapter.
 */
async function waitForSteps(page) {
  await page.waitForFunction(
    () => Number(document.querySelector('[data-trust-steps]')?.getAttribute('data-trust-steps')) > 0,
    null,
    { timeout: 30000 }
  )
}

const announcement = (page) =>
  page.evaluate(
    () =>
      [...document.querySelectorAll('[role="status"][aria-live="polite"]')]
        .map((node) => node.textContent?.trim())
        .find(Boolean) ?? ''
  )

function luma(color) {
  const m = String(color).match(/[\d.]+/g)
  if (!m || m.length < 3) return 0
  return 0.2126 * Number(m[0]) + 0.7152 * Number(m[1]) + 0.0722 * Number(m[2])
}

async function sitsLeftOf(left, right) {
  const a = await left.boundingBox()
  const b = await right.boundingBox()
  if (!a || !b) return { ok: false, detail: 'missing box' }
  return {
    ok: a.x + a.width <= b.x + 4,
    detail: `${Math.round(a.x + a.width)} vs ${Math.round(b.x)}`,
  }
}

async function openPortion(page, label) {
  const btn = page.locator('[data-trust-step][aria-expanded]').filter({ hasText: label }).first()
  await btn.waitFor({ state: 'attached', timeout: 15000 })
  if ((await btn.getAttribute('aria-expanded')) !== 'true') {
    await btn.evaluate((el) => el.click())
    await page.waitForTimeout(200)
  }
}

/** Page remaining slides in the open section until `locator` is on screen. */
async function revealInPortion(page, locator) {
  for (let i = 0; i < 10; i += 1) {
    if ((await locator.count()) > 0 && (await locator.first().isVisible())) return
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(200)
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

const evalDiagram = (page, id) => page.locator(`[data-trust-eval-diagram="${id}"]`)

async function evalDiagramVisible(page, id) {
  const node = evalDiagram(page, id)
  return (await node.count()) > 0 && (await node.first().isVisible())
}

/** Present arrival is the chapter banner. Leave it before touching the deck. */
async function dismissPresentTransition(page) {
  const banner = page.locator('[data-trust-present-transition]')
  if ((await banner.count()) > 0 && (await banner.first().isVisible())) {
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(300)
  }
}

async function openDeeper(page) {
  await dismissPresentTransition(page)
  const depth = page.getByRole('button', { name: /Open depth/ })
  if ((await depth.count()) > 0 && (await depth.isVisible())) {
    await depth.click()
    await page.waitForTimeout(200)
  }
  await page.locator('summary').filter({ hasText: 'Go deeper' }).first().waitFor({ state: 'visible', timeout: 15000 })
  await page.evaluate(() => {
    document.querySelectorAll('main details').forEach((el) => el.setAttribute('open', ''))
  })
  await page.waitForTimeout(200)
}

const browser = await chromium.launch()

/* 1. Presentation mode survives navigation and exits cleanly. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/the-loop?present=1`, { waitUntil: 'networkidle' })
  const bar = page.getByRole('complementary', { name: 'Presentation controls' })
  check('present=1 shows the presentation bar', await bar.isVisible())
  await waitForSteps(page)
  await openDeeper(page)
  check('presenting shows ownership tags', await page.getByText('leads', { exact: false }).first().isVisible())

  // Navigate via an in-app link that carries no query string.
  await page.goto(`${LEARN}/the-harness`, { waitUntil: 'networkidle' })
  check('flag survives a link with no query string', await bar.isVisible())

  const beforeExit = await page.evaluate(() => localStorage.getItem('trust-is-not-a-vibe:v1'))
  await page.getByRole('button', { name: /Exit/ }).click()
  await page.waitForTimeout(200)
  check('Exit leaves presentation mode', !(await bar.isVisible()))
  const afterExit = await page.evaluate(() => localStorage.getItem('trust-is-not-a-vibe:v1'))
  check('presenting never wrote learner progress', beforeExit === afterExit, `${beforeExit} / ${afterExit}`)
  await ctx.close()
}

/* 2. Specimen machine layer: locked when self-paced, open when presenting. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/looks-right`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'See it')
  check(
    'See it keeps the three idea stills in The idea',
    (await page.locator('[data-trust-idea-still]').count()) === 0
  )
  check('See it shows the enrollment specimen', await page.getByText('Send 120 messages').isVisible())
  const seeIntro = page.getByText('You decide whether it may act.')
  const seeCard = page.locator('figure').filter({ hasText: 'Specimen' }).first()
  const selfIntroBox = await seeIntro.boundingBox()
  const selfCardBox = await seeCard.boundingBox()
  check(
    'See it places the intro to the left of the card',
    Boolean(selfIntroBox && selfCardBox && selfIntroBox.x + selfIntroBox.width <= selfCardBox.x + 16),
    `${Math.round(selfIntroBox?.x ?? 0)}+${Math.round(selfIntroBox?.width ?? 0)} / ${Math.round(selfCardBox?.x ?? 0)}`
  )
  const layerBtn = page.getByRole('button', { name: /What it would send/ }).first()
  await layerBtn.scrollIntoViewIfNeeded()
  const lockedLabel = await layerBtn.textContent()
  check('machine layer is locked before voting', /locked/i.test(lockedLabel ?? ''), lockedLabel?.trim())

  await openPortion(page, 'Try it')
  check('self-paced Try it shows the enrollment specimen', await page.getByText('Send 120 messages').isVisible())
  check('self-paced Try it keeps idea stills out', (await page.locator('[data-trust-idea-still]').count()) === 0)

  await page.goto(`${LEARN}/looks-right?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'See it')
  const presentBtn = page.getByRole('button', { name: /What it would send/ }).first()
  await revealInPortion(page, presentBtn)
  await presentBtn.scrollIntoViewIfNeeded()
  const openLabel = await presentBtn.textContent()
  check('presenting unlocks the machine layer', !/locked/i.test(openLabel ?? ''), openLabel?.trim())
  await presentBtn.click()
  await page.waitForTimeout(200)
  const request = page.locator('[data-trust-specimen-request]').first()
  await request.waitFor({ state: 'visible', timeout: 10000 })
  const requestSize = parseFloat(await request.evaluate((el) => getComputedStyle(el).fontSize))
  check('presenting request body is room-readable', requestSize >= 20, String(requestSize))
  await page.getByRole('button', { name: /What you see/ }).first().click()
  await page.waitForTimeout(200)
  const presentIntro = page.getByText('You decide whether it may act.')
  const presentCard = page.locator('figure').filter({ hasText: 'Specimen' }).first()
  const presentIntroSize = parseFloat(await presentIntro.evaluate((el) => getComputedStyle(el).fontSize))
  const presentIntroBox = await presentIntro.boundingBox()
  const presentCardBox = await presentCard.boundingBox()
  check('the presenting See it intro is room-readable', presentIntroSize >= 30, String(presentIntroSize))
  check(
    'presenting See it keeps the intro left of the card',
    Boolean(presentIntroBox && presentCardBox && presentIntroBox.x + presentIntroBox.width <= presentCardBox.x + 16),
    `${Math.round(presentIntroBox?.x ?? 0)}+${Math.round(presentIntroBox?.width ?? 0)} / ${Math.round(presentCardBox?.x ?? 0)}`
  )
  check(
    'the presenting card uses the stage',
    Boolean(presentCardBox && presentCardBox.width >= 600),
    String(Math.round(presentCardBox?.width ?? 0))
  )
  const isolate = page.getByRole('button', { name: 'View the card' })
  await isolate.scrollIntoViewIfNeeded()
  check('See it offers an isolated card preview', await isolate.isVisible())
  await isolate.click()
  await page.waitForTimeout(200)
  check(
    'isolated preview hides the See it intro',
    !(await page.getByText('You decide whether it may act.').isVisible())
  )
  check('isolated preview keeps the enrollment specimen', await page.getByText('Send 120 messages').isVisible())
  check('isolated preview puts no idea stills on See it', (await page.locator('[data-trust-idea-still]').count()) === 0)
  const isolatedCard = await page.locator('figure').filter({ hasText: 'Specimen' }).first().boundingBox()
  check(
    'the isolated card uses more of the stage',
    Boolean(isolatedCard && presentCardBox && isolatedCard.width >= presentCardBox.width - 8),
    `${Math.round(isolatedCard?.width ?? 0)} / ${Math.round(presentCardBox?.width ?? 0)}`
  )
  await page.keyboard.press('Escape')
  await page.waitForTimeout(200)
  check(
    'Escape restores the See it words',
    await page.getByText('You decide whether it may act.').isVisible()
  )

  await openPortion(page, 'Try it')
  check('Try it shows the enrollment specimen', await page.getByText('Send 120 messages').isVisible())
  check('Try it keeps idea stills out', (await page.locator('[data-trust-idea-still]').count()) === 0)
  const tryStageText = await page.locator('[data-trust-card-stage]').innerText()
  const agentHits = (tryStageText.match(/enrollment agent/gi) ?? []).length
  check('Try it does not triple enrollment agent', agentHits <= 1, String(agentHits))
  check(
    'Try it does not restack the See it intro',
    (await page.locator('[data-trust-card-copy]').getByText('You decide whether it may act.').count()) === 0
  )
  const tryHint = page.locator('[data-trust-card-copy] [data-trust-try-hint]')
  const tryCard = page.locator('[data-trust-card-object] figure').filter({ hasText: 'Specimen' }).first()
  const tryHintBox = await tryHint.boundingBox()
  const tryCardBox = await tryCard.boundingBox()
  check(
    'Try it places the hint to the left of the card',
    Boolean(tryHintBox && tryCardBox && tryHintBox.x + tryHintBox.width <= tryCardBox.x + 16),
    `${Math.round(tryHintBox?.x ?? 0)}+${Math.round(tryHintBox?.width ?? 0)} / ${Math.round(tryCardBox?.x ?? 0)}`
  )
  const tryIsolate = page.getByRole('button', { name: 'View the card' })
  await tryIsolate.scrollIntoViewIfNeeded()
  await tryIsolate.click()
  await page.waitForTimeout(200)
  check('Try it isolated hides the vote column', (await page.locator('[data-trust-card-copy]').count()) === 0)
  check('Try it isolated keeps the specimen', await page.getByText('Send 120 messages').isVisible())
  await page.getByRole('button', { name: 'Back to the text' }).click()
  await page.waitForTimeout(200)
  check('Try it back restores the vote column', await page.locator('[data-trust-card-copy]').isVisible())
  await ctx.close()
}

/* 2b. Presenting column is ~20% past the prior 83.2rem stage; self-paced stays 64rem. */
{
  const ctx = await browser.newContext({ viewport: { width: 1800, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/looks-right?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  const presentWidth = await page.locator('[data-trust-present-gutter]').evaluate((el) => el.getBoundingClientRect().width)
  check(
    'the presenting column is about 20% wider than 83.2rem',
    presentWidth >= 1550 && presentWidth <= 1650,
    String(Math.round(presentWidth))
  )
  await ctx.close()
}

{
  const ctx = await browser.newContext({ viewport: { width: 1800, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/looks-right`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  const selfWidth = await page.locator('[data-trust-learn-column]').evaluate((el) => el.getBoundingClientRect().width)
  check(
    'self-paced column stays on the 64rem measure',
    selfWidth >= 1000 && selfWidth <= 1100,
    String(Math.round(selfWidth))
  )
  await ctx.close()
}

/* 3. Keyboard reach and visible focus on the new eval interactions. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/the-loop`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openDeeper(page)

  const node = page.getByRole('button', { name: /Graders/ }).first()
  await node.scrollIntoViewIfNeeded()
  await node.focus()
  await page.waitForTimeout(350)
  const ring = await node.evaluate((el) => {
    const s = getComputedStyle(el)
    return { width: s.outlineWidth, style: s.outlineStyle, shadow: s.boxShadow }
  })
  const hasRing = ring.style !== 'none' || (ring.shadow && ring.shadow !== 'none')
  check('anatomy node shows a visible focus ring', Boolean(hasRing), JSON.stringify(ring))

  await page.keyboard.press('Enter')
  await page.waitForTimeout(250)
  check(
    'Enter selects the node and reveals its definition',
    (await node.getAttribute('aria-pressed')) === 'true'
  )

  await openDeeper(page)
  const probe = page.getByRole('button', { name: 'Check it in code', exact: true }).first()
  await probe.scrollIntoViewIfNeeded()
  await probe.focus()
  await page.keyboard.press('Space')
  await page.waitForTimeout(250)
  const live = page.locator('[aria-live="polite"]')
  check('scoring choice announces feedback', (await live.count()) > 0)
  await ctx.close()
}

/* 4. Required path completes without opening Go deeper, and persists. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/transfer`, { waitUntil: 'networkidle' })
  await waitForSteps(page)

  const openDetails = await page.locator('details[open]').count()
  check('Go deeper starts closed', openDetails === 0, `${openDetails} open`)

  await openPortion(page, 'Try it')
  await page.getByRole('button', { name: /^Allow/ }).first().click()
  await openPortion(page, 'Check it')
  for (let i = 0; i < 5; i += 1) {
    const suggest = page.getByRole('button', { name: 'Use the suggestion' }).first()
    await suggest.scrollIntoViewIfNeeded()
    await suggest.click()
    await page.waitForTimeout(120)
  }
  const remaining = await page.getByRole('button', { name: 'Use the suggestion' }).count()
  check('all five plan fields fill', remaining === 0, `${remaining} unfilled`)
  check(
    'plan completion is confirmed to the learner',
    await page.getByText('That is an evaluation plan', { exact: false }).isVisible()
  )

  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('trust-is-not-a-vibe:v1') ?? '{}'))
  check('Transfer is marked complete', (stored.completedChapters ?? []).includes('transfer'))

  await page.reload({ waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'Check it')
  const afterReload = await page.getByRole('button', { name: 'Use the suggestion' }).count()
  check('plan survives reload', afterReload === 0, `${afterReload} unfilled`)
  await ctx.close()
}

/* 5. The Four Lenses criterion reaches The Harness. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/the-harness`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openDeeper(page)
  check(
    'no criterion yet shows the fallback and a way back',
    await page.getByRole('link', { name: 'Four Lenses' }).first().isVisible()
  )

  const sentence = 'The confirmed date must come from the calendar record.'
  await page.evaluate((needToSee) => {
    localStorage.setItem(
      'trust-is-not-a-vibe:v1',
      JSON.stringify({ role: 'pm', needToSee, needToSeeRole: 'pm', completedChapters: [] })
    )
  }, sentence)
  await page.reload({ waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openDeeper(page)
  check('the learner criterion appears in The Harness', await page.getByText(sentence).isVisible())

  await page.getByRole('button', { name: 'Code check', exact: true }).first().click()
  await page.waitForTimeout(200)
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('trust-is-not-a-vibe:v1') ?? '{}'))
  check('the assigned grader is saved', saved.criterionGrader === 'code', String(saved.criterionGrader))
  await ctx.close()
}

/* 6. Reduced motion. */
{
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: 'reduce',
  })
  const page = await ctx.newPage()
  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  await page.goto(`${LEARN}/the-harness`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'See it')
  await completeGoldenSet(page)
  const compare = page.getByRole('button', { name: 'Compare case by case' })
  check('reduced motion can page to the regression compare', await pageUntilHarness(page, compare))
  await compare.click()
  await page.waitForTimeout(300)
  check('reduced motion still reveals the comparison', await page.getByText('regression', { exact: false }).first().isVisible())
  check('no console errors under reduced motion', errors.length === 0, errors[0] ?? '')
  await ctx.close()
}

/* 7. Keyboard stepping, on every page that hosts steps. */
{
  const pages = [
    ['overview', `${OVERVIEW}?present=1`],
    ['looks-right', `${LEARN}/looks-right?present=1`],
    ['four-lenses', `${LEARN}/four-lenses?present=1`],
    ['seeded-failures', `${LEARN}/seeded-failures?present=1`],
    ['the-loop', `${LEARN}/the-loop?present=1`],
    ['the-harness', `${LEARN}/the-harness?present=1`],
    ['transfer', `${LEARN}/transfer?present=1`],
  ]

  for (const [name, url] of pages) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    const errors = []
    page.on('pageerror', (error) => errors.push(String(error).slice(0, 160)))
    await page.goto(url, { waitUntil: 'networkidle' })
    await waitForSteps(page)

    const startUrl = page.url()
    const total = Number(
      await page.getAttribute('[data-trust-steps]', 'data-trust-steps')
    )
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(700)

    const state = await page.evaluate(() => ({
      focusedIsStep: Boolean(document.activeElement?.closest('[data-trust-step]')),
      current: document.querySelectorAll('[data-trust-step-current]').length,
    }))
    check(`${name}: ArrowRight announces step 1 of ${total}`, /^Step 1 of \d+\./.test(await announcement(page)))
    check(`${name}: focus lands on the step`, state.focusedIsStep)
    check(`${name}: exactly one step reads as current`, state.current === 1, String(state.current))

    // seeded-failures has a single section until the failures are revealed.
    if (total > 1) {
      let now = await announcement(page)
      for (let i = 0; i < 12 && !/^Step 2 of \d+\./.test(now); i += 1) {
        await page.keyboard.press('ArrowRight')
        await page.waitForTimeout(250)
        now = await announcement(page)
      }
      check(`${name}: advances to step 2`, /^Step 2 of \d+\./.test(now), now)

      await page.keyboard.press('ArrowLeft')
      await page.waitForTimeout(500)
      check(`${name}: ArrowLeft goes back`, /^Step 1 of \d+\./.test(await announcement(page)))
    }

    await page.keyboard.press('ArrowLeft')
    await page.waitForTimeout(400)
    check(`${name}: ArrowLeft at step 1 stays put`, page.url() === startUrl)

    await page.keyboard.press('End')
    await page.waitForTimeout(700)
    const end = (await announcement(page)).match(/^Step (\d+) of (\d+)\./)
    check(`${name}: End jumps to the last step`, Boolean(end) && end[1] === end[2], end?.[0] ?? 'no match')

    await page.keyboard.press('Home')
    await page.waitForTimeout(500)
    check(`${name}: Home returns to step 1`, /^Step 1 of \d+\./.test(await announcement(page)))

    check(`${name}: stepping throws nothing`, errors.length === 0, errors[0] ?? '')
    await ctx.close()
  }
}

/* 8. Text fields keep their keys. Four Lenses, transfer, and the harness all have them. */
{
  for (const name of ['four-lenses', 'transfer', 'the-harness']) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    // The Four Lenses field stays disabled until a seat is chosen, so seed one.
    await page.addInitScript((chapter) => {
      const seed = { role: 'pm', completedChapters: [] }
      if (chapter === 'transfer') seed.transferVote = 'allow'
      if (chapter === 'the-harness') {
        seed.controlMatches = {
          'unsupported-date': 'ground',
          'roster-mismatch': 'validate',
          'fabricated-forecast': 'ground',
          'draft-only-send': 'restrict',
          'auto-remove-harm': 'approve',
          'no-escalation': 'approve',
        }
      }
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify(seed))
    }, name)
    await page.goto(`${LEARN}/${name}?present=1`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    if (name === 'four-lenses') await openPortion(page, 'Try it')
    if (name === 'transfer' || name === 'the-harness') await openPortion(page, 'Check it')
    // Some fields sit in a collapsed panel, which cannot receive keys.
    await page.evaluate(() => {
      document.querySelectorAll('details').forEach((el) => el.setAttribute('open', ''))
    })
    const field = page
      .locator('input[type="text"]:visible:not([disabled]), textarea:visible:not([disabled])')
      .first()
    // Check it now opens on the seat question; the writing field is the next portion.
    if (name === 'four-lenses' || name === 'transfer' || name === 'the-harness') {
      await revealInPortion(page, field)
    }
    if ((await field.count()) === 0) {
      check(`${name}: has a text field to guard`, false, 'none found')
      await ctx.close()
      continue
    }
    await field.scrollIntoViewIfNeeded()
    await field.click()
    const before = await announcement(page)
    await page.keyboard.type('ab cd')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(400)
    check(`${name}: space reaches the field`, (await field.inputValue()).includes('ab cd'))
    check(`${name}: arrows do not step while typing`, (await announcement(page)) === before)
    await ctx.close()
  }
}

/* 9. Leaving a chapter takes a confirming press. Self-paced never steps. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/looks-right?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await page.keyboard.press('End')
  await page.waitForTimeout(600)
  const here = page.url()
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(700)
  check('the first press past the end stays in the chapter', page.url() === here)
  check('and says another press will continue', /Press again to continue/.test(await announcement(page)))
  await page.keyboard.press('ArrowRight')
  await page.waitForURL(/four-lenses/, { timeout: 15000 }).catch(() => {})
  check('the confirming press enters the next chapter', page.url().includes('/four-lenses'), page.url())
  await ctx.close()
}
{
  /*
    seeded-failures holds Check it until the failures are revealed, so the end
    of the list is not the end of the chapter. Stepping must not carry the room
    out of an exercise it is still working through.
  */
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/seeded-failures?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  const here = page.url()
  await page.keyboard.press('End')
  await page.waitForTimeout(600)
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(700)
  check('the last visible portion is not enough to step out of the chapter', page.url() === here, page.url())
  check(
    'and names the hidden failures instead of a generic end',
    /planted failures are still hidden/.test(await announcement(page)),
    await announcement(page)
  )
  await ctx.close()
}
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/looks-right`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  await page.keyboard.press('ArrowRight')
  await page.keyboard.press('End')
  await page.waitForTimeout(500)
  const quiet = await page.evaluate(() => ({
    current: document.querySelectorAll('[data-trust-step-current]').length,
    live: [...document.querySelectorAll('[role="status"][aria-live="polite"]')]
      .map((node) => node.textContent?.trim())
      .filter(Boolean).length,
  }))
  check(
    'self-paced reading ignores the stepping keys',
    quiet.current === 0 && quiet.live === 0,
    JSON.stringify(quiet)
  )
  await ctx.close()
}

/* 10. The bar makes stepping and depth discoverable without the keyboard. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/the-loop?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  const bar = page.getByRole('complementary', { name: 'Presentation controls' })

  check(
    'the bar names the chapter during the transition',
    await bar.locator('p').filter({ hasText: /^The Loop/ }).first().isVisible()
  )
  const startClock = bar.getByRole('button', { name: 'Start clock' })
  check('the bar offers a start-clock control', await startClock.isVisible())
  await startClock.click()
  await page.waitForTimeout(600)
  check('starting the clock shows elapsed time', await bar.getByText(/^\d+:\d{2}$/).first().isVisible())
  check('the clock names the current section window', await bar.getByText('15:00–19:30').isVisible())
  await bar.getByRole('button', { name: /Stop the clock/ }).click()
  check('stopping the clock returns the start control', await startClock.isVisible())

  await bar.getByRole('button', { name: 'Next section' }).click()
  await page.waitForTimeout(500)
  check('the Next button steps', /^Step 1 of \d+\./.test(await announcement(page)))
  const counter = bar.locator('p').filter({ hasText: /\d+ \/ \d+/ }).first()
  check('the bar shows a step counter', await counter.isVisible(), (await counter.textContent())?.trim())
  await bar.getByRole('button', { name: 'Next section' }).click()
  await page.waitForTimeout(500)
  await bar.getByRole('button', { name: 'Previous section' }).click()
  await page.waitForTimeout(500)
  check('the Previous button steps back', /^Step 1 of \d+\./.test(await announcement(page)))

  const depth = bar.getByRole('button', { name: /depth/i })
  const closedCount = await page.locator('details').count()
  await depth.click()
  await page.waitForTimeout(400)
  const openCount = await page.locator('details[open]').count()
  check('Open depth opens every panel at once', openCount === closedCount && openCount > 0, `${openCount}/${closedCount}`)
  check('the depth toggle reports its state', (await depth.getAttribute('aria-pressed')) === 'true')
  await depth.click()
  await page.waitForTimeout(400)
  check('Close depth collapses them again', (await page.locator('details[open]').count()) === 0)
  await ctx.close()
}

/* 11. Stepping under reduced motion. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' })
  const page = await ctx.newPage()
  const errors = []
  page.on('pageerror', (error) => errors.push(String(error).slice(0, 160)))
  await page.goto(`${LEARN}/seeded-failures?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(500)
  check('reduced motion still steps', /^Step 1 of \d+\./.test(await announcement(page)))
  check('reduced motion throws nothing', errors.length === 0, errors[0] ?? '')
  await ctx.close()
}

/* 12. Course chrome: Present, dormant clock, exclusive focus, rail. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/looks-right`, { waitUntil: 'networkidle' })
  await waitForSteps(page)

  const clockBar = page.getByRole('complementary', { name: 'Course clock' })
  check('self-paced pages show the course clock', await clockBar.isVisible())
  check('the dormant clock names the budgeted window', await clockBar.getByText('Looks Right').isVisible())
  check('the dormant clock shows the chapter span', await clockBar.getByText('2:30–6:30').isVisible())
  const presentBtn = clockBar.getByRole('button', { name: 'Present' })
  check('Present is visible without a query string', await presentBtn.isVisible())

  const expanded = page.locator('[data-trust-step][aria-expanded="true"]')
  check('exactly one portion is open', (await expanded.count()) === 1, String(await expanded.count()))
  check(
    'The idea is the open portion on arrival',
    (await expanded.filter({ hasText: 'The idea' }).count()) === 1
  )
  check(
    'The idea marks working vocabulary',
    (await page.locator('[data-trust-idea-term]').count()) > 0,
    String(await page.locator('[data-trust-idea-term]').count())
  )
  check(
    'The idea includes a teaching diagram',
    (await page.locator('[data-trust-idea-diagram="prompt-output"]').count()) === 1
  )
  check(
    'The idea contains the Kahneman quote',
    await page.locator('[data-trust-idea-quote]').getByText('What you see is all there is.').isVisible()
  )
  const quoteAfterDiagram = await page.evaluate(() => {
    const diagram = document.querySelector('[data-trust-idea-diagram="prompt-output"]')
    const quote = document.querySelector('[data-trust-idea-quote]')
    if (!diagram || !quote) return false
    return Boolean(diagram.compareDocumentPosition(quote) & Node.DOCUMENT_POSITION_FOLLOWING)
  })
  check('the Kahneman quote sits after the idea diagram', quoteAfterDiagram)
  const railLabels = await page
    .getByRole('navigation', { name: 'On this page' })
    .first()
    .getByRole('button')
    .allTextContents()
  check(
    'the rail stays Idea / See it / Try it / Check it',
    railLabels
      .map((label) =>
        label
          .replace(/^\d+/, '')
          .replace(/\(current section\)/g, '')
          .replace(/\s+/g, ' ')
          .trim()
      )
      .join(' / ') === 'The idea / See it / Try it / Check it',
    railLabels.join(' | ')
  )
  check(
    'The idea shows the three Cohort Studio stills',
    (await page.locator('[data-trust-idea-still]').count()) === 3,
    String(await page.locator('[data-trust-idea-still]').count())
  )
  const ideaStillSrcs = await page.locator('[data-trust-idea-still] img').evaluateAll((imgs) =>
    imgs.map((img) => img.getAttribute('src') ?? '')
  )
  check(
    'the agent still URL is on The idea',
    ideaStillSrcs.some((src) => src.includes('cohort-studio-ai-agent-action-image_oic2tf')),
    ideaStillSrcs.join(' | ')
  )
  check(
    'the card-suggestion still URL is on The idea',
    ideaStillSrcs.some((src) => src.includes('cohort-studio-ai-agent-action-image-suggestion_oino5y')),
    ideaStillSrcs.join(' | ')
  )
  const ideaStillLoaded = await page.locator('[data-trust-idea-still] img').evaluateAll((imgs) =>
    imgs.map((img) => ({
      id: img.closest('[data-trust-idea-still]')?.getAttribute('data-trust-idea-still'),
      w: img.naturalWidth,
      complete: img.complete,
    }))
  )
  check(
    'all three idea stills have painted pixels',
    ideaStillLoaded.length === 3 && ideaStillLoaded.every((img) => img.complete && img.w > 0),
    JSON.stringify(ideaStillLoaded)
  )
  check(
    'the product sentence is marked',
    (await page.locator('[data-trust-idea-term]').filter({ hasText: 'Cohort Studio is a made-up enrollment product' }).count()) === 1
  )
  check(
    'the agent sentence is marked',
    (await page.locator('[data-trust-idea-term]').filter({ hasText: 'An agent inside it just wrote what to do with a cohort' }).count()) === 1
  )
  check(
    'the October sentence is marked',
    (await page.locator('[data-trust-idea-term]').filter({ hasText: 'Confirm October 6, email 120 people, drop the ones it calls quiet' }).count()) === 1
  )
  const stillBox = await page.locator('[data-trust-idea-still]').first().boundingBox()
  check(
    'the idea still is wide enough to read',
    Boolean(stillBox && stillBox.width >= 480),
    String(stillBox?.width ?? 0)
  )
  await page
    .locator('[data-trust-idea-term]')
    .filter({ hasText: 'Cohort Studio is a made-up enrollment product' })
    .click()
  check(
    'a marked term opens its definition',
    await page.getByText('A fictional enrollment tool. Not a live dashboard.').isVisible()
  )
  await page
    .locator('[data-trust-idea-term]')
    .filter({ hasText: 'An agent inside it just wrote what to do with a cohort' })
    .click()
  check(
    'opening another term closes the previous definition',
    (await page.locator('[data-trust-idea-def]').count()) === 1
  )
  check(
    'the new term’s definition is the one that stays open',
    await page.getByText('The model proposed an action. That is a draft, not permission to act.').isVisible()
  )
  check(
    'the previous definition is gone',
    (await page.getByText('A fictional enrollment tool. Not a live dashboard.').count()) === 0
  )
  check('the open accordion is marked as the focus', (await page.locator('[data-trust-panel-open]').count()) === 1)

  const brief = page.locator('[data-trust-brief]')
  check('Your seat is collapsed on arrival', (await brief.getAttribute('aria-expanded')) === 'false')
  check('Do this now stays inside the closed brief', (await page.getByText('Do this now', { exact: true }).count()) === 0)
  check('the in-page rail does not list Your seat', (await page.getByRole('navigation', { name: 'On this page' }).getByRole('button', { name: /Your seat/ }).count()) === 0)

  await brief.click()
  await page.waitForTimeout(200)
  check('opening Your seat expands the brief', (await brief.getAttribute('aria-expanded')) === 'true')
  check(
    'opening Your seat closes the lesson portions',
    (await page.locator('[data-trust-step][aria-expanded="true"]').count()) === 0,
    String(await page.locator('[data-trust-step][aria-expanded="true"]').count())
  )
  check('Do this now is visible once the brief is open', await page.getByText('Do this now', { exact: true }).isVisible())

  await page.getByRole('button', { name: /^Product/ }).first().click()
  await page.waitForTimeout(200)
  await brief.click()
  await page.waitForTimeout(200)
  check('the closed brief names the picked seat', (await brief.innerText()).includes('Product'))
  check('the closed brief shows the seat stance', (await brief.innerText()).includes('Define what good means.'))

  await page.locator('[data-trust-step]').filter({ hasText: 'The idea' }).click()
  await page.waitForTimeout(200)
  check('opening The idea closes the brief', (await brief.getAttribute('aria-expanded')) === 'false')

  await openPortion(page, 'Try it')
  check('Try it shows the Product hint', await page.getByText('Is this outcome actually ready?').isVisible())
  check(
    'Try it shows the need-to-see prompt',
    await page.getByText('Name one thing you would need to see before this recommendation may act.').isVisible()
  )
  check(
    'Try it shows the calendar-row example',
    await page.getByText('A calendar row that says confirmed — not the card saying it.').isVisible()
  )
  await openPortion(page, 'Check it')
  check('Check it shows the Product question', await page.getByText('A finished-looking enrollment screen is:').isVisible())
  await page.locator('[data-trust-role-choice="a"]').click()
  check('a wrong choice is marked wrong', (await page.locator('[data-trust-role-check-result="wrong"]').count()) === 1)
  await page.locator('[data-trust-role-choice="b"]').click()
  check('the right Product answer is marked correct', (await page.locator('[data-trust-role-check-result="correct"]').count()) === 1)
  check(
    'the because line appears after a choice',
    await page.getByText('The card is the surface a teammate sees.').isVisible()
  )
  await openPortion(page, 'The idea')

  const rail = page.getByRole('navigation', { name: 'On this page' }).first()
  check('the in-page rail is visible on desktop', await rail.isVisible())
  await rail.getByRole('button', { name: /See it/ }).click()
  await page.waitForTimeout(400)
  check(
    'the rail opens See it and closes The idea',
    (await page.locator('[data-trust-step][aria-expanded="true"]').count()) === 1 &&
      (await page.locator('[data-trust-step][aria-expanded="true"]').filter({ hasText: 'See it' }).count()) === 1
  )

  await presentBtn.click()
  await page.waitForTimeout(400)
  const immersive = await page.evaluate(() => {
    const header = document.querySelector('header[data-site-chrome]')
    const footer = document.querySelector('footer[data-site-chrome]')
    const current = document.querySelector('[data-trust-step][aria-expanded="true"]')
    return {
      flag: document.documentElement.dataset.trustPresent === '1',
      headerHidden: header ? getComputedStyle(header).display === 'none' : false,
      footerHidden: footer ? getComputedStyle(footer).display === 'none' : false,
      ideaHeight: current?.getBoundingClientRect().height ?? 0,
      headerVar: getComputedStyle(document.documentElement).getPropertyValue('--site-header-height').trim(),
    }
  })
  check('Present sets the immersive flag', immersive.flag)
  check('Present hides the site header', immersive.headerHidden)
  check('Present hides the site footer', immersive.footerHidden)
  check('the open portion stays visible while presenting', immersive.ideaHeight > 20, String(immersive.ideaHeight))
  check(
    'presenting hides the other accordion cards',
    !(await page.locator('[data-trust-step]').filter({ hasText: 'The idea' }).isVisible())
  )
  check('immersive zeros the header offset', immersive.headerVar === '0px', immersive.headerVar)
  check(
    'the bar becomes presentation controls',
    await page.getByRole('complementary', { name: 'Presentation controls' }).isVisible()
  )

  await openPortion(page, 'Try it')
  check('presenting Try it still shows the enrollment card', await page.getByText('Send 120 messages').isVisible())
  const presentHint = page.locator('[data-trust-try-hint]').getByText('Is this outcome actually ready?')
  const presentHintSize = parseFloat(await presentHint.evaluate((el) => getComputedStyle(el).fontSize))
  check('the presenting Product hint is room-readable', presentHintSize >= 28, String(presentHintSize))
  const presentNeed = page
    .locator('[data-trust-try-hint]')
    .getByText('Name one thing you would need to see before this recommendation may act.')
  const presentNeedSize = parseFloat(await presentNeed.evaluate((el) => getComputedStyle(el).fontSize))
  check('the presenting need-to-see prompt is room-readable', presentNeedSize >= 28, String(presentNeedSize))
  const presentExample = page
    .locator('[data-trust-try-hint]')
    .getByText('A calendar row that says confirmed — not the card saying it.')
  const presentExampleSize = parseFloat(await presentExample.evaluate((el) => getComputedStyle(el).fontSize))
  check('the presenting calendar-row example is room-readable', presentExampleSize >= 28, String(presentExampleSize))
  const askBtn = page.getByRole('button', { name: /^Ask/ })
  check(
    'Ask still has a hover tint class',
    (await askBtn.getAttribute('class'))?.includes('hover:bg-amber-50') === true
  )
  await askBtn.evaluate((el) => el.scrollIntoView({ block: 'center' }))
  await page.getByRole('button', { name: /^Allow/ }).evaluate((el) => el.click())
  check(
    'Allow can be selected while presenting',
    (await page.getByRole('button', { name: /^Allow/ }).getAttribute('aria-pressed')) === 'true'
  )

  await openPortion(page, 'Check it')
  const presentCheckSize = parseFloat(
    await page.getByText('A finished-looking enrollment screen is:').evaluate((el) => getComputedStyle(el).fontSize)
  )
  check('the presenting Check it prompt stays room-readable', presentCheckSize >= 30, String(presentCheckSize))

  await page.getByRole('button', { name: 'Exit' }).click()
  await page.waitForTimeout(400)
  const restored = await page.evaluate(() => ({
    flag: document.documentElement.dataset.trustPresent === '1',
    headerDisplay: document.querySelector('header[data-site-chrome]')
      ? getComputedStyle(document.querySelector('header[data-site-chrome]')).display
      : 'missing',
  }))
  check('Exit clears the immersive flag', !restored.flag)
  check('Exit restores the site header', restored.headerDisplay !== 'none', restored.headerDisplay)
  await ctx.close()
}

/* 12b. Presenting pages through idea portions instead of showing them all. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/looks-right?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(400)
  const first = await page.locator('[data-trust-portion]').innerText()
  check('the first idea portion is on screen', /Cohort Studio/.test(first), first.slice(0, 80))
  check(
    'the first idea still is the product window',
    await page.locator('[data-trust-idea-still="looks-right-cohort-studio"]').isVisible()
  )
  await page
    .locator('[data-trust-idea-term]')
    .filter({ hasText: 'Cohort Studio is a made-up enrollment product' })
    .click()
  const presentIdeaDef = page.locator('[data-trust-idea-def]')
  check('a presenting idea term opens its definition', await presentIdeaDef.isVisible())
  const presentIdeaDefSize = parseFloat(await presentIdeaDef.evaluate((el) => getComputedStyle(el).fontSize))
  check('present idea definition is room-readable', presentIdeaDefSize >= 20, String(presentIdeaDefSize))
  check(
    'present idea definition shows the meaning',
    await page.getByText('A fictional enrollment tool. Not a live dashboard.').isVisible()
  )
  const presentIdeaDefBox = await presentIdeaDef.boundingBox()
  const presentIdeaStillBox = await page.locator('[data-trust-idea-still="looks-right-cohort-studio"]').boundingBox()
  check(
    'present idea definition sits above the still',
    Boolean(
      presentIdeaDefBox &&
        presentIdeaStillBox &&
        presentIdeaDefBox.y + presentIdeaDefBox.height <= presentIdeaStillBox.y + 8
    ),
    `${Math.round((presentIdeaDefBox?.y ?? 0) + (presentIdeaDefBox?.height ?? 0))} vs ${Math.round(presentIdeaStillBox?.y ?? 0)}`
  )
  await page.keyboard.press('Escape')
  await page.waitForTimeout(150)
  check('Escape closes the presenting idea definition', (await presentIdeaDef.count()) === 0)
  check('later idea sentences wait', !/An agent inside/.test(first) && !/That recommendation/.test(first))
  check(
    'later idea stills wait',
    (await page.locator('[data-trust-idea-still="looks-right-agent-action"]').count()) === 0
  )
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(300)
  const second = await page.locator('[data-trust-portion]').innerText()
  check('the next arrow opens the agent sentence', /An agent inside/.test(second), second.slice(0, 80))
  check(
    'the second idea still is the agent draft',
    await page.locator('[data-trust-idea-still="looks-right-agent-action"]').isVisible()
  )
  check('the announcement stays on The idea', /Step 1 of \d+\. The idea/.test(await announcement(page)))
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(250)
  const third = await page.locator('[data-trust-portion]').innerText()
  check('the third idea sentence is the October send', /October 6/.test(third) && /calls quiet/.test(third), third.slice(0, 80))
  check(
    'the third idea still is the finished card',
    await page.locator('[data-trust-idea-still="looks-right-card-suggestion"]').isVisible()
  )
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(250)
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(250)
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(300)
  check(
    'the teaching diagram pages after the stills',
    await page.locator('[data-trust-idea-diagram="prompt-output"]').isVisible()
  )
  check('the announcement still stays on The idea', /Step 1 of \d+\. The idea/.test(await announcement(page)))
  const diagramSlide = await page.locator('[data-trust-idea-diagram="prompt-output"]').boundingBox()
  check(
    'the presenting diagram is wide enough to read from the room',
    Boolean(diagramSlide && diagramSlide.width >= 720),
    String(diagramSlide?.width ?? 0)
  )
  check(
    'the presenting diagram is not in the sentence measure',
    (await page.locator('[data-trust-present-prose]').count()) === 0
  )
  check(
    'the folio still steps aside for the diagram',
    (await page.locator('figure').filter({ hasText: 'The map is not the territory' }).count()) === 0
  )
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(300)
  check(
    'after the diagram the next portion is Kahneman',
    await page.locator('[data-trust-idea-quote]').getByText('What you see is all there is.').isVisible()
  )
  check(
    'the Kahneman portion stays on The idea',
    /Step 1 of \d+\. The idea/.test(await announcement(page)),
    await announcement(page)
  )
  check(
    'the diagram yields for the quote',
    (await page.locator('[data-trust-idea-diagram="prompt-output"]').count()) === 0
  )
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(300)
  check(
    'ArrowRight from the quote enters See it',
    (await page.locator('[data-trust-step][aria-expanded="true"]').filter({ hasText: 'See it' }).count()) === 1
  )
  check(
    'See it is the step after the quote',
    /Step 2 of \d+\. See it/.test(await announcement(page)),
    await announcement(page)
  )
  await ctx.close()
}

/* 12c. Presenting can jump chapters and pick a seat; the room starts on all seats. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/looks-right`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await page.locator('[data-trust-brief]').click()
  await page.waitForTimeout(200)
  await page.getByRole('button', { name: /^Product/ }).first().click()
  await page.waitForTimeout(200)
  await page.getByRole('button', { name: 'Present' }).click()
  await page.waitForTimeout(400)
  const bar = page.getByRole('complementary', { name: 'Presentation controls' })
  const chapterTrigger = bar.getByRole('button', { name: /^Chapter:/ })
  const seatTrigger = bar.getByRole('button', { name: /^Seat:/ })
  check('Present defaults to All seats', (await seatTrigger.getAttribute('aria-label')) === 'Seat: All seats')
  await chapterTrigger.click()
  const chapters = page.getByRole('navigation', { name: 'Chapters' })
  check('the bar lists every chapter', (await chapters.getByRole('link').count()) === 7)
  check(
    'Looks Right is the current chapter',
    (await chapters.getByRole('link', { name: 'Chapter 1: Looks Right' }).getAttribute('aria-current')) === 'page'
  )
  await chapters.getByRole('link', { name: 'Chapter 4: The Loop' }).click()
  await page.waitForURL('**/learn/the-loop**', { timeout: 15000 })
  await waitForSteps(page)
  await bar.getByRole('button', { name: 'Chapter: The Loop' }).waitFor({ timeout: 15000 })
  check('a chapter jump keeps presenting', await bar.isVisible())
  check(
    'The Loop is the current chapter',
    (await bar.getByRole('button', { name: 'Chapter: The Loop' }).count()) === 1
  )
  check(
    'a chapter jump opens that chapter’s banner',
    await page.locator('[data-trust-present-transition]').getByText('The Loop').isVisible()
  )
  await bar.getByRole('button', { name: /^Seat:/ }).click()
  const seats = page.getByRole('group', { name: 'Seat' })
  await seats.getByRole('button', { name: 'Product' }).click()
  await page.waitForTimeout(200)
  check(
    'the bar can focus a seat',
    (await bar.getByRole('button', { name: 'Seat: Product' }).count()) === 1
  )
  check(
    'All seats is no longer the trigger once a seat is focused',
    (await bar.getByRole('button', { name: 'Seat: All seats' }).count()) === 0
  )
  await bar.getByRole('button', { name: /^Seat:/ }).click()
  await page.getByRole('group', { name: 'Seat' }).getByRole('button', { name: 'All seats' }).click()
  await page.waitForTimeout(200)
  check(
    'All seats can be restored from the bar',
    (await bar.getByRole('button', { name: 'Seat: All seats' }).count()) === 1
  )
  await ctx.close()
}

/* 12d. Present chapter arrival is a banner transition, not The idea. */
{
  const TRANSITION_SHOTS = join(process.cwd(), 'tmp', 'trust-present-transition')
  mkdirSync(TRANSITION_SHOTS, { recursive: true })

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.goto(`${LEARN}/looks-right?present=1`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    const banner = page.locator('[data-trust-present-transition]')
    check('looks-right?present=1 first paint is the chapter banner', await banner.isVisible())
    check(
      'looks-right?present=1 first paint is not The idea',
      !(await page.locator('[data-trust-step]').filter({ hasText: 'The idea' }).isVisible())
    )
    check('the Looks Right banner names the chapter', await banner.getByRole('heading', { name: /Looks Right/ }).isVisible())
    check('the Looks Right banner shows 1 of 6', await banner.getByText('1 of 6').isVisible())
    check('the Looks Right banner shows the budgeted clock', await banner.getByText('2:30–6:30').isVisible())
    check('the Looks Right banner has no quote', (await banner.locator('blockquote').count()) === 0)
    const bar = page.getByRole('complementary', { name: 'Presentation controls' })
    check(
      'the bar names Looks Right during the transition',
      await bar.locator('p').filter({ hasText: /^Looks Right/ }).first().isVisible()
    )
    check('the clock stays dormant on the banner', await bar.getByRole('button', { name: 'Start clock' }).isVisible())
    await page.screenshot({ path: join(TRANSITION_SHOTS, 'looks-right-banner.png') })

    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(400)
    check(
      'ArrowRight opens The idea',
      await page.locator('[data-trust-step][aria-expanded="true"]').filter({ hasText: 'The idea' }).isVisible()
    )
    check('ArrowRight dismisses the banner', (await page.locator('[data-trust-present-transition]').count()) === 0)
    check('The idea announcement follows the banner', /Step 1 of \d+\. The idea/.test(await announcement(page)))
    await page.screenshot({ path: join(TRANSITION_SHOTS, 'looks-right-idea.png') })

    await page.keyboard.press('ArrowLeft')
    await page.waitForTimeout(400)
    check('ArrowLeft from The idea returns to the banner', await page.locator('[data-trust-present-transition]').isVisible())
    check('ArrowLeft from The idea stays in the chapter', page.url().includes('/looks-right'))

    await page.getByRole('button', { name: 'Exit' }).click()
    await page.waitForTimeout(400)
    check('Exit present removes the in-deck banner', (await page.locator('[data-trust-present-transition]').count()) === 0)
    check(
      'Exit present leaves The idea as the open portion',
      (await page.locator('[data-trust-step][aria-expanded="true"]').filter({ hasText: 'The idea' }).count()) === 1
    )
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.goto(`${LEARN}/looks-right`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    check(
      'self-paced has no present transition',
      (await page.locator('[data-trust-present-transition]').count()) === 0
    )
    check(
      'self-paced still opens on The idea',
      (await page.locator('[data-trust-step][aria-expanded="true"]').filter({ hasText: 'The idea' }).count()) === 1
    )
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.goto(`${LEARN}/the-loop?present=1`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    const banner = page.locator('[data-trust-present-transition]')
    check('the-loop?present=1 first paint is its own banner', await banner.getByRole('heading', { name: /The Loop/ }).isVisible())
    check('the Loop banner shows 4 of 6', await banner.getByText('4 of 6').isVisible())
    check(
      'the Loop banner is not the Looks Right still',
      (await banner.getAttribute('data-trust-present-transition-slug')) === 'the-loop'
    )
    await page.screenshot({ path: join(TRANSITION_SHOTS, 'the-loop-banner.png') })
    await ctx.close()
  }
}

/* 13. Packet + full specimen must not overflow a phone width. */
{
  for (const slug of ['looks-right', 'four-lenses', 'seeded-failures', 'the-loop', 'the-harness', 'transfer']) {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } })
    const page = await ctx.newPage()
    await page.goto(`${LEARN}/${slug}`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    const ideaOverflow = await page.evaluate(() => {
      window.scrollTo(1000, 0)
      const scrolled = window.scrollX
      window.scrollTo(0, 0)
      return scrolled
    })
    check(`${slug} idea does not scroll sideways at 390`, ideaOverflow === 0, String(ideaOverflow))
    await openPortion(page, 'See it')
    const overflow = await page.evaluate(() => {
      window.scrollTo(1000, 0)
      const scrolled = window.scrollX
      window.scrollTo(0, 0)
      return scrolled
    })
    check(`${slug} does not scroll sideways at 390`, overflow === 0, String(overflow))
    await ctx.close()
  }
}

/* 14. Overview Present isolates one band; self-paced still scrolls. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${OVERVIEW}?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(700)

  const first = page.locator('[data-trust-step]:visible')
  check('overview present: one visible band after first step', (await first.count()) === 1, String(await first.count()))
  check(
    'overview present: six overview steps',
    (await page.getAttribute('[data-trust-steps]', 'data-trust-steps')) === '6',
    await page.getAttribute('[data-trust-steps]', 'data-trust-steps')
  )
  const firstText = await first.first().innerText()
  check(
    'overview present: lands on What this is / 01',
    /01/.test(firstText) && /A 30-minute lab/.test(firstText),
    firstText.slice(0, 80)
  )

  const fact = (label) => page.locator(`[data-trust-overview-fact="${label}"]`)
  check('overview present: first fact is For', await fact('For').isVisible())
  check('overview present: You do waits on the first fact', !(await fact('You do').isVisible()))
  check('overview present: You leave with waits on the first fact', !(await fact('You leave with').isVisible()))
  const forLabelSize = await fact('For').locator('[data-trust-overview-fact-label]').evaluate((el) => getComputedStyle(el).fontSize)
  check('overview present: For label is at least 24px', parseFloat(forLabelSize) >= 24, forLabelSize)

  mkdirSync(FACT_SHOTS, { recursive: true })
  await page.locator('#what-this-is').screenshot({ path: join(FACT_SHOTS, '01-for.png') })

  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(400)
  check('overview present: ArrowRight reveals You do', await fact('You do').isVisible())
  check('overview present: For hides after the next fact', !(await fact('For').isVisible()))
  check(
    'overview present: fact pages stay on What this is',
    /Step 1 of \d+\./.test(await announcement(page)),
    await announcement(page)
  )
  await page.locator('#what-this-is').screenshot({ path: join(FACT_SHOTS, '02-you-do.png') })

  await page.keyboard.press('ArrowLeft')
  await page.waitForTimeout(400)
  check('overview present: ArrowLeft returns For', await fact('For').isVisible())
  check('overview present: You do hides when going back', !(await fact('You do').isVisible()))

  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(400)
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(400)
  check('overview present: third fact is Time', await fact('Time').isVisible())
  check('overview present: You do hides on Time', !(await fact('You do').isVisible()))
  await page.locator('#what-this-is').screenshot({ path: join(FACT_SHOTS, '03-time.png') })

  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(400)
  check('overview present: fourth fact is You leave with', await fact('You leave with').isVisible())
  check('overview present: Time hides on the last fact', !(await fact('Time').isVisible()))
  await page.locator('#what-this-is').screenshot({ path: join(FACT_SHOTS, '04-you-leave-with.png') })

  let now = await announcement(page)
  for (let i = 0; i < 12 && !/^Step 2 of \d+\./.test(now); i += 1) {
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(250)
    now = await announcement(page)
  }
  const second = page.locator('[data-trust-step]:visible')
  check('overview present: one visible band on step 2', (await second.count()) === 1, String(await second.count()))
  const secondText = await second.first().innerText()
  check(
    'overview present: step 2 is the question',
    /Should this AI output be allowed to act/.test(secondText),
    secondText.slice(0, 80)
  )
  check('overview present: 01 is hidden on step 2', !(await page.locator('#what-this-is').isVisible()))

  const verdict = (id) => page.locator(`[data-trust-overview-verdict="${id}"]`)
  const hint = (id) => page.locator(`[data-trust-overview-verdict-hint="${id}"]`)
  check(
    'overview present: question has three verdict portions',
    (await page.locator('#the-question [data-trust-portion-count]').getAttribute('data-trust-portion-count')) === '3',
    await page.locator('#the-question [data-trust-portion-count]').getAttribute('data-trust-portion-count')
  )
  check('overview present: question opens on Allow', await verdict('allow').isVisible())
  check('overview present: Allow hint is visible', await hint('allow').isVisible())
  check('overview present: Ask waits on Allow', !(await verdict('ask').isVisible()))
  check('overview present: Deny waits on Allow', !(await verdict('deny').isVisible()))
  const allowHintSize = await hint('allow').evaluate((el) => getComputedStyle(el).fontSize)
  check('overview present: Allow hint is at least 20px', parseFloat(allowHintSize) >= 20, allowHintSize)
  mkdirSync(QUESTION_SHOTS, { recursive: true })
  await page.locator('#the-question').screenshot({ path: join(QUESTION_SHOTS, 'present-allow.png') })

  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(400)
  check('overview present: ArrowRight reveals Ask', await verdict('ask').isVisible())
  check('overview present: Ask hint is visible', await hint('ask').isVisible())
  check('overview present: Allow hides on Ask', !(await verdict('allow').isVisible()))
  check('overview present: Deny still waits on Ask', !(await verdict('deny').isVisible()))
  check(
    'overview present: Ask stays on the question step',
    /Step 2 of 6/.test(await announcement(page)),
    await announcement(page)
  )

  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(400)
  check('overview present: ArrowRight reveals Deny', await verdict('deny').isVisible())
  check('overview present: Deny hint is visible', await hint('deny').isVisible())
  check('overview present: Ask hides on Deny', !(await verdict('ask').isVisible()))
  check(
    'overview present: Deny stays on the question step',
    /Step 2 of 6/.test(await announcement(page)),
    await announcement(page)
  )
  await page.locator('#the-question').screenshot({ path: join(QUESTION_SHOTS, 'present-deny.png') })

  const rail = page.getByRole('navigation', { name: 'On this page' })
  check('overview present: the left rail stays', await rail.isVisible())
  await rail.getByRole('button', { name: /Why it matters/ }).click()
  await page.waitForTimeout(400)
  const jumped = page.locator('[data-trust-step]:visible')
  check('overview present: a rail jump keeps one band', (await jumped.count()) === 1, String(await jumped.count()))
  check(
    'overview present: the rail opens Why it matters',
    /One person cannot be five roles/.test(await jumped.first().innerText())
  )
  check(
    'overview present: why stays inside the six-step overview',
    /Step 3 of 6/.test(await announcement(page)),
    await announcement(page)
  )

  const whyBeat = (id) => page.locator(`[data-trust-overview-why="${id}"]`)
  const whyVisible = page.locator('[data-trust-overview-why]:visible')
  check('overview present: why shows one beat after the rail jump', (await whyVisible.count()) === 1, String(await whyVisible.count()))
  check('overview present: why opens on the title beat', await whyBeat('thesis').isVisible())
  check('overview present: the model proposes waits', !(await whyBeat('proposes').isVisible()))
  check('overview present: walk-out 01 waits on the title beat', !(await page.locator('[data-trust-overview-outcome="01"]').isVisible()))
  check('overview present: walk-out 04 waits on the title beat', !(await page.locator('[data-trust-overview-outcome="04"]').isVisible()))

  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(350)
  const overviewCluster = page.locator('[data-trust-concept-constellation="overview-core"]')
  check('overview present: after the thesis the next portion is the constellation', await overviewCluster.isVisible())
  check('overview present: constellation shows Eval', await overviewCluster.getByRole('button', { name: 'Eval' }).isVisible())
  check('overview present: constellation shows Task', await overviewCluster.getByRole('button', { name: 'Task' }).isVisible())
  check('overview present: constellation shows Cases', await overviewCluster.getByRole('button', { name: 'Cases' }).isVisible())
  check('overview present: constellation shows Grader', await overviewCluster.getByRole('button', { name: 'Grader' }).isVisible())
  check('overview present: constellation starts empty', await overviewCluster.getByText('Choose a term.').isVisible())
  check('overview present: title beat hides on the constellation', !(await whyBeat('thesis').isVisible()))
  check('overview present: NIST waits after the constellation', (await page.locator('[data-trust-idea-quote]').count()) === 0)
  check('overview present: the model proposes still waits after the constellation', !(await whyBeat('proposes').isVisible()))
  check(
    'overview present: constellation stays on Why it matters',
    /Step 3 of 6/.test(await announcement(page)),
    await announcement(page)
  )

  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(350)
  check(
    'overview present: after the constellation the next portion is NIST',
    await page.locator('[data-trust-idea-quote]').getByText('AI systems are inherently socio-technical in nature.').isVisible()
  )
  check('overview present: title beat hides after the quote', !(await whyBeat('thesis').isVisible()))
  check('overview present: the model proposes still waits after NIST', !(await whyBeat('proposes').isVisible()))
  check(
    'overview present: NIST stays on Why it matters',
    /Step 3 of 6/.test(await announcement(page)),
    await announcement(page)
  )
  check(
    'overview present: NIST quote has no source link',
    (await page.locator('[data-trust-idea-quote] cite a').count()) === 0
  )

  mkdirSync(WHY_SHOTS, { recursive: true })
  await page.locator('#why-it-matters').screenshot({ path: join(WHY_SHOTS, '01-title.png') })

  const whyOrder = ['thesis', 'proposes', 'controls', 'authorizes', 'measure', 'walk-out', 'outcome-01']
  const whyShot = {
    proposes: '02-proposes.png',
    controls: '03-controls.png',
    authorizes: '04-authorizes.png',
    measure: '05-you-never-know.png',
    'outcome-01': '06-walk-out-01.png',
  }
  for (const id of whyOrder.slice(1)) {
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(350)
    check(`overview present: why pages to ${id}`, await whyBeat(id).isVisible())
    check(`overview present: why still shows one beat on ${id}`, (await whyVisible.count()) === 1, String(await whyVisible.count()))
    check(
      `overview present: why ${id} stays on step 3`,
      /Step 3 of 6/.test(await announcement(page)),
      await announcement(page)
    )
    if (id === 'proposes') {
      check('overview present: title beat hides after the first job', !(await whyBeat('thesis').isVisible()))
    }
    if (id === 'outcome-01') {
      check('overview present: walk-out 02 waits after 01', !(await page.locator('[data-trust-overview-outcome="02"]').isVisible()))
      check('overview present: walk-out 03 waits after 01', !(await page.locator('[data-trust-overview-outcome="03"]').isVisible()))
      check('overview present: walk-out 04 waits after 01', !(await page.locator('[data-trust-overview-outcome="04"]').isVisible()))
    }
    if (whyShot[id]) {
      await page.locator('#why-it-matters').screenshot({ path: join(WHY_SHOTS, whyShot[id]) })
    }
  }

  await rail.getByRole('button', { name: /The path/ }).click()
  await page.waitForTimeout(400)
  const pathCopy = page.locator('[data-trust-overview-path-copy]')
  const pathPortrait = page.locator('#the-path [data-trust-idea-portrait="idea-00-overview-eval-is-a-decision-system"]')
  const pathClock = page.locator('#the-path').getByRole('link', { name: /1\.\s+Looks Right/ })
  check('overview present: path stays on step 4 of 6', /Step 4 of 6/.test(await announcement(page)), await announcement(page))
  check('overview present: path shows the chapter-ends copy', await pathCopy.isVisible())
  check('overview present: path shows idea-00 beside the copy', await pathPortrait.isVisible())
  check('overview present: path clock waits on the idea', !(await pathClock.isVisible()))
  const presentPathSplit = await sitsLeftOf(pathCopy, pathPortrait)
  check('overview present: path copy sits left of the portrait', presentPathSplit.ok, presentPathSplit.detail)
  mkdirSync(PATH_SHOTS, { recursive: true })
  await page.locator('#the-path').screenshot({ path: join(PATH_SHOTS, 'present-idea.png') })

  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(400)
  check('overview present: path clock reveals after the idea', await pathClock.isVisible())
  check('overview present: path clock stays on step 4 of 6', /Step 4 of 6/.test(await announcement(page)), await announcement(page))
  check('overview present: idea-00 hides on the clock list', !(await pathCopy.isVisible()))
  const presentClockTitle = await page.locator('[data-trust-overview-clock-title]').first().evaluate((el) => getComputedStyle(el).fontSize)
  const presentClockMeta = await page.locator('[data-trust-overview-clock-meta]').first().evaluate((el) => getComputedStyle(el).fontSize)
  check('overview present: clock title is at least 24px', parseFloat(presentClockTitle) >= 24, presentClockTitle)
  check('overview present: clock meta is at least 18px', parseFloat(presentClockMeta) >= 18, presentClockMeta)
  const presentClockRow = page.locator('[data-trust-overview-clock-row="looks-right"]')
  const presentClockMetaEl = presentClockRow.locator('[data-trust-overview-clock-meta]')
  const presentMetaIdle = await presentClockMetaEl.evaluate((el) => getComputedStyle(el).color)
  await presentClockRow.hover()
  const presentMetaHover = await presentClockMetaEl.evaluate((el) => getComputedStyle(el).color)
  check(
    'overview present: clock hover darkens the muted line',
    luma(presentMetaHover) < luma(presentMetaIdle) - 20,
    `${presentMetaIdle} → ${presentMetaHover}`
  )
  await page.locator('#the-path').screenshot({ path: join(PATH_SHOTS, 'present-clock.png') })
  await ctx.close()

  const reduceCtx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: 'reduce',
  })
  const reducePage = await reduceCtx.newPage()
  const reduceErrors = []
  reducePage.on('pageerror', (error) => reduceErrors.push(String(error).slice(0, 160)))
  await reducePage.goto(`${OVERVIEW}?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(reducePage)
  await reducePage.keyboard.press('ArrowRight')
  await reducePage.waitForTimeout(400)
  check(
    'overview present: reduced motion shows For',
    await reducePage.locator('[data-trust-overview-fact="For"]').isVisible()
  )
  await reducePage.keyboard.press('ArrowRight')
  await reducePage.waitForTimeout(400)
  check(
    'overview present: reduced motion reveals You do',
    await reducePage.locator('[data-trust-overview-fact="You do"]').isVisible()
  )
  check(
    'overview present: reduced motion hides For',
    !(await reducePage.locator('[data-trust-overview-fact="For"]').isVisible())
  )
  check('overview present: reduced motion still steps', reduceErrors.length === 0, reduceErrors[0] ?? '')
  await reduceCtx.close()

  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } })
  const phone = await mobile.newPage()
  await phone.goto(`${OVERVIEW}?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(phone)
  check(
    'overview present: mobile contents grid is hidden',
    (await phone.getByRole('navigation', { name: 'On this page' }).count()) === 0
  )
  await mobile.close()

  const reading = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const self = await reading.newPage()
  await self.goto(OVERVIEW, { waitUntil: 'networkidle' })
  await waitForSteps(self)
  const bands = await self.locator('[data-trust-step]:visible').count()
  check('self-paced overview still shows more than one band', bands > 1, String(bands))
  check('self-paced overview still shows 01', await self.locator('#what-this-is').isVisible())
  check('self-paced overview still shows the question band', await self.locator('#the-question').isVisible())
  check('self-paced overview still shows For', await self.locator('[data-trust-overview-fact="For"]').isVisible())
  check('self-paced overview still shows You do', await self.locator('[data-trust-overview-fact="You do"]').isVisible())
  check('self-paced overview still shows Time', await self.locator('[data-trust-overview-fact="Time"]').isVisible())
  check(
    'self-paced overview still shows You leave with',
    await self.locator('[data-trust-overview-fact="You leave with"]').isVisible()
  )
  const selfForLabelSize = await self
    .locator('[data-trust-overview-fact="For"] [data-trust-overview-fact-label]')
    .evaluate((el) => getComputedStyle(el).fontSize)
  check('self-paced For label is at least 14px', parseFloat(selfForLabelSize) >= 14, selfForLabelSize)
  check('self-paced question shows Allow', await self.locator('[data-trust-overview-verdict="allow"]').isVisible())
  check('self-paced question shows Ask', await self.locator('[data-trust-overview-verdict="ask"]').isVisible())
  check('self-paced question shows Deny', await self.locator('[data-trust-overview-verdict="deny"]').isVisible())
  check('self-paced Allow hint starts open', await self.locator('[data-trust-overview-verdict-hint="allow"]').isVisible())
  check('self-paced Ask hint starts collapsed', !(await self.locator('[data-trust-overview-verdict-hint="ask"]').isVisible()))
  check('self-paced Deny hint starts collapsed', !(await self.locator('[data-trust-overview-verdict-hint="deny"]').isVisible()))
  const selfAllowHintSize = await self.locator('[data-trust-overview-verdict-hint="allow"]').evaluate((el) => getComputedStyle(el).fontSize)
  check('self-paced Allow hint is at least 16px', parseFloat(selfAllowHintSize) >= 16, selfAllowHintSize)
  mkdirSync(QUESTION_SHOTS, { recursive: true })
  await self.locator('#the-question').screenshot({ path: join(QUESTION_SHOTS, 'self-paced-allow.png') })
  await self.locator('[data-trust-overview-verdict="ask"]').click()
  await self.waitForTimeout(200)
  check('self-paced click opens Ask hint', await self.locator('[data-trust-overview-verdict-hint="ask"]').isVisible())
  check('self-paced click collapses Allow hint', !(await self.locator('[data-trust-overview-verdict-hint="allow"]').isVisible()))
  check('self-paced Deny stays collapsed after Ask', !(await self.locator('[data-trust-overview-verdict-hint="deny"]').isVisible()))
  check('self-paced why still shows the title beat', await self.locator('[data-trust-overview-why="thesis"]').isVisible())
  check(
    'self-paced why shows the overview constellation',
    await self.locator('[data-trust-concept-constellation="overview-core"]').isVisible()
  )
  check(
    'self-paced overview shows the NIST quote',
    await self.locator('#why-it-matters [data-trust-idea-quote]').getByText('AI systems are inherently socio-technical in nature.').isVisible()
  )
  check(
    'self-paced NIST cite links the framework PDF',
    (await self.locator('#why-it-matters [data-trust-idea-quote] cite a').getAttribute('href')) ===
      'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf'
  )
  check('self-paced why still shows the model proposes', await self.locator('[data-trust-overview-why="proposes"]').isVisible())
  check('self-paced why still shows walk-out 01', await self.locator('[data-trust-overview-outcome="01"]').isVisible())
  check('self-paced why still shows walk-out 02', await self.locator('[data-trust-overview-outcome="02"]').isVisible())
  check('self-paced why still shows walk-out 03', await self.locator('[data-trust-overview-outcome="03"]').isVisible())
  check('self-paced why still shows walk-out 04', await self.locator('[data-trust-overview-outcome="04"]').isVisible())
  check(
    'self-paced why still shows 01–04 together',
    (await self.locator('[data-trust-overview-outcome]:visible').count()) === 4,
    String(await self.locator('[data-trust-overview-outcome]:visible').count())
  )
  const selfPathCopy = self.locator('[data-trust-overview-path-copy]')
  const selfPathPortrait = self.locator('#the-path [data-trust-idea-portrait="idea-00-overview-eval-is-a-decision-system"]')
  check('self-paced path still shows the chapter-ends copy', await selfPathCopy.isVisible())
  check('self-paced path still shows idea-00', await selfPathPortrait.isVisible())
  check('self-paced path still shows the clock list', await self.locator('#the-path').getByRole('link', { name: /1\.\s+Looks Right/ }).isVisible())
  const selfPathSplit = await sitsLeftOf(selfPathCopy, selfPathPortrait)
  check('self-paced path copy sits left of the portrait', selfPathSplit.ok, selfPathSplit.detail)
  const selfClockTitle = await self.locator('[data-trust-overview-clock-title]').first().evaluate((el) => getComputedStyle(el).fontSize)
  const selfClockMeta = await self.locator('[data-trust-overview-clock-meta]').first().evaluate((el) => getComputedStyle(el).fontSize)
  check('self-paced clock title is at least 20px', parseFloat(selfClockTitle) >= 20, selfClockTitle)
  check('self-paced clock meta is at least 16px', parseFloat(selfClockMeta) >= 16, selfClockMeta)
  check(
    'self-paced clock keeps the Looks Right do-now',
    await self.locator('[data-trust-overview-clock-row="looks-right"]').getByText('Save a baseline Allow / Ask / Deny vote.').isVisible()
  )
  const selfClockRow = self.locator('[data-trust-overview-clock-row="looks-right"]')
  const selfClockMetaEl = selfClockRow.locator('[data-trust-overview-clock-meta]')
  const selfMetaIdle = await selfClockMetaEl.evaluate((el) => getComputedStyle(el).color)
  await selfClockRow.hover()
  const selfMetaHover = await selfClockMetaEl.evaluate((el) => getComputedStyle(el).color)
  check(
    'self-paced clock hover darkens the muted line',
    luma(selfMetaHover) < luma(selfMetaIdle) - 20,
    `${selfMetaIdle} → ${selfMetaHover}`
  )
  mkdirSync(PATH_SHOTS, { recursive: true })
  await self.locator('#the-path').screenshot({ path: join(PATH_SHOTS, 'self-paced-idea.png') })
  await reading.close()

  const readingPhone = await browser.newContext({ viewport: { width: 390, height: 844 } })
  const selfPhone = await readingPhone.newPage()
  await selfPhone.goto(OVERVIEW, { waitUntil: 'networkidle' })
  await waitForSteps(selfPhone)
  check(
    'self-paced overview still shows the mobile contents grid',
    await selfPhone.getByRole('navigation', { name: 'On this page' }).isVisible()
  )
  await readingPhone.close()
}

/* 15. Portrait teaching illustrations: nine ready in-path, two hold, no extras. */
{
  const HOLD = [
    'idea-02-looks-right-claims-need-different-checks',
    'idea-07-the-harness-continuous-evaluation',
  ]
  const seen = new Set()

  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.addInitScript(() => {
    localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
  })

  const collect = async (expected) => {
    const ids = await page.evaluate(() =>
      [...document.querySelectorAll('[data-trust-idea-portrait]')].map((el) => el.getAttribute('data-trust-idea-portrait'))
    )
    const holdOnPage = ids.filter((id) => HOLD.includes(id))
    check(`${expected}: hold portraits stay out of the learner path`, holdOnPage.length === 0, holdOnPage.join(','))
    ids.forEach((id) => seen.add(id))
    return ids
  }

  await page.goto(OVERVIEW, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  const overviewIds = await collect('overview')
  check('overview shows idea-00 on The path', overviewIds.includes('idea-00-overview-eval-is-a-decision-system'))

  await page.goto(`${LEARN}/looks-right`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'Try it')
  await page.getByRole('button', { name: /^Allow/ }).click()
  await page.waitForTimeout(200)
  await openPortion(page, 'Check it')
  const looksIds = await collect('looks-right')
  check('Looks Right Check it shows polish-is-not-proof', looksIds.includes('idea-01-looks-right-polish-is-not-proof'))

  await page.goto(`${LEARN}/four-lenses`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'The idea')
  const lensesIds = await collect('four-lenses')
  check(
    'Four Lenses The idea shows the four-seats portrait',
    lensesIds.includes('idea-02-four-lenses-four-seats-one-card'),
    lensesIds.join(',')
  )
  await openPortion(page, 'See it')
  check(
    'Four Lenses See it keeps the portrait out',
    (await page.locator('[data-trust-idea-portrait]').count()) === 0
  )
  await openPortion(page, 'Try it')
  check(
    'Four Lenses Try it keeps the portrait out',
    (await page.locator('[data-trust-idea-portrait]').count()) === 0
  )

  await page.goto(`${LEARN}/seeded-failures`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'The idea')
  const seededIdeaIds = await collect('seeded-failures idea')
  check(
    'Seeded Failures The idea shows the system-break portrait',
    seededIdeaIds.includes('idea-03-seeded-failures-find-the-system-break'),
    seededIdeaIds.join(',')
  )
  await openPortion(page, 'See it')
  check(
    'Seeded Failures See it keeps the portrait out',
    (await page.locator('[data-trust-idea-portrait]').count()) === 0
  )
  await openPortion(page, 'Try it')
  const beforeReveal = await page.locator('[data-trust-idea-portrait="idea-03-seeded-failures-find-the-system-break"]').count()
  check('Seeded Failures hides the portrait before the search', beforeReveal === 0)
  await page.getByRole('button', { name: /Reveal the six planted breaks/ }).click()
  await page.waitForTimeout(200)
  await openPortion(page, 'Check it')
  await page.getByRole('button', { name: /^Ask/ }).click()
  await page.waitForTimeout(200)
  const seededIds = await collect('seeded-failures')
  check(
    'Seeded Failures Check it shows the system-break portrait after the exercise',
    seededIds.includes('idea-03-seeded-failures-find-the-system-break')
  )

  await page.goto(`${LEARN}/the-loop`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'The idea')
  const loopIdeaIds = await collect('the-loop idea')
  check(
    'The Loop The idea shows the permission-gate portrait',
    loopIdeaIds.includes('idea-04-the-loop-human-controlled-agent-loop')
  )
  check(
    'The Loop The idea keeps the mapper out of the claim',
    (await page.getByText('Place at least three failures.').count()) === 0
  )
  await openPortion(page, 'See it')
  check('The Loop See it has the mapper', await page.getByText('Place at least three failures.').isVisible())
  await openPortion(page, 'Try it')
  const loopIds = await collect('the-loop try')
  check('The Loop Try it still shows the permission-gate portrait', loopIds.includes('idea-04-the-loop-human-controlled-agent-loop'))

  await page.goto(`${LEARN}/the-harness`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'The idea')
  const harnessIdeaIds = await collect('the-harness idea')
  check(
    'The Harness The idea shows the control-gate portrait',
    harnessIdeaIds.includes('idea-09-the-harness-control-gate-vote'),
    harnessIdeaIds.join(',')
  )
  const harnessClaim = page.getByText('The model proposes.', { exact: true })
  const harnessHarness = page.getByText('The harness is what must be true before a write.', { exact: true })
  const harnessDo = page.getByText('Match a control, name one gate, then vote as a team.', { exact: true })
  check('The Harness The idea shows the first claim', await harnessClaim.isVisible())
  check('The Harness The idea shows the harness beat after the break', await harnessHarness.isVisible())
  check('The Harness The idea keeps the do-now after the second break', await harnessDo.isVisible())
  const harnessClaimBox = await harnessClaim.boundingBox()
  const harnessHarnessBox = await harnessHarness.boundingBox()
  const harnessDoBox = await harnessDo.boundingBox()
  check(
    'The Harness The idea leaves space between the first two sentences',
    Boolean(
      harnessClaimBox &&
        harnessHarnessBox &&
        harnessHarnessBox.y >= harnessClaimBox.y + harnessClaimBox.height + 8
    ),
    `${Math.round(harnessClaimBox?.y ?? 0)}+${Math.round(harnessClaimBox?.height ?? 0)} / ${Math.round(harnessHarnessBox?.y ?? 0)}`
  )
  check(
    'The Harness The idea leaves space before the do-now',
    Boolean(
      harnessHarnessBox && harnessDoBox && harnessDoBox.y >= harnessHarnessBox.y + harnessHarnessBox.height + 8
    ),
    `${Math.round(harnessHarnessBox?.y ?? 0)}+${Math.round(harnessHarnessBox?.height ?? 0)} / ${Math.round(harnessDoBox?.y ?? 0)}`
  )
  await openPortion(page, 'See it')
  const beforeGolden = await collect('the-harness before golden')
  check(
    'The Harness See it opens without the golden-set portrait',
    !beforeGolden.includes('idea-05-the-harness-golden-dataset-first')
  )
  check(
    'The Harness keeps grader and regression portraits gated',
    !beforeGolden.includes('idea-06-the-harness-four-graders-have-blind-spots') &&
      !beforeGolden.includes('idea-08-the-harness-regression-whac-a-mole')
  )
  await completeGoldenSet(page)
  const graderPortrait = page.locator('[data-trust-idea-portrait="idea-06-the-harness-four-graders-have-blind-spots"]')
  const regressionPortrait = page.locator('[data-trust-idea-portrait="idea-08-the-harness-regression-whac-a-mole"]')
  check('The Harness can page to the four-graders portrait after the golden-set move', await pageUntilHarness(page, graderPortrait))
  const afterGraders = await collect('the-harness after graders')
  check(
    'The Harness reveals the four-graders portrait after the golden-set move',
    afterGraders.includes('idea-06-the-harness-four-graders-have-blind-spots')
  )
  check('The Harness can page to the regression portrait after the golden-set move', await pageUntilHarness(page, regressionPortrait))
  const afterGolden = await collect('the-harness after golden')
  check(
    'The Harness reveals the regression portrait after the golden-set move',
    afterGolden.includes('idea-08-the-harness-regression-whac-a-mole')
  )
  check('The Harness still has control-match in Try it', (await page.getByRole('button', { name: /Try it/ }).count()) > 0)
  await openPortion(page, 'Try it')
  check('The Harness Try it still names the control match', await page.getByText('One primary control per failure.').isVisible())

  await page.goto(`${LEARN}/transfer`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'The idea')
  const transferIdeaIds = await collect('transfer idea')
  check(
    'Transfer The idea shows the new-card portrait',
    transferIdeaIds.includes('idea-10-transfer-new-card-same-job'),
    transferIdeaIds.join(',')
  )
  const transferIdeaSrc = await page
    .locator('[data-trust-idea-portrait="idea-10-transfer-new-card-same-job"] img')
    .getAttribute('src')
  check(
    'Transfer The idea img is the transfer vertical still',
    (transferIdeaSrc ?? '').includes('cohort-studio-ai-agent-idea-transfer-vertical_h4kuxo'),
    transferIdeaSrc ?? ''
  )
  check(
    'Transfer The idea opens with the first claim block',
    await page.getByText('New card, same question.', { exact: true }).isVisible()
  )
  check(
    'Transfer The idea keeps the measuring block after the break',
    await page
      .getByText('Recall of Case A is not the test, you only know by measuring on your data, again.', {
        exact: true,
      })
      .isVisible()
  )
  await openPortion(page, 'See it')
  check(
    'Transfer See it keeps the portrait out',
    (await page.locator('[data-trust-idea-portrait]').count()) === 0
  )
  check(
    'Transfer keeps Case B as the job',
    await page.getByText('New card. Same job. Decide whether it may act.').isVisible()
  )
  await openPortion(page, 'Try it')
  check(
    'Transfer Try it keeps the portrait out',
    (await page.locator('[data-trust-idea-portrait]').count()) === 0
  )

  check(
    'exactly nine ready portraits appear in the learner path',
    seen.size === 9,
    [...seen].sort().join(', ')
  )
  await ctx.close()
}

/* 16. The Loop: claim + portrait in The idea, mapper in See it, Try it hint | image. */
{
  const LOOP_SHOTS = join(process.cwd(), 'tmp', 'trust-loop-layout')
  mkdirSync(LOOP_SHOTS, { recursive: true })
  const claim = 'Locate each break on Observe, Decide, Act, Check, or Stop'
  const mapperCopy = 'Place at least three failures.'
  const portrait = '[data-trust-idea-portrait="idea-04-the-loop-human-controlled-agent-loop"]'

  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.addInitScript(() => {
    localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
  })

  await page.goto(`${LEARN}/the-loop`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'The idea')
  check('self-paced The idea shows the claim', await page.getByText(claim).isVisible())
  check('self-paced The idea shows the vertical portrait', await page.locator(portrait).isVisible())
  check('self-paced The idea does not show the mapper', (await page.getByText(mapperCopy).count()) === 0)
  await page.screenshot({ path: join(LOOP_SHOTS, '01-idea-claim-portrait.png'), fullPage: true })

  await openPortion(page, 'See it')
  check('self-paced See it shows the mapper', await page.getByText(mapperCopy).isVisible())
  check(
    'self-paced See it shows the runtime-loop diagram before the mapper',
    await page.locator('[data-trust-eval-diagram="eval-05"]').isVisible()
  )
  check(
    'self-paced See it hides failures until Next',
    (await page.getByText('Unsupported launch date').count()) === 0
  )
  await page.getByRole('button', { name: 'Next' }).click()
  await page.waitForTimeout(200)
  check('self-paced See it pages one failure', await page.getByText('Unsupported launch date').isVisible())
  check(
    'self-paced See it still hides the next failure',
    (await page.getByText('Roster does not match the send').count()) === 0
  )
  await page.screenshot({ path: join(LOOP_SHOTS, '02-see-it-mapper.png'), fullPage: true })

  await openPortion(page, 'Try it')
  check('self-paced Try it opens on the signal beat', await page.locator('[data-trust-try-hint-beat="signal"]').isVisible())
  check(
    'self-paced Try it hides later hints until Next',
    (await page.locator('[data-trust-try-hint-beat="do"]').count()) === 0 &&
      (await page.locator('[data-trust-try-hint-beat="example"]').count()) === 0
  )
  check('self-paced Try it keeps the permission-gate portrait', await page.locator(portrait).isVisible())
  await page.getByRole('button', { name: 'Next' }).click()
  await page.waitForTimeout(200)
  check('self-paced Try it pages the do-now beat', await page.locator('[data-trust-try-hint-beat="do"]').isVisible())
  check(
    'self-paced Try it still hides the example beat',
    (await page.locator('[data-trust-try-hint-beat="example"]').count()) === 0
  )

  await page.goto(`${LEARN}/the-loop?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'The idea')
  check('present The idea shows the claim', await page.getByText(claim).isVisible())
  check('present The idea shows the vertical portrait', await page.locator(portrait).isVisible())
  await page.screenshot({ path: join(LOOP_SHOTS, '01b-present-idea.png'), fullPage: true })

  await openPortion(page, 'See it')
  check(
    'present See it opens on the runtime-loop diagram',
    await page.locator('[data-trust-eval-diagram="eval-05"]').isVisible()
  )
  check(
    'present See it holds the mapper until the next beat',
    (await page.getByText(mapperCopy).count()) === 0
  )
  check(
    'present See it holds the first failure until it is paged',
    (await page.getByText('Unsupported launch date').count()) === 0
  )
  await revealInPortion(page, page.getByText(mapperCopy))
  check('present See it shows the mapper', await page.getByText(mapperCopy).isVisible())
  check(
    'present See it teaches stages before any failure',
    (await page.getByText('Unsupported launch date').count()) === 0
  )
  check(
    'present See it keeps technical names off the stage beat',
    (await page.getByText('Context, retrieval, sources').count()) === 0
  )
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(250)
  check('present See it pages one failure at a time', await page.getByText('Unsupported launch date').isVisible())
  check(
    'present See it hides the next failure',
    (await page.getByText('Roster does not match the send').count()) === 0
  )
  await page.getByRole('button', { name: 'Observe', exact: true }).click()
  await page.waitForTimeout(200)
  check(
    'present See it confirms the placed stage',
    await page.getByText('Placed on Observe. Context, retrieval, sources.').isVisible()
  )
  check('present See it keeps the mapper out of The idea', (await page.getByText(claim).count()) === 0)

  await openPortion(page, 'Try it')
  check(
    'present Try it opens on the Product hint',
    await page.locator('[data-trust-try-hint-seat="pm"]').isVisible()
  )
  check(
    'present Try it shows the Product loop question',
    await page.getByText('If you only graded the output, which stage would you never see?').isVisible()
  )
  check(
    'present Try it holds later seat hints',
    (await page.locator('[data-trust-try-hint-seat="engineering"]').count()) === 0 &&
      (await page.locator('[data-trust-try-hint-seat="design"]').count()) === 0
  )
  const hint = page.locator('[data-trust-try-hint]')
  const image = page.locator(portrait)
  await hint.waitFor({ state: 'visible', timeout: 15000 })
  await image.waitFor({ state: 'visible', timeout: 15000 })
  const hintBox = await hint.boundingBox()
  const imageBox = await image.boundingBox()
  check(
    'present Try it places the portrait to the right of the hint',
    Boolean(hintBox && imageBox && imageBox.x > hintBox.x + 40),
    `${Math.round(hintBox?.x ?? 0)} / ${Math.round(imageBox?.x ?? 0)}`
  )
  check(
    'present Try it keeps hint and portrait on one row',
    Boolean(
      hintBox &&
        imageBox &&
        Math.abs(hintBox.y - imageBox.y) < 80 &&
        hintBox.x + hintBox.width <= imageBox.x + 24
    ),
    `hint y=${Math.round(hintBox?.y ?? 0)} w=${Math.round(hintBox?.width ?? 0)} / image y=${Math.round(imageBox?.y ?? 0)} x=${Math.round(imageBox?.x ?? 0)}`
  )
  check(
    'present Try it does not squash the hint',
    Boolean(hintBox && hintBox.width >= 280),
    String(Math.round(hintBox?.width ?? 0))
  )
  await page.screenshot({ path: join(LOOP_SHOTS, '03-try-it-hint-image.png'), fullPage: true })
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(250)
  check(
    'present Try it pages the Engineering hint',
    await page.locator('[data-trust-try-hint-seat="engineering"]').isVisible()
  )
  check(
    'present Try it hides the Product hint after paging',
    (await page.locator('[data-trust-try-hint-seat="pm"]').count()) === 0
  )
  check('present Try it keeps the portrait beside the next hint', await page.locator(portrait).isVisible())
  await ctx.close()
}

/* 17. Four Lenses See it switches the card and the seat picker. */
{
  const LENSES_SHOTS = join(process.cwd(), 'tmp', 'trust-four-lenses-see')
  mkdirSync(LENSES_SHOTS, { recursive: true })

  const openSeeView = async (page, label) => {
    const group = page.getByRole('group', { name: 'See it view' })
    await group.getByRole('button', { name: label }).click()
    await page.waitForTimeout(200)
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.goto(`${LEARN}/four-lenses`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'The idea')
    const claim = page.getByText('Good depends on what your job must protect.')
    const follow = page.getByText('Four seats read the same enrollment card and each one needs something different before it may act.')
    check('self-paced The idea shows the first sentence', await claim.isVisible())
    check('self-paced The idea shows the second sentence', await follow.isVisible())
    const claimBox = await claim.boundingBox()
    const followBox = await follow.boundingBox()
    check(
      'self-paced The idea leaves space between the sentences',
      Boolean(claimBox && followBox && followBox.y >= claimBox.y + claimBox.height + 8),
      `${Math.round(claimBox?.y ?? 0)}+${Math.round(claimBox?.height ?? 0)} / ${Math.round(followBox?.y ?? 0)}`
    )
    check(
      'self-paced The idea shows the vertical portrait',
      await page.locator('[data-trust-idea-portrait="idea-02-four-lenses-four-seats-one-card"]').isVisible()
    )
    await openPortion(page, 'See it')

    const view = page.getByRole('group', { name: 'See it view' })
    check('self-paced See it offers The card and Your seat', (await view.getByRole('button').count()) === 2)
    check('self-paced See it starts on the card', (await view.getAttribute('data-trust-four-lenses-view')) === 'card')
    const cardAbout = 'This card is one enrollment recommendation, not a live send.'
    check('self-paced card mode shows copy about the card', await page.getByText(cardAbout).isVisible())
    check('self-paced card mode starts as a sneak peek', (await page.locator('[data-trust-card-peek]').count()) === 1)
    check(
      'self-paced peek shows the card headline',
      await page.getByText('The cohort is confirmed for October 6. Messages are queued. Quiet participants will be removed.').isVisible()
    )
    check('self-paced peek holds the send action back', !(await page.getByText('Send 120 messages').isVisible()))
    check(
      'self-paced card mode hides the seat picker',
      (await page.locator('[data-trust-four-lenses-seat-label]').count()) === 0
    )
    check(
      'self-paced rail does not list Your seat',
      (await page.getByRole('navigation', { name: 'On this page' }).getByRole('button', { name: /Your seat/ }).count()) === 0
    )
    const selfPeekFrame = page.locator('[data-trust-card-frame]')
    const selfPeekBox = await selfPeekFrame.boundingBox()
    await page.screenshot({ path: join(LENSES_SHOTS, 'self-card.png'), fullPage: true })

    await page.getByRole('button', { name: 'View the card' }).click()
    await page.waitForTimeout(200)
    check('self-paced View the card leaves peek', (await page.locator('[data-trust-card-peek]').count()) === 0)
    check('self-paced View the card isolates the stage', (await page.locator('[data-trust-card-isolated]').count()) === 1)
    check('self-paced View the card shows the send action', await page.getByText('Send 120 messages').isVisible())
    check('self-paced View the card hides the about-card copy', !(await page.getByText(cardAbout).isVisible()))
    const selfFullBox = await page.locator('[data-trust-card-frame]').boundingBox()
    const selfWidthDelta = Math.abs((selfFullBox?.width ?? 0) - (selfPeekBox?.width ?? 0))
    check(
      'self-paced peek and full card share a width',
      Boolean(selfPeekBox && selfFullBox && selfWidthDelta <= 16),
      `${Math.round(selfPeekBox?.width ?? 0)} → ${Math.round(selfFullBox?.width ?? 0)} Δ${Math.round(selfWidthDelta)}`
    )
    await page.screenshot({ path: join(LENSES_SHOTS, 'self-card-full.png'), fullPage: true })
    await page.getByRole('button', { name: 'Back to the text' }).click()
    await page.waitForTimeout(200)

    await openSeeView(page, 'Your seat')
    check('self-paced seat mode hides the specimen', !(await page.getByText('Send 120 messages').isVisible()))
    check('self-paced seat mode keeps the card frame', (await page.locator('[data-trust-card-frame]').count()) === 1)
    const selfSeatFrame = await page.locator('[data-trust-card-frame]').boundingBox()
    const selfSeatDelta = Math.abs((selfSeatFrame?.width ?? 0) - (selfPeekBox?.width ?? 0))
    check(
      'self-paced seat mode holds the card column',
      Boolean(selfPeekBox && selfSeatFrame && selfSeatDelta <= 16),
      `${Math.round(selfPeekBox?.width ?? 0)} → ${Math.round(selfSeatFrame?.width ?? 0)} Δ${Math.round(selfSeatDelta)}`
    )
    check('self-paced seat mode shows four seats', (await page.locator('[data-trust-four-lenses-seat-label]').count()) === 4)
    await page.getByRole('button', { name: /Product/ }).filter({ has: page.locator('[data-trust-four-lenses-seat-label]') }).click()
    await page.waitForTimeout(200)
    const job = page.locator('[data-trust-four-lenses-job]')
    check('self-paced picked seat shows the job', await job.getByText('If you pick Product').isVisible())
    check(
      'self-paced job names the learner work',
      await job.getByText('What outcome must be true before this can be released?').isVisible()
    )
    check(
      'self-paced job names the Four Lenses signal',
      await job.getByText('What outcome must be true before this is acceptable?').isVisible()
    )
    await page.screenshot({ path: join(LENSES_SHOTS, 'self-seat.png'), fullPage: true })

    await openPortion(page, 'Try it')
    check(
      'the picked seat reaches Try it',
      (await page.getByText('Name one thing you would need to see before this recommendation may act.').count()) >= 1
    )
    check('self-paced Try it stacks the signal beat', await page.locator('[data-trust-try-hint-beat="signal"]').isVisible())
    check('self-paced Try it stacks the do-now beat', await page.locator('[data-trust-try-hint-beat="do"]').isVisible())
    check('self-paced Try it stacks the example beat', await page.locator('[data-trust-try-hint-beat="example"]').isVisible())
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.goto(`${LEARN}/four-lenses?present=1`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'See it')

    const view = page.getByRole('group', { name: 'See it view' })
    check('present See it starts on the card', (await view.getAttribute('data-trust-four-lenses-view')) === 'card')
    const presentAbout = 'This card is one enrollment recommendation, not a live send.'
    check('present card mode shows copy about the card', await page.getByText(presentAbout).isVisible())
    check('present card mode starts as a sneak peek', (await page.locator('[data-trust-card-peek]').count()) === 1)
    check('present peek holds the send action back', !(await page.getByText('Send 120 messages').isVisible()))
    const presentPeekBox = await page.locator('[data-trust-card-frame]').boundingBox()
    await page.screenshot({ path: join(LENSES_SHOTS, 'present-card.png'), fullPage: true })

    await page.getByRole('button', { name: 'View the card' }).click()
    await page.waitForTimeout(200)
    check('present View the card shows the send action', await page.getByText('Send 120 messages').isVisible())
    const presentFullBox = await page.locator('[data-trust-card-frame]').boundingBox()
    const presentWidthDelta = Math.abs((presentFullBox?.width ?? 0) - (presentPeekBox?.width ?? 0))
    check(
      'present peek and full card share a width',
      Boolean(presentPeekBox && presentFullBox && presentWidthDelta <= 16),
      `${Math.round(presentPeekBox?.width ?? 0)} → ${Math.round(presentFullBox?.width ?? 0)} Δ${Math.round(presentWidthDelta)}`
    )
    await page.screenshot({ path: join(LENSES_SHOTS, 'present-card-full.png'), fullPage: true })
    await page.getByRole('button', { name: 'Back to the text' }).click()
    await page.waitForTimeout(200)

    await openSeeView(page, 'Your seat')
    check('present seat mode hides the specimen', !(await page.getByText('Send 120 messages').isVisible()))
    check('present seat mode keeps the card frame', (await page.locator('[data-trust-card-frame]').count()) === 1)
    await page.getByRole('button', { name: /Product/ }).filter({ has: page.locator('[data-trust-four-lenses-seat-label]') }).click()
    await page.waitForTimeout(200)
    const job = page.locator('[data-trust-four-lenses-job]')
    check('present picked seat shows the job', await job.getByText('If you pick Product').isVisible())
    const labelSize = parseFloat(
      await page.locator('[data-trust-four-lenses-seat-label]').first().evaluate((el) => getComputedStyle(el).fontSize)
    )
    check('present seat labels are room-readable', labelSize >= 20, String(labelSize))
    const jobSize = parseFloat(
      await job.getByText('What outcome must be true before this can be released?').evaluate((el) => getComputedStyle(el).fontSize)
    )
    check('present job copy is room-readable', jobSize >= 20, String(jobSize))
    check(
      'present rail does not list Your seat',
      (await page.getByRole('navigation', { name: 'On this page' }).getByRole('button', { name: /Your seat/ }).count()) === 0
    )
    await page.screenshot({ path: join(LENSES_SHOTS, 'present-seat.png'), fullPage: true })
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'strategy', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/four-lenses?present=1`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'The idea')
    check(
      'present The idea starts on the first sentence',
      await page.getByText('Good depends on what your job must protect.').isVisible()
    )
    check(
      'present The idea holds the second sentence',
      !(await page.getByText('Four seats read the same enrollment card and each one needs something different before it may act.').isVisible())
    )
    check(
      'present The idea shows the vertical portrait',
      await page.locator('[data-trust-idea-portrait="idea-02-four-lenses-four-seats-one-card"]').isVisible()
    )
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(250)
    check(
      'present The idea ArrowRight reveals the second sentence',
      await page.getByText('Four seats read the same enrollment card and each one needs something different before it may act.').isVisible()
    )

    await openPortion(page, 'Try it')
    check('present Try it opens on the signal beat', await page.locator('[data-trust-try-hint-beat="signal"]').isVisible())
    check(
      'present Try it hides the later hint beats',
      (await page.locator('[data-trust-try-hint-beat="do"]').count()) === 0 &&
        (await page.locator('[data-trust-try-hint-beat="example"]').count()) === 0
    )
    check(
      'present Try it shows the Strategy question',
      await page.getByText('Who owns the consequence when it scales?').isVisible()
    )
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(250)
    check('present Try it ArrowRight reveals the do-now', await page.locator('[data-trust-try-hint-beat="do"]').isVisible())
    check(
      'present Try it hides the signal after paging',
      (await page.locator('[data-trust-try-hint-beat="signal"]').count()) === 0
    )
    check(
      'present Try it shows the ownership prompt',
      await page.getByText('Name one ownership or cost question that must be answered before this scales.').isVisible()
    )
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(250)
    check('present Try it ArrowRight reveals the example', await page.locator('[data-trust-try-hint-beat="example"]').isVisible())
    check(
      'present Try it shows the named-owner example',
      await page.getByText('A named owner after this room ends — not “the agent handled it.”').isVisible()
    )
    await ctx.close()
  }
}

/* 17b. Seeded Failures present See it: send layer pages records, no deck scroll. */
{
  const SEEDED_SEE = join(process.cwd(), 'tmp', 'trust-seeded-see')
  mkdirSync(SEEDED_SEE, { recursive: true })
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/seeded-failures?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await dismissPresentTransition(page)
  await openPortion(page, 'See it')
  check(
    'present See it opens on the output-only diagram',
    await page.locator('[data-trust-eval-diagram="eval-03"]').isVisible()
  )
  await revealInPortion(page, page.getByText('Send 120 messages'))
  check('present See it shows the enrollment specimen', await page.getByText('Send 120 messages').isVisible())
  check('present See it offers an isolated card preview', await page.getByRole('button', { name: 'View the card' }).isVisible())

  const measureOverflow = () =>
    page.evaluate(() => {
      const deck = document.querySelector('[data-trust-deck]')
      const pane = document.querySelector('[data-trust-specimen-pane]')
      const layer = document.querySelector('[data-trust-specimen-underneath]')
      return {
        pageOverflow: Math.max(0, document.documentElement.scrollHeight - window.innerHeight),
        deckOverflow: deck ? Math.max(0, deck.scrollHeight - deck.clientHeight) : 0,
        paneOverflow: pane ? Math.max(0, pane.scrollHeight - pane.clientHeight) : 0,
        layerOverflow: layer ? Math.max(0, layer.scrollHeight - layer.clientHeight) : 0,
      }
    })

  const surfaceOverflow = await measureOverflow()
  const send = page.getByRole('button', { name: /What it would send/ }).first()
  await revealInPortion(page, send)
  await send.click()
  await page.waitForTimeout(250)

  const request = page.locator('[data-trust-specimen-request]').first()
  await request.waitFor({ state: 'visible', timeout: 10000 })
  const requestSize = parseFloat(await request.evaluate((el) => getComputedStyle(el).fontSize))
  const requestText = await request.innerText()
  check('present send request is room-readable', requestSize >= 20, String(requestSize))
  check(
    'present send shows the API request and code',
    /POST/.test(requestText) && /launch_date/.test(requestText) && /messages:send/.test(requestText),
    requestText.replace(/\s+/g, ' ').slice(0, 120)
  )
  check(
    'present send opens on the request beat',
    (await page.locator('[data-trust-specimen-send-beat="request"]').count()) === 1
  )

  const recordBodies = page.locator('[data-trust-specimen-record-body]')
  check('present send holds records until the next beat', (await recordBodies.count()) === 0, String(await recordBodies.count()))

  const overflow = await measureOverflow()
  const added = overflow.pageOverflow - surfaceOverflow.pageOverflow
  check(
    'present send does not grow the deck past the card',
    overflow.paneOverflow < 40 && overflow.layerOverflow < 40 && added < 40,
    `added ${added} / page ${overflow.pageOverflow} / surface ${surfaceOverflow.pageOverflow} / pane ${overflow.paneOverflow} / layer ${overflow.layerOverflow}`
  )
  await page.screenshot({ path: join(SEEDED_SEE, 'present-send.png') })

  await page.getByRole('button', { name: 'Next', exact: true }).click()
  await page.waitForTimeout(250)
  const firstCount = await recordBodies.count()
  check('present send next shows one record body', firstCount === 1, String(firstCount))
  const firstRecord = (await recordBodies.first().innerText()).replace(/\s+/g, ' ').trim()
  const firstLabelSize = parseFloat(
    await page.locator('[data-trust-specimen-underneath] p').first().evaluate((el) => getComputedStyle(el).fontSize)
  )
  check('present send labels are room-readable', firstLabelSize >= 18, String(firstLabelSize))
  const firstBodySize = parseFloat(await recordBodies.first().evaluate((el) => getComputedStyle(el).fontSize))
  check('present send record is room-readable', firstBodySize >= 28, String(firstBodySize))

  const icon = page.locator('[data-trust-specimen-warning-icon]').first()
  const iconBox = await icon.boundingBox()
  const bodyBox = await recordBodies.first().boundingBox()
  const iconSize = iconBox ? Math.min(iconBox.width, iconBox.height) : 0
  const iconMid = iconBox ? iconBox.y + iconBox.height / 2 : 0
  const bodyMid = bodyBox ? bodyBox.y + bodyBox.height / 2 : 0
  check('present warning icon is room-scale', iconSize >= 24, String(Math.round(iconSize)))
  check(
    'present warning icon is vertically centered on the record',
    Boolean(iconBox && bodyBox && Math.abs(iconMid - bodyMid) <= 8),
    `icon ${Math.round(iconMid)} / text ${Math.round(bodyMid)}`
  )
  await page.screenshot({ path: join(SEEDED_SEE, 'present-record.png') })

  await page.getByRole('button', { name: 'Next record' }).click()
  await page.waitForTimeout(250)
  const secondCount = await recordBodies.count()
  check('present send next keeps one record body', secondCount === 1, String(secondCount))
  const secondRecord = (await recordBodies.first().innerText()).replace(/\s+/g, ' ').trim()
  check('present send next reveals another record', Boolean(secondRecord) && secondRecord !== firstRecord, `${firstRecord} → ${secondRecord}`)
  await page.screenshot({ path: join(SEEDED_SEE, 'present-record-2.png') })
  await ctx.close()
}

/* 18. Seeded Failures Try it: one hint beat, then the pick-3 search alone. */
{
  const SEEDED_SHOTS = join(process.cwd(), 'tmp', 'trust-seeded-try')
  mkdirSync(SEEDED_SHOTS, { recursive: true })

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'strategy', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/seeded-failures?present=1`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'Try it')

    const hints = page.locator('[data-trust-try-hint]')
    const search = page.locator('[data-trust-failure-search]')
    check('present Try it opens on one Strategy hint', (await hints.count()) === 1, String(await hints.count()))
    check('present Try it opens on the signal beat', await page.locator('[data-trust-try-hint-beat="signal"]').isVisible())
    check(
      'present Try it shows the Strategy planted-failure question',
      await page.getByText('Which failure becomes policy if this send goes out?').isVisible()
    )
    check('present Try it holds the pick-3 search for later', (await search.count()) === 0)
    check(
      'present Try it holds later hint beats',
      (await page.locator('[data-trust-try-hint-beat="do"]').count()) === 0 &&
        (await page.locator('[data-trust-try-hint-beat="example"]').count()) === 0
    )
    const tryPortions = Number(await page.locator('[data-trust-portion-count]').first().getAttribute('data-trust-portion-count'))
    check('present Try it has four portions: three hints then the search', tryPortions === 4, String(tryPortions))

    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(250)
    check('present Try it pages to the do-now beat', await page.locator('[data-trust-try-hint-beat="do"]').isVisible())
    check('present Try it still hides the search on the do-now beat', (await search.count()) === 0)

    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(250)
    check('present Try it pages to the example beat', await page.locator('[data-trust-try-hint-beat="example"]').isVisible())
    check(
      'present Try it shows the Strategy owner example',
      await page.getByText('A named owner after this room ends — not “the agent handled it.”').isVisible()
    )
    check('present Try it still hides the search on the example beat', (await search.count()) === 0)

    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(250)
    check('present Try it reaches the pick-3 search alone', await search.isVisible())
    check('present Try it drops every hint on the search slide', (await hints.count()) === 0)
    check(
      'present Try it names the planted-failure prompt',
      await page.getByText('Reveal the six planted breaks. Then name at least three that are not “it hallucinated.”').isVisible()
    )
    const promptSize = parseFloat(
      await page
        .getByText('Reveal the six planted breaks. Then name at least three that are not “it hallucinated.”')
        .evaluate((el) => getComputedStyle(el).fontSize)
    )
    check('present search prompt is room-readable', promptSize >= 28, String(promptSize))
    await page.screenshot({ path: join(SEEDED_SHOTS, 'present-search.png'), fullPage: true })

    await page.getByRole('button', { name: /Reveal the six planted breaks/ }).click()
    await page.waitForTimeout(200)
    check('present search shows unfound labels', await page.getByText('Unfound', { exact: true }).first().isVisible())
    await page.locator('[data-trust-failure-token="unsupported-date"]').click()
    await page.waitForTimeout(200)
    const detail = page.locator('[data-trust-failure-definition]')
    check('present reveal opens a definition', await detail.isVisible())
    check(
      'present reveal uses the planted-break copy',
      await page.getByText('The card says the date is confirmed. The calendar still says tentative.').isVisible()
    )
    const detailSize = parseFloat(await detail.evaluate((el) => getComputedStyle(el).fontSize))
    check('present definition is room-readable', detailSize >= 28, String(detailSize))
    const foundLabelSize = parseFloat(
      await page.getByText('Found', { exact: true }).first().evaluate((el) => getComputedStyle(el).fontSize)
    )
    check('present found label is room-readable', foundLabelSize >= 18, String(foundLabelSize))
    await page.screenshot({ path: join(SEEDED_SHOTS, 'present-definition.png'), fullPage: true })
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'strategy', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/seeded-failures`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'Try it')
    check('self-paced Try it stacks the signal beat', await page.locator('[data-trust-try-hint-beat="signal"]').isVisible())
    check('self-paced Try it stacks the do-now beat', await page.locator('[data-trust-try-hint-beat="do"]').isVisible())
    check('self-paced Try it stacks the example beat', await page.locator('[data-trust-try-hint-beat="example"]').isVisible())
    check('self-paced Try it still shows the pick-3 search', await page.locator('[data-trust-failure-search]').isVisible())
    check(
      'self-paced Check it constellation stays hidden during the search',
      (await page.locator('[data-trust-concept-constellation="seeded-inspect"]').count()) === 0
    )
    await page.getByRole('button', { name: /Reveal the six planted breaks/ }).click()
    await page.locator('[data-trust-failure-token="unsupported-date"]').click()
    await page.locator('[data-trust-failure-token="roster-mismatch"]').click()
    await page.locator('[data-trust-failure-token="draft-only-send"]').click()
    await page.waitForTimeout(200)
    check('self-paced naming three marks the checkpoint', await page.getByText(/checkpoint met/).isVisible())
    await openPortion(page, 'Check it')
    check(
      'self-paced Check it shows Output after the reveal',
      await page.locator('[data-trust-concept-term="output"]').isVisible()
    )
    check(
      'self-paced Check it shows Trajectory after the reveal',
      await page.locator('[data-trust-concept-term="trajectory"]').isVisible()
    )
    await page.getByRole('button', { name: /^Ask/ }).click()
    await page.waitForTimeout(200)
    check(
      'self-paced Check it still completes after three names and a revote',
      await page.locator('[data-trust-seeded-result]').getByText('Second call saved as Ask.').isVisible()
    )
    await ctx.close()
  }

  {
    const CHECK_SHOTS = join(process.cwd(), 'tmp', 'trust-seeded-check')
    mkdirSync(CHECK_SHOTS, { recursive: true })
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: 'light' })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'strategy', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/seeded-failures?present=1`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await dismissPresentTransition(page)
    await openPortion(page, 'Try it')
    await revealInPortion(page, page.locator('[data-trust-failure-search]'))
    await page.getByRole('button', { name: /Reveal the six planted breaks/ }).click()
    await page.waitForTimeout(200)
    await openPortion(page, 'Check it')
    await page.waitForFunction(
      () =>
        Number(
          document
            .querySelector('[data-trust-panel-open] [data-trust-portion-count]')
            ?.getAttribute('data-trust-portion-count')
        ) === 6,
      null,
      { timeout: 10000 }
    )

    const checkCount = Number(
      await page
        .locator('[data-trust-panel-open] [data-trust-portion-count]')
        .first()
        .getAttribute('data-trust-portion-count')
    )
    check('present Check it has six portions after the reveal', checkCount === 6, String(checkCount))
    check('present Check it opens on diagram 04', await evalDiagramVisible(page, 'eval-04'))
    check(
      'present Check it first beat is not the portrait',
      (await page.locator('[data-trust-idea-portrait]').count()) === 0
    )
    check('present Check it first beat is not the revote', (await page.locator('[data-trust-vote]').count()) === 0)
    check(
      'present Check it first beat is not the process claim',
      (await page.locator('[data-trust-seeded-claim]').count()) === 0
    )
    check(
      'present Check it first beat is not the role check',
      (await page.locator('[data-trust-role-check]').count()) === 0
    )
    await page.screenshot({ path: join(CHECK_SHOTS, 'present-check-1-diagram.png'), fullPage: true })

    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(250)
    check(
      'present Check it pages to the system-break portrait',
      await page.locator('[data-trust-idea-portrait="idea-03-seeded-failures-find-the-system-break"]').isVisible()
    )
    check('present Check it drops the diagram on the portrait beat', !(await evalDiagramVisible(page, 'eval-04')))
    check('present Check it still holds the revote', (await page.locator('[data-trust-vote]').count()) === 0)
    await page.screenshot({ path: join(CHECK_SHOTS, 'present-check-2-portrait.png'), fullPage: true })

    await revealInPortion(page, page.locator('[data-trust-concept-constellation="seeded-inspect"]'))
    check(
      'present Check it pages to Output after the claim',
      await page.locator('[data-trust-concept-term="output"]').isVisible()
    )
    check(
      'present Check it pages to Trajectory after the claim',
      await page.locator('[data-trust-concept-term="trajectory"]').isVisible()
    )
    check('present Check it still holds the revote on the constellation', (await page.locator('[data-trust-vote]').count()) === 0)

    await revealInPortion(page, page.locator('[data-trust-vote]'))
    check('present Check it ArrowRight reaches the revote', await page.locator('[data-trust-vote]').isVisible())
    check('present Check it drops the diagram on the vote beat', !(await evalDiagramVisible(page, 'eval-04')))
    check(
      'present Check it drops the portrait on the vote beat',
      (await page.locator('[data-trust-idea-portrait]').count()) === 0
    )
    const voteLegend = page.getByText('Vote again — after seeing the system')
    const voteVisible = (await voteLegend.count()) > 0 && (await voteLegend.first().isVisible())
    const voteLegendSize = voteVisible
      ? parseFloat(await voteLegend.evaluate((el) => getComputedStyle(el).fontSize))
      : 0
    check('present Check it vote legend is room-readable', voteVisible && voteLegendSize >= 28, String(voteLegendSize))
    await page.screenshot({ path: join(CHECK_SHOTS, 'present-check-3-revote.png'), fullPage: true })
    await ctx.close()
  }
}

/* 18. The Harness See it: one large example at a time; ArrowRight pages the rest. */
{
  const HARNESS_SEE = join(process.cwd(), 'tmp', 'trust-harness-see')
  mkdirSync(HARNESS_SEE, { recursive: true })
  const unlocked = 2 + 8 + 5

  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await ctx.newPage()
  await page.addInitScript(() => {
    localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
  })
  await page.goto(`${LEARN}/the-harness?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await dismissPresentTransition(page)
  await openPortion(page, 'See it')

  const firstTitle = page.getByText('Eight variants of the same request')
  check('present See it opens on the golden-set intro', await firstTitle.isVisible())
  check(
    'present See it opens without the golden-set portrait',
    (await page.locator('[data-trust-idea-portrait="idea-05-the-harness-golden-dataset-first"]').count()) === 0
  )
  const firstSize = parseFloat(await firstTitle.evaluate((el) => getComputedStyle(el).fontSize))
  check('present See it first example is room-readable', firstSize >= 28, String(firstSize))
  const portionCount = Number(await page.locator('[data-trust-portion-count]').first().getAttribute('data-trust-portion-count'))
  check('present See it portion count matches unlocked examples', portionCount === unlocked, String(portionCount))
  check(
    'present See it holds later golden cases',
    (await page.getByText('Clean enrollment request').count()) === 0
  )
  await page.screenshot({ path: join(HARNESS_SEE, '01-present-see-1.png'), fullPage: true })

  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(250)
  const harnessCore = page.locator('[data-trust-concept-constellation="harness-core"]')
  check('present See it ArrowRight shows the core constellation', await harnessCore.isVisible())
  check('present See it core constellation names Criterion', await harnessCore.getByRole('button', { name: 'Criterion' }).isVisible())
  check('present See it core constellation names Evidence', await harnessCore.getByRole('button', { name: 'Evidence' }).isVisible())
  check('present See it core constellation names Gate', await harnessCore.getByRole('button', { name: 'Gate' }).isVisible())
  check('present See it core constellation names Golden set', await harnessCore.getByRole('button', { name: 'Golden set' }).isVisible())
  check(
    'present See it core constellation holds Calibration',
    (await harnessCore.getByRole('button', { name: 'Calibration' }).count()) === 0
  )
  check('present See it drops the intro on the constellation', (await firstTitle.count()) === 0)
  check(
    'present See it still holds later golden cases',
    (await page.getByText('Clean enrollment request').count()) === 0
  )

  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(250)
  const secondTitle = page.getByText('Clean enrollment request')
  check('present See it ArrowRight shows the next example', await secondTitle.isVisible())
  check('present See it drops the constellation on the next example', (await harnessCore.count()) === 0)
  const secondSize = parseFloat(await secondTitle.evaluate((el) => getComputedStyle(el).fontSize))
  check('present See it second example is room-readable', secondSize >= 20, String(secondSize))
  await page.screenshot({ path: join(HARNESS_SEE, '02-present-see-2.png'), fullPage: true })

  const allow = page.locator('[data-trust-verdict-term="allow"]')
  await openPortion(page, 'The idea')
  const harnessFirst = page.getByText('The model proposes.', { exact: true })
  const harnessSecond = page.getByText('The harness is what must be true before a write.', { exact: true })
  const harnessThird = page.getByText('Match a control, name one gate, then vote as a team.', { exact: true })
  check('present The idea starts on the first sentence', await harnessFirst.isVisible())
  check('present The idea holds the second sentence', !(await harnessSecond.isVisible()))
  check('present The idea holds the do-now', !(await harnessThird.isVisible()))
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(200)
  check('present The idea ArrowRight reveals the harness beat', await harnessSecond.isVisible())
  check('present The idea still holds the do-now', !(await harnessThird.isVisible()))
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(200)
  check('present The idea ArrowRight reveals the do-now', await harnessThird.isVisible())
  await revealInPortion(page, allow)
  check('The idea marks Allow for verdict hover', (await allow.count()) > 0)
  if ((await allow.count()) > 0) {
    const hoverClass = await allow.first().getAttribute('class')
    check(
      'Allow hover uses the emerald verdict family',
      Boolean(hoverClass && hoverClass.includes('hover:text-emerald-900') && hoverClass.includes('hover:bg-emerald-50')),
      hoverClass ?? ''
    )
  }
  await page.screenshot({ path: join(HARNESS_SEE, '03-present-idea-grader.png'), fullPage: true })
  await ctx.close()
}

/* Transfer Present Try it: room-readable type, vote stays usable. */
{
  const TRY_SHOTS = join(process.cwd(), 'tmp', 'trust-transfer-try')
  mkdirSync(TRY_SHOTS, { recursive: true })
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, colorScheme: 'light' })
  const page = await ctx.newPage()
  await page.addInitScript(() => {
    localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
  })
  await page.goto(`${LEARN}/transfer?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'Try it')

  const smallText = async () =>
    page.evaluate(() => {
      const panel = [...document.querySelectorAll('[data-trust-panel-open]')].find((el) =>
        el.querySelector('[data-trust-step]')?.textContent?.includes('Try it')
      )
      if (!panel) return [{ text: 'no Try it panel', size: 0 }]
      const out = []
      const walker = document.createTreeWalker(panel, NodeFilter.SHOW_TEXT)
      while (walker.nextNode()) {
        const text = walker.currentNode.textContent?.replace(/\s+/g, ' ').trim()
        if (!text) continue
        const el = walker.currentNode.parentElement
        if (!el) continue
        const style = getComputedStyle(el)
        if (style.visibility === 'hidden' || style.display === 'none') continue
        if (el.closest('[hidden]')) continue
        if (!el.getClientRects().length) continue
        const size = parseFloat(style.fontSize)
        if (size < 18) out.push({ text: text.slice(0, 72), size })
      }
      return out
    })

  const firstSmall = await smallText()
  check(
    'present Try it first portion has no type under 18px',
    firstSmall.length === 0,
    firstSmall.map((row) => `${row.size}px “${row.text}”`).join(' · ')
  )
  await page.screenshot({ path: join(TRY_SHOTS, 'present-try-hint-1280.png') })

  const vote = page.locator('[data-trust-vote]')
  await revealInPortion(page, vote)
  const voteSmall = await smallText()
  check(
    'present Try it vote has no type under 18px',
    voteSmall.length === 0,
    voteSmall.map((row) => `${row.size}px “${row.text}”`).join(' · ')
  )
  const legendSize = parseFloat(
    await page.getByText('Unseen case — Allow, Ask, or Deny?').evaluate((el) => getComputedStyle(el).fontSize)
  )
  check('present Try it vote legend is room-readable', legendSize >= 24, String(legendSize))
  check('present Try it vote uses the wide stage', await vote.isVisible())
  await page.screenshot({ path: join(TRY_SHOTS, 'present-try-vote-1280.png') })

  await page.setViewportSize({ width: 1440, height: 900 })
  await page.waitForTimeout(200)
  await page.screenshot({ path: join(TRY_SHOTS, 'present-try-vote-1440.png') })
  await ctx.close()
}

/* Idea quotes sit after The idea and before See it. Not a rail item. */
{
  const IDEA_QUOTES = [
    ['looks-right', 'What you see is all there is.'],
    ['four-lenses', 'A systems approach begins when first you see the world through the eyes of another.'],
    ['seeded-failures', 'We cannot change the human condition, but we can change the conditions under which humans work.'],
    ['the-loop', 'The purpose of a system is what it does.'],
    ['the-harness', 'Safety is a system property, not a component property, and must be controlled at the system level, not the component level.'],
    ['transfer', 'In general, measure performance of a model on the data gathered after the data you trained the model on.'],
  ]

  for (const [slug, quote] of IDEA_QUOTES) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/${slug}`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'The idea')
    const ideaQuote = page.locator('[data-trust-panel-open] [data-trust-idea-quote]').getByText(quote)
    check(`${slug} The idea contains the quote`, await ideaQuote.isVisible())
    await openPortion(page, 'See it')
    check(
      `${slug} See it does not keep the quote`,
      (await page.locator('[data-trust-idea-quote]').count()) === 0
    )

    await page.goto(`${LEARN}/${slug}?present=1`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await dismissPresentTransition(page)
    await openPortion(page, 'The idea')
    await revealInPortion(page, page.locator('[data-trust-idea-quote]').getByText(quote))
    check(
      `${slug} present pages to the quote before See it`,
      await page.locator('[data-trust-idea-quote]').getByText(quote).isVisible()
    )
    check(
      `${slug} present quote stays on The idea`,
      /Step 1 of \d+\. The idea/.test(await announcement(page)),
      await announcement(page)
    )
    if (slug === 'looks-right' || slug === 'transfer') {
      check(
        `${slug} present quote has no source link`,
        (await page.locator('[data-trust-idea-quote] cite a').count()) === 0
      )
    }
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(250)
    check(
      `${slug} present ArrowRight from the quote enters See it`,
      (await page.locator('[data-trust-step][aria-expanded="true"]').filter({ hasText: 'See it' }).count()) === 1
    )
    await ctx.close()
  }
}

/* Evaluation diagrams: required on the learner path, supporting/deeper stay closed. */
{
  const gated = ['eval-02', 'eval-06', 'eval-10', 'eval-11', 'eval-12']

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/looks-right`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'The idea')
    check('Looks Right The idea keeps 01 off the claim', !(await evalDiagramVisible(page, 'eval-01')))
    await openPortion(page, 'Check it')
    check('Looks Right Check it hides 01 before the vote', !(await evalDiagramVisible(page, 'eval-01')))
    await openPortion(page, 'Try it')
    await page.getByRole('button', { name: /^Allow/ }).click()
    await page.waitForTimeout(200)
    await openPortion(page, 'Check it')
    check('Looks Right Check it shows 01 after the vote', await evalDiagramVisible(page, 'eval-01'))
    check('Looks Right keeps 02 closed after the vote', !(await evalDiagramVisible(page, 'eval-02')))
    await page.getByRole('button', { name: 'Open the system' }).click()
    await page.waitForTimeout(200)
    check('Looks Right keeps 02 closed after Evidence / Authority / Impact', !(await evalDiagramVisible(page, 'eval-02')))
    const supporting = page.locator('[data-trust-eval-supporting="eval-02"]')
    check('Looks Right offers Another example after the layers', await supporting.isVisible())
    await supporting.locator('summary').click()
    await page.waitForTimeout(200)
    check('Looks Right shows 02 after supporting is opened', await evalDiagramVisible(page, 'eval-02'))
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/looks-right?present=1`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await dismissPresentTransition(page)
    await openPortion(page, 'Try it')
    await page.getByRole('button', { name: /^Allow/ }).click()
    await page.waitForTimeout(200)
    await openPortion(page, 'Check it')
    await revealInPortion(page, evalDiagram(page, 'eval-01'))
    check('present Looks Right Check it pages to 01 after the vote', await evalDiagramVisible(page, 'eval-01'))
    check('present Looks Right does not auto-open 02', !(await evalDiagramVisible(page, 'eval-02')))
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/seeded-failures`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'The idea')
    check('Seeded Failures The idea shows 15 at the evaluation boundary', await evalDiagramVisible(page, 'eval-15'))
    await openPortion(page, 'See it')
    check('Seeded Failures See it shows 03 before The send', await evalDiagramVisible(page, 'eval-03'))
    check('Seeded Failures See it keeps 15 on The idea', !(await evalDiagramVisible(page, 'eval-15')))
    check('Seeded Failures hides 04 before the reveal', !(await evalDiagramVisible(page, 'eval-04')))
    await openPortion(page, 'Try it')
    await page.getByRole('button', { name: /Reveal the six planted breaks/ }).click()
    await page.waitForTimeout(200)
    await openPortion(page, 'Check it')
    check('Seeded Failures Check it shows 04 after the reveal', await evalDiagramVisible(page, 'eval-04'))
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/the-loop`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'See it')
    const diagramBox = await evalDiagram(page, 'eval-05').boundingBox()
    const mapperBox = await page.getByText('Place at least three failures.').boundingBox()
    check('The Loop See it shows 05 before the mapper', await evalDiagramVisible(page, 'eval-05'))
    check(
      'The Loop places 05 above the mapper',
      Boolean(diagramBox && mapperBox && diagramBox.y + diagramBox.height <= mapperBox.y + 8),
      `${Math.round(diagramBox?.y ?? 0)} vs ${Math.round(mapperBox?.y ?? 0)}`
    )
    check('The Loop keeps 06 out of the required path', !(await evalDiagramVisible(page, 'eval-06')))
    await openDeeper(page)
    check('The Loop shows 06 after Go deeper opens', await evalDiagramVisible(page, 'eval-06'))
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem(
        'trust-is-not-a-vibe:v1',
        JSON.stringify({
          role: 'pm',
          completedChapters: [],
          controlMatches: {
            'unsupported-date': 'ground',
            'roster-mismatch': 'validate',
            'fabricated-forecast': 'ground',
            'draft-only-send': 'restrict',
            'auto-remove-harm': 'approve',
            'no-escalation': 'approve',
          },
        })
      )
    })
    await page.goto(`${LEARN}/the-harness`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'The idea')
    check('The Harness The idea shows 07', await evalDiagramVisible(page, 'eval-07'))
    check(
      'The Harness The idea keeps the control-gate portrait',
      await page.locator('[data-trust-idea-portrait="idea-09-the-harness-control-gate-vote"]').isVisible()
    )
    await openPortion(page, 'See it')
    check('The Harness golden-set shows 08', await evalDiagramVisible(page, 'eval-08'))
    check('The Harness gates 09 until graders unlock', !(await evalDiagramVisible(page, 'eval-09')))
    check('The Harness gates 14 until regression unlocks', !(await evalDiagramVisible(page, 'eval-14')))
    await completeGoldenSet(page)
    check(
      'The Harness can page to 09 after the golden-set move',
      await pageUntilHarness(page, evalDiagram(page, 'eval-09'))
    )
    check('The Harness shows 09 when graders unlock', await evalDiagramVisible(page, 'eval-09'))
    check(
      'The Harness can page to 14 after regression unlocks',
      await pageUntilHarness(page, evalDiagram(page, 'eval-14'))
    )
    check('The Harness shows 14 on the regression check', await evalDiagramVisible(page, 'eval-14'))
    await openPortion(page, 'Check it')
    await revealInPortion(page, evalDiagram(page, 'eval-13'))
    check('The Harness Check it shows 13 before the team vote', await evalDiagramVisible(page, 'eval-13'))
    const vote = page.getByText('Team verdict for Case A')
    const diagram13 = await evalDiagram(page, 'eval-13').boundingBox()
    const voteBox = await vote.boundingBox()
    check(
      'The Harness places 13 before the team vote',
      Boolean(diagram13 && voteBox && diagram13.y + diagram13.height <= voteBox.y + 8),
      `${Math.round(diagram13?.y ?? 0)} vs ${Math.round(voteBox?.y ?? 0)}`
    )
    check('The Harness keeps 10 out until model-judge detail', !(await evalDiagramVisible(page, 'eval-10')))
    check('The Harness keeps 11 out until model-judge detail', !(await evalDiagramVisible(page, 'eval-11')))
    check('The Harness keeps 12 out of the required path', !(await evalDiagramVisible(page, 'eval-12')))
    await openDeeper(page)
    check('The Harness shows 12 in Engineering Go deeper', await evalDiagramVisible(page, 'eval-12'))
    check('The Harness toolkit shows Promptfoo', await page.locator('[data-trust-tool="promptfoo"]').isVisible())
    check('The Harness toolkit shows Ragas', await page.locator('[data-trust-tool="ragas"]').isVisible())
    check('The Harness toolkit shows LangSmith', await page.locator('[data-trust-tool="langsmith"]').isVisible())
    check('The Harness toolkit shows Langfuse', await page.locator('[data-trust-tool="langfuse"]').isVisible())
    check('The Harness toolkit shows Arize Phoenix', await page.locator('[data-trust-tool="arize-phoenix"]').isVisible())
    check('The Harness toolkit shows Braintrust', await page.locator('[data-trust-tool="braintrust"]').isVisible())
    check('The Harness still hides 10 before the judge is picked', !(await evalDiagramVisible(page, 'eval-10')))
    await page.getByRole('button', { name: 'Model judge', exact: true }).click()
    await page.waitForTimeout(200)
    check('The Harness still hides 10 until the detail opens', !(await evalDiagramVisible(page, 'eval-10')))
    await page.locator('[data-trust-eval-supporting="eval-10"] summary').click()
    await page.waitForTimeout(200)
    check('The Harness shows 10 in model-judge detail', await evalDiagramVisible(page, 'eval-10'))
    check('The Harness keeps 11 closed until the second reveal', !(await evalDiagramVisible(page, 'eval-11')))
    await page.locator('[data-trust-eval-supporting="eval-11"] summary').click()
    await page.waitForTimeout(200)
    check('The Harness shows 11 after the semantic-grading reveal', await evalDiagramVisible(page, 'eval-11'))
    const box10 = await evalDiagram(page, 'eval-10').boundingBox()
    const box11 = await evalDiagram(page, 'eval-11').boundingBox()
    check(
      'The Harness stacks 10 and 11 instead of pairing them',
      Boolean(box10 && box11 && box11.y >= box10.y + box10.height - 8),
      `${Math.round(box10?.y ?? 0)} then ${Math.round(box11?.y ?? 0)}`
    )
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/four-lenses`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'The idea')
    await openPortion(page, 'See it')
    await openPortion(page, 'Try it')
    await openPortion(page, 'Check it')
    for (const id of ['eval-01', 'eval-05', 'eval-07', 'eval-13']) {
      check(`Four Lenses required path keeps ${id} in Go deeper`, !(await evalDiagramVisible(page, id)))
    }
    await openDeeper(page)
    for (const id of ['eval-01', 'eval-05', 'eval-07', 'eval-13']) {
      check(`Four Lenses Go deeper keeps ${id} off this chapter`, !(await evalDiagramVisible(page, id)))
    }
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/transfer`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'See it')
    check('Transfer See it keeps 07 off this chapter', !(await evalDiagramVisible(page, 'eval-07')))
    check(
      'Transfer keeps the Case B intake as the teaching surface',
      await page.getByText('recall of Case A is not the test', { exact: false }).isVisible()
    )
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
    const hidden = []
    for (const id of gated) {
      if (await evalDiagramVisible(page, id)) hidden.push(id)
    }
    await page.goto(`${LEARN}/the-loop`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    if (await evalDiagramVisible(page, 'eval-06')) hidden.push('eval-06')
    await page.goto(`${LEARN}/the-harness`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    for (const id of ['eval-10', 'eval-11', 'eval-12']) {
      if (await evalDiagramVisible(page, id)) hidden.push(id)
    }
    check('supporting and Go deeper diagrams stay off the required path', hidden.length === 0, hidden.join(','))
    await ctx.close()
  }
}

/* 19. Concept constellation: live vocabulary, no new gates. */
{
  async function overflowX(page) {
    return page.evaluate(() => {
      window.scrollTo(2000, 0)
      const scrolled = window.scrollX
      window.scrollTo(0, 0)
      return scrolled
    })
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const page = await ctx.newPage()
    await page.addInitScript(() => {
      localStorage.setItem('trust-is-not-a-vibe:v1', JSON.stringify({ role: 'pm', completedChapters: [] }))
    })
    await page.goto(`${LEARN}/the-harness`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    await openPortion(page, 'See it')
    check(
      'The Harness See it holds the reliability constellation',
      !(await page.locator('[data-trust-concept-constellation="harness-reliability"]').isVisible())
    )
    check(
      'The Harness See it holds Calibration on the required path',
      !(await page.locator('[data-trust-concept-term="calibration"]').isVisible())
    )
    const next = page.getByRole('button', { name: /^Next example/ })
    if ((await next.count()) > 0 && (await next.isEnabled())) {
      await next.click()
      await page.waitForTimeout(200)
    }
    const harnessCore = page.locator('[data-trust-concept-constellation="harness-core"]')
    check('The Harness See it shows Criterion after the golden intro', await harnessCore.getByRole('button', { name: 'Criterion' }).isVisible())
    check('The Harness See it shows Evidence', await harnessCore.getByRole('button', { name: 'Evidence' }).isVisible())
    check('The Harness See it shows Gate', await harnessCore.getByRole('button', { name: 'Gate' }).isVisible())
    check('The Harness See it shows Golden set', await harnessCore.getByRole('button', { name: 'Golden set' }).isVisible())
    check('The Harness See it still holds Calibration after the core terms', (await harnessCore.getByRole('button', { name: 'Calibration' }).count()) === 0)
    await openDeeper(page)
    const reliability = page.locator('[data-trust-concept-constellation="harness-reliability"]')
    check('The Harness Go deeper shows Slice after Open depth', await reliability.getByRole('button', { name: 'Slice' }).isVisible())
    check('The Harness Go deeper shows Regression after Open depth', await reliability.getByRole('button', { name: 'Regression' }).isVisible())
    check('The Harness Go deeper shows Calibration after Open depth', await reliability.getByRole('button', { name: 'Calibration' }).isVisible())
    await ctx.close()
  }

  for (const width of [390, 768, 1280, 1440]) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 } })
    const page = await ctx.newPage()
    await page.goto(OVERVIEW, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    const cluster = page.locator('[data-trust-concept-constellation="overview-core"]')
    await cluster.scrollIntoViewIfNeeded()
    const term = cluster.getByRole('button', { name: 'Eval' })
    const box = await term.boundingBox()
    check(`overview constellation is visible at ${width}`, await cluster.isVisible())
    check(
      `overview constellation Eval is at least 44px at ${width}`,
      Boolean(box && box.height >= 44 && box.width >= 44),
      box ? `${Math.round(box.width)}×${Math.round(box.height)}` : 'missing'
    )
    check(`overview constellation does not scroll sideways at ${width}`, (await overflowX(page)) === 0, String(await overflowX(page)))
    await ctx.close()
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' })
    const page = await ctx.newPage()
    await page.goto(OVERVIEW, { waitUntil: 'networkidle' })
    await waitForSteps(page)
    const evalBtn = page.locator('[data-trust-concept-constellation="overview-core"]').getByRole('button', { name: 'Eval' })
    await evalBtn.focus()
    const transform = await evalBtn.evaluate((el) => getComputedStyle(el).transform)
    check('reduced motion keeps constellation terms unscaled', transform === 'none' || transform === 'matrix(1, 0, 0, 1, 0, 0)', transform)
    await evalBtn.click()
    await page.waitForTimeout(150)
    const panel = page.locator('[data-trust-concept-constellation="overview-core"] [data-trust-concept-panel]')
    check('keyboard click reveals the definition', await panel.locator('[data-trust-concept-definition]').isVisible())
    check(
      'keyboard click shows the Eval definition',
      (await panel.locator('[data-trust-concept-definition]').innerText()) ===
        'A repeatable test of one behavior on representative cases, using an explicit grader.'
    )
    check('definition is not hover-only', await panel.getByText('Why it matters.').isVisible())
    await ctx.close()
  }
}

await browser.close()

const failed = results.filter((r) => !r.pass)
console.log(`\n${results.length - failed.length}/${results.length} checks passed`)
process.exit(failed.length ? 1 : 0)
