(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/gift/search/search"],{"124b":function(t,e,n){"use strict";n.r(e);var r=n("872d"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},"3bcc":function(t,e,n){"use strict";n.r(e);var r=n("f210"),o=n("124b");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("9606");var s=n("2877"),a=Object(s["a"])(o["default"],r["a"],r["b"],!1,null,"40a79839",null);e["default"]=a.exports},"872d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),o=n("2f62");function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return g(t)||l(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function g(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function h(t,e,n,r,o,i,s){try{var a=t[i](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function s(t){h(i,r,o,s,a,"next",t)}function a(t){h(i,r,o,s,a,"throw",t)}s(void 0)})}}var p="GIFT_SEARCH",y=function(){return n.e("components/page-component/app-product-list/app-product-list").then(n.bind(null,"75cc"))},v={name:"search",data:function(){return{keyword:"",strong:[],page:1,goods_list:[],search:!1,is_search:0}},onLoad:function(){this.$storage.getStorageSync(p)?this.strong=this.$storage.getStorageSync(p):this.$storage.setStorageSync(p,[])},methods:{request:function(){var t=d(r.default.mark(function t(){var e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.gift.list,method:"get",data:{page:this.page,keyword:this.keyword,sign:""}});case 2:e=t.sent,0===e.code&&this.dataProcessing(e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),searchRequest:function(t){this.search=!0,this.goods_list=[],this.page=1,this.keyword=t,this.request()},dataProcessing:function(t){for(var e=0;e<t.list.length;e+=2)e+1!==t.list.length?this.goods_list.push([t.list[e],t.list[e+1]]):this.goods_list.push([t.list[e]]);this.page_count=t.pagination.page_count},setRequest:function(){var t=this;this.keyword.match(/^[ ]*$/)||(this.search=!0,this.goods_list=[],this.request().then(function(){var e=t.$storage.getStorageSync(p),n=[].concat(u(e),[t.keyword]);t.$storage.setStorageSync(p,n)}))},routeGo:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=gift")}):t.navigateTo({url:"/plugins/gift/goods/goods?".concat(e.page_url.split("?")[1],"&is_search=1")})},empyt_search:function(){this.goods_list=[],this.keyword="",this.search=!1},setClearStorage:function(){this.$storage.removeStorageSync(p)}},components:{"app-product-list":y},computed:a({},(0,o.mapState)("gift",{theme:function(t){return t.theme}}),{},(0,o.mapGetters)("mallConfig",{getVideo:"getVideo"})),onReachBottom:function(){this.page<this.page_count&&(this.page++,this.request())}};e.default=v}).call(this,n("c11b")["default"])},9606:function(t,e,n){"use strict";var r=n("c4d7"),o=n.n(r);o.a},c4d7:function(t,e,n){},f210:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})}},[["55ab","common/runtime","common/vendor"]]]);