### _.obj2query(baseurl, obj)

对象转成 URL 中的 query [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/url/obj2query.ts "View in source")

##### Arguments
`baseurl` *(String)* 基础 url

`obj` *(Object)* 待解析对象

&nbsp;&nbsp;

##### Returns
*(String)*: 返回 queryurl

&nbsp;&nbsp;

##### Example
```js
_.obj2query('http://abc.com', {a: 1, b: 2}); // => http://abc.com?a=1&b=2
```