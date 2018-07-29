const _ = require('../../dist/common/index.js').default
const assert = require('assert')

describe('#TIME API:', () => {
  describe('#timeTaken()', () => {
    it(`test timeTaken`, () => {
      assert.equal(_.timeTaken(() => Math.pow(2, 10)), 1024)
    })
  })
})