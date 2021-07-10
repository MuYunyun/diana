import * as _ from '../src/index'
import * as assert from 'assert'

describe('#TIME API:', () => {
  describe('#timeTaken()', () => {
    it(`test timeTaken`, () => {
      assert.equal(_.timeTaken(() => Math.pow(2, 10)), 1024)
    })
  })
})