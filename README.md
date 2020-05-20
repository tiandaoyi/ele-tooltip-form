# ele-tooltip-input

vue插件，基于element-ui实现input输入框的tooltip

## 演示

[![演示图片](http://qam0b3d9s.bkt.clouddn.com/ele-tooltip-input.gif "dd")](https://github.com/tiandaoyi/ele-tooltip-input "演示图片")

## 功能

- 输入框为禁用状态(disabled)，如果实际内容超出输入框宽度，则输入框内容末尾出现省略号。
- 输入框为禁用状态(disabled)，如果实际内容超出输入框宽度，鼠标放在input框时，出现tooltip(悬浮效果)。
- 输入框为禁用状态(disabled)且实际内容未超出输入框宽度，或者输入框为非禁用状态时，无效果（功能参考element-ui的input使用）

## 适用场景

详情页面需显示不同状态（可修改，可查看）时使用

## 使用

```
// main.js
import 'EleTooltipInput' from 'ele-tooltip-input'
Vue.use('EleTooltipInput')

// demo.vue
<EleTooltipInput
  v-model="detail.description"
  placeholder="请输入"
  :disabled="disabled"
>
</EleTooltipInput>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
