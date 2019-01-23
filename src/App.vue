<template>
  <div id="app">
    <span @click="showEl">menu</span>
    <div style="width:256px;height:900px;background: #002140;">
        <z-menu  :data="data"  @zmClick="emclick" :zm-selected="selectMenu"></z-menu>
    </div>
   
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
      selectMenu:106,
      data: [
             {"childMenus":[{"id":"107","name":"采购订单","orderNo":"1","pid":"106","type":2,"url":"/index/adminpurchase"},
             {"id":"108","name":"激活订单","orderNo":"2","pid":"106","type":2,"url":"/index/adminactivate"},
             {"id":"109","name":"兑换订单","orderNo":"3","pid":"106","type":2,"url":"/index/adminexchange"}],"id":"106","name":"订单管理","orderNo":"1","pid":"0","type":2,"url":"/index/hint?15"},

             {"childMenus":[{"id":"111","name":"实物卡入库","orderNo":"1","pid":"110","type":2,"url":"/index/cardstorage"},
             {"id":"112","name":"实物卡发货","orderNo":"2","pid":"110","type":2,"url":"/index/carddeliver"}],"id":"110","name":"供应链管理","orderNo":"2","pid":"0","type":2,"url":"/index/hint?12"},

             {"childMenus":[{"id":"114","name":"保内延保订单","orderNo":"1","pid":"113","type":2,"url":"/index/orderfront"},
             {"id":"115","name":"保外延保订单","orderNo":"2","pid":"113","type":2,"url":"/index/orderlater"}],"id":"113","name":"注册服务管理","orderNo":"3","pid":"0","type":2,"url":"/index/hint?16"},
             {"childMenus":[{"id":"115","name":"保内延保订单","orderNo":"1","pid":"113","type":2,"url":"/index/orderfront"},
             {"id":"115","name":"保外延保订单","orderNo":"2","pid":"113","type":2,"url":"/index/orderlater"}],"id":"114","name":"注册服务管理","orderNo":"3","pid":"0","type":2,"url":"/index/hint?16"}]
    }
  },

  methods: {
    showEl(){
      //this.$refs.xxs.zm_event();
      //console.log( this.$refs.xxs);
    },
    emclick(row,rouet){
      console.log(rouet);
      console.log(row);
      this.selectMenu = row.id;
      
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
