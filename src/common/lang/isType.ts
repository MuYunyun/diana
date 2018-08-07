import { each } from '../collection/each'

const typeObj: any = {}
each(['Arguments', 'Function', 'String', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], (name: String) => {
  typeObj[`is${name}`] = (obj: any) => {
    return Object.prototype.toString.call(obj) === `[object ${name}]`
  }
})

typeObj.isNumber = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Number]' && !isNaN(obj)
}

/**
 * 是否为数组
 * @param {value}
 */
typeObj.isArray = (value: any) => {
  return Array.isArray(value)
}

export { typeObj }