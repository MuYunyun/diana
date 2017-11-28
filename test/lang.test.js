const _ = require('../src/index')
const assert = require('assert')

describe('Lang API:', () => {
  describe('#isArray()', () => {
    it('_.isArray([1, 2, 3]) should return true', () => {
      assert(_.isArray([1, 2, 3]))
    })
    it('_.isArray("abc") should return false', () => {
      assert.equal(_.isArray("abc"), false)
    })
  })
  describe('#cloneDeep()', () => {
    function anotherFunction() { /*..*/ }
    var array = [1, 2, 3, {}];
    var myObject = {
      a: 2,
      b: true,
      c: anotherFunction,
      d: new Date('2017'),
      e: array,
    };
    it(`assert.deepEqual(myObject, _.cloneDeep(myObject) should return true`, () => {
      assert.deepEqual(myObject, _.cloneDeep(myObject))
    })
  })
})