const mtool = require('../src/index')
const assert = require('assert')
describe('Array API:', () => {
  describe('arrayEqual()', () => {
    it(`mtool.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, () => {
      assert.equal(mtool.arrayEqual([0, 2, 3], [1, 2, 3]), false)
    })
    it(`mtool.arrayEqual([1, 2, 3], [1, 2, 3]) should return true`, () => {
      assert(mtool.arrayEqual([1, 2, 3], [1, 2, 3]))
    })
  })
})