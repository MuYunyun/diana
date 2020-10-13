### _.changeCase(str, type)

大小写转化 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/string/changeCase.ts "View in source")

##### Arguments
`str` *(String)*: 待去除空格的字符串

`type` *(Number)*: 1：首字母大写(默认) 2：首页母小写　3：大小写转换

&nbsp;&nbsp;

##### Returns
*(String)*: 返回 String 值

&nbsp;&nbsp;

##### Example
```js
_.changeCase('abcd'); // => 'Abcd'
_.changeCase('aBcD', 3); // => 'AbCd'
```
