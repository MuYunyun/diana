describe('#Array API:', () => {
  describe('#equal()', () => {
    it(`diana.equal([0, 2, 3], [1, 2, 3]) should return false`, () => {
      assert.equal(diana.equal([0, 2, 3], [1, 2, 3]), false)
    })
    it(`diana.equal([1, 2, 3], [1, 2, 3]) should return true`, () => {
      assert(diana.equal([1, 2, 3], [1, 2, 3]))
    })
    it(`diana.equal([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]) should return true`, () => {
      assert(diana.equal([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]))
    })
    it(`diana.equal('123', '123') should return 'parameter error in equal()'`, () => {
      assert.equal(diana.equal('123', '123'), 'parameter error in equal()')
    })
  })
  describe('#uniq()', () => {
    it(`diana.uniq([1, 3, 2, 2, 1]) should return [1, 3, 2]`, () => {
      assert.equal((diana.uniq([1, 3, 2, 2, 1])).toString(), ([1, 3, 2]).toString())
    })
    it(`diana.uniq([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c']) should return [1, 'a', 3, 4, 'b', 2, 'c']`, () => {
      assert.equal((diana.uniq([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c'])).toString(), ([1, 'a', 3, 4, 'b', 2, 'c']).toString())
    })
  })
  describe('#intersection()', () => {
    it(`diana.intersection([1, 3, 'a', 1, 'a']) should return [1, 'a']`, () => {
      assert.equal((diana.intersection([1, 3, 'a', 1, 'a'])).toString(), ([1, 'a']).toString())
    })
    it(`diana.intersection([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c']) should return [2, 'a']`, () => {
      assert.equal((diana.intersection([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c'])).toString(), ([2, 'a']).toString())
    })
  })
})