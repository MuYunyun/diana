const _ = require('../../src/common/index.js')
const assert = require('assert')

describe('Lang API:', () => {
  describe('#isArray()', () => {
    it('_.isArray([1, 2, 3]) should return true', () => {
      Array.isArray = false
      assert(_.isArray([1, 2, 3]))
    })
    it('_.isArray("abc") should return false', () => {
      assert.equal(_.isArray("abc"), false)
    })
  })
  describe('#cloneDeep()', () => {
    function anotherFunction() { /*..*/ }
    var array = [1, 2, 3, {}]
    var myObject = {
      a: 2,
      b: true,
      c: anotherFunction,
      d: new Date('2017'),
      e: array,
    };
    it(`assert(myObject.e !== (_.cloneDeep(myObject)).e) should return true`, () => {
      assert.deepEqual(myObject, _.cloneDeep(myObject))
      assert(myObject.e !== (_.cloneDeep(myObject)).e)
    })
  })
  describe('#clone()', () => {
    function anotherFunction() { /*..*/ }
    var array = [1, 2, 3, {}]
    var myObject = {
      a: 2,
      b: true,
      c: anotherFunction,
      d: new Date('2017'),
      e: array,
    };
    it(`shallow_clone`, () => {
      const copyObject = _.clone(myObject)
      assert(myObject.e === copyObject.e)
    })
  })
})