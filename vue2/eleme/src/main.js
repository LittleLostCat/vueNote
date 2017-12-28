// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import VueRouter from 'vue-router'
import goods from './components/goods.vue'



Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
let app = Vue.extend(App);
let router = new VueRouter();
router.map({
	'good':{
		comonent:goods,
	}
})
router.start(app,'#app')
