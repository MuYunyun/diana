### _.convertInObj(obj, ruleObj)

该函数可以将相应字段转化为指定格式 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/object/convertInObj.ts "View in source")

##### Arguments
`obj` *(Object)*

`ruleObj` *(Object)*: 给相应字段配置规则，暂时支持 number、string、boolean 类型

&nbsp;&nbsp;

##### Example
```js
_.convertInObj({ att1: '1', att2: '2', att3: 'att3value', att4: '', att5: 5, att6: 0 },
      {
        number: ['att1', 'att2', 'att4'],
        string: ['att3','att5'],
        boolean: ['att6'],
      })
    => { att1: 1, att2: 2, att3: 'att3value', att4: null, att5: '5', att6: false }
```