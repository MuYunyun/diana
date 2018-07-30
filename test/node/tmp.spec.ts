import * as _ from '../../src/node/index.js'
import * as assert from 'assert'

describe('#tmp API:', () => { // it's is a template code
  describe('#sum()', () => {
    it(`_.sum([1, 2, 3, 4]) should return 10`, () => {
      assert.equal(_.sum([1, 2, 3, 4]), 10)
    })
  })
})