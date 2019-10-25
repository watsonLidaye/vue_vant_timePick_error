// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/index'
import VueRouter from 'vue-router'
import utill from './assets/js/util'
import '@/assets/js/public.js'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import 'mint-ui/lib/style.css'
import '@/assets/css/cssrest.css'
import '@/assets/css/public.css'
import 'vant/lib/index.css'
import Lockr from 'lockr'
import {Popup,DatetimePicker,Notify,Toast,Dialog} from 'vant'

require('es6-promise').polyfill()
Es6Promise.polyfill()

const router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
	next()
  })
  router.afterEach((to, from) => {
	window.document.title = to.meta.title
  })

Vue.prototype.$utill = utill
Vue.prototype.$Dialog = Dialog

Vue.use(Popup)
Vue.use(DatetimePicker)
Vue.use(Notify)
Vue.use(Lockr)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(VueRouter)
Vue.prototype.bus = new Vue()
window.router = router
window.Lockr = Lockr
const bus = new Vue()
window.bus = bus

Vue.config.productionTip = false
/* eslint-disable no-new */

// console.log(router)
new Vue({
	el: '#app',
	router: router,
	components: {
		App
	},
	template: '<App/>',
}).$mount('#app')
//进入页面的通用方法
