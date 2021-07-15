const isType = (type: string, val: unknown) => Object.prototype.toString.call(val) === `[object ${type}]`

const isArguments = (val: unknown) => isType('Arguments', val)
const isFunction = (val: unknown): val is Function => isType('Function', val)
const isString = (val: unknown): val is String => isType('String', val)
const isDate = (val: unknown): val is Date => isType('Date', val)
const isRegExp = (val: unknown) => isType('RegExp', val)
const isError = (val: unknown) => isType('Error', val)
const isSymbol = (val: unknown) => isType('Symbol', val)
const isMap = (val: unknown) => isType('Map', val)
const isWeakMap = (val: unknown) => isType('WeakMap', val)
const isSet = (val: unknown) => isType('Set', val)
const isWeakSet = (val: unknown) => isType('WeakSet', val)
const isNumber = (val: unknown): val is Number => isType('Number', val) && !isNaN(val as number)
const isArray = (val: unknown): val is Array<unknown> => Array.isArray(val)

export {
  isArguments,
  isFunction,
  isString,
  isDate,
  isRegExp,
  isError,
  isSymbol,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isNumber,
  isArray,
}