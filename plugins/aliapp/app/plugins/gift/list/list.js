(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/gift/list/list"],{"12fe":function(t,e,n){"use strict";n.r(e);var o=n("b907"),r=n("15c8");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("a705");var s=n("2877"),a=Object(s["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},"15c8":function(t,e,n){"use strict";n.r(e);var o=n("5d56"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},"5d56":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a")),r=n("2f62");function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e,n,o,r,i,s){try{var a=t[i](s),u=a.value}catch(c){return void n(c)}a.done?e(u):Promise.resolve(u).then(o,r)}function p(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function s(t){c(i,o,r,s,a,"next",t)}function a(t){c(i,o,r,s,a,"throw",t)}s(void 0)})}}var l=function(){return n.e("components/page-component/app-sort-rule/app-sort-rule").then(n.bind(null,"18fd"))},f=function(){return n.e("components/page-component/app-product-list/app-product-list").then(n.bind(null,"75cc"))},d=function(){return n.e("components/page-component/app-no-goods/app-no-goods").then(n.bind(null,"8112"))},g=function(){return n.e("plugins/gift/components/list/search").then(n.bind(null,"c481"))},h={name:"list",data:function(){return{goods_list:[],page:1,page_count:1,sort:1,sort_type:-1,loading:!1}},onLoad:function(){var t=this;this.$store.dispatch("gift/getConfig",this.$api.gift.config),this.request().then(function(e){t.dataProcessing(e),t.loading=!0})},onReachBottom:function(){var t=this;this.page<this.page_count&&(this.page++,this.request().then(function(e){t.dataProcessing(e)}))},methods:{request:function(){var e=p(o.default.mark(function e(){var n;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.$utils.showLoading(),e.prev=1,e.next=4,this.$request({url:this.$api.gift.list,method:"get",data:{sort:this.sort,page:this.page,sort_type:this.sort_type}});case 4:if(n=e.sent,this.$utils.hideLoading(),0!==n.code){e.next=10;break}return e.abrupt("return",n.data);case 10:t.showModal({title:"提示",content:n.msg});case 11:e.next=17;break;case 13:throw e.prev=13,e.t0=e["catch"](1),this.$utils.hideLoading(),new Error(e.t0);case 17:case"end":return e.stop()}},e,this,[[1,13]])}));function n(){return e.apply(this,arguments)}return n}(),dataProcessing:function(t){for(var e=0;e<t.list.length;e+=2)e+1!==t.list.length?this.goods_list.push([t.list[e],t.list[e+1]]):this.goods_list.push([t.list[e]]);this.page_count=t.pagination.page_count},set_sort:function(t,e){var n=this;this.sort=t,this.goods_list=[],this.page=1,this.sort_type=e,this.request().then(function(t){n.dataProcessing(t)})},routeGo:function(e){console.log(e),e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=gift")}):t.navigateTo({url:"/plugins/gift/goods/goods?".concat(e.page_url.split("?")[1])})}},computed:a({},(0,r.mapState)("gift",{theme:function(t){return t.theme}}),{},(0,r.mapGetters)("mallConfig",{getVideo:"getVideo"})),components:{"app-sort-rule":l,"product-list":f,"app-no-goods":d,search:g}};e.default=h}).call(this,n("c11b")["default"])},a705:function(t,e,n){"use strict";var o=n("d1d6"),r=n.n(o);r.a},b907:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},d1d6:function(t,e,n){}},[["afc3","common/runtime","common/vendor"]]]);