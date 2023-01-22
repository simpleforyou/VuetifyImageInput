!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).VuetifyImageInput=e()}(this,(function(){"use strict";var t={functional:!0,render:function(t,e){let{listeners:i,parent:n,props:a}=e;return t("VBtn",{class:"ma-1",props:{disabled:n.disabled,flat:!0,icon:!0},on:i},[t("VIcon",{style:a.iconStyle},a.icon)])}};var e={functional:!0,render:function(t,e){let{parent:i}=e,{computedMaxScaling:n,computedMinScaling:a,disabled:r,scaleTo:o,scaling:l}=i;return t("VSlider",{class:"ma-1",props:{disabled:r,hideDetails:!0,max:n,min:a,step:.001,value:l},on:{input:o}})}};var i={on:function(){let{disabled:t}=this;if(t)return{};let{onClick:e,onDragEnter:i,onDragLeave:n,onDragOver:a,onDrop:r}=this;return{click:e,dragenter:i,dragleave:n,dragover:a,drop:r}}};function n(){}var a={load:function(t){var e;(e=()=>{this.cancel();let e=new FileReader,i=new Promise(((i,n)=>{e.addEventListener("progress",(e=>{let{loaded:i}=e;this.progress=i,this.$emit("progress",{file:t,loaded:i})})),e.addEventListener("load",(()=>{let{result:n}=e;Object.assign(this,{loaded:!0,result:n}),this.$emit("load",{file:t,result:n}),i()})),e.addEventListener("abort",(()=>{this.$emit("cancel",{file:t}),i()})),e.addEventListener("error",n)}));return e.readAsDataURL(t),Object.assign(this,{cancel:()=>{1===e.readyState&&e.abort()},error:null,failed:!1,file:t,loaded:!1,loading:!0,progress:0,result:null}),i},new Promise((t=>{t(e())}))).catch((e=>{Object.assign(this,{error:e,failed:!0}),this.$emit("error",{error:e,file:t})})).finally((()=>{Object.assign(this,{cancel:n,loading:!1})}))},onChange:function(t){t.preventDefault();let{files:e}=t.target;e&&e.length&&this.load(e[0])},onClick:function(t){t.preventDefault();let e=document.createElement("input");e.setAttribute("type","file");let{onChange:i}=this;e.addEventListener("change",i),e.click()},onDragEnter:function(t){t.preventDefault(),this.dragging=!0},onDragLeave:function(t){t.preventDefault(),this.dragging=!1},onDragOver:function(t){t.preventDefault()},onDrop:function(t){t.preventDefault(),this.dragging=!1;let{files:e}=t.dataTransfer;e&&e.length&&this.load(e[0])}};var r={props:{disabled:{type:Boolean,default:!1}},data:function(){return{cancel:n,dragging:!1,error:null,failed:!1,file:null,loaded:!1,loading:!1,progress:0,result:null}},computed:i,methods:a,render:function(){let{$scopedSlots:t,cancel:e,dragging:i,error:n,failed:a,file:r,loaded:o,loading:l,on:s,progress:c,result:d}=this;return t.default({cancel:e,dragging:i,error:n,failed:a,file:r,loaded:o,loading:l,on:s,progress:c,result:d})}};var o={functional:!0,render:function(t,e){let{data:i,listeners:n,parent:a}=e,{disabled:o,errorIcon:l,errorIconStyle:s,successIcon:c,successIconStyle:d,uploadIcon:u,uploadIconStyle:h}=a,{load:p}=n,{style:g}=i;return t(r,{style:g,props:{disabled:o},scopedSlots:{default:e=>{let{dragging:i,failed:n,file:a,loaded:r,loading:p,on:g,progress:f}=e;return t("VCard",{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"},props:{disabled:o,outlined:!0},on:g},[(()=>{if(p){let e,i,n=f/a.size*100;return n?i=`${Math.round(n)}%`:e=!0,t("VProgressCircular",{props:{color:"primary",indeterminate:e,rotate:-90,size:64,value:n,width:4}},i)}let e,g,m;return r?(e=d,g="success",m=c):n?(e=s,g="error",m=l):(e=h,i&&(g="primary"),m=u),t("VIcon",{style:e,props:{color:g,disabled:o,large:!0}},m)})()])}},on:{load:p}})}},l={MyActionButton:t,MyClearButton:{functional:!0,render:function(t,e){let{parent:i}=e;return t("MyActionButton",{props:{icon:i.clearIcon,iconStyle:i.clearIconStyle},on:{click:i.clear}})}},MyFileUpload:o,MyFlipHorizontallyButton:{functional:!0,render:function(t,e){let{parent:i}=e;return t("MyActionButton",{props:{icon:i.flipHorizontallyIcon,iconStyle:i.flipHorizontallyIconStyle},on:{click:i.flipHorizontally}})}},MyFlipVerticallyButton:{functional:!0,render:function(t,e){let{parent:i}=e;return t("MyActionButton",{props:{icon:i.flipVerticallyIcon,iconStyle:i.flipVerticallyIconStyle},on:{click:i.flipVertically}})}},MyRotateClockwiseButton:{functional:!0,render:function(t,e){let{parent:i}=e;return t("MyActionButton",{props:{icon:i.rotateClockwiseIcon,iconStyle:i.rotateClockwiseIconStyle},on:{click:i.rotateClockwise}})}},MyRotateCounterClockwiseButton:{functional:!0,render:function(t,e){let{parent:i}=e;return t("MyActionButton",{props:{icon:i.rotateCounterClockwiseIcon,iconStyle:i.rotateCounterClockwiseIconStyle},on:{click:i.rotateCounterClockwise}})}},MyScalingSlider:e};function s(t,e,i){return Math.min(Math.max(t,e),i)}var c={get(){return Math.round(s(this.scaledRotatedInternalImageWidthDifference*this.dirtyOriginLeft,this.computedMinCroppingLeft,this.computedMaxCroppingLeft))},set(t){let{scaledRotatedInternalImageWidthDifference:e}=this;this.dirtyOriginLeft=e?t/e:.5}},d={get(){return Math.round(s(this.scaledRotatedInternalImageHeightDifference*this.dirtyOriginTop,this.computedMinCroppingTop,this.computedMaxCroppingTop))},set(t){let{scaledRotatedInternalImageHeightDifference:e}=this;this.dirtyOriginTop=e?t/e:.5}};var u={get(){return s(this.dirtyScaling,this.computedMinScaling,this.computedMaxScaling)},set(t){this.dirtyScaling=t}};var h={checkeredBackground:function(){return[`url('data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill-opacity="0.2"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>')}')`,"center center / 16px 16px","repeat","#fff"].join(" ")},computedMaxCroppingLeft:function(){return Math.max(0,this.scaledRotatedInternalImageWidthDifference)},computedMaxCroppingTop:function(){return Math.max(0,this.scaledRotatedInternalImageHeightDifference)},computedMaxScaling:function(){return Math.max(this.imageMaxScaling,this.computedMinScaling)},computedMinCroppingLeft:function(){return Math.min(0,this.scaledRotatedInternalImageWidthDifference)},computedMinCroppingTop:function(){return Math.min(0,this.scaledRotatedInternalImageHeightDifference)},computedMinScaling:function(){switch(this.imageMinScaling){case"cover":return Math.max(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight);case"contain":return Math.min(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight)}return 0},croppingLeft:c,croppingTop:d,relativeRotatedInternalImageHeight:function(){return this.imageHeight/this.rotatedInternalImageHeight},relativeRotatedInternalImageWidth:function(){return this.imageWidth/this.rotatedInternalImageWidth},rotatedInternalImageHeight:function(){return this.rotated?this.internalImageWidth:this.internalImageHeight},rotatedInternalImageWidth:function(){return this.rotated?this.internalImageHeight:this.internalImageWidth},scaledRotatedInternalImageHeight:function(){return Math.round(this.scaling*this.rotatedInternalImageHeight)},scaledRotatedInternalImageHeightDifference:function(){return this.imageHeight-this.scaledRotatedInternalImageHeight},scaledRotatedInternalImageWidth:function(){return Math.round(this.scaling*this.rotatedInternalImageWidth)},scaledRotatedInternalImageWidthDifference:function(){return this.imageWidth-this.scaledRotatedInternalImageWidth},scaling:u,updateImageData:function(){let{croppingLeft:t,croppingTop:e,debounce:i,flippedHorizontally:n,flippedVertically:a,imageBackgroundColor:r,imageFormat:o,imageHeight:l,imageQuality:s,imageWidth:c,internalImageData:d,internalImageHeight:u,internalImageWidth:h,rotated:p,scaling:g}=this;return setTimeout((()=>{let i;if(d){let f=new Image;f.src=d;let m=document.createElement("canvas"),y=m.getContext("2d");m.width=c,m.height=l,r&&(y.fillStyle=r,y.fillRect(0,0,c,l)),y.translate(t,e),y.scale(g,g),p&&(y.translate(u,0),y.rotate(Math.PI/2)),n&&(y.translate(h,0),y.scale(-1,1)),a&&(y.translate(0,u),y.scale(1,-1)),y.drawImage(f,0,0),n&&(y.translate(c,0),y.scale(-1,1)),a&&(y.translate(0,l),y.scale(1,-1)),i=m.toDataURL(`image/${o}`,s)}else i=null;this.imageData=i}),i)}},p="VImageInput";function g(t){var e={exports:{}};return t(e,e.exports),e.exports}var f=g((function(t,e){t.exports=function(){function t(t){return void 0===t}function e(){}var i={t:e,n:e,o:e,i:e,e:e,u:e};function n(t,e,i,n){return Math.hypot(i-t,n-e)}var a={mousedown:function(t){this.t(t)},mousemove:function(t){this.n(t)},mouseup:function(t){this.o(t)},touchend:function(t){this.i(t)},touchmove:function(t){this.e(t)},touchstart:function(t){this.u(t)}},r=function(){function e(t,e){var i=this;void 0===e&&(e={});var n=e.delay;void 0===n&&(n=500);var r=e.distance;void 0===r&&(r=1),this.target=t,Object.assign(this,{delay:n,distance:r}),this.c(),this.r={};var o,l,s,c=(o=a,l=function(t){return t.bind(i)},s={},Object.entries(o).forEach((function(t){var e=t[0],i=t[1];s[e]=l(i)})),s),d=c.mousedown,u=c.mousemove,h=c.mouseup,p=c.touchend,g=c.touchmove,f=c.touchstart;this.s={mousedown:d,touchend:p,touchmove:g,touchstart:f},this.a={mousemove:u,mouseup:h}}var r={isIdle:{configurable:!0}};return e.prototype.h=function(){var t=this;Object.entries(this.s).forEach((function(e){var i=e[0],n=e[1];t.target.addEventListener(i,n)})),Object.entries(this.a).forEach((function(t){var e=t[0],i=t[1];window.addEventListener(e,i)}))},e.prototype.f=function(){var t=this;Object.entries(this.s).forEach((function(e){var i=e[0],n=e[1];t.target.removeEventListener(i,n)})),Object.entries(this.a).forEach((function(t){var e=t[0],i=t[1];window.removeEventListener(e,i)}))},e.prototype.on=function(t,e){this.isIdle&&this.h(),t=t.toLowerCase();var i=this.r[t];return i||(this.r[t]=i=[]),i.push(e),this},e.prototype.off=function(e,i){if(t(e))this.r={};else if(e=e.toLowerCase(),t(i))delete this.r[e];else{var n=this.r[e];if(n){var a=n.indexOf(i);0<=a&&(n.splice(a,1),n.length||delete this.r[e])}}return this.isIdle&&this.f(),this},e.prototype.trigger=function(t,e){t=t.toLowerCase();var i=this.r[t];return i&&i.forEach((function(t){t(e)})),this},r.isIdle.get=function(){return function(t){for(var e in t)if(i=t,n=e,Object.prototype.hasOwnProperty.call(i,n))return!1;var i,n;return!0}(this.r)},e.prototype.v=function(t){this.m=Object.assign({},i,t)},e.prototype.c=function(){var t,e,i,a,r,o=this,l=function(t){return function(e){e.preventDefault(),0<e.touches.length&&(i=e.touches[0].clientX,a=e.touches[0].clientY),t()}},s=function(t){return function(e){e.preventDefault(),i=e.clientX,a=e.clientY,t()}},c=function(t){return function(e){1===e.which&&s(t)(e)}},d=function(){e=Date.now();var r=i,d=a,u=setTimeout((function(){e=Date.now(),o.trigger("holdStart",{pointerType:t,timeStamp:e,x:r,y:d});var u=e,h=function(){e=Date.now(),o.trigger("holdEnd",{initialTimeStamp:u,pointerType:t,timeStamp:e,x:r,y:d}),o.c()},p=function(){n(r,d,i,a)>=o.distance&&h()},g={};switch(t){case"touch":Object.assign(g,{u:l(h),e:l(p),i:l(h)});break;case"mouse":Object.assign(g,{n:s(p),o:c(h)})}o.v(g)}),o.delay),h=function(){if(e=Date.now(),n(r,d,i,a)>=o.distance){clearTimeout(u),o.trigger("panStart",{pointerType:t,timeStamp:e,x:r,y:d});var h=e,p=h,g=r,f=d,m=function(){o.trigger("pan",{initialTimeStamp:h,initialX:r,initialY:d,pointerType:t,previousTimeStamp:p,previousX:g,previousY:f,timeStamp:e,x:i,y:a})};m();var y=function(){e=Date.now(),m(),p=e,g=i,f=a},v=function(){e=Date.now(),o.trigger("panEnd",{initialTimeStamp:h,initialX:r,initialY:d,pointerType:t,timeStamp:e,x:i,y:a}),o.c()},I={};switch(t){case"touch":Object.assign(I,{u:l(v),e:l(y),i:l(v)});break;case"mouse":Object.assign(I,{n:s(y),o:c(v)})}o.v(I)}},p=function(){clearTimeout(u),e=Date.now(),o.trigger("tap",{pointerType:t,timeStamp:e,x:i,y:a}),o.c()},g={};switch(t){case"touch":Object.assign(g,{u:l((function(){clearTimeout(u),o.c()})),e:l(h),i:l(p)});break;case"mouse":Object.assign(g,{n:s(h),o:c(p)})}o.v(g)};this.v({u:(r=function(){t="touch",d()},function(t){1===t.touches.length&&l(r)(t)}),t:c((function(){t="mouse",d()}))})},Object.defineProperties(e.prototype,r),e}();return Object.keys(i).forEach((function(t){Object.defineProperty(r.prototype,t,{get:function(){return this.m[t]}})})),r}()})),m=g((function(t,e){t.exports=function(t){t=t&&t.hasOwnProperty("default")?t.default:t;var e=new Map,i={name:"Claw",bind:function(i,n){var a=n.arg,r=n.value,o=e.get(i);o||e.set(i,o=new t(i)),o.on(a,r)},update:function(t,i){var n=i.arg,a=i.value,r=e.get(t);r.off(n),r.on(n,a)},unbind:function(t,i){var n=i.arg,a=e.get(t);a.off(n),a.isIdle&&e.delete(t)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.directive(i.name,i),i}(f)}));var y={clear:function(){this.internalImageData=null},flipHorizontally:function(){this.rotated?this.flippedVertically=!this.flippedVertically:this.flippedHorizontally=!this.flippedHorizontally,this.dirtyOriginLeft=1-this.dirtyOriginLeft},flipVertically:function(){this.rotated?this.flippedHorizontally=!this.flippedHorizontally:this.flippedVertically=!this.flippedVertically,this.dirtyOriginTop=1-this.dirtyOriginTop},load:function(t){if(this.imageData!==t){let e=new Image;e.addEventListener("load",(()=>{let i=e.naturalWidth,n=e.naturalHeight;this.internalImageData=i&&n?t:null,this.internalImageWidth=i,this.internalImageHeight=n,this.flippedHorizontally=!1,this.flippedVertically=!1,this.rotated=!1,this.scaling=0,this.dirtyOriginLeft=.5,this.dirtyOriginTop=.5})),e.src=t}},onPan:function(t){this.croppingLeft+=t.x-t.previousX,this.croppingTop+=t.y-t.previousY},rotateClockwise:function(){this.rotated?(this.rotated=!1,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically):this.rotated=!0;let{dirtyOriginTop:t}=this;this.dirtyOriginTop=this.dirtyOriginLeft,this.dirtyOriginLeft=1-t},rotateCounterClockwise:function(){this.rotated?this.rotated=!1:(this.rotated=!0,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically);let{dirtyOriginLeft:t}=this;this.dirtyOriginLeft=this.dirtyOriginTop,this.dirtyOriginTop=1-t},scaleTo:function(t){this.scaling=t}},v={type:Boolean,default:!1},I={type:Boolean,default:!1},S={type:Boolean,default:!1},w={type:Boolean,default:!1},b={type:Boolean,default:!1},C={type:Boolean,default:!1};var M={name:p,components:l,directives:{Claw:m},props:{clearable:v,clearIcon:{type:String,default:"$clear"},clearIconStyle:Object,debounce:{type:Number,default:0},disabled:I,errorIcon:{type:String,default:"$error"},errorIconStyle:Object,flipHorizontallyIcon:{type:String,default:"mdi-flip-horizontal"},flipHorizontallyIconStyle:Object,flipVerticallyIcon:{type:String,default:"mdi-flip-vertical"},flipVerticallyIconStyle:Object,fullHeight:S,fullWidth:w,hideActions:b,imageBackgroundColor:String,imageFormat:{type:String,default:"png"},imageHeight:{type:Number,default:256},imageMaxScaling:{type:Number,default:1},imageMinScaling:{type:String,default:"cover"},imageQuality:{},imageWidth:{type:Number,default:256},name:String,overlayBackgroundColor:{type:String,default:"rgba(0,0,0,0.5)"},overlayBorderColor:{type:String,default:"#fff"},overlayBorderWidth:{type:String,default:"4px"},overlayPadding:{type:String,default:"50px"},readonly:C,rotateClockwiseIcon:{type:String,default:"mdi-rotate-right"},rotateClockwiseIconStyle:Object,rotateCounterClockwiseIcon:{type:String,default:"mdi-rotate-left"},rotateCounterClockwiseIconStyle:Object,successIcon:{type:String,default:"$success"},successIconStyle:Object,uploadIcon:{type:String,default:"mdi-upload"},uploadIconStyle:Object,value:String,backgroundColor:{},maxScaling:{},minScaling:{},rotateCounterclockwiseIcon:{},rotateCounterclockwiseIconStyle:{},scalingSliderColor:{}},data:function(){return{dirtyOriginLeft:.5,dirtyOriginTop:.5,dirtyScaling:0,fileInfo:null,flippedHorizontally:!1,flippedVertically:!1,imageData:null,internalImageData:null,internalImageHeight:0,internalImageWidth:0,rotated:!1}},computed:h,watch:{imageData:function(t){this.$emit("input",t)},updateImageData:function(t,e){clearTimeout(e)},value:{handler(t){t?this.load(t):this.clear()},immediate:!0}},created:function(){let{$props:t,constructor:e}=this,{warn:i}=e.super.util;Object.entries({imageBackgroundColor:"backgroundColor",imageMaxScaling:"maxScaling",imageMinScaling:"minScaling",rotateCounterClockwiseIcon:"rotateCounterclockwiseIcon",rotateCounterClockwiseIconStyle:"rotateCounterclockwiseIconStyle"}).forEach((e=>{let[n,a]=e;void 0!==t[a]&&i(`[${p}]: The property '${a}' has been renamed to '${n}'.`)})),["scalingSliderColor"].forEach((e=>{void 0!==t[e]&&i(`[${p}]: The property '${e}' has been removed.`)}))},methods:y,render:function(t){return t("div",{style:{display:["-ms-inline-grid","inline-grid"],gridColumns:"1fr auto",gridRows:"1fr auto",gridTemplateColumns:"1fr auto",gridTemplateRows:"1fr auto",...this.fullHeight?{height:"100%"}:{},...this.fullWidth?{width:"100%"}:{}}},[t("div",{style:{gridColumn:1,gridRow:1,overflow:"hidden",position:"relative"}},[t("div",{style:{alignItems:"center",background:this.checkeredBackground,display:"flex",height:"100%",justifyContent:"center",overflow:"hidden",padding:`calc(${this.overlayPadding} + ${this.overlayBorderWidth})`,position:"relative",width:"100%",zIndex:0,...this.internalImageData||this.readonly?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"}},...this.internalImageData?this.disabled||this.readonly?{}:{directives:[{name:"Claw",arg:"pan",value:this.onPan}]}:{}},[t("div",{style:{boxShadow:`0 0 4000px 4000px ${this.overlayBackgroundColor}`,maxHeight:"100%",maxWidth:"100%",outline:`${this.overlayBorderWidth} solid ${this.overlayBorderColor}`,pointerEvents:"none"}},[t("div",{style:{height:`${this.imageHeight}px`,position:"relative",width:`${this.imageWidth}px`,zIndex:-1,...this.imageBackgroundColor?{backgroundColor:this.imageBackgroundColor}:{}}},[...this.internalImageData?[t("img",{style:{display:"block",pointerEvents:"none",position:"absolute",transform:[`translate(${this.croppingLeft}px,${this.croppingTop}px)`,`scale(${this.scaling})`,...this.rotated?[`translateX(${this.internalImageHeight}px)`,"rotate(90deg)"]:[],...this.flippedVertically?[`translateY(${this.internalImageHeight}px)`,"scaleY(-1)"]:[],...this.flippedHorizontally?[`translateX(${this.internalImageWidth}px)`,"scaleX(-1)"]:[]].join(" "),transformOrigin:"0 0"},attrs:{src:this.internalImageData}})]:[],...this.internalImageData&&this.imageData?[t("input",{attrs:{name:this.name,type:"hidden",value:this.imageData}})]:[]])])]),...this.internalImageData||this.readonly?[]:[t("MyFileUpload",{style:{bottom:0,left:0,position:"absolute",right:0,top:0},on:{load:t=>{let{file:{lastModified:e,name:i,size:n,type:a},result:r}=t;this.$emit("file-info",{name:i,size:n,type:a,lastModified:e}),this.load(r)}}})]]),t("div",{style:{display:"flex",gridColumn:1,gridRow:2,justifyContent:"center",...this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"}}},[...this.hideActions||this.readonly?[]:[t("MyRotateClockwiseButton"),t("MyRotateCounterClockwiseButton"),t("MyFlipHorizontallyButton"),t("MyFlipVerticallyButton"),t("VSpacer")],...this.clearable?[t("MyClearButton")]:[]]),t("div",{style:{gridColumn:1,gridRow:3,...this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"}}},this.hideActions||this.readonly?[]:[t("MyScalingSlider")])])}};return M}));
