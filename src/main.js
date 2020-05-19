import Vue from 'vue'
import App from './App.vue'
import EleTooltipInput from './lib/index.js'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.use(EleTooltipInput);


new Vue({
  el: '#app',
  render: h => h(App)
})
