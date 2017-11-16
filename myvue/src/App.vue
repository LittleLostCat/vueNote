<template>
  <div id="app">
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-text="item.lable" v-on:click="toggleFinish(item)" v-bind:class="{finished:item.finished}"></li>
    </ul>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Store from './store'
console.log(Store)
export default {
  name: 'app',
  data: function (){
    return{
      items:Store.fetch(),
      newItem:'ss'
    }
  },
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
    }
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
