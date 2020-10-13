***
### _.isArguments(object)

如果 object 是一个参数对象，返回 true [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/lang/isType.ts "View in source")

##### Example
```js
(function(){ return _.isArguments(arguments); })(1, 2, 3); // => true
_.isArguments([1,2,3]); // => false
```
***