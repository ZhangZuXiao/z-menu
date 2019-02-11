<template>
  <div class="z-m">
        <div class="z-menu" :style="{width:minWidth}" @mouseover="em_mouseover" @mouseout="em_mouseout">
            <div class="z-menu-chun-v" :style="{width:variate}">
                  <div class="z-menu-chunk-ov">
                      <div class="z-menu-chunk"  :style="{height:minWidth,fontSize:fontSize,lineHeight:minWidth,width:maxWidth}" :class="iconClass" @click="showDialog = true">
                          <div class="z-menu-icon el-icon-menu" :style="{width:minWidth,lineHeight:minWidth}"></div>
                          <div class="z-menu-text">
                                <span>总览</span>
                                <span class="z-menu-icon-chunk el-icon-arrow-right"></span> 
                          </div>
                      </div>
                      <div class="z-menu-chunk"  v-for="(item,index) in data" :key="index" :style="{height:minWidth,fontSize:fontSize,lineHeight:minWidth,width:maxWidth,background:(item.id == zmSelected ? activebg:background)}" :class="item.id == zmSelected ? 'z-menu-chunk-active':''" @click="zm_event(item,null)">
                          <div class="z-menu-icon" :style="{width:minWidth,lineHeight:minWidth}" :class="item.imgUrl"></div>
                          <div class="z-menu-text">
                                <span>{{item.name}}</span> 
                                <span class="z-menu-icon-chunk el-icon-arrow-right"></span>
                          </div>
                      </div>
                  </div>
            </div>   
            <div class="z-menu-dialog" :style="{left:maxWidth}" v-show="showDialog">
                  <span class="z-menu-close" @click="showDialog = false,em_changeView()">×</span>
                  <div class="z-menu-dialog-v">
                  <div class="z-menu-top-v">
                        <div class="z-menu-c-search"><input class="z-menu-c-s-input" placeholder="请输入菜单关键字" v-model="searchValue" @input="searchMenu()"/><span class="search-icon-input el-icon-search"></span></div>
                        <div style="width:160px;"></div>
                  </div>
                  <div class="z-menu-bottom-v">
                        <div class="z-menu-dialog-left">
                            <div class="z-menu-dialog-tow" v-for="(item,index) in moduleData" :key="index">
                                  <div class="z-menu-m-title" @click="zm_event(moduleData,item.url)">{{item.name}}</div>
                                  <div class="z-menu-m-count" v-if="item.childMenus"  v-for="(m,i) in item.childMenus" :key="i+''+index" v-html="m.html" title="点击前往" @click="zm_event(moduleData,item.url)"></div>
                            </div>
                        </div>
                        <div class="z-menu-dialog-right">
                            <div class="z-menu-vessel">
                              <div class="z-menu-right-module"  v-for="(item,index) in data"  :key="index" :class="item.id == moduleDataId ? 'z-menu-module-active':''" @click="select_module(item,item.id)">
                                    <div>{{item.name}}</div> 
                              </div>
                            </div>
                        </div>
                  </div>
                  </div>
            </div>
        </div>
        <div class="z-memu-r-item">
               <ul class="z-menu-submenu">
                  <li v-for="(item,index) in submenuData" :key="item.id"><div class="z-menu-submenu-v" @click.stop="submenuEvent(item)"><i class="z-m-i-v" :class="item.imgUrl"></i><span class="z-m-i-t">{{item.name}}</span><i v-if="item.childMenus.length > 0" class="z-m-i-v2 el-icon-arrow-down" :class="item.open ? 'z-m-open-icon':'z-m-close-icon'"></i></div>
                      <ul v-if="item.childMenus !== null && item.childMenus !== 'null' " class="z-menu-submenu z-menu-submenu-unfold" :class="item.open ? 'z-m-open':'z-m-close'">
                           <li class="" v-for="(row,i) in item.childMenus" :key="row.id"><div class="z-menu-submenu-v" @click.stop="submenuEvent(row)"><span class="z-m-i-t">{{row.name}}</span></div></li>
                      </ul>
                  </li>
               </ul>
        </div>
  </div>
</template>

<script>
  export default {
    name: 'z-menu',
    props: ['data','iconClass','zm-selected'],
    computed: {
      submenuData(){
          let list = [];
          for(let i=0;i<this.data_.length;i++){
            if(this.data_[i].id == this.zmSelected){
               list = this.formatSubmenuData(this.data_[i].childMenus);
            }
          }
          console.log(this.data_);
          return list;
      },
      moduleData(){
        let list = [];
          for(let i=0;i<this.data.length;i++){
            if(this.data[i].id == this.zmSelected){
               list = this.data[i].childMenus;
              // this.searchMenu();
            }
          }
          return list;
      },
    },
    data () {
      return {
         data_:this.data,
         fontSize:'12px',         //字体图标大小
         minWidth:'45px',         //缩小后模块宽高
         maxWidth:'245px',        //展开后宽度
         variate:'45px',          //伸缩变量
         background:"#000",       //
         activebg:"#000",         //交互颜色变量
         show:false,              //伸缩状态
         showDialog:false,        //总览是否显示
         moduleDataId:null,       //当前选择模块ID
        // moduleData:this.present_module(),    //总览当前查看模块
         searchValue:"",          //总览检索
        // submenuData:this.submenuData_module(),          //子菜单数据
      }
    },
    mounted(){
      this.minWidth = this.minWidth ? this.minWidth : "45px";
      this.maxWidth = this.maxWidth ? this.maxWidth : "245px";
      this.fontSize = this.minWidth.split('px')[0] * .25 +"px";
      this.variate = this.minWidth;
      this.moduleDataId = this.zmSelected;
      //this.moduleData  = this.present_module();
     // this.submenuData = this.submenuData_module();
    },
    methods: {

      submenuEvent(item){
        //console.log(item)
        if(item.childMenus.length > 0){
          item.open = !item.open;
        }else{
           this.$emit('selectMenu',item);
        }
      },
      formatSubmenuData(list){
          let t = []
          for(let i=0;i<list.length;i++){
                 t.push({
                      "childMenus":this.formatSubmenuData(this.val(list,[i,'childMenus'],[])),
                      "id":this.val(list,[i,'id'],0),
                      "imgUrl":this.val(list,[i,'imgUrl'],0),
                      "name":this.val(list,[i,'name'],0),
                      "orderNo":this.val(list,[i,'orderNo'],0),
                      "pid":this.val(list,[i,'pid'],0),
                      "type":this.val(list,[i,'type'],0),
                      "url":this.val(list,[i,'url'],0),
                      "open":false,
                      "active":false,
                 });
          }
          return t;
          // for(let i=0;i<this.data.length;i++){
          //   if(this.data[i].id == this.zmSelected){
          //      this.submenuData = this.val(this.data,[i,'childMenus'],0);
          //   }
          // }
          // if(this.submenuData.length > 0){
          //    let list = [];
          //    for(let i = 0;i<this.submenuData.length;i++){
                 
          //    }
          // }
      },
      searchMenu(){
           let list = this.searchValue.trim();
            for(let i = 0;i<this.moduleData.length;i++){
              let l = this.val(this.moduleData,[i,'childMenus'],[]);
              for(let k = 0;k<l.length;k++){
                  let m = l[k].name;
                     let z = '/'+list+'/g';
                     z = eval(z);
                     m = m.replace(z,"<span style='color:red'>"+list+"</span>");
                  let newData = {
                    "html":m,
                    "id":l[k].id,
                    "name":l[k].name,
                    "orderNo":l[k].orderNo,
                    "pid":l[k].pid,
                    "type":l[k].type,
                    "url":l[k].url,
                    'childMenus':l[k].childMenus
                  }
                  l[k] = newData;  
              }
            }
      },
      select_module(item,id){
           this.moduleDataId = id;
           this.moduleData = item.childMenus;
      },
      zm_event(name,rouet) {
         this.$emit('zmClick',name,rouet);
      },
      em_mouseover(){
        if(this.showDialog){this.show = true;}else{this.show = true;}
        this.em_changeView();
      },
      em_mouseout(){
        if(this.showDialog){this.show = true;}else{this.show = false;}
        this.em_changeView();
      },
      em_changeView(){
         if(this.show){
            this.variate = this.maxWidth;
            this.activebg =  "#409eff !important";
         }else{
            this.variate = this.minWidth;
            this.activebg = "#000";
         }
      },
      val:function(data,key,back){
        				    back=(typeof back==="undefined" ? "--":back);
        					try {
        						if(typeof key ==="string"){
        							return (data[key] ? data[key]:back);
        						}else if(typeof key ==="object" && key instanceof Array){
        							var res=data;
        							for(var i=0;i<key.length;i++){
        								res=res[key[i]];
        							}
        							return (res ? res:back);
        						}else{
        							return (data[key] ? data[key]:back);
        						}
        					} catch (e) {
        						return  back;
        					}
      },
    }
  }
</script>

<style  lang="scss">
  .z-m{width: 245px;height: 100%;box-sizing: border-box;user-select: none;}
  .z-menu-active{background: #409eff;user-select: none;}
  .z-memu-r-item{float: right;width: 200px;min-height: 100%;user-select: none;
                 .z-menu-submenu{list-style: none;position: relative;margin: 0;padding-left: 0;
                                 li{display: list-item;text-align: -webkit-match-parent;color: #fff;}
                                 .z-menu-submenu-v{height: 45px;line-height: 45px;text-align: center;font-size:13px;text-align: left;padding: 0 20px;position: relative;cursor: pointer;
                                                  .z-m-i-v{margin-right: 10px;}
                                                  .z-m-i-v2{vertical-align: middle;position: absolute;top: 0;right: 20px;-webkit-transition: -webkit-transform .3s; transition: -webkit-transform .3s; transition: transform .3s; transition: transform .3s, -webkit-transform .3s; transition: transform .3s,-webkit-transform .3s;font-size: 12px;}
                                 }
                                 .z-menu-submenu-v:hover{background-color: rgb(0, 33, 51);}
                 }
                 .z-menu-submenu-unfold{width: 100%;background: #000;box-sizing: border-box;overflow: hidden;-webkit-transition: height .3s; transition: height .3s; transition: height .3s; transition: height .3s, height .3s; transition: height .3s,height .3s;
                                        .z-menu-submenu-v{box-sizing: border-box;padding-left: 40px;}
                                        .z-menu-submenu-v:hover{background-color:#323232;}
                 }
                 .z-m-open{height: 90px;}
                 .z-m-close{height:0;}
                 .z-m-open-icon{-webkit-transform: rotateZ(-180deg);transform: rotateZ(-180deg);}
                 .z-m-close-icon{-webkit-transform: rotateZ(0deg);transform: rotateZ(0deg);}
  }
  .z-menu{background: #000;min-height: 100%;float: left;color: #fff;user-select: none;position: relative;box-sizing: border-box;user-select: none;}
  .z-menu-chun-v{position: absolute;height: 100%;z-index: 2;background: #000;top: 0;transition: width .3s;overflow: hidden;}
  .z-menu-chunk{width: 100%;cursor: pointer;text-align: center;display: flex;justify-content: space-between;transition: all 1s;box-sizing: border-box;border-bottom: 3px solid #000;
               .z-menu-chunk-ov{overflow: hidden;width: 100%;height: 100%;position: relative;}
               .z-menu-icon-chunk{display: block;position: absolute;right: 15px;width: 20px;height: 20px;top:13px;text-align: center;line-height: 20px;color: #fff;font-size: 12px;
               }
               .z-menu-icon{text-align: center;height: 100%;font-size: 17px;}
               .z-menu-text{flex: 1;height: 100%;text-align: left;font-size: 13px;position: relative;}
  }
  .z-menu-chunk:hover{background: #323232 !important;border-bottom: 3px solid #323232;}
  .z-menu-chunk-active{border-bottom: 3px solid #409eff !important;}
  .z-menu-dialog{width: 720px;height: 520px;position: absolute;background: #fff;top: 0;z-index: 99999;box-shadow: 0px 0px 10px #ccc;position: relative;padding: 20px;
                .z-menu-dialog-v{width: 100%;height: 100%;}
                .z-menu-top-v{width: 100%;height: 50px;position: relative;display: flex;justify-content: space-between;}
                .z-menu-bottom-v{width: 100%;height: 470px; flex: 1;display: flex;justify-content: space-between;}
                .z-menu-close{font-family: none !important;z-index: 99;font-size: 30px;display: block;position: absolute;width: 25px;height: 25px;right: 5px;top: 5px;text-align: center;line-height: 25px;color: #666;cursor: pointer;box-sizing: border-box;}
                 .z-menu-dialog-left{height: 100%;flex: 1;overflow-x: hidden;overflow-y: auto;display: flex;flex-wrap: wrap;align-content: flex-start;position: relative;box-sizing: border-box;
                                     .z-menu-dialog-tow{flex: 0 0 33.33%;min-height: 80px;color: #999;padding: 10px;box-sizing: border-box;font-size: 13px;text-align: left;
                                                        .z-menu-m-title{font-weight: 600;color: #000;margin-bottom: 20px;cursor: pointer;}
                                                        .z-menu-m-title:hover{color: #409eff;}
                                                        .z-menu-m-count{line-height: 25px;color: #999;cursor: pointer;}
                                                        .z-menu-m-count:hover{color: #409eff;}
                                     }
                 }
                 .z-menu-c-search{width: 100%;height: 50px;background: #fff;padding: 0 10px;box-sizing: border-box;flex:1;
                                  .search-icon-input{position: absolute;width: 30px;height: 30px;left: 20px;top: 5px;font-size: 22px;color: #409eff;text-align: center;line-height: 30px;}
                                  .z-menu-c-s-input{width: 100%;height: 40px;line-height: 40px;padding-left: 50px;border:1px solid #409eff;border-radius: 4px;box-sizing: border-box;outline:none;}
                                  .z-menu-c-s-input::-webkit-input-placeholder{
                                          color: #b2b2b2 !important;
                                  }
                 }
                 .z-menu-dialog-right{height: 100%;width: 150px;box-sizing: border-box;
                                     .z-menu-vessel{width: 100%;height: auto;border-left: 2px solid #ccc;}
                                     .z-menu-right-module{width: 100%;height: 30px;line-height: 30px;font-size: 13px;color: #999;text-align: left;cursor: pointer;padding-left: 10px;}
                                     .z-menu-right-module:hover{color: #409eff;}
                                     .z-menu-module-active{color: #409eff;}
                 }
                 .z-menu-dialog-left::-webkit-scrollbar {/*滚动条整体样式*/
                    width: 7px;     /*高宽分别对应横竖滚动条的尺寸*/
                    height: 1px;
                 }
                 .z-menu-dialog-left::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                        border-radius: 7px;
                        -webkit-box-shadow: inset 0 0 7px #cccccc;
                        background: #cccccc;
                 }
                .z-menu-dialog-left::-webkit-scrollbar-track {/*滚动条里面轨道*/
                        -webkit-box-shadow: inset 0 0 10px #cccccc;
                        border-radius: 7px;
                }
  }
  .z-menu-dialog:before{width: 0; height: 0; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-right: 7px solid #fff;content: " "; position: absolute;left: -7px;top: 16px;}
</style>
