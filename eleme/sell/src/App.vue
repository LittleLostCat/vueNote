<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers">商家</router-link>
      </div>
    </div>
    <input type="button" @keydown='onkeyDown'>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default {
    data() {
      return {
        seller: {}
      };
    },
    components:{
      'v-header':header,
    },
    methods: {
      onkeyDown (){
        console.log(233)
      }
    }
  }
  // export default {
  //   name: 'App'
  // }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#app 
  .tab
    display:flex
    width:100%
    height:40px
    line-height:40px
    .tab-item
      flex:1
      text-align:center
      a
        color:black
        text-decoration:none
        display:block
</style>
