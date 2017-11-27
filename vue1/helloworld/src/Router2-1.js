import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

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
		{path:'/',component:home},
		{path:'/first',component:routerChild,
			children:[
				{path:'/',component:first},
				{path:'first',component:firstF},
				{path:'second',component:secondS},
			]
		},
		{path:'/second',component:second}
	]
})
new Vue({
	router,
	template:`
		<div id='r'>
			<h1>导航</h1>
			<ol>
				<li><router-link to='/'>/</router-link></li>
				<li><router-link to='/first'>first</router-link></li>
					<ol>
						<li><router-link to='/first/first'>first</router-link></li>
						<li><router-link to='/first/second'>second</router-link></li>
					</ol>
				<li><router-link to='/second'>second</router-link></li>
			</ol>
			<router-view class='a'></router-view>
		</div>
	`
}).$mount('#app')