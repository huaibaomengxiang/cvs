(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{161:function(t,e,i){},162:function(t,e,i){t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});let n=0;e.default=class{constructor(t){this.id=n++,this.execArr=[],this.opt={cache:!1,visible:!0,zIndex:0},this.noHover={},this.attr(t),this.opt.cache&&(this.p=2,this.lw=0,this.opt.stroke&&this.opt.lineWidth&&(this.lw=this.opt.lineWidth/2))}setAttr(t){let e=t||this.ctx;for(let t in this.opt)"opacity"===t?e.globalAlpha=this.opt[t]:"stroke"===t?e.strokeStyle=this.opt[t]:"fill"===t?e.fillStyle=this.opt[t]:/(shadowColor|shadowBlur|shadowOffsetX|shadowOffsetY|lineCap|lineJoin|lineWidth|miterLimit|font|textAlign|textBaseline|globalCompositeOperation)/.test(t)?e[t]=this.opt[t]:"transform"===t&&this.execArr.forEach(t=>{let i=Object.keys(t)[0],n=t[i];/(scale|translate|transform|setTransform)/.test(i)&&e[i](...n),"rotate"===i&&e[i](n*Math.PI/180)})}dye(t){let e=t||this.ctx;this.opt.stroke?e.stroke():e.fill()}attr(t,e){if(Object.assign(this.opt,t),t.transform&&(this.execArr=[],t.transform.forEach(t=>{this.execArr.push(t)})),!e&&this.opt.hover)for(let t in this.opt.hover)this.noHover[t]=this.opt[t]}on(t,e){this[t]=e}off(t){this[t]=null}}},function(t,e,i){t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,i){"use strict";function n(t){return Object.prototype.toString.call(t).replace(/\[object\s|\]/g,"")}function s(t){return"Object"===n(t)}function a(t){return"Array"===n(t)}function r(t){return"String"===n(t)}function o(t){return"Number"===n(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.type=n,e.isFunction=function(t){return"Function"===n(t)},e.isObject=s,e.isArray=a,e.isString=r,e.isNumber=o,e.isBoolean=function(t){return"Boolean"===n(t)},e.isUndefined=function(t){return"Undefined"===n(t)},e.isNull=function(t){return"Null"===n(t)},e.isStrOrNum=function(t){return r(t)||o(t)},e.isDef=function(t){return!(!t&&0!==t)},e.isEmptyObj=function(t){if(s(t)){for(var e in t)return!1;return!0}return!1},e.isEmptyArr=function(t){return!!a(t)&&0===t.length},e.isMobile=function(){return!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.objClone=function(t){var e={},i=function(t){switch((0,n.type)(t)){case"Array":case"Object":return e(t);default:return t}};for(var s in t)e[s]=i(t[s]);return e},e.getValInObj=function(t,e){return e.split(".").reduce((t,e)=>t[e],t)};var n=i(0)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(i(0)),s=c(i(3)),a=c(i(4)),r=c(i(5)),o=c(i(1)),h=c(i(6));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}const u=Object.assign(n,s,h,a,r,o);window.f=u,e.default=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.dateFormat=function(t,e){return t=function(t){if("Date"===(0,n.type)(t))return t;if((0,n.isStrOrNum)(t))return new Date(t);throw Error("You need input a right Date argument!")}(t),(e=e||"y/M/d h:0m:0s").replace(/y|0M|M|0d|d|0h|h|0m|m|0s|s/g,function(e){switch(e){case"y":return t.getFullYear();case"M":return t.getMonth()+1;case"0M":return s(t.getMonth()+1);case"d":return t.getDate();case"0d":return s(t.getDate());case"h":return t.getHours();case"0h":return s(t.getHours());case"m":return t.getMinutes();case"0m":return s(t.getMinutes());case"s":return t.getSeconds();case"0s":return s(t.getSeconds())}})},e.relativeDate=function(t){null===t&&(t=0);var e=new Date;return e.setDate(e.getDate()+t),e};var n=i(0);function s(t){return(t<10?"0":"")+t}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.delBlank=function(t){return t.trim().replace(/\s+/g," ")},e.omitStr=function(t,e){return e=e||t.length,t.substr(0,e)+"..."}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.arrFold=function(t,e){for(var i=[],n=0,s=0;s<t.length;s++)0===s?(i[n]=[],i[n].push(t[s])):(t[s][e]!==t[s-1][e]&&(i[++n]=[]),i[n].push(t[s]));return i},e.arrSort=function(t,e,i=!1){return t.length?((0,n.isNumber)(t[0])?t.sort(function(t,i){return e?i-t:t-i}):t.sort(function(t,n){return i?(0,s.getValInObj)(n,e)-(0,s.getValInObj)(t,e):(0,s.getValInObj)(t,e)-(0,s.getValInObj)(n,e)}),t):t};var n=i(0),s=i(1)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getUrlParams=function(){var t=window.document.location.href.toString().split("?");if(t[1]){t=t[1].split("&");for(var e={},i=0;i<t.length;i++){var n=t[i].indexOf("=");e[t[i].substring(0,n)]=t[i].substring(n+1)}return e}return{}}}])},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Path=e.Text=e.Img=e.Arc=e.Poly=e.Rect=e.Circle=e.Animate=e.Element=e.Cvs=void 0;var n=f(i(3)),s=f(i(0)),a=f(i(5)),r=f(i(6)),o=f(i(7)),h=f(i(8)),c=f(i(9)),u=f(i(10)),l=f(i(11)),d=f(i(12));function f(t){return t&&t.__esModule?t:{default:t}}e.Cvs=n.default,e.Element=s.default,e.Animate=d.default,e.Circle=r.default,e.Rect=o.default,e.Poly=h.default,e.Arc=c.default,e.Img=u.default,e.Text=l.default,e.Path=a.default},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),s=i(4);e.default=class{constructor(t){this.container=t.container,this.children=[],this.descChildren=[],this.stop=null,this.init(),this.bind(),this.animate()}init(){var t=document.createElement("canvas");this.width=t.width=this.container.clientWidth,this.height=t.height=this.container.clientHeight,this.canvas=t,this.ctx=t.getContext("2d"),this.container.appendChild(t)}bind(){this.canvas.addEventListener("click",t=>{let e=null;var i=(0,s.getLocation)(this.canvas,t);this.descChildren.some(t=>!(!t.opt.visible||!t.click)&&(t.drawPath(),this.ctx.isPointInPath(i.x,i.y)?(e=t,!0):void 0)),e&&e.click(t)});let t=0,e=0,i=null;this.canvas.addEventListener("mousemove",n=>{var a=(0,s.getLocation)(this.canvas,n);let r=null;this.descChildren.some(t=>!(!t.opt.visible||!t.click)&&(t.drawPath(),this.ctx.isPointInPath(a.x,a.y)?(r=t,!0):void 0)),r&&0===t&&(this.canvas.style.cursor="pointer",t++),r||1!==t||(this.canvas.style.cursor="auto",t=0);let o={opt:{}};this.descChildren.some(t=>!!t.opt.visible&&(t.drawPath(),this.ctx.isPointInPath(a.x,a.y)?(o=t,!0):void 0)),o.opt.hover&&0===e&&(o.attr(o.opt.hover,!0),i=o,e++,this.draw()),i&&i.id!==o.id&&1===e&&(i.attr(i.noHover,!0),e=0,this.draw())})}add(e){if(!(e instanceof n.default))throw Error("Function add only accept the instance of Element.");e.ctx=this.ctx,e.canvas=this.canvas,this.children.push(e),t.arrSort(this.children,"opt.zIndex"),this.descChildren.push(e),t.arrSort(this.descChildren,"opt.zIndex",!0)}remove(t){t?(this.children.some((e,i)=>{if(e.id===t.id)return this.children.splice(i,1),!0}),this.descChildren.some((e,i)=>{if(e.id===t.id)return this.children.splice(i,1),!0})):(this.children=[],this.descChildren=[])}draw(){this.children.forEach(t=>{t.opt.visible&&(t.draw(),this.move())})}move(){this.children.forEach(t=>{t.animate&&t.animate()})}clear(){this.ctx.clearRect(0,0,this.width,this.height)}animate(){var t=this;!function e(){t.stop=(0,s.animFrame)(e),t.clear(),t.draw()}()}cancelAnimate(){(0,s.cancelAnim)(this.stop)}}}).call(e,i(1).default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getLocation=function(t,e){var i="ontouchstart"in window,n=e||window.event,s=i?n.targetTouches[0].pageX:n.clientX,a=i?n.targetTouches[0].pageY:n.clientY;return{x:s-t.getBoundingClientRect().left,y:a-t.getBoundingClientRect().top}},e.int=function(t){return.5+t<<0},e.animFrame=requestAnimationFrame||webkitRequestAnimationFrame||mozRequestAnimationFrame||oRequestAnimationFrame||msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},e.cancelAnim=cancelAnimationFrame||webkitCancelAnimationFrame||mozCancelAnimationFrame||msCancelAnimationFrame||function(t){clearTimeout(t)}},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=class extends n.default{constructor(t){super(t),this.lastPoint=[],this.lastCpoint=[]}draw(){var t=this.ctx;t.save(),this.setAttr(),this.drawPath(),this.dye(),t.restore()}drawPath(){this.ctx.beginPath();let e=t.delBlank(this.opt.path),i=e.match(/[A-z]/g),n=e.split(/[A-z]/).filter(function(t){return""!==t}).map(function(e){return t.delBlank(e)});i.forEach((t,e)=>{let i=[];n[e]&&(i=n[e].split(" ").map(t=>Number(t))),this.resolve(t,i)})}resolve(t,e){if(/(M|m)/.test(t)&&(this.lastPoint=e,this.ctx.moveTo(this.lastPoint[0],this.lastPoint[1])),/(L|l)/.test(t)&&("l"===t?e.forEach((t,e)=>{this.lastPoint[e]+=t}):this.lastPoint=e,this.ctx.lineTo(this.lastPoint[0],this.lastPoint[1])),/(H|h)/.test(t)&&("h"===t?this.lastPoint[0]+=e[0]:this.lastPoint[0]=e[0],this.ctx.lineTo(this.lastPoint[0],this.lastPoint[1])),/(V|v)/.test(t)&&("v"===t?this.lastPoint[1]+=e[0]:this.lastPoint[1]=e[0],this.ctx.lineTo(this.lastPoint[0],this.lastPoint[1])),/(A|a)/.test(t)){let i=e;"a"===t&&(i[0]=this.lastPoint[0]+e[0],i[1]=this.lastPoint[1]+e[1]),i[3]=e[3]*Math.PI/180,i[4]=e[4]*Math.PI/180,i[5]=!!e[5],this.ctx.arc(...i),this.lastPoint=[i[0]+i[2]*Math.cos(i[4]),i[1]+i[2]*Math.sin(i[4])]}if(/(C|c|S|s)/.test(t)){let i=[];/(S|s)/.test(t)&&(i[0]=2*this.lastPoint[0]-(this.lastCpoint[0]||this.lastPoint[0]),i[1]=2*this.lastPoint[1]-(this.lastCpoint[1]||this.lastPoint[0])),/(c|s)/.test(t)?e.forEach((t,e)=>{i.push(this.lastPoint[e%2]+t)}):i=i.concat(e),this.ctx.bezierCurveTo(...i),this.lastPoint=[i[4],i[5]],this.lastCpoint=[i[2],i[3]]}if(/(Q|q|T|t)/.test(t)){let i=[];/(T|t)/.test(t)&&(i[0]=2*this.lastPoint[0]-(this.lastCpoint[0]||this.lastPoint[0]),i[1]=2*this.lastPoint[1]-(this.lastCpoint[1]||this.lastPoint[0])),/(q|t)/.test(t)?e.forEach((t,e)=>{i.push(this.lastPoint[e%2]+t)}):i=i.concat(e),this.ctx.quadraticCurveTo(...i),this.lastPoint=[i[2],i[3]],this.lastCpoint=[i[0],i[1]]}/(Z|z)/.test(t)&&this.ctx.closePath()}}}).call(e,i(1).default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=class extends n.default{constructor(t){super(t),this.cache&&this.cacheDraw()}draw(){var t=this.ctx;t.save(),this.cache?t.drawImage(this.cacheCanvas,this.opt.x-this.halfW,this.opt.y-this.halfH):this.drawUint(),t.restore()}drawUint(t){var e=t||this.ctx;this.setAttr(e),this.drawPath(t||null),this.dye(e)}drawPath(t){var e=t||this.ctx;e.beginPath(),t?e.arc(this.halfW,this.halfH,this.opt.r,0,2*Math.PI):e.arc(this.opt.x,this.opt.y,this.opt.r,0,2*Math.PI)}cacheDraw(){this.cacheCanvas=document.createElement("canvas"),this.halfW=this.opt.r+this.lw+this.p,this.halfH=this.opt.r+this.lw+this.p,this.cacheCanvas.width=2*this.halfW,this.cacheCanvas.height=2*this.halfH,this.drawUint(this.cacheCanvas.getContext("2d"))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=class extends n.default{constructor(t){super(t),this.cache&&this.cacheDraw()}draw(){var t=this.ctx;t.save(),this.cache?t.drawImage(this.cacheCanvas,this.opt.x-this.lw,this.opt.y-this.lw):this.drawUnit(),t.restore()}drawUnit(t){let e=t||this.ctx;this.setAttr(e),this.drawPath(t||null),this.dye(e)}drawPath(t){var e=t||this.ctx;e.beginPath(),t?e.rect(this.lw,this.lw,this.opt.w,this.opt.h):e.rect(this.opt.x,this.opt.y,this.opt.w,this.opt.h)}cacheDraw(){this.cacheCanvas=document.createElement("canvas"),this.cacheCanvas.width=this.opt.w+2*this.lw,this.cacheCanvas.height=this.opt.h+2*this.lw,this.drawUnit(this.cacheCanvas.getContext("2d"))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=class extends n.default{constructor(t){super(t),this.cache&&this.cacheDraw()}draw(){var t=this.ctx;t.save(),this.cache?t.drawImage(this.cacheCanvas,this.minX,this.minY):this.drawUint(),t.restore()}drawUint(t){var e=t||this.ctx;this.setAttr(e),this.drawPath(t||null),this.dye(e)}drawPath(t){var e=t||this.ctx;e.beginPath(),t?this.opt.points.forEach((t,i)=>{0===i?e.moveTo(t[0]-this.minX,t[1]-this.minY):e.lineTo(t[0]-this.minX,t[1]-this.minY)}):this.opt.points.forEach((t,i)=>{0===i?e.moveTo(t[0],t[1]):e.lineTo(t[0],t[1])}),this.opt.stroke||e.closePath()}cacheDraw(){this.cacheCanvas=document.createElement("canvas");let t=[],e=[];this.opt.points.forEach(i=>{t.push(i[0]),e.push(i[1])}),this.minX=Math.min(...t),this.minY=Math.min(...e),this.cacheCanvas.width=Math.max(...t)-this.minX,this.cacheCanvas.height=Math.max(...e)-this.minY,this.drawUint(this.cacheCanvas.getContext("2d"))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=class extends n.default{constructor(t){super(t),this.cache&&this.cacheDraw()}draw(){let t=this.ctx;t.save(),this.cache?t.drawImage(this.cacheCanvas,this.opt.x-this.halfW,this.opt.y-this.halfH):this.drawUnit(),t.restore()}drawUnit(t){let e=t||this.ctx;this.setAttr(e),this.drawPath(t||null),this.opt.stroke?e.stroke():e.fill()}drawPath(t){let e=t||this.ctx;e.beginPath(),t?e.arc(this.halfW,this.halfH,this.opt.r,this.opt.startAngle*Math.PI/180,this.opt.endAngle*Math.PI/180,!!this.opt.anticlockwise):e.arc(this.opt.x,this.opt.y,this.opt.r,this.opt.startAngle*Math.PI/180,this.opt.endAngle*Math.PI/180,!!this.opt.anticlockwise),this.opt.stroke||e.closePath()}cacheDraw(){this.cacheCanvas=document.createElement("canvas"),this.halfW=this.opt.r+this.lw+this.p,this.halfH=this.opt.r+this.lw+this.p,this.cacheCanvas.width=2*this.halfW,this.cacheCanvas.height=2*this.halfH,this.drawUnit(this.cacheCanvas.getContext("2d"))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=class extends n.default{constructor(t){super(t),this.cache&&this.cacheDraw()}draw(){this.w=this.opt.dw?this.opt.dw:this.opt.img.width,this.h=this.opt.dh?this.opt.dh:this.opt.img.height,this.cache?(this.cacheDraw(),this.ctx.drawImage(this.cacheCanvas,this.opt.dx,this.opt.dy)):this.drawUnit()}drawPath(){var t=this.ctx;t.beginPath(),t.rect(this.opt.dx,this.opt.dy,this.w,this.h)}drawUnit(t){let e=t||this.ctx,i=this.opt.img;e.save(),this.setAttr(e),t?this.opt.sw&&this.opt.sh?e.drawImage(i,this.opt.sx,this.opt.sy,this.opt.sw,this.opt.sh,0,0,this.opt.dw,this.opt.dh):this.opt.dw&&this.opt.dh?e.drawImage(i,0,0,this.opt.dw,this.opt.dh):e.drawImage(i,0,0):this.opt.sw&&this.opt.sh?e.drawImage(i,this.opt.sx,this.opt.sy,this.opt.sw,this.opt.sh,this.opt.dx,this.opt.dy,this.opt.dw,this.opt.dh):this.opt.dw&&this.opt.dh?e.drawImage(i,this.opt.dx,this.opt.dy,this.opt.dw,this.opt.dh):e.drawImage(i,this.opt.dx,this.opt.dy),e.restore()}cacheDraw(){this.cacheCanvas=document.createElement("canvas"),this.cacheCanvas.width=this.w,this.cacheCanvas.height=this.h,this.drawUnit(this.cacheCanvas.getContext("2d"))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=class extends n.default{constructor(t){super(t),this.opt.lineWidth=1,this.opt.fontSize=this.opt.fontSize||10,this.opt.fontFamily=this.opt.fontFamily||"sans-serif",this.opt.fontStyle=this.opt.fontStyle||"normal",this.opt.fontWeight=this.opt.fontWeight||"normal",this.opt.fontVariant=this.opt.fontVariant||"normal"}draw(){var t=this.ctx;t.beginPath(),t.save(),this.assembleFont(),this.setAttr(),this.opt.stroke?t.strokeText(this.opt.text,this.opt.x,this.opt.y):t.fillText(this.opt.text,this.opt.x,this.opt.y),t.restore()}assembleFont(){this.opt.font||(this.opt.font=[this.opt.fontStyle,this.opt.fontVariant,this.opt.fontWeight,this.opt.fontSize+"px",this.opt.fontFamily].join(" "))}drawPath(){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(i(13)),s=a(i(14));function a(t){return t&&t.__esModule?t:{default:t}}const r=t=>{var e=document.createElement("canvas");e.width="1",e.height="256";var i=e.getContext("2d"),n=i.createLinearGradient(0,0,1,256);return t.forEach(function(t){n.addColorStop(t[0],t[1])}),i.fillStyle=n,i.fillRect(0,0,1,256),i.getImageData(0,0,1,256).data},o={circling:function(t,e){const{opt:i}=t,n=e.relativeX||0,s=e.relativeY||0,a=e.vpx,r=e.vpy,o=e.r||100,h=e.speed||.04;i.x=a+o*Math.cos(i.angle)-n,i.y=r+o*Math.sin(i.angle)-s,i.angle+=h},elliptic:function(t,e){const{opt:i}=t,n=e.relativeX||0,s=e.relativeY||0,a=e.vpx,r=e.vpy,o=e.radiusX||100,h=e.radiusY||80,c=e.speed||.04;i.angle+=c,i.x=a+o*Math.cos(i.angle)-n,i.y=r+h*Math.sin(i.angle)-s},line:function(t,e){const{opt:i}=t,s=e.endX,a=e.endY,r=e.time,o=e.type||"Linear";let h,c,u;i.recordLine?h=i.recordLine.start:(h=0,i.recordLine={start:0,sx:i.x,sy:i.y}),o instanceof Array?(c=n.default[o[0]][o[1]](h,i.recordLine.sx,s,r),u=n.default[o[0]][o[1]](h,i.recordLine.sy,a,r)):"string"==typeof o&&(c=n.default[o](h,i.recordLine.sx,s,r),u=n.default[o](h,i.recordLine.sy,a,r)),Math.abs(i.x-s)<.1&&Math.abs(i.y-a)<.1?(i.x=s,i.y=a):(i.x=c,i.y=u,i.recordLine.start+=10)},parabola:function(t,e){const{opt:i}=t,s=e.endX,a=e.endY,r=e.time,o=e.type||"Linear";let h,c,u,l,d=4e-4;i.recordParabola?(u=i.recordParabola.start,h=i.recordParabola.b,c=i.recordParabola.c):(u=0,h=(i.y-a-d*(Math.pow(i.x,2)-Math.pow(s,2)))/(i.x-s),c=i.y-d*Math.pow(i.x,2)-h*i.x,i.recordParabola={start:0,sx:i.x,sy:i.y,b:h,c:c}),o instanceof Array?l=n.default[o[0]][o[1]](u,i.recordParabola.sx,s,r):"string"==typeof o&&(l=n.default[o](u,i.recordParabola.sx,s,r)),Math.abs(i.x-s)<.1&&Math.abs(i.y-a)<.1?(i.x=s,i.y=a):(i.x=l,i.y=d*i.x*i.x+h*i.x+c,i.recordParabola.start+=10)},colorPalette:r,gradientColor:(t,e)=>{const{ctx:i,opt:s}=t;var a,o=i.width,h=i.height,c=0,u=0,l=e.during,d=e.type||"Linear",f=t.recordParam&&t.recordParam.colorArr||r(e.colors),p=f.length/4/l;t.recordParam?(c=t.recordParam.start++,u=t.recordParam.begin,p=t.recordParam.end):t.recordParam={start:c,begin:u,end:p,during:l,colorArr:f},d instanceof Array?a=n.default[d[0]][d[1]](c,u,p,l).toFixed(0):"string"==typeof d&&(a=n.default[d](c,u,p,l).toFixed(0)),e.period&&a>f.length/4&&(t.recordParam.start=0),i.clearRect(0,0,o,h),i.fillStyle="rgba("+[f[4*a+0],f[4*a+1],f[4*a+2],f[4*a+3]]+")",i.fill()},bezier:s.default};e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={Linear:function(t,e,i,n){return i*t/n+e},Quad:{easeIn:function(t,e,i,n){return i*(t/=n)*t+e},easeOut:function(t,e,i,n){return-i*(t/=n)*(t-2)+e},easeInOut:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}},Cubic:{easeIn:function(t,e,i,n){return i*(t/=n)*t*t+e},easeOut:function(t,e,i,n){return i*((t=t/n-1)*t*t+1)+e},easeInOut:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e}},Quart:{easeIn:function(t,e,i,n){return i*(t/=n)*t*t*t+e},easeOut:function(t,e,i,n){return-i*((t=t/n-1)*t*t*t-1)+e},easeInOut:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e}},Quint:{easeIn:function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},easeOut:function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},easeInOut:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e}},Sine:{easeIn:function(t,e,i,n){return-i*Math.cos(t/n*(Math.PI/2))+i+e},easeOut:function(t,e,i,n){return i*Math.sin(t/n*(Math.PI/2))+e},easeInOut:function(t,e,i,n){return-i/2*(Math.cos(Math.PI*t/n)-1)+e}},Expo:{easeIn:function(t,e,i,n){return 0===t?e:i*Math.pow(2,10*(t/n-1))+e},easeOut:function(t,e,i,n){return t===n?e+i:i*(1-Math.pow(2,-10*t/n))+e},easeInOut:function(t,e,i,n){return 0===t?e:t===n?e+i:(t/=n/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e}},Circ:{easeIn:function(t,e,i,n){return-i*(Math.sqrt(1-(t/=n)*t)-1)+e},easeOut:function(t,e,i,n){return i*Math.sqrt(1-(t=t/n-1)*t)+e},easeInOut:function(t,e,i,n){return(t/=n/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e}},Elastic:{easeIn:function(t,e,i,n,s,a){var r;return 0===t?e:1==(t/=n)?e+i:(void 0===a&&(a=.3*n),!s||s<Math.abs(i)?(r=a/4,s=i):r=a/(2*Math.PI)*Math.asin(i/s),-s*Math.pow(2,10*(t-=1))*Math.sin((t*n-r)*(2*Math.PI)/a)+e)},easeOut:function(t,e,i,n,s,a){var r;return 0===t?e:1==(t/=n)?e+i:(void 0===a&&(a=.3*n),!s||s<Math.abs(i)?(s=i,r=a/4):r=a/(2*Math.PI)*Math.asin(i/s),s*Math.pow(2,-10*t)*Math.sin((t*n-r)*(2*Math.PI)/a)+i+e)},easeInOut:function(t,e,i,n,s,a){var r;return 0===t?e:2==(t/=n/2)?e+i:(void 0===a&&(a=n*(.3*1.5)),!s||s<Math.abs(i)?(s=i,r=a/4):r=a/(2*Math.PI)*Math.asin(i/s),t<1?s*Math.pow(2,10*(t-=1))*Math.sin((t*n-r)*(2*Math.PI)/a)*-.5+e:s*Math.pow(2,-10*(t-=1))*Math.sin((t*n-r)*(2*Math.PI)/a)*.5+i+e)}},Back:{easeIn:function(t,e,i,n,s){return void 0===s&&(s=1.70158),i*(t/=n)*t*((s+1)*t-s)+e},easeOut:function(t,e,i,n,s){return void 0===s&&(s=1.70158),i*((t=t/n-1)*t*((s+1)*t+s)+1)+e},easeInOut:function(t,e,i,n,s){return void 0===s&&(s=1.70158),(t/=n/2)<1?i/2*(t*t*((1+(s*=1.525))*t-s))+e:i/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+e}},Bounce:{easeIn:function(t,e,i,s){return i-n.Bounce.easeOut(s-t,0,i,s)+e},easeOut:function(t,e,i,n){return(t/=n)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOut:function(t,e,i,s){return t<s/2?.5*n.Bounce.easeIn(2*t,0,i,s)+e:.5*n.Bounce.easeOut(2*t-s,0,i,s)+.5*i+e}}};e.default=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,s=[],a=[];function r(t,e){var i=0,n=0,s=t.length-1;return t.forEach(function(t,a){a?(i+=o(s)/o(a)/o(s-a)*t.x*Math.pow(1-e,s-a)*Math.pow(e,a),n+=o(s)/o(a)/o(s-a)*t.y*Math.pow(1-e,s-a)*Math.pow(e,a)):(i+=t.x*Math.pow(1-e,s-a)*Math.pow(e,a),n+=t.y*Math.pow(1-e,s-a)*Math.pow(e,a))}),{x:i,y:n}}function o(t){return t<=1?1:t*o(t-1)}e.default=function(t,e){if(n>1)return;const{opt:i}=t,o=e.speed||.01;n+=o,function(t,e){if(e.length&&(a=[],e.forEach(function(i){if(1===e.length&&(s.push(i),s.length>1)){var n=s.length;t.x=s[n-1].x,t.y=s[n-1].y}}),e.length))for(var i=0;i<e.length-1;i++){var o=[{x:e[i].x,y:e[i].y},{x:e[i+1].x,y:e[i+1].y}];a.push(r(o,n))}}(i,a.length?a:e.points)}}])},163:function(t,e,i){"use strict";var n=i(161);i.n(n).a},164:function(t,e,i){"use strict";var n={data:function(){return{key:0}},methods:{changeKey:function(){this.key++}}},s=(i(163),i(0)),a=Object(s.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{key:this.key,staticClass:"main-contaienr"},[e("button",{staticClass:"restart",on:{click:this.changeKey}},[this._v("restart")]),this._v(" "),this._t("default")],2)},[],!1,null,"4350e291",null);a.options.__file="Container.vue";e.a=a.exports},174:function(t,e,i){"use strict";i.r(e);var n=i(162),s={components:{Container:i(164).a},data:function(){return{}},mounted:function(){var t=new n.Cvs({container:document.getElementById("container")});t.add(new n.Text({text:"hello",x:89,y:76,font:"48px serif"})),t.draw()}},a=i(0),r=Object(a.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Container",[e("div",{staticStyle:{width:"100%",height:"160px"},attrs:{id:"container"}})])],1)},[],!1,null,null,null);r.options.__file="c-text.vue";e.default=r.exports}}]);