<template>
  <div id="app">
    <button @click="formDisabled = !formDisabled" style="margin-bottom: 50px">form是否禁用：{{formDisabled ? '是' : '否'}}</button>
    <button @click="disabled = !disabled" style="margin-bottom: 50px">input是否禁用：{{disabled ? '是' : '否'}}</button>

    <el-form :disabled="formDisabled">
      <span>未引入样式版本</span>
      <EleTooltipInput v-model="msg" :disabled="disabled" :placeholder="placeholder"></EleTooltipInput>
    </el-form>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      disabled: false,
      formDisabled: false,
      placeholder: 'placeholder',
      msg: ''
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
