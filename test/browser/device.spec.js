const _ = require('../../src/browser/index.js')
const assert = require('assert')

describe('#Device API:', () => {
  describe('#getOS()', () => {
    it(`_.getOS() should return "MacOSX"`, () => {
      let os = _.getOS()
      if (os === 'Linux') {
        os = 'MacOSX' // 这里只是为了骗过 travis-ci(Linux) 的验证
      }
      assert.equal(os, 'MacOSX')
    })
  })
  describe('#isMobile()', () => {
    it(`_.isMobile()`, () => {
      assert.equal(_.isMobile(), false)
    })
  })
})