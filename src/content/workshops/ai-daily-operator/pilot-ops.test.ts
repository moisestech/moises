import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  DAILY_OPERATOR_DELIVERY_VARIANTS,
  getDeliveryVariant,
  isStudioDuration,
} from './delivery-variants'
import {
  FACILITATOR_PREFLIGHT,
  HOST_PREFLIGHT,
  PARTICIPANT_PRESESSION,
  preflightComplete,
  requiredPreflightIds,
} from './preflight'

describe('Founder Attention OS delivery variants', () => {
  it('keeps Core at 90 minutes and Studio as the deeper format', () => {
    assert.equal(DAILY_OPERATOR_DELIVERY_VARIANTS.core.durationMinutes, 90)
    assert.equal(DAILY_OPERATOR_DELIVERY_VARIANTS.studio.durationMinutes, 180)
    assert.equal(getDeliveryVariant('core').id, 'core')
    assert.equal(getDeliveryVariant('studio').id, 'studio')
  })

  it('requires Studio to include the Core competency rather than becoming a separate course', () => {
    assert.ok(
      DAILY_OPERATOR_DELIVERY_VARIANTS.studio.requiredOutcomes.some((item) =>
        item.toLowerCase().includes('every core outcome'),
      ),
    )
  })

  it('treats 2.5 hours and above as Studio-length', () => {
    assert.equal(isStudioDuration(149), false)
    assert.equal(isStudioDuration(150), true)
    assert.equal(isStudioDuration(180), true)
  })
})

describe('Founder Attention OS preflight', () => {
  it('requires the host essentials while leaving projection optional', () => {
    const required = requiredPreflightIds(HOST_PREFLIGHT)
    assert.ok(required.includes('wifi'))
    assert.ok(required.includes('privacy'))
    assert.equal(required.includes('screen'), false)
  })

  it('requires participant privacy and a real outcome', () => {
    const required = requiredPreflightIds(PARTICIPANT_PRESESSION)
    assert.ok(required.includes('outcome'))
    assert.ok(required.includes('privacy'))
  })

  it('requires facilitator evidence capture preparation', () => {
    const required = requiredPreflightIds(FACILITATOR_PREFLIGHT)
    assert.ok(required.includes('after-action'))
    assert.ok(required.includes('assessment'))
  })

  it('only passes when every required checklist item is complete', () => {
    const required = requiredPreflightIds(FACILITATOR_PREFLIGHT)
    assert.equal(preflightComplete(FACILITATOR_PREFLIGHT, required), true)
    assert.equal(preflightComplete(FACILITATOR_PREFLIGHT, required.slice(1)), false)
  })
})
