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
      selectMenu:310,
      data:[
                    {
                        "childMenus":[
                            {
                                "childMenus":[
                                    {
                                        "childMenus":[],
                                        "id":"316",
                                        "imgUrl":"456",
                                        "name":"16",
                                        "orderNo":"1",
                                        "pid":"311",
                                        "type":1,
                                        "url":"三级"
                                    },
                                    {
                                        "childMenus":[],
                                        "id":"317",
                                        "imgUrl":"123",
                                        "name":"17",
                                        "orderNo":"1",
                                        "pid":"311",
                                        "type":1,
                                        "url":"三级2"
                                    }
                                ],
                                "id":"311",
                                "imgUrl":[],
                                "name":"11",
                                "orderNo":"1",
                                "pid":"310",
                                "type":1,
                                "url":"11"
                            },
                            {
                                "childMenus":[],
                                "id":"312",
                                "imgUrl":"asd",
                                "name":"12",
                                "orderNo":"1",
                                "pid":"310",
                                "type":1,
                                "url":"12"
                            }
                        ],
                        "id":"310",
                        "imgUrl":[],
                        "name":"10",
                        "orderNo":"1",
                        "pid":"0",
                        "type":1,
                        "url":"10"
                    },
                    {
                        "childMenus":[
                            {
                                "childMenus":[],
                                "id":"314",
                                "imgUrl":"萨达撒",
                                "name":"14",
                                "orderNo":"1",
                                "pid":"313",
                                "type":1,
                                "url":"14"
                            },
                            {
                                "childMenus":[],
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
                        "name":"13",
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
