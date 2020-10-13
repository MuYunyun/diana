### _.query2obj(queryurl)

将 URL 中的 query 转为对象 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/url/query2obj.ts "View in source")

##### Arguments
`queryurl` *(String)* 基础 url

&nbsp;&nbsp;

##### Returns
*(Object)*: 返回解析后的对象

&nbsp;&nbsp;

##### Example
```js
_.query2obj('http://abc.com?a=1&b=2'); // => {a: 1, b: 2}
```