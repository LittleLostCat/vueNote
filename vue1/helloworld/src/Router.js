import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from './transition.vue'
Vue.use(VueRouter)

const Home = {
	template:`
		<div>
			<h2>Home</h2>
			<p>This is home</p>
		</div>
	`
}

// const Parent = {
// 	template:`
// 		<div>
// 			<h2>Parent</h2>
// 			<p>This is parent</p>
// 		</div>
// 	`
// }

const Page404 = {
	template:`
		<div>
			<h2>error:404</h2>
		</div>
	`,
	beforeRouteEnter:(to,from,next)=>(
		next()
	),
	beforeRouteLeave:(to,from,next)=>(
		next()
	)
}
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:Home},
		{path:'/Parent',component:Parent,
			beforeEnter:(to,from,next)=>(
				//next(false);
				next({path:'/kkkkk'})//发生在路由执行前
			)
		},
		{path:'*',component:Page404}
	]
})
//routes中语法类似switch并带有break,在执行完'*'后会屏蔽后面的参数
new Vue({
	router,
	data(){
		return {
			aaa:'fade'
		}
	},
	template:`
		<div id="app">
			<button v-on:click="back">back</button>
			<button v-on:click="forward">forward</button>
			<button v-on:click="home">home</button>
			<h1>This is Transition</h1>
			<ul>
				<li>
					<router-link to='/'>/</router-link>
				</li>
				<li>
					<router-link to='/Parent'>/Parent </router-link>
				</li>
				<li>
					<router-link to='/ADADF'>NOT HERE </router-link>
				</li>
			</ul>
			<transition :name="aaa" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	`,
	watch:{
		"$route"(to,from){
			console.log(to);console.log(from);
			if(from.path == '/Parent'){
				this.aaa = 'fade1'
			}else{
				this.aaa = 'fade'
			}
		}
	},
	methods:{
		back(){
			router.go(-1)
		},
		forward(){
			router.go(1)
		},
		home(){
			router.push("/")
		}
	},
	beforeCreate:function(){
		console.log("1-beforeCreate");
	},
	create:function(){
		console.log("2-create");
	},
	beforeMount:function(){
		console.log("3-beforeMount");
	},
	mounted:function(){
		console.log("4-mount");
	},
	beforeUpdate:function(){
		console.log("5-beforeCreate");
	},
	updated:function(){
		console.log("6-updated");
	},
	activated:function(){
		console.log("7-activated");
	},
	deactivated:function(){
		console.log("8-deactivated");
	},
	beforeDestroy:function(){
		console.log("9-beforeDestroy")
	},
	destroyed:function(){
		console.log("9-destroyed")
	}
}).$mount("#app")
