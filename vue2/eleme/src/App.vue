<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{paht:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{paht:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{paht:'/sellers'}">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header.vue'
export default {
  components:{
    Vheader:header
  },
  name: 'app'
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  #app
    .tab
      display:flex
      width:100%
      height:40px
      line-heigth:40px
      .tab-item
        flex:1
        text-align:center
</style>
