<template>
	<div id="app">
		<h1>Hello Vuex</h1>
		<p>{{$store.state.a.count}} - {{$store.state.b.count}}</p>
		<!-- <p>{{$store.state.count}} - {{count}}</p> -->
		<p>
			<button v-on:click="$store.commit('plus')">+</button>
			<button v-on:click="minus">-</button>
		</p>
		<p>
			<button v-on:click="jiaplus">plus</button>
			<button v-on:click="jianminuss">minus</button>
		</p>
	</div>
</template>
<script>
	import {mapState,mapMutations,mapActions} from 'vuex'
	export default{
		name:'app',
		data(){
			return {
				countt:0//不能同名
			}
		},
		//computed和data中的对象命名不能重复
		// computed:{
		// 	count(){
		// 		return this.$store.state.count+1
		// 	}
		// }
		// computed:mapState({
		// 	count:state=>state.count+2
		// })
		computed:{
			...mapState([
				"count"
			]),
			// count(){
			// 	console.log(this.$store)
			// 	return this.$store.getters.count
			// }
		},
		methods:{
			...mapMutations([
				'plus',
				'minus'
			]),
			...mapActions([
				'jiaplus',
			]),
			...mapActions({
				jianminuss:'jianminus'
			})
		}
	}
</script>