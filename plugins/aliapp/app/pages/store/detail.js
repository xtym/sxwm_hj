(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/store/detail"],{"004e":function(e,n,t){"use strict";t.r(n);var a=t("50f8"),o=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,function(){return a[e]})}(i);n["default"]=o.a},"37d5":function(e,n,t){"use strict";var a=t("fa16"),o=t.n(a);o.a},"41b7":function(e,n,t){"use strict";t.r(n);var a=t("9d46"),o=t("004e");for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);t("37d5");var r=t("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"06cb2c3b",null);n["default"]=s.exports},"50f8":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return Promise.all([t.e("common/vendor"),t.e("components/basic-component/app-layout/app-layout")]).then(t.bind(null,"0b17"))},o=function(){return t.e("components/page-component/app-swiper/app-swiper").then(t.bind(null,"8af3"))},i=function(){return Promise.all([t.e("common/vendor"),t.e("components/basic-component/app-rich/parse")]).then(t.bind(null,"cb0e"))},r={name:"detail",components:{appLayout:a,appSwiper:o,appRichText:i},data:function(){return{list:{business_hours:"",name:"",mobile:"",score:"",address:"",description:""}}},onShareAppMessage:function(){return this.$shareAppMessage({title:this.list.name,path:"/pages/store/detail",params:{id:this.list.id}})},onLoad:function(e){if(e.id){var n=this;n.$showLoading({title:"加载中"}),n.$request({url:n.$api.store.detail,data:{id:e.id}}).then(function(e){n.$hideLoading(),0===e.code&&(n.list=e.data.list)}).catch(function(e){n.$hideLoading()})}},methods:{goto:function(n){var t=this.list;e.openLocation({latitude:parseFloat(t.latitude),longitude:parseFloat(t.longitude),name:t.name,address:t.address})},mobile:function(){e.makePhoneCall({phoneNumber:this.list.mobile})}}};n.default=r}).call(this,t("c11b")["default"])},"9d46":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return o})},fa16:function(e,n,t){}},[["e5e4","common/runtime","common/vendor"]]]);