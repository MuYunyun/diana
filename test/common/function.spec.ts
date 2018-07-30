import * as _ from '../../src/common/index.js'
import * as assert from 'assert'

describe('#Function API:', () => {
  describe('#debounce', () => {
    it(`debounce`, (done) => {
      let counter = 0
      let incr = function() {
        counter++
      }
      let debouncedIncr = _.debounce(incr, 32)
      debouncedIncr()
      debouncedIncr() // 把上行覆盖掉了
      setTimeout(debouncedIncr, 16) // 16 < 32,相当于又把上行效果覆盖掉
      setTimeout(() => {
        assert.equal(counter, 1)
        done()
      }, 100)
    })
    it(`debounce cancel`, (done) => {
      let counter = 0
      let incr = function() {
        counter++
      }
      let debouncedIncr = _.debounce(incr, 32)
      debouncedIncr()
      debouncedIncr.cancel() // 测试 cancel
      setTimeout(() => {
        assert.equal(counter, 0)
        done()
      }, 100)
    })
    it(`debounce asap`, (done) => {
      let a, b, c
      let counter = 0
      let incr = function () {
        return ++counter
      }
      let debouncedIncr = _.debounce(incr, 64, true)
      a = debouncedIncr()
      b = debouncedIncr()
      assert.strictEqual(a, 1)
      assert.strictEqual(b, 1)
      assert.strictEqual(counter, 1, 'incr was called immediately')
      setTimeout(debouncedIncr, 16)
      setTimeout(debouncedIncr, 32)
      setTimeout(debouncedIncr, 48)
      setTimeout(() => {
        assert.strictEqual(counter, 1, 'incr was debounced')
        c = debouncedIncr()
        assert.strictEqual(c, 2)
        assert.strictEqual(counter, 2, 'incr was called again')
        done()
      }, 128)
    })
    it(`debounce asap cancel`, (done) => {
      let a, b
      let counter = 0
      let incr = function () {
        return ++counter
      }
      let debouncedIncr = _.debounce(incr, 64, true)
      a = debouncedIncr()
      debouncedIncr.cancel()
      b = debouncedIncr()
      assert.strictEqual(a, 1)
      assert.strictEqual(b, 2)
      assert.strictEqual(counter, 2, 'incr was called immediately')
      setTimeout(debouncedIncr, 16)
      setTimeout(debouncedIncr, 32)
      setTimeout(debouncedIncr, 48)
      setTimeout(() => {
        assert.strictEqual(counter, 2, 'incr was debounced')
        done()
      }, 128)
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
