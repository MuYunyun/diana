const _ = require('../../dist/common/index.js')
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
    function person(pname) {
      this.name = pname;
    }

    const muyy = new person('muyy')

    function say() {
      console.log('hi');
    }

    const oldObj = {
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
  describe('#convertMeanValue()', () => {
    const arr = [
      { code: 10, mean: '午高峰时段' },
      { code: 20, mean: '晚高峰时段' },
      { code: 30, mean: '夜宵时段' },
    ]
    it(`test notArray`, () => {
      assert(_.meanToCode({}, '') === null)
      assert(_.codeToMean({}) === null)
    })
    it(`test isArray but the array not contains the code`, () => {
      assert(_.meanToCode([], '晚高峰时段') === null)
      assert(_.codeToMean([], '30') === null)
    })
    it(`test meanToCode()`, () => {
      assert(_.meanToCode(arr, '晚高峰时段') === 20)
    })
    it(`test codeToMean()`, () => {
      assert(_.codeToMean(arr, 30) === '夜宵时段')
    })
  })
})