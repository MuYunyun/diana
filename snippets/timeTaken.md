### _.timeTaken(callback)

测试功能所花费的时间 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/time/timeTaken.ts "View in source")

##### Example
```js
_.timeTaken(() => Math.pow(2, 10)) // => 1024
// (logged): timeTaken: 0.019775390625ms
```