(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/share/team/team"],{"3c94":function(t,e,n){"use strict";n.r(e);var o=n("4fbd"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},"4fbd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=function(){return n.e("components/basic-component/app-tab-nav/app-tab-nav").then(n.bind(null,"7fd0"))},c={data:function(){return{tabList:[{id:1,name:"一级分销"}],loading:null,list:[],activeTab:1,id:null,page:2}},components:{"app-tab-nav":r},computed:s({},(0,o.mapState)({theme:function(t){return t.mallConfig.theme},mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_setting:function(t){return t.mallConfig.share_setting}})),methods:{open:function(t){this.id=t},tabStatus:function(e){this.list=[],this.page=2,this.activeTab=e.currentTarget.dataset.id,t.showLoading({title:"加载中..."}),this.getList()},getList:function(){var e=this;e.$request({url:e.$api.share.team,data:{status:e.activeTab}}).then(function(n){if(e.$hideLoading(),t.hideLoading(),0==n.code){if(e.list=n.data.list,e.first_count=n.data.first_count,e.second_count=n.data.second_count,e.third_count=n.data.third_count,e.custom_setting.words.one_share.name?(e.custom_setting.words.one_share.name.length>7&&(e.custom_setting.words.one_share.name=e.custom_setting.words.one_share.name.substring(0,5)+"..."),e.tabList[0].name=e.custom_setting.words.one_share.name+"("+e.first_count+")"):e.tabList[0].name="一级分销("+e.first_count+")",e.second_count>0){var o={id:2};if(e.custom_setting.words.second_share.name.length>7&&(e.custom_setting.words.second_share.name=e.custom_setting.words.second_share.name.substring(0,5)+"..."),o.name=e.custom_setting.words.second_share.name?e.custom_setting.words.second_share.name+"("+e.second_count+")":"二级分销("+e.second_count+")",e.tabList[1]=o,e.third_count>0){e.custom_setting.words.three_share.name.length>7&&(e.custom_setting.words.three_share.name=e.custom_setting.words.three_share.name.substring(0,5)+"...");var a={id:3};a.name=e.custom_setting.words.three_share.name?e.custom_setting.words.three_share.name+"("+e.third_count+")":"三级分销("+e.third_count+")",e.tabList[2]=a}}}else t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(n){e.$hideLoading(),t.hideLoading(),e.$event.on(e.$const.EVENT_USER_LOGIN).then(function(){e.getList()})})},getMore:function(){var e=this;t.showLoading({title:"加载中..."}),e.$request({url:e.$api.share.team,data:{status:e.activeTab,page:e.page}}).then(function(n){e.$hideLoading(),t.hideLoading(),0==n.code?n.data.list.length>0&&(e.loading=null,e.list=e.list.concat(n.data.list),e.page++):t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(n){e.$hideLoading(),t.hideLoading()})},toGoods:function(e){t.navigateTo({url:"/pages/goods/goods?id="+e})}},onLoad:function(e){var n=this;t.setNavigationBarTitle({title:n.custom_setting.menus.team.name}),n.$showLoading({type:"global",text:"加载中..."}),n.getList()},onReachBottom:function(){this.getMore()}};e.default=c}).call(this,n("c11b")["default"])},7377:function(t,e,n){"use strict";n.r(e);var o=n("c8b5"),a=n("3c94");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("c420");var i=n("2877"),r=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,"7aef2749",null);e["default"]=r.exports},c420:function(t,e,n){"use strict";var o=n("d357"),a=n.n(o);a.a},c8b5:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},d357:function(t,e,n){}},[["d54b","common/runtime","common/vendor"]]]);