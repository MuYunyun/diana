### _.clone(obj)

浅拷贝 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/clone.ts "View in source")

##### Arguments
`any` *(values)*: 拷贝对象

##### Returns
*(any)*: 拷贝出的对象

##### Example
```js
let obj = {a: 1}
_.clone(obj).a === obj.a; // => true
```