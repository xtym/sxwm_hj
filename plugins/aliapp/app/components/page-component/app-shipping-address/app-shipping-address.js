;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/page-component/app-shipping-address/app-shipping-address"],{"0488":function(t,e,n){"use strict";n.r(e);var a=n("abef"),i=n("f766");for(var d in i)"default"!==d&&function(t){n.d(e,t,function(){return i[t]})}(d);n("365f");var s=n("2877"),o=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"593f482d",null);e["default"]=o.exports},"365f":function(t,e,n){"use strict";var a=n("af9a"),i=n.n(a);i.a},abef:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},af9a:function(t,e,n){},d5f7:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/basic-component/app-radio/app-radio").then(n.bind(null,"3ac8"))},i={name:"app-shipping-address",components:{appRadio:a},props:{item:{type:Object},is_hide_default_btn:{type:Boolean,default:!1},destroy_url:{type:String,default:""},is_refund_address:{type:Number,default:0}},methods:{changeDefault:function(){var e=this;e.$request({url:e.$api.user.address_default,method:"POST",data:{id:e.item.id,is_default:1==e.item.is_default?0:1}}).then(function(n){0===n.code?e.$emit("handleAddress","price-sort-default.png"):t.showToast({title:n.msg,icon:"none"})}).catch(function(){})},edit:function(){t.navigateTo({url:"/pages/address/address-edit?id="+this.item.id+"&is_refund_address="+this.is_refund_address})},editStop:function(){this.$emit("handleStop","editStop")},destroy:function(){var e=this;t.showModal({content:"确定删除收货地址",success:function(n){n.confirm?e.$request({url:e.destroy_url,method:"POST",data:{id:e.item.id}}).then(function(n){0===n.code?e.$emit("handleAddress","delete"):t.showToast({title:n.msg,icon:"none"})}).catch(function(){}):n.cancel}})}}};e.default=i}).call(this,n("c11b")["default"])},f766:function(t,e,n){"use strict";n.r(e);var a=n("d5f7"),i=n.n(a);for(var d in a)"default"!==d&&function(t){n.d(e,t,function(){return a[t]})}(d);e["default"]=i.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/page-component/app-shipping-address/app-shipping-address-create-component',
    {
        'components/page-component/app-shipping-address/app-shipping-address-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("0488"))
        })
    },
    [['components/page-component/app-shipping-address/app-shipping-address-create-component']]
]);                