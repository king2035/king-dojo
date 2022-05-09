import Vue from 'vue'
import bkMagic from '@ghost2019/bk-magic-vue'
import '@ghost2019/bk-magic-vue/dist/bk-magic-vue.min.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(bkMagic)

new Vue({
  render: h => h(App),
}).$mount('#app')
