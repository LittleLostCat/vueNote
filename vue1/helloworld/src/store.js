import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//访问状态对象
const state = {
	count:44
}
//访问触发状态
//mutations同步
const mutations = {
	plus(state){
		state.count++
	},
	minus(state,n){
		state.count--
	}
}
const getters = {
	count:function(state){
		return state.count+=100
	}
}
const actions = {
	//context代表整个store,即当前作用域
	jiaplus(context){
		context.commit('plus');
		setTimeout(()=>{
			context.commit('minus')
		},3000)
		console.log('执行')
	},
	jianminus({commit}){
		commit('minus')
	}
}
const moduleA = {
	state,
	mutations,
	getters,
	actions
}
const moduleB = {
	state:{count:99}
}
//store中能够输出的对象有特定的名称
export default new Vuex.Store({
	modules:{
		a:moduleA,
		b:moduleB
	}
})