/**
 * 在指定节点后插入节点(摘自 JavaScript DOM 编程艺术)
 * @param {*} newNode 新节点
 * @param {*} referenceNode 指定节点
 */

function insertAfter(newNode, referenceNode) {
  const parent = referenceNode.parentNode
  if (referenceNode === parent.lastChild) { // 检测目标元素是不是 parent 的最后一个子元素
    parent.appendChild(newNode)
  } else {
    parent.insertBefore(newNode, referenceNode.nextSibling)
  }
}

module.exports = insertAfter