import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//在使用:to绑定时
//params通过name传值
//query通过path传值

const users = {
	template:`
		<div>
			<h2>Users</h2>
			<router-view></router-view>
		</div>
	`
}
const user = {
	template:`
		<div>
			{{$route.params.username}}
		</div>
	`
}
const home = {
	template:`
		<div>
			Home
			{{$route.params}}
		</div>
	`
}
const about = {
	template:`
		<div>
			Home
			{{$route.params}}
		</div>
	`
}
const first = {
	template:`
		<div>
			Home
			{{$route.params.id}}
		</div>
	`
}
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',name:'Home',component:home},
		{path:'/',name:'about',component:about},
		{path:'/first',name:'first',component:first},
		{path:'/users',component:users,
			children:[
				{path:':username',name:'user',component:user},
			]
		},
	]
})
new Vue({
	router,
	template:`
		<div id='r'>
			<h1>导航</h1>
			<ol>
				<li><router-link to='/'>/</router-link></li>
				<li><router-link :to="{name:'first',params:{id:'123'}}">first</router-link></li>
					<ol>
						<li><router-link :to="{path:'/users/daniel',query:{aaa:'bbb'}}">first</router-link></li>
						<li><router-link :to="{path:'/users/daniel2',query:{aaa:'bbb'}}">first</router-link></li>
						<li><router-link to="about" append>append</router-link></li>
						<li><router-link to="aboutt" exact>append</router-link></li>
					</ol>
			</ol>
			<router-view class='a'></router-view>
		</div>
	`
}).$mount('#app')