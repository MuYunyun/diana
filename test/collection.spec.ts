import * as _ from '../src/index'
import assert from 'assert'

describe('#Collection API:', () => {
  describe('#each([1, 2, 3], () => {})', () => {
    it(`test each`, () => {
      const arr: any = []
      _.each([1, 2, 3], (values: any) => {
        arr.push(values)
      })
      assert(arr.toString() === [1, 2, 3].toString())
    })
  })
  describe('#each({one: 1, two: 2, three: 3}, () => {})', () => {
    it(`test each`, () => {
      const arr: any = []
      _.each({ one: 1, two: 2, three: 3 }, (values: any) => {
        arr.push(values)
      })
      assert(arr.toString() === [1, 2, 3].toString())
    })
    it(`test chain calls`, () => {
      const arr: any = []
      const result = _.each({ one: 1, two: 2, three: 3 }, (values: any) => {
        arr.push(values)
      }).isString('abc')
      assert(result === true)
    })
  })
})