// 拱其它函数使用，返回一个回调函数
const optimizeCb = function (func: any, context: any, argCount?: any) {
  if (context === void 0) return func
  switch (argCount) {
    case 1: return (value: any) => {
      return func.call(context, value)
    }
  }
  return (...args: Array<any>) => {
    return func.apply(context, args)
  }
}

export { optimizeCb }