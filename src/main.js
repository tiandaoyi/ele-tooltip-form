import Vue from 'vue'
import App from './App.vue'
import common from './lib/index.js'
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.use(common);

new Vue({
  el: '#app',
  render: h => h(App)
})
