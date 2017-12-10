const diana = require('../../src/common/index.js')
const assert = require('assert')

describe('String API:', () => {
  describe('#trim()', () => {
    it('diana.trim(" 你好 ， 我在 测试 ") should return "你好，我在测试"', () => {
      assert.equal(diana.trim(" 你好 ， 我在 测试 "), "你好，我在测试")
    })
    it('diana.trim(" 你好 ， 我在 测试 ", 1) should return "你好，我在测试"', () => {
      assert.equal(diana.trim(" 你好 ， 我在 测试 ", 1), "你好，我在测试")
    })
    it('diana.trim(" 你好 ， 我在 测试 ", 2) should return "你好 ， 我在 测试"', () => {
      assert.equal(diana.trim(" 你好 ， 我在 测试 ", 2), "你好 ， 我在 测试")
    })
    it('diana.trim(" 你好 ， 我在 测试 ", 3) should return "你好 ， 我在 测试 "', () => {
      assert.equal(diana.trim(" 你好 ， 我在 测试 ", 3), "你好 ， 我在 测试 ")
    })
    it('diana.trim(" 你好 ， 我在 测试 ", 4) should return " 你好 ， 我在 测试"', () => {
      assert.equal(diana.trim(" 你好 ， 我在 测试 ", 4), " 你好 ， 我在 测试")
    })
  })

  describe('#changeCase()', () => {
    it('diana.changeCase("muyunyun") should return "Muyunyun"', () => {
      assert.equal(diana.changeCase("muyunyun"), "Muyunyun")
    })
    it('diana.changeCase("abcd", 1) should return "Abcd"', () => {
      assert.equal(diana.changeCase("abcd", 1), "Abcd")
    })
    it('diana.changeCase("AbCd", 2) should return "aBCD"', () => {
      assert.equal(diana.changeCase("AbCd", 2), "aBCD")
    })
    it('diana.changeCase("Ab@Cd", 3) should return "aB@cD"', () => {
      assert.equal(diana.changeCase("Ab@Cd", 3), "aB@cD")
    })
  })
})