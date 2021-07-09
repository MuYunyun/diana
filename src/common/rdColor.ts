/**
 * 随机生成颜色 http://www.cnblogs.com/rubylouvre/archive/2009/09/24/1572977.html
 */
function rdColor() {
  return '#' + ('000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6)
}

export default rdColor