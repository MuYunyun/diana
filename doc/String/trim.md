### _.trim(str, type)

去除空格 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/string/trim.ts "View in source")

##### Arguments

`str` *(String)*: 待去除空格的字符串

`type` *(String)*: 'all'-所有空格(默认)，'both'-前后空格，'head'-前空格，'tail'-后空格

&nbsp;&nbsp;

##### Returns

*(String)*: 返回 String 值

&nbsp;&nbsp;

##### Example

```js
_.trim(' ab cd ef '); // => 'abcdef'
_.trim(' ab cd ef ', 'both'); // => 'ab cd ef'
```
