(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/member/index/index"],{"03b8":function(e,t,n){"use strict";n.r(t);var o=n("fafd"),i=n("bc12");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("9009");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"1d727e4b",null);t["default"]=u.exports},9009:function(e,t,n){"use strict";var o=n("946d"),i=n.n(o);i.a},"946d":function(e,t,n){},bc12:function(e,t,n){"use strict";n.r(t);var o=n("f258"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},f258:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{detail:{rules:""},list:null,nextList:null,goods:[],first:!1,coupon:[],balance:0,member_pic_url:null,nextMember:{},recharge:!1,current:"wechat",prop:0,page_loading:!0,level:0}},name:"index",computed:r({},(0,o.mapState)({theme:function(e){return e.mallConfig.theme},userInfo:function(e){return e.user.info},memberImg:function(e){return e.mallConfig.__wxapp_img.member},couponImg:function(e){return e.mallConfig.__wxapp_img.coupon}})),methods:{receive:function(t){var n=this,o=this;e.showLoading({title:"领取中..."}),o.$request({url:o.$api.coupon.receive,data:{coupon_id:t}}).then(function(o){e.hideLoading(),0===o.code?(e.showToast({title:o.msg,duration:1e3}),n.getList(t)):(e.showToast({title:o.msg,icon:"none",duration:1e3}),n.getList(t))}).catch(function(){e.hideLoading(),o.$event.on(o.$const.EVENT_USER_LOGIN).then(function(){o.receive(t)})})},toCoupon:function(t){e.navigateTo({url:"/pages/coupon/details/details?id="+t})},toGoods:function(t){t?e.navigateTo({url:"/pages/goods/goods?id="+t}):e.navigateTo({url:"/pages/member/goods/goods?discount="+this.detail.discount})},toDetail:function(){e.navigateTo({url:"/pages/member/detail/detail?level="+this.level+"&prop="+this.prop})},toMore:function(t){t>0?e.navigateTo({url:"/pages/member/upgrade/upgrade?level="+this.level+"&other="+t}):e.navigateTo({url:"/pages/member/upgrade/upgrade?level="+this.level})},toRules:function(){e.navigateTo({url:"/pages/member/rules/rules"})},toRecharge:function(){e.navigateTo({url:"/pages/balance/recharge"})},getList:function(){var t=this;t.$request({url:t.$api.member.index,method:"get"}).then(function(n){t.$hideLoading(),t.$store.dispatch("user/info"),0==n.code?(t.list=n.data,t.detail=t.list.mall_member,t.goods=t.list.member_goods,t.coupon=t.list.member_coupons,t.nextMember=t.list.next_consume_upgrade_member,t.member_pic_url=t.list.member_pic_url,t.nextList=t.list.next_mall_member,t.recharge&&(t.balance=t.list.user_info.balance),null!=t.detail&&(t.level=t.detail.level),t.nextMember&&(t.prop=t.list.consumption_money/t.nextMember.money*100,t.prop>100&&(t.prop=100)),null==t.detail&&t.nextList.length>0&&(t.detail=t.nextList[0])):e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading(),t.$event.on(t.$const.EVENT_USER_LOGIN).then(function(){t.getList()})})}},onLoad:function(){var t=this;t.$showLoading({type:"global",text:"加载中..."}),t.$request({url:t.$api.recharge.setting,method:"get"}).then(function(n){0==n.code?1==n.data.setting.status&&(t.recharge=!0):e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},onShow:function(){var e=this;e.getList()}};t.default=u}).call(this,n("c11b")["default"])},fafd:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})}},[["b2cb","common/runtime","common/vendor"]]]);