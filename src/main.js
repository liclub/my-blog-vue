// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui' 
import App from './App'
import router from './router'
import Velocity from 'velocity-animate'

import animate from 'animate.css'
import 'element-ui/lib/theme-chalk/index.css' 
import '@/assets/css/reset.css'
import '@/assets/css/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(animate)
// Vue.use(Velocity)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
