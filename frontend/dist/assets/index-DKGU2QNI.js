(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var Lc={exports:{}},Ua={},Dc={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Sg(){if(Hp)return vt;Hp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(I,te,De){this.props=I,this.context=te,this.refs=w,this.updater=De||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,te){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,te,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=y.prototype;function P(I,te,De){this.props=I,this.context=te,this.refs=w,this.updater=De||S}var R=P.prototype=new v;R.constructor=P,E(R,y.prototype),R.isPureReactComponent=!0;var U=Array.isArray,V=Object.prototype.hasOwnProperty,D={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function X(I,te,De){var Fe,We={},ne=null,fe=null;if(te!=null)for(Fe in te.ref!==void 0&&(fe=te.ref),te.key!==void 0&&(ne=""+te.key),te)V.call(te,Fe)&&!O.hasOwnProperty(Fe)&&(We[Fe]=te[Fe]);var Me=arguments.length-2;if(Me===1)We.children=De;else if(1<Me){for(var Oe=Array(Me),ke=0;ke<Me;ke++)Oe[ke]=arguments[ke+2];We.children=Oe}if(I&&I.defaultProps)for(Fe in Me=I.defaultProps,Me)We[Fe]===void 0&&(We[Fe]=Me[Fe]);return{$$typeof:r,type:I,key:ne,ref:fe,props:We,_owner:D.current}}function C(I,te){return{$$typeof:r,type:I.type,key:te,ref:I.ref,props:I.props,_owner:I._owner}}function b(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function F(I){var te={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(De){return te[De]})}var Y=/\/+/g;function $(I,te){return typeof I=="object"&&I!==null&&I.key!=null?F(""+I.key):te.toString(36)}function ue(I,te,De,Fe,We){var ne=typeof I;(ne==="undefined"||ne==="boolean")&&(I=null);var fe=!1;if(I===null)fe=!0;else switch(ne){case"string":case"number":fe=!0;break;case"object":switch(I.$$typeof){case r:case e:fe=!0}}if(fe)return fe=I,We=We(fe),I=Fe===""?"."+$(fe,0):Fe,U(We)?(De="",I!=null&&(De=I.replace(Y,"$&/")+"/"),ue(We,te,De,"",function(ke){return ke})):We!=null&&(b(We)&&(We=C(We,De+(!We.key||fe&&fe.key===We.key?"":(""+We.key).replace(Y,"$&/")+"/")+I)),te.push(We)),1;if(fe=0,Fe=Fe===""?".":Fe+":",U(I))for(var Me=0;Me<I.length;Me++){ne=I[Me];var Oe=Fe+$(ne,Me);fe+=ue(ne,te,De,Oe,We)}else if(Oe=_(I),typeof Oe=="function")for(I=Oe.call(I),Me=0;!(ne=I.next()).done;)ne=ne.value,Oe=Fe+$(ne,Me++),fe+=ue(ne,te,De,Oe,We);else if(ne==="object")throw te=String(I),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return fe}function se(I,te,De){if(I==null)return I;var Fe=[],We=0;return ue(I,Fe,"","",function(ne){return te.call(De,ne,We++)}),Fe}function de(I){if(I._status===-1){var te=I._result;te=te(),te.then(function(De){(I._status===0||I._status===-1)&&(I._status=1,I._result=De)},function(De){(I._status===0||I._status===-1)&&(I._status=2,I._result=De)}),I._status===-1&&(I._status=0,I._result=te)}if(I._status===1)return I._result.default;throw I._result}var he={current:null},G={transition:null},re={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:G,ReactCurrentOwner:D};function ee(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:se,forEach:function(I,te,De){se(I,function(){te.apply(this,arguments)},De)},count:function(I){var te=0;return se(I,function(){te++}),te},toArray:function(I){return se(I,function(te){return te})||[]},only:function(I){if(!b(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},vt.Component=y,vt.Fragment=n,vt.Profiler=o,vt.PureComponent=P,vt.StrictMode=s,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,vt.act=ee,vt.cloneElement=function(I,te,De){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Fe=E({},I.props),We=I.key,ne=I.ref,fe=I._owner;if(te!=null){if(te.ref!==void 0&&(ne=te.ref,fe=D.current),te.key!==void 0&&(We=""+te.key),I.type&&I.type.defaultProps)var Me=I.type.defaultProps;for(Oe in te)V.call(te,Oe)&&!O.hasOwnProperty(Oe)&&(Fe[Oe]=te[Oe]===void 0&&Me!==void 0?Me[Oe]:te[Oe])}var Oe=arguments.length-2;if(Oe===1)Fe.children=De;else if(1<Oe){Me=Array(Oe);for(var ke=0;ke<Oe;ke++)Me[ke]=arguments[ke+2];Fe.children=Me}return{$$typeof:r,type:I.type,key:We,ref:ne,props:Fe,_owner:fe}},vt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},vt.createElement=X,vt.createFactory=function(I){var te=X.bind(null,I);return te.type=I,te},vt.createRef=function(){return{current:null}},vt.forwardRef=function(I){return{$$typeof:f,render:I}},vt.isValidElement=b,vt.lazy=function(I){return{$$typeof:x,_payload:{_status:-1,_result:I},_init:de}},vt.memo=function(I,te){return{$$typeof:p,type:I,compare:te===void 0?null:te}},vt.startTransition=function(I){var te=G.transition;G.transition={};try{I()}finally{G.transition=te}},vt.unstable_act=ee,vt.useCallback=function(I,te){return he.current.useCallback(I,te)},vt.useContext=function(I){return he.current.useContext(I)},vt.useDebugValue=function(){},vt.useDeferredValue=function(I){return he.current.useDeferredValue(I)},vt.useEffect=function(I,te){return he.current.useEffect(I,te)},vt.useId=function(){return he.current.useId()},vt.useImperativeHandle=function(I,te,De){return he.current.useImperativeHandle(I,te,De)},vt.useInsertionEffect=function(I,te){return he.current.useInsertionEffect(I,te)},vt.useLayoutEffect=function(I,te){return he.current.useLayoutEffect(I,te)},vt.useMemo=function(I,te){return he.current.useMemo(I,te)},vt.useReducer=function(I,te,De){return he.current.useReducer(I,te,De)},vt.useRef=function(I){return he.current.useRef(I)},vt.useState=function(I){return he.current.useState(I)},vt.useSyncExternalStore=function(I,te,De){return he.current.useSyncExternalStore(I,te,De)},vt.useTransition=function(){return he.current.useTransition()},vt.version="18.3.1",vt}var Gp;function ad(){return Gp||(Gp=1,Dc.exports=Sg()),Dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Mg(){if(Wp)return Ua;Wp=1;var r=ad(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var x,g={},_=null,S=null;p!==void 0&&(_=""+p),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(x in h)s.call(h,x)&&!l.hasOwnProperty(x)&&(g[x]=h[x]);if(f&&f.defaultProps)for(x in h=f.defaultProps,h)g[x]===void 0&&(g[x]=h[x]);return{$$typeof:e,type:f,key:_,ref:S,props:g,_owner:o.current}}return Ua.Fragment=n,Ua.jsx=c,Ua.jsxs=c,Ua}var Xp;function Eg(){return Xp||(Xp=1,Lc.exports=Mg()),Lc.exports}var H=Eg(),oe=ad(),dl={},Nc={exports:{}},Ln={},Uc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Tg(){return jp||(jp=1,(function(r){function e(G,re){var ee=G.length;G.push(re);e:for(;0<ee;){var I=ee-1>>>1,te=G[I];if(0<o(te,re))G[I]=re,G[ee]=te,ee=I;else break e}}function n(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var re=G[0],ee=G.pop();if(ee!==re){G[0]=ee;e:for(var I=0,te=G.length,De=te>>>1;I<De;){var Fe=2*(I+1)-1,We=G[Fe],ne=Fe+1,fe=G[ne];if(0>o(We,ee))ne<te&&0>o(fe,We)?(G[I]=fe,G[ne]=ee,I=ne):(G[I]=We,G[Fe]=ee,I=Fe);else if(ne<te&&0>o(fe,ee))G[I]=fe,G[ne]=ee,I=ne;else break e}}return re}function o(G,re){var ee=G.sortIndex-re.sortIndex;return ee!==0?ee:G.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],x=1,g=null,_=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(G){for(var re=n(p);re!==null;){if(re.callback===null)s(p);else if(re.startTime<=G)s(p),re.sortIndex=re.expirationTime,e(h,re);else break;re=n(p)}}function U(G){if(w=!1,R(G),!E)if(n(h)!==null)E=!0,de(V);else{var re=n(p);re!==null&&he(U,re.startTime-G)}}function V(G,re){E=!1,w&&(w=!1,v(X),X=-1),S=!0;var ee=_;try{for(R(re),g=n(h);g!==null&&(!(g.expirationTime>re)||G&&!F());){var I=g.callback;if(typeof I=="function"){g.callback=null,_=g.priorityLevel;var te=I(g.expirationTime<=re);re=r.unstable_now(),typeof te=="function"?g.callback=te:g===n(h)&&s(h),R(re)}else s(h);g=n(h)}if(g!==null)var De=!0;else{var Fe=n(p);Fe!==null&&he(U,Fe.startTime-re),De=!1}return De}finally{g=null,_=ee,S=!1}}var D=!1,O=null,X=-1,C=5,b=-1;function F(){return!(r.unstable_now()-b<C)}function Y(){if(O!==null){var G=r.unstable_now();b=G;var re=!0;try{re=O(!0,G)}finally{re?$():(D=!1,O=null)}}else D=!1}var $;if(typeof P=="function")$=function(){P(Y)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,se=ue.port2;ue.port1.onmessage=Y,$=function(){se.postMessage(null)}}else $=function(){y(Y,0)};function de(G){O=G,D||(D=!0,$())}function he(G,re){X=y(function(){G(r.unstable_now())},re)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,de(V))},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return n(h)},r.unstable_next=function(G){switch(_){case 1:case 2:case 3:var re=3;break;default:re=_}var ee=_;_=re;try{return G()}finally{_=ee}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(G,re){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ee=_;_=G;try{return re()}finally{_=ee}},r.unstable_scheduleCallback=function(G,re,ee){var I=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?I+ee:I):ee=I,G){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ee+te,G={id:x++,callback:re,priorityLevel:G,startTime:ee,expirationTime:te,sortIndex:-1},ee>I?(G.sortIndex=ee,e(p,G),n(h)===null&&G===n(p)&&(w?(v(X),X=-1):w=!0,he(U,ee-I))):(G.sortIndex=te,e(h,G),E||S||(E=!0,de(V))),G},r.unstable_shouldYield=F,r.unstable_wrapCallback=function(G){var re=_;return function(){var ee=_;_=re;try{return G.apply(this,arguments)}finally{_=ee}}}})(Ic)),Ic}var qp;function wg(){return qp||(qp=1,Uc.exports=Tg()),Uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function bg(){if(Yp)return Ln;Yp=1;var r=ad(),e=wg();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(o[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},g={};function _(t){return h.call(g,t)?!0:h.call(x,t)?!1:p.test(t)?g[t]=!0:(x[t]=!0,!1)}function S(t,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,u){if(i===null||typeof i>"u"||S(t,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,a,u,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function P(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,P);y[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,P);y[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,P);y[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,i,a,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,u)&&(a=null),u||d===null?_(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?t.setAttributeNS(u,i,a):t.setAttribute(i,a))))}var U=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),D=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),F=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),G=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,I;function te(t){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var De=!1;function Fe(t,i){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var u=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){u=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){u=ie}t()}}catch(ie){if(ie&&u&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),m=u.stack.split(`
`),M=d.length-1,N=m.length-1;1<=M&&0<=N&&d[M]!==m[N];)N--;for(;1<=M&&0<=N;M--,N--)if(d[M]!==m[N]){if(M!==1||N!==1)do if(M--,N--,0>N||d[M]!==m[N]){var z=`
`+d[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=N);break}}}finally{De=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?te(t):""}function We(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=Fe(t.type,!1),t;case 11:return t=Fe(t.type.render,!1),t;case 1:return t=Fe(t.type,!0),t;default:return""}}function ne(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case D:return"Portal";case C:return"Profiler";case X:return"StrictMode";case $:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F:return(t.displayName||"Context")+".Consumer";case b:return(t._context.displayName||"Context")+".Provider";case Y:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case se:return i=t.displayName||null,i!==null?i:ne(t.type)||"Memo";case de:i=t._payload,t=t._init;try{return ne(t(i))}catch{}}return null}function fe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ke(t){var i=Oe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ht(t){t._valueTracker||(t._valueTracker=ke(t))}function $t(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return t&&(u=Oe(t)?t.checked?"true":"false":t.value),t=u,t!==a?(i.setValue(t),!0):!1}function ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lt(t,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function k(t,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),t._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function gt(t,i){i=i.checked,i!=null&&R(t,"checked",i,!1)}function mt(t,i){gt(t,i);var a=Me(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ze(t,i.type,a):i.hasOwnProperty("defaultValue")&&ze(t,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ct(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function ze(t,i,a){(i!=="number"||ft(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Rt=Array.isArray;function qe(t,i,a,u){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&u&&(t[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ot(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function L(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Rt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Me(a)}}function T(t,i){var a=Me(i.value),u=Me(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),u!=null&&(t.defaultValue=""+u)}function Q(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function pe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?pe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var le,$e=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,u,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(le=le||document.createElement("div"),le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=le.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ce(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(Ze).forEach(function(t){Ye.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ze[i]=Ze[t]})});function _e(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ze.hasOwnProperty(t)&&Ze[t]?(""+i).trim():i+"px"}function Ae(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=_e(a,i[a],u);a==="float"&&(a="cssFloat"),u?t.setProperty(a,d):t[a]=d}}var rt=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(t,i){if(i){if(rt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ne(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function B(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,Te=null,we=null;function Se(t){if(t=_a(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ao(i),Re(t.stateNode,t.type,i))}}function me(t){Te?we?we.push(t):we=[t]:Te=t}function Ve(){if(Te){var t=Te,i=we;if(we=Te=null,Se(t),i)for(t=0;t<i.length;t++)Se(i[t])}}function lt(t,i){return t(i)}function Dt(){}var Et=!1;function Un(t,i,a){if(Et)return t(i,a);Et=!0;try{return lt(t,i,a)}finally{Et=!1,(Te!==null||we!==null)&&(Dt(),Ve())}}function cn(t,i){var a=t.stateNode;if(a===null)return null;var u=Ao(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var ta=!1;if(f)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){ta=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{ta=!1}function ro(t,i,a,u,d,m,M,N,z){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(a,ie)}catch(ve){this.onError(ve)}}var In=!1,Zi=null,Lr=!1,is=null,rs={onError:function(t){In=!0,Zi=t}};function so(t,i,a,u,d,m,M,N,z){In=!1,Zi=null,ro.apply(rs,arguments)}function ss(t,i,a,u,d,m,M,N,z){if(so.apply(this,arguments),In){if(In){var ie=Zi;In=!1,Zi=null}else throw Error(n(198));Lr||(Lr=!0,is=ie)}}function fi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function na(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ao(t){if(fi(t)!==t)throw Error(n(188))}function eu(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,u=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return ao(d),t;if(m===u)return ao(d),i;m=m.sibling}throw Error(n(188))}if(a.return!==u.return)a=d,u=m;else{for(var M=!1,N=d.child;N;){if(N===a){M=!0,a=d,u=m;break}if(N===u){M=!0,u=d,a=m;break}N=N.sibling}if(!M){for(N=m.child;N;){if(N===a){M=!0,a=m,u=d;break}if(N===u){M=!0,u=m,a=d;break}N=N.sibling}if(!M)throw Error(n(189))}}if(a.alternate!==u)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function oo(t){return t=eu(t),t!==null?lo(t):null}function lo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=lo(t);if(i!==null)return i;t=t.sibling}return null}var uo=e.unstable_scheduleCallback,co=e.unstable_cancelCallback,A=e.unstable_shouldYield,j=e.unstable_requestPaint,Z=e.unstable_now,ae=e.unstable_getCurrentPriorityLevel,q=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Pe=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,Ie=e.unstable_IdlePriority,tt=null,Ke=null;function Je(t){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(tt,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:zt,At=Math.log,Bt=Math.LN2;function zt(t){return t>>>=0,t===0?32:31-(At(t)/Bt|0)|0}var Tt=64,Qe=4194304;function Pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _t(t,i){var a=t.pendingLanes;if(a===0)return 0;var u=0,d=t.suspendedLanes,m=t.pingedLanes,M=a&268435455;if(M!==0){var N=M&~d;N!==0?u=Pt(N):(m&=M,m!==0&&(u=Pt(m)))}else M=a&~d,M!==0?u=Pt(M):m!==0&&(u=Pt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)a=31-at(i),d=1<<a,u|=t[a],i&=~d;return u}function yn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qi(t,i){for(var a=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes;0<m;){var M=31-at(m),N=1<<M,z=d[M];z===-1?((N&a)===0||(N&u)!==0)&&(d[M]=yn(N,i)):z<=i&&(t.expiredLanes|=N),m&=~N}}function fn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ji(){var t=Tt;return Tt<<=1,(Tt&4194240)===0&&(Tt=64),t}function It(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Kt(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-at(i),t[i]=a}function wn(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-at(a),m=1<<d;i[d]=0,u[d]=-1,t[d]=-1,a&=~m}}function Jt(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var u=31-at(a),d=1<<u;d&i|t[u]&i&&(t[u]|=i),a&=~d}}var ct=0;function as(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var di,tu,Md,Ed,Td,nu=!1,fo=[],er=null,tr=null,nr=null,ia=new Map,ra=new Map,ir=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wd(t,i){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":ia.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(i.pointerId)}}function sa(t,i,a,u,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=_a(i),i!==null&&tu(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function W0(t,i,a,u,d){switch(i){case"focusin":return er=sa(er,t,i,a,u,d),!0;case"dragenter":return tr=sa(tr,t,i,a,u,d),!0;case"mouseover":return nr=sa(nr,t,i,a,u,d),!0;case"pointerover":var m=d.pointerId;return ia.set(m,sa(ia.get(m)||null,t,i,a,u,d)),!0;case"gotpointercapture":return m=d.pointerId,ra.set(m,sa(ra.get(m)||null,t,i,a,u,d)),!0}return!1}function bd(t){var i=Dr(t.target);if(i!==null){var a=fi(i);if(a!==null){if(i=a.tag,i===13){if(i=na(a),i!==null){t.blockedOn=i,Td(t.priority,function(){Md(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ho(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=ru(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var u=new a.constructor(a.type,a);st=u,a.target.dispatchEvent(u),st=null}else return i=_a(a),i!==null&&tu(i),t.blockedOn=a,!1;i.shift()}return!0}function Ad(t,i,a){ho(t)&&a.delete(i)}function X0(){nu=!1,er!==null&&ho(er)&&(er=null),tr!==null&&ho(tr)&&(tr=null),nr!==null&&ho(nr)&&(nr=null),ia.forEach(Ad),ra.forEach(Ad)}function aa(t,i){t.blockedOn===i&&(t.blockedOn=null,nu||(nu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,X0)))}function oa(t){function i(d){return aa(d,t)}if(0<fo.length){aa(fo[0],t);for(var a=1;a<fo.length;a++){var u=fo[a];u.blockedOn===t&&(u.blockedOn=null)}}for(er!==null&&aa(er,t),tr!==null&&aa(tr,t),nr!==null&&aa(nr,t),ia.forEach(i),ra.forEach(i),a=0;a<ir.length;a++)u=ir[a],u.blockedOn===t&&(u.blockedOn=null);for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)bd(a),a.blockedOn===null&&ir.shift()}var os=U.ReactCurrentBatchConfig,po=!0;function j0(t,i,a,u){var d=ct,m=os.transition;os.transition=null;try{ct=1,iu(t,i,a,u)}finally{ct=d,os.transition=m}}function q0(t,i,a,u){var d=ct,m=os.transition;os.transition=null;try{ct=4,iu(t,i,a,u)}finally{ct=d,os.transition=m}}function iu(t,i,a,u){if(po){var d=ru(t,i,a,u);if(d===null)Su(t,i,u,mo,a),wd(t,u);else if(W0(d,t,i,a,u))u.stopPropagation();else if(wd(t,u),i&4&&-1<G0.indexOf(t)){for(;d!==null;){var m=_a(d);if(m!==null&&di(m),m=ru(t,i,a,u),m===null&&Su(t,i,u,mo,a),m===d)break;d=m}d!==null&&u.stopPropagation()}else Su(t,i,u,null,a)}}var mo=null;function ru(t,i,a,u){if(mo=null,t=B(u),t=Dr(t),t!==null)if(i=fi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=na(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return mo=t,null}function Cd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ae()){case q:return 1;case be:return 4;case Pe:case Ge:return 16;case Ie:return 536870912;default:return 16}default:return 16}}var rr=null,su=null,xo=null;function Rd(){if(xo)return xo;var t,i=su,a=i.length,u,d="value"in rr?rr.value:rr.textContent,m=d.length;for(t=0;t<a&&i[t]===d[t];t++);var M=a-t;for(u=1;u<=M&&i[a-u]===d[m-u];u++);return xo=d.slice(t,1<u?1-u:void 0)}function go(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function vo(){return!0}function Pd(){return!1}function Fn(t){function i(a,u,d,m,M){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(a=t[N],this[N]=a?a(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?vo:Pd,this.isPropagationStopped=Pd,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=Fn(ls),la=ee({},ls,{view:0,detail:0}),Y0=Fn(la),ou,lu,ua,_o=ee({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ua&&(ua&&t.type==="mousemove"?(ou=t.screenX-ua.screenX,lu=t.screenY-ua.screenY):lu=ou=0,ua=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),Ld=Fn(_o),$0=ee({},_o,{dataTransfer:0}),K0=Fn($0),Z0=ee({},la,{relatedTarget:0}),uu=Fn(Z0),Q0=ee({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=Fn(Q0),ex=ee({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tx=Fn(ex),nx=ee({},ls,{data:0}),Dd=Fn(nx),ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=sx[t])?!!i[t]:!1}function cu(){return ax}var ox=ee({},la,{key:function(t){if(t.key){var i=ix[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(t){return t.type==="keypress"?go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lx=Fn(ox),ux=ee({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Fn(ux),cx=ee({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),fx=Fn(cx),dx=ee({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=Fn(dx),px=ee({},_o,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mx=Fn(px),xx=[9,13,27,32],fu=f&&"CompositionEvent"in window,ca=null;f&&"documentMode"in document&&(ca=document.documentMode);var gx=f&&"TextEvent"in window&&!ca,Ud=f&&(!fu||ca&&8<ca&&11>=ca),Id=" ",Fd=!1;function Od(t,i){switch(t){case"keyup":return xx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function vx(t,i){switch(t){case"compositionend":return kd(i);case"keypress":return i.which!==32?null:(Fd=!0,Id);case"textInput":return t=i.data,t===Id&&Fd?null:t;default:return null}}function _x(t,i){if(us)return t==="compositionend"||!fu&&Od(t,i)?(t=Rd(),xo=su=rr=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ud&&i.locale!=="ko"?null:i.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!yx[t.type]:i==="textarea"}function zd(t,i,a,u){me(u),i=To(i,"onChange"),0<i.length&&(a=new au("onChange","change",null,a,u),t.push({event:a,listeners:i}))}var fa=null,da=null;function Sx(t){rh(t,0)}function yo(t){var i=ps(t);if($t(i))return t}function Mx(t,i){if(t==="change")return i}var Vd=!1;if(f){var du;if(f){var hu="oninput"in document;if(!hu){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),hu=typeof Hd.oninput=="function"}du=hu}else du=!1;Vd=du&&(!document.documentMode||9<document.documentMode)}function Gd(){fa&&(fa.detachEvent("onpropertychange",Wd),da=fa=null)}function Wd(t){if(t.propertyName==="value"&&yo(da)){var i=[];zd(i,da,t,B(t)),Un(Sx,i)}}function Ex(t,i,a){t==="focusin"?(Gd(),fa=i,da=a,fa.attachEvent("onpropertychange",Wd)):t==="focusout"&&Gd()}function Tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yo(da)}function wx(t,i){if(t==="click")return yo(i)}function bx(t,i){if(t==="input"||t==="change")return yo(i)}function Ax(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:Ax;function ha(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!Jn(t[d],i[d]))return!1}return!0}function Xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jd(t,i){var a=Xd(t);t=0;for(var u;a;){if(a.nodeType===3){if(u=t+a.textContent.length,t<=i&&u>=i)return{node:a,offset:i-t};t=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xd(a)}}function qd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?qd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Yd(){for(var t=window,i=ft();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ft(t.document)}return i}function pu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Cx(t){var i=Yd(),a=t.focusedElem,u=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&qd(a.ownerDocument.documentElement,a)){if(u!==null&&pu(a)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!t.extend&&m>u&&(d=u,u=m,m=d),d=jd(a,m);var M=jd(a,u);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),m>u?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Rx=f&&"documentMode"in document&&11>=document.documentMode,cs=null,mu=null,pa=null,xu=!1;function $d(t,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||cs==null||cs!==ft(u)||(u=cs,"selectionStart"in u&&pu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),pa&&ha(pa,u)||(pa=u,u=To(mu,"onSelect"),0<u.length&&(i=new au("onSelect","select",null,i,a),t.push({event:i,listeners:u}),i.target=cs)))}function So(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var fs={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},gu={},Kd={};f&&(Kd=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Mo(t){if(gu[t])return gu[t];if(!fs[t])return t;var i=fs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Kd)return gu[t]=i[a];return t}var Zd=Mo("animationend"),Qd=Mo("animationiteration"),Jd=Mo("animationstart"),eh=Mo("transitionend"),th=new Map,nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,i){th.set(t,i),l(i,[t])}for(var vu=0;vu<nh.length;vu++){var _u=nh[vu],Px=_u.toLowerCase(),Lx=_u[0].toUpperCase()+_u.slice(1);sr(Px,"on"+Lx)}sr(Zd,"onAnimationEnd"),sr(Qd,"onAnimationIteration"),sr(Jd,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(eh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function ih(t,i,a){var u=t.type||"unknown-event";t.currentTarget=a,ss(u,i,void 0,t),t.currentTarget=null}function rh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var u=t[a],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var N=u[M],z=N.instance,ie=N.currentTarget;if(N=N.listener,z!==m&&d.isPropagationStopped())break e;ih(d,N,ie),m=z}else for(M=0;M<u.length;M++){if(N=u[M],z=N.instance,ie=N.currentTarget,N=N.listener,z!==m&&d.isPropagationStopped())break e;ih(d,N,ie),m=z}}}if(Lr)throw t=is,Lr=!1,is=null,t}function Ot(t,i){var a=i[Au];a===void 0&&(a=i[Au]=new Set);var u=t+"__bubble";a.has(u)||(sh(i,t,2,!1),a.add(u))}function yu(t,i,a){var u=0;i&&(u|=4),sh(a,t,u,i)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[Eo]){t[Eo]=!0,s.forEach(function(a){a!=="selectionchange"&&(Dx.has(a)||yu(a,!1,t),yu(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Eo]||(i[Eo]=!0,yu("selectionchange",!1,i))}}function sh(t,i,a,u){switch(Cd(i)){case 1:var d=j0;break;case 4:d=q0;break;default:d=iu}a=d.bind(null,i,a,t),d=void 0,!ta||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function Su(t,i,a,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var N=u.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;M=M.return}for(;N!==null;){if(M=Dr(N),M===null)return;if(z=M.tag,z===5||z===6){u=m=M;continue e}N=N.parentNode}}u=u.return}Un(function(){var ie=m,ve=B(a),ye=[];e:{var ge=th.get(t);if(ge!==void 0){var Ue=au,He=t;switch(t){case"keypress":if(go(a)===0)break e;case"keydown":case"keyup":Ue=lx;break;case"focusin":He="focus",Ue=uu;break;case"focusout":He="blur",Ue=uu;break;case"beforeblur":case"afterblur":Ue=uu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=K0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=fx;break;case Zd:case Qd:case Jd:Ue=J0;break;case eh:Ue=hx;break;case"scroll":Ue=Y0;break;case"wheel":Ue=mx;break;case"copy":case"cut":case"paste":Ue=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Nd}var Xe=(i&4)!==0,jt=!Xe&&t==="scroll",K=Xe?ge!==null?ge+"Capture":null:ge;Xe=[];for(var W=ie,J;W!==null;){J=W;var Ee=J.stateNode;if(J.tag===5&&Ee!==null&&(J=Ee,K!==null&&(Ee=cn(W,K),Ee!=null&&Xe.push(ga(W,Ee,J)))),jt)break;W=W.return}0<Xe.length&&(ge=new Ue(ge,He,null,a,ve),ye.push({event:ge,listeners:Xe}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",ge&&a!==st&&(He=a.relatedTarget||a.fromElement)&&(Dr(He)||He[Ei]))break e;if((Ue||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ue?(He=a.relatedTarget||a.toElement,Ue=ie,He=He?Dr(He):null,He!==null&&(jt=fi(He),He!==jt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=ie),Ue!==He)){if(Xe=Ld,Ee="onMouseLeave",K="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Xe=Nd,Ee="onPointerLeave",K="onPointerEnter",W="pointer"),jt=Ue==null?ge:ps(Ue),J=He==null?ge:ps(He),ge=new Xe(Ee,W+"leave",Ue,a,ve),ge.target=jt,ge.relatedTarget=J,Ee=null,Dr(ve)===ie&&(Xe=new Xe(K,W+"enter",He,a,ve),Xe.target=J,Xe.relatedTarget=jt,Ee=Xe),jt=Ee,Ue&&He)t:{for(Xe=Ue,K=He,W=0,J=Xe;J;J=ds(J))W++;for(J=0,Ee=K;Ee;Ee=ds(Ee))J++;for(;0<W-J;)Xe=ds(Xe),W--;for(;0<J-W;)K=ds(K),J--;for(;W--;){if(Xe===K||K!==null&&Xe===K.alternate)break t;Xe=ds(Xe),K=ds(K)}Xe=null}else Xe=null;Ue!==null&&ah(ye,ge,Ue,Xe,!1),He!==null&&jt!==null&&ah(ye,jt,He,Xe,!0)}}e:{if(ge=ie?ps(ie):window,Ue=ge.nodeName&&ge.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ge.type==="file")var je=Mx;else if(Bd(ge))if(Vd)je=bx;else{je=Tx;var nt=Ex}else(Ue=ge.nodeName)&&Ue.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=wx);if(je&&(je=je(t,ie))){zd(ye,je,a,ve);break e}nt&&nt(t,ge,ie),t==="focusout"&&(nt=ge._wrapperState)&&nt.controlled&&ge.type==="number"&&ze(ge,"number",ge.value)}switch(nt=ie?ps(ie):window,t){case"focusin":(Bd(nt)||nt.contentEditable==="true")&&(cs=nt,mu=ie,pa=null);break;case"focusout":pa=mu=cs=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,$d(ye,a,ve);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":$d(ye,a,ve)}var it;if(fu)e:{switch(t){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else us?Od(t,a)&&(ut="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(Ud&&a.locale!=="ko"&&(us||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&us&&(it=Rd()):(rr=ve,su="value"in rr?rr.value:rr.textContent,us=!0)),nt=To(ie,ut),0<nt.length&&(ut=new Dd(ut,t,null,a,ve),ye.push({event:ut,listeners:nt}),it?ut.data=it:(it=kd(a),it!==null&&(ut.data=it)))),(it=gx?vx(t,a):_x(t,a))&&(ie=To(ie,"onBeforeInput"),0<ie.length&&(ve=new Dd("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:ie}),ve.data=it))}rh(ye,i)})}function ga(t,i,a){return{instance:t,listener:i,currentTarget:a}}function To(t,i){for(var a=i+"Capture",u=[];t!==null;){var d=t,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=cn(t,a),m!=null&&u.unshift(ga(t,m,d)),m=cn(t,i),m!=null&&u.push(ga(t,m,d))),t=t.return}return u}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ah(t,i,a,u,d){for(var m=i._reactName,M=[];a!==null&&a!==u;){var N=a,z=N.alternate,ie=N.stateNode;if(z!==null&&z===u)break;N.tag===5&&ie!==null&&(N=ie,d?(z=cn(a,m),z!=null&&M.unshift(ga(a,z,N))):d||(z=cn(a,m),z!=null&&M.push(ga(a,z,N)))),a=a.return}M.length!==0&&t.push({event:i,listeners:M})}var Nx=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function oh(t){return(typeof t=="string"?t:""+t).replace(Nx,`
`).replace(Ux,"")}function wo(t,i,a){if(i=oh(i),oh(t)!==i&&a)throw Error(n(425))}function bo(){}var Mu=null,Eu=null;function Tu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wu=typeof setTimeout=="function"?setTimeout:void 0,Ix=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(t){return lh.resolve(null).then(t).catch(Ox)}:wu;function Ox(t){setTimeout(function(){throw t})}function bu(t,i){var a=i,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){t.removeChild(d),oa(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);oa(i)}function ar(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var hs=Math.random().toString(36).slice(2),hi="__reactFiber$"+hs,va="__reactProps$"+hs,Ei="__reactContainer$"+hs,Au="__reactEvents$"+hs,kx="__reactListeners$"+hs,Bx="__reactHandles$"+hs;function Dr(t){var i=t[hi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ei]||a[hi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=uh(t);t!==null;){if(a=t[hi])return a;t=uh(t)}return i}t=a,a=t.parentNode}return null}function _a(t){return t=t[hi]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ao(t){return t[va]||null}var Cu=[],ms=-1;function or(t){return{current:t}}function kt(t){0>ms||(t.current=Cu[ms],Cu[ms]=null,ms--)}function Ft(t,i){ms++,Cu[ms]=t.current,t.current=i}var lr={},pn=or(lr),bn=or(!1),Nr=lr;function xs(t,i){var a=t.type.contextTypes;if(!a)return lr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function An(t){return t=t.childContextTypes,t!=null}function Co(){kt(bn),kt(pn)}function ch(t,i,a){if(pn.current!==lr)throw Error(n(168));Ft(pn,i),Ft(bn,a)}function fh(t,i,a){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,fe(t)||"Unknown",d));return ee({},a,u)}function Ro(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Nr=pn.current,Ft(pn,t),Ft(bn,bn.current),!0}function dh(t,i,a){var u=t.stateNode;if(!u)throw Error(n(169));a?(t=fh(t,i,Nr),u.__reactInternalMemoizedMergedChildContext=t,kt(bn),kt(pn),Ft(pn,t)):kt(bn),Ft(bn,a)}var Ti=null,Po=!1,Ru=!1;function hh(t){Ti===null?Ti=[t]:Ti.push(t)}function zx(t){Po=!0,hh(t)}function ur(){if(!Ru&&Ti!==null){Ru=!0;var t=0,i=ct;try{var a=Ti;for(ct=1;t<a.length;t++){var u=a[t];do u=u(!0);while(u!==null)}Ti=null,Po=!1}catch(d){throw Ti!==null&&(Ti=Ti.slice(t+1)),uo(q,ur),d}finally{ct=i,Ru=!1}}return null}var gs=[],vs=0,Lo=null,Do=0,Xn=[],jn=0,Ur=null,wi=1,bi="";function Ir(t,i){gs[vs++]=Do,gs[vs++]=Lo,Lo=t,Do=i}function ph(t,i,a){Xn[jn++]=wi,Xn[jn++]=bi,Xn[jn++]=Ur,Ur=t;var u=wi;t=bi;var d=32-at(u)-1;u&=~(1<<d),a+=1;var m=32-at(i)+d;if(30<m){var M=d-d%5;m=(u&(1<<M)-1).toString(32),u>>=M,d-=M,wi=1<<32-at(i)+d|a<<d|u,bi=m+t}else wi=1<<m|a<<d|u,bi=t}function Pu(t){t.return!==null&&(Ir(t,1),ph(t,1,0))}function Lu(t){for(;t===Lo;)Lo=gs[--vs],gs[vs]=null,Do=gs[--vs],gs[vs]=null;for(;t===Ur;)Ur=Xn[--jn],Xn[jn]=null,bi=Xn[--jn],Xn[jn]=null,wi=Xn[--jn],Xn[jn]=null}var On=null,kn=null,Vt=!1,ei=null;function mh(t,i){var a=Kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function xh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,On=t,kn=ar(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,On=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ur!==null?{id:wi,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,On=t,kn=null,!0):!1;default:return!1}}function Du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nu(t){if(Vt){var i=kn;if(i){var a=i;if(!xh(t,i)){if(Du(t))throw Error(n(418));i=ar(a.nextSibling);var u=On;i&&xh(t,i)?mh(u,a):(t.flags=t.flags&-4097|2,Vt=!1,On=t)}}else{if(Du(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,On=t}}}function gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function No(t){if(t!==On)return!1;if(!Vt)return gh(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Tu(t.type,t.memoizedProps)),i&&(i=kn)){if(Du(t))throw vh(),Error(n(418));for(;i;)mh(t,i),i=ar(i.nextSibling)}if(gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){kn=ar(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=On?ar(t.stateNode.nextSibling):null;return!0}function vh(){for(var t=kn;t;)t=ar(t.nextSibling)}function _s(){kn=On=null,Vt=!1}function Uu(t){ei===null?ei=[t]:ei.push(t)}var Vx=U.ReactCurrentBatchConfig;function ya(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var u=a.stateNode}if(!u)throw Error(n(147,t));var d=u,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var N=d.refs;M===null?delete N[m]:N[m]=M},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Uo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function _h(t){var i=t._init;return i(t._payload)}function yh(t){function i(K,W){if(t){var J=K.deletions;J===null?(K.deletions=[W],K.flags|=16):J.push(W)}}function a(K,W){if(!t)return null;for(;W!==null;)i(K,W),W=W.sibling;return null}function u(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function d(K,W){return K=gr(K,W),K.index=0,K.sibling=null,K}function m(K,W,J){return K.index=J,t?(J=K.alternate,J!==null?(J=J.index,J<W?(K.flags|=2,W):J):(K.flags|=2,W)):(K.flags|=1048576,W)}function M(K){return t&&K.alternate===null&&(K.flags|=2),K}function N(K,W,J,Ee){return W===null||W.tag!==6?(W=wc(J,K.mode,Ee),W.return=K,W):(W=d(W,J),W.return=K,W)}function z(K,W,J,Ee){var je=J.type;return je===O?ve(K,W,J.props.children,Ee,J.key):W!==null&&(W.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===de&&_h(je)===W.type)?(Ee=d(W,J.props),Ee.ref=ya(K,W,J),Ee.return=K,Ee):(Ee=rl(J.type,J.key,J.props,null,K.mode,Ee),Ee.ref=ya(K,W,J),Ee.return=K,Ee)}function ie(K,W,J,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=bc(J,K.mode,Ee),W.return=K,W):(W=d(W,J.children||[]),W.return=K,W)}function ve(K,W,J,Ee,je){return W===null||W.tag!==7?(W=Gr(J,K.mode,Ee,je),W.return=K,W):(W=d(W,J),W.return=K,W)}function ye(K,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=wc(""+W,K.mode,J),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case V:return J=rl(W.type,W.key,W.props,null,K.mode,J),J.ref=ya(K,null,W),J.return=K,J;case D:return W=bc(W,K.mode,J),W.return=K,W;case de:var Ee=W._init;return ye(K,Ee(W._payload),J)}if(Rt(W)||re(W))return W=Gr(W,K.mode,J,null),W.return=K,W;Uo(K,W)}return null}function ge(K,W,J,Ee){var je=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return je!==null?null:N(K,W,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case V:return J.key===je?z(K,W,J,Ee):null;case D:return J.key===je?ie(K,W,J,Ee):null;case de:return je=J._init,ge(K,W,je(J._payload),Ee)}if(Rt(J)||re(J))return je!==null?null:ve(K,W,J,Ee,null);Uo(K,J)}return null}function Ue(K,W,J,Ee,je){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return K=K.get(J)||null,N(W,K,""+Ee,je);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return K=K.get(Ee.key===null?J:Ee.key)||null,z(W,K,Ee,je);case D:return K=K.get(Ee.key===null?J:Ee.key)||null,ie(W,K,Ee,je);case de:var nt=Ee._init;return Ue(K,W,J,nt(Ee._payload),je)}if(Rt(Ee)||re(Ee))return K=K.get(J)||null,ve(W,K,Ee,je,null);Uo(W,Ee)}return null}function He(K,W,J,Ee){for(var je=null,nt=null,it=W,ut=W=0,ln=null;it!==null&&ut<J.length;ut++){it.index>ut?(ln=it,it=null):ln=it.sibling;var wt=ge(K,it,J[ut],Ee);if(wt===null){it===null&&(it=ln);break}t&&it&&wt.alternate===null&&i(K,it),W=m(wt,W,ut),nt===null?je=wt:nt.sibling=wt,nt=wt,it=ln}if(ut===J.length)return a(K,it),Vt&&Ir(K,ut),je;if(it===null){for(;ut<J.length;ut++)it=ye(K,J[ut],Ee),it!==null&&(W=m(it,W,ut),nt===null?je=it:nt.sibling=it,nt=it);return Vt&&Ir(K,ut),je}for(it=u(K,it);ut<J.length;ut++)ln=Ue(it,K,ut,J[ut],Ee),ln!==null&&(t&&ln.alternate!==null&&it.delete(ln.key===null?ut:ln.key),W=m(ln,W,ut),nt===null?je=ln:nt.sibling=ln,nt=ln);return t&&it.forEach(function(vr){return i(K,vr)}),Vt&&Ir(K,ut),je}function Xe(K,W,J,Ee){var je=re(J);if(typeof je!="function")throw Error(n(150));if(J=je.call(J),J==null)throw Error(n(151));for(var nt=je=null,it=W,ut=W=0,ln=null,wt=J.next();it!==null&&!wt.done;ut++,wt=J.next()){it.index>ut?(ln=it,it=null):ln=it.sibling;var vr=ge(K,it,wt.value,Ee);if(vr===null){it===null&&(it=ln);break}t&&it&&vr.alternate===null&&i(K,it),W=m(vr,W,ut),nt===null?je=vr:nt.sibling=vr,nt=vr,it=ln}if(wt.done)return a(K,it),Vt&&Ir(K,ut),je;if(it===null){for(;!wt.done;ut++,wt=J.next())wt=ye(K,wt.value,Ee),wt!==null&&(W=m(wt,W,ut),nt===null?je=wt:nt.sibling=wt,nt=wt);return Vt&&Ir(K,ut),je}for(it=u(K,it);!wt.done;ut++,wt=J.next())wt=Ue(it,K,ut,wt.value,Ee),wt!==null&&(t&&wt.alternate!==null&&it.delete(wt.key===null?ut:wt.key),W=m(wt,W,ut),nt===null?je=wt:nt.sibling=wt,nt=wt);return t&&it.forEach(function(yg){return i(K,yg)}),Vt&&Ir(K,ut),je}function jt(K,W,J,Ee){if(typeof J=="object"&&J!==null&&J.type===O&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case V:e:{for(var je=J.key,nt=W;nt!==null;){if(nt.key===je){if(je=J.type,je===O){if(nt.tag===7){a(K,nt.sibling),W=d(nt,J.props.children),W.return=K,K=W;break e}}else if(nt.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===de&&_h(je)===nt.type){a(K,nt.sibling),W=d(nt,J.props),W.ref=ya(K,nt,J),W.return=K,K=W;break e}a(K,nt);break}else i(K,nt);nt=nt.sibling}J.type===O?(W=Gr(J.props.children,K.mode,Ee,J.key),W.return=K,K=W):(Ee=rl(J.type,J.key,J.props,null,K.mode,Ee),Ee.ref=ya(K,W,J),Ee.return=K,K=Ee)}return M(K);case D:e:{for(nt=J.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){a(K,W.sibling),W=d(W,J.children||[]),W.return=K,K=W;break e}else{a(K,W);break}else i(K,W);W=W.sibling}W=bc(J,K.mode,Ee),W.return=K,K=W}return M(K);case de:return nt=J._init,jt(K,W,nt(J._payload),Ee)}if(Rt(J))return He(K,W,J,Ee);if(re(J))return Xe(K,W,J,Ee);Uo(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(a(K,W.sibling),W=d(W,J),W.return=K,K=W):(a(K,W),W=wc(J,K.mode,Ee),W.return=K,K=W),M(K)):a(K,W)}return jt}var ys=yh(!0),Sh=yh(!1),Io=or(null),Fo=null,Ss=null,Iu=null;function Fu(){Iu=Ss=Fo=null}function Ou(t){var i=Io.current;kt(Io),t._currentValue=i}function ku(t,i,a){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===a)break;t=t.return}}function Ms(t,i){Fo=t,Iu=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Cn=!0),t.firstContext=null)}function qn(t){var i=t._currentValue;if(Iu!==t)if(t={context:t,memoizedValue:i,next:null},Ss===null){if(Fo===null)throw Error(n(308));Ss=t,Fo.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return i}var Fr=null;function Bu(t){Fr===null?Fr=[t]:Fr.push(t)}function Mh(t,i,a,u){var d=i.interleaved;return d===null?(a.next=a,Bu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ai(t,u)}function Ai(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var cr=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(t,i,a){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(St&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ai(t,a)}return d=u.interleaved,d===null?(i.next=i,Bu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ai(t,a)}function Oo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,a|=u,i.lanes=a,Jt(t,a)}}function Th(t,i){var a=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=M:m=m.next=M,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function ko(t,i,a,u){var d=t.updateQueue;cr=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var z=N,ie=z.next;z.next=null,M===null?m=ie:M.next=ie,M=z;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,N=ve.lastBaseUpdate,N!==M&&(N===null?ve.firstBaseUpdate=ie:N.next=ie,ve.lastBaseUpdate=z))}if(m!==null){var ye=d.baseState;M=0,ve=ie=z=null,N=m;do{var ge=N.lane,Ue=N.eventTime;if((u&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ue,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var He=t,Xe=N;switch(ge=i,Ue=a,Xe.tag){case 1:if(He=Xe.payload,typeof He=="function"){ye=He.call(Ue,ye,ge);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Xe.payload,ge=typeof He=="function"?He.call(Ue,ye,ge):He,ge==null)break e;ye=ee({},ye,ge);break e;case 2:cr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[N]:ge.push(N))}else Ue={eventTime:Ue,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ve===null?(ie=ve=Ue,z=ye):ve=ve.next=Ue,M|=ge;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(z=ye),d.baseState=z,d.firstBaseUpdate=ie,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Br|=M,t.lanes=M,t.memoizedState=ye}}function wh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var Sa={},pi=or(Sa),Ma=or(Sa),Ea=or(Sa);function Or(t){if(t===Sa)throw Error(n(174));return t}function Vu(t,i){switch(Ft(Ea,i),Ft(Ma,t),Ft(pi,Sa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:xe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=xe(i,t)}kt(pi),Ft(pi,i)}function Es(){kt(pi),kt(Ma),kt(Ea)}function bh(t){Or(Ea.current);var i=Or(pi.current),a=xe(i,t.type);i!==a&&(Ft(Ma,t),Ft(pi,a))}function Hu(t){Ma.current===t&&(kt(pi),kt(Ma))}var Ht=or(0);function Bo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Gu=[];function Wu(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var zo=U.ReactCurrentDispatcher,Xu=U.ReactCurrentBatchConfig,kr=0,Gt=null,en=null,an=null,Vo=!1,Ta=!1,wa=0,Hx=0;function mn(){throw Error(n(321))}function ju(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Jn(t[a],i[a]))return!1;return!0}function qu(t,i,a,u,d,m){if(kr=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,zo.current=t===null||t.memoizedState===null?jx:qx,t=a(u,d),Ta){m=0;do{if(Ta=!1,wa=0,25<=m)throw Error(n(301));m+=1,an=en=null,i.updateQueue=null,zo.current=Yx,t=a(u,d)}while(Ta)}if(zo.current=Wo,i=en!==null&&en.next!==null,kr=0,an=en=Gt=null,Vo=!1,i)throw Error(n(300));return t}function Yu(){var t=wa!==0;return wa=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Gt.memoizedState=an=t:an=an.next=t,an}function Yn(){if(en===null){var t=Gt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=an===null?Gt.memoizedState:an.next;if(i!==null)an=i,en=t;else{if(t===null)throw Error(n(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},an===null?Gt.memoizedState=an=t:an=an.next=t}return an}function ba(t,i){return typeof i=="function"?i(t):i}function $u(t){var i=Yn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var u=en,d=u.baseQueue,m=a.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}u.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,u=u.baseState;var N=M=null,z=null,ie=m;do{var ve=ie.lane;if((kr&ve)===ve)z!==null&&(z=z.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),u=ie.hasEagerState?ie.eagerState:t(u,ie.action);else{var ye={lane:ve,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};z===null?(N=z=ye,M=u):z=z.next=ye,Gt.lanes|=ve,Br|=ve}ie=ie.next}while(ie!==null&&ie!==m);z===null?M=u:z.next=N,Jn(u,i.memoizedState)||(Cn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=z,a.lastRenderedState=u}if(t=a.interleaved,t!==null){d=t;do m=d.lane,Gt.lanes|=m,Br|=m,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ku(t){var i=Yn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var u=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var M=d=d.next;do m=t(m,M.action),M=M.next;while(M!==d);Jn(m,i.memoizedState)||(Cn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function Ah(){}function Ch(t,i){var a=Gt,u=Yn(),d=i(),m=!Jn(u.memoizedState,d);if(m&&(u.memoizedState=d,Cn=!0),u=u.queue,Zu(Lh.bind(null,a,u,t),[t]),u.getSnapshot!==i||m||an!==null&&an.memoizedState.tag&1){if(a.flags|=2048,Aa(9,Ph.bind(null,a,u,d,i),void 0,null),on===null)throw Error(n(349));(kr&30)!==0||Rh(a,i,d)}return d}function Rh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Ph(t,i,a,u){i.value=a,i.getSnapshot=u,Dh(i)&&Nh(t)}function Lh(t,i,a){return a(function(){Dh(i)&&Nh(t)})}function Dh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Jn(t,a)}catch{return!0}}function Nh(t){var i=Ai(t,1);i!==null&&ri(i,t,1,-1)}function Uh(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},i.queue=t,t=t.dispatch=Xx.bind(null,Gt,t),[i.memoizedState,t]}function Aa(t,i,a,u){return t={tag:t,create:i,destroy:a,deps:u,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(u=a.next,a.next=t,t.next=u,i.lastEffect=t)),t}function Ih(){return Yn().memoizedState}function Ho(t,i,a,u){var d=mi();Gt.flags|=t,d.memoizedState=Aa(1|i,a,void 0,u===void 0?null:u)}function Go(t,i,a,u){var d=Yn();u=u===void 0?null:u;var m=void 0;if(en!==null){var M=en.memoizedState;if(m=M.destroy,u!==null&&ju(u,M.deps)){d.memoizedState=Aa(i,a,m,u);return}}Gt.flags|=t,d.memoizedState=Aa(1|i,a,m,u)}function Fh(t,i){return Ho(8390656,8,t,i)}function Zu(t,i){return Go(2048,8,t,i)}function Oh(t,i){return Go(4,2,t,i)}function kh(t,i){return Go(4,4,t,i)}function Bh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function zh(t,i,a){return a=a!=null?a.concat([t]):null,Go(4,4,Bh.bind(null,i,t),a)}function Qu(){}function Vh(t,i){var a=Yn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ju(i,u[1])?u[0]:(a.memoizedState=[t,i],t)}function Hh(t,i){var a=Yn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ju(i,u[1])?u[0]:(t=t(),a.memoizedState=[t,i],t)}function Gh(t,i,a){return(kr&21)===0?(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=a):(Jn(a,i)||(a=Ji(),Gt.lanes|=a,Br|=a,t.baseState=!0),i)}function Gx(t,i){var a=ct;ct=a!==0&&4>a?a:4,t(!0);var u=Xu.transition;Xu.transition={};try{t(!1),i()}finally{ct=a,Xu.transition=u}}function Wh(){return Yn().memoizedState}function Wx(t,i,a){var u=mr(t);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Xh(t))jh(i,a);else if(a=Mh(t,i,a,u),a!==null){var d=Mn();ri(a,t,u,d),qh(a,i,u)}}function Xx(t,i,a){var u=mr(t),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xh(t))jh(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,N=m(M,a);if(d.hasEagerState=!0,d.eagerState=N,Jn(N,M)){var z=i.interleaved;z===null?(d.next=d,Bu(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}a=Mh(t,i,d,u),a!==null&&(d=Mn(),ri(a,t,u,d),qh(a,i,u))}}function Xh(t){var i=t.alternate;return t===Gt||i!==null&&i===Gt}function jh(t,i){Ta=Vo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function qh(t,i,a){if((a&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,a|=u,i.lanes=a,Jt(t,a)}}var Wo={readContext:qn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},jx={readContext:qn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:qn,useEffect:Fh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Ho(4194308,4,Bh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Ho(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ho(4,2,t,i)},useMemo:function(t,i){var a=mi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var u=mi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=Wx.bind(null,Gt,t),[u.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:Uh,useDebugValue:Qu,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=Uh(!1),i=t[0];return t=Gx.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var u=Gt,d=mi();if(Vt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),on===null)throw Error(n(349));(kr&30)!==0||Rh(u,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Fh(Lh.bind(null,u,m,t),[t]),u.flags|=2048,Aa(9,Ph.bind(null,u,m,a,i),void 0,null),a},useId:function(){var t=mi(),i=on.identifierPrefix;if(Vt){var a=bi,u=wi;a=(u&~(1<<32-at(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Hx++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},qx={readContext:qn,useCallback:Vh,useContext:qn,useEffect:Zu,useImperativeHandle:zh,useInsertionEffect:Oh,useLayoutEffect:kh,useMemo:Hh,useReducer:$u,useRef:Ih,useState:function(){return $u(ba)},useDebugValue:Qu,useDeferredValue:function(t){var i=Yn();return Gh(i,en.memoizedState,t)},useTransition:function(){var t=$u(ba)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:Ah,useSyncExternalStore:Ch,useId:Wh,unstable_isNewReconciler:!1},Yx={readContext:qn,useCallback:Vh,useContext:qn,useEffect:Zu,useImperativeHandle:zh,useInsertionEffect:Oh,useLayoutEffect:kh,useMemo:Hh,useReducer:Ku,useRef:Ih,useState:function(){return Ku(ba)},useDebugValue:Qu,useDeferredValue:function(t){var i=Yn();return en===null?i.memoizedState=t:Gh(i,en.memoizedState,t)},useTransition:function(){var t=Ku(ba)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:Ah,useSyncExternalStore:Ch,useId:Wh,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=ee({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Ju(t,i,a,u){i=t.memoizedState,a=a(u,i),a=a==null?i:ee({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xo={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var u=Mn(),d=mr(t),m=Ci(u,d);m.payload=i,a!=null&&(m.callback=a),i=fr(t,m,d),i!==null&&(ri(i,t,d,u),Oo(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var u=Mn(),d=mr(t),m=Ci(u,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=fr(t,m,d),i!==null&&(ri(i,t,d,u),Oo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Mn(),u=mr(t),d=Ci(a,u);d.tag=2,i!=null&&(d.callback=i),i=fr(t,d,u),i!==null&&(ri(i,t,u,a),Oo(i,t,u))}};function Yh(t,i,a,u,d,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!ha(a,u)||!ha(d,m):!0}function $h(t,i,a){var u=!1,d=lr,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(d=An(i)?Nr:pn.current,u=i.contextTypes,m=(u=u!=null)?xs(t,d):lr),i=new i(a,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xo,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=m),i}function Kh(t,i,a,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==t&&Xo.enqueueReplaceState(i,i.state,null)}function ec(t,i,a,u){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},zu(t);var m=i.contextType;typeof m=="object"&&m!==null?d.context=qn(m):(m=An(i)?Nr:pn.current,d.context=xs(t,m)),d.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Ju(t,i,m,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Xo.enqueueReplaceState(d,d.state,null),ko(t,a,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,i){try{var a="",u=i;do a+=We(u),u=u.return;while(u);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:d,digest:null}}function tc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function nc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var $x=typeof WeakMap=="function"?WeakMap:Map;function Zh(t,i,a){a=Ci(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Qo||(Qo=!0,gc=u),nc(t,i)},a}function Qh(t,i,a){a=Ci(-1,a),a.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){nc(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){nc(t,i),typeof u!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function Jh(t,i,a){var u=t.pingCache;if(u===null){u=t.pingCache=new $x;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),t=ug.bind(null,t,i,a),i.then(t,t))}function ep(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function tp(t,i,a,u,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ci(-1,1),i.tag=2,fr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Kx=U.ReactCurrentOwner,Cn=!1;function Sn(t,i,a,u){i.child=t===null?Sh(i,null,a,u):ys(i,t.child,a,u)}function np(t,i,a,u,d){a=a.render;var m=i.ref;return Ms(i,d),u=qu(t,i,a,u,m,d),a=Yu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ri(t,i,d)):(Vt&&a&&Pu(i),i.flags|=1,Sn(t,i,u,d),i.child)}function ip(t,i,a,u,d){if(t===null){var m=a.type;return typeof m=="function"&&!Tc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,rp(t,i,m,u,d)):(t=rl(a.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&d)===0){var M=m.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(M,u)&&t.ref===i.ref)return Ri(t,i,d)}return i.flags|=1,t=gr(m,u),t.ref=i.ref,t.return=i,i.child=t}function rp(t,i,a,u,d){if(t!==null){var m=t.memoizedProps;if(ha(m,u)&&t.ref===i.ref)if(Cn=!1,i.pendingProps=u=m,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Cn=!0);else return i.lanes=t.lanes,Ri(t,i,d)}return ic(t,i,a,u,d)}function sp(t,i,a){var u=i.pendingProps,d=u.children,m=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(bs,Bn),Bn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ft(bs,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,Ft(bs,Bn),Bn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,Ft(bs,Bn),Bn|=u;return Sn(t,i,d,a),i.child}function ap(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ic(t,i,a,u,d){var m=An(a)?Nr:pn.current;return m=xs(i,m),Ms(i,d),a=qu(t,i,a,u,m,d),u=Yu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ri(t,i,d)):(Vt&&u&&Pu(i),i.flags|=1,Sn(t,i,a,d),i.child)}function op(t,i,a,u,d){if(An(a)){var m=!0;Ro(i)}else m=!1;if(Ms(i,d),i.stateNode===null)qo(t,i),$h(i,a,u),ec(i,a,u,d),u=!0;else if(t===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var z=M.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=qn(ie):(ie=An(a)?Nr:pn.current,ie=xs(i,ie));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==u||z!==ie)&&Kh(i,M,u,ie),cr=!1;var ge=i.memoizedState;M.state=ge,ko(i,u,M,d),z=i.memoizedState,N!==u||ge!==z||bn.current||cr?(typeof ve=="function"&&(Ju(i,a,ve,u),z=i.memoizedState),(N=cr||Yh(i,a,N,u,ge,z,ie))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),M.props=u,M.state=z,M.context=ie,u=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Eh(t,i),N=i.memoizedProps,ie=i.type===i.elementType?N:ti(i.type,N),M.props=ie,ye=i.pendingProps,ge=M.context,z=a.contextType,typeof z=="object"&&z!==null?z=qn(z):(z=An(a)?Nr:pn.current,z=xs(i,z));var Ue=a.getDerivedStateFromProps;(ve=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==ye||ge!==z)&&Kh(i,M,u,z),cr=!1,ge=i.memoizedState,M.state=ge,ko(i,u,M,d);var He=i.memoizedState;N!==ye||ge!==He||bn.current||cr?(typeof Ue=="function"&&(Ju(i,a,Ue,u),He=i.memoizedState),(ie=cr||Yh(i,a,ie,u,ge,He,z)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,He,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,He,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),M.props=u,M.state=He,M.context=z,u=ie):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),u=!1)}return rc(t,i,a,u,m,d)}function rc(t,i,a,u,d,m){ap(t,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&dh(i,a,!1),Ri(t,i,m);u=i.stateNode,Kx.current=i;var N=M&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&M?(i.child=ys(i,t.child,null,m),i.child=ys(i,null,N,m)):Sn(t,i,N,m),i.memoizedState=u.state,d&&dh(i,a,!0),i.child}function lp(t){var i=t.stateNode;i.pendingContext?ch(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ch(t,i.context,!1),Vu(t,i.containerInfo)}function up(t,i,a,u,d){return _s(),Uu(d),i.flags|=256,Sn(t,i,a,u),i.child}var sc={dehydrated:null,treeContext:null,retryLane:0};function ac(t){return{baseLanes:t,cachePool:null,transitions:null}}function cp(t,i,a){var u=i.pendingProps,d=Ht.current,m=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=t!==null&&t.memoizedState===null?!1:(d&2)!==0),N?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ft(Ht,d&1),t===null)return Nu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,t=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=sl(M,u,0,null),t=Gr(t,u,a,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=ac(a),i.memoizedState=sc,t):oc(i,M));if(d=t.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return Zx(t,i,M,u,N,d,a);if(m){m=u.fallback,M=i.mode,d=t.child,N=d.sibling;var z={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=gr(d,z),u.subtreeFlags=d.subtreeFlags&14680064),N!==null?m=gr(N,m):(m=Gr(m,M,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=t.child.memoizedState,M=M===null?ac(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=t.childLanes&~a,i.memoizedState=sc,u}return m=t.child,t=m.sibling,u=gr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=u,i.memoizedState=null,u}function oc(t,i){return i=sl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function jo(t,i,a,u){return u!==null&&Uu(u),ys(i,t.child,null,a),t=oc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Zx(t,i,a,u,d,m,M){if(a)return i.flags&256?(i.flags&=-257,u=tc(Error(n(422))),jo(t,i,M,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=sl({mode:"visible",children:u.children},d,0,null),m=Gr(m,d,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&ys(i,t.child,null,M),i.child.memoizedState=ac(M),i.memoizedState=sc,m);if((i.mode&1)===0)return jo(t,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var N=u.dgst;return u=N,m=Error(n(419)),u=tc(m,u,void 0),jo(t,i,M,u)}if(N=(M&t.childLanes)!==0,Cn||N){if(u=on,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|M))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ai(t,d),ri(u,t,d,-1))}return Ec(),u=tc(Error(n(421))),jo(t,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=cg.bind(null,t),d._reactRetry=i,null):(t=m.treeContext,kn=ar(d.nextSibling),On=i,Vt=!0,ei=null,t!==null&&(Xn[jn++]=wi,Xn[jn++]=bi,Xn[jn++]=Ur,wi=t.id,bi=t.overflow,Ur=i),i=oc(i,u.children),i.flags|=4096,i)}function fp(t,i,a){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),ku(t.return,i,a)}function lc(t,i,a,u,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=d)}function dp(t,i,a){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Sn(t,i,u.children,a),u=Ht.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,a,i);else if(t.tag===19)fp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Ft(Ht,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Bo(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),lc(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Bo(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}lc(i,!0,a,null,m);break;case"together":lc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ri(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Br|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=gr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=gr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Qx(t,i,a){switch(i.tag){case 3:lp(i),_s();break;case 5:bh(i);break;case 1:An(i.type)&&Ro(i);break;case 4:Vu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ft(Io,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ft(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?cp(t,i,a):(Ft(Ht,Ht.current&1),t=Ri(t,i,a),t!==null?t.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(t.flags&128)!==0){if(u)return dp(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ft(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,sp(t,i,a)}return Ri(t,i,a)}var hp,uc,pp,mp;hp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},uc=function(){},pp=function(t,i,a,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,Or(pi.current);var m=null;switch(a){case"input":d=Lt(t,d),u=Lt(t,u),m=[];break;case"select":d=ee({},d,{value:void 0}),u=ee({},u,{value:void 0}),m=[];break;case"textarea":d=ot(t,d),u=ot(t,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=bo)}et(a,u);var M;a=null;for(ie in d)if(!u.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var N=d[ie];for(M in N)N.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?m||(m=[]):(m=m||[]).push(ie,null));for(ie in u){var z=u[ie];if(N=d!=null?d[ie]:void 0,u.hasOwnProperty(ie)&&z!==N&&(z!=null||N!=null))if(ie==="style")if(N){for(M in N)!N.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in z)z.hasOwnProperty(M)&&N[M]!==z[M]&&(a||(a={}),a[M]=z[M])}else a||(m||(m=[]),m.push(ie,a)),a=z;else ie==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,N=N?N.__html:void 0,z!=null&&N!==z&&(m=m||[]).push(ie,z)):ie==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(ie,""+z):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(z!=null&&ie==="onScroll"&&Ot("scroll",t),m||N===z||(m=[])):(m=m||[]).push(ie,z))}a&&(m=m||[]).push("style",a);var ie=m;(i.updateQueue=ie)&&(i.flags|=4)}},mp=function(t,i,a,u){a!==u&&(i.flags|=4)};function Ca(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,u=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=a,i}function Jx(t,i,a){var u=i.pendingProps;switch(Lu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return An(i.type)&&Co(),xn(i),null;case 3:return u=i.stateNode,Es(),kt(bn),kt(pn),Wu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(No(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(yc(ei),ei=null))),uc(t,i),xn(i),null;case 5:Hu(i);var d=Or(Ea.current);if(a=i.type,t!==null&&i.stateNode!=null)pp(t,i,a,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=Or(pi.current),No(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[hi]=i,u[va]=m,t=(i.mode&1)!==0,a){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<ma.length;d++)Ot(ma[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":k(u,m),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",u);break;case"textarea":L(u,m),Ot("invalid",u)}et(a,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var N=m[M];M==="children"?typeof N=="string"?u.textContent!==N&&(m.suppressHydrationWarning!==!0&&wo(u.textContent,N,t),d=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(m.suppressHydrationWarning!==!0&&wo(u.textContent,N,t),d=["children",""+N]):o.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&Ot("scroll",u)}switch(a){case"input":ht(u),Ct(u,m,!0);break;case"textarea":ht(u),Q(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=bo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=M.createElement(a,{is:u.is}):(t=M.createElement(a),a==="select"&&(M=t,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):t=M.createElementNS(t,a),t[hi]=i,t[va]=u,hp(t,i,!1,!1),i.stateNode=t;e:{switch(M=Ne(a,u),a){case"dialog":Ot("cancel",t),Ot("close",t),d=u;break;case"iframe":case"object":case"embed":Ot("load",t),d=u;break;case"video":case"audio":for(d=0;d<ma.length;d++)Ot(ma[d],t);d=u;break;case"source":Ot("error",t),d=u;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),d=u;break;case"details":Ot("toggle",t),d=u;break;case"input":k(t,u),d=Lt(t,u),Ot("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=ee({},u,{value:void 0}),Ot("invalid",t);break;case"textarea":L(t,u),d=ot(t,u),Ot("invalid",t);break;default:d=u}et(a,d),N=d;for(m in N)if(N.hasOwnProperty(m)){var z=N[m];m==="style"?Ae(t,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&$e(t,z)):m==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Ce(t,z):typeof z=="number"&&Ce(t,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?z!=null&&m==="onScroll"&&Ot("scroll",t):z!=null&&R(t,m,z,M))}switch(a){case"input":ht(t),Ct(t,u,!1);break;case"textarea":ht(t),Q(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Me(u.value));break;case"select":t.multiple=!!u.multiple,m=u.value,m!=null?qe(t,!!u.multiple,m,!1):u.defaultValue!=null&&qe(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=bo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)mp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(a=Or(Ea.current),Or(pi.current),No(i)){if(u=i.stateNode,a=i.memoizedProps,u[hi]=i,(m=u.nodeValue!==a)&&(t=On,t!==null))switch(t.tag){case 3:wo(u.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wo(u.nodeValue,a,(t.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[hi]=i,i.stateNode=u}return xn(i),null;case 13:if(kt(Ht),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)vh(),_s(),i.flags|=98560,m=!1;else if(m=No(i),u!==null&&u.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[hi]=i}else _s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),m=!1}else ei!==null&&(yc(ei),ei=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ht.current&1)!==0?tn===0&&(tn=3):Ec())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return Es(),uc(t,i),t===null&&xa(i.stateNode.containerInfo),xn(i),null;case 10:return Ou(i.type._context),xn(i),null;case 17:return An(i.type)&&Co(),xn(i),null;case 19:if(kt(Ht),m=i.memoizedState,m===null)return xn(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)Ca(m,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Bo(t),M!==null){for(i.flags|=128,Ca(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,t=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,t=M.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ft(Ht,Ht.current&1|2),i.child}t=t.sibling}m.tail!==null&&Z()>As&&(i.flags|=128,u=!0,Ca(m,!1),i.lanes=4194304)}else{if(!u)if(t=Bo(M),t!==null){if(i.flags|=128,u=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Vt)return xn(i),null}else 2*Z()-m.renderingStartTime>As&&a!==1073741824&&(i.flags|=128,u=!0,Ca(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(a=m.last,a!==null?a.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Z(),i.sibling=null,a=Ht.current,Ft(Ht,u?a&1|2:a&1),i):(xn(i),null);case 22:case 23:return Mc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function eg(t,i){switch(Lu(i),i.tag){case 1:return An(i.type)&&Co(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Es(),kt(bn),kt(pn),Wu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Hu(i),null;case 13:if(kt(Ht),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));_s()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Ht),null;case 4:return Es(),null;case 10:return Ou(i.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var Yo=!1,gn=!1,tg=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ws(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Xt(t,i,u)}else a.current=null}function cc(t,i,a){try{a()}catch(u){Xt(t,i,u)}}var xp=!1;function ng(t,i){if(Mu=po,t=Yd(),pu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var M=0,N=-1,z=-1,ie=0,ve=0,ye=t,ge=null;t:for(;;){for(var Ue;ye!==a||d!==0&&ye.nodeType!==3||(N=M+d),ye!==m||u!==0&&ye.nodeType!==3||(z=M+u),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ue=ye.firstChild)!==null;)ge=ye,ye=Ue;for(;;){if(ye===t)break t;if(ge===a&&++ie===d&&(N=M),ge===m&&++ve===u&&(z=M),(Ue=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ue}a=N===-1||z===-1?null:{start:N,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Eu={focusedElem:t,selectionRange:a},po=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Xe=He.memoizedProps,jt=He.memoizedState,K=i.stateNode,W=K.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:ti(i.type,Xe),jt);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Xt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return He=xp,xp=!1,He}function Ra(t,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var m=d.destroy;d.destroy=void 0,m!==void 0&&cc(i,a,m)}d=d.next}while(d!==u)}}function $o(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function fc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function gp(t){var i=t.alternate;i!==null&&(t.alternate=null,gp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[va],delete i[Au],delete i[kx],delete i[Bx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vp(t){return t.tag===5||t.tag===3||t.tag===4}function _p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dc(t,i,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bo));else if(u!==4&&(t=t.child,t!==null))for(dc(t,i,a),t=t.sibling;t!==null;)dc(t,i,a),t=t.sibling}function hc(t,i,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(hc(t,i,a),t=t.sibling;t!==null;)hc(t,i,a),t=t.sibling}var dn=null,ni=!1;function dr(t,i,a){for(a=a.child;a!==null;)yp(t,i,a),a=a.sibling}function yp(t,i,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(tt,a)}catch{}switch(a.tag){case 5:gn||ws(a,i);case 6:var u=dn,d=ni;dn=null,dr(t,i,a),dn=u,ni=d,dn!==null&&(ni?(t=dn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):dn.removeChild(a.stateNode));break;case 18:dn!==null&&(ni?(t=dn,a=a.stateNode,t.nodeType===8?bu(t.parentNode,a):t.nodeType===1&&bu(t,a),oa(t)):bu(dn,a.stateNode));break;case 4:u=dn,d=ni,dn=a.stateNode.containerInfo,ni=!0,dr(t,i,a),dn=u,ni=d;break;case 0:case 11:case 14:case 15:if(!gn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&cc(a,i,M),d=d.next}while(d!==u)}dr(t,i,a);break;case 1:if(!gn&&(ws(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(N){Xt(a,i,N)}dr(t,i,a);break;case 21:dr(t,i,a);break;case 22:a.mode&1?(gn=(u=gn)||a.memoizedState!==null,dr(t,i,a),gn=u):dr(t,i,a);break;default:dr(t,i,a)}}function Sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new tg),i.forEach(function(u){var d=fg.bind(null,t,u);a.has(u)||(a.add(u),u.then(d,d))})}}function ii(t,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var m=t,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:dn=N.stateNode,ni=!1;break e;case 3:dn=N.stateNode.containerInfo,ni=!0;break e;case 4:dn=N.stateNode.containerInfo,ni=!0;break e}N=N.return}if(dn===null)throw Error(n(160));yp(m,M,d),dn=null,ni=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ie){Xt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Mp(i,t),i=i.sibling}function Mp(t,i){var a=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),xi(t),u&4){try{Ra(3,t,t.return),$o(3,t)}catch(Xe){Xt(t,t.return,Xe)}try{Ra(5,t,t.return)}catch(Xe){Xt(t,t.return,Xe)}}break;case 1:ii(i,t),xi(t),u&512&&a!==null&&ws(a,a.return);break;case 5:if(ii(i,t),xi(t),u&512&&a!==null&&ws(a,a.return),t.flags&32){var d=t.stateNode;try{Ce(d,"")}catch(Xe){Xt(t,t.return,Xe)}}if(u&4&&(d=t.stateNode,d!=null)){var m=t.memoizedProps,M=a!==null?a.memoizedProps:m,N=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{N==="input"&&m.type==="radio"&&m.name!=null&&gt(d,m),Ne(N,M);var ie=Ne(N,m);for(M=0;M<z.length;M+=2){var ve=z[M],ye=z[M+1];ve==="style"?Ae(d,ye):ve==="dangerouslySetInnerHTML"?$e(d,ye):ve==="children"?Ce(d,ye):R(d,ve,ye,ie)}switch(N){case"input":mt(d,m);break;case"textarea":T(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ue=m.value;Ue!=null?qe(d,!!m.multiple,Ue,!1):ge!==!!m.multiple&&(m.defaultValue!=null?qe(d,!!m.multiple,m.defaultValue,!0):qe(d,!!m.multiple,m.multiple?[]:"",!1))}d[va]=m}catch(Xe){Xt(t,t.return,Xe)}}break;case 6:if(ii(i,t),xi(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,m=t.memoizedProps;try{d.nodeValue=m}catch(Xe){Xt(t,t.return,Xe)}}break;case 3:if(ii(i,t),xi(t),u&4&&a!==null&&a.memoizedState.isDehydrated)try{oa(i.containerInfo)}catch(Xe){Xt(t,t.return,Xe)}break;case 4:ii(i,t),xi(t);break;case 13:ii(i,t),xi(t),d=t.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(xc=Z())),u&4&&Sp(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(gn=(ie=gn)||ve,ii(i,t),gn=ie):ii(i,t),xi(t),u&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!ve&&(t.mode&1)!==0)for(Be=t,ve=t.child;ve!==null;){for(ye=Be=ve;Be!==null;){switch(ge=Be,Ue=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ra(4,ge,ge.return);break;case 1:ws(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){u=ge,a=ge.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Xe){Xt(u,a,Xe)}}break;case 5:ws(ge,ge.return);break;case 22:if(ge.memoizedState!==null){wp(ye);continue}}Ue!==null?(Ue.return=ge,Be=Ue):wp(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{d=ye.stateNode,ie?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(N=ye.stateNode,z=ye.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,N.style.display=_e("display",M))}catch(Xe){Xt(t,t.return,Xe)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ie?"":ye.memoizedProps}catch(Xe){Xt(t,t.return,Xe)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ii(i,t),xi(t),u&4&&Sp(t);break;case 21:break;default:ii(i,t),xi(t)}}function xi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(vp(a)){var u=a;break e}a=a.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Ce(d,""),u.flags&=-33);var m=_p(t);hc(t,m,d);break;case 3:case 4:var M=u.stateNode.containerInfo,N=_p(t);dc(t,N,M);break;default:throw Error(n(161))}}catch(z){Xt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function ig(t,i,a){Be=t,Ep(t)}function Ep(t,i,a){for(var u=(t.mode&1)!==0;Be!==null;){var d=Be,m=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||Yo;if(!M){var N=d.alternate,z=N!==null&&N.memoizedState!==null||gn;N=Yo;var ie=gn;if(Yo=M,(gn=z)&&!ie)for(Be=d;Be!==null;)M=Be,z=M.child,M.tag===22&&M.memoizedState!==null?bp(d):z!==null?(z.return=M,Be=z):bp(d);for(;m!==null;)Be=m,Ep(m),m=m.sibling;Be=d,Yo=N,gn=ie}Tp(t)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Be=m):Tp(t)}}function Tp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||$o(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gn)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ti(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&wh(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}wh(i,M,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ve=ie.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&oa(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}gn||i.flags&512&&fc(i)}catch(ge){Xt(i,i.return,ge)}}if(i===t){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function wp(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function bp(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{$o(4,i)}catch(z){Xt(i,a,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(z){Xt(i,d,z)}}var m=i.return;try{fc(i)}catch(z){Xt(i,m,z)}break;case 5:var M=i.return;try{fc(i)}catch(z){Xt(i,M,z)}}}catch(z){Xt(i,i.return,z)}if(i===t){Be=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Be=N;break}Be=i.return}}var rg=Math.ceil,Ko=U.ReactCurrentDispatcher,pc=U.ReactCurrentOwner,$n=U.ReactCurrentBatchConfig,St=0,on=null,Zt=null,hn=0,Bn=0,bs=or(0),tn=0,Pa=null,Br=0,Zo=0,mc=0,La=null,Rn=null,xc=0,As=1/0,Pi=null,Qo=!1,gc=null,hr=null,Jo=!1,pr=null,el=0,Da=0,vc=null,tl=-1,nl=0;function Mn(){return(St&6)!==0?Z():tl!==-1?tl:tl=Z()}function mr(t){return(t.mode&1)===0?1:(St&2)!==0&&hn!==0?hn&-hn:Vx.transition!==null?(nl===0&&(nl=Ji()),nl):(t=ct,t!==0||(t=window.event,t=t===void 0?16:Cd(t.type)),t)}function ri(t,i,a,u){if(50<Da)throw Da=0,vc=null,Error(n(185));Kt(t,a,u),((St&2)===0||t!==on)&&(t===on&&((St&2)===0&&(Zo|=a),tn===4&&xr(t,hn)),Pn(t,u),a===1&&St===0&&(i.mode&1)===0&&(As=Z()+500,Po&&ur()))}function Pn(t,i){var a=t.callbackNode;Qi(t,i);var u=_t(t,t===on?hn:0);if(u===0)a!==null&&co(a),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(a!=null&&co(a),i===1)t.tag===0?zx(Cp.bind(null,t)):hh(Cp.bind(null,t)),Fx(function(){(St&6)===0&&ur()}),a=null;else{switch(as(u)){case 1:a=q;break;case 4:a=be;break;case 16:a=Pe;break;case 536870912:a=Ie;break;default:a=Pe}a=Fp(a,Ap.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Ap(t,i){if(tl=-1,nl=0,(St&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Cs()&&t.callbackNode!==a)return null;var u=_t(t,t===on?hn:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=il(t,u);else{i=u;var d=St;St|=2;var m=Pp();(on!==t||hn!==i)&&(Pi=null,As=Z()+500,Vr(t,i));do try{og();break}catch(N){Rp(t,N)}while(!0);Fu(),Ko.current=m,St=d,Zt!==null?i=0:(on=null,hn=0,i=tn)}if(i!==0){if(i===2&&(d=fn(t),d!==0&&(u=d,i=_c(t,d))),i===1)throw a=Pa,Vr(t,0),xr(t,u),Pn(t,Z()),a;if(i===6)xr(t,u);else{if(d=t.current.alternate,(u&30)===0&&!sg(d)&&(i=il(t,u),i===2&&(m=fn(t),m!==0&&(u=m,i=_c(t,m))),i===1))throw a=Pa,Vr(t,0),xr(t,u),Pn(t,Z()),a;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Hr(t,Rn,Pi);break;case 3:if(xr(t,u),(u&130023424)===u&&(i=xc+500-Z(),10<i)){if(_t(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){Mn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=wu(Hr.bind(null,t,Rn,Pi),i);break}Hr(t,Rn,Pi);break;case 4:if(xr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var M=31-at(u);m=1<<M,M=i[M],M>d&&(d=M),u&=~m}if(u=d,u=Z()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*rg(u/1960))-u,10<u){t.timeoutHandle=wu(Hr.bind(null,t,Rn,Pi),u);break}Hr(t,Rn,Pi);break;case 5:Hr(t,Rn,Pi);break;default:throw Error(n(329))}}}return Pn(t,Z()),t.callbackNode===a?Ap.bind(null,t):null}function _c(t,i){var a=La;return t.current.memoizedState.isDehydrated&&(Vr(t,i).flags|=256),t=il(t,i),t!==2&&(i=Rn,Rn=a,i!==null&&yc(i)),t}function yc(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function sg(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],m=d.getSnapshot;d=d.value;try{if(!Jn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(t,i){for(i&=~mc,i&=~Zo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-at(i),u=1<<a;t[a]=-1,i&=~u}}function Cp(t){if((St&6)!==0)throw Error(n(327));Cs();var i=_t(t,0);if((i&1)===0)return Pn(t,Z()),null;var a=il(t,i);if(t.tag!==0&&a===2){var u=fn(t);u!==0&&(i=u,a=_c(t,u))}if(a===1)throw a=Pa,Vr(t,0),xr(t,i),Pn(t,Z()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Hr(t,Rn,Pi),Pn(t,Z()),null}function Sc(t,i){var a=St;St|=1;try{return t(i)}finally{St=a,St===0&&(As=Z()+500,Po&&ur())}}function zr(t){pr!==null&&pr.tag===0&&(St&6)===0&&Cs();var i=St;St|=1;var a=$n.transition,u=ct;try{if($n.transition=null,ct=1,t)return t()}finally{ct=u,$n.transition=a,St=i,(St&6)===0&&ur()}}function Mc(){Bn=bs.current,kt(bs)}function Vr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Ix(a)),Zt!==null)for(a=Zt.return;a!==null;){var u=a;switch(Lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Co();break;case 3:Es(),kt(bn),kt(pn),Wu();break;case 5:Hu(u);break;case 4:Es();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:Ou(u.type._context);break;case 22:case 23:Mc()}a=a.return}if(on=t,Zt=t=gr(t.current,null),hn=Bn=i,tn=0,Pa=null,mc=Zo=Br=0,Rn=La=null,Fr!==null){for(i=0;i<Fr.length;i++)if(a=Fr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,m=a.pending;if(m!==null){var M=m.next;m.next=d,u.next=M}a.pending=u}Fr=null}return t}function Rp(t,i){do{var a=Zt;try{if(Fu(),zo.current=Wo,Vo){for(var u=Gt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Vo=!1}if(kr=0,an=en=Gt=null,Ta=!1,wa=0,pc.current=null,a===null||a.return===null){tn=1,Pa=i,Zt=null;break}e:{var m=t,M=a.return,N=a,z=i;if(i=hn,N.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ie=z,ve=N,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ue=ep(M);if(Ue!==null){Ue.flags&=-257,tp(Ue,M,N,m,i),Ue.mode&1&&Jh(m,ie,i),i=Ue,z=ie;var He=i.updateQueue;if(He===null){var Xe=new Set;Xe.add(z),i.updateQueue=Xe}else He.add(z);break e}else{if((i&1)===0){Jh(m,ie,i),Ec();break e}z=Error(n(426))}}else if(Vt&&N.mode&1){var jt=ep(M);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),tp(jt,M,N,m,i),Uu(Ts(z,N));break e}}m=z=Ts(z,N),tn!==4&&(tn=2),La===null?La=[m]:La.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var K=Zh(m,z,i);Th(m,K);break e;case 1:N=z;var W=m.type,J=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(hr===null||!hr.has(J)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=Qh(m,N,i);Th(m,Ee);break e}}m=m.return}while(m!==null)}Dp(a)}catch(je){i=je,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function Pp(){var t=Ko.current;return Ko.current=Wo,t===null?Wo:t}function Ec(){(tn===0||tn===3||tn===2)&&(tn=4),on===null||(Br&268435455)===0&&(Zo&268435455)===0||xr(on,hn)}function il(t,i){var a=St;St|=2;var u=Pp();(on!==t||hn!==i)&&(Pi=null,Vr(t,i));do try{ag();break}catch(d){Rp(t,d)}while(!0);if(Fu(),St=a,Ko.current=u,Zt!==null)throw Error(n(261));return on=null,hn=0,tn}function ag(){for(;Zt!==null;)Lp(Zt)}function og(){for(;Zt!==null&&!A();)Lp(Zt)}function Lp(t){var i=Ip(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?Dp(t):Zt=i,pc.current=null}function Dp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Jx(a,i,Bn),a!==null){Zt=a;return}}else{if(a=eg(a,i),a!==null){a.flags&=32767,Zt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=t}while(i!==null);tn===0&&(tn=5)}function Hr(t,i,a){var u=ct,d=$n.transition;try{$n.transition=null,ct=1,lg(t,i,a,u)}finally{$n.transition=d,ct=u}return null}function lg(t,i,a,u){do Cs();while(pr!==null);if((St&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(wn(t,m),t===on&&(Zt=on=null,hn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Jo||(Jo=!0,Fp(Pe,function(){return Cs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=$n.transition,$n.transition=null;var M=ct;ct=1;var N=St;St|=4,pc.current=null,ng(t,a),Mp(a,t),Cx(Eu),po=!!Mu,Eu=Mu=null,t.current=a,ig(a),j(),St=N,ct=M,$n.transition=m}else t.current=a;if(Jo&&(Jo=!1,pr=t,el=d),m=t.pendingLanes,m===0&&(hr=null),Je(a.stateNode),Pn(t,Z()),i!==null)for(u=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Qo)throw Qo=!1,t=gc,gc=null,t;return(el&1)!==0&&t.tag!==0&&Cs(),m=t.pendingLanes,(m&1)!==0?t===vc?Da++:(Da=0,vc=t):Da=0,ur(),null}function Cs(){if(pr!==null){var t=as(el),i=$n.transition,a=ct;try{if($n.transition=null,ct=16>t?16:t,pr===null)var u=!1;else{if(t=pr,pr=null,el=0,(St&6)!==0)throw Error(n(331));var d=St;for(St|=4,Be=t.current;Be!==null;){var m=Be,M=m.child;if((Be.flags&16)!==0){var N=m.deletions;if(N!==null){for(var z=0;z<N.length;z++){var ie=N[z];for(Be=ie;Be!==null;){var ve=Be;switch(ve.tag){case 0:case 11:case 15:Ra(8,ve,m)}var ye=ve.child;if(ye!==null)ye.return=ve,Be=ye;else for(;Be!==null;){ve=Be;var ge=ve.sibling,Ue=ve.return;if(gp(ve),ve===ie){Be=null;break}if(ge!==null){ge.return=Ue,Be=ge;break}Be=Ue}}}var He=m.alternate;if(He!==null){var Xe=He.child;if(Xe!==null){He.child=null;do{var jt=Xe.sibling;Xe.sibling=null,Xe=jt}while(Xe!==null)}}Be=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Be=M;else e:for(;Be!==null;){if(m=Be,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ra(9,m,m.return)}var K=m.sibling;if(K!==null){K.return=m.return,Be=K;break e}Be=m.return}}var W=t.current;for(Be=W;Be!==null;){M=Be;var J=M.child;if((M.subtreeFlags&2064)!==0&&J!==null)J.return=M,Be=J;else e:for(M=W;Be!==null;){if(N=Be,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:$o(9,N)}}catch(je){Xt(N,N.return,je)}if(N===M){Be=null;break e}var Ee=N.sibling;if(Ee!==null){Ee.return=N.return,Be=Ee;break e}Be=N.return}}if(St=d,ur(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(tt,t)}catch{}u=!0}return u}finally{ct=a,$n.transition=i}}return!1}function Np(t,i,a){i=Ts(a,i),i=Zh(t,i,1),t=fr(t,i,1),i=Mn(),t!==null&&(Kt(t,1,i),Pn(t,i))}function Xt(t,i,a){if(t.tag===3)Np(t,t,a);else for(;i!==null;){if(i.tag===3){Np(i,t,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(hr===null||!hr.has(u))){t=Ts(a,t),t=Qh(i,t,1),i=fr(i,t,1),t=Mn(),i!==null&&(Kt(i,1,t),Pn(i,t));break}}i=i.return}}function ug(t,i,a){var u=t.pingCache;u!==null&&u.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&a,on===t&&(hn&a)===a&&(tn===4||tn===3&&(hn&130023424)===hn&&500>Z()-xc?Vr(t,0):mc|=a),Pn(t,i)}function Up(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qe,Qe<<=1,(Qe&130023424)===0&&(Qe=4194304)));var a=Mn();t=Ai(t,i),t!==null&&(Kt(t,i,a),Pn(t,a))}function cg(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Up(t,a)}function fg(t,i){var a=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Up(t,a)}var Ip;Ip=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||bn.current)Cn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Cn=!1,Qx(t,i,a);Cn=(t.flags&131072)!==0}else Cn=!1,Vt&&(i.flags&1048576)!==0&&ph(i,Do,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;qo(t,i),t=i.pendingProps;var d=xs(i,pn.current);Ms(i,a),d=qu(null,i,u,t,d,a);var m=Yu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(u)?(m=!0,Ro(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,zu(i),d.updater=Xo,i.stateNode=d,d._reactInternals=i,ec(i,u,t,a),i=rc(null,i,u,!0,m,a)):(i.tag=0,Vt&&m&&Pu(i),Sn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(qo(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=hg(u),t=ti(u,t),d){case 0:i=ic(null,i,u,t,a);break e;case 1:i=op(null,i,u,t,a);break e;case 11:i=np(null,i,u,t,a);break e;case 14:i=ip(null,i,u,ti(u.type,t),a);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),ic(t,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),op(t,i,u,d,a);case 3:e:{if(lp(i),t===null)throw Error(n(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Eh(t,i),ko(i,u,null,a);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ts(Error(n(423)),i),i=up(t,i,u,a,d);break e}else if(u!==d){d=Ts(Error(n(424)),i),i=up(t,i,u,a,d);break e}else for(kn=ar(i.stateNode.containerInfo.firstChild),On=i,Vt=!0,ei=null,a=Sh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_s(),u===d){i=Ri(t,i,a);break e}Sn(t,i,u,a)}i=i.child}return i;case 5:return bh(i),t===null&&Nu(i),u=i.type,d=i.pendingProps,m=t!==null?t.memoizedProps:null,M=d.children,Tu(u,d)?M=null:m!==null&&Tu(u,m)&&(i.flags|=32),ap(t,i),Sn(t,i,M,a),i.child;case 6:return t===null&&Nu(i),null;case 13:return cp(t,i,a);case 4:return Vu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=ys(i,null,u,a):Sn(t,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),np(t,i,u,d,a);case 7:return Sn(t,i,i.pendingProps,a),i.child;case 8:return Sn(t,i,i.pendingProps.children,a),i.child;case 12:return Sn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,Ft(Io,u._currentValue),u._currentValue=M,m!==null)if(Jn(m.value,M)){if(m.children===d.children&&!bn.current){i=Ri(t,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var N=m.dependencies;if(N!==null){M=m.child;for(var z=N.firstContext;z!==null;){if(z.context===u){if(m.tag===1){z=Ci(-1,a&-a),z.tag=2;var ie=m.updateQueue;if(ie!==null){ie=ie.shared;var ve=ie.pending;ve===null?z.next=z:(z.next=ve.next,ve.next=z),ie.pending=z}}m.lanes|=a,z=m.alternate,z!==null&&(z.lanes|=a),ku(m.return,a,i),N.lanes|=a;break}z=z.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(n(341));M.lanes|=a,N=M.alternate,N!==null&&(N.lanes|=a),ku(M,a,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Sn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ms(i,a),d=qn(d),u=u(d),i.flags|=1,Sn(t,i,u,a),i.child;case 14:return u=i.type,d=ti(u,i.pendingProps),d=ti(u.type,d),ip(t,i,u,d,a);case 15:return rp(t,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),qo(t,i),i.tag=1,An(u)?(t=!0,Ro(i)):t=!1,Ms(i,a),$h(i,u,d),ec(i,u,d,a),rc(null,i,u,!0,t,a);case 19:return dp(t,i,a);case 22:return sp(t,i,a)}throw Error(n(156,i.tag))};function Fp(t,i){return uo(t,i)}function dg(t,i,a,u){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,a,u){return new dg(t,i,a,u)}function Tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hg(t){if(typeof t=="function")return Tc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Y)return 11;if(t===se)return 14}return 2}function gr(t,i){var a=t.alternate;return a===null?(a=Kn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function rl(t,i,a,u,d,m){var M=2;if(u=t,typeof t=="function")Tc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case O:return Gr(a.children,d,m,i);case X:M=8,d|=8;break;case C:return t=Kn(12,a,i,d|2),t.elementType=C,t.lanes=m,t;case $:return t=Kn(13,a,i,d),t.elementType=$,t.lanes=m,t;case ue:return t=Kn(19,a,i,d),t.elementType=ue,t.lanes=m,t;case he:return sl(a,d,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:M=10;break e;case F:M=9;break e;case Y:M=11;break e;case se:M=14;break e;case de:M=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(M,a,i,d),i.elementType=t,i.type=u,i.lanes=m,i}function Gr(t,i,a,u){return t=Kn(7,t,u,i),t.lanes=a,t}function sl(t,i,a,u){return t=Kn(22,t,u,i),t.elementType=he,t.lanes=a,t.stateNode={isHidden:!1},t}function wc(t,i,a){return t=Kn(6,t,null,i),t.lanes=a,t}function bc(t,i,a){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function pg(t,i,a,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=It(0),this.expirationTimes=It(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=It(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ac(t,i,a,u,d,m,M,N,z){return t=new pg(t,i,a,N,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Kn(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(m),t}function mg(t,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:u==null?null:""+u,children:t,containerInfo:i,implementation:a}}function Op(t){if(!t)return lr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(An(a))return fh(t,a,i)}return i}function kp(t,i,a,u,d,m,M,N,z){return t=Ac(a,u,!0,t,d,m,M,N,z),t.context=Op(null),a=t.current,u=Mn(),d=mr(a),m=Ci(u,d),m.callback=i??null,fr(a,m,d),t.current.lanes=d,Kt(t,d,u),Pn(t,u),t}function al(t,i,a,u){var d=i.current,m=Mn(),M=mr(d);return a=Op(a),i.context===null?i.context=a:i.pendingContext=a,i=Ci(m,M),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=fr(d,i,M),t!==null&&(ri(t,d,M,m),Oo(t,d,M)),M}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Cc(t,i){Bp(t,i),(t=t.alternate)&&Bp(t,i)}function xg(){return null}var zp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rc(t){this._internalRoot=t}ll.prototype.render=Rc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));al(t,i,null,null)},ll.prototype.unmount=Rc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;zr(function(){al(null,t,null,null)}),i[Ei]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ed();t={blockedOn:null,target:t,priority:i};for(var a=0;a<ir.length&&i!==0&&i<ir[a].priority;a++);ir.splice(a,0,t),a===0&&bd(t)}};function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function gg(t,i,a,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ie=ol(M);m.call(ie)}}var M=kp(i,u,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=M,t[Ei]=M.current,xa(t.nodeType===8?t.parentNode:t),zr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var N=u;u=function(){var ie=ol(z);N.call(ie)}}var z=Ac(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=z,t[Ei]=z.current,xa(t.nodeType===8?t.parentNode:t),zr(function(){al(i,z,a,u)}),z}function cl(t,i,a,u,d){var m=a._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var N=d;d=function(){var z=ol(M);N.call(z)}}al(i,M,t,d)}else M=gg(a,i,t,d,u);return ol(M)}di=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Pt(i.pendingLanes);a!==0&&(Jt(i,a|1),Pn(i,Z()),(St&6)===0&&(As=Z()+500,ur()))}break;case 13:zr(function(){var u=Ai(t,1);if(u!==null){var d=Mn();ri(u,t,1,d)}}),Cc(t,1)}},tu=function(t){if(t.tag===13){var i=Ai(t,134217728);if(i!==null){var a=Mn();ri(i,t,134217728,a)}Cc(t,134217728)}},Md=function(t){if(t.tag===13){var i=mr(t),a=Ai(t,i);if(a!==null){var u=Mn();ri(a,t,i,u)}Cc(t,i)}},Ed=function(){return ct},Td=function(t,i){var a=ct;try{return ct=t,i()}finally{ct=a}},Re=function(t,i,a){switch(i){case"input":if(mt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==t&&u.form===t.form){var d=Ao(u);if(!d)throw Error(n(90));$t(u),mt(u,d)}}}break;case"textarea":T(t,a);break;case"select":i=a.value,i!=null&&qe(t,!!a.multiple,i,!1)}},lt=Sc,Dt=zr;var vg={usingClientEntryPoint:!1,Events:[_a,ps,Ao,me,Ve,Sc]},Na={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_g={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=oo(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||xg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{tt=fl.inject(_g),Ke=fl}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vg,Ln.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(i))throw Error(n(200));return mg(t,i,null,a)},Ln.createRoot=function(t,i){if(!Pc(t))throw Error(n(299));var a=!1,u="",d=zp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ac(t,1,!1,null,null,a,!1,u,d),t[Ei]=i.current,xa(t.nodeType===8?t.parentNode:t),new Rc(i)},Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=oo(i),t=t===null?null:t.stateNode,t},Ln.flushSync=function(t){return zr(t)},Ln.hydrate=function(t,i,a){if(!ul(i))throw Error(n(200));return cl(null,t,i,!0,a)},Ln.hydrateRoot=function(t,i,a){if(!Pc(t))throw Error(n(405));var u=a!=null&&a.hydratedSources||null,d=!1,m="",M=zp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=kp(i,null,t,1,a??null,d,!1,m,M),t[Ei]=i.current,xa(t),u)for(t=0;t<u.length;t++)a=u[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ll(i)},Ln.render=function(t,i,a){if(!ul(i))throw Error(n(200));return cl(null,t,i,!1,a)},Ln.unmountComponentAtNode=function(t){if(!ul(t))throw Error(n(40));return t._reactRootContainer?(zr(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},Ln.unstable_batchedUpdates=Sc,Ln.unstable_renderSubtreeIntoContainer=function(t,i,a,u){if(!ul(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return cl(t,i,a,!1,u)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var $p;function Ag(){if($p)return Nc.exports;$p=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nc.exports=bg(),Nc.exports}var Kp;function Cg(){if(Kp)return dl;Kp=1;var r=Ag();return dl.createRoot=r.createRoot,dl.hydrateRoot=r.hydrateRoot,dl}var Rg=Cg();/**
 * react-router v7.9.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zp="popstate";function Pg(r={}){function e(s,o){let{pathname:l,search:c,hash:f}=s.location;return mf("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:Wa(o)}return Dg(e,n,null,r)}function Wt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function yi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Lg(){return Math.random().toString(36).substring(2,10)}function Qp(r,e){return{usr:r.state,key:r.key,idx:e}}function mf(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ks(e):e,state:n,key:e&&e.key||s||Lg()}}function Wa({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function Ks(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function Dg(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,f="POP",h=null,p=x();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function x(){return(c.state||{idx:null}).idx}function g(){f="POP";let y=x(),v=y==null?null:y-p;p=y,h&&h({action:f,location:w.location,delta:v})}function _(y,v){f="PUSH";let P=mf(w.location,y,v);p=x()+1;let R=Qp(P,p),U=w.createHref(P);try{c.pushState(R,"",U)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;o.location.assign(U)}l&&h&&h({action:f,location:w.location,delta:1})}function S(y,v){f="REPLACE";let P=mf(w.location,y,v);p=x();let R=Qp(P,p),U=w.createHref(P);c.replaceState(R,"",U),l&&h&&h({action:f,location:w.location,delta:0})}function E(y){return Ng(y)}let w={get action(){return f},get location(){return r(o,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Zp,g),h=y,()=>{o.removeEventListener(Zp,g),h=null}},createHref(y){return e(o,y)},createURL:E,encodeLocation(y){let v=E(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:_,replace:S,go(y){return c.go(y)}};return w}function Ng(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Wt(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Wa(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function Zm(r,e,n="/"){return Ug(r,e,n,!1)}function Ug(r,e,n,s){let o=typeof e=="string"?Ks(e):e,l=Xi(o.pathname||"/",n);if(l==null)return null;let c=Qm(r);Ig(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=jg(l);f=Wg(c[h],p,s)}return f}function Qm(r,e=[],n=[],s="",o=!1){let l=(c,f,h=o,p)=>{let x={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&h)return;Wt(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let g=Hi([s,x.relativePath]),_=n.concat(x);c.children&&c.children.length>0&&(Wt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Qm(c.children,e,_,g,h)),!(c.path==null&&!c.index)&&e.push({path:g,score:Hg(g,c.index),routesMeta:_})};return r.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,f);else for(let p of Jm(c.path))l(c,f,!0,p)}),e}function Jm(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=Jm(s.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...c),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function Ig(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:Gg(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var Fg=/^:[\w-]+$/,Og=3,kg=2,Bg=1,zg=10,Vg=-2,Jp=r=>r==="*";function Hg(r,e){let n=r.split("/"),s=n.length;return n.some(Jp)&&(s+=Vg),e&&(s+=kg),n.filter(o=>!Jp(o)).reduce((o,l)=>o+(Fg.test(l)?Og:l===""?Bg:zg),s)}function Gg(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Wg(r,e,n=!1){let{routesMeta:s}=r,o={},l="/",c=[];for(let f=0;f<s.length;++f){let h=s[f],p=f===s.length-1,x=l==="/"?e:e.slice(l.length)||"/",g=Gl({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},x),_=h.route;if(!g&&p&&n&&!s[s.length-1].route.index&&(g=Gl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},x)),!g)return null;Object.assign(o,g.params),c.push({params:o,pathname:Hi([l,g.pathname]),pathnameBase:Kg(Hi([l,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(l=Hi([l,g.pathnameBase]))}return c}function Gl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=Xg(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((p,{paramName:x,isOptional:g},_)=>{if(x==="*"){let E=f[_]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[_];return g&&!S?p[x]=void 0:p[x]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function Xg(r,e=!1,n=!0){yi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(s.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function jg(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return yi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Xi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function qg(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?Ks(r):r;return{pathname:n?n.startsWith("/")?n:Yg(n,e):e,search:Zg(s),hash:Qg(o)}}function Yg(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Fc(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $g(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function e0(r){let e=$g(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function t0(r,e,n,s=!1){let o;typeof r=="string"?o=Ks(r):(o={...r},Wt(!o.pathname||!o.pathname.includes("?"),Fc("?","pathname","search",o)),Wt(!o.pathname||!o.pathname.includes("#"),Fc("#","pathname","hash",o)),Wt(!o.search||!o.search.includes("#"),Fc("#","search","hash",o)));let l=r===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=n;else{let g=e.length-1;if(!s&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),g-=1;o.pathname=_.join("/")}f=g>=0?e[g]:"/"}let h=qg(o,f),p=c&&c!=="/"&&c.endsWith("/"),x=(l||c===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||x)&&(h.pathname+="/"),h}var Hi=r=>r.join("/").replace(/\/\/+/g,"/"),Kg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Zg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Qg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Jg(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var n0=["POST","PUT","PATCH","DELETE"];new Set(n0);var ev=["GET",...n0];new Set(ev);var Zs=oe.createContext(null);Zs.displayName="DataRouter";var ql=oe.createContext(null);ql.displayName="DataRouterState";oe.createContext(!1);var i0=oe.createContext({isTransitioning:!1});i0.displayName="ViewTransition";var tv=oe.createContext(new Map);tv.displayName="Fetchers";var nv=oe.createContext(null);nv.displayName="Await";var Mi=oe.createContext(null);Mi.displayName="Navigation";var Ka=oe.createContext(null);Ka.displayName="Location";var $i=oe.createContext({outlet:null,matches:[],isDataRoute:!1});$i.displayName="Route";var od=oe.createContext(null);od.displayName="RouteError";function iv(r,{relative:e}={}){Wt(Za(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=oe.useContext(Mi),{hash:o,pathname:l,search:c}=Qa(r,{relative:e}),f=l;return n!=="/"&&(f=l==="/"?n:Hi([n,l])),s.createHref({pathname:f,search:c,hash:o})}function Za(){return oe.useContext(Ka)!=null}function Rr(){return Wt(Za(),"useLocation() may be used only in the context of a <Router> component."),oe.useContext(Ka).location}var r0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function s0(r){oe.useContext(Mi).static||oe.useLayoutEffect(r)}function rv(){let{isDataRoute:r}=oe.useContext($i);return r?gv():sv()}function sv(){Wt(Za(),"useNavigate() may be used only in the context of a <Router> component.");let r=oe.useContext(Zs),{basename:e,navigator:n}=oe.useContext(Mi),{matches:s}=oe.useContext($i),{pathname:o}=Rr(),l=JSON.stringify(e0(s)),c=oe.useRef(!1);return s0(()=>{c.current=!0}),oe.useCallback((h,p={})=>{if(yi(c.current,r0),!c.current)return;if(typeof h=="number"){n.go(h);return}let x=t0(h,JSON.parse(l),o,p.relative==="path");r==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:Hi([e,x.pathname])),(p.replace?n.replace:n.push)(x,p.state,p)},[e,n,l,o,r])}oe.createContext(null);function Qa(r,{relative:e}={}){let{matches:n}=oe.useContext($i),{pathname:s}=Rr(),o=JSON.stringify(e0(n));return oe.useMemo(()=>t0(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function av(r,e){return a0(r,e)}function a0(r,e,n,s,o){var P;Wt(Za(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=oe.useContext(Mi),{matches:c}=oe.useContext($i),f=c[c.length-1],h=f?f.params:{},p=f?f.pathname:"/",x=f?f.pathnameBase:"/",g=f&&f.route;{let R=g&&g.path||"";o0(p,!g||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let _=Rr(),S;if(e){let R=typeof e=="string"?Ks(e):e;Wt(x==="/"||((P=R.pathname)==null?void 0:P.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${R.pathname}" was given in the \`location\` prop.`),S=R}else S=_;let E=S.pathname||"/",w=E;if(x!=="/"){let R=x.replace(/^\//,"").split("/");w="/"+E.replace(/^\//,"").split("/").slice(R.length).join("/")}let y=Zm(r,{pathname:w});yi(g||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),yi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=fv(y&&y.map(R=>Object.assign({},R,{params:Object.assign({},h,R.params),pathname:Hi([x,l.encodeLocation?l.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?x:Hi([x,l.encodeLocation?l.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),c,n,s,o);return e&&v?oe.createElement(Ka.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},v):v}function ov(){let r=xv(),e=Jg(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=oe.createElement(oe.Fragment,null,oe.createElement("p",null,"💿 Hey developer 👋"),oe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",oe.createElement("code",{style:l},"ErrorBoundary")," or"," ",oe.createElement("code",{style:l},"errorElement")," prop on your route.")),oe.createElement(oe.Fragment,null,oe.createElement("h2",null,"Unexpected Application Error!"),oe.createElement("h3",{style:{fontStyle:"italic"}},e),n?oe.createElement("pre",{style:o},n):null,c)}var lv=oe.createElement(ov,null),uv=class extends oe.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.unstable_onError?this.props.unstable_onError(r,e):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?oe.createElement($i.Provider,{value:this.props.routeContext},oe.createElement(od.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function cv({routeContext:r,match:e,children:n}){let s=oe.useContext(Zs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),oe.createElement($i.Provider,{value:r},n)}function fv(r,e=[],n=null,s=null,o=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let l=r,c=n==null?void 0:n.errors;if(c!=null){let p=l.findIndex(x=>x.route.id&&(c==null?void 0:c[x.route.id])!==void 0);Wt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(n)for(let p=0;p<l.length;p++){let x=l[p];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(h=p),x.route.id){let{loaderData:g,errors:_}=n,S=x.route.loader&&!g.hasOwnProperty(x.route.id)&&(!_||_[x.route.id]===void 0);if(x.route.lazy||S){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,x,g)=>{let _,S=!1,E=null,w=null;n&&(_=c&&x.route.id?c[x.route.id]:void 0,E=x.route.errorElement||lv,f&&(h<0&&g===0?(o0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,w=null):h===g&&(S=!0,w=x.route.hydrateFallbackElement||null)));let y=e.concat(l.slice(0,g+1)),v=()=>{let P;return _?P=E:S?P=w:x.route.Component?P=oe.createElement(x.route.Component,null):x.route.element?P=x.route.element:P=p,oe.createElement(cv,{match:x,routeContext:{outlet:p,matches:y,isDataRoute:n!=null},children:P})};return n&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?oe.createElement(uv,{location:n.location,revalidation:n.revalidation,component:E,error:_,children:v(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:s}):v()},null)}function ld(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dv(r){let e=oe.useContext(Zs);return Wt(e,ld(r)),e}function hv(r){let e=oe.useContext(ql);return Wt(e,ld(r)),e}function pv(r){let e=oe.useContext($i);return Wt(e,ld(r)),e}function ud(r){let e=pv(r),n=e.matches[e.matches.length-1];return Wt(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function mv(){return ud("useRouteId")}function xv(){var s;let r=oe.useContext(od),e=hv("useRouteError"),n=ud("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[n]}function gv(){let{router:r}=dv("useNavigate"),e=ud("useNavigate"),n=oe.useRef(!1);return s0(()=>{n.current=!0}),oe.useCallback(async(o,l={})=>{yi(n.current,r0),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var em={};function o0(r,e,n){!e&&!em[r]&&(em[r]=!0,yi(!1,n))}oe.memo(vv);function vv({routes:r,future:e,state:n,unstable_onError:s}){return a0(r,void 0,n,s,e)}function Ha(r){Wt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _v({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:l=!1}){Wt(!Za(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=oe.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof n=="string"&&(n=Ks(n));let{pathname:h="/",search:p="",hash:x="",state:g=null,key:_="default"}=n,S=oe.useMemo(()=>{let E=Xi(h,c);return E==null?null:{location:{pathname:E,search:p,hash:x,state:g,key:_},navigationType:s}},[c,h,p,x,g,_,s]);return yi(S!=null,`<Router basename="${c}"> is not able to match the URL "${h}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:oe.createElement(Mi.Provider,{value:f},oe.createElement(Ka.Provider,{children:e,value:S}))}function yv({children:r,location:e}){return av(xf(r),e)}function xf(r,e=[]){let n=[];return oe.Children.forEach(r,(s,o)=>{if(!oe.isValidElement(s))return;let l=[...e,o];if(s.type===oe.Fragment){n.push.apply(n,xf(s.props.children,l));return}Wt(s.type===Ha,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Wt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=xf(s.props.children,l)),n.push(c)}),n}var Il="get",Fl="application/x-www-form-urlencoded";function Yl(r){return r!=null&&typeof r.tagName=="string"}function Sv(r){return Yl(r)&&r.tagName.toLowerCase()==="button"}function Mv(r){return Yl(r)&&r.tagName.toLowerCase()==="form"}function Ev(r){return Yl(r)&&r.tagName.toLowerCase()==="input"}function Tv(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function wv(r,e){return r.button===0&&(!e||e==="_self")&&!Tv(r)}var hl=null;function bv(){if(hl===null)try{new FormData(document.createElement("form"),0),hl=!1}catch{hl=!0}return hl}var Av=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Oc(r){return r!=null&&!Av.has(r)?(yi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fl}"`),null):r}function Cv(r,e){let n,s,o,l,c;if(Mv(r)){let f=r.getAttribute("action");s=f?Xi(f,e):null,n=r.getAttribute("method")||Il,o=Oc(r.getAttribute("enctype"))||Fl,l=new FormData(r)}else if(Sv(r)||Ev(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||f.getAttribute("action");if(s=h?Xi(h,e):null,n=r.getAttribute("formmethod")||f.getAttribute("method")||Il,o=Oc(r.getAttribute("formenctype"))||Oc(f.getAttribute("enctype"))||Fl,l=new FormData(f,r),!bv()){let{name:p,type:x,value:g}=r;if(x==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,g)}}else{if(Yl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Il,s=null,o=Fl,c=r}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Rv(r,e,n){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&Xi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function Pv(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lv(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Dv(r,e,n){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await Pv(l,n);return c.links?c.links():[]}return[]}));return Fv(s.flat(1).filter(Lv).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function tm(r,e,n,s,o,l){let c=(h,p)=>n[p]?h.route.id!==n[p].route.id:!0,f=(h,p)=>{var x;return n[p].pathname!==h.pathname||((x=n[p].route.path)==null?void 0:x.endsWith("*"))&&n[p].params["*"]!==h.params["*"]};return l==="assets"?e.filter((h,p)=>c(h,p)||f(h,p)):l==="data"?e.filter((h,p)=>{var g;let x=s.routes[h.route.id];if(!x||!x.hasLoader)return!1;if(c(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let _=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((g=n[0])==null?void 0:g.params)||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Nv(r,e,{includeHydrateFallback:n}={}){return Uv(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Uv(r){return[...new Set(r)]}function Iv(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function Fv(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(Iv(o));return n.has(l)||(n.add(l),s.push({key:l,link:o})),s},[])}function l0(){let r=oe.useContext(Zs);return cd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Ov(){let r=oe.useContext(ql);return cd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var fd=oe.createContext(void 0);fd.displayName="FrameworkContext";function u0(){let r=oe.useContext(fd);return cd(r,"You must render this element inside a <HydratedRouter> element"),r}function kv(r,e){let n=oe.useContext(fd),[s,o]=oe.useState(!1),[l,c]=oe.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=e,_=oe.useRef(null);oe.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let w=v=>{v.forEach(P=>{c(P.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[r]),oe.useEffect(()=>{if(s){let w=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(w)}}},[s]);let S=()=>{o(!0)},E=()=>{o(!1),c(!1)};return n?r!=="intent"?[l,_,{}]:[l,_,{onFocus:Ia(f,S),onBlur:Ia(h,E),onMouseEnter:Ia(p,S),onMouseLeave:Ia(x,E),onTouchStart:Ia(g,S)}]:[!1,_,{}]}function Ia(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function Bv({page:r,...e}){let{router:n}=l0(),s=oe.useMemo(()=>Zm(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?oe.createElement(Vv,{page:r,matches:s,...e}):null}function zv(r){let{manifest:e,routeModules:n}=u0(),[s,o]=oe.useState([]);return oe.useEffect(()=>{let l=!1;return Dv(r,e,n).then(c=>{l||o(c)}),()=>{l=!0}},[r,e,n]),s}function Vv({page:r,matches:e,...n}){let s=Rr(),{manifest:o,routeModules:l}=u0(),{basename:c}=l0(),{loaderData:f,matches:h}=Ov(),p=oe.useMemo(()=>tm(r,e,h,o,s,"data"),[r,e,h,o,s]),x=oe.useMemo(()=>tm(r,e,h,o,s,"assets"),[r,e,h,o,s]),g=oe.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,w=!1;if(e.forEach(v=>{var R;let P=o.routes[v.route.id];!P||!P.hasLoader||(!p.some(U=>U.route.id===v.route.id)&&v.route.id in f&&((R=l[v.route.id])!=null&&R.shouldRevalidate)||P.hasClientLoader?w=!0:E.add(v.route.id))}),E.size===0)return[];let y=Rv(r,c,"data");return w&&E.size>0&&y.searchParams.set("_routes",e.filter(v=>E.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[c,f,s,o,p,e,r,l]),_=oe.useMemo(()=>Nv(x,o),[x,o]),S=zv(x);return oe.createElement(oe.Fragment,null,g.map(E=>oe.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...n})),_.map(E=>oe.createElement("link",{key:E,rel:"modulepreload",href:E,...n})),S.map(({key:E,link:w})=>oe.createElement("link",{key:E,nonce:n.nonce,...w})))}function Hv(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var c0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{c0&&(window.__reactRouterVersion="7.9.5")}catch{}function Gv({basename:r,children:e,window:n}){let s=oe.useRef();s.current==null&&(s.current=Pg({window:n,v5Compat:!0}));let o=s.current,[l,c]=oe.useState({action:o.action,location:o.location}),f=oe.useCallback(h=>{oe.startTransition(()=>c(h))},[c]);return oe.useLayoutEffect(()=>o.listen(f),[o,f]),oe.createElement(_v,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:o})}var f0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ki=oe.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,state:f,target:h,to:p,preventScrollReset:x,viewTransition:g,..._},S){let{basename:E}=oe.useContext(Mi),w=typeof p=="string"&&f0.test(p),y,v=!1;if(typeof p=="string"&&w&&(y=p,c0))try{let C=new URL(window.location.href),b=p.startsWith("//")?new URL(C.protocol+p):new URL(p),F=Xi(b.pathname,E);b.origin===C.origin&&F!=null?p=F+b.search+b.hash:v=!0}catch{yi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let P=iv(p,{relative:o}),[R,U,V]=kv(s,_),D=qv(p,{replace:c,state:f,target:h,preventScrollReset:x,relative:o,viewTransition:g});function O(C){e&&e(C),C.defaultPrevented||D(C)}let X=oe.createElement("a",{..._,...V,href:y||P,onClick:v||l?e:O,ref:Hv(S,U),target:h,"data-discover":!w&&n==="render"?"true":void 0});return R&&!w?oe.createElement(oe.Fragment,null,X,oe.createElement(Bv,{page:P})):X});ki.displayName="Link";var Wv=oe.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:f,children:h,...p},x){let g=Qa(c,{relative:p.relative}),_=Rr(),S=oe.useContext(ql),{navigator:E,basename:w}=oe.useContext(Mi),y=S!=null&&Qv(g)&&f===!0,v=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,P=_.pathname,R=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(P=P.toLowerCase(),R=R?R.toLowerCase():null,v=v.toLowerCase()),R&&w&&(R=Xi(R,w)||R);const U=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let V=P===v||!o&&P.startsWith(v)&&P.charAt(U)==="/",D=R!=null&&(R===v||!o&&R.startsWith(v)&&R.charAt(v.length)==="/"),O={isActive:V,isPending:D,isTransitioning:y},X=V?e:void 0,C;typeof s=="function"?C=s(O):C=[s,V?"active":null,D?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let b=typeof l=="function"?l(O):l;return oe.createElement(ki,{...p,"aria-current":X,className:C,ref:x,style:b,to:c,viewTransition:f},typeof h=="function"?h(O):h)});Wv.displayName="NavLink";var Xv=oe.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:l,method:c=Il,action:f,onSubmit:h,relative:p,preventScrollReset:x,viewTransition:g,..._},S)=>{let E=Kv(),w=Zv(f,{relative:p}),y=c.toLowerCase()==="get"?"get":"post",v=typeof f=="string"&&f0.test(f),P=R=>{if(h&&h(R),R.defaultPrevented)return;R.preventDefault();let U=R.nativeEvent.submitter,V=(U==null?void 0:U.getAttribute("formmethod"))||c;E(U||R.currentTarget,{fetcherKey:e,method:V,navigate:n,replace:o,state:l,relative:p,preventScrollReset:x,viewTransition:g})};return oe.createElement("form",{ref:S,method:y,action:w,onSubmit:s?h:P,..._,"data-discover":!v&&r==="render"?"true":void 0})});Xv.displayName="Form";function jv(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d0(r){let e=oe.useContext(Zs);return Wt(e,jv(r)),e}function qv(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:l,viewTransition:c}={}){let f=rv(),h=Rr(),p=Qa(r,{relative:l});return oe.useCallback(x=>{if(wv(x,e)){x.preventDefault();let g=n!==void 0?n:Wa(h)===Wa(p);f(r,{replace:g,state:s,preventScrollReset:o,relative:l,viewTransition:c})}},[h,f,p,n,s,e,r,o,l,c])}var Yv=0,$v=()=>`__${String(++Yv)}__`;function Kv(){let{router:r}=d0("useSubmit"),{basename:e}=oe.useContext(Mi),n=mv();return oe.useCallback(async(s,o={})=>{let{action:l,method:c,encType:f,formData:h,body:p}=Cv(s,e);if(o.navigate===!1){let x=o.fetcherKey||$v();await r.fetch(x,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||c,formEncType:o.encType||f,flushSync:o.flushSync})}else await r.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||c,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function Zv(r,{relative:e}={}){let{basename:n}=oe.useContext(Mi),s=oe.useContext($i);Wt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...Qa(r||".",{relative:e})},c=Rr();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(x=>x==="")){f.delete("index"),h.filter(g=>g).forEach(g=>f.append("index",g));let x=f.toString();l.search=x?`?${x}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Hi([n,l.pathname])),Wa(l)}function Qv(r,{relative:e}={}){let n=oe.useContext(i0);Wt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=d0("useViewTransitionState"),o=Qa(r,{relative:e});if(!n.isTransitioning)return!1;let l=Xi(n.currentLocation.pathname,s)||n.currentLocation.pathname,c=Xi(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Gl(o.pathname,c)!=null||Gl(o.pathname,l)!=null}function Jv(){const r=Rr(),e=n=>r.pathname===n?"active":"";return H.jsx("nav",{className:"navigation",children:H.jsxs("div",{className:"nav-container",children:[H.jsxs(ki,{to:"/",className:"nav-logo",children:[H.jsx("span",{className:"logo-icon",children:"🎯"}),H.jsx("span",{className:"logo-text",children:"Motion Analysis"})]}),H.jsxs("div",{className:"nav-links",children:[H.jsx(ki,{to:"/",className:`nav-link ${e("/")}`,children:"Home"}),H.jsx(ki,{to:"/upload",className:`nav-link ${e("/upload")}`,children:"Upload"}),H.jsx(ki,{to:"/about",className:`nav-link ${e("/about")}`,children:"About"}),H.jsx(ki,{to:"/team",className:`nav-link ${e("/team")}`,children:"Team"})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="181",e_=0,nm=1,t_=2,h0=1,n_=2,Oi=3,Cr=0,Nn=1,Bi=2,Gi=0,Gs=1,im=2,rm=3,sm=4,i_=5,Zr=100,r_=101,s_=102,a_=103,o_=104,l_=200,u_=201,c_=202,f_=203,gf=204,vf=205,d_=206,h_=207,p_=208,m_=209,x_=210,g_=211,v_=212,__=213,y_=214,_f=0,yf=1,Sf=2,Xs=3,Mf=4,Ef=5,Tf=6,wf=7,p0=0,S_=1,M_=2,Ar=0,E_=1,T_=2,w_=3,b_=4,A_=5,C_=6,R_=7,m0=300,js=301,qs=302,bf=303,Af=304,$l=306,Cf=1e3,zi=1001,Rf=1002,Gn=1003,P_=1004,pl=1005,Qn=1006,kc=1007,Jr=1008,ji=1009,x0=1010,g0=1011,Xa=1012,hd=1013,ts=1014,Vi=1015,Qs=1016,pd=1017,md=1018,ja=1020,v0=35902,_0=35899,y0=1021,S0=1022,ci=1023,qa=1026,Ya=1027,M0=1028,xd=1029,gd=1030,vd=1031,_d=1033,Ol=33776,kl=33777,Bl=33778,zl=33779,Pf=35840,Lf=35841,Df=35842,Nf=35843,Uf=36196,If=37492,Ff=37496,Of=37808,kf=37809,Bf=37810,zf=37811,Vf=37812,Hf=37813,Gf=37814,Wf=37815,Xf=37816,jf=37817,qf=37818,Yf=37819,$f=37820,Kf=37821,Zf=36492,Qf=36494,Jf=36495,ed=36283,td=36284,nd=36285,id=36286,L_=3200,D_=3201,N_=0,U_=1,wr="",Hn="srgb",Ys="srgb-linear",Wl="linear",Nt="srgb",Rs=7680,am=519,I_=512,F_=513,O_=514,E0=515,k_=516,B_=517,z_=518,V_=519,om=35044,lm="300 es",vi=2e3,Xl=2001;function T0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function jl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function H_(){const r=jl("canvas");return r.style.display="block",r}const um={};function cm(...r){const e="THREE."+r.shift();console.log(e,...r)}function dt(...r){const e="THREE."+r.shift();console.warn(e,...r)}function qt(...r){const e="THREE."+r.shift();console.error(e,...r)}function $a(...r){const e=r.join(" ");e in um||(um[e]=!0,dt(...r))}function G_(r,e,n){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:s()}}setTimeout(l,n)})}class Js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const s=n[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,rd=180/Math.PI;function Ja(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]).toLowerCase()}function yt(r,e,n){return Math.max(e,Math.min(n,r))}function W_(r,e){return(r%e+e)%e}function zc(r,e,n){return(1-n)*r+n*e}function Fa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,n=0){Mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,o=e.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),o=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class eo{constructor(e=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=o}static slerpFlat(e,n,s,o,l,c,f){let h=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3],_=l[c+0],S=l[c+1],E=l[c+2],w=l[c+3];if(f<=0){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=g;return}if(f>=1){e[n+0]=_,e[n+1]=S,e[n+2]=E,e[n+3]=w;return}if(g!==w||h!==_||p!==S||x!==E){let y=h*_+p*S+x*E+g*w;y<0&&(_=-_,S=-S,E=-E,w=-w,y=-y);let v=1-f;if(y<.9995){const P=Math.acos(y),R=Math.sin(P);v=Math.sin(v*P)/R,f=Math.sin(f*P)/R,h=h*v+_*f,p=p*v+S*f,x=x*v+E*f,g=g*v+w*f}else{h=h*v+_*f,p=p*v+S*f,x=x*v+E*f,g=g*v+w*f;const P=1/Math.sqrt(h*h+p*p+x*x+g*g);h*=P,p*=P,x*=P,g*=P}}e[n]=h,e[n+1]=p,e[n+2]=x,e[n+3]=g}static multiplyQuaternionsFlat(e,n,s,o,l,c){const f=s[o],h=s[o+1],p=s[o+2],x=s[o+3],g=l[c],_=l[c+1],S=l[c+2],E=l[c+3];return e[n]=f*E+x*g+h*S-p*_,e[n+1]=h*E+x*_+p*g-f*S,e[n+2]=p*E+x*S+f*_-h*g,e[n+3]=x*E-f*g-h*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,o){return this._x=e,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(s/2),x=f(o/2),g=f(l/2),_=h(s/2),S=h(o/2),E=h(l/2);switch(c){case"XYZ":this._x=_*x*g+p*S*E,this._y=p*S*g-_*x*E,this._z=p*x*E+_*S*g,this._w=p*x*g-_*S*E;break;case"YXZ":this._x=_*x*g+p*S*E,this._y=p*S*g-_*x*E,this._z=p*x*E-_*S*g,this._w=p*x*g+_*S*E;break;case"ZXY":this._x=_*x*g-p*S*E,this._y=p*S*g+_*x*E,this._z=p*x*E+_*S*g,this._w=p*x*g-_*S*E;break;case"ZYX":this._x=_*x*g-p*S*E,this._y=p*S*g+_*x*E,this._z=p*x*E-_*S*g,this._w=p*x*g+_*S*E;break;case"YZX":this._x=_*x*g+p*S*E,this._y=p*S*g+_*x*E,this._z=p*x*E-_*S*g,this._w=p*x*g-_*S*E;break;case"XZY":this._x=_*x*g-p*S*E,this._y=p*S*g-_*x*E,this._z=p*x*E+_*S*g,this._w=p*x*g+_*S*E;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],o=n[4],l=n[8],c=n[1],f=n[5],h=n[9],p=n[2],x=n[6],g=n[10],_=s+f+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(x-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(s>f&&s>g){const S=2*Math.sqrt(1+s-f-g);this._w=(x-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>g){const S=2*Math.sqrt(1+f-s-g);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+x)/S}else{const S=2*Math.sqrt(1+g-s-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,o=e._y,l=e._z,c=e._w,f=n._x,h=n._y,p=n._z,x=n._w;return this._x=s*x+c*f+o*p-l*h,this._y=o*x+c*h+l*f-s*p,this._z=l*x+c*p+s*h-o*f,this._w=c*x-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let s=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,c=-c,f=-f);let h=1-n;if(f<.9995){const p=Math.acos(f),x=Math.sin(p);h=Math.sin(h*p)/x,n=Math.sin(n*p)/x,this._x=this._x*h+s*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+c*n,this._onChangeCallback()}else this._x=this._x*h+s*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+c*n,this.normalize();return this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,n=0,s=0){ce.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6]*o,this.y=l[1]*n+l[4]*s+l[7]*o,this.z=l[2]*n+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*n+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*n+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*n+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const n=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*s),x=2*(f*n-l*o),g=2*(l*s-c*n);return this.x=n+h*p+c*g-f*x,this.y=s+h*x+f*p-l*g,this.z=o+h*g+l*x-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*s+l[8]*o,this.y=l[1]*n+l[5]*s+l[9]*o,this.z=l[2]*n+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,o=e.y,l=e.z,c=n.x,f=n.y,h=n.z;return this.x=o*h-l*f,this.y=l*c-s*h,this.z=s*f-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return n*n+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const o=Math.sin(n)*e;return this.x=o*Math.sin(s),this.y=Math.cos(n)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new ce,fm=new eo;class pt{constructor(e,n,s,o,l,c,f,h,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,o,l,c,f,h,p)}set(e,n,s,o,l,c,f,h,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=n,x[4]=l,x[5]=h,x[6]=s,x[7]=c,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,l=this.elements,c=s[0],f=s[3],h=s[6],p=s[1],x=s[4],g=s[7],_=s[2],S=s[5],E=s[8],w=o[0],y=o[3],v=o[6],P=o[1],R=o[4],U=o[7],V=o[2],D=o[5],O=o[8];return l[0]=c*w+f*P+h*V,l[3]=c*y+f*R+h*D,l[6]=c*v+f*U+h*O,l[1]=p*w+x*P+g*V,l[4]=p*y+x*R+g*D,l[7]=p*v+x*U+g*O,l[2]=_*w+S*P+E*V,l[5]=_*y+S*R+E*D,l[8]=_*v+S*U+E*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],x=e[8];return n*c*x-n*f*p-s*l*x+s*f*h+o*l*p-o*c*h}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],x=e[8],g=x*c-f*p,_=f*h-x*l,S=p*l-c*h,E=n*g+s*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=g*w,e[1]=(o*p-x*s)*w,e[2]=(f*s-o*c)*w,e[3]=_*w,e[4]=(x*n-o*h)*w,e[5]=(o*l-f*n)*w,e[6]=S*w,e[7]=(s*h-p*n)*w,e[8]=(c*n-s*l)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Hc.makeScale(e,n)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new pt,dm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X_(){const r={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Nt&&(o.r=Wi(o.r),o.g=Wi(o.g),o.b=Wi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(o.r=Ws(o.r),o.g=Ws(o.g),o.b=Ws(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===wr?Wl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return $a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return $a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ys]:{primaries:e,whitePoint:s,transfer:Wl,toXYZ:dm,fromXYZ:hm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:s,transfer:Nt,toXYZ:dm,fromXYZ:hm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),r}const bt=X_();function Wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ps;class j_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ps===void 0&&(Ps=jl("canvas")),Ps.width=e.width,Ps.height=e.height;const o=Ps.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Ps}return s.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Wi(l[c]/255)*255;return s.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Wi(n[s]/255)*255):n[s]=Wi(n[s]);return{data:n,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q_=0;class yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Gc(o[c].image)):l.push(Gc(o[c]))}else l=Gc(o);s.url=l}return n||(e.images[this.uuid]=s),s}}function Gc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?j_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let Y_=0;const Wc=new ce;class Tn extends Js{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,s=zi,o=zi,l=Qn,c=Jr,f=ci,h=ji,p=Tn.DEFAULT_ANISOTROPY,x=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Ja(),this.name="",this.source=new yd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const s=e[n];if(s===void 0){dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){dt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=m0;Tn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,n=0,s=0,o=1){Yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,o){return this.x=e,this.y=n,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*n+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*n+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*n+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,o,l;const h=e.elements,p=h[0],x=h[4],g=h[8],_=h[1],S=h[5],E=h[9],w=h[2],y=h[6],v=h[10];if(Math.abs(x-_)<.01&&Math.abs(g-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(g+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(p+1)/2,U=(S+1)/2,V=(v+1)/2,D=(x+_)/4,O=(g+w)/4,X=(E+y)/4;return R>U&&R>V?R<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(R),o=D/s,l=O/s):U>V?U<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(U),s=D/o,l=X/o):V<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),s=O/l,o=X/l),this.set(s,o,l,n),this}let P=Math.sqrt((y-E)*(y-E)+(g-w)*(g-w)+(_-x)*(_-x));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(g-w)/P,this.z=(_-x)/P,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $_ extends Js{constructor(e=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=s.depth,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n);const o={width:e,height:n,depth:s.depth},l=new Tn(o);this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new yd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends $_{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class w0 extends Tn{constructor(e=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class K_ extends Tn{constructor(e=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,si):si.fromBufferAttribute(l,c),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ml.copy(s.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),xl.subVectors(this.max,Oa),Ls.subVectors(e.a,Oa),Ds.subVectors(e.b,Oa),Ns.subVectors(e.c,Oa),_r.subVectors(Ds,Ls),yr.subVectors(Ns,Ds),Wr.subVectors(Ls,Ns);let n=[0,-_r.z,_r.y,0,-yr.z,yr.y,0,-Wr.z,Wr.y,_r.z,0,-_r.x,yr.z,0,-yr.x,Wr.z,0,-Wr.x,-_r.y,_r.x,0,-yr.y,yr.x,0,-Wr.y,Wr.x,0];return!Xc(n,Ls,Ds,Ns,xl)||(n=[1,0,0,0,1,0,0,0,1],!Xc(n,Ls,Ds,Ns,xl))?!1:(gl.crossVectors(_r,yr),n=[gl.x,gl.y,gl.z],Xc(n,Ls,Ds,Ns,xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],si=new ce,ml=new to,Ls=new ce,Ds=new ce,Ns=new ce,_r=new ce,yr=new ce,Wr=new ce,Oa=new ce,xl=new ce,gl=new ce,Xr=new ce;function Xc(r,e,n,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){Xr.fromArray(r,l);const f=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),h=e.dot(Xr),p=n.dot(Xr),x=s.dot(Xr);if(Math.max(-Math.max(h,p,x),Math.min(h,p,x))>f)return!1}return!0}const Z_=new to,ka=new ce,jc=new ce;class Sd{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):Z_.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const n=ka.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(ka,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(jc)),this.expandByPoint(ka.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Di=new ce,qc=new ce,vl=new ce,Sr=new ce,Yc=new ce,_l=new ce,$c=new ce;class Q_{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,s,o){qc.copy(e).add(n).multiplyScalar(.5),vl.copy(n).sub(e).normalize(),Sr.copy(this.origin).sub(qc);const l=e.distanceTo(n)*.5,c=-this.direction.dot(vl),f=Sr.dot(this.direction),h=-Sr.dot(vl),p=Sr.lengthSq(),x=Math.abs(1-c*c);let g,_,S,E;if(x>0)if(g=c*h-f,_=c*f-h,E=l*x,g>=0)if(_>=-E)if(_<=E){const w=1/x;g*=w,_*=w,S=g*(g+c*_+2*f)+_*(c*g+_+2*h)+p}else _=l,g=Math.max(0,-(c*_+f)),S=-g*g+_*(_+2*h)+p;else _=-l,g=Math.max(0,-(c*_+f)),S=-g*g+_*(_+2*h)+p;else _<=-E?(g=Math.max(0,-(-c*l+f)),_=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+_*(_+2*h)+p):_<=E?(g=0,_=Math.min(Math.max(-l,-h),l),S=_*(_+2*h)+p):(g=Math.max(0,-(c*l+f)),_=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+_*(_+2*h)+p);else _=c>0?-l:l,g=Math.max(0,-(c*_+f)),S=-g*g+_*(_+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(qc).addScaledVector(vl,_),S}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const s=Di.dot(this.direction),o=Di.dot(Di)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,o,l,c,f,h;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),x>=0?(l=(e.min.y-_.y)*x,c=(e.max.y-_.y)*x):(l=(e.max.y-_.y)*x,c=(e.min.y-_.y)*x),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),g>=0?(f=(e.min.z-_.z)*g,h=(e.max.z-_.z)*g):(f=(e.max.z-_.z)*g,h=(e.min.z-_.z)*g),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,s,o,l){Yc.subVectors(n,e),_l.subVectors(s,e),$c.crossVectors(Yc,_l);let c=this.direction.dot($c),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Sr.subVectors(this.origin,e);const h=f*this.direction.dot(_l.crossVectors(Sr,_l));if(h<0)return null;const p=f*this.direction.dot(Yc.cross(Sr));if(p<0||h+p>c)return null;const x=-f*Sr.dot($c);return x<0?null:this.at(x/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,n,s,o,l,c,f,h,p,x,g,_,S,E,w,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,o,l,c,f,h,p,x,g,_,S,E,w,y)}set(e,n,s,o,l,c,f,h,p,x,g,_,S,E,w,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=s,v[12]=o,v[1]=l,v[5]=c,v[9]=f,v[13]=h,v[2]=p,v[6]=x,v[10]=g,v[14]=_,v[3]=S,v[7]=E,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,o=1/Us.setFromMatrixColumn(e,0).length(),l=1/Us.setFromMatrixColumn(e,1).length(),c=1/Us.setFromMatrixColumn(e,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*l,n[5]=s[5]*l,n[6]=s[6]*l,n[7]=0,n[8]=s[8]*c,n[9]=s[9]*c,n[10]=s[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),x=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const _=c*x,S=c*g,E=f*x,w=f*g;n[0]=h*x,n[4]=-h*g,n[8]=p,n[1]=S+E*p,n[5]=_-w*p,n[9]=-f*h,n[2]=w-_*p,n[6]=E+S*p,n[10]=c*h}else if(e.order==="YXZ"){const _=h*x,S=h*g,E=p*x,w=p*g;n[0]=_+w*f,n[4]=E*f-S,n[8]=c*p,n[1]=c*g,n[5]=c*x,n[9]=-f,n[2]=S*f-E,n[6]=w+_*f,n[10]=c*h}else if(e.order==="ZXY"){const _=h*x,S=h*g,E=p*x,w=p*g;n[0]=_-w*f,n[4]=-c*g,n[8]=E+S*f,n[1]=S+E*f,n[5]=c*x,n[9]=w-_*f,n[2]=-c*p,n[6]=f,n[10]=c*h}else if(e.order==="ZYX"){const _=c*x,S=c*g,E=f*x,w=f*g;n[0]=h*x,n[4]=E*p-S,n[8]=_*p+w,n[1]=h*g,n[5]=w*p+_,n[9]=S*p-E,n[2]=-p,n[6]=f*h,n[10]=c*h}else if(e.order==="YZX"){const _=c*h,S=c*p,E=f*h,w=f*p;n[0]=h*x,n[4]=w-_*g,n[8]=E*g+S,n[1]=g,n[5]=c*x,n[9]=-f*x,n[2]=-p*x,n[6]=S*g+E,n[10]=_-w*g}else if(e.order==="XZY"){const _=c*h,S=c*p,E=f*h,w=f*p;n[0]=h*x,n[4]=-g,n[8]=p*x,n[1]=_*g+w,n[5]=c*x,n[9]=S*g-E,n[2]=E*g-S,n[6]=f*x,n[10]=w*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J_,e,ey)}lookAt(e,n,s){const o=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Mr.crossVectors(s,zn),Mr.lengthSq()===0&&(Math.abs(s.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Mr.crossVectors(s,zn)),Mr.normalize(),yl.crossVectors(zn,Mr),o[0]=Mr.x,o[4]=yl.x,o[8]=zn.x,o[1]=Mr.y,o[5]=yl.y,o[9]=zn.y,o[2]=Mr.z,o[6]=yl.z,o[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,l=this.elements,c=s[0],f=s[4],h=s[8],p=s[12],x=s[1],g=s[5],_=s[9],S=s[13],E=s[2],w=s[6],y=s[10],v=s[14],P=s[3],R=s[7],U=s[11],V=s[15],D=o[0],O=o[4],X=o[8],C=o[12],b=o[1],F=o[5],Y=o[9],$=o[13],ue=o[2],se=o[6],de=o[10],he=o[14],G=o[3],re=o[7],ee=o[11],I=o[15];return l[0]=c*D+f*b+h*ue+p*G,l[4]=c*O+f*F+h*se+p*re,l[8]=c*X+f*Y+h*de+p*ee,l[12]=c*C+f*$+h*he+p*I,l[1]=x*D+g*b+_*ue+S*G,l[5]=x*O+g*F+_*se+S*re,l[9]=x*X+g*Y+_*de+S*ee,l[13]=x*C+g*$+_*he+S*I,l[2]=E*D+w*b+y*ue+v*G,l[6]=E*O+w*F+y*se+v*re,l[10]=E*X+w*Y+y*de+v*ee,l[14]=E*C+w*$+y*he+v*I,l[3]=P*D+R*b+U*ue+V*G,l[7]=P*O+R*F+U*se+V*re,l[11]=P*X+R*Y+U*de+V*ee,l[15]=P*C+R*$+U*he+V*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],x=e[2],g=e[6],_=e[10],S=e[14],E=e[3],w=e[7],y=e[11],v=e[15];return E*(+l*h*g-o*p*g-l*f*_+s*p*_+o*f*S-s*h*S)+w*(+n*h*S-n*p*_+l*c*_-o*c*S+o*p*x-l*h*x)+y*(+n*p*g-n*f*S-l*c*g+s*c*S+l*f*x-s*p*x)+v*(-o*f*x-n*h*g+n*f*_+o*c*g-s*c*_+s*h*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],x=e[8],g=e[9],_=e[10],S=e[11],E=e[12],w=e[13],y=e[14],v=e[15],P=g*y*p-w*_*p+w*h*S-f*y*S-g*h*v+f*_*v,R=E*_*p-x*y*p-E*h*S+c*y*S+x*h*v-c*_*v,U=x*w*p-E*g*p+E*f*S-c*w*S-x*f*v+c*g*v,V=E*g*h-x*w*h-E*f*_+c*w*_+x*f*y-c*g*y,D=n*P+s*R+o*U+l*V;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=P*O,e[1]=(w*_*l-g*y*l-w*o*S+s*y*S+g*o*v-s*_*v)*O,e[2]=(f*y*l-w*h*l+w*o*p-s*y*p-f*o*v+s*h*v)*O,e[3]=(g*h*l-f*_*l-g*o*p+s*_*p+f*o*S-s*h*S)*O,e[4]=R*O,e[5]=(x*y*l-E*_*l+E*o*S-n*y*S-x*o*v+n*_*v)*O,e[6]=(E*h*l-c*y*l-E*o*p+n*y*p+c*o*v-n*h*v)*O,e[7]=(c*_*l-x*h*l+x*o*p-n*_*p-c*o*S+n*h*S)*O,e[8]=U*O,e[9]=(E*g*l-x*w*l-E*s*S+n*w*S+x*s*v-n*g*v)*O,e[10]=(c*w*l-E*f*l+E*s*p-n*w*p-c*s*v+n*f*v)*O,e[11]=(x*f*l-c*g*l-x*s*p+n*g*p+c*s*S-n*f*S)*O,e[12]=V*O,e[13]=(x*w*o-E*g*o+E*s*_-n*w*_-x*s*y+n*g*y)*O,e[14]=(E*f*o-c*w*o-E*s*h+n*w*h+c*s*y-n*f*y)*O,e[15]=(c*g*o-x*f*o+x*s*h-n*g*h-c*s*_+n*f*_)*O,this}scale(e){const n=this.elements,s=e.x,o=e.y,l=e.z;return n[0]*=s,n[4]*=o,n[8]*=l,n[1]*=s,n[5]*=o,n[9]*=l,n[2]*=s,n[6]*=o,n[10]*=l,n[3]*=s,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),o=Math.sin(n),l=1-s,c=e.x,f=e.y,h=e.z,p=l*c,x=l*f;return this.set(p*c+s,p*f-o*h,p*h+o*f,0,p*f+o*h,x*f+s,x*h-o*c,0,p*h-o*f,x*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,s){const o=this.elements,l=n._x,c=n._y,f=n._z,h=n._w,p=l+l,x=c+c,g=f+f,_=l*p,S=l*x,E=l*g,w=c*x,y=c*g,v=f*g,P=h*p,R=h*x,U=h*g,V=s.x,D=s.y,O=s.z;return o[0]=(1-(w+v))*V,o[1]=(S+U)*V,o[2]=(E-R)*V,o[3]=0,o[4]=(S-U)*D,o[5]=(1-(_+v))*D,o[6]=(y+P)*D,o[7]=0,o[8]=(E+R)*O,o[9]=(y-P)*O,o[10]=(1-(_+w))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,s){const o=this.elements;let l=Us.set(o[0],o[1],o[2]).length();const c=Us.set(o[4],o[5],o[6]).length(),f=Us.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ai.copy(this);const p=1/l,x=1/c,g=1/f;return ai.elements[0]*=p,ai.elements[1]*=p,ai.elements[2]*=p,ai.elements[4]*=x,ai.elements[5]*=x,ai.elements[6]*=x,ai.elements[8]*=g,ai.elements[9]*=g,ai.elements[10]*=g,n.setFromRotationMatrix(ai),s.x=l,s.y=c,s.z=f,this}makePerspective(e,n,s,o,l,c,f=vi,h=!1){const p=this.elements,x=2*l/(n-e),g=2*l/(s-o),_=(n+e)/(n-e),S=(s+o)/(s-o);let E,w;if(h)E=l/(c-l),w=c*l/(c-l);else if(f===vi)E=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(f===Xl)E=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,s,o,l,c,f=vi,h=!1){const p=this.elements,x=2/(n-e),g=2/(s-o),_=-(n+e)/(n-e),S=-(s+o)/(s-o);let E,w;if(h)E=1/(c-l),w=c/(c-l);else if(f===vi)E=-2/(c-l),w=-(c+l)/(c-l);else if(f===Xl)E=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const Us=new ce,ai=new nn,J_=new ce(0,0,0),ey=new ce(1,1,1),Mr=new ce,yl=new ce,zn=new ce,pm=new nn,mm=new eo;class qi{constructor(e=0,n=0,s=0,o=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,o=this._order){return this._x=e,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],x=o[9],g=o[2],_=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class b0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ty=0;const xm=new ce,Is=new eo,Ni=new nn,Sl=new ce,Ba=new ce,ny=new ce,iy=new eo,gm=new ce(1,0,0),vm=new ce(0,1,0),_m=new ce(0,0,1),ym={type:"added"},ry={type:"removed"},Fs={type:"childadded",child:null},Kc={type:"childremoved",child:null};class Wn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new ce,n=new qi,s=new eo,o=new ce(1,1,1);function l(){s.setFromEuler(n,!1)}function c(){n.setFromQuaternion(s,void 0,!1)}n._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new pt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(vm,e)}rotateZ(e){return this.rotateOnAxis(_m,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(vm,e)}translateZ(e){return this.translateOnAxis(_m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?Sl.copy(e):Sl.set(e,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Ba,Sl,this.up):Ni.lookAt(Sl,Ba,this.up),this.quaternion.setFromRotationMatrix(Ni),o&&(Ni.extractRotation(o.matrixWorld),Is.setFromRotationMatrix(Ni),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(qt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ym),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ry),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ym),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,iy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,x=h.length;p<x;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(n){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),x=c(e.images),g=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=o,s;function c(f){const h=[];for(const p in f){const x=f[p];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Wn.DEFAULT_UP=new ce(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new ce,Ui=new ce,Zc=new ce,Ii=new ce,Os=new ce,ks=new ce,Sm=new ce,Qc=new ce,Jc=new ce,ef=new ce,tf=new Yt,nf=new Yt,rf=new Yt;class ui{constructor(e=new ce,n=new ce,s=new ce){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,o){o.subVectors(s,n),oi.subVectors(e,n),o.cross(oi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,s,o,l){oi.subVectors(o,n),Ui.subVectors(s,n),Zc.subVectors(e,n);const c=oi.dot(oi),f=oi.dot(Ui),h=oi.dot(Zc),p=Ui.dot(Ui),x=Ui.dot(Zc),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const _=1/g,S=(p*h-f*x)*_,E=(c*x-f*h)*_;return l.set(1-S-E,E,S)}static containsPoint(e,n,s,o){return this.getBarycoord(e,n,s,o,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,s,o,l,c,f,h){return this.getBarycoord(e,n,s,o,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ii.x),h.addScaledVector(c,Ii.y),h.addScaledVector(f,Ii.z),h)}static getInterpolatedAttribute(e,n,s,o,l,c){return tf.setScalar(0),nf.setScalar(0),rf.setScalar(0),tf.fromBufferAttribute(e,n),nf.fromBufferAttribute(e,s),rf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(tf,l.x),c.addScaledVector(nf,l.y),c.addScaledVector(rf,l.z),c}static isFrontFacing(e,n,s,o){return oi.subVectors(s,n),Ui.subVectors(e,n),oi.cross(Ui).dot(o)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,o){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,s,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),oi.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,o,l){return ui.getInterpolation(e,this.a,this.b,this.c,n,s,o,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,o=this.b,l=this.c;let c,f;Os.subVectors(o,s),ks.subVectors(l,s),Qc.subVectors(e,s);const h=Os.dot(Qc),p=ks.dot(Qc);if(h<=0&&p<=0)return n.copy(s);Jc.subVectors(e,o);const x=Os.dot(Jc),g=ks.dot(Jc);if(x>=0&&g<=x)return n.copy(o);const _=h*g-x*p;if(_<=0&&h>=0&&x<=0)return c=h/(h-x),n.copy(s).addScaledVector(Os,c);ef.subVectors(e,l);const S=Os.dot(ef),E=ks.dot(ef);if(E>=0&&S<=E)return n.copy(l);const w=S*p-h*E;if(w<=0&&p>=0&&E<=0)return f=p/(p-E),n.copy(s).addScaledVector(ks,f);const y=x*E-S*g;if(y<=0&&g-x>=0&&S-E>=0)return Sm.subVectors(l,o),f=(g-x)/(g-x+(S-E)),n.copy(o).addScaledVector(Sm,f);const v=1/(y+w+_);return c=w*v,f=_*v,n.copy(s).addScaledVector(Os,c).addScaledVector(ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const A0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function sf(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Ut{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,n),this}setRGB(e,n,s,o=bt.workingColorSpace){return this.r=e,this.g=n,this.b=s,bt.colorSpaceToWorking(this,o),this}setHSL(e,n,s,o=bt.workingColorSpace){if(e=W_(e,1),n=yt(n,0,1),s=yt(s,0,1),n===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+n):s+n-s*n,c=2*s-l;this.r=sf(c,l,e+1/3),this.g=sf(c,l,e),this.b=sf(c,l,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,n=Hn){function s(l){l!==void 0&&parseFloat(l)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:dt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const s=A0[e.toLowerCase()];return s!==void 0?this.setHex(s,n):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return bt.workingToColorSpace(_n.copy(this),e),Math.round(yt(_n.r*255,0,255))*65536+Math.round(yt(_n.g*255,0,255))*256+Math.round(yt(_n.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.workingToColorSpace(_n.copy(this),n);const s=_n.r,o=_n.g,l=_n.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const x=(f+c)/2;if(f===c)h=0,p=0;else{const g=c-f;switch(p=x<=.5?g/(c+f):g/(2-c-f),c){case s:h=(o-l)/g+(o<l?6:0);break;case o:h=(l-s)/g+2;break;case l:h=(s-o)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=x,e}getRGB(e,n=bt.workingColorSpace){return bt.workingToColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Hn){bt.workingToColorSpace(_n.copy(this),e);const n=_n.r,s=_n.g,o=_n.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,n,s){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(Ml);const s=zc(Er.h,Ml.h,n),o=zc(Er.s,Ml.s,n),l=zc(Er.l,Ml.l,n);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*s+l[6]*o,this.g=l[1]*n+l[4]*s+l[7]*o,this.b=l[2]*n+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Ut;Ut.NAMES=A0;let sy=0;class Kl extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Gs,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=vf,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){dt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(s.blending=this.blending),this.side!==Cr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gf&&(s.blendSrc=this.blendSrc),this.blendDst!==vf&&(s.blendDst=this.blendDst),this.blendEquation!==Zr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(n){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=n[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class C0 extends Kl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new ce,El=new Mt;let ay=0;class _i{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ay++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=om,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=Fa(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=Dn(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),s=Dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,o){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),s=Dn(s,this.array),o=Dn(o,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,n,s,o,l){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),s=Dn(s,this.array),o=Dn(o,this.array),l=Dn(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==om&&(e.usage=this.usage),e}}class R0 extends _i{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class P0 extends _i{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class es extends _i{constructor(e,n,s){super(new Float32Array(e),n,s)}}let oy=0;const Zn=new nn,af=new Wn,Bs=new ce,Vn=new to,za=new to,un=new ce;class Pr extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T0(e)?P0:R0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new pt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,s){return Zn.makeTranslation(e,n,s),this.applyMatrix4(Zn),this}scale(e,n,s){return Zn.makeScale(e,n,s),this.applyMatrix4(Zn),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new es(s,3))}else{const s=Math.min(e.length,n.count);for(let o=0;o<s;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const s=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];za.setFromBufferAttribute(f),this.morphTargetsRelative?(un.addVectors(Vn.min,za.min),Vn.expandByPoint(un),un.addVectors(Vn.max,za.max),Vn.expandByPoint(un)):(Vn.expandByPoint(za.min),Vn.expandByPoint(za.max))}Vn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)un.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(un));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],h=this.morphTargetsRelative;for(let p=0,x=f.count;p<x;p++)un.fromBufferAttribute(f,p),h&&(Bs.fromBufferAttribute(e,p),un.add(Bs)),o=Math.max(o,s.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let X=0;X<s.count;X++)f[X]=new ce,h[X]=new ce;const p=new ce,x=new ce,g=new ce,_=new Mt,S=new Mt,E=new Mt,w=new ce,y=new ce;function v(X,C,b){p.fromBufferAttribute(s,X),x.fromBufferAttribute(s,C),g.fromBufferAttribute(s,b),_.fromBufferAttribute(l,X),S.fromBufferAttribute(l,C),E.fromBufferAttribute(l,b),x.sub(p),g.sub(p),S.sub(_),E.sub(_);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(w.copy(x).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(F),y.copy(g).multiplyScalar(S.x).addScaledVector(x,-E.x).multiplyScalar(F),f[X].add(w),f[C].add(w),f[b].add(w),h[X].add(y),h[C].add(y),h[b].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let X=0,C=P.length;X<C;++X){const b=P[X],F=b.start,Y=b.count;for(let $=F,ue=F+Y;$<ue;$+=3)v(e.getX($+0),e.getX($+1),e.getX($+2))}const R=new ce,U=new ce,V=new ce,D=new ce;function O(X){V.fromBufferAttribute(o,X),D.copy(V);const C=f[X];R.copy(C),R.sub(V.multiplyScalar(V.dot(C))).normalize(),U.crossVectors(D,C);const F=U.dot(h[X])<0?-1:1;c.setXYZW(X,R.x,R.y,R.z,F)}for(let X=0,C=P.length;X<C;++X){const b=P[X],F=b.start,Y=b.count;for(let $=F,ue=F+Y;$<ue;$+=3)O(e.getX($+0)),O(e.getX($+1)),O(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const o=new ce,l=new ce,c=new ce,f=new ce,h=new ce,p=new ce,x=new ce,g=new ce;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(n,E),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,y),x.subVectors(c,l),g.subVectors(o,l),x.cross(g),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),f.add(x),h.add(x),p.add(x),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=n.count;_<S;_+=3)o.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),x.subVectors(c,l),g.subVectors(o,l),x.cross(g),s.setXYZ(_+0,x.x,x.y,x.z),s.setXYZ(_+1,x.x,x.y,x.z),s.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(f,h){const p=f.array,x=f.itemSize,g=f.normalized,_=new p.constructor(h.length*x);let S=0,E=0;for(let w=0,y=h.length;w<y;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*x;for(let v=0;v<x;v++)_[E++]=p[S++]}return new _i(_,x,g)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pr,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let x=0,g=p.length;x<g;x++){const _=p[x],S=e(_,s);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],x=[];for(let g=0,_=p.length;g<_;g++){const S=p[g];x.push(S.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(n))}const l=e.morphAttributes;for(const p in l){const x=[],g=l[p];for(let _=0,S=g.length;_<S;_++)x.push(g[_].clone(n));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,x=c.length;p<x;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mm=new nn,jr=new Q_,Tl=new Sd,Em=new ce,wl=new ce,bl=new ce,Al=new ce,of=new ce,Cl=new ce,Tm=new ce,Rl=new ce;class Yi extends Wn{constructor(e=new Pr,n=new C0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Cl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const x=f[h],g=l[h];x!==0&&(of.fromBufferAttribute(g,e),c?Cl.addScaledVector(of,x):Cl.addScaledVector(of.sub(n),x))}n.add(Cl)}return n}raycast(e,n){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tl.copy(s.boundingSphere),Tl.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(Tl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Tl,Em)===null||jr.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Mm.copy(l).invert(),jr.copy(e.ray).applyMatrix4(Mm),!(s.boundingBox!==null&&jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,s){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,g=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],v=c[y.materialIndex],P=Math.max(y.start,S.start),R=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let U=P,V=R;U<V;U+=3){const D=f.getX(U),O=f.getX(U+1),X=f.getX(U+2);o=Pl(this,v,e,s,p,x,g,D,O,X),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=E,v=w;y<v;y+=3){const P=f.getX(y),R=f.getX(y+1),U=f.getX(y+2);o=Pl(this,c,e,s,p,x,g,P,R,U),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],v=c[y.materialIndex],P=Math.max(y.start,S.start),R=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let U=P,V=R;U<V;U+=3){const D=U,O=U+1,X=U+2;o=Pl(this,v,e,s,p,x,g,D,O,X),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=E,v=w;y<v;y+=3){const P=y,R=y+1,U=y+2;o=Pl(this,c,e,s,p,x,g,P,R,U),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function ly(r,e,n,s,o,l,c,f){let h;if(e.side===Nn?h=s.intersectTriangle(c,l,o,!0,f):h=s.intersectTriangle(o,l,c,e.side===Cr,f),h===null)return null;Rl.copy(f),Rl.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Rl);return p<n.near||p>n.far?null:{distance:p,point:Rl.clone(),object:r}}function Pl(r,e,n,s,o,l,c,f,h,p){r.getVertexPosition(f,wl),r.getVertexPosition(h,bl),r.getVertexPosition(p,Al);const x=ly(r,e,n,s,wl,bl,Al,Tm);if(x){const g=new ce;ui.getBarycoord(Tm,wl,bl,Al,g),o&&(x.uv=ui.getInterpolatedAttribute(o,f,h,p,g,new Mt)),l&&(x.uv1=ui.getInterpolatedAttribute(l,f,h,p,g,new Mt)),c&&(x.normal=ui.getInterpolatedAttribute(c,f,h,p,g,new ce),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const _={a:f,b:h,c:p,normal:new ce,materialIndex:0};ui.getNormal(wl,bl,Al,_.normal),x.face=_,x.barycoord=g}return x}class no extends Pr{constructor(e=1,n=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],x=[],g=[];let _=0,S=0;E("z","y","x",-1,-1,s,n,e,c,l,0),E("z","y","x",1,-1,s,n,-e,c,l,1),E("x","z","y",1,1,e,s,n,o,c,2),E("x","z","y",1,-1,e,s,-n,o,c,3),E("x","y","z",1,-1,e,n,s,o,l,4),E("x","y","z",-1,-1,e,n,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new es(p,3)),this.setAttribute("normal",new es(x,3)),this.setAttribute("uv",new es(g,2));function E(w,y,v,P,R,U,V,D,O,X,C){const b=U/O,F=V/X,Y=U/2,$=V/2,ue=D/2,se=O+1,de=X+1;let he=0,G=0;const re=new ce;for(let ee=0;ee<de;ee++){const I=ee*F-$;for(let te=0;te<se;te++){const De=te*b-Y;re[w]=De*P,re[y]=I*R,re[v]=ue,p.push(re.x,re.y,re.z),re[w]=0,re[y]=0,re[v]=D>0?1:-1,x.push(re.x,re.y,re.z),g.push(te/O),g.push(1-ee/X),he+=1}}for(let ee=0;ee<X;ee++)for(let I=0;I<O;I++){const te=_+I+se*ee,De=_+I+se*(ee+1),Fe=_+(I+1)+se*(ee+1),We=_+(I+1)+se*ee;h.push(te,De,We),h.push(De,Fe,We),G+=6}f.addGroup(S,G,C),S+=G,_+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const o=r[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=o.clone():Array.isArray(o)?e[n][s]=o.slice():e[n][s]=o}}return e}function En(r){const e={};for(let n=0;n<r.length;n++){const s=$s(r[n]);for(const o in s)e[o]=s[o]}return e}function uy(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function L0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const cy={clone:$s,merge:En};var fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Kl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fy,this.fragmentShader=dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class D0 extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new ce,wm=new Mt,bm=new Mt;class li extends D0{constructor(e=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rd*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,n){return this.getViewBounds(e,wm,bm),n.subVectors(bm,wm)}setViewOffset(e,n,s,o,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bc*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,n-=c.offsetY*s/p,o*=c.width/h,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zs=-90,Vs=1;class hy extends Wn{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new li(zs,Vs,e,n);o.layers=this.layers,this.add(o);const l=new li(zs,Vs,e,n);l.layers=this.layers,this.add(l);const c=new li(zs,Vs,e,n);c.layers=this.layers,this.add(c);const f=new li(zs,Vs,e,n);f.layers=this.layers,this.add(f);const h=new li(zs,Vs,e,n);h.layers=this.layers,this.add(h);const p=new li(zs,Vs,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,o,l,c,f,h]=n;for(const p of n)this.remove(p);if(e===vi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Xl)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,x]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(n,l),e.setRenderTarget(s,1,o),e.render(n,c),e.setRenderTarget(s,2,o),e.render(n,f),e.setRenderTarget(s,3,o),e.render(n,h),e.setRenderTarget(s,4,o),e.render(n,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,o),e.render(n,x),e.setRenderTarget(g,_,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class N0 extends Tn{constructor(e=[],n=js,s,o,l,c,f,h,p,x){super(e,n,s,o,l,c,f,h,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class py extends ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new N0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new no(5,5,5),l=new Si({name:"CubemapFromEquirect",uniforms:$s(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Nn,blending:Gi});l.uniforms.tEquirect.value=n;const c=new Yi(o,l),f=n.minFilter;return n.minFilter===Jr&&(n.minFilter=Qn),new hy(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,s,o);e.setRenderTarget(l)}}class Ll extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const my={type:"move"};class lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,s),v=this._getHandJoint(p,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=x.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(my)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new Ll;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}class xy extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class gy extends Tn{constructor(e=null,n=1,s=1,o,l,c,f,h,p=Gn,x=Gn,g,_){super(null,c,f,h,p,x,o,l,g,_),this.isDataTexture=!0,this.image={data:e,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uf=new ce,vy=new ce,_y=new pt;class Kr{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,o){return this.normal.set(e,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const o=uf.subVectors(s,n).cross(vy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(uf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||_y.getNormalMatrix(e),o=this.coplanarPoint(uf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Sd,yy=new Mt(.5,.5),Dl=new ce;class U0{constructor(e=new Kr,n=new Kr,s=new Kr,o=new Kr,l=new Kr,c=new Kr){this.planes=[e,n,s,o,l,c]}set(e,n,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=vi,s=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],x=l[4],g=l[5],_=l[6],S=l[7],E=l[8],w=l[9],y=l[10],v=l[11],P=l[12],R=l[13],U=l[14],V=l[15];if(o[0].setComponents(p-c,S-x,v-E,V-P).normalize(),o[1].setComponents(p+c,S+x,v+E,V+P).normalize(),o[2].setComponents(p+f,S+g,v+w,V+R).normalize(),o[3].setComponents(p-f,S-g,v-w,V-R).normalize(),s)o[4].setComponents(h,_,y,U).normalize(),o[5].setComponents(p-h,S-_,v-y,V-U).normalize();else if(o[4].setComponents(p-h,S-_,v-y,V-U).normalize(),n===vi)o[5].setComponents(p+h,S+_,v+y,V+U).normalize();else if(n===Xl)o[5].setComponents(h,_,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const n=yy.distanceTo(e.center);return qr.radius=.7071067811865476+n,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(Dl.x=o.normal.x>0?e.max.x:e.min.x,Dl.y=o.normal.y>0?e.max.y:e.min.y,Dl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class I0 extends Tn{constructor(e,n,s=ts,o,l,c,f=Gn,h=Gn,p,x=qa,g=1){if(x!==qa&&x!==Ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:g};super(_,o,l,c,f,h,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class F0 extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class io extends Pr{constructor(e=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:o};const l=e/2,c=n/2,f=Math.floor(s),h=Math.floor(o),p=f+1,x=h+1,g=e/f,_=n/h,S=[],E=[],w=[],y=[];for(let v=0;v<x;v++){const P=v*_-c;for(let R=0;R<p;R++){const U=R*g-l;E.push(U,-P,0),w.push(0,0,1),y.push(R/f),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let P=0;P<f;P++){const R=P+p*v,U=P+p*(v+1),V=P+1+p*(v+1),D=P+1+p*v;S.push(R,U,D),S.push(U,V,D)}this.setIndex(S),this.setAttribute("position",new es(E,3)),this.setAttribute("normal",new es(w,3)),this.setAttribute("uv",new es(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sy extends Kl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class My extends Kl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class O0 extends D0{constructor(e=-1,n=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=x*this.view.offsetY,h=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ey extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ty{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Am(r,e,n,s){const o=wy(s);switch(n){case y0:return r*e;case M0:return r*e/o.components*o.byteLength;case xd:return r*e/o.components*o.byteLength;case gd:return r*e*2/o.components*o.byteLength;case vd:return r*e*2/o.components*o.byteLength;case S0:return r*e*3/o.components*o.byteLength;case ci:return r*e*4/o.components*o.byteLength;case _d:return r*e*4/o.components*o.byteLength;case Ol:case kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bl:case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lf:case Nf:return Math.max(r,16)*Math.max(e,8)/4;case Pf:case Df:return Math.max(r,8)*Math.max(e,8)/2;case Uf:case If:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ff:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case jf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $f:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Zf:case Qf:case Jf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ed:case td:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wy(r){switch(r){case ji:case x0:return{byteLength:1,components:1};case Xa:case g0:case Qs:return{byteLength:2,components:1};case pd:case md:return{byteLength:2,components:4};case ts:case hd:case Vi:return{byteLength:4,components:1};case v0:case _0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function k0(){let r=null,e=!1,n=null,s=null;function o(l,c){n(l,c),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){r=l}}}function by(r){const e=new WeakMap;function n(f,h){const p=f.array,x=f.usage,g=p.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,p,x),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function s(f,h,p){const x=h.array,g=h.updateRanges;if(r.bindBuffer(p,f),g.length===0)r.bufferSubData(p,0,x);else{g.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<g.length;S++){const E=g[_],w=g[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++_,g[_]=w)}g.length=_+1;for(let S=0,E=g.length;S<E;S++){const w=g[S];r.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,n(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var Ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ny=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,By=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iS="gl_FragColor = linearToOutputTexel( gl_FragColor );",rS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_S=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,CS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,US=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$S=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_M=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:Ay,alphahash_pars_fragment:Cy,alphamap_fragment:Ry,alphamap_pars_fragment:Py,alphatest_fragment:Ly,alphatest_pars_fragment:Dy,aomap_fragment:Ny,aomap_pars_fragment:Uy,batching_pars_vertex:Iy,batching_vertex:Fy,begin_vertex:Oy,beginnormal_vertex:ky,bsdfs:By,iridescence_fragment:zy,bumpmap_pars_fragment:Vy,clipping_planes_fragment:Hy,clipping_planes_pars_fragment:Gy,clipping_planes_pars_vertex:Wy,clipping_planes_vertex:Xy,color_fragment:jy,color_pars_fragment:qy,color_pars_vertex:Yy,color_vertex:$y,common:Ky,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:Qy,displacementmap_pars_vertex:Jy,displacementmap_vertex:eS,emissivemap_fragment:tS,emissivemap_pars_fragment:nS,colorspace_fragment:iS,colorspace_pars_fragment:rS,envmap_fragment:sS,envmap_common_pars_fragment:aS,envmap_pars_fragment:oS,envmap_pars_vertex:lS,envmap_physical_pars_fragment:_S,envmap_vertex:uS,fog_vertex:cS,fog_pars_vertex:fS,fog_fragment:dS,fog_pars_fragment:hS,gradientmap_pars_fragment:pS,lightmap_pars_fragment:mS,lights_lambert_fragment:xS,lights_lambert_pars_fragment:gS,lights_pars_begin:vS,lights_toon_fragment:yS,lights_toon_pars_fragment:SS,lights_phong_fragment:MS,lights_phong_pars_fragment:ES,lights_physical_fragment:TS,lights_physical_pars_fragment:wS,lights_fragment_begin:bS,lights_fragment_maps:AS,lights_fragment_end:CS,logdepthbuf_fragment:RS,logdepthbuf_pars_fragment:PS,logdepthbuf_pars_vertex:LS,logdepthbuf_vertex:DS,map_fragment:NS,map_pars_fragment:US,map_particle_fragment:IS,map_particle_pars_fragment:FS,metalnessmap_fragment:OS,metalnessmap_pars_fragment:kS,morphinstance_vertex:BS,morphcolor_vertex:zS,morphnormal_vertex:VS,morphtarget_pars_vertex:HS,morphtarget_vertex:GS,normal_fragment_begin:WS,normal_fragment_maps:XS,normal_pars_fragment:jS,normal_pars_vertex:qS,normal_vertex:YS,normalmap_pars_fragment:$S,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:ZS,clearcoat_pars_fragment:QS,iridescence_pars_fragment:JS,opaque_fragment:eM,packing:tM,premultiplied_alpha_fragment:nM,project_vertex:iM,dithering_fragment:rM,dithering_pars_fragment:sM,roughnessmap_fragment:aM,roughnessmap_pars_fragment:oM,shadowmap_pars_fragment:lM,shadowmap_pars_vertex:uM,shadowmap_vertex:cM,shadowmask_pars_fragment:fM,skinbase_vertex:dM,skinning_pars_vertex:hM,skinning_vertex:pM,skinnormal_vertex:mM,specularmap_fragment:xM,specularmap_pars_fragment:gM,tonemapping_fragment:vM,tonemapping_pars_fragment:_M,transmission_fragment:yM,transmission_pars_fragment:SM,uv_pars_fragment:MM,uv_pars_vertex:EM,uv_vertex:TM,worldpos_vertex:wM,background_vert:bM,background_frag:AM,backgroundCube_vert:CM,backgroundCube_frag:RM,cube_vert:PM,cube_frag:LM,depth_vert:DM,depth_frag:NM,distanceRGBA_vert:UM,distanceRGBA_frag:IM,equirect_vert:FM,equirect_frag:OM,linedashed_vert:kM,linedashed_frag:BM,meshbasic_vert:zM,meshbasic_frag:VM,meshlambert_vert:HM,meshlambert_frag:GM,meshmatcap_vert:WM,meshmatcap_frag:XM,meshnormal_vert:jM,meshnormal_frag:qM,meshphong_vert:YM,meshphong_frag:$M,meshphysical_vert:KM,meshphysical_frag:ZM,meshtoon_vert:QM,meshtoon_frag:JM,points_vert:eE,points_frag:tE,shadow_vert:nE,shadow_frag:iE,sprite_vert:rE,sprite_frag:sE},Le={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},gi={basic:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:En([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:En([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:En([Le.points,Le.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:En([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:En([Le.common,Le.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:En([Le.sprite,Le.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:En([Le.common,Le.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:En([Le.lights,Le.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};gi.physical={uniforms:En([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Nl={r:0,b:0,g:0},Yr=new qi,aE=new nn;function oE(r,e,n,s,o,l,c){const f=new Ut(0);let h=l===!0?0:1,p,x,g=null,_=0,S=null;function E(R){let U=R.isScene===!0?R.background:null;return U&&U.isTexture&&(U=(R.backgroundBlurriness>0?n:e).get(U)),U}function w(R){let U=!1;const V=E(R);V===null?v(f,h):V&&V.isColor&&(v(V,1),U=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?s.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(R,U){const V=E(U);V&&(V.isCubeTexture||V.mapping===$l)?(x===void 0&&(x=new Yi(new no(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:$s(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(D,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Yr.copy(U.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),x.material.uniforms.envMap.value=V,x.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(aE.makeRotationFromEuler(Yr)),x.material.toneMapped=bt.getTransfer(V.colorSpace)!==Nt,(g!==V||_!==V.version||S!==r.toneMapping)&&(x.material.needsUpdate=!0,g=V,_=V.version,S=r.toneMapping),x.layers.enableAll(),R.unshift(x,x.geometry,x.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Yi(new io(2,2),new Si({name:"BackgroundMaterial",uniforms:$s(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=bt.getTransfer(V.colorSpace)!==Nt,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||_!==V.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=V,_=V.version,S=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function v(R,U){R.getRGB(Nl,L0(r)),s.buffers.color.setClear(Nl.r,Nl.g,Nl.b,U,c)}function P(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,U=1){f.set(R),h=U,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,v(f,h)},render:w,addToRenderList:y,dispose:P}}function lE(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=_(null);let l=o,c=!1;function f(b,F,Y,$,ue){let se=!1;const de=g($,Y,F);l!==de&&(l=de,p(l.object)),se=S(b,$,Y,ue),se&&E(b,$,Y,ue),ue!==null&&e.update(ue,r.ELEMENT_ARRAY_BUFFER),(se||c)&&(c=!1,U(b,F,Y,$),ue!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return r.createVertexArray()}function p(b){return r.bindVertexArray(b)}function x(b){return r.deleteVertexArray(b)}function g(b,F,Y){const $=Y.wireframe===!0;let ue=s[b.id];ue===void 0&&(ue={},s[b.id]=ue);let se=ue[F.id];se===void 0&&(se={},ue[F.id]=se);let de=se[$];return de===void 0&&(de=_(h()),se[$]=de),de}function _(b){const F=[],Y=[],$=[];for(let ue=0;ue<n;ue++)F[ue]=0,Y[ue]=0,$[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:$,object:b,attributes:{},index:null}}function S(b,F,Y,$){const ue=l.attributes,se=F.attributes;let de=0;const he=Y.getAttributes();for(const G in he)if(he[G].location>=0){const ee=ue[G];let I=se[G];if(I===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(I=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(I=b.instanceColor)),ee===void 0||ee.attribute!==I||I&&ee.data!==I.data)return!0;de++}return l.attributesNum!==de||l.index!==$}function E(b,F,Y,$){const ue={},se=F.attributes;let de=0;const he=Y.getAttributes();for(const G in he)if(he[G].location>=0){let ee=se[G];ee===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor));const I={};I.attribute=ee,ee&&ee.data&&(I.data=ee.data),ue[G]=I,de++}l.attributes=ue,l.attributesNum=de,l.index=$}function w(){const b=l.newAttributes;for(let F=0,Y=b.length;F<Y;F++)b[F]=0}function y(b){v(b,0)}function v(b,F){const Y=l.newAttributes,$=l.enabledAttributes,ue=l.attributeDivisors;Y[b]=1,$[b]===0&&(r.enableVertexAttribArray(b),$[b]=1),ue[b]!==F&&(r.vertexAttribDivisor(b,F),ue[b]=F)}function P(){const b=l.newAttributes,F=l.enabledAttributes;for(let Y=0,$=F.length;Y<$;Y++)F[Y]!==b[Y]&&(r.disableVertexAttribArray(Y),F[Y]=0)}function R(b,F,Y,$,ue,se,de){de===!0?r.vertexAttribIPointer(b,F,Y,ue,se):r.vertexAttribPointer(b,F,Y,$,ue,se)}function U(b,F,Y,$){w();const ue=$.attributes,se=Y.getAttributes(),de=F.defaultAttributeValues;for(const he in se){const G=se[he];if(G.location>=0){let re=ue[he];if(re===void 0&&(he==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),he==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){const ee=re.normalized,I=re.itemSize,te=e.get(re);if(te===void 0)continue;const De=te.buffer,Fe=te.type,We=te.bytesPerElement,ne=Fe===r.INT||Fe===r.UNSIGNED_INT||re.gpuType===hd;if(re.isInterleavedBufferAttribute){const fe=re.data,Me=fe.stride,Oe=re.offset;if(fe.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)v(G.location+ke,fe.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<G.locationSize;ke++)y(G.location+ke);r.bindBuffer(r.ARRAY_BUFFER,De);for(let ke=0;ke<G.locationSize;ke++)R(G.location+ke,I/G.locationSize,Fe,ee,Me*We,(Oe+I/G.locationSize*ke)*We,ne)}else{if(re.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)v(G.location+fe,re.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let fe=0;fe<G.locationSize;fe++)y(G.location+fe);r.bindBuffer(r.ARRAY_BUFFER,De);for(let fe=0;fe<G.locationSize;fe++)R(G.location+fe,I/G.locationSize,Fe,ee,I*We,I/G.locationSize*fe*We,ne)}}else if(de!==void 0){const ee=de[he];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(G.location,ee);break;case 3:r.vertexAttrib3fv(G.location,ee);break;case 4:r.vertexAttrib4fv(G.location,ee);break;default:r.vertexAttrib1fv(G.location,ee)}}}}P()}function V(){X();for(const b in s){const F=s[b];for(const Y in F){const $=F[Y];for(const ue in $)x($[ue].object),delete $[ue];delete F[Y]}delete s[b]}}function D(b){if(s[b.id]===void 0)return;const F=s[b.id];for(const Y in F){const $=F[Y];for(const ue in $)x($[ue].object),delete $[ue];delete F[Y]}delete s[b.id]}function O(b){for(const F in s){const Y=s[F];if(Y[b.id]===void 0)continue;const $=Y[b.id];for(const ue in $)x($[ue].object),delete $[ue];delete Y[b.id]}}function X(){C(),c=!0,l!==o&&(l=o,p(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:X,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function uE(r,e,n){let s;function o(p){s=p}function l(p,x){r.drawArrays(s,p,x),n.update(x,s,1)}function c(p,x,g){g!==0&&(r.drawArraysInstanced(s,p,x,g),n.update(x,s,g))}function f(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let S=0;for(let E=0;E<g;E++)S+=x[E];n.update(S,s,1)}function h(p,x,g,_){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],x[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,x,0,_,0,g);let E=0;for(let w=0;w<g;w++)E+=x[w]*_[w];n.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function cE(r,e,n,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==ci&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const X=O===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ji&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Vi&&!X)}function h(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const x=h(p);x!==p&&(dt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),R=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:R,maxFragmentUniforms:U,vertexTextures:V,maxSamples:D}}function fE(r){const e=this;let n=null,s=0,o=!1,l=!1;const c=new Kr,f=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||s!==0||o;return o=_,s=g.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){n=x(g,_,0)},this.setState=function(g,_,S){const E=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,v=r.get(g);if(!o||E===null||E.length===0||l&&!y)l?x(null):p();else{const P=l?0:s,R=P*4;let U=v.clippingState||null;h.value=U,U=x(E,_,R,S);for(let V=0;V!==R;++V)U[V]=n[V];v.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){h.value!==n&&(h.value=n,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(g,_,S,E){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=h.value,E!==!0||y===null){const v=S+w*4,P=_.matrixWorldInverse;f.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let R=0,U=S;R!==w;++R,U+=4)c.copy(g[R]).applyMatrix4(P,f),c.normal.toArray(y,U),y[U+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function dE(r){let e=new WeakMap;function n(c,f){return f===bf?c.mapping=js:f===Af&&(c.mapping=qs),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===bf||f===Af)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new py(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",o),n(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const br=4,Cm=[.125,.215,.35,.446,.526,.582],Qr=20,hE=512,Va=new O0,Rm=new Ut;let cf=null,ff=0,df=0,hf=!1;const pE=new ce;class Pm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,s=.1,o=100,l={}){const{size:c=256,position:f=pE}=l;cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,ff,df),this._renderer.xr.enabled=hf,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Qs,format:ci,colorSpace:Ys,depthBuffer:!1},o=Lm(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,n,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mE(l)),this._blurMaterial=gE(l,e,n)}return o}_compileMaterial(e){const n=new Yi(new Pr,e);this._renderer.compile(n,Va)}_sceneToCubeUV(e,n,s,o,l){const h=new li(90,1,n,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(Rm),g.toneMapping=Ar,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yi(new no,new C0({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let v=!1;const P=e.background;P?P.isColor&&(y.color.copy(P),e.background=null,v=!0):(y.color.copy(Rm),v=!0);for(let R=0;R<6;R++){const U=R%3;U===0?(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+x[R],l.y,l.z)):U===1?(h.up.set(0,0,p[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+x[R],l.z)):(h.up.set(0,p[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+x[R]));const V=this._cubeSize;Hs(o,U*V,R>2?V:0,V,V),g.setRenderTarget(o),v&&g.render(w,h),g.render(e,h)}g.toneMapping=S,g.autoClear=_,e.background=P}_textureToCubeUV(e,n){const s=this._renderer,o=e.mapping===js||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Hs(n,0,0,3*h,2*h),s.setRenderTarget(n),s.render(c,Va)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=s}_applyGGXFilter(e,n,s){const o=this._renderer,l=this._pingPongRenderTarget;if(this._ggxMaterial===null){const P=3*Math.max(this._cubeSize,16),R=4*this._cubeSize;this._ggxMaterial=xE(this._lodMax,P,R)}const c=this._ggxMaterial,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,p=s/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),_=.05+p*.95,S=g*_,{_lodMax:E}=this,w=this._sizeLods[s],y=3*w*(s>E-br?s-E+br:0),v=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=S,h.mipInt.value=E-n,Hs(l,y,v,3*w,2*w),o.setRenderTarget(l),o.render(f,Va),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=E-s,Hs(e,y,v,3*w,2*w),o.setRenderTarget(e),o.render(f,Va)}_blur(e,n,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,n,s,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&qt("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[o];g.material=p;const _=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Qr-1),w=l/E,y=isFinite(l)?1+Math.floor(x*w):Qr;y>Qr&&dt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Qr}`);const v=[];let P=0;for(let O=0;O<Qr;++O){const X=O/w,C=Math.exp(-X*X/2);v.push(C),O===0?P+=C:O<y&&(P+=2*C)}for(let O=0;O<v.length;O++)v[O]=v[O]/P;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:R}=this;_.dTheta.value=E,_.mipInt.value=R-s;const U=this._sizeLods[o],V=3*U*(o>R-br?o-R+br:0),D=4*(this._cubeSize-U);Hs(n,V,D,3*U,2*U),h.setRenderTarget(n),h.render(g,Va)}}function mE(r){const e=[],n=[],s=[];let o=r;const l=r-br+1+Cm.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let h=1/f;c>r-br?h=Cm[c-r+br-1]:c===0&&(h=0),n.push(h);const p=1/(f-2),x=-p,g=1+p,_=[x,x,g,x,g,g,x,x,g,g,x,g],S=6,E=6,w=3,y=2,v=1,P=new Float32Array(w*E*S),R=new Float32Array(y*E*S),U=new Float32Array(v*E*S);for(let D=0;D<S;D++){const O=D%3*2/3-1,X=D>2?0:-1,C=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];P.set(C,w*E*D),R.set(_,y*E*D);const b=[D,D,D,D,D,D];U.set(b,v*E*D)}const V=new Pr;V.setAttribute("position",new _i(P,w)),V.setAttribute("uv",new _i(R,y)),V.setAttribute("faceIndex",new _i(U,v)),s.push(new Yi(V,null)),o>br&&o--}return{lodMeshes:s,sizeLods:e,sigmas:n}}function Lm(r,e,n){const s=new ns(r,e,n);return s.texture.mapping=$l,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hs(r,e,n,s,o){r.viewport.set(e,n,s,o),r.scissor.set(e,n,s,o)}function xE(r,e,n){return new Si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function gE(r,e,n){const s=new Float32Array(Qr),o=new ce(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Dm(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Nm(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vE(r){let e=new WeakMap,n=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===bf||h===Af,x=h===js||h===qs;if(p||x){let g=e.get(f);const _=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Pm(r)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return p&&S&&S.height>0||x&&S&&o(S)?(n===null&&(n=new Pm(r)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f){let h=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:c}}function _E(r){const e={};function n(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&$a("WebGLRenderer: "+s+" extension not supported."),o}}}function yE(r,e,n,s){const o={},l=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(g,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,n.memory.geometries++),_}function h(g){const _=g.attributes;for(const S in _)e.update(_[S],r.ARRAY_BUFFER)}function p(g){const _=[],S=g.index,E=g.attributes.position;let w=0;if(S!==null){const P=S.array;w=S.version;for(let R=0,U=P.length;R<U;R+=3){const V=P[R+0],D=P[R+1],O=P[R+2];_.push(V,D,D,O,O,V)}}else if(E!==void 0){const P=E.array;w=E.version;for(let R=0,U=P.length/3-1;R<U;R+=3){const V=R+0,D=R+1,O=R+2;_.push(V,D,D,O,O,V)}}else return;const y=new(T0(_)?P0:R0)(_,1);y.version=w;const v=l.get(g);v&&e.remove(v),l.set(g,y)}function x(g){const _=l.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:h,getWireframeAttribute:x}}function SE(r,e,n){let s;function o(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function h(_,S){r.drawElements(s,S,l,_*c),n.update(S,s,1)}function p(_,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,_*c,E),n.update(S,s,E))}function x(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,_,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];n.update(y,s,1)}function g(_,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)p(_[v]/c,S[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,_,0,w,0,E);let v=0;for(let P=0;P<E;P++)v+=S[P]*w[P];n.update(v,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function ME(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(n.calls++,c){case r.TRIANGLES:n.triangles+=f*(l/3);break;case r.LINES:n.lines+=f*(l/2);break;case r.LINE_STRIP:n.lines+=f*(l-1);break;case r.LINE_LOOP:n.lines+=f*l;break;case r.POINTS:n.points+=f*l;break;default:qt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:s}}function EE(r,e,n){const s=new WeakMap,o=new Yt;function l(c,f,h){const p=c.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=x!==void 0?x.length:0;let _=s.get(f);if(_===void 0||_.count!==g){let b=function(){X.dispose(),s.delete(f),f.removeEventListener("dispose",b)};var S=b;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let U=0;E===!0&&(U=1),w===!0&&(U=2),y===!0&&(U=3);let V=f.attributes.position.count*U,D=1;V>e.maxTextureSize&&(D=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const O=new Float32Array(V*D*4*g),X=new w0(O,V,D,g);X.type=Vi,X.needsUpdate=!0;const C=U*4;for(let F=0;F<g;F++){const Y=v[F],$=P[F],ue=R[F],se=V*D*4*F;for(let de=0;de<Y.count;de++){const he=de*C;E===!0&&(o.fromBufferAttribute(Y,de),O[se+he+0]=o.x,O[se+he+1]=o.y,O[se+he+2]=o.z,O[se+he+3]=0),w===!0&&(o.fromBufferAttribute($,de),O[se+he+4]=o.x,O[se+he+5]=o.y,O[se+he+6]=o.z,O[se+he+7]=0),y===!0&&(o.fromBufferAttribute(ue,de),O[se+he+8]=o.x,O[se+he+9]=o.y,O[se+he+10]=o.z,O[se+he+11]=ue.itemSize===4?o.w:1)}}_={count:g,texture:X,size:new Mt(V,D)},s.set(f,_),f.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,n);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const w=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function TE(r,e,n,s){let o=new WeakMap;function l(h){const p=s.render.frame,x=h.geometry,g=e.get(h,x);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(n.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return g}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:c}}const B0=new Tn,Um=new I0(1,1),z0=new w0,V0=new K_,H0=new N0,Im=[],Fm=[],Om=new Float32Array(16),km=new Float32Array(9),Bm=new Float32Array(4);function ea(r,e,n){const s=r[0];if(s<=0||s>0)return r;const o=e*n;let l=Im[o];if(l===void 0&&(l=new Float32Array(o),Im[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,r[c].toArray(l,f)}return l}function rn(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function sn(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function Ql(r,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function wE(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function bE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;r.uniform2fv(this.addr,e),sn(n,e)}}function AE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;r.uniform3fv(this.addr,e),sn(n,e)}}function CE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;r.uniform4fv(this.addr,e),sn(n,e)}}function RE(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(rn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,s))return;Bm.set(s),r.uniformMatrix2fv(this.addr,!1,Bm),sn(n,s)}}function PE(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(rn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,s))return;km.set(s),r.uniformMatrix3fv(this.addr,!1,km),sn(n,s)}}function LE(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(rn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,s))return;Om.set(s),r.uniformMatrix4fv(this.addr,!1,Om),sn(n,s)}}function DE(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function NE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;r.uniform2iv(this.addr,e),sn(n,e)}}function UE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;r.uniform3iv(this.addr,e),sn(n,e)}}function IE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;r.uniform4iv(this.addr,e),sn(n,e)}}function FE(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function OE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;r.uniform2uiv(this.addr,e),sn(n,e)}}function kE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;r.uniform3uiv(this.addr,e),sn(n,e)}}function BE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;r.uniform4uiv(this.addr,e),sn(n,e)}}function zE(r,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Um.compareFunction=E0,l=Um):l=B0,n.setTexture2D(e||l,o)}function VE(r,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(e||V0,o)}function HE(r,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(e||H0,o)}function GE(r,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(e||z0,o)}function WE(r){switch(r){case 5126:return wE;case 35664:return bE;case 35665:return AE;case 35666:return CE;case 35674:return RE;case 35675:return PE;case 35676:return LE;case 5124:case 35670:return DE;case 35667:case 35671:return NE;case 35668:case 35672:return UE;case 35669:case 35673:return IE;case 5125:return FE;case 36294:return OE;case 36295:return kE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return zE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return GE}}function XE(r,e){r.uniform1fv(this.addr,e)}function jE(r,e){const n=ea(e,this.size,2);r.uniform2fv(this.addr,n)}function qE(r,e){const n=ea(e,this.size,3);r.uniform3fv(this.addr,n)}function YE(r,e){const n=ea(e,this.size,4);r.uniform4fv(this.addr,n)}function $E(r,e){const n=ea(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function KE(r,e){const n=ea(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function ZE(r,e){const n=ea(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function QE(r,e){r.uniform1iv(this.addr,e)}function JE(r,e){r.uniform2iv(this.addr,e)}function e1(r,e){r.uniform3iv(this.addr,e)}function t1(r,e){r.uniform4iv(this.addr,e)}function n1(r,e){r.uniform1uiv(this.addr,e)}function i1(r,e){r.uniform2uiv(this.addr,e)}function r1(r,e){r.uniform3uiv(this.addr,e)}function s1(r,e){r.uniform4uiv(this.addr,e)}function a1(r,e,n){const s=this.cache,o=e.length,l=Ql(n,o);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let c=0;c!==o;++c)n.setTexture2D(e[c]||B0,l[c])}function o1(r,e,n){const s=this.cache,o=e.length,l=Ql(n,o);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||V0,l[c])}function l1(r,e,n){const s=this.cache,o=e.length,l=Ql(n,o);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||H0,l[c])}function u1(r,e,n){const s=this.cache,o=e.length,l=Ql(n,o);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||z0,l[c])}function c1(r){switch(r){case 5126:return XE;case 35664:return jE;case 35665:return qE;case 35666:return YE;case 35674:return $E;case 35675:return KE;case 35676:return ZE;case 5124:case 35670:return QE;case 35667:case 35671:return JE;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return r1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return u1}}class f1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=WE(n.type)}}class d1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=c1(n.type)}}class h1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,n[f.id],s)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function zm(r,e){r.seq.push(e),r.map[e.id]=e}function p1(r,e,n){const s=r.name,o=s.length;for(pf.lastIndex=0;;){const l=pf.exec(s),c=pf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){zm(n,p===void 0?new f1(f,r,e):new d1(f,r,e));break}else{let g=n.map[f];g===void 0&&(g=new h1(f),zm(n,g)),n=g}}}class Vl{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(n,o),c=e.getUniformLocation(n,l.name);p1(l,c,this)}}setValue(e,n,s,o){const l=this.map[n];l!==void 0&&l.setValue(e,s,o)}setOptional(e,n,s){const o=n[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,n,s,o){for(let l=0,c=n.length;l!==c;++l){const f=n[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in n&&s.push(c)}return s}}function Vm(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const m1=37297;let x1=0;function g1(r,e){const n=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return s.join(`
`)}const Hm=new pt;function v1(r){bt._getMatrix(Hm,bt.workingColorSpace,r);const e=`mat3( ${Hm.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(r)){case Wl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Gm(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+g1(r.getShaderSource(e),f)}else return l}function _1(r,e){const n=v1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function y1(r,e){let n;switch(e){case E_:n="Linear";break;case T_:n="Reinhard";break;case w_:n="Cineon";break;case b_:n="ACESFilmic";break;case C_:n="AgX";break;case R_:n="Neutral";break;case A_:n="Custom";break;default:dt("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ul=new ce;function S1(){bt.getLuminanceCoefficients(Ul);const r=Ul.x.toFixed(4),e=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function E1(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function T1(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return n}function Ga(r){return r!==""}function Wm(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w1=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(r){return r.replace(w1,A1)}const b1=new Map;function A1(r,e){let n=xt[e];if(n===void 0){const s=b1.get(e);if(s!==void 0)n=xt[s],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return sd(n)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(r){return r.replace(C1,R1)}function R1(r,e,n,s){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function qm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===h0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function L1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case js:case qs:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function N1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case p0:e="ENVMAP_BLENDING_MULTIPLY";break;case S_:e="ENVMAP_BLENDING_MIX";break;case M_:e="ENVMAP_BLENDING_ADD";break}return e}function U1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function I1(r,e,n,s){const o=r.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const h=P1(n),p=L1(n),x=D1(n),g=N1(n),_=U1(n),S=M1(n),E=E1(l),w=o.createProgram();let y,v,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ga).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ga).join(`
`),v.length>0&&(v+=`
`)):(y=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),v=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+x:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ar?"#define TONE_MAPPING":"",n.toneMapping!==Ar?xt.tonemapping_pars_fragment:"",n.toneMapping!==Ar?y1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,_1("linearToOutputTexel",n.outputColorSpace),S1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ga).join(`
`)),c=sd(c),c=Wm(c,n),c=Xm(c,n),f=sd(f),f=Wm(f,n),f=Xm(f,n),c=jm(c),f=jm(f),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const R=P+y+c,U=P+v+f,V=Vm(o,o.VERTEX_SHADER,R),D=Vm(o,o.FRAGMENT_SHADER,U);o.attachShader(w,V),o.attachShader(w,D),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(F){if(r.debug.checkShaderErrors){const Y=o.getProgramInfoLog(w)||"",$=o.getShaderInfoLog(V)||"",ue=o.getShaderInfoLog(D)||"",se=Y.trim(),de=$.trim(),he=ue.trim();let G=!0,re=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,w,V,D);else{const ee=Gm(o,V,"vertex"),I=Gm(o,D,"fragment");qt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+se+`
`+ee+`
`+I)}else se!==""?dt("WebGLProgram: Program Info Log:",se):(de===""||he==="")&&(re=!1);re&&(F.diagnostics={runnable:G,programLog:se,vertexShader:{log:de,prefix:y},fragmentShader:{log:he,prefix:v}})}o.deleteShader(V),o.deleteShader(D),X=new Vl(o,w),C=T1(o,w)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(w,m1)),b},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=x1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=V,this.fragmentShader=D,this}let F1=0;class O1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new k1(e),n.set(e,s)),s}}class k1{constructor(e){this.id=F1++,this.code=e,this.usedTimes=0}}function B1(r,e,n,s,o,l,c){const f=new b0,h=new O1,p=new Set,x=[],g=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,b,F,Y,$){const ue=Y.fog,se=$.geometry,de=C.isMeshStandardMaterial?Y.environment:null,he=(C.isMeshStandardMaterial?n:e).get(C.envMap||de),G=he&&he.mapping===$l?he.image.height:null,re=E[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&dt("WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const ee=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,I=ee!==void 0?ee.length:0;let te=0;se.morphAttributes.position!==void 0&&(te=1),se.morphAttributes.normal!==void 0&&(te=2),se.morphAttributes.color!==void 0&&(te=3);let De,Fe,We,ne;if(re){const Et=gi[re];De=Et.vertexShader,Fe=Et.fragmentShader}else De=C.vertexShader,Fe=C.fragmentShader,h.update(C),We=h.getVertexShaderID(C),ne=h.getFragmentShaderID(C);const fe=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Oe=$.isInstancedMesh===!0,ke=$.isBatchedMesh===!0,ht=!!C.map,$t=!!C.matcap,ft=!!he,Lt=!!C.aoMap,k=!!C.lightMap,gt=!!C.bumpMap,mt=!!C.normalMap,Ct=!!C.displacementMap,ze=!!C.emissiveMap,Rt=!!C.metalnessMap,qe=!!C.roughnessMap,ot=C.anisotropy>0,L=C.clearcoat>0,T=C.dispersion>0,Q=C.iridescence>0,pe=C.sheen>0,xe=C.transmission>0,le=ot&&!!C.anisotropyMap,$e=L&&!!C.clearcoatMap,Ce=L&&!!C.clearcoatNormalMap,Ze=L&&!!C.clearcoatRoughnessMap,Ye=Q&&!!C.iridescenceMap,_e=Q&&!!C.iridescenceThicknessMap,Ae=pe&&!!C.sheenColorMap,rt=pe&&!!C.sheenRoughnessMap,et=!!C.specularMap,Ne=!!C.specularColorMap,st=!!C.specularIntensityMap,B=xe&&!!C.transmissionMap,Re=xe&&!!C.thicknessMap,Te=!!C.gradientMap,we=!!C.alphaMap,Se=C.alphaTest>0,me=!!C.alphaHash,Ve=!!C.extensions;let lt=Ar;C.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(lt=r.toneMapping);const Dt={shaderID:re,shaderType:C.type,shaderName:C.name,vertexShader:De,fragmentShader:Fe,defines:C.defines,customVertexShaderID:We,customFragmentShaderID:ne,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:ke,batchingColor:ke&&$._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&$.instanceColor!==null,instancingMorph:Oe&&$.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ys,alphaToCoverage:!!C.alphaToCoverage,map:ht,matcap:$t,envMap:ft,envMapMode:ft&&he.mapping,envMapCubeUVHeight:G,aoMap:Lt,lightMap:k,bumpMap:gt,normalMap:mt,displacementMap:_&&Ct,emissiveMap:ze,normalMapObjectSpace:mt&&C.normalMapType===U_,normalMapTangentSpace:mt&&C.normalMapType===N_,metalnessMap:Rt,roughnessMap:qe,anisotropy:ot,anisotropyMap:le,clearcoat:L,clearcoatMap:$e,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ze,dispersion:T,iridescence:Q,iridescenceMap:Ye,iridescenceThicknessMap:_e,sheen:pe,sheenColorMap:Ae,sheenRoughnessMap:rt,specularMap:et,specularColorMap:Ne,specularIntensityMap:st,transmission:xe,transmissionMap:B,thicknessMap:Re,gradientMap:Te,opaque:C.transparent===!1&&C.blending===Gs&&C.alphaToCoverage===!1,alphaMap:we,alphaTest:Se,alphaHash:me,combine:C.combine,mapUv:ht&&w(C.map.channel),aoMapUv:Lt&&w(C.aoMap.channel),lightMapUv:k&&w(C.lightMap.channel),bumpMapUv:gt&&w(C.bumpMap.channel),normalMapUv:mt&&w(C.normalMap.channel),displacementMapUv:Ct&&w(C.displacementMap.channel),emissiveMapUv:ze&&w(C.emissiveMap.channel),metalnessMapUv:Rt&&w(C.metalnessMap.channel),roughnessMapUv:qe&&w(C.roughnessMap.channel),anisotropyMapUv:le&&w(C.anisotropyMap.channel),clearcoatMapUv:$e&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:rt&&w(C.sheenRoughnessMap.channel),specularMapUv:et&&w(C.specularMap.channel),specularColorMapUv:Ne&&w(C.specularColorMap.channel),specularIntensityMapUv:st&&w(C.specularIntensityMap.channel),transmissionMapUv:B&&w(C.transmissionMap.channel),thicknessMapUv:Re&&w(C.thicknessMap.channel),alphaMapUv:we&&w(C.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(mt||ot),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!se.attributes.uv&&(ht||we),fog:!!ue,useFog:C.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Me,skinning:$.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:ht&&C.map.isVideoTexture===!0&&bt.getTransfer(C.map.colorSpace)===Nt,decodeVideoTextureEmissive:ze&&C.emissiveMap.isVideoTexture===!0&&bt.getTransfer(C.emissiveMap.colorSpace)===Nt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Bi,flipSided:C.side===Nn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ve&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&C.extensions.multiDraw===!0||ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Dt.vertexUv1s=p.has(1),Dt.vertexUv2s=p.has(2),Dt.vertexUv3s=p.has(3),p.clear(),Dt}function v(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)b.push(F),b.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(P(b,C),R(b,C),b.push(r.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function P(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function R(C,b){f.disableAll(),b.supportsVertexTextures&&f.enable(0),b.instancing&&f.enable(1),b.instancingColor&&f.enable(2),b.instancingMorph&&f.enable(3),b.matcap&&f.enable(4),b.envMap&&f.enable(5),b.normalMapObjectSpace&&f.enable(6),b.normalMapTangentSpace&&f.enable(7),b.clearcoat&&f.enable(8),b.iridescence&&f.enable(9),b.alphaTest&&f.enable(10),b.vertexColors&&f.enable(11),b.vertexAlphas&&f.enable(12),b.vertexUv1s&&f.enable(13),b.vertexUv2s&&f.enable(14),b.vertexUv3s&&f.enable(15),b.vertexTangents&&f.enable(16),b.anisotropy&&f.enable(17),b.alphaHash&&f.enable(18),b.batching&&f.enable(19),b.dispersion&&f.enable(20),b.batchingColor&&f.enable(21),b.gradientMap&&f.enable(22),C.push(f.mask),f.disableAll(),b.fog&&f.enable(0),b.useFog&&f.enable(1),b.flatShading&&f.enable(2),b.logarithmicDepthBuffer&&f.enable(3),b.reversedDepthBuffer&&f.enable(4),b.skinning&&f.enable(5),b.morphTargets&&f.enable(6),b.morphNormals&&f.enable(7),b.morphColors&&f.enable(8),b.premultipliedAlpha&&f.enable(9),b.shadowMapEnabled&&f.enable(10),b.doubleSided&&f.enable(11),b.flipSided&&f.enable(12),b.useDepthPacking&&f.enable(13),b.dithering&&f.enable(14),b.transmission&&f.enable(15),b.sheen&&f.enable(16),b.opaque&&f.enable(17),b.pointsUvs&&f.enable(18),b.decodeVideoTexture&&f.enable(19),b.decodeVideoTextureEmissive&&f.enable(20),b.alphaToCoverage&&f.enable(21),C.push(f.mask)}function U(C){const b=E[C.type];let F;if(b){const Y=gi[b];F=cy.clone(Y.uniforms)}else F=C.uniforms;return F}function V(C,b){let F;for(let Y=0,$=x.length;Y<$;Y++){const ue=x[Y];if(ue.cacheKey===b){F=ue,++F.usedTimes;break}}return F===void 0&&(F=new I1(r,b,C,l),x.push(F)),F}function D(C){if(--C.usedTimes===0){const b=x.indexOf(C);x[b]=x[x.length-1],x.pop(),C.destroy()}}function O(C){h.remove(C)}function X(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:U,acquireProgram:V,releaseProgram:D,releaseShaderCache:O,programs:x,dispose:X}}function z1(){let r=new WeakMap;function e(c){return r.has(c)}function n(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function o(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:n,remove:s,update:o,dispose:l}}function V1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ym(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $m(){const r=[];let e=0;const n=[],s=[],o=[];function l(){e=0,n.length=0,s.length=0,o.length=0}function c(g,_,S,E,w,y){let v=r[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:S,groupOrder:E,renderOrder:g.renderOrder,z:w,group:y},r[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=S,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=w,v.group=y),e++,v}function f(g,_,S,E,w,y){const v=c(g,_,S,E,w,y);S.transmission>0?s.push(v):S.transparent===!0?o.push(v):n.push(v)}function h(g,_,S,E,w,y){const v=c(g,_,S,E,w,y);S.transmission>0?s.unshift(v):S.transparent===!0?o.unshift(v):n.unshift(v)}function p(g,_){n.length>1&&n.sort(g||V1),s.length>1&&s.sort(_||Ym),o.length>1&&o.sort(_||Ym)}function x(){for(let g=e,_=r.length;g<_;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:s,transparent:o,init:l,push:f,unshift:h,finish:x,sort:p}}function H1(){let r=new WeakMap;function e(s,o){const l=r.get(s);let c;return l===void 0?(c=new $m,r.set(s,[c])):o>=l.length?(c=new $m,l.push(c)):c=l[o],c}function n(){r=new WeakMap}return{get:e,dispose:n}}function G1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ce,color:new Ut};break;case"SpotLight":n={position:new ce,direction:new ce,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":n={color:new Ut,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=n,n}}}function W1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let X1=0;function j1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function q1(r){const e=new G1,n=W1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ce);const o=new ce,l=new nn,c=new nn;function f(p){let x=0,g=0,_=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let S=0,E=0,w=0,y=0,v=0,P=0,R=0,U=0,V=0,D=0,O=0;p.sort(j1);for(let C=0,b=p.length;C<b;C++){const F=p[C],Y=F.color,$=F.intensity,ue=F.distance,se=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)x+=Y.r*$,g+=Y.g*$,_+=Y.b*$;else if(F.isLightProbe){for(let de=0;de<9;de++)s.probe[de].addScaledVector(F.sh.coefficients[de],$);O++}else if(F.isDirectionalLight){const de=e.get(F);if(de.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const he=F.shadow,G=n.get(F);G.shadowIntensity=he.intensity,G.shadowBias=he.bias,G.shadowNormalBias=he.normalBias,G.shadowRadius=he.radius,G.shadowMapSize=he.mapSize,s.directionalShadow[S]=G,s.directionalShadowMap[S]=se,s.directionalShadowMatrix[S]=F.shadow.matrix,P++}s.directional[S]=de,S++}else if(F.isSpotLight){const de=e.get(F);de.position.setFromMatrixPosition(F.matrixWorld),de.color.copy(Y).multiplyScalar($),de.distance=ue,de.coneCos=Math.cos(F.angle),de.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),de.decay=F.decay,s.spot[w]=de;const he=F.shadow;if(F.map&&(s.spotLightMap[V]=F.map,V++,he.updateMatrices(F),F.castShadow&&D++),s.spotLightMatrix[w]=he.matrix,F.castShadow){const G=n.get(F);G.shadowIntensity=he.intensity,G.shadowBias=he.bias,G.shadowNormalBias=he.normalBias,G.shadowRadius=he.radius,G.shadowMapSize=he.mapSize,s.spotShadow[w]=G,s.spotShadowMap[w]=se,U++}w++}else if(F.isRectAreaLight){const de=e.get(F);de.color.copy(Y).multiplyScalar($),de.halfWidth.set(F.width*.5,0,0),de.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=de,y++}else if(F.isPointLight){const de=e.get(F);if(de.color.copy(F.color).multiplyScalar(F.intensity),de.distance=F.distance,de.decay=F.decay,F.castShadow){const he=F.shadow,G=n.get(F);G.shadowIntensity=he.intensity,G.shadowBias=he.bias,G.shadowNormalBias=he.normalBias,G.shadowRadius=he.radius,G.shadowMapSize=he.mapSize,G.shadowCameraNear=he.camera.near,G.shadowCameraFar=he.camera.far,s.pointShadow[E]=G,s.pointShadowMap[E]=se,s.pointShadowMatrix[E]=F.shadow.matrix,R++}s.point[E]=de,E++}else if(F.isHemisphereLight){const de=e.get(F);de.skyColor.copy(F.color).multiplyScalar($),de.groundColor.copy(F.groundColor).multiplyScalar($),s.hemi[v]=de,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=_;const X=s.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==v||X.numDirectionalShadows!==P||X.numPointShadows!==R||X.numSpotShadows!==U||X.numSpotMaps!==V||X.numLightProbes!==O)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=U+V-D,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=O,X.directionalLength=S,X.pointLength=E,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=v,X.numDirectionalShadows=P,X.numPointShadows=R,X.numSpotShadows=U,X.numSpotMaps=V,X.numLightProbes=O,s.version=X1++)}function h(p,x){let g=0,_=0,S=0,E=0,w=0;const y=x.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const R=p[v];if(R.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(y),g++}else if(R.isSpotLight){const U=s.spot[S];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(y),S++}else if(R.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(y),c.identity(),l.copy(R.matrixWorld),l.premultiply(y),c.extractRotation(l),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),U.halfWidth.applyMatrix4(c),U.halfHeight.applyMatrix4(c),E++}else if(R.isPointLight){const U=s.point[_];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(y),_++}else if(R.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(y),w++}}}return{setup:f,setupView:h,state:s}}function Km(r){const e=new q1(r),n=[],s=[];function o(x){p.camera=x,n.length=0,s.length=0}function l(x){n.push(x)}function c(x){s.push(x)}function f(){e.setup(n)}function h(x){e.setupView(n,x)}const p={lightsArray:n,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function Y1(r){let e=new WeakMap;function n(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new Km(r),e.set(o,[f])):l>=c.length?(f=new Km(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:n,dispose:s}}const $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z1(r,e,n){let s=new U0;const o=new Mt,l=new Mt,c=new Yt,f=new Sy({depthPacking:D_}),h=new My,p={},x=n.maxTextureSize,g={[Cr]:Nn,[Nn]:Cr,[Bi]:Bi},_=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:$1,fragmentShader:K1}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Pr;E.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Yi(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h0;let v=this.type;this.render=function(D,O,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;const C=r.getRenderTarget(),b=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Gi),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const $=v!==Oi&&this.type===Oi,ue=v===Oi&&this.type!==Oi;for(let se=0,de=D.length;se<de;se++){const he=D[se],G=he.shadow;if(G===void 0){dt("WebGLShadowMap:",he,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const re=G.getFrameExtents();if(o.multiply(re),l.copy(G.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/re.x),o.x=l.x*re.x,G.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/re.y),o.y=l.y*re.y,G.mapSize.y=l.y)),G.map===null||$===!0||ue===!0){const I=this.type!==Oi?{minFilter:Gn,magFilter:Gn}:{};G.map!==null&&G.map.dispose(),G.map=new ns(o.x,o.y,I),G.map.texture.name=he.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ee=G.getViewportCount();for(let I=0;I<ee;I++){const te=G.getViewport(I);c.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),Y.viewport(c),G.updateMatrices(he,I),s=G.getFrustum(),U(O,X,G.camera,he,this.type)}G.isPointLightShadow!==!0&&this.type===Oi&&P(G,X),G.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(C,b,F)};function P(D,O){const X=e.update(w);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ns(o.x,o.y)),_.uniforms.shadow_pass.value=D.map.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(O,null,X,_,w,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(O,null,X,S,w,null)}function R(D,O,X,C){let b=null;const F=X.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)b=F;else if(b=X.isPointLight===!0?h:f,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=b.uuid,$=O.uuid;let ue=p[Y];ue===void 0&&(ue={},p[Y]=ue);let se=ue[$];se===void 0&&(se=b.clone(),ue[$]=se,O.addEventListener("dispose",V)),b=se}if(b.visible=O.visible,b.wireframe=O.wireframe,C===Oi?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:g[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,X.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=r.properties.get(b);Y.light=X}return b}function U(D,O,X,C,b){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===Oi)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,D.matrixWorld);const $=e.update(D),ue=D.material;if(Array.isArray(ue)){const se=$.groups;for(let de=0,he=se.length;de<he;de++){const G=se[de],re=ue[G.materialIndex];if(re&&re.visible){const ee=R(D,re,C,b);D.onBeforeShadow(r,D,O,X,$,ee,G),r.renderBufferDirect(X,null,$,ee,D,G),D.onAfterShadow(r,D,O,X,$,ee,G)}}}else if(ue.visible){const se=R(D,ue,C,b);D.onBeforeShadow(r,D,O,X,$,se,null),r.renderBufferDirect(X,null,$,se,D,null),D.onAfterShadow(r,D,O,X,$,se,null)}}const Y=D.children;for(let $=0,ue=Y.length;$<ue;$++)U(Y[$],O,X,C,b)}function V(D){D.target.removeEventListener("dispose",V);for(const X in p){const C=p[X],b=D.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const Q1={[_f]:yf,[Sf]:Tf,[Mf]:wf,[Xs]:Ef,[yf]:_f,[Tf]:Sf,[wf]:Mf,[Ef]:Xs};function J1(r,e){function n(){let B=!1;const Re=new Yt;let Te=null;const we=new Yt(0,0,0,0);return{setMask:function(Se){Te!==Se&&!B&&(r.colorMask(Se,Se,Se,Se),Te=Se)},setLocked:function(Se){B=Se},setClear:function(Se,me,Ve,lt,Dt){Dt===!0&&(Se*=lt,me*=lt,Ve*=lt),Re.set(Se,me,Ve,lt),we.equals(Re)===!1&&(r.clearColor(Se,me,Ve,lt),we.copy(Re))},reset:function(){B=!1,Te=null,we.set(-1,0,0,0)}}}function s(){let B=!1,Re=!1,Te=null,we=null,Se=null;return{setReversed:function(me){if(Re!==me){const Ve=e.get("EXT_clip_control");me?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Re=me;const lt=Se;Se=null,this.setClear(lt)}},getReversed:function(){return Re},setTest:function(me){me?fe(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(me){Te!==me&&!B&&(r.depthMask(me),Te=me)},setFunc:function(me){if(Re&&(me=Q1[me]),we!==me){switch(me){case _f:r.depthFunc(r.NEVER);break;case yf:r.depthFunc(r.ALWAYS);break;case Sf:r.depthFunc(r.LESS);break;case Xs:r.depthFunc(r.LEQUAL);break;case Mf:r.depthFunc(r.EQUAL);break;case Ef:r.depthFunc(r.GEQUAL);break;case Tf:r.depthFunc(r.GREATER);break;case wf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=me}},setLocked:function(me){B=me},setClear:function(me){Se!==me&&(Re&&(me=1-me),r.clearDepth(me),Se=me)},reset:function(){B=!1,Te=null,we=null,Se=null,Re=!1}}}function o(){let B=!1,Re=null,Te=null,we=null,Se=null,me=null,Ve=null,lt=null,Dt=null;return{setTest:function(Et){B||(Et?fe(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!B&&(r.stencilMask(Et),Re=Et)},setFunc:function(Et,Un,cn){(Te!==Et||we!==Un||Se!==cn)&&(r.stencilFunc(Et,Un,cn),Te=Et,we=Un,Se=cn)},setOp:function(Et,Un,cn){(me!==Et||Ve!==Un||lt!==cn)&&(r.stencilOp(Et,Un,cn),me=Et,Ve=Un,lt=cn)},setLocked:function(Et){B=Et},setClear:function(Et){Dt!==Et&&(r.clearStencil(Et),Dt=Et)},reset:function(){B=!1,Re=null,Te=null,we=null,Se=null,me=null,Ve=null,lt=null,Dt=null}}}const l=new n,c=new s,f=new o,h=new WeakMap,p=new WeakMap;let x={},g={},_=new WeakMap,S=[],E=null,w=!1,y=null,v=null,P=null,R=null,U=null,V=null,D=null,O=new Ut(0,0,0),X=0,C=!1,b=null,F=null,Y=null,$=null,ue=null;const se=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,he=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(G)[1]),de=he>=1):G.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),de=he>=2);let re=null,ee={};const I=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),De=new Yt().fromArray(I),Fe=new Yt().fromArray(te);function We(B,Re,Te,we){const Se=new Uint8Array(4),me=r.createTexture();r.bindTexture(B,me),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ve=0;Ve<Te;Ve++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,Se):r.texImage2D(Re+Ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Se);return me}const ne={};ne[r.TEXTURE_2D]=We(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=We(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=We(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=We(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),fe(r.DEPTH_TEST),c.setFunc(Xs),gt(!1),mt(nm),fe(r.CULL_FACE),Lt(Gi);function fe(B){x[B]!==!0&&(r.enable(B),x[B]=!0)}function Me(B){x[B]!==!1&&(r.disable(B),x[B]=!1)}function Oe(B,Re){return g[B]!==Re?(r.bindFramebuffer(B,Re),g[B]=Re,B===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Re),B===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function ke(B,Re){let Te=S,we=!1;if(B){Te=_.get(Re),Te===void 0&&(Te=[],_.set(Re,Te));const Se=B.textures;if(Te.length!==Se.length||Te[0]!==r.COLOR_ATTACHMENT0){for(let me=0,Ve=Se.length;me<Ve;me++)Te[me]=r.COLOR_ATTACHMENT0+me;Te.length=Se.length,we=!0}}else Te[0]!==r.BACK&&(Te[0]=r.BACK,we=!0);we&&r.drawBuffers(Te)}function ht(B){return E!==B?(r.useProgram(B),E=B,!0):!1}const $t={[Zr]:r.FUNC_ADD,[r_]:r.FUNC_SUBTRACT,[s_]:r.FUNC_REVERSE_SUBTRACT};$t[a_]=r.MIN,$t[o_]=r.MAX;const ft={[l_]:r.ZERO,[u_]:r.ONE,[c_]:r.SRC_COLOR,[gf]:r.SRC_ALPHA,[x_]:r.SRC_ALPHA_SATURATE,[p_]:r.DST_COLOR,[d_]:r.DST_ALPHA,[f_]:r.ONE_MINUS_SRC_COLOR,[vf]:r.ONE_MINUS_SRC_ALPHA,[m_]:r.ONE_MINUS_DST_COLOR,[h_]:r.ONE_MINUS_DST_ALPHA,[g_]:r.CONSTANT_COLOR,[v_]:r.ONE_MINUS_CONSTANT_COLOR,[__]:r.CONSTANT_ALPHA,[y_]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(B,Re,Te,we,Se,me,Ve,lt,Dt,Et){if(B===Gi){w===!0&&(Me(r.BLEND),w=!1);return}if(w===!1&&(fe(r.BLEND),w=!0),B!==i_){if(B!==y||Et!==C){if((v!==Zr||U!==Zr)&&(r.blendEquation(r.FUNC_ADD),v=Zr,U=Zr),Et)switch(B){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case im:r.blendFunc(r.ONE,r.ONE);break;case rm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qt("WebGLState: Invalid blending: ",B);break}else switch(B){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case im:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case rm:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sm:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",B);break}P=null,R=null,V=null,D=null,O.set(0,0,0),X=0,y=B,C=Et}return}Se=Se||Re,me=me||Te,Ve=Ve||we,(Re!==v||Se!==U)&&(r.blendEquationSeparate($t[Re],$t[Se]),v=Re,U=Se),(Te!==P||we!==R||me!==V||Ve!==D)&&(r.blendFuncSeparate(ft[Te],ft[we],ft[me],ft[Ve]),P=Te,R=we,V=me,D=Ve),(lt.equals(O)===!1||Dt!==X)&&(r.blendColor(lt.r,lt.g,lt.b,Dt),O.copy(lt),X=Dt),y=B,C=!1}function k(B,Re){B.side===Bi?Me(r.CULL_FACE):fe(r.CULL_FACE);let Te=B.side===Nn;Re&&(Te=!Te),gt(Te),B.blending===Gs&&B.transparent===!1?Lt(Gi):Lt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),l.setMask(B.colorWrite);const we=B.stencilWrite;f.setTest(we),we&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ze(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(B){b!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),b=B)}function mt(B){B!==e_?(fe(r.CULL_FACE),B!==F&&(B===nm?r.cullFace(r.BACK):B===t_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),F=B}function Ct(B){B!==Y&&(de&&r.lineWidth(B),Y=B)}function ze(B,Re,Te){B?(fe(r.POLYGON_OFFSET_FILL),($!==Re||ue!==Te)&&(r.polygonOffset(Re,Te),$=Re,ue=Te)):Me(r.POLYGON_OFFSET_FILL)}function Rt(B){B?fe(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function qe(B){B===void 0&&(B=r.TEXTURE0+se-1),re!==B&&(r.activeTexture(B),re=B)}function ot(B,Re,Te){Te===void 0&&(re===null?Te=r.TEXTURE0+se-1:Te=re);let we=ee[Te];we===void 0&&(we={type:void 0,texture:void 0},ee[Te]=we),(we.type!==B||we.texture!==Re)&&(re!==Te&&(r.activeTexture(Te),re=Te),r.bindTexture(B,Re||ne[B]),we.type=B,we.texture=Re)}function L(){const B=ee[re];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function pe(){try{r.texSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function xe(){try{r.texSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function $e(){try{r.compressedTexSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Ce(){try{r.texStorage2D(...arguments)}catch(B){B("WebGLState:",B)}}function Ze(){try{r.texStorage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Ye(){try{r.texImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function _e(){try{r.texImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Ae(B){De.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),De.copy(B))}function rt(B){Fe.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Fe.copy(B))}function et(B,Re){let Te=p.get(Re);Te===void 0&&(Te=new WeakMap,p.set(Re,Te));let we=Te.get(B);we===void 0&&(we=r.getUniformBlockIndex(Re,B.name),Te.set(B,we))}function Ne(B,Re){const we=p.get(Re).get(B);h.get(Re)!==we&&(r.uniformBlockBinding(Re,we,B.__bindingPointIndex),h.set(Re,we))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},re=null,ee={},g={},_=new WeakMap,S=[],E=null,w=!1,y=null,v=null,P=null,R=null,U=null,V=null,D=null,O=new Ut(0,0,0),X=0,C=!1,b=null,F=null,Y=null,$=null,ue=null,De.set(0,0,r.canvas.width,r.canvas.height),Fe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:fe,disable:Me,bindFramebuffer:Oe,drawBuffers:ke,useProgram:ht,setBlending:Lt,setMaterial:k,setFlipSided:gt,setCullFace:mt,setLineWidth:Ct,setPolygonOffset:ze,setScissorTest:Rt,activeTexture:qe,bindTexture:ot,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:Q,texImage2D:Ye,texImage3D:_e,updateUBOMapping:et,uniformBlockBinding:Ne,texStorage2D:Ce,texStorage3D:Ze,texSubImage2D:pe,texSubImage3D:xe,compressedTexSubImage2D:le,compressedTexSubImage3D:$e,scissor:Ae,viewport:rt,reset:st}}function e3(r,e,n,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Mt,x=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return S?new OffscreenCanvas(L,T):jl("canvas")}function w(L,T,Q){let pe=1;const xe=ot(L);if((xe.width>Q||xe.height>Q)&&(pe=Q/Math.max(xe.width,xe.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const le=Math.floor(pe*xe.width),$e=Math.floor(pe*xe.height);g===void 0&&(g=E(le,$e));const Ce=T?E(le,$e):g;return Ce.width=le,Ce.height=$e,Ce.getContext("2d").drawImage(L,0,0,le,$e),dt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+le+"x"+$e+")."),Ce}else return"data"in L&&dt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){r.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(L,T,Q,pe,xe=!1){if(L!==null){if(r[L]!==void 0)return r[L];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=T;if(T===r.RED&&(Q===r.FLOAT&&(le=r.R32F),Q===r.HALF_FLOAT&&(le=r.R16F),Q===r.UNSIGNED_BYTE&&(le=r.R8)),T===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(le=r.R8UI),Q===r.UNSIGNED_SHORT&&(le=r.R16UI),Q===r.UNSIGNED_INT&&(le=r.R32UI),Q===r.BYTE&&(le=r.R8I),Q===r.SHORT&&(le=r.R16I),Q===r.INT&&(le=r.R32I)),T===r.RG&&(Q===r.FLOAT&&(le=r.RG32F),Q===r.HALF_FLOAT&&(le=r.RG16F),Q===r.UNSIGNED_BYTE&&(le=r.RG8)),T===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(le=r.RG8UI),Q===r.UNSIGNED_SHORT&&(le=r.RG16UI),Q===r.UNSIGNED_INT&&(le=r.RG32UI),Q===r.BYTE&&(le=r.RG8I),Q===r.SHORT&&(le=r.RG16I),Q===r.INT&&(le=r.RG32I)),T===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(le=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(le=r.RGB16UI),Q===r.UNSIGNED_INT&&(le=r.RGB32UI),Q===r.BYTE&&(le=r.RGB8I),Q===r.SHORT&&(le=r.RGB16I),Q===r.INT&&(le=r.RGB32I)),T===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(le=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(le=r.RGBA16UI),Q===r.UNSIGNED_INT&&(le=r.RGBA32UI),Q===r.BYTE&&(le=r.RGBA8I),Q===r.SHORT&&(le=r.RGBA16I),Q===r.INT&&(le=r.RGBA32I)),T===r.RGB&&(Q===r.UNSIGNED_INT_5_9_9_9_REV&&(le=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(le=r.R11F_G11F_B10F)),T===r.RGBA){const $e=xe?Wl:bt.getTransfer(pe);Q===r.FLOAT&&(le=r.RGBA32F),Q===r.HALF_FLOAT&&(le=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(le=$e===Nt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(le=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(le=r.RGB5_A1)}return(le===r.R16F||le===r.R32F||le===r.RG16F||le===r.RG32F||le===r.RGBA16F||le===r.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function U(L,T){let Q;return L?T===null||T===ts||T===ja?Q=r.DEPTH24_STENCIL8:T===Vi?Q=r.DEPTH32F_STENCIL8:T===Xa&&(Q=r.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ts||T===ja?Q=r.DEPTH_COMPONENT24:T===Vi?Q=r.DEPTH_COMPONENT32F:T===Xa&&(Q=r.DEPTH_COMPONENT16),Q}function V(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Gn&&L.minFilter!==Qn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function D(L){const T=L.target;T.removeEventListener("dispose",D),X(T),T.isVideoTexture&&x.delete(T)}function O(L){const T=L.target;T.removeEventListener("dispose",O),b(T)}function X(L){const T=s.get(L);if(T.__webglInit===void 0)return;const Q=L.source,pe=_.get(Q);if(pe){const xe=pe[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(L),Object.keys(pe).length===0&&_.delete(Q)}s.remove(L)}function C(L){const T=s.get(L);r.deleteTexture(T.__webglTexture);const Q=L.source,pe=_.get(Q);delete pe[T.__cacheKey],c.memory.textures--}function b(L){const T=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let xe=0;xe<T.__webglFramebuffer[pe].length;xe++)r.deleteFramebuffer(T.__webglFramebuffer[pe][xe]);else r.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)r.deleteFramebuffer(T.__webglFramebuffer[pe]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=L.textures;for(let pe=0,xe=Q.length;pe<xe;pe++){const le=s.get(Q[pe]);le.__webglTexture&&(r.deleteTexture(le.__webglTexture),c.memory.textures--),s.remove(Q[pe])}s.remove(L)}let F=0;function Y(){F=0}function $(){const L=F;return L>=o.maxTextures&&dt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),F+=1,L}function ue(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function se(L,T){const Q=s.get(L);if(L.isVideoTexture&&Rt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const pe=L.image;if(pe===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Q,L,T);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+T)}function de(L,T){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){ne(Q,L,T);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+T)}function he(L,T){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){ne(Q,L,T);return}n.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+T)}function G(L,T){const Q=s.get(L);if(L.version>0&&Q.__version!==L.version){fe(Q,L,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+T)}const re={[Cf]:r.REPEAT,[zi]:r.CLAMP_TO_EDGE,[Rf]:r.MIRRORED_REPEAT},ee={[Gn]:r.NEAREST,[P_]:r.NEAREST_MIPMAP_NEAREST,[pl]:r.NEAREST_MIPMAP_LINEAR,[Qn]:r.LINEAR,[kc]:r.LINEAR_MIPMAP_NEAREST,[Jr]:r.LINEAR_MIPMAP_LINEAR},I={[I_]:r.NEVER,[V_]:r.ALWAYS,[F_]:r.LESS,[E0]:r.LEQUAL,[O_]:r.EQUAL,[z_]:r.GEQUAL,[k_]:r.GREATER,[B_]:r.NOTEQUAL};function te(L,T){if(T.type===Vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Qn||T.magFilter===kc||T.magFilter===pl||T.magFilter===Jr||T.minFilter===Qn||T.minFilter===kc||T.minFilter===pl||T.minFilter===Jr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,re[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,re[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,re[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ee[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ee[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Gn||T.minFilter!==pl&&T.minFilter!==Jr||T.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function De(L,T){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",D));const pe=T.source;let xe=_.get(pe);xe===void 0&&(xe={},_.set(pe,xe));const le=ue(T);if(le!==L.__cacheKey){xe[le]===void 0&&(xe[le]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),xe[le].usedTimes++;const $e=xe[L.__cacheKey];$e!==void 0&&(xe[L.__cacheKey].usedTimes--,$e.usedTimes===0&&C(T)),L.__cacheKey=le,L.__webglTexture=xe[le].texture}return Q}function Fe(L,T,Q){return Math.floor(Math.floor(L/Q)/T)}function We(L,T,Q,pe){const le=L.updateRanges;if(le.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Q,pe,T.data);else{le.sort((_e,Ae)=>_e.start-Ae.start);let $e=0;for(let _e=1;_e<le.length;_e++){const Ae=le[$e],rt=le[_e],et=Ae.start+Ae.count,Ne=Fe(rt.start,T.width,4),st=Fe(Ae.start,T.width,4);rt.start<=et+1&&Ne===st&&Fe(rt.start+rt.count-1,T.width,4)===Ne?Ae.count=Math.max(Ae.count,rt.start+rt.count-Ae.start):(++$e,le[$e]=rt)}le.length=$e+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),Ze=r.getParameter(r.UNPACK_SKIP_PIXELS),Ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let _e=0,Ae=le.length;_e<Ae;_e++){const rt=le[_e],et=Math.floor(rt.start/4),Ne=Math.ceil(rt.count/4),st=et%T.width,B=Math.floor(et/T.width),Re=Ne,Te=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,st),r.pixelStorei(r.UNPACK_SKIP_ROWS,B),n.texSubImage2D(r.TEXTURE_2D,0,st,B,Re,Te,Q,pe,T.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ye)}}function ne(L,T,Q){let pe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=r.TEXTURE_3D);const xe=De(L,T),le=T.source;n.bindTexture(pe,L.__webglTexture,r.TEXTURE0+Q);const $e=s.get(le);if(le.version!==$e.__version||xe===!0){n.activeTexture(r.TEXTURE0+Q);const Ce=bt.getPrimaries(bt.workingColorSpace),Ze=T.colorSpace===wr?null:bt.getPrimaries(T.colorSpace),Ye=T.colorSpace===wr||Ce===Ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let _e=w(T.image,!1,o.maxTextureSize);_e=qe(T,_e);const Ae=l.convert(T.format,T.colorSpace),rt=l.convert(T.type);let et=R(T.internalFormat,Ae,rt,T.colorSpace,T.isVideoTexture);te(pe,T);let Ne;const st=T.mipmaps,B=T.isVideoTexture!==!0,Re=$e.__version===void 0||xe===!0,Te=le.dataReady,we=V(T,_e);if(T.isDepthTexture)et=U(T.format===Ya,T.type),Re&&(B?n.texStorage2D(r.TEXTURE_2D,1,et,_e.width,_e.height):n.texImage2D(r.TEXTURE_2D,0,et,_e.width,_e.height,0,Ae,rt,null));else if(T.isDataTexture)if(st.length>0){B&&Re&&n.texStorage2D(r.TEXTURE_2D,we,et,st[0].width,st[0].height);for(let Se=0,me=st.length;Se<me;Se++)Ne=st[Se],B?Te&&n.texSubImage2D(r.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,Ae,rt,Ne.data):n.texImage2D(r.TEXTURE_2D,Se,et,Ne.width,Ne.height,0,Ae,rt,Ne.data);T.generateMipmaps=!1}else B?(Re&&n.texStorage2D(r.TEXTURE_2D,we,et,_e.width,_e.height),Te&&We(T,_e,Ae,rt)):n.texImage2D(r.TEXTURE_2D,0,et,_e.width,_e.height,0,Ae,rt,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){B&&Re&&n.texStorage3D(r.TEXTURE_2D_ARRAY,we,et,st[0].width,st[0].height,_e.depth);for(let Se=0,me=st.length;Se<me;Se++)if(Ne=st[Se],T.format!==ci)if(Ae!==null)if(B){if(Te)if(T.layerUpdates.size>0){const Ve=Am(Ne.width,Ne.height,T.format,T.type);for(const lt of T.layerUpdates){const Dt=Ne.data.subarray(lt*Ve/Ne.data.BYTES_PER_ELEMENT,(lt+1)*Ve/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,lt,Ne.width,Ne.height,1,Ae,Dt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,_e.depth,Ae,Ne.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,et,Ne.width,Ne.height,_e.depth,0,Ne.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?Te&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,_e.depth,Ae,rt,Ne.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Se,et,Ne.width,Ne.height,_e.depth,0,Ae,rt,Ne.data)}else{B&&Re&&n.texStorage2D(r.TEXTURE_2D,we,et,st[0].width,st[0].height);for(let Se=0,me=st.length;Se<me;Se++)Ne=st[Se],T.format!==ci?Ae!==null?B?Te&&n.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,Ae,Ne.data):n.compressedTexImage2D(r.TEXTURE_2D,Se,et,Ne.width,Ne.height,0,Ne.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?Te&&n.texSubImage2D(r.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,Ae,rt,Ne.data):n.texImage2D(r.TEXTURE_2D,Se,et,Ne.width,Ne.height,0,Ae,rt,Ne.data)}else if(T.isDataArrayTexture)if(B){if(Re&&n.texStorage3D(r.TEXTURE_2D_ARRAY,we,et,_e.width,_e.height,_e.depth),Te)if(T.layerUpdates.size>0){const Se=Am(_e.width,_e.height,T.format,T.type);for(const me of T.layerUpdates){const Ve=_e.data.subarray(me*Se/_e.data.BYTES_PER_ELEMENT,(me+1)*Se/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,_e.width,_e.height,1,Ae,rt,Ve)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,rt,_e.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,et,_e.width,_e.height,_e.depth,0,Ae,rt,_e.data);else if(T.isData3DTexture)B?(Re&&n.texStorage3D(r.TEXTURE_3D,we,et,_e.width,_e.height,_e.depth),Te&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,rt,_e.data)):n.texImage3D(r.TEXTURE_3D,0,et,_e.width,_e.height,_e.depth,0,Ae,rt,_e.data);else if(T.isFramebufferTexture){if(Re)if(B)n.texStorage2D(r.TEXTURE_2D,we,et,_e.width,_e.height);else{let Se=_e.width,me=_e.height;for(let Ve=0;Ve<we;Ve++)n.texImage2D(r.TEXTURE_2D,Ve,et,Se,me,0,Ae,rt,null),Se>>=1,me>>=1}}else if(st.length>0){if(B&&Re){const Se=ot(st[0]);n.texStorage2D(r.TEXTURE_2D,we,et,Se.width,Se.height)}for(let Se=0,me=st.length;Se<me;Se++)Ne=st[Se],B?Te&&n.texSubImage2D(r.TEXTURE_2D,Se,0,0,Ae,rt,Ne):n.texImage2D(r.TEXTURE_2D,Se,et,Ae,rt,Ne);T.generateMipmaps=!1}else if(B){if(Re){const Se=ot(_e);n.texStorage2D(r.TEXTURE_2D,we,et,Se.width,Se.height)}Te&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,rt,_e)}else n.texImage2D(r.TEXTURE_2D,0,et,Ae,rt,_e);y(T)&&v(pe),$e.__version=le.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function fe(L,T,Q){if(T.image.length!==6)return;const pe=De(L,T),xe=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Q);const le=s.get(xe);if(xe.version!==le.__version||pe===!0){n.activeTexture(r.TEXTURE0+Q);const $e=bt.getPrimaries(bt.workingColorSpace),Ce=T.colorSpace===wr?null:bt.getPrimaries(T.colorSpace),Ze=T.colorSpace===wr||$e===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,_e=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let me=0;me<6;me++)!Ye&&!_e?Ae[me]=w(T.image[me],!0,o.maxCubemapSize):Ae[me]=_e?T.image[me].image:T.image[me],Ae[me]=qe(T,Ae[me]);const rt=Ae[0],et=l.convert(T.format,T.colorSpace),Ne=l.convert(T.type),st=R(T.internalFormat,et,Ne,T.colorSpace),B=T.isVideoTexture!==!0,Re=le.__version===void 0||pe===!0,Te=xe.dataReady;let we=V(T,rt);te(r.TEXTURE_CUBE_MAP,T);let Se;if(Ye){B&&Re&&n.texStorage2D(r.TEXTURE_CUBE_MAP,we,st,rt.width,rt.height);for(let me=0;me<6;me++){Se=Ae[me].mipmaps;for(let Ve=0;Ve<Se.length;Ve++){const lt=Se[Ve];T.format!==ci?et!==null?B?Te&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve,0,0,lt.width,lt.height,et,lt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve,st,lt.width,lt.height,0,lt.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Te&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve,0,0,lt.width,lt.height,et,Ne,lt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve,st,lt.width,lt.height,0,et,Ne,lt.data)}}}else{if(Se=T.mipmaps,B&&Re){Se.length>0&&we++;const me=ot(Ae[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,we,st,me.width,me.height)}for(let me=0;me<6;me++)if(_e){B?Te&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ae[me].width,Ae[me].height,et,Ne,Ae[me].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,st,Ae[me].width,Ae[me].height,0,et,Ne,Ae[me].data);for(let Ve=0;Ve<Se.length;Ve++){const Dt=Se[Ve].image[me].image;B?Te&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve+1,0,0,Dt.width,Dt.height,et,Ne,Dt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve+1,st,Dt.width,Dt.height,0,et,Ne,Dt.data)}}else{B?Te&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,et,Ne,Ae[me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,st,et,Ne,Ae[me]);for(let Ve=0;Ve<Se.length;Ve++){const lt=Se[Ve];B?Te&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve+1,0,0,et,Ne,lt.image[me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve+1,st,et,Ne,lt.image[me])}}}y(T)&&v(r.TEXTURE_CUBE_MAP),le.__version=xe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Me(L,T,Q,pe,xe,le){const $e=l.convert(Q.format,Q.colorSpace),Ce=l.convert(Q.type),Ze=R(Q.internalFormat,$e,Ce,Q.colorSpace),Ye=s.get(T),_e=s.get(Q);if(_e.__renderTarget=T,!Ye.__hasExternalTextures){const Ae=Math.max(1,T.width>>le),rt=Math.max(1,T.height>>le);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?n.texImage3D(xe,le,Ze,Ae,rt,T.depth,0,$e,Ce,null):n.texImage2D(xe,le,Ze,Ae,rt,0,$e,Ce,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),ze(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,xe,_e.__webglTexture,0,Ct(T)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,xe,_e.__webglTexture,le),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(L,T,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){const pe=T.depthTexture,xe=pe&&pe.isDepthTexture?pe.type:null,le=U(T.stencilBuffer,xe),$e=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=Ct(T);ze(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,le,T.width,T.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,le,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,le,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$e,r.RENDERBUFFER,L)}else{const pe=T.textures;for(let xe=0;xe<pe.length;xe++){const le=pe[xe],$e=l.convert(le.format,le.colorSpace),Ce=l.convert(le.type),Ze=R(le.internalFormat,$e,Ce,le.colorSpace),Ye=Ct(T);Q&&ze(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,Ze,T.width,T.height):ze(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,Ze,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ze,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ke(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),se(T.depthTexture,0);const xe=pe.__webglTexture,le=Ct(T);if(T.depthTexture.format===qa)ze(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0);else if(T.depthTexture.format===Ya)ze(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function ht(L){const T=s.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",xe)};pe.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=pe}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const pe=L.texture.mipmaps;pe&&pe.length>0?ke(T.__webglFramebuffer[0],L):ke(T.__webglFramebuffer,L)}else if(Q){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=r.createRenderbuffer(),Oe(T.__webglDepthbuffer[pe],L,!1);else{const xe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,le)}}else{const pe=L.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Oe(T.__webglDepthbuffer,L,!1);else{const xe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,le)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function $t(L,T,Q){const pe=s.get(L);T!==void 0&&Me(pe.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&ht(L)}function ft(L){const T=L.texture,Q=s.get(L),pe=s.get(T);L.addEventListener("dispose",O);const xe=L.textures,le=L.isWebGLCubeRenderTarget===!0,$e=xe.length>1;if($e||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=T.version,c.memory.textures++),le){Q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Ce]=[];for(let Ze=0;Ze<T.mipmaps.length;Ze++)Q.__webglFramebuffer[Ce][Ze]=r.createFramebuffer()}else Q.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)Q.__webglFramebuffer[Ce]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if($e)for(let Ce=0,Ze=xe.length;Ce<Ze;Ce++){const Ye=s.get(xe[Ce]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),c.memory.textures++)}if(L.samples>0&&ze(L)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Ze=xe[Ce];Q.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce]);const Ye=l.convert(Ze.format,Ze.colorSpace),_e=l.convert(Ze.type),Ae=R(Ze.internalFormat,Ye,_e,Ze.colorSpace,L.isXRRenderTarget===!0),rt=Ct(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Ae,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(Q.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(le){n.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),te(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)Me(Q.__webglFramebuffer[Ce][Ze],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ze);else Me(Q.__webglFramebuffer[Ce],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($e){for(let Ce=0,Ze=xe.length;Ce<Ze;Ce++){const Ye=xe[Ce],_e=s.get(Ye);let Ae=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ae,_e.__webglTexture),te(Ae,Ye),Me(Q.__webglFramebuffer,L,Ye,r.COLOR_ATTACHMENT0+Ce,Ae,0),y(Ye)&&v(Ae)}n.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ce,pe.__webglTexture),te(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)Me(Q.__webglFramebuffer[Ze],L,T,r.COLOR_ATTACHMENT0,Ce,Ze);else Me(Q.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,Ce,0);y(T)&&v(Ce),n.unbindTexture()}L.depthBuffer&&ht(L)}function Lt(L){const T=L.textures;for(let Q=0,pe=T.length;Q<pe;Q++){const xe=T[Q];if(y(xe)){const le=P(L),$e=s.get(xe).__webglTexture;n.bindTexture(le,$e),v(le),n.unbindTexture()}}}const k=[],gt=[];function mt(L){if(L.samples>0){if(ze(L)===!1){const T=L.textures,Q=L.width,pe=L.height;let xe=r.COLOR_BUFFER_BIT;const le=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$e=s.get(L),Ce=T.length>1;if(Ce)for(let Ye=0;Ye<T.length;Ye++)n.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ze=L.texture.mipmaps;Ze&&Ze.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$e.__webglColorRenderbuffer[Ye]);const _e=s.get(T[Ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,xe,r.NEAREST),h===!0&&(k.length=0,gt.length=0,k.push(r.COLOR_ATTACHMENT0+Ye),L.depthBuffer&&L.resolveDepthBuffer===!1&&(k.push(le),gt.push(le),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,gt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,k))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Ye=0;Ye<T.length;Ye++){n.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,$e.__webglColorRenderbuffer[Ye]);const _e=s.get(T[Ye]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,_e,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ct(L){return Math.min(o.maxSamples,L.samples)}function ze(L){const T=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Rt(L){const T=c.render.frame;x.get(L)!==T&&(x.set(L,T),L.update())}function qe(L,T){const Q=L.colorSpace,pe=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==Ys&&Q!==wr&&(bt.getTransfer(Q)===Nt?(pe!==ci||xe!==ji)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",Q)),T}function ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=Y,this.setTexture2D=se,this.setTexture2DArray=de,this.setTexture3D=he,this.setTextureCube=G,this.rebindTextures=$t,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ze}function t3(r,e){function n(s,o=wr){let l;const c=bt.getTransfer(o);if(s===ji)return r.UNSIGNED_BYTE;if(s===pd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===md)return r.UNSIGNED_SHORT_5_5_5_1;if(s===v0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===_0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===x0)return r.BYTE;if(s===g0)return r.SHORT;if(s===Xa)return r.UNSIGNED_SHORT;if(s===hd)return r.INT;if(s===ts)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===Qs)return r.HALF_FLOAT;if(s===y0)return r.ALPHA;if(s===S0)return r.RGB;if(s===ci)return r.RGBA;if(s===qa)return r.DEPTH_COMPONENT;if(s===Ya)return r.DEPTH_STENCIL;if(s===M0)return r.RED;if(s===xd)return r.RED_INTEGER;if(s===gd)return r.RG;if(s===vd)return r.RG_INTEGER;if(s===_d)return r.RGBA_INTEGER;if(s===Ol||s===kl||s===Bl||s===zl)if(c===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Ol)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Ol)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pf||s===Lf||s===Df||s===Nf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Pf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Df)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uf||s===If||s===Ff)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Uf||s===If)return c===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Ff)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Of||s===kf||s===Bf||s===zf||s===Vf||s===Hf||s===Gf||s===Wf||s===Xf||s===jf||s===qf||s===Yf||s===$f||s===Kf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Of)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$f)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zf||s===Qf||s===Jf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Zf)return c===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ed||s===td||s===nd||s===id)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===ed)return l.COMPRESSED_RED_RGTC1_EXT;if(s===td)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===id)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ja?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const n3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class r3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const s=new F0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new Si({vertexShader:n3,fragmentShader:i3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yi(new io(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s3 extends Js{constructor(e,n){super();const s=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,x=null,g=null,_=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",y=new r3,v={},P=n.getContextAttributes();let R=null,U=null;const V=[],D=[],O=new Mt;let X=null;const C=new li;C.viewport=new Yt;const b=new li;b.viewport=new Yt;const F=[C,b],Y=new Ey;let $=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=V[ne];return fe===void 0&&(fe=new lf,V[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=V[ne];return fe===void 0&&(fe=new lf,V[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=V[ne];return fe===void 0&&(fe=new lf,V[ne]=fe),fe.getHandSpace()};function se(ne){const fe=D.indexOf(ne.inputSource);if(fe===-1)return;const Me=V[fe];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,p||c),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function de(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",he);for(let ne=0;ne<V.length;ne++){const fe=D[ne];fe!==null&&(D[ne]=null,V[ne].disconnect(fe))}$=null,ue=null,y.reset();for(const ne in v)delete v[ne];e.setRenderTarget(R),S=null,_=null,g=null,o=null,U=null,We.stop(),s.isPresenting=!1,e.setPixelRatio(X),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,s.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,s.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",de),o.addEventListener("inputsourceschange",he),P.xrCompatible!==!0&&await n.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Oe=null,ke=null;P.depth&&(ke=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=P.stencil?Ya:qa,Oe=P.stencil?ja:ts);const ht={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:l};g=this.getBinding(),_=g.createProjectionLayer(ht),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),U=new ns(_.textureWidth,_.textureHeight,{format:ci,type:ji,depthTexture:new I0(_.textureWidth,_.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Me={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,Me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new ns(S.framebufferWidth,S.framebufferHeight,{format:ci,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),We.setContext(o),We.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function he(ne){for(let fe=0;fe<ne.removed.length;fe++){const Me=ne.removed[fe],Oe=D.indexOf(Me);Oe>=0&&(D[Oe]=null,V[Oe].disconnect(Me))}for(let fe=0;fe<ne.added.length;fe++){const Me=ne.added[fe];let Oe=D.indexOf(Me);if(Oe===-1){for(let ht=0;ht<V.length;ht++)if(ht>=D.length){D.push(Me),Oe=ht;break}else if(D[ht]===null){D[ht]=Me,Oe=ht;break}if(Oe===-1)break}const ke=V[Oe];ke&&ke.connect(Me)}}const G=new ce,re=new ce;function ee(ne,fe,Me){G.setFromMatrixPosition(fe.matrixWorld),re.setFromMatrixPosition(Me.matrixWorld);const Oe=G.distanceTo(re),ke=fe.projectionMatrix.elements,ht=Me.projectionMatrix.elements,$t=ke[14]/(ke[10]-1),ft=ke[14]/(ke[10]+1),Lt=(ke[9]+1)/ke[5],k=(ke[9]-1)/ke[5],gt=(ke[8]-1)/ke[0],mt=(ht[8]+1)/ht[0],Ct=$t*gt,ze=$t*mt,Rt=Oe/(-gt+mt),qe=Rt*-gt;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(qe),ne.translateZ(Rt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ke[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const ot=$t+Rt,L=ft+Rt,T=Ct-qe,Q=ze+(Oe-qe),pe=Lt*ft/L*ot,xe=k*ft/L*ot;ne.projectionMatrix.makePerspective(T,Q,pe,xe,ot,L),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function I(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let fe=ne.near,Me=ne.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),Y.near=b.near=C.near=fe,Y.far=b.far=C.far=Me,($!==Y.near||ue!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),$=Y.near,ue=Y.far),Y.layers.mask=ne.layers.mask|6,C.layers.mask=Y.layers.mask&3,b.layers.mask=Y.layers.mask&5;const Oe=ne.parent,ke=Y.cameras;I(Y,Oe);for(let ht=0;ht<ke.length;ht++)I(ke[ht],Oe);ke.length===2?ee(Y,C,b):Y.projectionMatrix.copy(C.projectionMatrix),te(ne,Y,Oe)};function te(ne,fe,Me){Me===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=rd*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(ne){h=ne,_!==null&&(_.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(ne){return v[ne]};let De=null;function Fe(ne,fe){if(x=fe.getViewerPose(p||c),E=fe,x!==null){const Me=x.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let Oe=!1;Me.length!==Y.cameras.length&&(Y.cameras.length=0,Oe=!0);for(let ft=0;ft<Me.length;ft++){const Lt=Me[ft];let k=null;if(S!==null)k=S.getViewport(Lt);else{const mt=g.getViewSubImage(_,Lt);k=mt.viewport,ft===0&&(e.setRenderTargetTextures(U,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(U))}let gt=F[ft];gt===void 0&&(gt=new li,gt.layers.enable(ft),gt.viewport=new Yt,F[ft]=gt),gt.matrix.fromArray(Lt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Lt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(k.x,k.y,k.width,k.height),ft===0&&(Y.matrix.copy(gt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Oe===!0&&Y.cameras.push(gt)}const ke=o.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){g=s.getBinding();const ft=g.getDepthInformation(Me[0]);ft&&ft.isValid&&ft.texture&&y.init(ft,o.renderState)}if(ke&&ke.includes("camera-access")&&w){e.state.unbindTexture(),g=s.getBinding();for(let ft=0;ft<Me.length;ft++){const Lt=Me[ft].camera;if(Lt){let k=v[Lt];k||(k=new F0,v[Lt]=k);const gt=g.getCameraImage(Lt);k.sourceTexture=gt}}}}for(let Me=0;Me<V.length;Me++){const Oe=D[Me],ke=V[Me];Oe!==null&&ke!==void 0&&ke.update(Oe,fe,p||c)}De&&De(ne,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const We=new k0;We.setAnimationLoop(Fe),this.setAnimationLoop=function(ne){De=ne},this.dispose=function(){}}}const $r=new qi,a3=new nn;function o3(r,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,L0(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,P,R,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),g(y,v)):v.isMeshPhongMaterial?(l(y,v),x(y,v)):v.isMeshStandardMaterial?(l(y,v),_(y,v),v.isMeshPhysicalMaterial&&S(y,v,U)):v.isMeshMatcapMaterial?(l(y,v),E(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),w(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?h(y,v,P,R):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Nn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Nn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=e.get(v),R=P.envMap,U=P.envMapRotation;R&&(y.envMap.value=R,$r.copy(U),$r.x*=-1,$r.y*=-1,$r.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),y.envMapRotation.value.setFromMatrix4(a3.makeRotationFromEuler($r)),y.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,P,R){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=R*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Nn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const P=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function l3(r,e,n,s){let o={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(P,R){const U=R.program;s.uniformBlockBinding(P,U)}function p(P,R){let U=o[P.id];U===void 0&&(E(P),U=x(P),o[P.id]=U,P.addEventListener("dispose",y));const V=R.program;s.updateUBOMapping(P,V);const D=e.render.frame;l[P.id]!==D&&(_(P),l[P.id]=D)}function x(P){const R=g();P.__bindingPointIndex=R;const U=r.createBuffer(),V=P.__size,D=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,V,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,U),U}function g(){for(let P=0;P<f;P++)if(c.indexOf(P)===-1)return c.push(P),P;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const R=o[P.id],U=P.uniforms,V=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let D=0,O=U.length;D<O;D++){const X=Array.isArray(U[D])?U[D]:[U[D]];for(let C=0,b=X.length;C<b;C++){const F=X[C];if(S(F,D,C,V)===!0){const Y=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let ue=0;for(let se=0;se<$.length;se++){const de=$[se],he=w(de);typeof de=="number"||typeof de=="boolean"?(F.__data[0]=de,r.bufferSubData(r.UNIFORM_BUFFER,Y+ue,F.__data)):de.isMatrix3?(F.__data[0]=de.elements[0],F.__data[1]=de.elements[1],F.__data[2]=de.elements[2],F.__data[3]=0,F.__data[4]=de.elements[3],F.__data[5]=de.elements[4],F.__data[6]=de.elements[5],F.__data[7]=0,F.__data[8]=de.elements[6],F.__data[9]=de.elements[7],F.__data[10]=de.elements[8],F.__data[11]=0):(de.toArray(F.__data,ue),ue+=he.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(P,R,U,V){const D=P.value,O=R+"_"+U;if(V[O]===void 0)return typeof D=="number"||typeof D=="boolean"?V[O]=D:V[O]=D.clone(),!0;{const X=V[O];if(typeof D=="number"||typeof D=="boolean"){if(X!==D)return V[O]=D,!0}else if(X.equals(D)===!1)return X.copy(D),!0}return!1}function E(P){const R=P.uniforms;let U=0;const V=16;for(let O=0,X=R.length;O<X;O++){const C=Array.isArray(R[O])?R[O]:[R[O]];for(let b=0,F=C.length;b<F;b++){const Y=C[b],$=Array.isArray(Y.value)?Y.value:[Y.value];for(let ue=0,se=$.length;ue<se;ue++){const de=$[ue],he=w(de),G=U%V,re=G%he.boundary,ee=G+re;U+=re,ee!==0&&V-ee<he.storage&&(U+=V-ee),Y.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=he.storage}}}const D=U%V;return D>0&&(U+=V-D),P.__size=U,P.__cache={},this}function w(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",P),R}function y(P){const R=P.target;R.removeEventListener("dispose",y);const U=c.indexOf(R.__bindingPointIndex);c.splice(U,1),r.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function v(){for(const P in o)r.deleteBuffer(o[P]);c=[],o={},l={}}return{bind:h,update:p,dispose:v}}const u3=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Fi=null;function c3(){return Fi===null&&(Fi=new gy(u3,32,32,gd,Qs),Fi.minFilter=Qn,Fi.magFilter=Qn,Fi.wrapS=zi,Fi.wrapT=zi,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class f3{constructor(e={}){const{canvas:n=H_(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Set([_d,vd,xd]),w=new Set([ji,ts,Xa,ja,pd,md]),y=new Uint32Array(4),v=new Int32Array(4);let P=null,R=null;const U=[],V=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let O=!1;this._outputColorSpace=Hn;let X=0,C=0,b=null,F=-1,Y=null;const $=new Yt,ue=new Yt;let se=null;const de=new Ut(0);let he=0,G=n.width,re=n.height,ee=1,I=null,te=null;const De=new Yt(0,0,G,re),Fe=new Yt(0,0,G,re);let We=!1;const ne=new U0;let fe=!1,Me=!1;const Oe=new nn,ke=new ce,ht=new Yt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Lt(){return b===null?ee:1}let k=s;function gt(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dd}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",Ve,!1),k===null){const j="webgl2";if(k=gt(j,A),k===null)throw gt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let mt,Ct,ze,Rt,qe,ot,L,T,Q,pe,xe,le,$e,Ce,Ze,Ye,_e,Ae,rt,et,Ne,st,B,Re;function Te(){mt=new _E(k),mt.init(),st=new t3(k,mt),Ct=new cE(k,mt,e,st),ze=new J1(k,mt),Ct.reversedDepthBuffer&&_&&ze.buffers.depth.setReversed(!0),Rt=new ME(k),qe=new z1,ot=new e3(k,mt,ze,qe,Ct,st,Rt),L=new dE(D),T=new vE(D),Q=new by(k),B=new lE(k,Q),pe=new yE(k,Q,Rt,B),xe=new TE(k,pe,Q,Rt),rt=new EE(k,Ct,ot),Ye=new fE(qe),le=new B1(D,L,T,mt,Ct,B,Ye),$e=new o3(D,qe),Ce=new H1,Ze=new Y1(mt),Ae=new oE(D,L,T,ze,xe,S,h),_e=new Z1(D,xe,Ct),Re=new l3(k,Rt,Ct,ze),et=new uE(k,mt,Rt),Ne=new SE(k,mt,Rt),Rt.programs=le.programs,D.capabilities=Ct,D.extensions=mt,D.properties=qe,D.renderLists=Ce,D.shadowMap=_e,D.state=ze,D.info=Rt}Te();const we=new s3(D,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(G,re,!1))},this.getSize=function(A){return A.set(G,re)},this.setSize=function(A,j,Z=!0){if(we.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,re=j,n.width=Math.floor(A*ee),n.height=Math.floor(j*ee),Z===!0&&(n.style.width=A+"px",n.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(G*ee,re*ee).floor()},this.setDrawingBufferSize=function(A,j,Z){G=A,re=j,ee=Z,n.width=Math.floor(A*Z),n.height=Math.floor(j*Z),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy($)},this.getViewport=function(A){return A.copy(De)},this.setViewport=function(A,j,Z,ae){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,j,Z,ae),ze.viewport($.copy(De).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(Fe)},this.setScissor=function(A,j,Z,ae){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,j,Z,ae),ze.scissor(ue.copy(Fe).multiplyScalar(ee).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(A){ze.setScissorTest(We=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,Z=!0){let ae=0;if(A){let q=!1;if(b!==null){const be=b.texture.format;q=E.has(be)}if(q){const be=b.texture.type,Pe=w.has(be),Ge=Ae.getClearColor(),Ie=Ae.getClearAlpha(),tt=Ge.r,Ke=Ge.g,Je=Ge.b;Pe?(y[0]=tt,y[1]=Ke,y[2]=Je,y[3]=Ie,k.clearBufferuiv(k.COLOR,0,y)):(v[0]=tt,v[1]=Ke,v[2]=Je,v[3]=Ie,k.clearBufferiv(k.COLOR,0,v))}else ae|=k.COLOR_BUFFER_BIT}j&&(ae|=k.DEPTH_BUFFER_BIT),Z&&(ae|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",Ve,!1),Ae.dispose(),Ce.dispose(),Ze.dispose(),qe.dispose(),L.dispose(),T.dispose(),xe.dispose(),B.dispose(),Re.dispose(),le.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ki),we.removeEventListener("sessionend",ro),In.stop()};function Se(A){A.preventDefault(),cm("WebGLRenderer: Context Lost."),O=!0}function me(){cm("WebGLRenderer: Context Restored."),O=!1;const A=Rt.autoReset,j=_e.enabled,Z=_e.autoUpdate,ae=_e.needsUpdate,q=_e.type;Te(),Rt.autoReset=A,_e.enabled=j,_e.autoUpdate=Z,_e.needsUpdate=ae,_e.type=q}function Ve(A){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function lt(A){const j=A.target;j.removeEventListener("dispose",lt),Dt(j)}function Dt(A){Et(A),qe.remove(A)}function Et(A){const j=qe.get(A).programs;j!==void 0&&(j.forEach(function(Z){le.releaseProgram(Z)}),A.isShaderMaterial&&le.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,Z,ae,q,be){j===null&&(j=$t);const Pe=q.isMesh&&q.matrixWorld.determinant()<0,Ge=ao(A,j,Z,ae,q);ze.setMaterial(ae,Pe);let Ie=Z.index,tt=1;if(ae.wireframe===!0){if(Ie=pe.getWireframeAttribute(Z),Ie===void 0)return;tt=2}const Ke=Z.drawRange,Je=Z.attributes.position;let at=Ke.start*tt,At=(Ke.start+Ke.count)*tt;be!==null&&(at=Math.max(at,be.start*tt),At=Math.min(At,(be.start+be.count)*tt)),Ie!==null?(at=Math.max(at,0),At=Math.min(At,Ie.count)):Je!=null&&(at=Math.max(at,0),At=Math.min(At,Je.count));const Bt=At-at;if(Bt<0||Bt===1/0)return;B.setup(q,ae,Ge,Z,Ie);let zt,Tt=et;if(Ie!==null&&(zt=Q.get(Ie),Tt=Ne,Tt.setIndex(zt)),q.isMesh)ae.wireframe===!0?(ze.setLineWidth(ae.wireframeLinewidth*Lt()),Tt.setMode(k.LINES)):Tt.setMode(k.TRIANGLES);else if(q.isLine){let Qe=ae.linewidth;Qe===void 0&&(Qe=1),ze.setLineWidth(Qe*Lt()),q.isLineSegments?Tt.setMode(k.LINES):q.isLineLoop?Tt.setMode(k.LINE_LOOP):Tt.setMode(k.LINE_STRIP)}else q.isPoints?Tt.setMode(k.POINTS):q.isSprite&&Tt.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)$a("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qe=q._multiDrawStarts,Pt=q._multiDrawCounts,_t=q._multiDrawCount,yn=Ie?Q.get(Ie).bytesPerElement:1,Qi=qe.get(ae).currentProgram.getUniforms();for(let fn=0;fn<_t;fn++)Qi.setValue(k,"_gl_DrawID",fn),Tt.render(Qe[fn]/yn,Pt[fn])}else if(q.isInstancedMesh)Tt.renderInstances(at,Bt,q.count);else if(Z.isInstancedBufferGeometry){const Qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Pt=Math.min(Z.instanceCount,Qe);Tt.renderInstances(at,Bt,Pt)}else Tt.render(at,Bt)};function Un(A,j,Z){A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,ss(A,j,Z),A.side=Cr,A.needsUpdate=!0,ss(A,j,Z),A.side=Bi):ss(A,j,Z)}this.compile=function(A,j,Z=null){Z===null&&(Z=A),R=Ze.get(Z),R.init(j),V.push(R),Z.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),A!==Z&&A.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),R.setupLights();const ae=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const be=q.material;if(be)if(Array.isArray(be))for(let Pe=0;Pe<be.length;Pe++){const Ge=be[Pe];Un(Ge,Z,q),ae.add(Ge)}else Un(be,Z,q),ae.add(be)}),R=V.pop(),ae},this.compileAsync=function(A,j,Z=null){const ae=this.compile(A,j,Z);return new Promise(q=>{function be(){if(ae.forEach(function(Pe){qe.get(Pe).currentProgram.isReady()&&ae.delete(Pe)}),ae.size===0){q(A);return}setTimeout(be,10)}mt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let cn=null;function ta(A){cn&&cn(A)}function Ki(){In.stop()}function ro(){In.start()}const In=new k0;In.setAnimationLoop(ta),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(A){cn=A,we.setAnimationLoop(A),A===null?In.stop():In.start()},we.addEventListener("sessionstart",Ki),we.addEventListener("sessionend",ro),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(j),j=we.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,j,b),R=Ze.get(A,V.length),R.init(j),V.push(R),Oe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ne.setFromProjectionMatrix(Oe,vi,j.reversedDepth),Me=this.localClippingEnabled,fe=Ye.init(this.clippingPlanes,Me),P=Ce.get(A,U.length),P.init(),U.push(P),we.enabled===!0&&we.isPresenting===!0){const be=D.xr.getDepthSensingMesh();be!==null&&Zi(be,j,-1/0,D.sortObjects)}Zi(A,j,0,D.sortObjects),P.finish(),D.sortObjects===!0&&P.sort(I,te),ft=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ft&&Ae.addToRenderList(P,A),this.info.render.frame++,fe===!0&&Ye.beginShadows();const Z=R.state.shadowsArray;_e.render(Z,A,j),fe===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=P.opaque,q=P.transmissive;if(R.setupLights(),j.isArrayCamera){const be=j.cameras;if(q.length>0)for(let Pe=0,Ge=be.length;Pe<Ge;Pe++){const Ie=be[Pe];is(ae,q,A,Ie)}ft&&Ae.render(A);for(let Pe=0,Ge=be.length;Pe<Ge;Pe++){const Ie=be[Pe];Lr(P,A,Ie,Ie.viewport)}}else q.length>0&&is(ae,q,A,j),ft&&Ae.render(A),Lr(P,A,j);b!==null&&C===0&&(ot.updateMultisampleRenderTarget(b),ot.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(D,A,j),B.resetDefaultState(),F=-1,Y=null,V.pop(),V.length>0?(R=V[V.length-1],fe===!0&&Ye.setGlobalState(D.clippingPlanes,R.state.camera)):R=null,U.pop(),U.length>0?P=U[U.length-1]:P=null};function Zi(A,j,Z,ae){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)R.pushLight(A),A.castShadow&&R.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){ae&&ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Oe);const Pe=xe.update(A),Ge=A.material;Ge.visible&&P.push(A,Pe,Ge,Z,ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ne.intersectsObject(A))){const Pe=xe.update(A),Ge=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ht.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ht.copy(Pe.boundingSphere.center)),ht.applyMatrix4(A.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ge)){const Ie=Pe.groups;for(let tt=0,Ke=Ie.length;tt<Ke;tt++){const Je=Ie[tt],at=Ge[Je.materialIndex];at&&at.visible&&P.push(A,Pe,at,Z,ht.z,Je)}}else Ge.visible&&P.push(A,Pe,Ge,Z,ht.z,null)}}const be=A.children;for(let Pe=0,Ge=be.length;Pe<Ge;Pe++)Zi(be[Pe],j,Z,ae)}function Lr(A,j,Z,ae){const{opaque:q,transmissive:be,transparent:Pe}=A;R.setupLightsView(Z),fe===!0&&Ye.setGlobalState(D.clippingPlanes,Z),ae&&ze.viewport($.copy(ae)),q.length>0&&rs(q,j,Z),be.length>0&&rs(be,j,Z),Pe.length>0&&rs(Pe,j,Z),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function is(A,j,Z,ae){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;R.state.transmissionRenderTarget[ae.id]===void 0&&(R.state.transmissionRenderTarget[ae.id]=new ns(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Qs:ji,minFilter:Jr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const be=R.state.transmissionRenderTarget[ae.id],Pe=ae.viewport||$;be.setSize(Pe.z*D.transmissionResolutionScale,Pe.w*D.transmissionResolutionScale);const Ge=D.getRenderTarget(),Ie=D.getActiveCubeFace(),tt=D.getActiveMipmapLevel();D.setRenderTarget(be),D.getClearColor(de),he=D.getClearAlpha(),he<1&&D.setClearColor(16777215,.5),D.clear(),ft&&Ae.render(Z);const Ke=D.toneMapping;D.toneMapping=Ar;const Je=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),R.setupLightsView(ae),fe===!0&&Ye.setGlobalState(D.clippingPlanes,ae),rs(A,Z,ae),ot.updateMultisampleRenderTarget(be),ot.updateRenderTargetMipmap(be),mt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let At=0,Bt=j.length;At<Bt;At++){const zt=j[At],{object:Tt,geometry:Qe,material:Pt,group:_t}=zt;if(Pt.side===Bi&&Tt.layers.test(ae.layers)){const yn=Pt.side;Pt.side=Nn,Pt.needsUpdate=!0,so(Tt,Z,ae,Qe,Pt,_t),Pt.side=yn,Pt.needsUpdate=!0,at=!0}}at===!0&&(ot.updateMultisampleRenderTarget(be),ot.updateRenderTargetMipmap(be))}D.setRenderTarget(Ge,Ie,tt),D.setClearColor(de,he),Je!==void 0&&(ae.viewport=Je),D.toneMapping=Ke}function rs(A,j,Z){const ae=j.isScene===!0?j.overrideMaterial:null;for(let q=0,be=A.length;q<be;q++){const Pe=A[q],{object:Ge,geometry:Ie,group:tt}=Pe;let Ke=Pe.material;Ke.allowOverride===!0&&ae!==null&&(Ke=ae),Ge.layers.test(Z.layers)&&so(Ge,j,Z,Ie,Ke,tt)}}function so(A,j,Z,ae,q,be){A.onBeforeRender(D,j,Z,ae,q,be),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(D,j,Z,ae,A,be),q.transparent===!0&&q.side===Bi&&q.forceSinglePass===!1?(q.side=Nn,q.needsUpdate=!0,D.renderBufferDirect(Z,j,ae,q,A,be),q.side=Cr,q.needsUpdate=!0,D.renderBufferDirect(Z,j,ae,q,A,be),q.side=Bi):D.renderBufferDirect(Z,j,ae,q,A,be),A.onAfterRender(D,j,Z,ae,q,be)}function ss(A,j,Z){j.isScene!==!0&&(j=$t);const ae=qe.get(A),q=R.state.lights,be=R.state.shadowsArray,Pe=q.state.version,Ge=le.getParameters(A,q.state,be,j,Z),Ie=le.getProgramCacheKey(Ge);let tt=ae.programs;ae.environment=A.isMeshStandardMaterial?j.environment:null,ae.fog=j.fog,ae.envMap=(A.isMeshStandardMaterial?T:L).get(A.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",lt),tt=new Map,ae.programs=tt);let Ke=tt.get(Ie);if(Ke!==void 0){if(ae.currentProgram===Ke&&ae.lightsStateVersion===Pe)return na(A,Ge),Ke}else Ge.uniforms=le.getUniforms(A),A.onBeforeCompile(Ge,D),Ke=le.acquireProgram(Ge,Ie),tt.set(Ie,Ke),ae.uniforms=Ge.uniforms;const Je=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ye.uniform),na(A,Ge),ae.needsLights=oo(A),ae.lightsStateVersion=Pe,ae.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),ae.currentProgram=Ke,ae.uniformsList=null,Ke}function fi(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Vl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function na(A,j){const Z=qe.get(A);Z.outputColorSpace=j.outputColorSpace,Z.batching=j.batching,Z.batchingColor=j.batchingColor,Z.instancing=j.instancing,Z.instancingColor=j.instancingColor,Z.instancingMorph=j.instancingMorph,Z.skinning=j.skinning,Z.morphTargets=j.morphTargets,Z.morphNormals=j.morphNormals,Z.morphColors=j.morphColors,Z.morphTargetsCount=j.morphTargetsCount,Z.numClippingPlanes=j.numClippingPlanes,Z.numIntersection=j.numClipIntersection,Z.vertexAlphas=j.vertexAlphas,Z.vertexTangents=j.vertexTangents,Z.toneMapping=j.toneMapping}function ao(A,j,Z,ae,q){j.isScene!==!0&&(j=$t),ot.resetTextureUnits();const be=j.fog,Pe=ae.isMeshStandardMaterial?j.environment:null,Ge=b===null?D.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ys,Ie=(ae.isMeshStandardMaterial?T:L).get(ae.envMap||Pe),tt=ae.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ke=!!Z.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Je=!!Z.morphAttributes.position,at=!!Z.morphAttributes.normal,At=!!Z.morphAttributes.color;let Bt=Ar;ae.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Bt=D.toneMapping);const zt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Tt=zt!==void 0?zt.length:0,Qe=qe.get(ae),Pt=R.state.lights;if(fe===!0&&(Me===!0||A!==Y)){const Jt=A===Y&&ae.id===F;Ye.setState(ae,A,Jt)}let _t=!1;ae.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Pt.state.version||Qe.outputColorSpace!==Ge||q.isBatchedMesh&&Qe.batching===!1||!q.isBatchedMesh&&Qe.batching===!0||q.isBatchedMesh&&Qe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Qe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Qe.instancing===!1||!q.isInstancedMesh&&Qe.instancing===!0||q.isSkinnedMesh&&Qe.skinning===!1||!q.isSkinnedMesh&&Qe.skinning===!0||q.isInstancedMesh&&Qe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Qe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Qe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Qe.instancingMorph===!1&&q.morphTexture!==null||Qe.envMap!==Ie||ae.fog===!0&&Qe.fog!==be||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ye.numPlanes||Qe.numIntersection!==Ye.numIntersection)||Qe.vertexAlphas!==tt||Qe.vertexTangents!==Ke||Qe.morphTargets!==Je||Qe.morphNormals!==at||Qe.morphColors!==At||Qe.toneMapping!==Bt||Qe.morphTargetsCount!==Tt)&&(_t=!0):(_t=!0,Qe.__version=ae.version);let yn=Qe.currentProgram;_t===!0&&(yn=ss(ae,j,q));let Qi=!1,fn=!1,Ji=!1;const It=yn.getUniforms(),Kt=Qe.uniforms;if(ze.useProgram(yn.program)&&(Qi=!0,fn=!0,Ji=!0),ae.id!==F&&(F=ae.id,fn=!0),Qi||Y!==A){ze.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(k,"projectionMatrix",A.projectionMatrix),It.setValue(k,"viewMatrix",A.matrixWorldInverse);const ct=It.map.cameraPosition;ct!==void 0&&ct.setValue(k,ke.setFromMatrixPosition(A.matrixWorld)),Ct.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&It.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,fn=!0,Ji=!0)}if(q.isSkinnedMesh){It.setOptional(k,q,"bindMatrix"),It.setOptional(k,q,"bindMatrixInverse");const Jt=q.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),It.setValue(k,"boneTexture",Jt.boneTexture,ot))}q.isBatchedMesh&&(It.setOptional(k,q,"batchingTexture"),It.setValue(k,"batchingTexture",q._matricesTexture,ot),It.setOptional(k,q,"batchingIdTexture"),It.setValue(k,"batchingIdTexture",q._indirectTexture,ot),It.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&It.setValue(k,"batchingColorTexture",q._colorsTexture,ot));const wn=Z.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&rt.update(q,Z,yn),(fn||Qe.receiveShadow!==q.receiveShadow)&&(Qe.receiveShadow=q.receiveShadow,It.setValue(k,"receiveShadow",q.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Kt.envMap.value=Ie,Kt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&j.environment!==null&&(Kt.envMapIntensity.value=j.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=c3()),fn&&(It.setValue(k,"toneMappingExposure",D.toneMappingExposure),Qe.needsLights&&eu(Kt,Ji),be&&ae.fog===!0&&$e.refreshFogUniforms(Kt,be),$e.refreshMaterialUniforms(Kt,ae,ee,re,R.state.transmissionRenderTarget[A.id]),Vl.upload(k,fi(Qe),Kt,ot)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Vl.upload(k,fi(Qe),Kt,ot),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&It.setValue(k,"center",q.center),It.setValue(k,"modelViewMatrix",q.modelViewMatrix),It.setValue(k,"normalMatrix",q.normalMatrix),It.setValue(k,"modelMatrix",q.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Jt=ae.uniformsGroups;for(let ct=0,as=Jt.length;ct<as;ct++){const di=Jt[ct];Re.update(di,yn),Re.bind(di,yn)}}return yn}function eu(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function oo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,j,Z){const ae=qe.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),qe.get(A.texture).__webglTexture=j,qe.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:Z,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const Z=qe.get(A);Z.__webglFramebuffer=j,Z.__useDefaultFramebuffer=j===void 0};const lo=k.createFramebuffer();this.setRenderTarget=function(A,j=0,Z=0){b=A,X=j,C=Z;let ae=!0,q=null,be=!1,Pe=!1;if(A){const Ie=qe.get(A);if(Ie.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(k.FRAMEBUFFER,null),ae=!1;else if(Ie.__webglFramebuffer===void 0)ot.setupRenderTarget(A);else if(Ie.__hasExternalTextures)ot.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Ie.__boundDepthTexture!==Je){if(Je!==null&&qe.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Pe=!0);const Ke=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[j])?q=Ke[j][Z]:q=Ke[j],be=!0):A.samples>0&&ot.useMultisampledRTT(A)===!1?q=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?q=Ke[Z]:q=Ke,$.copy(A.viewport),ue.copy(A.scissor),se=A.scissorTest}else $.copy(De).multiplyScalar(ee).floor(),ue.copy(Fe).multiplyScalar(ee).floor(),se=We;if(Z!==0&&(q=lo),ze.bindFramebuffer(k.FRAMEBUFFER,q)&&ae&&ze.drawBuffers(A,q),ze.viewport($),ze.scissor(ue),ze.setScissorTest(se),be){const Ie=qe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,Z)}else if(Pe){const Ie=j;for(let tt=0;tt<A.textures.length;tt++){const Ke=qe.get(A.textures[tt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+tt,Ke.__webglTexture,Z,Ie)}}else if(A!==null&&Z!==0){const Ie=qe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ie.__webglTexture,Z)}F=-1},this.readRenderTargetPixels=function(A,j,Z,ae,q,be,Pe,Ge=0){if(!(A&&A.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){ze.bindFramebuffer(k.FRAMEBUFFER,Ie);try{const tt=A.textures[Ge],Ke=tt.format,Je=tt.type;if(!Ct.textureFormatReadable(Ke)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Je)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ae&&Z>=0&&Z<=A.height-q&&(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ge),k.readPixels(j,Z,ae,q,st.convert(Ke),st.convert(Je),be))}finally{const tt=b!==null?qe.get(b).__webglFramebuffer:null;ze.bindFramebuffer(k.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(A,j,Z,ae,q,be,Pe,Ge=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie)if(j>=0&&j<=A.width-ae&&Z>=0&&Z<=A.height-q){ze.bindFramebuffer(k.FRAMEBUFFER,Ie);const tt=A.textures[Ge],Ke=tt.format,Je=tt.type;if(!Ct.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.bufferData(k.PIXEL_PACK_BUFFER,be.byteLength,k.STREAM_READ),A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ge),k.readPixels(j,Z,ae,q,st.convert(Ke),st.convert(Je),0);const At=b!==null?qe.get(b).__webglFramebuffer:null;ze.bindFramebuffer(k.FRAMEBUFFER,At);const Bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await G_(k,Bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,be),k.deleteBuffer(at),k.deleteSync(Bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,Z=0){const ae=Math.pow(2,-Z),q=Math.floor(A.image.width*ae),be=Math.floor(A.image.height*ae),Pe=j!==null?j.x:0,Ge=j!==null?j.y:0;ot.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,Pe,Ge,q,be),ze.unbindTexture()};const uo=k.createFramebuffer(),co=k.createFramebuffer();this.copyTextureToTexture=function(A,j,Z=null,ae=null,q=0,be=null){be===null&&(q!==0?($a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=q,q=0):be=0);let Pe,Ge,Ie,tt,Ke,Je,at,At,Bt;const zt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(Z!==null)Pe=Z.max.x-Z.min.x,Ge=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,tt=Z.min.x,Ke=Z.min.y,Je=Z.isBox3?Z.min.z:0;else{const wn=Math.pow(2,-q);Pe=Math.floor(zt.width*wn),Ge=Math.floor(zt.height*wn),A.isDataArrayTexture?Ie=zt.depth:A.isData3DTexture?Ie=Math.floor(zt.depth*wn):Ie=1,tt=0,Ke=0,Je=0}ae!==null?(at=ae.x,At=ae.y,Bt=ae.z):(at=0,At=0,Bt=0);const Tt=st.convert(j.format),Qe=st.convert(j.type);let Pt;j.isData3DTexture?(ot.setTexture3D(j,0),Pt=k.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ot.setTexture2DArray(j,0),Pt=k.TEXTURE_2D_ARRAY):(ot.setTexture2D(j,0),Pt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=k.getParameter(k.UNPACK_ROW_LENGTH),yn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Qi=k.getParameter(k.UNPACK_SKIP_PIXELS),fn=k.getParameter(k.UNPACK_SKIP_ROWS),Ji=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,zt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,zt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ke),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Je);const It=A.isDataArrayTexture||A.isData3DTexture,Kt=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const wn=qe.get(A),Jt=qe.get(j),ct=qe.get(wn.__renderTarget),as=qe.get(Jt.__renderTarget);ze.bindFramebuffer(k.READ_FRAMEBUFFER,ct.__webglFramebuffer),ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let di=0;di<Ie;di++)It&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,q,Je+di),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qe.get(j).__webglTexture,be,Bt+di)),k.blitFramebuffer(tt,Ke,Pe,Ge,at,At,Pe,Ge,k.DEPTH_BUFFER_BIT,k.NEAREST);ze.bindFramebuffer(k.READ_FRAMEBUFFER,null),ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||qe.has(A)){const wn=qe.get(A),Jt=qe.get(j);ze.bindFramebuffer(k.READ_FRAMEBUFFER,uo),ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,co);for(let ct=0;ct<Ie;ct++)It?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wn.__webglTexture,q,Je+ct):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,wn.__webglTexture,q),Kt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Jt.__webglTexture,be,Bt+ct):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Jt.__webglTexture,be),q!==0?k.blitFramebuffer(tt,Ke,Pe,Ge,at,At,Pe,Ge,k.COLOR_BUFFER_BIT,k.NEAREST):Kt?k.copyTexSubImage3D(Pt,be,at,At,Bt+ct,tt,Ke,Pe,Ge):k.copyTexSubImage2D(Pt,be,at,At,tt,Ke,Pe,Ge);ze.bindFramebuffer(k.READ_FRAMEBUFFER,null),ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Kt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Pt,be,at,At,Bt,Pe,Ge,Ie,Tt,Qe,zt.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(Pt,be,at,At,Bt,Pe,Ge,Ie,Tt,zt.data):k.texSubImage3D(Pt,be,at,At,Bt,Pe,Ge,Ie,Tt,Qe,zt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,be,at,At,Pe,Ge,Tt,Qe,zt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,be,at,At,zt.width,zt.height,Tt,zt.data):k.texSubImage2D(k.TEXTURE_2D,be,at,At,Pe,Ge,Tt,Qe,zt);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qi),k.pixelStorei(k.UNPACK_SKIP_ROWS,fn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ji),be===0&&j.generateMipmaps&&k.generateMipmap(Pt),ze.unbindTexture()},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&ot.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ot.setTextureCube(A,0):A.isData3DTexture?ot.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ot.setTexture2DArray(A,0):ot.setTexture2D(A,0),ze.unbindTexture()},this.resetState=function(){X=0,C=0,b=null,ze.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}const Hl=8,d3=`
#define MAX_COLORS ${Hl}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform float uOffset; // horizontal band offset control
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  // Bring bands into view with configurable offset (keeps original when uOffset=-7.56)
  q += 0.2 * cos(t) + uOffset;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,h3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function Jl({className:r,style:e,rotation:n=45,speed:s=.2,colors:o=[],transparent:l=!0,autoRotate:c=0,scale:f=1,frequency:h=1,warpStrength:p=1,mouseInfluence:x=1,parallax:g=.5,noise:_=.1,offset:S=-2.2}){const E=oe.useRef(null),w=oe.useRef(null),y=oe.useRef(null),v=oe.useRef(null),P=oe.useRef(null),R=oe.useRef(n),U=oe.useRef(c),V=oe.useRef(new Mt(0,0)),D=oe.useRef(new Mt(0,0)),O=oe.useRef(8);return oe.useEffect(()=>{const X=E.current,C=new xy,b=new O0(-1,1,1,-1,0,1),F=new io(2,2),Y=Array.from({length:Hl},()=>new ce(0,0,0)),$=new Si({vertexShader:h3,fragmentShader:d3,uniforms:{uCanvas:{value:new Mt(1,1)},uTime:{value:0},uSpeed:{value:s},uRot:{value:new Mt(1,0)},uColorCount:{value:0},uColors:{value:Y},uTransparent:{value:l?1:0},uScale:{value:f},uFrequency:{value:h},uWarpStrength:{value:p},uPointer:{value:new Mt(0,0)},uMouseInfluence:{value:x},uParallax:{value:g},uNoise:{value:_},uOffset:{value:S}},premultipliedAlpha:!0,transparent:!0});v.current=$;const ue=new Yi(F,$);C.add(ue);const se=new f3({antialias:!1,powerPreference:"high-performance",alpha:!0});w.current=se,se.outputColorSpace=Hn,se.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),se.setClearColor(0,l?0:1),se.domElement.style.width="100%",se.domElement.style.height="100%",se.domElement.style.display="block",X.appendChild(se.domElement);const de=new Ty,he=()=>{const re=X.clientWidth||1,ee=X.clientHeight||1;se.setSize(re,ee,!1),$.uniforms.uCanvas.value.set(re,ee)};if(he(),"ResizeObserver"in window){const re=new ResizeObserver(he);re.observe(X),P.current=re}else window.addEventListener("resize",he);const G=()=>{const re=de.getDelta(),ee=de.elapsedTime;$.uniforms.uTime.value=ee;const te=(R.current%360+U.current*ee)*Math.PI/180,De=Math.cos(te),Fe=Math.sin(te);$.uniforms.uRot.value.set(De,Fe);const We=D.current,ne=V.current,fe=Math.min(1,re*O.current);We.lerp(ne,fe),$.uniforms.uPointer.value.copy(We),se.render(C,b),y.current=requestAnimationFrame(G)};return y.current=requestAnimationFrame(G),()=>{y.current!==null&&cancelAnimationFrame(y.current),P.current?P.current.disconnect():window.removeEventListener("resize",he),F.dispose(),$.dispose(),se.dispose(),se.domElement&&se.domElement.parentElement===X&&X.removeChild(se.domElement)}},[h,x,_,g,f,s,l,p]),oe.useEffect(()=>{const X=v.current,C=w.current;if(!X)return;R.current=n,U.current=c,X.uniforms.uSpeed.value=s,X.uniforms.uScale.value=f,X.uniforms.uFrequency.value=h,X.uniforms.uWarpStrength.value=p,X.uniforms.uMouseInfluence.value=x,X.uniforms.uParallax.value=g,X.uniforms.uNoise.value=_,X.uniforms.uOffset.value=S;const b=Y=>{const $=Y.replace("#","").trim(),ue=$.length===3?[parseInt($[0]+$[0],16),parseInt($[1]+$[1],16),parseInt($[2]+$[2],16)]:[parseInt($.slice(0,2),16),parseInt($.slice(2,4),16),parseInt($.slice(4,6),16)];return new ce(ue[0]/255,ue[1]/255,ue[2]/255)},F=(o||[]).filter(Boolean).slice(0,Hl).map(b);for(let Y=0;Y<Hl;Y++){const $=X.uniforms.uColors.value[Y];Y<F.length?$.copy(F[Y]):$.set(0,0,0)}X.uniforms.uColorCount.value=F.length,X.uniforms.uTransparent.value=l?1:0,C&&C.setClearColor(0,l?0:1)},[n,c,s,f,h,p,x,g,_,S,o,l]),oe.useEffect(()=>{const X=v.current,C=E.current;if(!X||!C)return;const b=F=>{const Y=C.getBoundingClientRect(),$=(F.clientX-Y.left)/(Y.width||1)*2-1,ue=-((F.clientY-Y.top)/(Y.height||1)*2-1);V.current.set($,ue)};return C.addEventListener("pointermove",b),()=>{C.removeEventListener("pointermove",b)}},[]),H.jsx("div",{ref:E,className:`color-bends-container ${r}`,style:e})}function p3(){return H.jsxs("div",{className:"home-page",children:[H.jsx(Jl,{colors:["#ff0080","#ff8c00","#ffff00","#00ff00","#00ffff","#0080ff","#8000ff"],rotation:20,speed:.14,scale:1.2,frequency:1.8,warpStrength:1.8,mouseInfluence:.6,parallax:.6,noise:.03,transparent:!1,className:"home-background"}),H.jsxs("div",{className:"home-content",children:[H.jsxs("div",{className:"hero-section",children:[H.jsx("h1",{className:"hero-title",children:"Motion Analysis Platform"}),H.jsx("p",{className:"hero-subtitle",children:"AI-Powered Exercise Form Analysis with Real-Time Feedback"}),H.jsx("p",{className:"hero-description",children:"Upload your workout videos and get instant feedback on your form, rep counting, and technique using advanced computer vision and machine learning."}),H.jsxs("div",{className:"cta-buttons",children:[H.jsx(ki,{to:"/upload",className:"btn btn-primary",children:"Get Started"}),H.jsx(ki,{to:"/about",className:"btn btn-secondary",children:"Learn More"})]})]}),H.jsxs("div",{className:"features-section",children:[H.jsxs("div",{className:"feature-card",children:[H.jsx("div",{className:"feature-icon",children:"🎯"}),H.jsx("h3",{children:"Real-Time Analysis"}),H.jsx("p",{children:"Get instant feedback on your exercise form as the video processes"})]}),H.jsxs("div",{className:"feature-card",children:[H.jsx("div",{className:"feature-icon",children:"📊"}),H.jsx("h3",{children:"Rep Counting"}),H.jsx("p",{children:"Automatic repetition counting with angle measurements"})]}),H.jsxs("div",{className:"feature-card",children:[H.jsx("div",{className:"feature-icon",children:"🤖"}),H.jsx("h3",{children:"AI-Powered"}),H.jsx("p",{children:"LSTM-based motion classification with MediaPipe pose estimation"})]})]})]})]})}function m3(){var C;const[r,e]=oe.useState(null),[n,s]=oe.useState(null),[o,l]=oe.useState(!1),[c,f]=oe.useState([]),[h,p]=oe.useState(null),[x,g]=oe.useState(null),[_,S]=oe.useState(0),[E,w]=oe.useState(0),y=oe.useRef(null),v=oe.useRef(null),P=oe.useRef(null),R=b=>{const F=b.target.files[0];if(F&&F.type.startsWith("video/")){e(F),g(null),f([]),p(null),S(0);const Y=URL.createObjectURL(F);s(Y)}else g("Please select a valid video file (MP4, MOV, AVI, etc.)"),e(null),s(null)};oe.useEffect(()=>()=>{n&&URL.revokeObjectURL(n)},[n]),oe.useEffect(()=>(o&&!P.current?(v.current=Date.now(),P.current=setInterval(()=>{w(Math.floor((Date.now()-v.current)/1e3))},1e3)):!o&&P.current&&(clearInterval(P.current),P.current=null),()=>{P.current&&clearInterval(P.current)}),[o]);const U=async()=>{if(!r){g("Please select a video file first");return}l(!0),f([]),p(null),g(null),S(0),w(0);const b=new FormData;b.append("file",r);try{const F=await fetch("/inference/upload/",{method:"POST",body:b});if(!F.ok)throw new Error(`Upload failed: ${F.statusText}`);const Y=F.body.getReader(),$=new TextDecoder;let ue="",se=0;const de=60;for(;;){const{done:he,value:G}=await Y.read();if(he)break;ue+=$.decode(G,{stream:!0});const re=ue.split(`

`);ue=re.pop()||"";for(const ee of re)if(ee.startsWith("data: ")){const I=ee.substring(6).trim();try{const te=JSON.parse(I);if(te.error){g(te.error),l(!1);return}else te.final_label!==void 0?(p(te),S(100)):(se++,f(De=>[...De,te].slice(-100)),S(Math.min(95,se/de*100)))}catch(te){console.error("Failed to parse SSE data:",I,te)}}}}catch(F){g(`Error: ${F.message}. Make sure the Django backend is running.`)}finally{l(!1)}},V=()=>{e(null),f([]),p(null),g(null),S(0),w(0),n&&(URL.revokeObjectURL(n),s(null)),y.current&&(y.current.value="")},D=()=>{if(!h&&c.length===0)return;const b={filename:r==null?void 0:r.name,timestamp:new Date().toISOString(),exercise:(h==null?void 0:h.final_label)||"Unknown",totalReps:(h==null?void 0:h.total_count)||0,processingTime:E,frames:c.map(ue=>({frame:ue.frame,kneeAngle:ue.knee_angle,state:ue.state,count:ue.count}))},F=new Blob([JSON.stringify(b,null,2)],{type:"application/json"}),Y=URL.createObjectURL(F),$=document.createElement("a");$.href=Y,$.download=`motion-analysis-${Date.now()}.json`,document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(Y)},O=c.length>0?c[c.length-1]:null,X=c.length>0?(c.reduce((b,F)=>b+(F.knee_angle||0),0)/c.length).toFixed(1):0;return H.jsxs("div",{className:"video-upload",children:[H.jsxs("div",{className:"upload-section",children:[H.jsxs("div",{className:"file-input-wrapper",children:[H.jsx("input",{ref:y,type:"file",accept:"video/*",onChange:R,disabled:o,className:"file-input",id:"video-input"}),H.jsxs("label",{htmlFor:"video-input",className:`file-input-label ${o?"disabled":""}`,children:[H.jsx("span",{className:"upload-icon",children:"📹"}),H.jsx("span",{className:"upload-text",children:r?"Change Video":"Choose Video File"}),H.jsx("span",{className:"upload-hint",children:"MP4, MOV, AVI supported"})]})]}),n&&H.jsxs("div",{className:"video-preview",children:[H.jsx("video",{src:n,controls:!0,className:"preview-video"}),H.jsxs("div",{className:"file-info",children:[H.jsxs("p",{children:["📹 ",r.name]}),H.jsxs("p",{className:"file-size",children:[(r.size/1024/1024).toFixed(2)," MB"]})]})]}),H.jsxs("div",{className:"button-group",children:[H.jsx("button",{onClick:U,disabled:!r||o,className:"btn btn-primary",children:o?H.jsxs(H.Fragment,{children:[H.jsx("span",{className:"btn-spinner"}),"Processing... ",E,"s"]}):H.jsx(H.Fragment,{children:"🚀 Upload & Analyze"})}),(r||c.length>0)&&H.jsx("button",{onClick:V,disabled:o,className:"btn btn-secondary",children:"🔄 Reset"}),h&&H.jsx("button",{onClick:D,className:"btn btn-success",children:"💾 Export Results"})]}),o&&H.jsxs("div",{className:"progress-container",children:[H.jsx("div",{className:"progress-bar",children:H.jsx("div",{className:"progress-fill",style:{width:`${_}%`}})}),H.jsxs("p",{className:"progress-text",children:[_.toFixed(0),"% complete"]})]})]}),x&&H.jsxs("div",{className:"error-message",children:["⚠️ ",x]}),o&&c.length===0&&H.jsxs("div",{className:"loading",children:[H.jsx("div",{className:"spinner"}),H.jsx("p",{children:"Processing video... This may take a moment"})]}),O&&H.jsxs("div",{className:"live-feedback",children:[H.jsx("h2",{children:"📊 Live Feedback"}),H.jsxs("div",{className:"metrics",children:[H.jsxs("div",{className:"metric-card highlight",children:[H.jsx("div",{className:"metric-value",children:O.count}),H.jsx("div",{className:"metric-label",children:"Reps Count"})]}),H.jsxs("div",{className:"metric-card",children:[H.jsxs("div",{className:"metric-value",children:[(C=O.knee_angle)==null?void 0:C.toFixed(1),"°"]}),H.jsx("div",{className:"metric-label",children:"Current Angle"})]}),H.jsxs("div",{className:"metric-card",children:[H.jsxs("div",{className:"metric-value",children:[X,"°"]}),H.jsx("div",{className:"metric-label",children:"Avg Angle"})]}),H.jsxs("div",{className:"metric-card",children:[H.jsxs("div",{className:"metric-value state-indicator","data-state":O.state,children:[O.state==="up"?"⬆️":"⬇️"," ",O.state]}),H.jsx("div",{className:"metric-label",children:"Position"})]}),H.jsxs("div",{className:"metric-card",children:[H.jsxs("div",{className:"metric-value",children:[O.frame,"/",c.length]}),H.jsx("div",{className:"metric-label",children:"Frame"})]}),H.jsxs("div",{className:"metric-card",children:[H.jsxs("div",{className:"metric-value",children:[E,"s"]}),H.jsx("div",{className:"metric-label",children:"Duration"})]})]})]}),h&&H.jsxs("div",{className:"final-result",children:[H.jsx("h2",{children:"✅ Analysis Complete"}),H.jsxs("div",{className:"result-content",children:[H.jsxs("div",{className:"result-item",children:[H.jsx("span",{className:"result-label",children:"Exercise Detected:"}),H.jsx("span",{className:"result-value exercise-name",children:h.final_label||"Unknown"})]}),H.jsxs("div",{className:"result-item",children:[H.jsx("span",{className:"result-label",children:"Total Repetitions:"}),H.jsx("span",{className:"result-value",children:h.total_count})]}),H.jsxs("div",{className:"result-item",children:[H.jsx("span",{className:"result-label",children:"Processing Time:"}),H.jsxs("span",{className:"result-value",children:[E,"s"]})]}),H.jsxs("div",{className:"result-item",children:[H.jsx("span",{className:"result-label",children:"Frames Analyzed:"}),H.jsx("span",{className:"result-value",children:c.length})]}),H.jsxs("div",{className:"result-item",children:[H.jsx("span",{className:"result-label",children:"Average Knee Angle:"}),H.jsxs("span",{className:"result-value",children:[X,"°"]})]})]})]}),c.length>0&&H.jsxs("div",{className:"feedback-log",children:[H.jsx("h3",{children:"Frame-by-Frame Log (last 10 frames)"}),H.jsx("div",{className:"log-entries",children:c.slice(-10).reverse().map((b,F)=>{var Y;return H.jsxs("div",{className:"log-entry",children:[H.jsxs("span",{className:"log-frame",children:["Frame ",b.frame]}),H.jsxs("span",{className:"log-angle",children:[(Y=b.knee_angle)==null?void 0:Y.toFixed(1),"°"]}),H.jsx("span",{className:"log-state","data-state":b.state,children:b.state}),H.jsxs("span",{className:"log-count",children:["Reps: ",b.count]})]},F)})})]})]})}function x3(){return H.jsxs("div",{className:"upload-page",children:[H.jsx(Jl,{colors:["#ff0080","#ff8c00","#ffff00","#00ff00","#00ffff","#0080ff","#8000ff"],rotation:20,speed:.14,scale:1.2,frequency:1.8,warpStrength:1.8,mouseInfluence:.6,parallax:.6,noise:.03,transparent:!1,className:"upload-background"}),H.jsxs("div",{className:"upload-content",children:[H.jsx("h1",{className:"upload-title",children:"Upload Your Workout Video"}),H.jsx("p",{className:"upload-subtitle",children:"Get real-time feedback and analysis on your exercise form"}),H.jsx(m3,{})]})]})}function g3(){return H.jsxs("div",{className:"about-page",children:[H.jsx(Jl,{colors:["#ff0080","#ff8c00","#ffff00","#00ff00","#00ffff","#0080ff","#8000ff"],rotation:20,speed:.14,scale:1.2,frequency:1.8,warpStrength:1.8,mouseInfluence:.6,parallax:.6,noise:.03,transparent:!1,className:"about-background"}),H.jsxs("div",{className:"about-content",children:[H.jsx("h1",{className:"about-title",children:"About the Project"}),H.jsxs("section",{className:"about-section",children:[H.jsx("h2",{children:"What is Motion Analysis Platform?"}),H.jsx("p",{children:"Motion Analysis Platform is an AI-powered exercise form analysis tool that uses advanced computer vision and machine learning to provide real-time feedback on workout videos. Our system can automatically detect and count repetitions while analyzing your form to help you exercise more effectively and safely."})]}),H.jsxs("section",{className:"about-section",children:[H.jsx("h2",{children:"How It Works"}),H.jsxs("div",{className:"how-it-works",children:[H.jsxs("div",{className:"step",children:[H.jsx("div",{className:"step-number",children:"1"}),H.jsx("h3",{children:"Upload Video"}),H.jsx("p",{children:"Upload your workout video in MP4, MOV, or AVI format"})]}),H.jsxs("div",{className:"step",children:[H.jsx("div",{className:"step-number",children:"2"}),H.jsx("h3",{children:"AI Processing"}),H.jsx("p",{children:"Our LSTM model analyzes pose keypoints extracted by MediaPipe"})]}),H.jsxs("div",{className:"step",children:[H.jsx("div",{className:"step-number",children:"3"}),H.jsx("h3",{children:"Get Feedback"}),H.jsx("p",{children:"Receive real-time feedback with rep counts and angle measurements"})]})]})]}),H.jsxs("section",{className:"about-section",children:[H.jsx("h2",{children:"Technology Stack"}),H.jsxs("div",{className:"tech-grid",children:[H.jsxs("div",{className:"tech-item",children:[H.jsx("h3",{children:"MediaPipe"}),H.jsx("p",{children:"Google's pose estimation for accurate body landmark detection"})]}),H.jsxs("div",{className:"tech-item",children:[H.jsx("h3",{children:"LSTM Neural Network"}),H.jsx("p",{children:"Deep learning model for motion classification"})]}),H.jsxs("div",{className:"tech-item",children:[H.jsx("h3",{children:"Django Backend"}),H.jsx("p",{children:"Robust Python framework for video processing"})]}),H.jsxs("div",{className:"tech-item",children:[H.jsx("h3",{children:"React Frontend"}),H.jsx("p",{children:"Modern UI with real-time streaming updates"})]})]})]}),H.jsxs("section",{className:"about-section",children:[H.jsx("h2",{children:"Supported Exercises"}),H.jsxs("ul",{className:"exercise-list",children:[H.jsx("li",{children:"🏋️ Squats - Analyze depth, knee alignment, and form"}),H.jsx("li",{children:"💪 Deadlifts - Track hip hinge, back position, and bar path"}),H.jsx("li",{children:"🤸 Pull-ups - Count reps and measure range of motion"})]})]}),H.jsxs("section",{className:"about-section",children:[H.jsx("h2",{children:"Features"}),H.jsxs("ul",{className:"features-list",children:[H.jsx("li",{children:"✅ Real-time video processing with Server-Sent Events"}),H.jsx("li",{children:"✅ Automatic repetition counting"}),H.jsx("li",{children:"✅ Joint angle measurements"}),H.jsx("li",{children:"✅ Motion classification (squat, deadlift, pull-up)"}),H.jsx("li",{children:"✅ Export results as JSON for further analysis"}),H.jsx("li",{children:"✅ Video preview with synchronized feedback"})]})]})]})]})}function v3(){const r=[{name:"Team Member 1",role:"Machine Learning Engineer",description:"Specialized in LSTM models and pose estimation",emoji:"🧠"},{name:"Team Member 2",role:"Full Stack Developer",description:"Django backend and React frontend integration",emoji:"💻"},{name:"Team Member 3",role:"Computer Vision Engineer",description:"MediaPipe integration and angle calculations",emoji:"👁️"},{name:"Team Member 4",role:"UI/UX Designer",description:"User interface and experience design",emoji:"🎨"}];return H.jsxs("div",{className:"team-page",children:[H.jsx(Jl,{colors:["#ff0080","#ff8c00","#ffff00","#00ff00","#00ffff","#0080ff","#8000ff"],rotation:20,speed:.14,scale:1.2,frequency:1.8,warpStrength:1.8,mouseInfluence:.6,parallax:.6,noise:.03,transparent:!1,className:"team-background"}),H.jsxs("div",{className:"team-content",children:[H.jsx("h1",{className:"team-title",children:"Meet the Team"}),H.jsx("p",{className:"team-subtitle",children:"The passionate developers behind Motion Analysis Platform"}),H.jsx("div",{className:"team-grid",children:r.map((e,n)=>H.jsxs("div",{className:"team-card",children:[H.jsx("div",{className:"team-avatar",children:e.emoji}),H.jsx("h3",{className:"team-name",children:e.name}),H.jsx("p",{className:"team-role",children:e.role}),H.jsx("p",{className:"team-description",children:e.description})]},n))}),H.jsxs("section",{className:"team-info",children:[H.jsx("h2",{children:"Our Mission"}),H.jsx("p",{children:"We are a team of passionate developers and researchers committed to making exercise form analysis accessible to everyone. Our goal is to help people exercise more effectively and safely through the power of AI and computer vision."})]}),H.jsxs("section",{className:"team-info",children:[H.jsx("h2",{children:"Project Information"}),H.jsx("p",{children:"This project was developed as part of DES646 course. It combines state-of-the-art machine learning techniques with modern web technologies to create a seamless user experience for exercise analysis."})]}),H.jsxs("section",{className:"team-info",children:[H.jsx("h2",{children:"Get In Touch"}),H.jsx("p",{children:"Interested in contributing or have questions? We'd love to hear from you!"}),H.jsx("div",{className:"contact-links",children:H.jsx("a",{href:"https://github.com/Shreyansh1206/DES646_Project",target:"_blank",rel:"noopener noreferrer",className:"contact-btn",children:"GitHub Repository"})})]})]})]})}function _3(){return H.jsx(Gv,{children:H.jsxs("div",{className:"App",children:[H.jsx(Jv,{}),H.jsx("div",{className:"page-content",children:H.jsxs(yv,{children:[H.jsx(Ha,{path:"/",element:H.jsx(p3,{})}),H.jsx(Ha,{path:"/upload",element:H.jsx(x3,{})}),H.jsx(Ha,{path:"/about",element:H.jsx(g3,{})}),H.jsx(Ha,{path:"/team",element:H.jsx(v3,{})})]})})]})})}Rg.createRoot(document.getElementById("root")).render(H.jsx(oe.StrictMode,{children:H.jsx(_3,{})}));
