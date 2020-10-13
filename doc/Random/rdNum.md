### _.rdNum(min, max [, border])

指定整数范围生成随机整数. [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/random/rdNum.ts "View in source")

##### Arguments
`min` *(Number)*: 边界最小值

`max` *(Number)*: 边界最大值

`border` *(String)*: 设定边界(默认参数为 'both', 可选参数: 'left', 'right', 'no')

&nbsp;&nbsp;

##### Returns
*(Number)*: 指定整数范围生成的随机整数.

&nbsp;&nbsp;

##### Example
```js
_.rdNum(1, 3);            // =>   1 <= result <= 3
_.rdNum(1, 3, 'left');    // =>   1 <= result < 3
_.rdNum(1, 3, 'right');   // =>    1 < result <= 3
_.rdNum(1, 3, 'no');      // =>    1 < result < 3
```