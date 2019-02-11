!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("z-menu",[],t):"object"==typeof exports?exports["z-menu"]=t():e["z-menu"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(module,__webpack_exports__,__webpack_require__){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};__webpack_exports__.a={name:"z-menu",props:["data","iconClass","zm-selected"],computed:{submenuData:function(){for(var e=[],t=0;t<this.data_.length;t++)this.data_[t].id==this.zmSelected&&(e=this.formatSubmenuData(this.data_[t].childMenus));return console.log(this.data_),e},moduleData:function(){for(var e=[],t=0;t<this.data.length;t++)this.data[t].id==this.zmSelected&&(e=this.data[t].childMenus);return e}},data:function(){return{data_:this.data,fontSize:"12px",minWidth:"45px",maxWidth:"245px",variate:"45px",background:"#000",activebg:"#000",show:!1,showDialog:!1,moduleDataId:null,searchValue:""}},mounted:function(){this.minWidth=this.minWidth?this.minWidth:"45px",this.maxWidth=this.maxWidth?this.maxWidth:"245px",this.fontSize=.25*this.minWidth.split("px")[0]+"px",this.variate=this.minWidth,this.moduleDataId=this.zmSelected},methods:{submenuEvent:function(e){e.childMenus.length>0?e.open=!e.open:this.$emit("selectMenu",e)},formatSubmenuData:function(e){for(var t=[],n=0;n<e.length;n++)t.push({childMenus:this.formatSubmenuData(this.val(e,[n,"childMenus"],[])),id:this.val(e,[n,"id"],0),imgUrl:this.val(e,[n,"imgUrl"],0),name:this.val(e,[n,"name"],0),orderNo:this.val(e,[n,"orderNo"],0),pid:this.val(e,[n,"pid"],0),type:this.val(e,[n,"type"],0),url:this.val(e,[n,"url"],0),open:!1,active:!1});return t},searchMenu:function searchMenu(){for(var list=this.searchValue.trim(),i=0;i<this.moduleData.length;i++)for(var l=this.val(this.moduleData,[i,"childMenus"],[]),k=0;k<l.length;k++){var m=l[k].name,z="/"+list+"/g";z=eval(z),m=m.replace(z,"<span style='color:red'>"+list+"</span>");var newData={html:m,id:l[k].id,name:l[k].name,orderNo:l[k].orderNo,pid:l[k].pid,type:l[k].type,url:l[k].url,childMenus:l[k].childMenus};l[k]=newData}},select_module:function(e,t){this.moduleDataId=t,this.moduleData=e.childMenus},zm_event:function(e,t){this.$emit("zmClick",e,t)},em_mouseover:function(){this.showDialog,this.show=!0,this.em_changeView()},em_mouseout:function(){this.showDialog?this.show=!0:this.show=!1,this.em_changeView()},em_changeView:function(){this.show?(this.variate=this.maxWidth,this.activebg="#409eff !important"):(this.variate=this.minWidth,this.activebg="#000")},val:function(e,t,n){n=void 0===n?"--":n;try{if("string"==typeof t)return e[t]?e[t]:n;if("object"===(void 0===t?"undefined":_typeof(t))&&t instanceof Array){for(var i=e,o=0;o<t.length;o++)i=i[t[o]];return i||n}return e[t]?e[t]:n}catch(e){return n}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);n.d(t,"zMenu",function(){return i.a});var o={install:function(e,t){e.component(i.a.name,i.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),t.default=o},function(e,t,n){"use strict";function i(e){n(3)}var o=n(0),s=n(9),a=n(8),r=i,u=a(o.a,s.a,!1,r,null,null);t.a=u.exports},function(e,t,n){var i=n(4);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(6)("c1c6b3a8",i,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,'.z-m{width:245px;height:100%;box-sizing:border-box;user-select:none}.z-menu-active{background:#409eff;user-select:none}.z-memu-r-item{float:right;width:200px;min-height:100%;user-select:none}.z-memu-r-item .z-menu-submenu{list-style:none;position:relative;margin:0;padding-left:0}.z-memu-r-item .z-menu-submenu li{display:list-item;text-align:-webkit-match-parent;color:#fff}.z-memu-r-item .z-menu-submenu .z-menu-submenu-v{height:45px;line-height:45px;text-align:center;font-size:13px;text-align:left;padding:0 20px;position:relative;cursor:pointer}.z-memu-r-item .z-menu-submenu .z-menu-submenu-v .z-m-i-v{margin-right:10px}.z-memu-r-item .z-menu-submenu .z-menu-submenu-v .z-m-i-v2{vertical-align:middle;position:absolute;top:0;right:20px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;font-size:12px}.z-memu-r-item .z-menu-submenu .z-menu-submenu-v:hover{background-color:#002133}.z-memu-r-item .z-menu-submenu-unfold{width:100%;background:#000;box-sizing:border-box;overflow:hidden;-webkit-transition:height .3s;transition:height .3s;transition:height .3s,height .3s}.z-memu-r-item .z-menu-submenu-unfold .z-menu-submenu-v{box-sizing:border-box;padding-left:40px}.z-memu-r-item .z-menu-submenu-unfold .z-menu-submenu-v:hover{background-color:#323232}.z-memu-r-item .z-m-open{height:90px}.z-memu-r-item .z-m-close{height:0}.z-memu-r-item .z-m-open-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.z-memu-r-item .z-m-close-icon{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.z-menu{background:#000;min-height:100%;float:left;color:#fff;position:relative;box-sizing:border-box;user-select:none}.z-menu-chun-v{position:absolute;height:100%;z-index:2;background:#000;top:0;transition:width .3s;overflow:hidden}.z-menu-chunk{width:100%;cursor:pointer;text-align:center;display:flex;justify-content:space-between;transition:all 1s;box-sizing:border-box;border-bottom:3px solid #000}.z-menu-chunk .z-menu-chunk-ov{overflow:hidden;width:100%;height:100%;position:relative}.z-menu-chunk .z-menu-icon-chunk{display:block;position:absolute;right:15px;width:20px;height:20px;top:13px;text-align:center;line-height:20px;color:#fff;font-size:12px}.z-menu-chunk .z-menu-icon{text-align:center;height:100%;font-size:17px}.z-menu-chunk .z-menu-text{flex:1;height:100%;text-align:left;font-size:13px;position:relative}.z-menu-chunk:hover{background:#323232!important;border-bottom:3px solid #323232}.z-menu-chunk-active{border-bottom:3px solid #409eff!important}.z-menu-dialog{width:720px;height:520px;position:absolute;background:#fff;top:0;z-index:99999;box-shadow:0 0 10px #ccc;position:relative;padding:20px}.z-menu-dialog .z-menu-dialog-v{width:100%;height:100%}.z-menu-dialog .z-menu-top-v{width:100%;height:50px;position:relative;display:flex;justify-content:space-between}.z-menu-dialog .z-menu-bottom-v{width:100%;height:470px;flex:1;display:flex;justify-content:space-between}.z-menu-dialog .z-menu-close{font-family:none!important;z-index:99;font-size:30px;display:block;position:absolute;width:25px;height:25px;right:5px;top:5px;text-align:center;line-height:25px;color:#666;cursor:pointer;box-sizing:border-box}.z-menu-dialog .z-menu-dialog-left{height:100%;flex:1;overflow-x:hidden;overflow-y:auto;display:flex;flex-wrap:wrap;align-content:flex-start;position:relative;box-sizing:border-box}.z-menu-dialog .z-menu-dialog-left .z-menu-dialog-tow{flex:0 0 33.33%;min-height:80px;color:#999;padding:10px;box-sizing:border-box;font-size:13px;text-align:left}.z-menu-dialog .z-menu-dialog-left .z-menu-dialog-tow .z-menu-m-title{font-weight:600;color:#000;margin-bottom:20px;cursor:pointer}.z-menu-dialog .z-menu-dialog-left .z-menu-dialog-tow .z-menu-m-title:hover{color:#409eff}.z-menu-dialog .z-menu-dialog-left .z-menu-dialog-tow .z-menu-m-count{line-height:25px;color:#999;cursor:pointer}.z-menu-dialog .z-menu-dialog-left .z-menu-dialog-tow .z-menu-m-count:hover{color:#409eff}.z-menu-dialog .z-menu-c-search{width:100%;height:50px;background:#fff;padding:0 10px;box-sizing:border-box;flex:1}.z-menu-dialog .z-menu-c-search .search-icon-input{position:absolute;width:30px;height:30px;left:20px;top:5px;font-size:22px;color:#409eff;text-align:center;line-height:30px}.z-menu-dialog .z-menu-c-search .z-menu-c-s-input{width:100%;height:40px;line-height:40px;padding-left:50px;border:1px solid #409eff;border-radius:4px;box-sizing:border-box;outline:none}.z-menu-dialog .z-menu-c-search .z-menu-c-s-input::-webkit-input-placeholder{color:#b2b2b2!important}.z-menu-dialog .z-menu-dialog-right{height:100%;width:150px;box-sizing:border-box}.z-menu-dialog .z-menu-dialog-right .z-menu-vessel{width:100%;height:auto;border-left:2px solid #ccc}.z-menu-dialog .z-menu-dialog-right .z-menu-right-module{width:100%;height:30px;line-height:30px;font-size:13px;color:#999;text-align:left;cursor:pointer;padding-left:10px}.z-menu-dialog .z-menu-dialog-right .z-menu-module-active,.z-menu-dialog .z-menu-dialog-right .z-menu-right-module:hover{color:#409eff}.z-menu-dialog .z-menu-dialog-left::-webkit-scrollbar{width:7px;height:1px}.z-menu-dialog .z-menu-dialog-left::-webkit-scrollbar-thumb{border-radius:7px;-webkit-box-shadow:inset 0 0 7px #ccc;background:#ccc}.z-menu-dialog .z-menu-dialog-left::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 10px #ccc;border-radius:7px}.z-menu-dialog:before{width:0;height:0;border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #fff;content:" ";position:absolute;left:-7px;top:16px}',""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var s=i(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([s]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(i[s]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=c[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(s(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(s(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function s(e){var t,n,i=document.querySelector("style["+v+'~="'+e.id+'"]');if(i){if(p)return f;i.parentNode.removeChild(i)}if(z){var s=h++;i=m||(m=o()),t=a.bind(null,i,s,!1),n=a.bind(null,i,s,!0)}else i=o(),t=r.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function a(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function r(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),g.ssrId&&e.setAttribute(v,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),m=null,h=0,p=!1,f=function(){},g=null,v="data-vue-ssr-id",z="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){p=n,g=o||{};var s=l(e,t);return i(s),function(t){for(var n=[],o=0;o<s.length;o++){var a=s[o],r=c[a.id];r.refs--,n.push(r)}t?(s=l(e,t),i(s)):s=[];for(var o=0;o<n.length;o++){var r=n[o];if(0===r.refs){for(var u=0;u<r.parts.length;u++)r.parts[u]();delete c[r.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],i={},o=0;o<t.length;o++){var s=t[o],a=s[0],r=s[1],u=s[2],l=s[3],c={id:e+":"+o,css:r,media:u,sourceMap:l};i[a]?i[a].parts.push(c):n.push(i[a]={id:a,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,i,o,s){var a,r=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,r=e.default);var l="function"==typeof r?r.options:r;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o);var c;if(s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=i),c){var d=l.functional,m=d?l.render:l.beforeCreate;d?(l._injectStyles=c,l.render=function(e,t){return c.call(t),m(e,t)}):l.beforeCreate=m?[].concat(m,c):[c]}return{esModule:a,exports:r,options:l}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"z-m"},[n("div",{staticClass:"z-menu",style:{width:e.minWidth},on:{mouseover:e.em_mouseover,mouseout:e.em_mouseout}},[n("div",{staticClass:"z-menu-chun-v",style:{width:e.variate}},[n("div",{staticClass:"z-menu-chunk-ov"},[n("div",{staticClass:"z-menu-chunk",class:e.iconClass,style:{height:e.minWidth,fontSize:e.fontSize,lineHeight:e.minWidth,width:e.maxWidth},on:{click:function(t){e.showDialog=!0}}},[n("div",{staticClass:"z-menu-icon el-icon-menu",style:{width:e.minWidth,lineHeight:e.minWidth}}),e._v(" "),e._m(0)]),e._v(" "),e._l(e.data,function(t,i){return n("div",{key:i,staticClass:"z-menu-chunk",class:t.id==e.zmSelected?"z-menu-chunk-active":"",style:{height:e.minWidth,fontSize:e.fontSize,lineHeight:e.minWidth,width:e.maxWidth,background:t.id==e.zmSelected?e.activebg:e.background},on:{click:function(n){e.zm_event(t,null)}}},[n("div",{staticClass:"z-menu-icon",class:t.imgUrl,style:{width:e.minWidth,lineHeight:e.minWidth}}),e._v(" "),n("div",{staticClass:"z-menu-text"},[n("span",[e._v(e._s(t.name))]),e._v(" "),n("span",{staticClass:"z-menu-icon-chunk el-icon-arrow-right"})])])})],2)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showDialog,expression:"showDialog"}],staticClass:"z-menu-dialog",style:{left:e.maxWidth}},[n("span",{staticClass:"z-menu-close",on:{click:function(t){e.showDialog=!1,e.em_changeView()}}},[e._v("×")]),e._v(" "),n("div",{staticClass:"z-menu-dialog-v"},[n("div",{staticClass:"z-menu-top-v"},[n("div",{staticClass:"z-menu-c-search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"z-menu-c-s-input",attrs:{placeholder:"请输入菜单关键字"},domProps:{value:e.searchValue},on:{input:[function(t){t.target.composing||(e.searchValue=t.target.value)},function(t){e.searchMenu()}]}}),n("span",{staticClass:"search-icon-input el-icon-search"})]),e._v(" "),n("div",{staticStyle:{width:"160px"}})]),e._v(" "),n("div",{staticClass:"z-menu-bottom-v"},[n("div",{staticClass:"z-menu-dialog-left"},e._l(e.moduleData,function(t,i){return n("div",{key:i,staticClass:"z-menu-dialog-tow"},[n("div",{staticClass:"z-menu-m-title",on:{click:function(n){e.zm_event(e.moduleData,t.url)}}},[e._v(e._s(t.name))]),e._v(" "),e._l(t.childMenus,function(o,s){return t.childMenus?n("div",{key:s+""+i,staticClass:"z-menu-m-count",attrs:{title:"点击前往"},domProps:{innerHTML:e._s(o.html)},on:{click:function(n){e.zm_event(e.moduleData,t.url)}}}):e._e()})],2)}),0),e._v(" "),n("div",{staticClass:"z-menu-dialog-right"},[n("div",{staticClass:"z-menu-vessel"},e._l(e.data,function(t,i){return n("div",{key:i,staticClass:"z-menu-right-module",class:t.id==e.moduleDataId?"z-menu-module-active":"",on:{click:function(n){e.select_module(t,t.id)}}},[n("div",[e._v(e._s(t.name))])])}),0)])])])])]),e._v(" "),n("div",{staticClass:"z-memu-r-item"},[n("ul",{staticClass:"z-menu-submenu"},e._l(e.submenuData,function(t,i){return n("li",{key:t.id},[n("div",{staticClass:"z-menu-submenu-v",on:{click:function(n){n.stopPropagation(),e.submenuEvent(t)}}},[n("i",{staticClass:"z-m-i-v",class:t.imgUrl}),n("span",{staticClass:"z-m-i-t"},[e._v(e._s(t.name))]),t.childMenus.length>0?n("i",{staticClass:"z-m-i-v2 el-icon-arrow-down",class:t.open?"z-m-open-icon":"z-m-close-icon"}):e._e()]),e._v(" "),null!==t.childMenus&&"null"!==t.childMenus?n("ul",{staticClass:"z-menu-submenu z-menu-submenu-unfold",class:t.open?"z-m-open":"z-m-close"},e._l(t.childMenus,function(t,i){return n("li",{key:t.id},[n("div",{staticClass:"z-menu-submenu-v",on:{click:function(n){n.stopPropagation(),e.submenuEvent(t)}}},[n("span",{staticClass:"z-m-i-t"},[e._v(e._s(t.name))])])])}),0):e._e()])}),0)])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"z-menu-text"},[n("span",[e._v("总览")]),e._v(" "),n("span",{staticClass:"z-menu-icon-chunk el-icon-arrow-right"})])}],s={render:i,staticRenderFns:o};t.a=s}])});
//# sourceMappingURL=z-menu.js.map