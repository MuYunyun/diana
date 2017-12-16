// 拱其它函数使用，返回一个回调函数
const optimizeCb = function (func, context, argCount) {
  if (context === void 0) return func
  switch (argCount) {
    case 1: return (value) => {
      return func.call(context, value)
    }
  }
  return () => {
    return func.apply(context, arguments)
  }
}

module.exports = optimizeCb