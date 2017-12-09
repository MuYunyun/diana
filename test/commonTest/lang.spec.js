describe('Lang API:', () => {
  describe('#isArray()', () => {
    it('diana.isArray([1, 2, 3]) should return true', () => {
      Array.isArray = false
      assert(diana.isArray([1, 2, 3]))
    })
    it('diana.isArray("abc") should return false', () => {
      assert.equal(diana.isArray("abc"), false)
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
    it(`assert(myObject.e !== (diana.cloneDeep(myObject)).e) should return true`, () => {
      assert.deepEqual(myObject, diana.cloneDeep(myObject))
      assert(myObject.e !== (diana.cloneDeep(myObject)).e)
    })
  })
  describe('#clone()', () => {
    function anotherFunction() { /*..*/ }
    var array = [1, 2, 3, {}];
    var myObject = {
      a: 2,
      b: true,
      c: anotherFunction,
      d: new Date('2017'),
      e: array,
    };
    it(`myObject.e === (diana.clone(myObject)).e should return true`, () => {
      assert(myObject.e === (diana.clone(myObject)).e)
    })
  })
})