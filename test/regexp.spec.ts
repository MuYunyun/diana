import * as _ from '../src/index'
import * as assert from 'assert'

describe('Regexp API:', () => {

  describe('#isEmail()', () => {
    it('_.isEmail("abc-123@gmail.com") should return true ', () => {
      assert(_.isEmail("abc-123@gmail.com"))
    })
    it('_.isEmail("a\-diana.a@gmail.com") should return true ', () => {
      assert(_.isEmail("a\-diana.a@gmail.com"))
    })
    it('_.isEmail("a_@.com") should return false ', () => {
      assert.equal(_.isEmail("a_@.com"), false)
    })
    it('_.isEmail("a_1@a.com") should return true ', () => {
      assert(_.isEmail("a_1@a.com"))
    })
  })

  describe('#isPhoneNum()', () => {
    it('_.isPhoneNum()', () => {
      assert(_.isPhoneNum("18882324234"))
      assert(_.isPhoneNum("17372247445"))
      assert(_.isPhoneNum("8618882324234"))
      assert(!_.isPhoneNum("5534553"))
    })
  })
})