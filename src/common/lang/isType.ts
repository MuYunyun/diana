import { each } from '../collection/each'

const typeObj: any = {}
each(['Arguments', 'Function', 'String', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], (name) => {
  typeObj[`is${name}`] = (obj) => {
    return Object.prototype.toString.call(obj) === `[object ${name}]`
  }
})

typeObj.isNumber = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Number]' && !isNaN(obj)
}

export { typeObj }