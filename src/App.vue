<template>
  <div id="app">
    <span>未引入样式版本</span>
    <button @click="disabled = !disabled" style="margin-bottom: 50px">是否禁用：{{disabled ? '是' : '否'}}</button>
    <EleTooltipInput v-model="msg" :disabled="disabled"></EleTooltipInput>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      disabled: false,
      msg: 'Welcome to Your Vue.js App'
    }
  }
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
