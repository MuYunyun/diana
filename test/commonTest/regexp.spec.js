describe('Regexp API:', () => {

  describe('#isEmail()', () => {
    it('diana.isEmail("abc-123@gmail.com") should return true ', () => {
      assert(diana.isEmail("abc-123@gmail.com"))
    })
    it('diana.isEmail("a\-diana.a@gmail.com") should return true ', () => {
      assert(diana.isEmail("a\-diana.a@gmail.com"))
    })
    it('diana.isEmail("a_@.com") should return false ', () => {
      assert.equal(diana.isEmail("a_@.com"), false)
    })
    it('diana.isEmail("a_1@a.com") should return true ', () => {
      assert(diana.isEmail("a_1@a.com"))
    })
  })

  describe('#isPhoneNum()', () => {
    it('diana.isPhoneNum("18882324234") should return true ', () => {
      assert(diana.isPhoneNum("18882324234"))
    })
    it('diana.isPhoneNum("8618882324234") should return true ', () => {
      assert(diana.isPhoneNum("8618882324234"))
    })
    it('diana.isPhoneNum("5534553") should return false', () => {
      assert(!diana.isPhoneNum("5534553"))
    })
  })
})