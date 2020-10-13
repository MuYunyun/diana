### insertAfter(newNode, referenceNode)

在指定节点后插入节点(摘自 JavaScript DOM 编程艺术) [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/browser/dom/insertAfter.ts "View in source")

##### Arguments
`newNode` *(Dom)* 新节点

`referenceNode` *(Dom)* 指定节点

&nbsp;&nbsp;

##### Example
```js
  const image = document.createElement('img')
  image.setAttribute('src', 'images/1.png')
  const imagegallery = document.getElementById('imagegallery')
  _.insertAfter(image, imagegallery)
```