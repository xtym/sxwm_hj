(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/bonus/statics/statics"],{1790:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"486b":function(t,e,n){},6593:function(t,e,n){"use strict";n.r(e);var o=n("d75b"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},d75b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a9cc")),i=n("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l,d=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-layout/app-layout")]).then(n.bind(null,"0b17"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-form-id/app-form-id")]).then(n.bind(null,"8ee9"))},p=null,h={data:function(){return{list:[],setting:{},cWidth:"",cHeight:"",pixelRatio:1,_date:0,show:!0,all_data:[]}},components:{"app-layout":d,"app-form-id":f},computed:c({},(0,i.mapState)({theme:function(t){return t.mallConfig.theme}})),methods:{tablist:function(t){var e=this;this._date=t,this.show=!0;var n,o,i={categories:[],series:[{name:"分红金额",data:[]}]};0==t?(e.list.day_list.forEach(function(t,o){n=e.list.day_list[o].created_at,i.series[0].data.push(t.bonus_price),o%6==0?(n<10?n="0"+n+":00":n+=":00",i.categories.push(n)):i.categories.push("")}),i.categories.push("24:00"),l.showColumn("canvasColumn",i,"line")):1==t?(e.list.day_7_list.forEach(function(t,o){n=e.list.day_7_list[o].created_at.slice(5),i.series[0].data.push(t.bonus_price),i.categories.push(n)}),o=[15,15,4,-30],l.showColumn("canvasColumn",i,"column",o)):2==t&&(e.list.month_12_list.forEach(function(t,o){n=e.list.month_12_list[o].created_at.slice(5)+"月",i.series[0].data.push(t.bonus_price),i.categories.push(n)}),o=[15,15,4,-30],l.showColumn("canvasColumn",i,"column",o)),this.$forceUpdate()},touchIt:function(t){p.showToolTip(t,{format:function(t,e){return t.color="rgba(0,0,0,0)","object"===s(t.data)?e+" "+t.name+":"+t.data.value:e+" "+t.name+":"+t.data}})},getSetting:function(){var e=this;e.$request({url:e.$api.bonus.setting}).then(function(n){0==n.code?(e.setting=n.data.list,e.setting.form&&e.setting.form.orders?t.setNavigationBarTitle({title:e.setting.form.statistic_bonus}):t.setNavigationBarTitle({title:"分红统计"})):t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})},getList:function(){var e=this;t.showLoading({title:"加载中..."}),e.$request({url:e.$api.bonus.data}).then(function(n){if(t.hideLoading(),0==n.code){e.list=n.data.list,e.all_data=n.data.all_data;var o,i={categories:[],series:[{name:"分红金额",data:[]}]};n.data.list.day_list.forEach(function(t,e){o=n.data.list.day_list[e].created_at,i.series[0].data.push(t.bonus_price),e%6==0?(o<10?o="0"+o+":00":o+=":00",i.categories.push(o)):i.categories.push("")}),i.categories.push("24:00"),l.showColumn("canvasColumn",i,"line")}else t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.hideLoading()})},showColumn:function(t,e,n,i){p=new o.default({$this:l,canvasId:t,type:n||"column",legend:{show:!1},fontSize:9,background:"#FFFFFF",colors:["#ff4544"],pixelRatio:l.pixelRatio,padding:i||[15,15,4,0],categories:e.categories,series:e.series,xAxis:{disableGrid:!0},yAxis:{gridType:"dash",data:{disabled:!0}},dataLabel:!1,dataPointShape:!1,width:l.cWidth*l.pixelRatio,height:l.cHeight*l.pixelRatio,extra:{tooltip:{bgColor:"#000000",bgOpacity:.7}}})},changeData:function(){p.updateData({series:l.serverData.ColumnB.series,categories:l.serverData.ColumnB.categories})}},onLoad:function(){l=this,t.getSystemInfo({success:function(t){t.pixelRatio>1&&(l.pixelRatio=2)}}),this.cWidth=t.upx2px(650),this.cHeight=t.upx2px(440),this.getList(),this.getSetting()}};e.default=h}).call(this,n("c11b")["default"])},e279:function(t,e,n){"use strict";n.r(e);var o=n("1790"),i=n("6593");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("eeb1");var s=n("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,"9cea7778",null);e["default"]=r.exports},eeb1:function(t,e,n){"use strict";var o=n("486b"),i=n.n(o);i.a}},[["b131","common/runtime","common/vendor"]]]);