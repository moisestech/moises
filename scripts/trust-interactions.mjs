import { chromium } from 'playwright'

const BASE = process.env.BASE ?? 'http://localhost:3001'
const LEARN = `${BASE}/workshop/trust-is-not-a-vibe/learn`

const results = []
function check(name, pass, detail = '') {
  results.push({ name, pass, detail })
  console.log(`${pass ? 'ok  ' : 'FAIL'} ${name}${detail ? ` — ${detail}` : ''}`)
}

const browser = await chromium.launch()

/* 1. Presentation mode survives navigation and exits cleanly. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/the-loop?present=1`, { waitUntil: 'networkidle' })
  const bar = page.getByRole('complementary', { name: 'Presentation controls' })
  check('present=1 shows the presentation bar', await bar.isVisible())
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
  const layerBtn = page.getByRole('button', { name: /What it would send/ }).first()
  await layerBtn.scrollIntoViewIfNeeded()
  const lockedLabel = await layerBtn.textContent()
  check('machine layer is locked before voting', /locked/i.test(lockedLabel ?? ''), lockedLabel?.trim())

  await page.goto(`${LEARN}/looks-right?present=1`, { waitUntil: 'networkidle' })
  const presentBtn = page.getByRole('button', { name: /What it would send/ }).first()
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

  const openDetails = await page.locator('details[open]').count()
  check('Go deeper starts closed', openDetails === 0, `${openDetails} open`)

  await page.getByRole('button', { name: /^Allow/ }).first().click()
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
  const afterReload = await page.getByRole('button', { name: 'Use the suggestion' }).count()
  check('plan survives reload', afterReload === 0, `${afterReload} unfilled`)
  await ctx.close()
}

/* 5. The Four Lenses criterion reaches The Harness. */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/the-harness`, { waitUntil: 'networkidle' })
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
  await page.getByRole('button', { name: 'Compare case by case' }).click()
  await page.waitForTimeout(300)
  check('reduced motion still reveals the comparison', await page.getByText('regression', { exact: false }).first().isVisible())
  check('no console errors under reduced motion', errors.length === 0, errors[0] ?? '')
  await ctx.close()
}

await browser.close()

const failed = results.filter((r) => !r.pass)
console.log(`\n${results.length - failed.length}/${results.length} checks passed`)
process.exit(failed.length ? 1 : 0)
