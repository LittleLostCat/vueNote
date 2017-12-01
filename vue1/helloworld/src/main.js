// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import Router from './Router.js'
//import transition from './transition.vue'


import store from './store'
import vuex from './vuex.vue'
new Vue({
	el:'#app',
	store,
	render:h=>h(vuex)
})




// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
// new Vue({
// 	el:'#app',
// 	render:xx=>xx(transition)
// })
