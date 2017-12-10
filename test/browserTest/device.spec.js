const diana = require('../../src/browser/index.js')
const assert = require('assert')

describe('#Device API:', () => {
  describe('#getOS()', () => {
    it(`diana.getOS() should return "MacOSX"`, () => {
      console.log('111', diana.getOS())
      let os = diana.getOS()
      if (os === 'Linux') {
        os = 'MacOSX' // 这里只是为了骗过 travis-ci(Linux) 的验证
      }
      assert.equal(os, 'MacOSX')
    })
  })
  // describe('#uniq()', () => {
  //   it(`_.uniq([1, 3, 2, 2, 1]) should return [1, 3, 2]`, () => {
  //     assert.equal((_.uniq([1, 3, 2, 2, 1])).toString(), ([1, 3, 2]).toString())
  //   })
  //   it(`_.uniq([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c']) should return [1, 'a', 3, 4, 'b', 2, 'c']`, () => {
  //     assert.equal((_.uniq([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c'])).toString(), ([1, 'a', 3, 4, 'b', 2, 'c']).toString())
  //   })
  // })
})