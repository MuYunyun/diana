// const _ = require('../index')
const each = require('../collection/each')

const typeObj = {}
each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], (name) => {
  typeObj[`is${name}`] = (obj) => {
    return Object.prototype.toString.call(obj) === `[object ${name}]`
  }
})

module.exports = typeObj