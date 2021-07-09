import eq from './eq'
/**
 * 执行两个对象之间的优化深度比较，确定他们是否应被视为相等
 * @param {*} a
 * @param {*} b
 */
function equal(a: any, b: any) {
  return eq(a, b)
}

export default equal