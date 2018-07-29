const _ = require('../../dist/common/index.js')
const assert = require('assert')

describe('#URL API:', () => {
  describe('#obj2query()', () => {
    it(`test obj2query`, () => {
      assert.equal(_.obj2query('http://abc.cn', {a: 1, b: 2, c: 3}), 'http://abc.cn?a=1&b=2&c=3')
    })
  })
  describe('#query2obj()', () => {
    it(`test query2obj`, () => {
      const url = 'http://muyunyun.cn/posts/a9d08041/?a===%E4%BD%A0%E5%A5%BD&b=2&c=4=&d&'
      const test = _.query2obj(url)
      assert(_.equal(test, { a: '==你好', b: '2', c: '4=' }))
    })
  })
})