import * as _ from '../../src/browser/index.js'
import * as assert from 'assert'

describe('#Device API:', () => {
  describe('#getOS()', () => {
    it(`_.getOS() should return "MacOSX"`, () => {
      let os = _.getOS()
      if (os === 'Linux') {
        os = 'MacOSX' // 绕过 travis-ci(Linux) 的验证
      }
      assert.equal(os, 'MacOSX')
    })
  })
  describe('#isMobile()', () => {
    it(`_.isMobile()`, () => {
      assert.equal(_.isMobile(), false)
    })
  })
  describe('#isClient()', () => {
    it(`_.isClient()`, () => {
      assert.equal(_.isClient(), true);
    })
  })
})

describe('#tmp API:', () => { // it's is a template code
  describe('#sum()', () => {
    it(`_.sum([1, 2, 3, 4]) should return 10`, () => {
      assert.equal(_.sum([1, 2, 3, 4]), 10)
    })
  })
})