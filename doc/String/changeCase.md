### _.changeCase(str, type)

大小写转化 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/string/changeCase.ts "View in source")

##### Arguments

`str` *(String)*: 待去除空格的字符串

`type` *(String)*: 'upperCaseFirst'：仅首字母大写(默认) 'lowerCaseFirst'：仅首页母小写 'toggle'：大小写转换

&nbsp;&nbsp;

##### Returns

*(String)*: 返回 String 值

&nbsp;&nbsp;

##### Example

```js
_.changeCase('abcd'); // => 'Abcd'
_.changeCase('aBcD', 'toggle'); // => 'AbCd'
```
