import * as _ from '../src/index'
import assert from 'assert'

describe('#TIME API:', () => {
  describe('#timeTaken()', () => {
    it(`test timeTaken`, () => {
      assert.equal(_.timeTaken(() => Math.pow(2, 10)), 1024)
    })
  })
})