import * as _ from '../src/index'
import assert from 'assert'

const Debounce = _.Debounce

describe('#Function API:', () => {
  describe('#debounce', () => {
    it(`debounce`, (done) => {
      let counter = 0
      let incr = function() {
        counter++
      }
      let debouncedIncr = _.debounce(incr, 32)
      debouncedIncr()
      debouncedIncr() // 模拟快速点击，覆盖上面一行的效果
      setTimeout(debouncedIncr, 16) // 16 < 32,相当于又把上行效果覆盖掉
      setTimeout(() => {
        assert.equal(counter, 1)
        done()
      }, 100)
    })
    it(`debounce asap`, (done) => {
      let counter = 0
      let incr = function () {
        return ++counter
      }
      let debouncedIncr = _.debounce(incr, 64, true)
      debouncedIncr()
      debouncedIncr()
      assert.strictEqual(counter, 1, 'incr was called immediately')
      setTimeout(debouncedIncr, 16)
      setTimeout(debouncedIncr, 32)
      setTimeout(debouncedIncr, 48)
      setTimeout(() => {
        assert.strictEqual(counter, 1, 'incr was debounced')
        debouncedIncr()
        assert.strictEqual(counter, 2, 'incr was called again')
        done()
      }, 128)
    })
    it(`debounce decorator`, (done) => {
      interface Demo {
        count: number;
      }
      class Demo {
        constructor() {
          this.count = 1
        }
        @Debounce(500)
        submit() {
          this.count++
        }
      }
      const demo = new Demo()
      assert.equal(demo.count, 1)
      demo.submit()
      demo.submit()
      assert.equal(demo.count, 1)
      setTimeout(() => {
        assert.equal(demo.count, 2)
        done()
      }, 600)
    })
    it(`debounce decorator asap`, (done) => {
      interface Demo {
        count: number;
      }
      class Demo {
        constructor() {
          this.count = 1
        }
        @Debounce(500, true)
        submit() {
          this.count++
        }
      }
      const demo = new Demo()
      assert.equal(demo.count, 1)
      demo.submit()
      demo.submit()
      assert.equal(demo.count, 2)
      done()
    })
  })
  describe('#throttle', () => {
    it(`throttle`, (done) => {
      let counter = 0
      let incr = function () {
        counter++
      }
      let throttledIncr = _.throttle(incr, 32)
      throttledIncr()
      throttledIncr()
      assert.strictEqual(counter, 1, 'incr was called immediately')
      setTimeout(() => {
        assert.equal(counter, 2, 'incr was throttled')
        throttledIncr()
        assert.equal(counter, 3)
        done()
      }, 100)
    })
    it(`throttle arguments`, (done) => {
      let value = 0
      let update = function (val: any) {
        value = val
      }
      let throttledUpdate = _.throttle(update, 32)
      throttledUpdate(1)
      throttledUpdate(2)
      setTimeout(() => {
        assert.equal(value, 2, 'update was throttled')
        done()
      }, 100)
    })
    it(`throttle does not trigger leading call when leading is set to false`, (done) => {
      let counter = 0
      let incr = function () {
        counter++
      }
      let throttledIncr = _.throttle(incr, 100, {leading: false})
      throttledIncr()
      setTimeout(throttledIncr, 50)
      setTimeout(throttledIncr, 60)
      setTimeout(throttledIncr, 200)
      assert.strictEqual(counter, 0)
      setTimeout(() => {
        assert.strictEqual(counter, 1)
      }, 250)
      setTimeout(() => {
        assert.strictEqual(counter, 2)
        done()
      }, 350)
    })
    it(`throttle does not trigger trailing call when trailing is set to false`, (done) => {
      let counter = 0
      let incr = function () {
        counter++
      }
      let throttledIncr = _.throttle(incr, 60, {trailing: false})
      throttledIncr()
      throttledIncr()
      throttledIncr()
      assert.strictEqual(counter, 1)
      setTimeout(() => {
        assert.strictEqual(counter, 1)
        throttledIncr()
        throttledIncr()
        assert.strictEqual(counter, 2)
        done()
      }, 100)
    })
    it(`throttle cancel`, (done) => {
      let counter = 0
      let incr = function () {
        counter++
      }
      let throttledIncr = _.throttle(incr, 32)
      throttledIncr()
      throttledIncr.cancel()
      throttledIncr()
      throttledIncr()

      assert.strictEqual(counter, 2, 'incr was called immediately')
      setTimeout(() => {
        assert.strictEqual(counter, 3, 'incr was throttled')
        done()
      }, 100)
    })
  })
  describe('#curry()', () => {
    it(`test curry()`, () => {
      assert(_.curry(Math.pow)(2)(10) === 1024)
      assert(_.curry(Math.min, 3)(10)(50)(2) === 2)
      assert(typeof(_.curry(Math.pow)(2)) === 'function')
    })
  })
})
