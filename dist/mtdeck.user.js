// ==UserScript==
// @name        MTDeck
// @version     1.2.2
// @author      Compeito
// @description TweetDeckをスマホアプリのように使えるようにする
// @homepage    https://github.com/Compeito/mtdeck
// @match       https://tweetdeck.twitter.com
// ==/UserScript==

!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){var i;
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */!function(o,r,s,a){"use strict";var c,u=["","webkit","Moz","MS","ms","o"],l=r.createElement("div"),h="function",p=Math.round,d=Math.abs,f=Date.now;function m(t,e,n){return setTimeout(k(t,n),e)}function v(t,e,n){return!!Array.isArray(t)&&(g(t,n[e],n),!0)}function g(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function y(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=o.console&&(o.console.warn||o.console.log);return r&&r.call(o.console,i,n),t.apply(this,arguments)}}c="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var o in i)i.hasOwnProperty(o)&&(e[o]=i[o])}return e}:Object.assign;var b=y((function(t,e,n){for(var i=Object.keys(e),o=0;o<i.length;)(!n||n&&t[i[o]]===a)&&(t[i[o]]=e[i[o]]),o++;return t}),"extend","Use `assign`."),T=y((function(t,e){return b(t,e,!0)}),"merge","Use `assign`.");function E(t,e,n){var i,o=e.prototype;(i=t.prototype=Object.create(o)).constructor=t,i._super=o,n&&c(i,n)}function k(t,e){return function(){return t.apply(e,arguments)}}function x(t,e){return typeof t==h?t.apply(e&&e[0]||a,e):t}function w(t,e){return t===a?e:t}function S(t,e,n){g(C(e),(function(e){t.addEventListener(e,n,!1)}))}function I(t,e,n){g(C(e),(function(e){t.removeEventListener(e,n,!1)}))}function O(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function A(t,e){return t.indexOf(e)>-1}function C(t){return t.trim().split(/\s+/g)}function M(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function P(t){return Array.prototype.slice.call(t,0)}function D(t,e,n){for(var i=[],o=[],r=0;r<t.length;){var s=e?t[r][e]:t[r];M(o,s)<0&&i.push(t[r]),o[r]=s,r++}return n&&(i=e?i.sort((function(t,n){return t[e]>n[e]})):i.sort()),i}function _(t,e){for(var n,i,o=e[0].toUpperCase()+e.slice(1),r=0;r<u.length;){if((i=(n=u[r])?n+o:e)in t)return i;r++}return a}var j=1;function R(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||o}var q="ontouchstart"in o,z=_(o,"PointerEvent")!==a,L=q&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),N=25,X=1,Y=2,F=4,$=8,B=1,W=2,H=4,V=8,U=16,G=W|H,Z=V|U,J=G|Z,K=["x","y"],Q=["clientX","clientY"];function tt(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){x(t.options.enable,[t])&&n.handler(e)},this.init()}function et(t,e,n){var i=n.pointers.length,o=n.changedPointers.length,r=e&X&&i-o==0,s=e&(F|$)&&i-o==0;n.isFirst=!!r,n.isFinal=!!s,r&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,o=i.length;n.firstInput||(n.firstInput=nt(e));o>1&&!n.firstMultiple?n.firstMultiple=nt(e):1===o&&(n.firstMultiple=!1);var r=n.firstInput,s=n.firstMultiple,c=s?s.center:r.center,u=e.center=it(i);e.timeStamp=f(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=at(c,u),e.distance=st(c,u),function(t,e){var n=e.center,i=t.offsetDelta||{},o=t.prevDelta||{},r=t.prevInput||{};e.eventType!==X&&r.eventType!==F||(o=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y});e.deltaX=o.x+(n.x-i.x),e.deltaY=o.y+(n.y-i.y)}(n,e),e.offsetDirection=rt(e.deltaX,e.deltaY);var l=ot(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=l.x,e.overallVelocityY=l.y,e.overallVelocity=d(l.x)>d(l.y)?l.x:l.y,e.scale=s?(h=s.pointers,p=i,st(p[0],p[1],Q)/st(h[0],h[1],Q)):1,e.rotation=s?function(t,e){return at(e[1],e[0],Q)+at(t[1],t[0],Q)}(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,function(t,e){var n,i,o,r,s=t.lastInterval||e,c=e.timeStamp-s.timeStamp;if(e.eventType!=$&&(c>N||s.velocity===a)){var u=e.deltaX-s.deltaX,l=e.deltaY-s.deltaY,h=ot(c,u,l);i=h.x,o=h.y,n=d(h.x)>d(h.y)?h.x:h.y,r=rt(u,l),t.lastInterval=e}else n=s.velocity,i=s.velocityX,o=s.velocityY,r=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=o,e.direction=r}(n,e);var h,p;var m=t.element;O(e.srcEvent.target,m)&&(m=e.srcEvent.target);e.target=m}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function nt(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:p(t.pointers[n].clientX),clientY:p(t.pointers[n].clientY)},n++;return{timeStamp:f(),pointers:e,center:it(e),deltaX:t.deltaX,deltaY:t.deltaY}}function it(t){var e=t.length;if(1===e)return{x:p(t[0].clientX),y:p(t[0].clientY)};for(var n=0,i=0,o=0;o<e;)n+=t[o].clientX,i+=t[o].clientY,o++;return{x:p(n/e),y:p(i/e)}}function ot(t,e,n){return{x:e/t||0,y:n/t||0}}function rt(t,e){return t===e?B:d(t)>=d(e)?t<0?W:H:e<0?V:U}function st(t,e,n){n||(n=K);var i=e[n[0]]-t[n[0]],o=e[n[1]]-t[n[1]];return Math.sqrt(i*i+o*o)}function at(t,e,n){n||(n=K);var i=e[n[0]]-t[n[0]],o=e[n[1]]-t[n[1]];return 180*Math.atan2(o,i)/Math.PI}tt.prototype={handler:function(){},init:function(){this.evEl&&S(this.element,this.evEl,this.domHandler),this.evTarget&&S(this.target,this.evTarget,this.domHandler),this.evWin&&S(R(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(R(this.element),this.evWin,this.domHandler)}};var ct={mousedown:X,mousemove:Y,mouseup:F},ut="mousedown",lt="mousemove mouseup";function ht(){this.evEl=ut,this.evWin=lt,this.pressed=!1,tt.apply(this,arguments)}E(ht,tt,{handler:function(t){var e=ct[t.type];e&X&&0===t.button&&(this.pressed=!0),e&Y&&1!==t.which&&(e=F),this.pressed&&(e&F&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var pt={pointerdown:X,pointermove:Y,pointerup:F,pointercancel:$,pointerout:$},dt={2:"touch",3:"pen",4:"mouse",5:"kinect"},ft="pointerdown",mt="pointermove pointerup pointercancel";function vt(){this.evEl=ft,this.evWin=mt,tt.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}o.MSPointerEvent&&!o.PointerEvent&&(ft="MSPointerDown",mt="MSPointerMove MSPointerUp MSPointerCancel"),E(vt,tt,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),o=pt[i],r=dt[t.pointerType]||t.pointerType,s="touch"==r,a=M(e,t.pointerId,"pointerId");o&X&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):o&(F|$)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,o,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),n&&e.splice(a,1))}});var gt={touchstart:X,touchmove:Y,touchend:F,touchcancel:$},yt="touchstart",bt="touchstart touchmove touchend touchcancel";function Tt(){this.evTarget=yt,this.evWin=bt,this.started=!1,tt.apply(this,arguments)}function Et(t,e){var n=P(t.touches),i=P(t.changedTouches);return e&(F|$)&&(n=D(n.concat(i),"identifier",!0)),[n,i]}E(Tt,tt,{handler:function(t){var e=gt[t.type];if(e===X&&(this.started=!0),this.started){var n=Et.call(this,t,e);e&(F|$)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var kt={touchstart:X,touchmove:Y,touchend:F,touchcancel:$},xt="touchstart touchmove touchend touchcancel";function wt(){this.evTarget=xt,this.targetIds={},tt.apply(this,arguments)}function St(t,e){var n=P(t.touches),i=this.targetIds;if(e&(X|Y)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var o,r,s=P(t.changedTouches),a=[],c=this.target;if(r=n.filter((function(t){return O(t.target,c)})),e===X)for(o=0;o<r.length;)i[r[o].identifier]=!0,o++;for(o=0;o<s.length;)i[s[o].identifier]&&a.push(s[o]),e&(F|$)&&delete i[s[o].identifier],o++;return a.length?[D(r.concat(a),"identifier",!0),a]:void 0}E(wt,tt,{handler:function(t){var e=kt[t.type],n=St.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var It=2500,Ot=25;function At(){tt.apply(this,arguments);var t=k(this.handler,this);this.touch=new wt(this.manager,t),this.mouse=new ht(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Ct(t,e){t&X?(this.primaryTouch=e.changedPointers[0].identifier,Mt.call(this,e)):t&(F|$)&&Mt.call(this,e)}function Mt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout((function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)}),It)}}function Pt(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var o=this.lastTouches[i],r=Math.abs(e-o.x),s=Math.abs(n-o.y);if(r<=Ot&&s<=Ot)return!0}return!1}E(At,tt,{handler:function(t,e,n){var i="touch"==n.pointerType,o="mouse"==n.pointerType;if(!(o&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)Ct.call(this,e,n);else if(o&&Pt.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Dt=_(l.style,"touchAction"),_t=Dt!==a,jt="auto",Rt="manipulation",qt="none",zt="pan-x",Lt="pan-y",Nt=function(){if(!_t)return!1;var t={},e=o.CSS&&o.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){t[n]=!e||o.CSS.supports("touch-action",n)})),t}();function Xt(t,e){this.manager=t,this.set(e)}Xt.prototype={set:function(t){"compute"==t&&(t=this.compute()),_t&&this.manager.element.style&&Nt[t]&&(this.manager.element.style[Dt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return g(this.manager.recognizers,(function(e){x(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(A(t,qt))return qt;var e=A(t,zt),n=A(t,Lt);if(e&&n)return qt;if(e||n)return e?zt:Lt;if(A(t,Rt))return Rt;return jt}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,o=A(i,qt)&&!Nt[qt],r=A(i,Lt)&&!Nt[Lt],s=A(i,zt)&&!Nt[zt];if(o){var a=1===t.pointers.length,c=t.distance<2,u=t.deltaTime<250;if(a&&c&&u)return}if(!s||!r)return o||r&&n&G||s&&n&Z?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Yt=1,Ft=2,$t=4,Bt=8,Wt=Bt,Ht=16;function Vt(t){this.options=c({},this.defaults,t||{}),this.id=j++,this.manager=null,this.options.enable=w(this.options.enable,!0),this.state=Yt,this.simultaneous={},this.requireFail=[]}function Ut(t){return t&Ht?"cancel":t&Bt?"end":t&$t?"move":t&Ft?"start":""}function Gt(t){return t==U?"down":t==V?"up":t==W?"left":t==H?"right":""}function Zt(t,e){var n=e.manager;return n?n.get(t):t}function Jt(){Vt.apply(this,arguments)}function Kt(){Jt.apply(this,arguments),this.pX=null,this.pY=null}function Qt(){Jt.apply(this,arguments)}function te(){Vt.apply(this,arguments),this._timer=null,this._input=null}function ee(){Jt.apply(this,arguments)}function ne(){Jt.apply(this,arguments)}function ie(){Vt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function oe(t,e){return(e=e||{}).recognizers=w(e.recognizers,oe.defaults.preset),new re(t,e)}Vt.prototype={defaults:{},set:function(t){return c(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(v(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Zt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return v(t,"dropRecognizeWith",this)?this:(t=Zt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(v(t,"requireFailure",this))return this;var e=this.requireFail;return-1===M(e,t=Zt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(v(t,"dropRequireFailure",this))return this;t=Zt(t,this);var e=M(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<Bt&&i(e.options.event+Ut(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=Bt&&i(e.options.event+Ut(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|Yt)))return!1;t++}return!0},recognize:function(t){var e=c({},t);if(!x(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(Wt|Ht|32)&&(this.state=Yt),this.state=this.process(e),this.state&(Ft|$t|Bt|Ht)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},E(Jt,Vt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(Ft|$t),o=this.attrTest(t);return i&&(n&$||!o)?e|Ht:i||o?n&F?e|Bt:e&Ft?e|$t:Ft:32}}),E(Kt,Jt,{defaults:{event:"pan",threshold:10,pointers:1,direction:J},getTouchAction:function(){var t=this.options.direction,e=[];return t&G&&e.push(Lt),t&Z&&e.push(zt),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,o=t.direction,r=t.deltaX,s=t.deltaY;return o&e.direction||(e.direction&G?(o=0===r?B:r<0?W:H,n=r!=this.pX,i=Math.abs(t.deltaX)):(o=0===s?B:s<0?V:U,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=o,n&&i>e.threshold&&o&e.direction},attrTest:function(t){return Jt.prototype.attrTest.call(this,t)&&(this.state&Ft||!(this.state&Ft)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Gt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),E(Qt,Jt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[qt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Ft)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),E(te,Vt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[jt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(F|$)&&!o)this.reset();else if(t.eventType&X)this.reset(),this._timer=m((function(){this.state=Wt,this.tryEmit()}),e.time,this);else if(t.eventType&F)return Wt;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Wt&&(t&&t.eventType&F?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}}),E(ee,Jt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[qt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Ft)}}),E(ne,Jt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:G|Z,pointers:1},getTouchAction:function(){return Kt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(G|Z)?e=t.overallVelocity:n&G?e=t.overallVelocityX:n&Z&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&d(e)>this.options.velocity&&t.eventType&F},emit:function(t){var e=Gt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),E(ie,Vt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Rt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,o=t.deltaTime<e.time;if(this.reset(),t.eventType&X&&0===this.count)return this.failTimeout();if(i&&o&&n){if(t.eventType!=F)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||st(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,s&&r?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=m((function(){this.state=Wt,this.tryEmit()}),e.interval,this),Ft):Wt}return 32},failTimeout:function(){return this._timer=m((function(){this.state=32}),this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Wt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),oe.VERSION="2.0.7",oe.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[ee,{enable:!1}],[Qt,{enable:!1},["rotate"]],[ne,{direction:G}],[Kt,{direction:G},["swipe"]],[ie],[ie,{event:"doubletap",taps:2},["tap"]],[te]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function re(t,e){var n;this.options=c({},oe.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(z?vt:L?wt:q?At:ht))(n,et),this.touchAction=new Xt(this,this.options.touchAction),se(this,!0),g(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function se(t,e){var n,i=t.element;i.style&&(g(t.options.cssProps,(function(o,r){n=_(i.style,r),e?(t.oldCssProps[n]=i.style[n],i.style[n]=o):i.style[n]=t.oldCssProps[n]||""})),e||(t.oldCssProps={}))}re.prototype={set:function(t){return c(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,o=e.curRecognizer;(!o||o&&o.state&Wt)&&(o=e.curRecognizer=null);for(var r=0;r<i.length;)n=i[r],2===e.stopped||o&&n!=o&&!n.canRecognizeWith(o)?n.reset():n.recognize(t),!o&&n.state&(Ft|$t|Bt)&&(o=e.curRecognizer=n),r++}},get:function(t){if(t instanceof Vt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(v(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(v(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=M(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return g(C(t),(function(t){n[t]=n[t]||[],n[t].push(e)})),this}},off:function(t,e){if(t!==a){var n=this.handlers;return g(C(t),(function(t){e?n[t]&&n[t].splice(M(n[t],e),1):delete n[t]})),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var n=r.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&se(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},c(oe,{INPUT_START:X,INPUT_MOVE:Y,INPUT_END:F,INPUT_CANCEL:$,STATE_POSSIBLE:Yt,STATE_BEGAN:Ft,STATE_CHANGED:$t,STATE_ENDED:Bt,STATE_RECOGNIZED:Wt,STATE_CANCELLED:Ht,STATE_FAILED:32,DIRECTION_NONE:B,DIRECTION_LEFT:W,DIRECTION_RIGHT:H,DIRECTION_UP:V,DIRECTION_DOWN:U,DIRECTION_HORIZONTAL:G,DIRECTION_VERTICAL:Z,DIRECTION_ALL:J,Manager:re,Input:tt,TouchAction:Xt,TouchInput:wt,MouseInput:ht,PointerEventInput:vt,TouchMouseInput:At,SingleTouchInput:Tt,Recognizer:Vt,AttrRecognizer:Jt,Tap:ie,Pan:Kt,Swipe:ne,Pinch:Qt,Rotate:ee,Press:te,on:S,off:I,each:g,merge:T,extend:b,assign:c,inherit:E,bindFn:k,prefixed:_}),(void 0!==o?o:"undefined"!=typeof self?self:{}).Hammer=oe,(i=function(){return oe}.call(e,n,e,t))===a||(t.exports=i)}(window,document)},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),r=function(t){return(new DOMParser).parseFromString(t,"text/html").querySelector("body").firstElementChild},s=function(){function t(){this.items=[{label:"左右スワイプ時にアニメーションするかどうか",name:"mtdColumnAnimation",type:"checkbox",default:"true"}]}return t.prototype.getString=function(t){return localStorage.getItem(t).toString()},t.prototype.getNumber=function(t){return parseFloat(localStorage.getItem(t))},t.prototype.getBoolean=function(t){return"true"===localStorage.getItem(t)},t.prototype.open=function(){this.$el.classList.add("is-open")},t.prototype.close=function(){this.save(),this.$el.classList.remove("is-open")},t.prototype.isOpen=function(){return this.$el.classList.contains("is-open")},t.prototype.save=function(){document.querySelectorAll(".mtdeck-config-input").forEach((function(t){"checkbox"===t.type?localStorage.setItem(t.name,""+t.checked):localStorage.setItem(t.name,t.value)}))},t.prototype.saveDefault=function(){null===localStorage.getItem(this.items[0].name)&&this.items.forEach((function(t){localStorage.setItem(t.name,t.default)}))},t.prototype.createBackButton=function(){var t=this,e=r('\n      <button class="mtdeck-config-back">保存</button>\n    ');e.addEventListener("click",(function(e){return t.close()})),this.$el.insertAdjacentElement("beforeend",e)},t.prototype.createForm=function(){var t=this;this.items.forEach((function(e){var n=r('\n        <input class="mtdeck-config-input" type="'+e.type+'" name="'+e.name+'"/>\n      ');"checkbox"===e.type?n.defaultChecked=t.getBoolean(e.name):n.defaultValue=t.getString(e.name),t.$el.insertAdjacentElement("beforeend",r('\n        <div class="mtdeck-config-item">\n          <p>'+e.label+"</p>\n          "+n.outerHTML+"  \n        </div>\n      "))}))},t.prototype.createSettingButton=function(){var t=this,e=document.querySelector(".js-app-settings"),n=e.cloneNode(!0);n.dataset.action="mtdeckConfig",n.dataset.title="MTDeck Config",n.classList.add("mtdeck-config-button"),n.querySelector(".app-nav-link-text").insertAdjacentText("afterbegin","MTD"),e.parentElement.insertAdjacentElement("afterbegin",r(n.outerHTML)),e.parentElement.firstChild.addEventListener("click",(function(e){return t.open()}))},t.prototype.createConfigBase=function(){this.$el=r('\n      <div class="mtdeck-config">\n        <h1 class="mtdeck-config-title">MTDeck 設定メニュー(仮)</h1>\n      </div>\n    '),document.body.appendChild(this.$el)},t.prototype.init=function(){this.saveDefault(),this.createConfigBase(),this.createForm(),this.createBackButton()},t}();(new(function(){function t(){this.config=new s,this.columnIndex=0,this.$columns=[]}return Object.defineProperty(t.prototype,"scrollOpt",{get:function(){return{behavior:this.config.getBoolean("mtdColumnAnimation")?"smooth":"auto",block:"center",inline:"nearest"}},enumerable:!0,configurable:!0}),t.prototype.ready=function(){var t=this,e=setInterval((function(){t.$drawerOpenButton=document.querySelector("button[data-drawer=compose]"),t.$drawerOpenButton&&(!function(t){document.querySelectorAll("#mtdeck-stylesheet").forEach((function(t){return t.remove()}));var e=document.createElement("style");e.id="mtdeck-stylesheet",e.appendChild(document.createTextNode(t)),document.head.appendChild(e)}("\n/* mtdeckに影響を受ける要素 */\nbody.mtdeck button[data-drawer=compose] {\n  z-index: 1;\n  position: fixed !important;\n  right: 20px;\n  bottom: 50px;\n  width: 4rem !important;\n  height: 4rem !important;\n  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.7));\n}\nbody.mtdeck div.app-content {\n  left: 0 !important;\n}\nbody.mtdeck div.app-columns-container {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\nbody.mtdeck section.column, body.mtdeck .js-modal-panel,\nbody.mtdeck .prf-header, body.mtdeck .prf-header-inner-overlay,\nbody.mtdeck .social-proof-container {\n  width: 100% !important;\n}\nbody.mtdeck .mdl, body.mtdeck .mdl section.column-temp {\n  width: 100% !important;\n  overflow-x: hidden !important;\n}\nbody.mtdeck .mdl-content {\n  overflow: scroll !important;\n}\nbody.mtdeck .med-tweet {\n  width: 100% !important;\n  left: 0 !important;\n}\nbody.mtdeck .mdl .mdl-dismiss {\n  right: 10px !important;\n}\nbody.mtdeck .js-modal-context:before {\n  height: 0 !important;\n}\nbody.mtdeck .old-composer-footer,\nbody.mtdeck .column-nav-flyout {\n  display: none;\n}\nbody.mtdeck .js-search-in-popover .popover {\n  width: 200px !important;\n}\nbody.mtdeck .js-mediaembed .js-media-native-video,\nbody.mtdeck .js-mediaembed .youtube-player {\n  width: 100% !important;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto !important;\n  z-index: 1;\n}\nbody.mtdeck .column-navigator {\n  top: 50px;\n}\n\n/* サイドバーを下へ */\nbody.mtdeck .js-int-scroller {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #1c2938;\n  overflow-x: auto;\n  white-space: nowrap;\n  padding-top: 10px\n}\nbody.mtdeck .js-int-scroller .column-nav-item {\n  height: 35px;\n}\nbody.mtdeck .js-int-scroller .column-nav-item .icon-medium {\n  font-size: 20px;\n}\nbody.mtdeck .js-int-scroller .column-nav-item .js-header-action {\n  height: 35px;\n  padding-left: 12px !important;\n  padding-right: 12px !important;\n}\nbody.mtdeck .hide-detail-view-inline .js-int-scroller {\n  display: none;\n}\nbody.mtdeck .column-nav-item {\n  display: inline-block;\n}\nbody.mtdeck section.column .column-content,\nbody.mtdeck section.column .tweet-detail-reply {\n  padding-bottom: 50px;\n}\n\n/* サイドバーの開閉 */\nbody.mtdeck-close header.app-header {\n  position: relative;\n  top: -50px\n}\nbody.mtdeck-close div.app-columns-container {\n  left: 0px !important;\n}\n\n/* ツイートドロワーの開閉 */\nbody.mtdeck div.app-content.is-open {\n  margin-right: 0 !important;\n  transform: translateX(100%) !important;\n}\nbody.mtdeck div.drawer[data-drawer=compose] {\n  left: -100%;\n  width: 100%;\n}\nbody.mtdeck button.js-hide-drawer {\n  display: none !important;\n}\n\n/* コンフィグ */\n.mtdeck-config {\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 201;\n  background-color: #1c2938;\n  padding: 20px;\n}\n.mtdeck-config.is-open {\n  display: block;\n}\n.mtdeck-config-button {\n  color: blueviolet !important;\n}\n.mtdeck-config-title {\n  margin-bottom: 20px !important;\n}\n.mtdeck-config-back {\n  margin-top: 20px !important;\n}\n"),t.init(),t.config.init(),clearInterval(e))}),100)},t.prototype.update=function(){var t=this;this.$columns=[],document.querySelectorAll("section.column").forEach((function(e){t.$columns.push(e)})),this.fixColumnState()},t.prototype.fixColumnState=function(){this.columnIndex=0;for(var t=this.$columns[0],e=1;e<this.$columns.length;e++)Math.pow(this.$columns[e].getBoundingClientRect().left,2)<Math.pow(t.getBoundingClientRect().left,2)&&(t=this.$columns[e],this.columnIndex=e);t.scrollIntoView()},t.prototype.init=function(){var t=this;document.body.classList.add("mtdeck"),document.body.classList.add("mtdeck-close"),this.update();var e=document.querySelector("div.app-columns-container"),n=new o.a.Manager(e);n.add(new o.a.Tap),n.add(new o.a.Swipe({direction:o.a.DIRECTION_HORIZONTAL})),n.on("tap",(function(e){t.update(),t.closeMenu()})),n.on("swipe",(function(e){e.deltaX>0?t.backColumn():t.pushColumn()})),history.pushState(null,null,null),window.addEventListener("popstate",(function(e){return t.back()})),this.$drawerOpenButton.addEventListener("click",(function(e){t.closeMenu()}))},Object.defineProperty(t.prototype,"hasDetail",{get:function(){return document.querySelectorAll(".js-column-state-detail-view").length>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasModal",{get:function(){return document.querySelectorAll(".js-dismiss").length>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasDrawerOpen",{get:function(){return document.querySelectorAll(".app-content.is-open").length>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasOptionsOpen",{get:function(){return document.querySelectorAll(".is-options-open").length>0},enumerable:!0,configurable:!0}),t.prototype.back=function(){this.hasDetail&&document.querySelectorAll(".js-column-back").forEach((function(t){t.click()}));this.hasModal&&document.querySelector(".js-dismiss").click();this.hasDrawerOpen&&document.querySelector(".js-drawer-close").click();this.hasOptionsOpen&&document.querySelectorAll(".is-options-open .js-action-header-button").forEach((function(t){t.click()}));this.hasMenuOpen&&this.closeMenu(),this.config.isOpen()&&this.config.close(),history.pushState(null,null,null)},t.prototype.pushColumn=function(){this.update(),this.closeMenu(),this.columnIndex<this.$columns.length-1&&(this.columnIndex++,this.$columns[this.columnIndex].scrollIntoView(this.scrollOpt))},t.prototype.backColumn=function(){this.update(),this.closeMenu(),0==this.columnIndex?this.openMenu():(this.columnIndex--,this.$columns[this.columnIndex].scrollIntoView(this.scrollOpt))},Object.defineProperty(t.prototype,"hasMenuOpen",{get:function(){return!document.body.classList.contains("mtdeck-close")},enumerable:!0,configurable:!0}),t.prototype.openMenu=function(){this.hasMenuOpen||document.body.classList.remove("mtdeck-close")},t.prototype.closeMenu=function(){this.hasMenuOpen&&document.body.classList.add("mtdeck-close")},t}())).ready()}]);