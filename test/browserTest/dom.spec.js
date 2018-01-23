const _ = require('../../src/browser/index.js')
const assert = require('assert')

describe('#DOM API:', () => {
  let $ele = null
  beforeEach(function() {
    const container = document.createElement('div')
    container.setAttribute('id', 'm_addClass')

    const p1 = document.createElement('p')
    p1.setAttribute('id', 'p1Test')
    const test1 = document.createTextNode('test1')
    p1.appendChild(test1)

    const p2 = document.createElement('p')
    const test2 = document.createTextNode('test2')
    p2.appendChild(test2)

    const test3 = document.createTextNode('test3')

    container.appendChild(p1)
    container.appendChild(test3)
    container.appendChild(p2)

    document.body.appendChild(container)

    $ele = document.getElementById('m_addClass')
  })
  describe('#addClass()', () => {
    it(`_.addClass()`, () => {
      _.addClass($ele, 'test')
      const className = $ele.className
      _.equal(className, 'test')
    })
  })
  describe('#getNextElement()', () => {
    it(`_.getNextElement()`, () => {
      const p1 = document.getElementById('p1Test')
      const hopeP2 = _.getNextElement(p1)
      _.equal(hopeP2.lastChild.nodeValue, 'test2')
    })
  })
  afterEach(function() {
    document.body.removeChild($ele)
  })
})