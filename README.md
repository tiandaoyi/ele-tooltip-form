# ele-tooltip-form

vue插件，基于element-ui实现动态表单提示框(tooltip)

## 演示

> 输入框

[![input演示图片](http://qam0b3d9s.bkt.clouddn.com/ele-tooltip-input.gif "input演示图片")](https://github.com/tiandaoyi/ele-tooltip-form "input演示图片")

> 下拉框

[![select演示图片](http://qam0b3d9s.bkt.clouddn.com/ele-tooltip-select.gif "select演示图片")](https://github.com/tiandaoyi/ele-tooltip-form "select演示图片")

## 功能

> input输入框

- 输入框为禁用状态(disabled)，如果实际内容超出输入框宽度，则输入框内容末尾出现省略号。
- 输入框为禁用状态(disabled)，如果实际内容超出输入框宽度，鼠标放在input框时，出现tooltip(提示效果)。
- 输入框为禁用状态(disabled)且实际内容未超出输入框宽度，或者输入框为非禁用状态时，无效果（功能参考element-ui的input使用）
- 支持使用在el-form内，且支持el-form的disabled

> select下拉框

- 下拉框为禁用状态(disabled)，如果实际内容长度大于2，鼠标放入下拉框中，出现tooltip(提示效果)。
- 下拉框为禁用状态(disabled)且实际内容长度小于2，或者下拉框为非禁用状态时，无效果（功能参考element-ui的input使用）
- 支持使用在el-form内，且支持el-form的disabled

## 适用场景

详情页面需显示不同状态（可修改，可查看）时使用

## 使用

```
npm i ele-tooltip-form

// main.js 引入
import {
  EleTooltipInput
  EleTooltipSelect
} from 'ele-tooltip-form'
Vue.use('EleTooltipInput')
Vue.use('EleTooltipSelect')

// 输入框
<EleTooltipInput
  v-model="detail.description"
  placeholder="请输入"
  :disabled="disabled"
>
</EleTooltipInput>

// 下拉框
<EleTooltipSelect 
  v-model="arr" 
  :disabled="disabled1"
  :options="options"
>
</EleTooltipSelect>
```



## 特殊

使用时会出现三种情况
1. 直接使用
2. 外层包裹el-form, 如果form禁用且input非禁用，也是生效的
3. 外层包裹el-form + el-form-item，,如果form禁用且input非禁用，也是生效的



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
