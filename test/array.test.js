const _ = require('../src/index')
const assert = require('assert')
describe('#Array API:', () => {
  describe('#arrayEqual()', () => {
    it(`_.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, () => {
      assert.equal(_.arrayEqual([0, 2, 3], [1, 2, 3]), false)
    })
    it(`_.arrayEqual([1, 2, 3], [1, 2, 3]) should return true`, () => {
      assert(_.arrayEqual([1, 2, 3], [1, 2, 3]))
    })
    it(`_.arrayEqual([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]) should return true`, () => {
      assert(_.arrayEqual([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]))
    })
  })
  describe('#arrayUniq()', () => {
    it(`_.arrayUniq([1, 3, 2, 2, 1]) should return [1, 3, 2]`, () => {
      assert.equal((_.arrayUniq([1, 3, 2, 2, 1])).toString(), ([1, 3, 2]).toString())
    })
    it(`_.arrayUniq([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c']) should return [1, 'a', 3, 4, 'b', 2, 'c']`, () => {
      assert.equal((_.arrayUniq([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c'])).toString(), ([1, 'a', 3, 4, 'b', 2, 'c']).toString())
    })
  })
  describe('#arrayInter()', () => {
    it(`_.arrayInter([1, 3, 'a', 1, 'a']) should return [1, 'a']`, () => {
      assert.equal((_.arrayInter([1, 3, 'a', 1, 'a'])).toString(), ([1, 'a']).toString())
    })
    it(`_.arrayInter([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c']) should return [2, 'a']`, () => {
      assert.equal((_.arrayInter([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c'])).toString(), ([2, 'a']).toString())
    })
  })
})