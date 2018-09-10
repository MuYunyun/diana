### _.redirect(url, aslink = true)

重定向到指定的 URL [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/browser/http/redirect.ts "View in source")

##### Arguments
`url` *(String)* 待跳转 URL

`aslink` *(Boolean)* 默认为 true, 传 false 时，你不能通过 “前进” 和 “后退” 来访问已经被替换的 URL

&nbsp;&nbsp;

##### Example
```js
_.redirect('http://muyunyun.cn/diana/'); // 重定向到 http://muyunyun.cn/diana/ 这个网址
```