describe('Random API:', () => {
  describe('#rdColor()', () => {
    it(`/^#[0-9a-fA-F]$/.test(diana.rdColor()) should return true`, () => {
      assert(/^#[0-9a-fA-F]{6}$/.test(diana.rdColor()))
    })
  })

  describe('#rdNum()', () => {
    it(`diana.rdNum(1, 1) should return 'rdNum() 边界值不合理'`, () => {
      assert.equal(diana.rdNum(1, 1), 'rdNum() 边界值不合理')
    })
    it(`1 <= diana.rdNum(1, 3) <= 3 should return true`, () => {
      let num = diana.rdNum(1, 3)
      assert(num <= 3 && num >=1)
    })
    it(`1 <= diana.rdNum(1, 3, 'left') < 3 should return true`, () => {
      let num = diana.rdNum(1, 3, 'left')
      assert(num < 3 && num >= 1)
    })
    it(`1 < diana.rdNum(1, 3, 'right') <= 3 should return true`, () => {
      let num = diana.rdNum(1, 3, 'right')
      assert(num <= 3 && num > 1)
    })
    it(`1 < diana.rdNum(1, 3, 'no') < 3 should return true`, () => {
      let num = diana.rdNum(1, 3, 'no')
      assert(num < 3 && num > 1)
    })
  })
})