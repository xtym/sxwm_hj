(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/vip_card/rules/rules"],{"006d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-rich/parse")]).then(n.bind(null,"cb0e"))},u={data:function(){return{rules:" "}},name:"rules",components:{"app-rich-text":i},computed:o({},(0,r.mapState)({theme:function(e){return e.mallConfig.theme}})),methods:{getList:function(t){var n=this;n.$showLoading({text:"加载中..."}),n.$request({url:n.$api.vip_card.setting}).then(function(t){n.$hideLoading(),0===t.code&&(n.loading=!1,e.setNavigationBarTitle({title:t.data.agreement_title?t.data.agreement_title:"超级会员卡使用说明"}),n.rules=t.data.agreement_content)}).catch(function(e){n.$hideLoading()})}},onLoad:function(){this.getList(),e.setStorage({key:"vip_card_is_read",data:!0,success:function(){console.log("success")}})}};t.default=u}).call(this,n("c11b")["default"])},"09cc":function(e,t,n){"use strict";n.r(t);var r=n("006d"),c=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=c.a},"0ea9":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c})},"598c":function(e,t,n){"use strict";var r=n("ae67"),c=n.n(r);c.a},"88ce":function(e,t,n){"use strict";n.r(t);var r=n("0ea9"),c=n("09cc");for(var o in c)"default"!==o&&function(e){n.d(t,e,function(){return c[e]})}(o);n("598c");var a=n("2877"),i=Object(a["a"])(c["default"],r["a"],r["b"],!1,null,"3fa6e608",null);t["default"]=i.exports},ae67:function(e,t,n){}},[["a45e","common/runtime","common/vendor"]]]);