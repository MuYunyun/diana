### _.equal(value1, value2)

判断两个任意值是否相等(包含对象、数组深度遍历) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/object/equal.ts "View in source")

##### Example
```js
const obj1 = {
    a: 1,
    b: [1, this.obj1],
}
const obj2 = {
    a: 1,
    b: [1, this.obj2],
}
_.equal(obj1, obj2) // => true
```