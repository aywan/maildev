/* global describe, it */
'use strict'

const expect = require('expect')
const scheduler = require('../lib/scheduler')

describe('scheduler', () => {
  it('should emit event', (done) => {
    const at = (new Date()).getTime() + 1000;
    scheduler.on('timeout', function () {
      const diff = (new Date()).getTime() - at;
      // allow 500ms difference
      expect(diff).toBeLessThanOrEqualTo(500)
      done()
    })
    scheduler.resetTime(at)
  })

  it('should emit only soonest event', (done) => {
    const at = (new Date()).getTime() + 1000;
    scheduler.on('timeout', function () {
      const diff = (new Date()).getTime() - at;
      // allow 500ms difference
      expect(diff).toBeLessThanOrEqualTo(500)
      done()
    })
    for (let i = 4; i >= 0; i--) {
      scheduler.resetTime(at + i * 1000)
    }
  })
})
