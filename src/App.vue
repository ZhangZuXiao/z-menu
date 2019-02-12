<template>
  <div id="app">
    <span @click="showEl">menu</span>
    <div style="width:245px;height:900px;background: #002140;">
        <z-menu  :data="data"  @zmClick="emclick" :zm-selected="selectMenu" @selectMenu="tz"></z-menu>
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
      selectMenu:180,
      data:[{"childMenus":[{"childMenus":null,"id":"181","imgUrl":null,"name":"客户管理","orderNo":"1","pid":"180","type":2,"url":"/index/clientmanage"},
      {"childMenus":null,"id":"182","imgUrl":null,"name":"账号管理","orderNo":"1","pid":"180","type":2,"url":"/index/usermanage"},
      {"childMenus":null,"id":"183","imgUrl":null,"name":"角色管理","orderNo":"1","pid":"180","type":2,"url":"/index/rolemanage"}],"id":"180","imgUrl":null,"name":"系统管理","orderNo":"1","pid":"0","type":2,"url":null},{"childMenus":[{"childMenus":null,"id":"151","imgUrl":null,"name":"工单列表","orderNo":"1","pid":"150","type":2,"url":null},
      {"childMenus":null,"id":"152","imgUrl":null,"name":"在保设备","orderNo":"1","pid":"150","type":2,"url":null},
      {"childMenus":[{"childMenus":null,"id":"154","imgUrl":null,"name":"推送对象管理","orderNo":"1","pid":"153","type":2,"url":"/index/pushobjectmanage"},
      {"childMenus":null,"id":"155","imgUrl":null,"name":"客户管理","orderNo":"1","pid":"153","type":2,"url":null},
      {"childMenus":null,"id":"156","imgUrl":null,"name":"规则管理","orderNo":"1","pid":"153","type":2,"url":null},
      {"childMenus":null,"id":"157","imgUrl":null,"name":"模板管理","orderNo":"1","pid":"153","type":2,"url":null},
      {"childMenus":null,"id":"158","imgUrl":null,"name":"消息推送记录","orderNo":"1","pid":"153","type":2,"url":null},
      {"childMenus":null,"id":"159","imgUrl":null,"name":"黑名单","orderNo":"1","pid":"153","type":2,"url":null}],"id":"153","imgUrl":null,"name":"推送后台管理","orderNo":"1","pid":"150","type":2,"url":null}],"id":"150","imgUrl":null,"name":"整体维保","orderNo":"1","pid":"0","type":2,"url":null}]

    }
  },

  methods: {
    showEl(){
      //this.$refs.xxs.zm_event();
      //console.log( this.$refs.xxs);
    },
    tz(item){
      console.log(item)
    },
    emclick(row,rouet){
    //   console.log(rouet);
    //   console.log(row);
    //  this.selectMenu = row.id;
      
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
