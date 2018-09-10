### _.curry(fn, arity = fn.length, ...args)

函数柯里化。如果提供的参数 (args) 数量足够，则调用传递函数 f ，否则返回一个 curried 函数 f [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/function/curry.ts "View in source")

##### Arguments
`fn` *(Function)* 调用函数

`arity` *(Number)* 参数数量(可不传)

`...args` *(any)* 剩余参数

&nbsp;&nbsp;

##### Example
```js
_.curry(Math.pow)(2)(10) // => 1024
```