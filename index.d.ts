declare module "diana" {
  export function countInArr(
    arr: number[],
    value: string|number|boolean
  ): number

  export function difference(
    arr1: number[],
    arr2: number[]
  ): number[]

  export function intersection(
    ...arr: any[]
  ): any[]

  export function uniq(
    ...arr: any[]
  ): any[]

  export function each(
    list: any[],
    iteratee: any
  ): any

  export function curry(
    fn: any,
    arity?: number,
    ...args: any[]
  ): any

  export function debounce(
    func: any,
    wait: number,
    immediate?: boolean
  ): any

  export function throttle(
    func: any,
    wait: number,
    options?: any
  ): any

  export function clone(
    Arguments: any
  ): any

  export function cloneDeep(
    Arguments: any
  ): any

  export function isArguments(
    Arguments: any
  ): boolean

  export function isArray(
    Arguments: any
  ): boolean

  export function isDate(
    Arguments: any
  ): boolean

  export function isError(
    Arguments: any
  ): boolean

  export function isFunction(
    Arguments: any
  ): boolean

  export function isNumber(
    Arguments: any
  ): boolean

  export function isRegExp(
    Arguments: any
  ): boolean

  export function isString(
    Arguments: any
  ): boolean

  export function distance(
    x0: number,
    y0: number,
    x1: number,
    y1: number
  ): number

  export function gcd(
    x: number,
    y: number
  ): number

  export function max(
    arr: number[]
  ): number

  export function mean(
    arr: number[]
  ): number

  export function min(
    arr: number[]
  ): number

  export function sum(
    arr: number[]
  ): number

  export function convertInObj(
    obj: any,
    ruleObj: any
  ): any

  export function equal(
    value1: any,
    value2: any
  ): boolean

  export function pairs2obj(
    arr: any[]
  ): any

  export function rdColor(): string

  export function rdNum(
    min: number,
    max: number,
    border?: string
  ): number

  export function isEmail(
    email: string
  ): boolean

  export function isPhoneNum(
    phoneNum: string
  ): boolean

  export function changeCase(
    str: string,
    type?: number
  ): string

  export function escapeStr(
    str: string
  ): string

  export function sortStr(
    str: string
  ): string

  export function trim(
    str: string,
    type?: number
  ): string

  export function timeTaken(
    callback: any
  ): any

  export function obj2query(
    baseurl: string,
    obj: any
  ): string

  export function query2obj(
    queryurl: string
  ): string

  export function meanToCode(
    arr: Array<any>,
    mean: String
  ): (Number | String)

  export function codeToMean(
    arr: Array<any>,
    code: any
  ): String
}