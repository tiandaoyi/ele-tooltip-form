<template>
  <div id="app">
    <button @click="formDisabled = !formDisabled" style="margin-bottom: 50px">form是否禁用：{{formDisabled ? '是' : '否'}}</button>
    <button @click="disabled1 = !disabled1" style="margin-bottom: 50px">input是否禁用：{{disabled1 ? '是' : '否'}}</button>

    <el-form :disabled="formDisabled">
      <div>下拉框(引入样式版本)</div>

      <EleTooltipInput v-model="msg" :disabled="disabled1"></EleTooltipInput>
      <!-- <EleTooltipSelect v-model="arr" :disabled="disabled1" :options="options"></EleTooltipSelect> -->
    </el-form>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      disabled1: false,
      formDisabled: true,
      placeholder: 'placeholder',
      msg: '',
      arr: []
    }
  },
  mounted() {
    this.msg = '12312asdasdsadasdasdsadasdsad'
  },

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
