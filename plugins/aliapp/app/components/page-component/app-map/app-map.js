;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/page-component/app-map/app-map"],{"17d3":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})},"2bff":function(t,n,e){},"4ba9":function(t,n,e){"use strict";e.r(n);var a=e("17d3"),r=e("964a");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("f7c9");var u=e("2877"),o=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,"5b0e9740",null);n["default"]=o.exports},"85eb":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"app-map",props:{backgroundColor:String,backgroundPicUrl:String,height:Number,latitude:String,longitude:String,marginTop:Number,marginTopColor:String,paddingX:Number,paddingY:Number,address:{type:String,default:function(){return""}}},data:function(){return{markers:[]}},mounted:function(){var t=this,n={iconPath:"../../../static/image/summary-map.png",id:0,width:43,height:43,latitude:this.latitude,longitude:this.longitude};t.address&&(n.callout={content:t.address,color:"#353535",fontSize:"13",bgColor:"#FFFFFF",display:"ALWAYS",textAlign:"center",padding:"20rpx"}),t.markers=[n]},methods:{openMap:function(){t.openLocation({latitude:parseFloat(this.latitude),longitude:parseFloat(this.longitude),name:this.address,address:this.address})}}};n.default=e}).call(this,e("c11b")["default"])},"964a":function(t,n,e){"use strict";e.r(n);var a=e("85eb"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=r.a},f7c9:function(t,n,e){"use strict";var a=e("2bff"),r=e.n(a);r.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/page-component/app-map/app-map-create-component',
    {
        'components/page-component/app-map/app-map-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("4ba9"))
        })
    },
    [['components/page-component/app-map/app-map-create-component']]
]);                