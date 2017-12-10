const diana = require('../../src/common/index.js')
const assert = require('assert')

describe('#Math API:', () => {
  describe('#sum()', () => {
    it(`diana.sum([1, 2, 3, 4]) should return 10`, () => {
      assert.equal(diana.sum([1, 2, 3, 4]), 10)
    })
  })
  describe('#mean()', () => {
    it(`diana.mean([1, 2, 3, 4]) should return 2.5`, () => {
      assert.equal(diana.mean([1, 2, 3, 4]), 2.5)
    })
  })
  describe('#max()', () => {
    it(`diana.max([1, 2, 3, 4]]) should return 4`, () => {
      assert.equal(diana.max([1, 2, 3, 4]), 4)
    })
  })
  describe('#min()', () => {
    it(`diana.min([1, 2, 3, 4]) should return 1`, () => {
      assert.equal(diana.min([1, 2, 3, 4]), 1)
    })
  })
})