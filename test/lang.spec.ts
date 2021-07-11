import * as _ from '../src/index'
import assert from 'assert'

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
    interface person {
      name: string
    }
    class person {
      constructor(pname: string) {
        this.name = pname
      }
    }

    const muyy = new person('muyy')

    function say() {
      console.log('hi');
    }

    const oldObj: any = {
      a: say, // 测试函数
      c: new RegExp('ab+c', 'i'), // 测试正则
      d: muyy, // 测试原型对象
    }

    oldObj.b = oldObj // 循环引用

    const newObj = _.cloneDeep(oldObj)

    it(`#cloneDeep()`, () => {
      // function's name should be equal, the two function Obj shouldn't be equal
      assert(newObj.a.name === oldObj.a.name && newObj.a !== oldObj.b)
      assert(oldObj.c.source === newObj.c.source && oldObj.c !== newObj.c)
      // 考虑到实例对象，所以要做 constructor 的判断
      assert(oldObj.d.constructor === newObj.d.constructor && oldObj.d !== newObj.d)
      assert(oldObj.b !== newObj.b) // 检验深拷贝循环引用
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
    }
    it(`shallow_clone`, () => {
      const copyObject = _.clone(myObject)
      assert(myObject.e === copyObject.e)
    })
  })
  describe('#isType()', () => {
    it(`test isString()`, () => {
      assert(_.isString('I\'m String'))
    })
    it(`test isFunction()`, () => {
      assert(_.isFunction(() => {return 1}))
    })
    it(`test isNumber()`, () => {
      assert(_.isNumber(+'abc') === false)
    })
  })
})