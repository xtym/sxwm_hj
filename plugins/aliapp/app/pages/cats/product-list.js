;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/cats/product-list"],{"41b8":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i})},5236:function(t,e,r){"use strict";r.r(e);var n=r("41b8"),i=r("a18a");for(var o in i)"default"!==o&&function(t){r.d(e,t,function(){return i[t]})}(o);r("9e67");var a=r("2877"),u=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"52aedb6c",null);e["default"]=u.exports},"8d2a":function(t,e,r){},"9e67":function(t,e,r){"use strict";var n=r("8d2a"),i=r.n(n);i.a},a18a:function(t,e,r){"use strict";r.r(e);var n=r("f7da"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},f7da:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach(function(e){a(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=function(){return r.e("components/page-component/app-member-mark/app-member-price").then(r.bind(null,"dd88"))},c=function(){return r.e("components/page-component/app-sup-vip/app-sup-vip").then(r.bind(null,"348c"))},p={name:"product-list",props:["goods_list"],components:{"app-member-price":u,"app-sup-vip":c},data:function(){return{previewUrl:"",submitUrl:"",attrGroup:[],selectAttr:{},item:{},show:0}},computed:o({},(0,n.mapGetters)("mallConfig",{getVideo:"getVideo",isShowCart:"getShowCart"}),{},(0,n.mapState)({appSetting:function(t){return t.mallConfig.mall.setting},appImg:function(t){return t.mallConfig.__wxapp_img.mall}})),methods:{specification:function(t){"mch"===t.sign?(this.previewUrl=this.$api.mch.order_preview,this.submitUrl=this.$api.mch.order_submit):(this.previewUrl="",this.submitUrl=""),this.$emit("attr",this.previewUrl,this.submitUrl,t.attr_groups,t)},route_go:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=").concat(e.sign)}):t.navigateTo({url:e.page_url})},onAttr:function(t){this.selectAttr=t}}};e.default=p}).call(this,r("c11b")["default"])}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'pages/cats/product-list-create-component',
    {
        'pages/cats/product-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("5236"))
        })
    },
    [['pages/cats/product-list-create-component']]
]);                
