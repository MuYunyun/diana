const _ = require('../../dist/common/index.js').default
const assert = require('assert')

describe('#Array API:', () => {
  describe('#uniq()', () => {
    it(`_.uniq([1, 3, 2, 2, 1]) should return [1, 3, 2]`, () => {
      assert(_.equal(_.uniq([1, 3, 2, 2, 1]), [1, 3, 2]))
    })
    it(`_.uniq([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c']) should return [1, 'a', 3, 4, 'b', 2, 'c']`, () => {
      assert(_.equal(_.uniq([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c']), [1, 'a', 3, 4, 'b', 2, 'c']))
    })
  })
  describe('#intersection()', () => {
    it(`_.intersection([1, 3, 'a', 1, 'a']) should return [1, 'a']`, () => {
      assert(_.equal(_.intersection([1, 3, 'a', 1, 'a']), [1, 'a']))
    })
    it(`_.intersection([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c']) should return [2, 'a']`, () => {
      assert(_.equal(_.intersection([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c']), [2, 'a']))
    })
  })
  describe('#countInArr()', () => {
    it(`test _.countInArr`, () => {
      assert.equal(_.countInArr([1, 1, 2, 1, 2, 3], 1), 3)
    })
  })
  describe('#difference()', () => {
    it(`test _.difference`, () => {
      assert(_.equal(_.difference([1, 2, 3], [1, 2, 4]), [3]))
    })
  })
})