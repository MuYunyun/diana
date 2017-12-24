const _ = require('../../src/common/index.js')
const assert = require('assert')

describe('String API:', () => {
  describe('#trim()', () => {
    it('_.trim(" 你好 ， 我在 测试 ") should return "你好，我在测试"', () => {
      assert.equal(_.trim(" 你好 ， 我在 测试 "), "你好，我在测试")
    })
    it('_.trim(" 你好 ， 我在 测试 ", 1) should return "你好，我在测试"', () => {
      assert.equal(_.trim(" 你好 ， 我在 测试 ", 1), "你好，我在测试")
    })
    it('_.trim(" 你好 ， 我在 测试 ", 2) should return "你好 ， 我在 测试"', () => {
      assert.equal(_.trim(" 你好 ， 我在 测试 ", 2), "你好 ， 我在 测试")
    })
    it('_.trim(" 你好 ， 我在 测试 ", 3) should return "你好 ， 我在 测试 "', () => {
      assert.equal(_.trim(" 你好 ， 我在 测试 ", 3), "你好 ， 我在 测试 ")
    })
    it('_.trim(" 你好 ， 我在 测试 ", 4) should return " 你好 ， 我在 测试"', () => {
      assert.equal(_.trim(" 你好 ， 我在 测试 ", 4), " 你好 ， 我在 测试")
    })
  })

  describe('#changeCase()', () => {
    it('_.changeCase("muyunyun") should return "Muyunyun"', () => {
      assert.equal(_.changeCase("muyunyun"), "Muyunyun")
    })
    it('_.changeCase("abcd", 1) should return "Abcd"', () => {
      assert.equal(_.changeCase("abcd", 1), "Abcd")
    })
    it('_.changeCase("AbCd", 2) should return "aBCD"', () => {
      assert.equal(_.changeCase("AbCd", 2), "aBCD")
    })
    it('_.changeCase("Ab@Cd", 3) should return "aB@cD"', () => {
      assert.equal(_.changeCase("Ab@Cd", 3), "aB@cD")
    })
  })

  describe('#sortStr()', () => {
    it('test _.sortStr()', () => {
      assert.equal(_.sortStr('cabbage'), 'aabbceg')
    })
  })

  describe('#escapeStr()', () => {
    it('test _.escapeStr()', () => {
      assert.equal(_.escapeStr('(test)'), '\\(test\\)')
    })
  })
})