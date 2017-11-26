const _ = require('../src/index')
const assert = require('assert')

describe('Regexp API:', () => {

  describe('#isEmail()', () => {
    it('_.isEmail("abc-123@gmail.com") should return true ', () => {
      assert(_.isEmail("abc-123@gmail.com"))
    })
    it('_.isEmail("a\-_.a@gmail.com") should return true ', () => {
      assert(_.isEmail("a\-_.a@gmail.com"))
    })
    it('_.isEmail("a_@.com") should return false ', () => {
      assert.equal(_.isEmail("a_@.com"), false)
    })
    it('_.isEmail("a_1@a.com") should return true ', () => {
      assert(_.isEmail("a_1@a.com"))
    })
  })

  describe('#isPhoneNum()', () => {
    it('_.isPhoneNum("18882324234") should return true ', () => {
      assert(_.isPhoneNum("18882324234"))
    })
    it('_.isPhoneNum("8618882324234") should return true ', () => {
      assert(_.isPhoneNum("8618882324234"))
    })
    it('_.isPhoneNum("5534553") should return false', () => {
      assert(!_.isPhoneNum("5534553"))
    })
  })
})