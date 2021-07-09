/**
 * 在指定节点后插入节点
 * @param {HTMLElement} newNode 新节点
 * @param {HTMLElement} referenceNode 指定节点
 */

function insertAfter(newNode: any, referenceNode: any) {
  const parent = referenceNode.parentNode
  if (referenceNode === parent.lastElementChild) {
    // 如果目标元素是 parent 的最后一个子元素
    parent.appendChild(newNode);
  } else {
    parent.insertBefore(newNode, referenceNode.nextSibling);
  }
  return this
}

export default insertAfter