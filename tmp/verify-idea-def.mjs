import { mkdirSync } from 'fs'
import { join } from 'path'
import { chromium } from 'playwright'

const BASE = process.env.BASE ?? 'http://localhost:3003'
const LEARN = `${BASE}/workshop/trust-is-not-a-vibe/learn`
const SHOTS = join(process.cwd(), 'tmp', 'trust-idea-def')
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

const browser = await chromium.launch()

{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/looks-right`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await openPortion(page, 'The idea')

  check(
    'the product sentence is marked',
    (await page.locator('[data-trust-idea-term]').filter({ hasText: 'Cohort Studio is a made-up enrollment product' }).count()) === 1
  )
  await page
    .locator('[data-trust-idea-term]')
    .filter({ hasText: 'Cohort Studio is a made-up enrollment product' })
    .click()
  check(
    'a marked term opens its definition',
    await page.getByText('A fictional enrollment tool. Not a live dashboard.').isVisible()
  )
  const selfDef = page.locator('[data-trust-idea-def]')
  const selfSizes = await selfDef.evaluate((el) => {
    const meaning = el.querySelector('span:last-child')
    return {
      root: parseFloat(getComputedStyle(el).fontSize),
      meaning: parseFloat(getComputedStyle(meaning).fontSize),
      width: el.getBoundingClientRect().width,
    }
  })
  check('self-paced definition is above text-sm', selfSizes.meaning >= 16, JSON.stringify(selfSizes))
  await page
    .locator('[data-trust-idea-term]')
    .filter({ hasText: 'An agent inside it just wrote what to do with a cohort' })
    .click()
  check('opening another term closes the previous definition', (await page.locator('[data-trust-idea-def]').count()) === 1)
  check(
    'the new term’s definition is the one that stays open',
    await page.getByText('The model proposed an action. That is a draft, not permission to act.').isVisible()
  )
  check(
    'the previous definition is gone',
    (await page.getByText('A fictional enrollment tool. Not a live dashboard.').count()) === 0
  )
  await page.screenshot({ path: join(SHOTS, 'self-paced-def.png'), fullPage: true })
  await ctx.close()
}

{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(`${LEARN}/looks-right?present=1`, { waitUntil: 'networkidle' })
  await waitForSteps(page)
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(400)
  const term = page.locator('[data-trust-idea-term]').filter({
    hasText: 'Cohort Studio is a made-up enrollment product',
  })
  await term.waitFor({ state: 'visible', timeout: 15000 })
  await term.click()
  const def = page.locator('[data-trust-idea-def]')
  await def.waitFor({ state: 'visible', timeout: 5000 })
  const sizes = await def.evaluate((el) => {
    const label = el.querySelector('span:first-child')
    const meaning = el.querySelector('span:last-child')
    return {
      root: parseFloat(getComputedStyle(el).fontSize),
      label: parseFloat(getComputedStyle(label).fontSize),
      meaning: parseFloat(getComputedStyle(meaning).fontSize),
      width: el.getBoundingClientRect().width,
    }
  })
  check('present idea definition root ≥ 20px', sizes.root >= 20, JSON.stringify(sizes))
  check('present idea meaning ≥ 20px', sizes.meaning >= 20, String(sizes.meaning))
  check(
    'present idea definition shows the meaning',
    await page.getByText('A fictional enrollment tool. Not a live dashboard.').isVisible()
  )
  const defBox = await def.boundingBox()
  const stillBox = await page.locator('[data-trust-idea-still="looks-right-cohort-studio"]').boundingBox()
  check(
    'present idea definition sits above the still',
    Boolean(defBox && stillBox && defBox.y + defBox.height <= stillBox.y + 8),
    `${Math.round((defBox?.y ?? 0) + (defBox?.height ?? 0))} vs ${Math.round(stillBox?.y ?? 0)}`
  )
  await page.screenshot({ path: join(SHOTS, 'present-cohort-studio.png') })

  await page.keyboard.press('Escape')
  await page.waitForTimeout(150)
  check('Escape closes the presenting idea definition', (await def.count()) === 0)

  for (let i = 0; i < 3; i += 1) {
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(250)
  }
  const cardTerm = page.locator('[data-trust-idea-term]').filter({ hasText: /^the card\.?$/ })
  if ((await cardTerm.count()) > 0) {
    await cardTerm.first().click()
    const cardDef = page.locator('[data-trust-idea-def]')
    await cardDef.waitFor({ state: 'visible', timeout: 5000 })
    const cardSize = parseFloat(await cardDef.evaluate((el) => getComputedStyle(el).fontSize))
    check('present “the card” definition ≥ 20px', cardSize >= 20, String(cardSize))
    await page.screenshot({ path: join(SHOTS, 'present-the-card.png') })
  } else {
    check('present “the card” term is on a later beat', false, 'term not found')
  }
  await ctx.close()
}

await browser.close()
const failed = results.filter((row) => !row.pass)
console.log(`\n${results.filter((row) => row.pass).length}/${results.length} passed`)
if (failed.length) process.exit(1)
