;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/gift/components/detail/receiving-status"],{"0fc1":function(t,e,n){"use strict";n.r(e);var i=n("6b10"),r=n("fd54");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("9290");var o=n("2877"),u=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"21e2bda4",null);e["default"]=u.exports},"40ba":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/basic-component/app-iphone-x/app-iphone-x").then(n.bind(null,"7598"))},r={name:"receiving-status",props:["theme","type","gift_id","status","status_num","user_id","order_id","notPayOrder","detail"],components:{"app-iphone-x":i},methods:{route_go:function(e){t.navigateTo({url:e})},setShare:function(){this.$emit("setShare")},receipt:function(){this.$emit("receipt",this.order_id)},getConvert:function(t){for(var e=!0,n=0;n<t.length;n++)-1==t[n].is_convert&&(e=!1);return e}}};e.default=r}).call(this,n("c11b")["default"])},"6b10":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.getConvert(t.detail)),i=t.getConvert(t.detail),r=t.getConvert(t.detail),a=t.getConvert(t.detail);t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:r,m3:a}})},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},9290:function(t,e,n){"use strict";var i=n("afbd"),r=n.n(i);r.a},afbd:function(t,e,n){},fd54:function(t,e,n){"use strict";n.r(e);var i=n("40ba"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'plugins/gift/components/detail/receiving-status-create-component',
    {
        'plugins/gift/components/detail/receiving-status-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("0fc1"))
        })
    },
    [['plugins/gift/components/detail/receiving-status-create-component']]
]);                
