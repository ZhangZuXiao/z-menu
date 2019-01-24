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
      selectMenu:310,
      data:[
    {
        "childMenus":[
            {
                "childMenus":[
                    {
                        "id":"316",
                        "imgUrl":"456",
                        "name":"三级菜单1",
                        "orderNo":"1",
                        "pid":"311",
                        "type":1,
                        "url":"三级"
                    },
                    {
                        "id":"317",
                        "imgUrl":"123",
                        "name":"三级菜单2",
                        "orderNo":"1",
                        "pid":"311",
                        "type":1,
                        "url":"三级2"
                    }
                ],
                "id":"311",
                "imgUrl":"asd",
                "name":"模块1-分类1",
                "orderNo":"1",
                "pid":"310",
                "type":1,
                "url":"11"
            },
            {
                "id":"312",
                "imgUrl":"asd",
                "name":"模块1-分类2",
                "orderNo":"1",
                "pid":"310",
                "type":1,
                "url":"12"
            }
        ],
        "id":"310",
        "imgUrl":"asd",
        "name":"模块1",
        "orderNo":"1",
        "pid":"0",
        "type":1,
        "url":"10"
    },
    {
        "childMenus":[
            {
                "id":"314",
                "imgUrl":"萨达撒",
                "name":"14",
                "orderNo":"1",
                "pid":"313",
                "type":1,
                "url":"14"
            },
            {
                "id":"315",
                "imgUrl":"阿萨德",
                "name":"15",
                "orderNo":"1",
                "pid":"313",
                "type":1,
                "url":"15"
            }
        ],
        "id":"313",
        "imgUrl":"阿萨德",
        "name":"模块2",
        "orderNo":"1",
        "pid":"0",
        "type":1,
        "url":"13"
    }
            ]
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
