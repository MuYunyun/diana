const diana = require('../src/index')
const assert = require('assert')
describe('#Array API:', () => {
  describe('#arrayEqual()', () => {
    it(`diana.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, () => {
      assert.equal(diana.arrayEqual([0, 2, 3], [1, 2, 3]), false)
    })
    it(`diana.arrayEqual([1, 2, 3], [1, 2, 3]) should return true`, () => {
      assert(diana.arrayEqual([1, 2, 3], [1, 2, 3]))
    })
    it(`diana.arrayEqual([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]) should return true`, () => {
      assert(diana.arrayEqual([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]))
    })
  })
})