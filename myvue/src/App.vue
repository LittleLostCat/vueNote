<template>
  <div id="app">
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-text="item.lable" v-on:click="toggleFinish(item)" v-bind:class="{finished:item.finished}"></li>
    </ul>
    <img src="./assets/logo.png">
    <router-view/>
    <p>child tell:{{childWords}}</p>
    <component-a msgfromfather='love!' v-on:child-tell='listenToMyBoy'></component-a>
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/componentA'
export default {
  name: 'app',
  data: function (){
    return{
      items:Store.fetch(),
      newItem:'ss',
      childWords:'',//来自于子组件的值需要提前在data中声明
      childWordsTo:'11',
    }
  },
  components:{ComponentA},
  watch:{
    items:{
      handler:function(items){
        console.log(items,Store)
        Store.save(items)
      },
      deep:true
    }
  },
  methods:{
    toggleFinish: function(item){
      item.finished = !item.finished; 
    },
    addNew: function(){
      console.log(this.newItem)
      this.items.push({
        lable:this.newItem,
        finished:false
      })
      this.newItem = ''
    },
    listenToMyBoy(msg){
      this.childWords = msg;
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished{
  text-decoration:underline;
}
</style>
