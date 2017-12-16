const _ = require('../../src/common/index.js')
const assert = require('assert')

describe('#Collection API:', () => {
  describe('#each([1, 2, 3], () => {})', () => {
    it(`test each`, () => {
      let arr = []
      _.each([1, 2, 3], (values) => {
        arr.push(values)
      })
      assert(arr.toString() === [1, 2, 3].toString())
    })
  })
  describe('#each({one: 1, two: 2, three: 3}, () => {})', () => {
    it(`test each`, () => {
      let arr = []
      _.each({ one: 1, two: 2, three: 3 }, (values) => {
        arr.push(values)
      })
      assert(arr.toString() === [1, 2, 3].toString())
    })
  })
})