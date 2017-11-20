<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click='clickMe' v-text='button'></button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Component A',
      button:'click!'
    }
  },
  props:['msgfromfather'],
  methods:{
    clickMe(){
      alert(this.msgfromfather);
      this.$emit('childTell','care yourself');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
