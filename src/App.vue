<template>
  <div id="app">
    <span @click="showEl">我的第一个插件</span>
    <z-menu  :data="data" ref="xxs" @zmClick="emclick"></z-menu>
  </div>
</template>

<script>
import zMenu from './lib/z-menu'

export default {
  name: 'app',
  components:{
    zMenu
  },
  data () {
    return {
      data: [{name:'张三'},{name:'李四'}]
    }
  },
  methods: {
    showEl(){
      //this.$refs.xxs.zm_event();
      //console.log( this.$refs.xxs);
    },
    emclick(name){
        alert(name);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
