;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/page-component/app-swiper/app-swiper"],{"66c5":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},"79c3":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){return Promise.all([a.e("common/vendor"),a.e("components/basic-component/app-jump-button/app-jump-button")]).then(a.bind(null,"b362"))},i={components:{"app-jump-button":e},props:{mode:{type:String,default:"screen"},list:{type:Array,default:function(){return[]}},height:{type:Number,default:function(){return 350}},fill:{type:Number,default:function(){return 1}}},data:function(){return{animationData:{0:{},1:{},2:{},3:{}},previousMargin:t.upx2px(80)+"px",nextMargin:t.upx2px(80)+"px",zoomParam:1.1,swiperCurrentIndex:0,imgs:["https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640","https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640","https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640","https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640"]}},created:function(){this.animation=t.createAnimation(),this.animation.scale(this.zoomParam).step(),this.animationData[0]=this.animation.export()},methods:{change:function(t){for(var n in this.swiperCurrentIndex=t.detail.current,this.animationData)t.detail.currentItemId==n?(this.animation.scale(this.zoomParam).step(),this.animationData[n]=this.animation.export()):(this.animation.scale(1).step(),this.animationData[n]=this.animation.export())}}};n.default=i}).call(this,a("c11b")["default"])},"8af3":function(t,n,a){"use strict";a.r(n);var e=a("66c5"),i=a("a5de");for(var o in i)"default"!==o&&function(t){a.d(n,t,function(){return i[t]})}(o);a("c57a");var r=a("2877"),u=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,"01b23342",null);n["default"]=u.exports},a5de:function(t,n,a){"use strict";a.r(n);var e=a("79c3"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);n["default"]=i.a},c57a:function(t,n,a){"use strict";var e=a("cf60"),i=a.n(e);i.a},cf60:function(t,n,a){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/page-component/app-swiper/app-swiper-create-component',
    {
        'components/page-component/app-swiper/app-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("8af3"))
        })
    },
    [['components/page-component/app-swiper/app-swiper-create-component']]
]);                