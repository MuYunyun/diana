import * as _ from '../../src/common/index.js'
import * as assert from 'assert'

describe('Random API:', () => {
  describe('#rdColor()', () => {
    it(`/^#[0-9a-fA-F]$/.test(_.rdColor()) should return true`, () => {
      assert(/^#[0-9a-fA-F]{6}$/.test(_.rdColor()))
    })
  })

  describe('#rdNum()', () => {
    it(`'rdNum() 边界值不合理'`, () => {
      assert((_.rdNum(1, 1) === 'rdNum() 边界值不合理') && (_.rdNum(1, 2, 'no') === 'rdNum() 边界值不合理'))
    })
    it(`1 <= _.rdNum(1, 3) <= 3 should return true`, () => {
      let num = _.rdNum(1, 3)
      assert(num <= 3 && num >=1)
    })
    it(`1 <= _.rdNum(1, 3, 'left') < 3 should return true`, () => {
      let num = _.rdNum(1, 3, 'left')
      assert(num < 3 && num >= 1)
    })
    it(`1 < _.rdNum(1, 3, 'right') <= 3 should return true`, () => {
      let num = _.rdNum(1, 3, 'right')
      assert(num <= 3 && num > 1)
    })
    it(`1 < _.rdNum(1, 3, 'no') < 3 should return true`, () => {
      let num = _.rdNum(1, 3, 'no')
      assert(num < 3 && num > 1)
    })
  })
})