// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import router from './router/router'

//Vue.config.productionTip = false

// Vue.use(VueRouter);
/* eslint-disable no-new */
console.log(router)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// let app = Vue.extend(App);
// let router = new VueRouter({
// 	routers
// });
// router.start(app,'#app')





