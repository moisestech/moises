import { chromium } from 'playwright'

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

async function openDeeper(page) {
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
  const layerBtn = page.getByRole('button', { name: /What it would send/ }).first()
  await layerBtn.scrollIntoViewIfNeeded()
  const lockedLabel = await layerBtn.textContent()
  check('machine layer is locked before voting', /locked/i.test(lockedLabel ?? ''), lockedLabel?.trim())

  await page.goto(`${LEARN}/looks-right?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'See it')
  const presentBtn = page.getByRole('button', { name: /What it would send/ }).first()
  await revealInPortion(page, presentBtn)
  await presentBtn.scrollIntoViewIfNeeded()
  const openLabel = await presentBtn.textContent()
  check('presenting unlocks the machine layer', !/locked/i.test(openLabel ?? ''), openLabel?.trim())
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
  await openDeeper(page)
  await page.getByRole('button', { name: 'Compare case by case' }).click()
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
    if (name === 'transfer' || name === 'the-harness') {
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

  const counter = bar.locator('p').filter({ hasText: /\d+ \/ \d+/ }).first()
  check('the bar shows a step counter', await counter.isVisible(), (await counter.textContent())?.trim())
  const startClock = bar.getByRole('button', { name: 'Start clock' })
  check('the bar offers a start-clock control', await startClock.isVisible())
  await startClock.click()
  await page.waitForTimeout(600)
  check('starting the clock shows elapsed time', await bar.getByText(/^\d+:\d{2}$/).first().isVisible())
  check('the clock names the current section window', await bar.getByText('The Loop').isVisible())
  await bar.getByRole('button', { name: /Stop the clock/ }).click()
  check('stopping the clock returns the start control', await startClock.isVisible())

  await bar.getByRole('button', { name: 'Next section' }).click()
  await page.waitForTimeout(500)
  check('the Next button steps', /^Step 1 of \d+\./.test(await announcement(page)))
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
  await page.locator('[data-trust-idea-term]').filter({ hasText: 'the card' }).first().click()
  check(
    'a marked term opens its definition',
    await page.getByText('The screen a teammate would see before anything sends.').isVisible()
  )
  await page.locator('[data-trust-idea-term]').filter({ hasText: 'proof' }).first().click()
  check(
    'opening another term closes the previous definition',
    (await page.locator('[data-trust-idea-def]').count()) === 1
  )
  check(
    'the new term’s definition is the one that stays open',
    await page.getByText('A finished look is not evidence the system behind the screen is safe.').isVisible()
  )
  check(
    'the previous definition is gone',
    (await page.getByText('The screen a teammate would see before anything sends.').count()) === 0
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
    const current = document.querySelector('[data-trust-step][aria-expanded="true"]')
    return {
      flag: document.documentElement.dataset.trustPresent === '1',
      headerHidden: header ? getComputedStyle(header).display === 'none' : false,
      ideaHeight: current?.getBoundingClientRect().height ?? 0,
      headerVar: getComputedStyle(document.documentElement).getPropertyValue('--site-header-height').trim(),
    }
  })
  check('Present sets the immersive flag', immersive.flag)
  check('Present hides the site header', immersive.headerHidden)
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
  check('later idea sentences wait', !/That recommendation/.test(first))
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(300)
  const second = await page.locator('[data-trust-portion]').innerText()
  check('the next arrow opens the next idea sentence', /That recommendation/.test(second), second.slice(0, 80))
  check('the announcement stays on The idea', /Step 1 of \d+\. The idea/.test(await announcement(page)))
  await ctx.close()
}

/* 13. Packet + full specimen must not overflow a phone width. */
{
  for (const slug of ['looks-right', 'seeded-failures', 'the-loop', 'the-harness', 'transfer']) {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } })
    const page = await ctx.newPage()
    await page.goto(`${LEARN}/${slug}`, { waitUntil: 'networkidle' })
    await waitForSteps(page)
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

await browser.close()

const failed = results.filter((r) => !r.pass)
console.log(`\n${results.length - failed.length}/${results.length} checks passed`)
process.exit(failed.length ? 1 : 0)
