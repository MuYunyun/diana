/**
 * 测试功能所花费的时间
 * @param {*} callback
 * timeTaken(() => Math.pow(2, 10)) -> 1024
 * (logged): timeTaken: 0.019775390625ms
 */
function timeTaken(callback: any) {
  console.time('timeTaken')
  const r = callback()
  console.timeEnd('timeTaken')
  return r
}

export { timeTaken }