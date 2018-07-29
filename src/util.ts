// 拱其它函数使用，返回一个回调函数
const optimizeCb = function (func: any, context: any, argCount?: any) {
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

export { optimizeCb }