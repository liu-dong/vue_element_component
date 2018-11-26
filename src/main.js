// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// element UI
import ElementUI from '@/config/elementUiConfig.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.styl'

// iconfont
import '@/assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
