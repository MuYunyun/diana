const diana = require('../src/index')
const assert = require('assert')

describe('Random API:', () => {
  describe('#randomColor()', () => {
    it(`/^#[0-9a-fA-F]$/.test(diana.randomColor()) should return true`, () => {
      assert(/^#[0-9a-fA-F]{6}$/.test(diana.randomColor()))
    })
  })

  describe('#randomNum()', () => {
    it(`diana.randomNum(1, 1) should return 'randomNum() 边界值不合理'`, () => {
      assert.equal(diana.randomNum(1, 1), 'randomNum() 边界值不合理')
    })
    it(`1 <= diana.randomNum(1, 3) <= 3 should return true`, () => {
      let num = diana.randomNum(1, 3)
      assert(num <= 3 && num >=1)
    })
    it(`1 <= diana.randomNum(1, 3, 'left') < 3 should return true`, () => {
      let num = diana.randomNum(1, 3, 'left')
      assert(num < 3 && num >= 1)
    })
    it(`1 < diana.randomNum(1, 3, 'right') <= 3 should return true`, () => {
      let num = diana.randomNum(1, 3, 'right')
      assert(num <= 3 && num > 1)
    })
    it(`1 < diana.randomNum(1, 3, 'no') < 3 should return true`, () => {
      let num = diana.randomNum(1, 3, 'no')
      assert(num < 3 && num > 1)
    })
  })
})