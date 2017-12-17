const _ = require('../../src/common/index')
const assert = require('assert')

describe('#Object API:', () => {
  describe('test equal()', () => {
    it(`test all types of situations`, () => {
      const test1 = _.equal(+0, -0) // false
      const test2 = _.equal(undefined, null) // false
      const test3 = _.equal(NaN, NaN) // true
      const test4 = _.equal(1, true) // false
      const test5 = _.equal('5', new String(5)) // true
      const test6 = _.equal(/abc/, new RegExp(/abc/)) // true
      const test7 = _.equal(Object(NaN), NaN) // true
      const test8 = _.equal(Object(+0), 0) // true
      const test9 = _.equal(new Date(2009, 9, 25), new Date(2009, 9, 25)) // true
      const test10 = _.equal(true, new Boolean(true)) // true
      const symbol = Symbol(1)
      const test11 = _.equal(symbol, Object(symbol)) // true
      function Person(name) {
        this.name = name
      }

      function Animal(name) {
        this.name = name
      }

      var person = new Person('diana')
      var animal = new Animal('diana')
      const test12 = _.equal(person, animal) // false
      const test13 = _.equal(() => { return 1 }, () => { return 1 }) // false

      const obj1 = {
        a: 1,
        b: [1, this.obj1],
      }
      const obj2 = {
        a: 1,
        b: [1, this.obj2],
      }
      const test14 = _.equal(obj1, obj2) // true
      assert(!test1 && !test2 && test3 && !test4 && test5 && test6 && test7 && test8
      && test9 && test11 & !test12 & !test13 && test14)
    })
  })
})