import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//直接在路由中通过routes来绑定参数
const first = {template:'<div>first</div>'}
const second = {template:'<div>second</div>'}
const home = {template:'<div>home</div>'}
const routerChild = {template:`
		<div class='routerChild'>
			<h2>组件</h2>
			<router-view class='ab'></router-view>
		</div>
	`}
const firstF = {template:'<div>firstF</div>'}
const secondS = {template:'<div>secondS</div>'}
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/'},
		{path:'/params/:aaa/:bbb'},
		{path:'/params-regex/:id(\\d+)'}
	]
})
new Vue({
	router,
	template:`
		<div id='r'>
			<h1>导航</h1>
			<ol>
				<li><router-link to='/'>/</router-link></li>
				<li><router-link to='/params/111/222'>/params/111/222</router-link></li>
				<li><router-link to='/params-regex/222'>/params-regex/222</router-link></li>
				<li><router-link to='/params-regex/aaa'>/params-regex/aaa</router-link></li>
			</ol>
			<pre>
				<code>
					{{JSON.stringify($route)}}
				</code>
			</pre>
		</div>
	`
}).$mount('#app')