### _.debounce(function, wait, [immediate])

函数防抖，用来限制事件的频繁触发。例如: 使用防抖来限制点击查询按钮调用查询 api 的次数。传参 immediate 为 true 时，会立即执行传入的函数，wait 毫秒内不再触发事件后才可以重新触发执行；传参 immediate 不传或为 false 时，wait 毫秒内不触发事件后，会触发传入函数的执行 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/function/debounce.ts "View in source")

##### Arguments

`function` *(fn)* 需执行防抖的函数

`wait` *(number)* 防抖频率

`immediate` *(boolean)* 是否立即执行

&nbsp;&nbsp;

##### Example

```js
// 浏览器中重绘使用防抖
const lazyLayout = _.debounce(calculateLayout, 300)
$(window).resize(lazyLayout)

// 结合装饰器使用防抖
class Demo {
  @Debounce(2000, true)
  submit() {
    // 调用查询 api
  }
}
```