;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/page-component/index/app-index"],{"0205":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.newPage,function(e,t){var o=Number(e.row_num),a=Number(e.topic_num);return{$orig:n.__get_orig(e),m0:o,m1:a}}));n.$mp.data=Object.assign({},{$root:{l0:t}})},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},"0775":function(n,e,t){},"54ab":function(n,e,t){"use strict";var o=t("0775"),a=t.n(o);a.a},"5fb2":function(n,e,t){"use strict";t.r(e);var o=t("e4ae"),a=t.n(o);for(var p in o)"default"!==p&&function(n){t.d(e,n,function(){return o[n]})}(p);e["default"]=a.a},"6f02":function(n,e,t){"use strict";t.r(e);var o=t("0205"),a=t("5fb2");for(var p in a)"default"!==p&&function(n){t.d(e,n,function(){return a[n]})}(p);t("54ab");var r=t("2877"),i=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"d2a69e34",null);e["default"]=i.exports},e4ae:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("2f62");function a(n){return i(n)||r(n)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function i(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(t,!0).forEach(function(e){m(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function m(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var l=function(){return t.e("components/page-component/app-search-for/app-search-for").then(t.bind(null,"73f4"))},s=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/app-swiper/swiper")]).then(t.bind(null,"b6b4"))},d=function(){return t.e("components/page-component/app-navigation-icon/app-navigation-icon").then(t.bind(null,"047c"))},f=function(){return t.e("components/page-component/app-announcement/app-announcement").then(t.bind(null,"5b45"))},b=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/app-video/app-video")]).then(t.bind(null,"d824"))},g=function(){return t.e("components/page-component/app-special-topic/app-special-topic-normal").then(t.bind(null,"26a4"))},h=function(){return t.e("components/page-component/app-exclusive-coupon/app-exclusive-coupon").then(t.bind(null,"bdfc"))},v=function(){return t.e("components/page-component/app-image-ad/app-image-ad").then(t.bind(null,"605d"))},y=function(){return t.e("components/page-component/app-reservation/app-reservation").then(t.bind(null,"99fe"))},P=function(){return Promise.all([t.e("common/vendor"),t.e("components/basic-component/app-jump-button/app-jump-button")]).then(t.bind(null,"b362"))},w=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/app-good-shop-recommendation/app-good-shop-recommendation")]).then(t.bind(null,"3da2"))},x=function(){return t.e("components/basic-component/app-timer/app-timer").then(t.bind(null,"4ef98"))},O=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/app-quick-navigation/app-quick-navigation")]).then(t.bind(null,"4d92"))},j=function(){return t.e("components/page-component/app-popup-ad/app-popup-ad").then(t.bind(null,"7ec9"))},_=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/app-index-miaosha/app-index-miaosha")]).then(t.bind(null,"27b1"))},k=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/app-index-pintuan/app-index-pintuan")]).then(t.bind(null,"782f"))},A=function(){return t.e("components/page-component/app-index-booking/app-index-booking").then(t.bind(null,"2e67"))},D=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/app-index-cat/app-index-cat")]).then(t.bind(null,"258a"))},S=function(){return t.e("components/page-component/app-index-advance/app-index-advance").then(t.bind(null,"1968"))},E={name:"app-index",data:function(){return{newPage:[],time:-1}},props:{homePages:{type:Array,default:function(){return[]}},is_storage:Boolean,pageHide:Boolean},computed:u({},(0,o.mapState)("mallConfig",{mall:function(n){return n.mall},theme:function(n){return n.theme}}),{newData:function(){n.setNavigationBarTitle({title:this.mall.name})}}),watch:{homePages:{handler:function(n){var e=this;this.newPage=[];var t=-1,o=0;clearInterval(this.time),n.length>0&&(this.time=setInterval(function(){var p;t++,o++,(p=e.newPage).push.apply(p,a(n.slice(t,o))),o===n.length&&clearInterval(e.time)},100))},immediate:!0}},methods:{changeCoupon:function(n,e){this.newPage[e].coupons[n].is_receive="1"}},components:{"app-search-for":l,"app-swiper":s,"app-navigation-icon":d,"app-announcement":f,"app-video":b,"app-topic":g,"app-exclusive-coupon":h,"app-image-ad":v,"app-reservation":y,"app-good-shop-recommendation":w,"app-jump-button":P,"app-timer":x,"app-quick-navigation":O,"app-popup-ad":j,"app-index-miaosha":_,"app-index-pintuan":k,"app-index-booking":A,"app-index-cat":D,"app-index-advance":S}};e.default=E}).call(this,t("c11b")["default"])}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/page-component/index/app-index-create-component',
    {
        'components/page-component/index/app-index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("6f02"))
        })
    },
    [['components/page-component/index/app-index-create-component']]
]);                