/**
 * 获取相邻的元素节点
 * @param {*} node 传入节点
 */
function getNextElement(node: any) {
  const nextSibling = node.nextSibling
  if (nextSibling) {
    return function () {
      if (nextSibling.nodeType === 1) {
        return nextSibling
      }
      if (nextSibling.nextSibling) {
        return getNextElement(nextSibling)
      }
      return null
    }()
  }
  return null
}

export { getNextElement }