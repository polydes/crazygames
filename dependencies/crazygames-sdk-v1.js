!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t),i.d(t,"CrazyAdType",(function(){return s})),i.d(t,"CrazyEventType",(function(){return n}));const s={midgame:"midgame",rewarded:"rewarded"},n={adStarted:"adStarted",adFinished:"adFinished",adError:"adError",adblockDetectionExecuted:"adblockDetectionExecuted"};class r{static getInstance(){return this.instance||(this.instance=new r),this.instance}constructor(){this.initialized=!1,this.initializeReplied=!1,this.requestInProgress=!1,this.eventListeners={},this.queuedRequest=null,this.adblockDetectionExecuted=!1,this.hasAdblock=!1,this.receiveMessage=this.receiveMessage.bind(this),this.registerDefaultListeners()}init(){this.initialized||(this.initialized=!0,this.registerMessageListener(),this.postMessage("init",{version:"1.6.1",sdkType:"js"}))}addEventListener(e,t){if(!this.isValidAdEvent(e))return void console.error("[CrazySDK] Invalid Event",e);const i=this.eventListeners[e]||[];i.push(t),this.eventListeners[e]=i}removeEventListener(e,t){if(!this.isValidAdEvent(e))return void console.error("[CrazySDK] Invalid Event",e);const i=this.eventListeners[e]||[];this.eventListeners[e]=i.filter(e=>e!==t)}requestAd(e=s.midgame){this.ensureInit(),this.requestInProgress||(this.initializeReplied?(this.requestInProgress=!0,this.postMessage("requestAd",{adType:e})):this.queuedRequest=e)}inviteLink(e={}){this.ensureInit();let t="utm_source=invite";Object.keys(e).forEach(i=>{const s=`${i}=${e[i]}`;t=`${t}&${s}`});const i=this.gameLink||window.location.href,s=i.includes("?")?`${i}&${t}`:`${i}?${t}`;return this.postMessage("inviteUrl",{inviteUrl:s}),s}happytime(){this.ensureInit(),this.postMessage("happytime")}gameplayStart(){this.ensureInit(),this.postMessage("gameplayStart")}gameplayStop(){this.ensureInit(),this.postMessage("gameplayStop")}ensureInit(){this.initialized||this.init()}registerDefaultListeners(){this.addEventListener(n.adFinished,()=>{this.requestInProgress=!1}),this.addEventListener(n.adError,()=>{this.requestInProgress=!1}),this.addEventListener(n.adblockDetectionExecuted,e=>{this.adblockDetectionExecuted=!0;const{hasAdblock:t}=e;this.hasAdblock=!!t})}registerMessageListener(){window.addEventListener("message",this.receiveMessage,!1)}receiveMessage(e){const{type:t,data:i}=e.data;t&&("initialized"!==t?this.isValidAdEvent(t)&&this.callListeners(t,e.data):this.initializeReply(i))}initializeReply(e){this.initializeReplied||(this.initializeReplied=!0,e&&(this.gameLink=e.gameLink),this.queuedRequest&&(this.requestAd(this.queuedRequest),this.queuedRequest=null))}callListeners(e,t){(this.eventListeners[e]||[]).forEach(e=>e(t))}postMessage(e,t){this.getCrazySDKWindow().postMessage({type:e,data:t},"*")}getCrazySDKWindow(){return window.parent}isValidAdEvent(e){switch(e){case n.adStarted:case n.adFinished:case n.adError:case n.adblockDetectionExecuted:return!0;default:return!1}}}window.CrazyGames={CrazySDK:r,CrazyAdType:s,CrazyEventType:n},t.default=r}]);