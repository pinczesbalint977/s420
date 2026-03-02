function i0(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function H_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Dd={exports:{}},Qa={},Od={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function s0(){if(Kg)return Pe;Kg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function I(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function L(O,K,fe){this.props=O,this.context=K,this.refs=q,this.updater=fe||V}L.prototype.isReactComponent={},L.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},L.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ie(){}ie.prototype=L.prototype;function Z(O,K,fe){this.props=O,this.context=K,this.refs=q,this.updater=fe||V}var ee=Z.prototype=new ie;ee.constructor=Z,B(ee,L.prototype),ee.isPureReactComponent=!0;var re=Array.isArray,Re=Object.prototype.hasOwnProperty,we={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(O,K,fe){var Se,Ce={},De=null,Me=null;if(K!=null)for(Se in K.ref!==void 0&&(Me=K.ref),K.key!==void 0&&(De=""+K.key),K)Re.call(K,Se)&&!N.hasOwnProperty(Se)&&(Ce[Se]=K[Se]);var Ue=arguments.length-2;if(Ue===1)Ce.children=fe;else if(1<Ue){for(var $e=Array(Ue),Tt=0;Tt<Ue;Tt++)$e[Tt]=arguments[Tt+2];Ce.children=$e}if(O&&O.defaultProps)for(Se in Ue=O.defaultProps,Ue)Ce[Se]===void 0&&(Ce[Se]=Ue[Se]);return{$$typeof:n,type:O,key:De,ref:Me,props:Ce,_owner:we.current}}function C(O,K){return{$$typeof:n,type:O.type,key:K,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function D(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(fe){return K[fe]})}var b=/\/+/g;function R(O,K){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):K.toString(36)}function st(O,K,fe,Se,Ce){var De=typeof O;(De==="undefined"||De==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case n:case e:Me=!0}}if(Me)return Me=O,Ce=Ce(Me),O=Se===""?"."+R(Me,0):Se,re(Ce)?(fe="",O!=null&&(fe=O.replace(b,"$&/")+"/"),st(Ce,K,fe,"",function(Tt){return Tt})):Ce!=null&&(k(Ce)&&(Ce=C(Ce,fe+(!Ce.key||Me&&Me.key===Ce.key?"":(""+Ce.key).replace(b,"$&/")+"/")+O)),K.push(Ce)),1;if(Me=0,Se=Se===""?".":Se+":",re(O))for(var Ue=0;Ue<O.length;Ue++){De=O[Ue];var $e=Se+R(De,Ue);Me+=st(De,K,fe,$e,Ce)}else if($e=I(O),typeof $e=="function")for(O=$e.call(O),Ue=0;!(De=O.next()).done;)De=De.value,$e=Se+R(De,Ue++),Me+=st(De,K,fe,$e,Ce);else if(De==="object")throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Me}function Lt(O,K,fe){if(O==null)return O;var Se=[],Ce=0;return st(O,Se,"","",function(De){return K.call(fe,De,Ce++)}),Se}function bt(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=fe)},function(fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=fe)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var ze={current:null},ne={transition:null},me={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ne,ReactCurrentOwner:we};function le(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Lt,forEach:function(O,K,fe){Lt(O,function(){K.apply(this,arguments)},fe)},count:function(O){var K=0;return Lt(O,function(){K++}),K},toArray:function(O){return Lt(O,function(K){return K})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Pe.Component=L,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=Z,Pe.StrictMode=i,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Pe.act=le,Pe.cloneElement=function(O,K,fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Se=B({},O.props),Ce=O.key,De=O.ref,Me=O._owner;if(K!=null){if(K.ref!==void 0&&(De=K.ref,Me=we.current),K.key!==void 0&&(Ce=""+K.key),O.type&&O.type.defaultProps)var Ue=O.type.defaultProps;for($e in K)Re.call(K,$e)&&!N.hasOwnProperty($e)&&(Se[$e]=K[$e]===void 0&&Ue!==void 0?Ue[$e]:K[$e])}var $e=arguments.length-2;if($e===1)Se.children=fe;else if(1<$e){Ue=Array($e);for(var Tt=0;Tt<$e;Tt++)Ue[Tt]=arguments[Tt+2];Se.children=Ue}return{$$typeof:n,type:O.type,key:Ce,ref:De,props:Se,_owner:Me}},Pe.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Pe.createElement=S,Pe.createFactory=function(O){var K=S.bind(null,O);return K.type=O,K},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(O){return{$$typeof:f,render:O}},Pe.isValidElement=k,Pe.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:bt}},Pe.memo=function(O,K){return{$$typeof:y,type:O,compare:K===void 0?null:K}},Pe.startTransition=function(O){var K=ne.transition;ne.transition={};try{O()}finally{ne.transition=K}},Pe.unstable_act=le,Pe.useCallback=function(O,K){return ze.current.useCallback(O,K)},Pe.useContext=function(O){return ze.current.useContext(O)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(O){return ze.current.useDeferredValue(O)},Pe.useEffect=function(O,K){return ze.current.useEffect(O,K)},Pe.useId=function(){return ze.current.useId()},Pe.useImperativeHandle=function(O,K,fe){return ze.current.useImperativeHandle(O,K,fe)},Pe.useInsertionEffect=function(O,K){return ze.current.useInsertionEffect(O,K)},Pe.useLayoutEffect=function(O,K){return ze.current.useLayoutEffect(O,K)},Pe.useMemo=function(O,K){return ze.current.useMemo(O,K)},Pe.useReducer=function(O,K,fe){return ze.current.useReducer(O,K,fe)},Pe.useRef=function(O){return ze.current.useRef(O)},Pe.useState=function(O){return ze.current.useState(O)},Pe.useSyncExternalStore=function(O,K,fe){return ze.current.useSyncExternalStore(O,K,fe)},Pe.useTransition=function(){return ze.current.useTransition()},Pe.version="18.3.1",Pe}var Gg;function Nf(){return Gg||(Gg=1,Od.exports=s0()),Od.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function o0(){if(Qg)return Qa;Qg=1;var n=Nf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,y){var E,T={},I=null,V=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(V=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(T[E]=p[E]);if(f&&f.defaultProps)for(E in p=f.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:f,key:I,ref:V,props:T,_owner:o.current}}return Qa.Fragment=t,Qa.jsx=c,Qa.jsxs=c,Qa}var Xg;function a0(){return Xg||(Xg=1,Dd.exports=o0()),Dd.exports}var F=a0(),X=Nf();const K_=H_(X),l0=i0({__proto__:null,default:K_},[X]);var ec={},Vd={exports:{}},rn={},Ld={exports:{}},bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function u0(){return Jg||(Jg=1,(function(n){function e(ne,me){var le=ne.length;ne.push(me);e:for(;0<le;){var O=le-1>>>1,K=ne[O];if(0<o(K,me))ne[O]=me,ne[le]=K,le=O;else break e}}function t(ne){return ne.length===0?null:ne[0]}function i(ne){if(ne.length===0)return null;var me=ne[0],le=ne.pop();if(le!==me){ne[0]=le;e:for(var O=0,K=ne.length,fe=K>>>1;O<fe;){var Se=2*(O+1)-1,Ce=ne[Se],De=Se+1,Me=ne[De];if(0>o(Ce,le))De<K&&0>o(Me,Ce)?(ne[O]=Me,ne[De]=le,O=De):(ne[O]=Ce,ne[Se]=le,O=Se);else if(De<K&&0>o(Me,le))ne[O]=Me,ne[De]=le,O=De;else break e}}return me}function o(ne,me){var le=ne.sortIndex-me.sortIndex;return le!==0?le:ne.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var p=[],y=[],E=1,T=null,I=3,V=!1,B=!1,q=!1,L=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(ne){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ne)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function re(ne){if(q=!1,ee(ne),!B)if(t(p)!==null)B=!0,bt(Re);else{var me=t(y);me!==null&&ze(re,me.startTime-ne)}}function Re(ne,me){B=!1,q&&(q=!1,ie(S),S=-1),V=!0;var le=I;try{for(ee(me),T=t(p);T!==null&&(!(T.expirationTime>me)||ne&&!D());){var O=T.callback;if(typeof O=="function"){T.callback=null,I=T.priorityLevel;var K=O(T.expirationTime<=me);me=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),ee(me)}else i(p);T=t(p)}if(T!==null)var fe=!0;else{var Se=t(y);Se!==null&&ze(re,Se.startTime-me),fe=!1}return fe}finally{T=null,I=le,V=!1}}var we=!1,N=null,S=-1,C=5,k=-1;function D(){return!(n.unstable_now()-k<C)}function b(){if(N!==null){var ne=n.unstable_now();k=ne;var me=!0;try{me=N(!0,ne)}finally{me?R():(we=!1,N=null)}}else we=!1}var R;if(typeof Z=="function")R=function(){Z(b)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Lt=st.port2;st.port1.onmessage=b,R=function(){Lt.postMessage(null)}}else R=function(){L(b,0)};function bt(ne){N=ne,we||(we=!0,R())}function ze(ne,me){S=L(function(){ne(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ne){ne.callback=null},n.unstable_continueExecution=function(){B||V||(B=!0,bt(Re))},n.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ne?Math.floor(1e3/ne):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ne){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var le=I;I=me;try{return ne()}finally{I=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ne,me){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var le=I;I=ne;try{return me()}finally{I=le}},n.unstable_scheduleCallback=function(ne,me,le){var O=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,ne){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=le+K,ne={id:E++,callback:me,priorityLevel:ne,startTime:le,expirationTime:K,sortIndex:-1},le>O?(ne.sortIndex=le,e(y,ne),t(p)===null&&ne===t(y)&&(q?(ie(S),S=-1):q=!0,ze(re,le-O))):(ne.sortIndex=K,e(p,ne),B||V||(B=!0,bt(Re))),ne},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(ne){var me=I;return function(){var le=I;I=me;try{return ne.apply(this,arguments)}finally{I=le}}}})(bd)),bd}var Yg;function c0(){return Yg||(Yg=1,Ld.exports=u0()),Ld.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function h0(){if(Zg)return rn;Zg=1;var n=Nf(),e=c0();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function I(r){return p.call(T,r)?!0:p.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function V(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function B(r,s,a,h){if(s===null||typeof s>"u"||V(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(r,s,a,h,d,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new q(r,5,!1,r.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function Z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(ie,Z);L[s]=new q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(ie,Z);L[s]=new q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(ie,Z);L[s]=new q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new q(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new q(r,1,!1,r.toLowerCase(),null,!0,!0)});function ee(r,s,a,h){var d=L.hasOwnProperty(s)?L[s]:null;(d!==null?d.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(B(s,a,d,h)&&(a=null),h||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,h=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Re=Symbol.for("react.element"),we=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),st=Symbol.for("react.suspense_list"),Lt=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),ne=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,O;function K(r){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+r}var fe=!1;function Se(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var h=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){h=z}r.call(s.prototype)}else{try{throw Error()}catch(z){h=z}r()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),g=h.stack.split(`
`),v=d.length-1,A=g.length-1;1<=v&&0<=A&&d[v]!==g[A];)A--;for(;1<=v&&0<=A;v--,A--)if(d[v]!==g[A]){if(v!==1||A!==1)do if(v--,A--,0>A||d[v]!==g[A]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=A);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Ce(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Se(r.type,!1),r;case 11:return r=Se(r.type.render,!1),r;case 1:return r=Se(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case we:return"Portal";case C:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case st:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case b:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Lt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case bt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Tt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){h=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(v){h=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function _r(r){r._valueTracker||(r._valueTracker=Tt(r))}function Ls(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=$e(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function Hr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function $i(r,s){var a=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function bs(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ta(r,s){s=s.checked,s!=null&&ee(r,"checked",s,!1)}function na(r,s){ta(r,s);var a=Ue(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ms(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ms(r,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Fl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ms(r,s,a){(s!=="number"||Hr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var vr=Array.isArray;function Er(r,s,a,h){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,h&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function ra(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Us(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(vr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ue(a)}}function Fs(r,s){var a=Ue(s.value),h=Ue(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function ia(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function mt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?mt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var wr,sa=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=wr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Kr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wi=["Webkit","ms","Moz","O"];Object.keys(qi).forEach(function(r){Wi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),qi[s]=qi[r]})});function oa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||qi.hasOwnProperty(r)&&qi[r]?(""+s).trim():s+"px"}function aa(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,d=oa(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,d):r[a]=d}}var la=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ua(r,s){if(s){if(la[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ca(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function js(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var zs=null,gn=null,Gn=null;function Bs(r){if(r=Va(r)){if(typeof zs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=mu(s),zs(r.stateNode,r.type,s))}}function Qn(r){gn?Gn?Gn.push(r):Gn=[r]:gn=r}function ha(){if(gn){var r=gn,s=Gn;if(Gn=gn=null,Bs(r),s)for(r=0;r<s.length;r++)Bs(s[r])}}function Ki(r,s){return r(s)}function da(){}var Tr=!1;function fa(r,s,a){if(Tr)return r(s,a);Tr=!0;try{return Ki(r,s,a)}finally{Tr=!1,(gn!==null||Gn!==null)&&(da(),ha())}}function ot(r,s){var a=r.stateNode;if(a===null)return null;var h=mu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var $s=!1;if(f)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{$s=!1}function Gi(r,s,a,h,d,g,v,A,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(Q){this.onError(Q)}}var Qi=!1,qs=null,kn=!1,pa=null,oh={onError:function(r){Qi=!0,qs=r}};function Ws(r,s,a,h,d,g,v,A,P){Qi=!1,qs=null,Gi.apply(oh,arguments)}function jl(r,s,a,h,d,g,v,A,P){if(Ws.apply(this,arguments),Qi){if(Qi){var z=qs;Qi=!1,qs=null}else throw Error(t(198));kn||(kn=!0,pa=z)}}function Nn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Xi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function xn(r){if(Nn(r)!==r)throw Error(t(188))}function zl(r){var s=r.alternate;if(!s){if(s=Nn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(h=d.return,h!==null){a=h;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return xn(d),r;if(g===h)return xn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=d,h=g;else{for(var v=!1,A=d.child;A;){if(A===a){v=!0,a=d,h=g;break}if(A===h){v=!0,h=d,a=g;break}A=A.sibling}if(!v){for(A=g.child;A;){if(A===a){v=!0,a=g,h=d;break}if(A===h){v=!0,h=g,a=d;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ma(r){return r=zl(r),r!==null?Hs(r):null}function Hs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Hs(r);if(s!==null)return s;r=r.sibling}return null}var Ks=e.unstable_scheduleCallback,ga=e.unstable_cancelCallback,Bl=e.unstable_shouldYield,ah=e.unstable_requestPaint,qe=e.unstable_now,$l=e.unstable_getCurrentPriorityLevel,Ji=e.unstable_ImmediatePriority,Gr=e.unstable_UserBlockingPriority,yn=e.unstable_NormalPriority,ya=e.unstable_LowPriority,ql=e.unstable_IdlePriority,Yi=null,ln=null;function Wl(r){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Yi,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Kl,_a=Math.log,Hl=Math.LN2;function Kl(r){return r>>>=0,r===0?32:31-(_a(r)/Hl|0)|0}var Gs=64,Qs=4194304;function Qr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Zi(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,d=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var A=v&~d;A!==0?h=Qr(A):(g&=v,g!==0&&(h=Qr(g)))}else v=a&~d,v!==0?h=Qr(v):g!==0&&(h=Qr(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&d)===0&&(d=h&-h,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-Wt(s),d=1<<a,h|=r[a],s&=~d;return h}function lh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ir(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Wt(g),A=1<<v,P=d[v];P===-1?((A&a)===0||(A&h)!==0)&&(d[v]=lh(A,s)):P<=s&&(r.expiredLanes|=A),g&=~A}}function un(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function es(){var r=Gs;return Gs<<=1,(Gs&4194240)===0&&(Gs=64),r}function Xr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Jr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Wt(s),r[s]=a}function Be(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Wt(a),g=1<<d;s[d]=0,h[d]=-1,r[d]=-1,a&=~g}}function Yr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-Wt(a),d=1<<h;d&s|r[h]&s&&(r[h]|=s),a&=~d}}var xe=0;function Zr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Gl,Xs,Ql,Xl,Jl,va=!1,Xn=[],Pt=null,Dn=null,On=null,ei=new Map,_n=new Map,Jn=[],uh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yl(r,s){switch(r){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":ei.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(s.pointerId)}}function Xt(r,s,a,h,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[d]},s!==null&&(s=Va(s),s!==null&&Xs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function ch(r,s,a,h,d){switch(s){case"focusin":return Pt=Xt(Pt,r,s,a,h,d),!0;case"dragenter":return Dn=Xt(Dn,r,s,a,h,d),!0;case"mouseover":return On=Xt(On,r,s,a,h,d),!0;case"pointerover":var g=d.pointerId;return ei.set(g,Xt(ei.get(g)||null,r,s,a,h,d)),!0;case"gotpointercapture":return g=d.pointerId,_n.set(g,Xt(_n.get(g)||null,r,s,a,h,d)),!0}return!1}function Zl(r){var s=ss(r.target);if(s!==null){var a=Nn(s);if(a!==null){if(s=a.tag,s===13){if(s=Xi(a),s!==null){r.blockedOn=s,Jl(r.priority,function(){Ql(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Sr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Js(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Hi=h,a.target.dispatchEvent(h),Hi=null}else return s=Va(a),s!==null&&Xs(s),r.blockedOn=a,!1;s.shift()}return!0}function ts(r,s,a){Sr(r)&&a.delete(s)}function eu(){va=!1,Pt!==null&&Sr(Pt)&&(Pt=null),Dn!==null&&Sr(Dn)&&(Dn=null),On!==null&&Sr(On)&&(On=null),ei.forEach(ts),_n.forEach(ts)}function Vn(r,s){r.blockedOn===s&&(r.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,eu)))}function Ln(r){function s(d){return Vn(d,r)}if(0<Xn.length){Vn(Xn[0],r);for(var a=1;a<Xn.length;a++){var h=Xn[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Pt!==null&&Vn(Pt,r),Dn!==null&&Vn(Dn,r),On!==null&&Vn(On,r),ei.forEach(s),_n.forEach(s),a=0;a<Jn.length;a++)h=Jn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)Zl(a),a.blockedOn===null&&Jn.shift()}var Ar=re.ReactCurrentBatchConfig,ti=!0;function Xe(r,s,a,h){var d=xe,g=Ar.transition;Ar.transition=null;try{xe=1,Ea(r,s,a,h)}finally{xe=d,Ar.transition=g}}function hh(r,s,a,h){var d=xe,g=Ar.transition;Ar.transition=null;try{xe=4,Ea(r,s,a,h)}finally{xe=d,Ar.transition=g}}function Ea(r,s,a,h){if(ti){var d=Js(r,s,a,h);if(d===null)Th(r,s,h,ns,a),Yl(r,h);else if(ch(d,r,s,a,h))h.stopPropagation();else if(Yl(r,h),s&4&&-1<uh.indexOf(r)){for(;d!==null;){var g=Va(d);if(g!==null&&Gl(g),g=Js(r,s,a,h),g===null&&Th(r,s,h,ns,a),g===d)break;d=g}d!==null&&h.stopPropagation()}else Th(r,s,h,null,a)}}var ns=null;function Js(r,s,a,h){if(ns=null,r=js(h),r=ss(r),r!==null)if(s=Nn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Xi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return ns=r,null}function wa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($l()){case Ji:return 1;case Gr:return 4;case yn:case ya:return 16;case ql:return 536870912;default:return 16}default:return 16}}var cn=null,Ys=null,Jt=null;function Ta(){if(Jt)return Jt;var r,s=Ys,a=s.length,h,d="value"in cn?cn.value:cn.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(h=1;h<=v&&s[a-h]===d[g-h];h++);return Jt=d.slice(r,1<h?1-h:void 0)}function Zs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Yn(){return!0}function Ia(){return!1}function kt(r){function s(a,h,d,g,v){this._reactName=a,this._targetInst=d,this.type=h,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Yn:Ia,this.isPropagationStopped=Ia,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),s}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=kt(bn),Zn=le({},bn,{view:0,detail:0}),dh=kt(Zn),to,Rr,ni,rs=le({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ni&&(ni&&r.type==="mousemove"?(to=r.screenX-ni.screenX,Rr=r.screenY-ni.screenY):Rr=to=0,ni=r),to)},movementY:function(r){return"movementY"in r?r.movementY:Rr}}),no=kt(rs),Sa=le({},rs,{dataTransfer:0}),tu=kt(Sa),ro=le({},Zn,{relatedTarget:0}),io=kt(ro),nu=le({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cr=kt(nu),ru=le({},bn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),iu=kt(ru),su=le({},bn,{data:0}),Aa=kt(su),so={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ht={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ou={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function au(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ou[r])?!!s[r]:!1}function er(){return au}var u=le({},Zn,{key:function(r){if(r.key){var s=so[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Zs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Ht[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(r){return r.type==="keypress"?Zs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Zs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=kt(u),_=le({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=kt(_),M=le({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),$=kt(M),te=le({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=kt(te),yt=le({},rs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=kt(yt),It=[9,13,27,32],ut=f&&"CompositionEvent"in window,vn=null;f&&"documentMode"in document&&(vn=document.documentMode);var hn=f&&"TextEvent"in window&&!vn,is=f&&(!ut||vn&&8<vn&&11>=vn),oo=" ",zp=!1;function Bp(r,s){switch(r){case"keyup":return It.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ao=!1;function tT(r,s){switch(r){case"compositionend":return $p(s);case"keypress":return s.which!==32?null:(zp=!0,oo);case"textInput":return r=s.data,r===oo&&zp?null:r;default:return null}}function nT(r,s){if(ao)return r==="compositionend"||!ut&&Bp(r,s)?(r=Ta(),Jt=Ys=cn=null,ao=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return is&&s.locale!=="ko"?null:s.data;default:return null}}var rT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!rT[r.type]:s==="textarea"}function Wp(r,s,a,h){Qn(h),s=du(s,"onChange"),0<s.length&&(a=new eo("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var Ra=null,Ca=null;function iT(r){um(r,0)}function lu(r){var s=fo(r);if(Ls(s))return r}function sT(r,s){if(r==="change")return s}var Hp=!1;if(f){var fh;if(f){var ph="oninput"in document;if(!ph){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),ph=typeof Kp.oninput=="function"}fh=ph}else fh=!1;Hp=fh&&(!document.documentMode||9<document.documentMode)}function Gp(){Ra&&(Ra.detachEvent("onpropertychange",Qp),Ca=Ra=null)}function Qp(r){if(r.propertyName==="value"&&lu(Ca)){var s=[];Wp(s,Ca,r,js(r)),fa(iT,s)}}function oT(r,s,a){r==="focusin"?(Gp(),Ra=s,Ca=a,Ra.attachEvent("onpropertychange",Qp)):r==="focusout"&&Gp()}function aT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return lu(Ca)}function lT(r,s){if(r==="click")return lu(s)}function uT(r,s){if(r==="input"||r==="change")return lu(s)}function cT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Mn=typeof Object.is=="function"?Object.is:cT;function Pa(r,s){if(Mn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var d=a[h];if(!p.call(s,d)||!Mn(r[d],s[d]))return!1}return!0}function Xp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Jp(r,s){var a=Xp(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xp(a)}}function Yp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Yp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Zp(){for(var r=window,s=Hr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Hr(r.document)}return s}function mh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function hT(r){var s=Zp(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Yp(a.ownerDocument.documentElement,a)){if(h!==null&&mh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(h.start,d);h=h.end===void 0?g:Math.min(h.end,d),!r.extend&&g>h&&(d=h,h=g,g=d),d=Jp(a,g);var v=Jp(a,h);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var dT=f&&"documentMode"in document&&11>=document.documentMode,lo=null,gh=null,ka=null,yh=!1;function em(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yh||lo==null||lo!==Hr(h)||(h=lo,"selectionStart"in h&&mh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),ka&&Pa(ka,h)||(ka=h,h=du(gh,"onSelect"),0<h.length&&(s=new eo("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=lo)))}function uu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var uo={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},_h={},tm={};f&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function cu(r){if(_h[r])return _h[r];if(!uo[r])return r;var s=uo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in tm)return _h[r]=s[a];return r}var nm=cu("animationend"),rm=cu("animationiteration"),im=cu("animationstart"),sm=cu("transitionend"),om=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(r,s){om.set(r,s),l(s,[r])}for(var vh=0;vh<am.length;vh++){var Eh=am[vh],fT=Eh.toLowerCase(),pT=Eh[0].toUpperCase()+Eh.slice(1);ri(fT,"on"+pT)}ri(nm,"onAnimationEnd"),ri(rm,"onAnimationIteration"),ri(im,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(sm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function lm(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,jl(h,s,void 0,r),r.currentTarget=null}function um(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],d=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var v=h.length-1;0<=v;v--){var A=h[v],P=A.instance,z=A.currentTarget;if(A=A.listener,P!==g&&d.isPropagationStopped())break e;lm(d,A,z),g=P}else for(v=0;v<h.length;v++){if(A=h[v],P=A.instance,z=A.currentTarget,A=A.listener,P!==g&&d.isPropagationStopped())break e;lm(d,A,z),g=P}}}if(kn)throw r=pa,kn=!1,pa=null,r}function Ke(r,s){var a=s[Ph];a===void 0&&(a=s[Ph]=new Set);var h=r+"__bubble";a.has(h)||(cm(s,r,2,!1),a.add(h))}function wh(r,s,a){var h=0;s&&(h|=4),cm(a,r,h,s)}var hu="_reactListening"+Math.random().toString(36).slice(2);function xa(r){if(!r[hu]){r[hu]=!0,i.forEach(function(a){a!=="selectionchange"&&(mT.has(a)||wh(a,!1,r),wh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[hu]||(s[hu]=!0,wh("selectionchange",!1,s))}}function cm(r,s,a,h){switch(wa(s)){case 1:var d=Xe;break;case 4:d=hh;break;default:d=Ea}a=d.bind(null,s,a,r),d=void 0,!$s||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),h?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Th(r,s,a,h,d){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var v=h.tag;if(v===3||v===4){var A=h.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(v===4)for(v=h.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;A!==null;){if(v=ss(A),v===null)return;if(P=v.tag,P===5||P===6){h=g=v;continue e}A=A.parentNode}}h=h.return}fa(function(){var z=g,Q=js(a),J=[];e:{var G=om.get(r);if(G!==void 0){var oe=eo,ce=r;switch(r){case"keypress":if(Zs(a)===0)break e;case"keydown":case"keyup":oe=m;break;case"focusin":ce="focus",oe=io;break;case"focusout":ce="blur",oe=io;break;case"beforeblur":case"afterblur":oe=io;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=tu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=$;break;case nm:case rm:case im:oe=Cr;break;case sm:oe=je;break;case"scroll":oe=dh;break;case"wheel":oe=Oe;break;case"copy":case"cut":case"paste":oe=iu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=w}var he=(s&4)!==0,at=!he&&r==="scroll",U=he?G!==null?G+"Capture":null:G;he=[];for(var x=z,j;x!==null;){j=x;var Y=j.stateNode;if(j.tag===5&&Y!==null&&(j=Y,U!==null&&(Y=ot(x,U),Y!=null&&he.push(Da(x,Y,j)))),at)break;x=x.return}0<he.length&&(G=new oe(G,ce,null,a,Q),J.push({event:G,listeners:he}))}}if((s&7)===0){e:{if(G=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",G&&a!==Hi&&(ce=a.relatedTarget||a.fromElement)&&(ss(ce)||ce[Pr]))break e;if((oe||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,oe?(ce=a.relatedTarget||a.toElement,oe=z,ce=ce?ss(ce):null,ce!==null&&(at=Nn(ce),ce!==at||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(oe=null,ce=z),oe!==ce)){if(he=no,Y="onMouseLeave",U="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(he=w,Y="onPointerLeave",U="onPointerEnter",x="pointer"),at=oe==null?G:fo(oe),j=ce==null?G:fo(ce),G=new he(Y,x+"leave",oe,a,Q),G.target=at,G.relatedTarget=j,Y=null,ss(Q)===z&&(he=new he(U,x+"enter",ce,a,Q),he.target=j,he.relatedTarget=at,Y=he),at=Y,oe&&ce)t:{for(he=oe,U=ce,x=0,j=he;j;j=co(j))x++;for(j=0,Y=U;Y;Y=co(Y))j++;for(;0<x-j;)he=co(he),x--;for(;0<j-x;)U=co(U),j--;for(;x--;){if(he===U||U!==null&&he===U.alternate)break t;he=co(he),U=co(U)}he=null}else he=null;oe!==null&&hm(J,G,oe,he,!1),ce!==null&&at!==null&&hm(J,at,ce,he,!0)}}e:{if(G=z?fo(z):window,oe=G.nodeName&&G.nodeName.toLowerCase(),oe==="select"||oe==="input"&&G.type==="file")var de=sT;else if(qp(G))if(Hp)de=uT;else{de=aT;var ge=oT}else(oe=G.nodeName)&&oe.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(de=lT);if(de&&(de=de(r,z))){Wp(J,de,a,Q);break e}ge&&ge(r,G,z),r==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&Ms(G,"number",G.value)}switch(ge=z?fo(z):window,r){case"focusin":(qp(ge)||ge.contentEditable==="true")&&(lo=ge,gh=z,ka=null);break;case"focusout":ka=gh=lo=null;break;case"mousedown":yh=!0;break;case"contextmenu":case"mouseup":case"dragend":yh=!1,em(J,a,Q);break;case"selectionchange":if(dT)break;case"keydown":case"keyup":em(J,a,Q)}var ye;if(ut)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else ao?Bp(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(is&&a.locale!=="ko"&&(ao||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&ao&&(ye=Ta()):(cn=Q,Ys="value"in cn?cn.value:cn.textContent,ao=!0)),ge=du(z,Ee),0<ge.length&&(Ee=new Aa(Ee,r,null,a,Q),J.push({event:Ee,listeners:ge}),ye?Ee.data=ye:(ye=$p(a),ye!==null&&(Ee.data=ye)))),(ye=hn?tT(r,a):nT(r,a))&&(z=du(z,"onBeforeInput"),0<z.length&&(Q=new Aa("onBeforeInput","beforeinput",null,a,Q),J.push({event:Q,listeners:z}),Q.data=ye))}um(J,s)})}function Da(r,s,a){return{instance:r,listener:s,currentTarget:a}}function du(r,s){for(var a=s+"Capture",h=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=ot(r,a),g!=null&&h.unshift(Da(r,g,d)),g=ot(r,s),g!=null&&h.push(Da(r,g,d))),r=r.return}return h}function co(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function hm(r,s,a,h,d){for(var g=s._reactName,v=[];a!==null&&a!==h;){var A=a,P=A.alternate,z=A.stateNode;if(P!==null&&P===h)break;A.tag===5&&z!==null&&(A=z,d?(P=ot(a,g),P!=null&&v.unshift(Da(a,P,A))):d||(P=ot(a,g),P!=null&&v.push(Da(a,P,A)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var gT=/\r\n?/g,yT=/\u0000|\uFFFD/g;function dm(r){return(typeof r=="string"?r:""+r).replace(gT,`
`).replace(yT,"")}function fu(r,s,a){if(s=dm(s),dm(r)!==s&&a)throw Error(t(425))}function pu(){}var Ih=null,Sh=null;function Ah(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Rh=typeof setTimeout=="function"?setTimeout:void 0,_T=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,vT=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(r){return fm.resolve(null).then(r).catch(ET)}:Rh;function ET(r){setTimeout(function(){throw r})}function Ch(r,s){var a=s,h=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(h===0){r.removeChild(d),Ln(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=d}while(a);Ln(s)}function ii(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function pm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var ho=Math.random().toString(36).slice(2),tr="__reactFiber$"+ho,Oa="__reactProps$"+ho,Pr="__reactContainer$"+ho,Ph="__reactEvents$"+ho,wT="__reactListeners$"+ho,TT="__reactHandles$"+ho;function ss(r){var s=r[tr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Pr]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=pm(r);r!==null;){if(a=r[tr])return a;r=pm(r)}return s}r=a,a=r.parentNode}return null}function Va(r){return r=r[tr]||r[Pr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function fo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function mu(r){return r[Oa]||null}var kh=[],po=-1;function si(r){return{current:r}}function Ge(r){0>po||(r.current=kh[po],kh[po]=null,po--)}function We(r,s){po++,kh[po]=r.current,r.current=s}var oi={},Mt=si(oi),Yt=si(!1),os=oi;function mo(r,s){var a=r.type.contextTypes;if(!a)return oi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Zt(r){return r=r.childContextTypes,r!=null}function gu(){Ge(Yt),Ge(Mt)}function mm(r,s,a){if(Mt.current!==oi)throw Error(t(168));We(Mt,s),We(Yt,a)}function gm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var d in h)if(!(d in s))throw Error(t(108,Me(r)||"Unknown",d));return le({},a,h)}function yu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||oi,os=Mt.current,We(Mt,r),We(Yt,Yt.current),!0}function ym(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=gm(r,s,os),h.__reactInternalMemoizedMergedChildContext=r,Ge(Yt),Ge(Mt),We(Mt,r)):Ge(Yt),We(Yt,a)}var kr=null,_u=!1,Nh=!1;function _m(r){kr===null?kr=[r]:kr.push(r)}function IT(r){_u=!0,_m(r)}function ai(){if(!Nh&&kr!==null){Nh=!0;var r=0,s=xe;try{var a=kr;for(xe=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}kr=null,_u=!1}catch(d){throw kr!==null&&(kr=kr.slice(r+1)),Ks(Ji,ai),d}finally{xe=s,Nh=!1}}return null}var go=[],yo=0,vu=null,Eu=0,En=[],wn=0,as=null,Nr=1,xr="";function ls(r,s){go[yo++]=Eu,go[yo++]=vu,vu=r,Eu=s}function vm(r,s,a){En[wn++]=Nr,En[wn++]=xr,En[wn++]=as,as=r;var h=Nr;r=xr;var d=32-Wt(h)-1;h&=~(1<<d),a+=1;var g=32-Wt(s)+d;if(30<g){var v=d-d%5;g=(h&(1<<v)-1).toString(32),h>>=v,d-=v,Nr=1<<32-Wt(s)+d|a<<d|h,xr=g+r}else Nr=1<<g|a<<d|h,xr=r}function xh(r){r.return!==null&&(ls(r,1),vm(r,1,0))}function Dh(r){for(;r===vu;)vu=go[--yo],go[yo]=null,Eu=go[--yo],go[yo]=null;for(;r===as;)as=En[--wn],En[wn]=null,xr=En[--wn],En[wn]=null,Nr=En[--wn],En[wn]=null}var dn=null,fn=null,Je=!1,Un=null;function Em(r,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function wm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,dn=r,fn=ii(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,dn=r,fn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=as!==null?{id:Nr,overflow:xr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,dn=r,fn=null,!0):!1;default:return!1}}function Oh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Vh(r){if(Je){var s=fn;if(s){var a=s;if(!wm(r,s)){if(Oh(r))throw Error(t(418));s=ii(a.nextSibling);var h=dn;s&&wm(r,s)?Em(h,a):(r.flags=r.flags&-4097|2,Je=!1,dn=r)}}else{if(Oh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Je=!1,dn=r}}}function Tm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;dn=r}function wu(r){if(r!==dn)return!1;if(!Je)return Tm(r),Je=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Ah(r.type,r.memoizedProps)),s&&(s=fn)){if(Oh(r))throw Im(),Error(t(418));for(;s;)Em(r,s),s=ii(s.nextSibling)}if(Tm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){fn=ii(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}fn=null}}else fn=dn?ii(r.stateNode.nextSibling):null;return!0}function Im(){for(var r=fn;r;)r=ii(r.nextSibling)}function _o(){fn=dn=null,Je=!1}function Lh(r){Un===null?Un=[r]:Un.push(r)}var ST=re.ReactCurrentBatchConfig;function La(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var d=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var A=d.refs;v===null?delete A[g]:A[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Tu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Sm(r){var s=r._init;return s(r._payload)}function Am(r){function s(U,x){if(r){var j=U.deletions;j===null?(U.deletions=[x],U.flags|=16):j.push(x)}}function a(U,x){if(!r)return null;for(;x!==null;)s(U,x),x=x.sibling;return null}function h(U,x){for(U=new Map;x!==null;)x.key!==null?U.set(x.key,x):U.set(x.index,x),x=x.sibling;return U}function d(U,x){return U=mi(U,x),U.index=0,U.sibling=null,U}function g(U,x,j){return U.index=j,r?(j=U.alternate,j!==null?(j=j.index,j<x?(U.flags|=2,x):j):(U.flags|=2,x)):(U.flags|=1048576,x)}function v(U){return r&&U.alternate===null&&(U.flags|=2),U}function A(U,x,j,Y){return x===null||x.tag!==6?(x=Rd(j,U.mode,Y),x.return=U,x):(x=d(x,j),x.return=U,x)}function P(U,x,j,Y){var de=j.type;return de===N?Q(U,x,j.props.children,Y,j.key):x!==null&&(x.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===bt&&Sm(de)===x.type)?(Y=d(x,j.props),Y.ref=La(U,x,j),Y.return=U,Y):(Y=Hu(j.type,j.key,j.props,null,U.mode,Y),Y.ref=La(U,x,j),Y.return=U,Y)}function z(U,x,j,Y){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=Cd(j,U.mode,Y),x.return=U,x):(x=d(x,j.children||[]),x.return=U,x)}function Q(U,x,j,Y,de){return x===null||x.tag!==7?(x=gs(j,U.mode,Y,de),x.return=U,x):(x=d(x,j),x.return=U,x)}function J(U,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Rd(""+x,U.mode,j),x.return=U,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Re:return j=Hu(x.type,x.key,x.props,null,U.mode,j),j.ref=La(U,null,x),j.return=U,j;case we:return x=Cd(x,U.mode,j),x.return=U,x;case bt:var Y=x._init;return J(U,Y(x._payload),j)}if(vr(x)||me(x))return x=gs(x,U.mode,j,null),x.return=U,x;Tu(U,x)}return null}function G(U,x,j,Y){var de=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return de!==null?null:A(U,x,""+j,Y);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Re:return j.key===de?P(U,x,j,Y):null;case we:return j.key===de?z(U,x,j,Y):null;case bt:return de=j._init,G(U,x,de(j._payload),Y)}if(vr(j)||me(j))return de!==null?null:Q(U,x,j,Y,null);Tu(U,j)}return null}function oe(U,x,j,Y,de){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return U=U.get(j)||null,A(x,U,""+Y,de);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Re:return U=U.get(Y.key===null?j:Y.key)||null,P(x,U,Y,de);case we:return U=U.get(Y.key===null?j:Y.key)||null,z(x,U,Y,de);case bt:var ge=Y._init;return oe(U,x,j,ge(Y._payload),de)}if(vr(Y)||me(Y))return U=U.get(j)||null,Q(x,U,Y,de,null);Tu(x,Y)}return null}function ce(U,x,j,Y){for(var de=null,ge=null,ye=x,Ee=x=0,Rt=null;ye!==null&&Ee<j.length;Ee++){ye.index>Ee?(Rt=ye,ye=null):Rt=ye.sibling;var be=G(U,ye,j[Ee],Y);if(be===null){ye===null&&(ye=Rt);break}r&&ye&&be.alternate===null&&s(U,ye),x=g(be,x,Ee),ge===null?de=be:ge.sibling=be,ge=be,ye=Rt}if(Ee===j.length)return a(U,ye),Je&&ls(U,Ee),de;if(ye===null){for(;Ee<j.length;Ee++)ye=J(U,j[Ee],Y),ye!==null&&(x=g(ye,x,Ee),ge===null?de=ye:ge.sibling=ye,ge=ye);return Je&&ls(U,Ee),de}for(ye=h(U,ye);Ee<j.length;Ee++)Rt=oe(ye,U,Ee,j[Ee],Y),Rt!==null&&(r&&Rt.alternate!==null&&ye.delete(Rt.key===null?Ee:Rt.key),x=g(Rt,x,Ee),ge===null?de=Rt:ge.sibling=Rt,ge=Rt);return r&&ye.forEach(function(gi){return s(U,gi)}),Je&&ls(U,Ee),de}function he(U,x,j,Y){var de=me(j);if(typeof de!="function")throw Error(t(150));if(j=de.call(j),j==null)throw Error(t(151));for(var ge=de=null,ye=x,Ee=x=0,Rt=null,be=j.next();ye!==null&&!be.done;Ee++,be=j.next()){ye.index>Ee?(Rt=ye,ye=null):Rt=ye.sibling;var gi=G(U,ye,be.value,Y);if(gi===null){ye===null&&(ye=Rt);break}r&&ye&&gi.alternate===null&&s(U,ye),x=g(gi,x,Ee),ge===null?de=gi:ge.sibling=gi,ge=gi,ye=Rt}if(be.done)return a(U,ye),Je&&ls(U,Ee),de;if(ye===null){for(;!be.done;Ee++,be=j.next())be=J(U,be.value,Y),be!==null&&(x=g(be,x,Ee),ge===null?de=be:ge.sibling=be,ge=be);return Je&&ls(U,Ee),de}for(ye=h(U,ye);!be.done;Ee++,be=j.next())be=oe(ye,U,Ee,be.value,Y),be!==null&&(r&&be.alternate!==null&&ye.delete(be.key===null?Ee:be.key),x=g(be,x,Ee),ge===null?de=be:ge.sibling=be,ge=be);return r&&ye.forEach(function(r0){return s(U,r0)}),Je&&ls(U,Ee),de}function at(U,x,j,Y){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Re:e:{for(var de=j.key,ge=x;ge!==null;){if(ge.key===de){if(de=j.type,de===N){if(ge.tag===7){a(U,ge.sibling),x=d(ge,j.props.children),x.return=U,U=x;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===bt&&Sm(de)===ge.type){a(U,ge.sibling),x=d(ge,j.props),x.ref=La(U,ge,j),x.return=U,U=x;break e}a(U,ge);break}else s(U,ge);ge=ge.sibling}j.type===N?(x=gs(j.props.children,U.mode,Y,j.key),x.return=U,U=x):(Y=Hu(j.type,j.key,j.props,null,U.mode,Y),Y.ref=La(U,x,j),Y.return=U,U=Y)}return v(U);case we:e:{for(ge=j.key;x!==null;){if(x.key===ge)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){a(U,x.sibling),x=d(x,j.children||[]),x.return=U,U=x;break e}else{a(U,x);break}else s(U,x);x=x.sibling}x=Cd(j,U.mode,Y),x.return=U,U=x}return v(U);case bt:return ge=j._init,at(U,x,ge(j._payload),Y)}if(vr(j))return ce(U,x,j,Y);if(me(j))return he(U,x,j,Y);Tu(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,x!==null&&x.tag===6?(a(U,x.sibling),x=d(x,j),x.return=U,U=x):(a(U,x),x=Rd(j,U.mode,Y),x.return=U,U=x),v(U)):a(U,x)}return at}var vo=Am(!0),Rm=Am(!1),Iu=si(null),Su=null,Eo=null,bh=null;function Mh(){bh=Eo=Su=null}function Uh(r){var s=Iu.current;Ge(Iu),r._currentValue=s}function Fh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function wo(r,s){Su=r,bh=Eo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(en=!0),r.firstContext=null)}function Tn(r){var s=r._currentValue;if(bh!==r)if(r={context:r,memoizedValue:s,next:null},Eo===null){if(Su===null)throw Error(t(308));Eo=r,Su.dependencies={lanes:0,firstContext:r}}else Eo=Eo.next=r;return s}var us=null;function jh(r){us===null?us=[r]:us.push(r)}function Cm(r,s,a,h){var d=s.interleaved;return d===null?(a.next=a,jh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Dr(r,h)}function Dr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var li=!1;function zh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Or(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ui(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Le&2)!==0){var d=h.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),h.pending=s,Dr(r,a)}return d=h.interleaved,d===null?(s.next=s,jh(h)):(s.next=d.next,d.next=s),h.interleaved=s,Dr(r,a)}function Au(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Yr(r,a)}}function km(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:h.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Ru(r,s,a,h){var d=r.updateQueue;li=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var P=A,z=P.next;P.next=null,v===null?g=z:v.next=z,v=P;var Q=r.alternate;Q!==null&&(Q=Q.updateQueue,A=Q.lastBaseUpdate,A!==v&&(A===null?Q.firstBaseUpdate=z:A.next=z,Q.lastBaseUpdate=P))}if(g!==null){var J=d.baseState;v=0,Q=z=P=null,A=g;do{var G=A.lane,oe=A.eventTime;if((h&G)===G){Q!==null&&(Q=Q.next={eventTime:oe,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ce=r,he=A;switch(G=s,oe=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){J=ce.call(oe,J,G);break e}J=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,G=typeof ce=="function"?ce.call(oe,J,G):ce,G==null)break e;J=le({},J,G);break e;case 2:li=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,G=d.effects,G===null?d.effects=[A]:G.push(A))}else oe={eventTime:oe,lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Q===null?(z=Q=oe,P=J):Q=Q.next=oe,v|=G;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;G=A,A=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(P=J),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);ds|=v,r.lanes=v,r.memoizedState=J}}function Nm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],d=h.callback;if(d!==null){if(h.callback=null,h=a,typeof d!="function")throw Error(t(191,d));d.call(h)}}}var ba={},nr=si(ba),Ma=si(ba),Ua=si(ba);function cs(r){if(r===ba)throw Error(t(174));return r}function Bh(r,s){switch(We(Ua,s),We(Ma,r),We(nr,ba),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:gt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=gt(s,r)}Ge(nr),We(nr,s)}function To(){Ge(nr),Ge(Ma),Ge(Ua)}function xm(r){cs(Ua.current);var s=cs(nr.current),a=gt(s,r.type);s!==a&&(We(Ma,r),We(nr,a))}function $h(r){Ma.current===r&&(Ge(nr),Ge(Ma))}var Ye=si(0);function Cu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var qh=[];function Wh(){for(var r=0;r<qh.length;r++)qh[r]._workInProgressVersionPrimary=null;qh.length=0}var Pu=re.ReactCurrentDispatcher,Hh=re.ReactCurrentBatchConfig,hs=0,Ze=null,_t=null,St=null,ku=!1,Fa=!1,ja=0,AT=0;function Ut(){throw Error(t(321))}function Kh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Mn(r[a],s[a]))return!1;return!0}function Gh(r,s,a,h,d,g){if(hs=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Pu.current=r===null||r.memoizedState===null?kT:NT,r=a(h,d),Fa){g=0;do{if(Fa=!1,ja=0,25<=g)throw Error(t(301));g+=1,St=_t=null,s.updateQueue=null,Pu.current=xT,r=a(h,d)}while(Fa)}if(Pu.current=Du,s=_t!==null&&_t.next!==null,hs=0,St=_t=Ze=null,ku=!1,s)throw Error(t(300));return r}function Qh(){var r=ja!==0;return ja=0,r}function rr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?Ze.memoizedState=St=r:St=St.next=r,St}function In(){if(_t===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=_t.next;var s=St===null?Ze.memoizedState:St.next;if(s!==null)St=s,_t=r;else{if(r===null)throw Error(t(310));_t=r,r={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},St===null?Ze.memoizedState=St=r:St=St.next=r}return St}function za(r,s){return typeof s=="function"?s(r):s}function Xh(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=_t,d=h.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}h.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,h=h.baseState;var A=v=null,P=null,z=g;do{var Q=z.lane;if((hs&Q)===Q)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:r(h,z.action);else{var J={lane:Q,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(A=P=J,v=h):P=P.next=J,Ze.lanes|=Q,ds|=Q}z=z.next}while(z!==null&&z!==g);P===null?v=h:P.next=A,Mn(h,s.memoizedState)||(en=!0),s.memoizedState=h,s.baseState=v,s.baseQueue=P,a.lastRenderedState=h}if(r=a.interleaved,r!==null){d=r;do g=d.lane,Ze.lanes|=g,ds|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Jh(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=r(g,v.action),v=v.next;while(v!==d);Mn(g,s.memoizedState)||(en=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function Dm(){}function Om(r,s){var a=Ze,h=In(),d=s(),g=!Mn(h.memoizedState,d);if(g&&(h.memoizedState=d,en=!0),h=h.queue,Yh(bm.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,Ba(9,Lm.bind(null,a,h,d,s),void 0,null),At===null)throw Error(t(349));(hs&30)!==0||Vm(a,s,d)}return d}function Vm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Lm(r,s,a,h){s.value=a,s.getSnapshot=h,Mm(s)&&Um(r)}function bm(r,s,a){return a(function(){Mm(s)&&Um(r)})}function Mm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Mn(r,a)}catch{return!0}}function Um(r){var s=Dr(r,1);s!==null&&Bn(s,r,1,-1)}function Fm(r){var s=rr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:r},s.queue=r,r=r.dispatch=PT.bind(null,Ze,r),[s.memoizedState,r]}function Ba(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function jm(){return In().memoizedState}function Nu(r,s,a,h){var d=rr();Ze.flags|=r,d.memoizedState=Ba(1|s,a,void 0,h===void 0?null:h)}function xu(r,s,a,h){var d=In();h=h===void 0?null:h;var g=void 0;if(_t!==null){var v=_t.memoizedState;if(g=v.destroy,h!==null&&Kh(h,v.deps)){d.memoizedState=Ba(s,a,g,h);return}}Ze.flags|=r,d.memoizedState=Ba(1|s,a,g,h)}function zm(r,s){return Nu(8390656,8,r,s)}function Yh(r,s){return xu(2048,8,r,s)}function Bm(r,s){return xu(4,2,r,s)}function $m(r,s){return xu(4,4,r,s)}function qm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Wm(r,s,a){return a=a!=null?a.concat([r]):null,xu(4,4,qm.bind(null,s,r),a)}function Zh(){}function Hm(r,s){var a=In();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Kh(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function Km(r,s){var a=In();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Kh(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function Gm(r,s,a){return(hs&21)===0?(r.baseState&&(r.baseState=!1,en=!0),r.memoizedState=a):(Mn(a,s)||(a=es(),Ze.lanes|=a,ds|=a,r.baseState=!0),s)}function RT(r,s){var a=xe;xe=a!==0&&4>a?a:4,r(!0);var h=Hh.transition;Hh.transition={};try{r(!1),s()}finally{xe=a,Hh.transition=h}}function Qm(){return In().memoizedState}function CT(r,s,a){var h=fi(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},Xm(r))Jm(s,a);else if(a=Cm(r,s,a,h),a!==null){var d=Gt();Bn(a,r,h,d),Ym(a,s,h)}}function PT(r,s,a){var h=fi(r),d={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xm(r))Jm(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,A=g(v,a);if(d.hasEagerState=!0,d.eagerState=A,Mn(A,v)){var P=s.interleaved;P===null?(d.next=d,jh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=Cm(r,s,d,h),a!==null&&(d=Gt(),Bn(a,r,h,d),Ym(a,s,h))}}function Xm(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function Jm(r,s){Fa=ku=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Ym(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Yr(r,a)}}var Du={readContext:Tn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},kT={readContext:Tn,useCallback:function(r,s){return rr().memoizedState=[r,s===void 0?null:s],r},useContext:Tn,useEffect:zm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Nu(4194308,4,qm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Nu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Nu(4,2,r,s)},useMemo:function(r,s){var a=rr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=rr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=CT.bind(null,Ze,r),[h.memoizedState,r]},useRef:function(r){var s=rr();return r={current:r},s.memoizedState=r},useState:Fm,useDebugValue:Zh,useDeferredValue:function(r){return rr().memoizedState=r},useTransition:function(){var r=Fm(!1),s=r[0];return r=RT.bind(null,r[1]),rr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=Ze,d=rr();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),At===null)throw Error(t(349));(hs&30)!==0||Vm(h,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,zm(bm.bind(null,h,g,r),[r]),h.flags|=2048,Ba(9,Lm.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=rr(),s=At.identifierPrefix;if(Je){var a=xr,h=Nr;a=(h&~(1<<32-Wt(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=ja++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=AT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},NT={readContext:Tn,useCallback:Hm,useContext:Tn,useEffect:Yh,useImperativeHandle:Wm,useInsertionEffect:Bm,useLayoutEffect:$m,useMemo:Km,useReducer:Xh,useRef:jm,useState:function(){return Xh(za)},useDebugValue:Zh,useDeferredValue:function(r){var s=In();return Gm(s,_t.memoizedState,r)},useTransition:function(){var r=Xh(za)[0],s=In().memoizedState;return[r,s]},useMutableSource:Dm,useSyncExternalStore:Om,useId:Qm,unstable_isNewReconciler:!1},xT={readContext:Tn,useCallback:Hm,useContext:Tn,useEffect:Yh,useImperativeHandle:Wm,useInsertionEffect:Bm,useLayoutEffect:$m,useMemo:Km,useReducer:Jh,useRef:jm,useState:function(){return Jh(za)},useDebugValue:Zh,useDeferredValue:function(r){var s=In();return _t===null?s.memoizedState=r:Gm(s,_t.memoizedState,r)},useTransition:function(){var r=Jh(za)[0],s=In().memoizedState;return[r,s]},useMutableSource:Dm,useSyncExternalStore:Om,useId:Qm,unstable_isNewReconciler:!1};function Fn(r,s){if(r&&r.defaultProps){s=le({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function ed(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:le({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Ou={isMounted:function(r){return(r=r._reactInternals)?Nn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Gt(),d=fi(r),g=Or(h,d);g.payload=s,a!=null&&(g.callback=a),s=ui(r,g,d),s!==null&&(Bn(s,r,d,h),Au(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Gt(),d=fi(r),g=Or(h,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ui(r,g,d),s!==null&&(Bn(s,r,d,h),Au(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Gt(),h=fi(r),d=Or(a,h);d.tag=2,s!=null&&(d.callback=s),s=ui(r,d,h),s!==null&&(Bn(s,r,h,a),Au(s,r,h))}};function Zm(r,s,a,h,d,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,v):s.prototype&&s.prototype.isPureReactComponent?!Pa(a,h)||!Pa(d,g):!0}function eg(r,s,a){var h=!1,d=oi,g=s.contextType;return typeof g=="object"&&g!==null?g=Tn(g):(d=Zt(s)?os:Mt.current,h=s.contextTypes,g=(h=h!=null)?mo(r,d):oi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ou,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function tg(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&Ou.enqueueReplaceState(s,s.state,null)}function td(r,s,a,h){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},zh(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=Tn(g):(g=Zt(s)?os:Mt.current,d.context=mo(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(ed(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Ou.enqueueReplaceState(d,d.state,null),Ru(r,a,d,h),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Io(r,s){try{var a="",h=s;do a+=Ce(h),h=h.return;while(h);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function nd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function rd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var DT=typeof WeakMap=="function"?WeakMap:Map;function ng(r,s,a){a=Or(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){ju||(ju=!0,_d=h),rd(r,s)},a}function rg(r,s,a){a=Or(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var d=s.value;a.payload=function(){return h(d)},a.callback=function(){rd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){rd(r,s),typeof h!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function ig(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new DT;var d=new Set;h.set(s,d)}else d=h.get(s),d===void 0&&(d=new Set,h.set(s,d));d.has(a)||(d.add(a),r=HT.bind(null,r,s,a),s.then(r,r))}function sg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function og(r,s,a,h,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Or(-1,1),s.tag=2,ui(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var OT=re.ReactCurrentOwner,en=!1;function Kt(r,s,a,h){s.child=r===null?Rm(s,null,a,h):vo(s,r.child,a,h)}function ag(r,s,a,h,d){a=a.render;var g=s.ref;return wo(s,d),h=Gh(r,s,a,h,g,d),a=Qh(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Vr(r,s,d)):(Je&&a&&xh(s),s.flags|=1,Kt(r,s,h,d),s.child)}function lg(r,s,a,h,d){if(r===null){var g=a.type;return typeof g=="function"&&!Ad(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,ug(r,s,g,h,d)):(r=Hu(a.type,null,h,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&d)===0){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:Pa,a(v,h)&&r.ref===s.ref)return Vr(r,s,d)}return s.flags|=1,r=mi(g,h),r.ref=s.ref,r.return=s,s.child=r}function ug(r,s,a,h,d){if(r!==null){var g=r.memoizedProps;if(Pa(g,h)&&r.ref===s.ref)if(en=!1,s.pendingProps=h=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(en=!0);else return s.lanes=r.lanes,Vr(r,s,d)}return id(r,s,a,h,d)}function cg(r,s,a){var h=s.pendingProps,d=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Ao,pn),pn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(Ao,pn),pn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,We(Ao,pn),pn|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,We(Ao,pn),pn|=h;return Kt(r,s,d,a),s.child}function hg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function id(r,s,a,h,d){var g=Zt(a)?os:Mt.current;return g=mo(s,g),wo(s,d),a=Gh(r,s,a,h,g,d),h=Qh(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Vr(r,s,d)):(Je&&h&&xh(s),s.flags|=1,Kt(r,s,a,d),s.child)}function dg(r,s,a,h,d){if(Zt(a)){var g=!0;yu(s)}else g=!1;if(wo(s,d),s.stateNode===null)Lu(r,s),eg(s,a,h),td(s,a,h,d),h=!0;else if(r===null){var v=s.stateNode,A=s.memoizedProps;v.props=A;var P=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=Tn(z):(z=Zt(a)?os:Mt.current,z=mo(s,z));var Q=a.getDerivedStateFromProps,J=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==h||P!==z)&&tg(s,v,h,z),li=!1;var G=s.memoizedState;v.state=G,Ru(s,h,v,d),P=s.memoizedState,A!==h||G!==P||Yt.current||li?(typeof Q=="function"&&(ed(s,a,Q,h),P=s.memoizedState),(A=li||Zm(s,a,A,h,G,P,z))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=P),v.props=h,v.state=P,v.context=z,h=A):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{v=s.stateNode,Pm(r,s),A=s.memoizedProps,z=s.type===s.elementType?A:Fn(s.type,A),v.props=z,J=s.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=Tn(P):(P=Zt(a)?os:Mt.current,P=mo(s,P));var oe=a.getDerivedStateFromProps;(Q=typeof oe=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==J||G!==P)&&tg(s,v,h,P),li=!1,G=s.memoizedState,v.state=G,Ru(s,h,v,d);var ce=s.memoizedState;A!==J||G!==ce||Yt.current||li?(typeof oe=="function"&&(ed(s,a,oe,h),ce=s.memoizedState),(z=li||Zm(s,a,z,h,G,ce,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(h,ce,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(h,ce,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),v.props=h,v.state=ce,v.context=P,h=z):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),h=!1)}return sd(r,s,a,h,g,d)}function sd(r,s,a,h,d,g){hg(r,s);var v=(s.flags&128)!==0;if(!h&&!v)return d&&ym(s,a,!1),Vr(r,s,g);h=s.stateNode,OT.current=s;var A=v&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&v?(s.child=vo(s,r.child,null,g),s.child=vo(s,null,A,g)):Kt(r,s,A,g),s.memoizedState=h.state,d&&ym(s,a,!0),s.child}function fg(r){var s=r.stateNode;s.pendingContext?mm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&mm(r,s.context,!1),Bh(r,s.containerInfo)}function pg(r,s,a,h,d){return _o(),Lh(d),s.flags|=256,Kt(r,s,a,h),s.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ad(r){return{baseLanes:r,cachePool:null,transitions:null}}function mg(r,s,a){var h=s.pendingProps,d=Ye.current,g=!1,v=(s.flags&128)!==0,A;if((A=v)||(A=r!==null&&r.memoizedState===null?!1:(d&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),We(Ye,d&1),r===null)return Vh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=h.children,r=h.fallback,g?(h=s.mode,g=s.child,v={mode:"hidden",children:v},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=v):g=Ku(v,h,0,null),r=gs(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=ad(a),s.memoizedState=od,r):ld(s,v));if(d=r.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return VT(r,s,v,h,A,d,a);if(g){g=h.fallback,v=s.mode,d=r.child,A=d.sibling;var P={mode:"hidden",children:h.children};return(v&1)===0&&s.child!==d?(h=s.child,h.childLanes=0,h.pendingProps=P,s.deletions=null):(h=mi(d,P),h.subtreeFlags=d.subtreeFlags&14680064),A!==null?g=mi(A,g):(g=gs(g,v,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,v=r.child.memoizedState,v=v===null?ad(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=od,h}return g=r.child,r=g.sibling,h=mi(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function ld(r,s){return s=Ku({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Vu(r,s,a,h){return h!==null&&Lh(h),vo(s,r.child,null,a),r=ld(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function VT(r,s,a,h,d,g,v){if(a)return s.flags&256?(s.flags&=-257,h=nd(Error(t(422))),Vu(r,s,v,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,d=s.mode,h=Ku({mode:"visible",children:h.children},d,0,null),g=gs(g,d,v,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&vo(s,r.child,null,v),s.child.memoizedState=ad(v),s.memoizedState=od,g);if((s.mode&1)===0)return Vu(r,s,v,null);if(d.data==="$!"){if(h=d.nextSibling&&d.nextSibling.dataset,h)var A=h.dgst;return h=A,g=Error(t(419)),h=nd(g,h,void 0),Vu(r,s,v,h)}if(A=(v&r.childLanes)!==0,en||A){if(h=At,h!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(h.suspendedLanes|v))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Dr(r,d),Bn(h,r,d,-1))}return Sd(),h=nd(Error(t(421))),Vu(r,s,v,h)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=KT.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,fn=ii(d.nextSibling),dn=s,Je=!0,Un=null,r!==null&&(En[wn++]=Nr,En[wn++]=xr,En[wn++]=as,Nr=r.id,xr=r.overflow,as=s),s=ld(s,h.children),s.flags|=4096,s)}function gg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Fh(r.return,s,a)}function ud(r,s,a,h,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=d)}function yg(r,s,a){var h=s.pendingProps,d=h.revealOrder,g=h.tail;if(Kt(r,s,h.children,a),h=Ye.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&gg(r,a,s);else if(r.tag===19)gg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(Ye,h),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Cu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),ud(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Cu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}ud(s,!0,a,null,g);break;case"together":ud(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Lu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Vr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ds|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=mi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=mi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function LT(r,s,a){switch(s.tag){case 3:fg(s),_o();break;case 5:xm(s);break;case 1:Zt(s.type)&&yu(s);break;case 4:Bh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,d=s.memoizedProps.value;We(Iu,h._currentValue),h._currentValue=d;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(Ye,Ye.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?mg(r,s,a):(We(Ye,Ye.current&1),r=Vr(r,s,a),r!==null?r.sibling:null);We(Ye,Ye.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return yg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ye,Ye.current),h)break;return null;case 22:case 23:return s.lanes=0,cg(r,s,a)}return Vr(r,s,a)}var _g,cd,vg,Eg;_g=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},cd=function(){},vg=function(r,s,a,h){var d=r.memoizedProps;if(d!==h){r=s.stateNode,cs(nr.current);var g=null;switch(a){case"input":d=$i(r,d),h=$i(r,h),g=[];break;case"select":d=le({},d,{value:void 0}),h=le({},h,{value:void 0}),g=[];break;case"textarea":d=ra(r,d),h=ra(r,h),g=[];break;default:typeof d.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=pu)}ua(a,h);var v;a=null;for(z in d)if(!h.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var A=d[z];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in h){var P=h[z];if(A=d!=null?d[z]:void 0,h.hasOwnProperty(z)&&P!==A&&(P!=null||A!=null))if(z==="style")if(A){for(v in A)!A.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&A[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(g||(g=[]),g.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(g=g||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&Ke("scroll",r),g||A===P||(g=[])):(g=g||[]).push(z,P))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Eg=function(r,s,a,h){a!==h&&(s.flags|=4)};function $a(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags&14680064,h|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags,h|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function bT(r,s,a){var h=s.pendingProps;switch(Dh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Zt(s.type)&&gu(),Ft(s),null;case 3:return h=s.stateNode,To(),Ge(Yt),Ge(Mt),Wh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(wu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Un!==null&&(wd(Un),Un=null))),cd(r,s),Ft(s),null;case 5:$h(s);var d=cs(Ua.current);if(a=s.type,r!==null&&s.stateNode!=null)vg(r,s,a,h,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=cs(nr.current),wu(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[tr]=s,h[Oa]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",h),Ke("close",h);break;case"iframe":case"object":case"embed":Ke("load",h);break;case"video":case"audio":for(d=0;d<Na.length;d++)Ke(Na[d],h);break;case"source":Ke("error",h);break;case"img":case"image":case"link":Ke("error",h),Ke("load",h);break;case"details":Ke("toggle",h);break;case"input":bs(h,g),Ke("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",h);break;case"textarea":Us(h,g),Ke("invalid",h)}ua(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var A=g[v];v==="children"?typeof A=="string"?h.textContent!==A&&(g.suppressHydrationWarning!==!0&&fu(h.textContent,A,r),d=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&fu(h.textContent,A,r),d=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ke("scroll",h)}switch(a){case"input":_r(h),Fl(h,g,!0);break;case"textarea":_r(h),ia(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=pu)}h=d,s.updateQueue=h,h!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=mt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=v.createElement(a,{is:h.is}):(r=v.createElement(a),a==="select"&&(v=r,h.multiple?v.multiple=!0:h.size&&(v.size=h.size))):r=v.createElementNS(r,a),r[tr]=s,r[Oa]=h,_g(r,s,!1,!1),s.stateNode=r;e:{switch(v=ca(a,h),a){case"dialog":Ke("cancel",r),Ke("close",r),d=h;break;case"iframe":case"object":case"embed":Ke("load",r),d=h;break;case"video":case"audio":for(d=0;d<Na.length;d++)Ke(Na[d],r);d=h;break;case"source":Ke("error",r),d=h;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),d=h;break;case"details":Ke("toggle",r),d=h;break;case"input":bs(r,h),d=$i(r,h),Ke("invalid",r);break;case"option":d=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},d=le({},h,{value:void 0}),Ke("invalid",r);break;case"textarea":Us(r,h),d=ra(r,h),Ke("invalid",r);break;default:d=h}ua(a,d),A=d;for(g in A)if(A.hasOwnProperty(g)){var P=A[g];g==="style"?aa(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&sa(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Kr(r,P):typeof P=="number"&&Kr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&Ke("scroll",r):P!=null&&ee(r,g,P,v))}switch(a){case"input":_r(r),Fl(r,h,!1);break;case"textarea":_r(r),ia(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Ue(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?Er(r,!!h.multiple,g,!1):h.defaultValue!=null&&Er(r,!!h.multiple,h.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=pu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)Eg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=cs(Ua.current),cs(nr.current),wu(s)){if(h=s.stateNode,a=s.memoizedProps,h[tr]=s,(g=h.nodeValue!==a)&&(r=dn,r!==null))switch(r.tag){case 3:fu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&fu(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[tr]=s,s.stateNode=h}return Ft(s),null;case 13:if(Ge(Ye),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Je&&fn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Im(),_o(),s.flags|=98560,g=!1;else if(g=wu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[tr]=s}else _o(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),g=!1}else Un!==null&&(wd(Un),Un=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Ye.current&1)!==0?vt===0&&(vt=3):Sd())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return To(),cd(r,s),r===null&&xa(s.stateNode.containerInfo),Ft(s),null;case 10:return Uh(s.type._context),Ft(s),null;case 17:return Zt(s.type)&&gu(),Ft(s),null;case 19:if(Ge(Ye),g=s.memoizedState,g===null)return Ft(s),null;if(h=(s.flags&128)!==0,v=g.rendering,v===null)if(h)$a(g,!1);else{if(vt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=Cu(r),v!==null){for(s.flags|=128,$a(g,!1),h=v.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Ye,Ye.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>Ro&&(s.flags|=128,h=!0,$a(g,!1),s.lanes=4194304)}else{if(!h)if(r=Cu(v),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),$a(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Je)return Ft(s),null}else 2*qe()-g.renderingStartTime>Ro&&a!==1073741824&&(s.flags|=128,h=!0,$a(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=Ye.current,We(Ye,h?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return Id(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(pn&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function MT(r,s){switch(Dh(s),s.tag){case 1:return Zt(s.type)&&gu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return To(),Ge(Yt),Ge(Mt),Wh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return $h(s),null;case 13:if(Ge(Ye),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));_o()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Ye),null;case 4:return To(),null;case 10:return Uh(s.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var bu=!1,jt=!1,UT=typeof WeakSet=="function"?WeakSet:Set,ue=null;function So(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){nt(r,s,h)}else a.current=null}function hd(r,s,a){try{a()}catch(h){nt(r,s,h)}}var wg=!1;function FT(r,s){if(Ih=ti,r=Zp(),mh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var d=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,A=-1,P=-1,z=0,Q=0,J=r,G=null;t:for(;;){for(var oe;J!==a||d!==0&&J.nodeType!==3||(A=v+d),J!==g||h!==0&&J.nodeType!==3||(P=v+h),J.nodeType===3&&(v+=J.nodeValue.length),(oe=J.firstChild)!==null;)G=J,J=oe;for(;;){if(J===r)break t;if(G===a&&++z===d&&(A=v),G===g&&++Q===h&&(P=v),(oe=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=oe}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sh={focusedElem:r,selectionRange:a},ti=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,at=ce.memoizedState,U=s.stateNode,x=U.getSnapshotBeforeUpdate(s.elementType===s.type?he:Fn(s.type,he),at);U.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){nt(s,s.return,Y)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=wg,wg=!1,ce}function qa(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var d=h=h.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&hd(s,a,g)}d=d.next}while(d!==h)}}function Mu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function dd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Tg(r){var s=r.alternate;s!==null&&(r.alternate=null,Tg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[tr],delete s[Oa],delete s[Ph],delete s[wT],delete s[TT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Ig(r){return r.tag===5||r.tag===3||r.tag===4}function Sg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Ig(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function fd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=pu));else if(h!==4&&(r=r.child,r!==null))for(fd(r,s,a),r=r.sibling;r!==null;)fd(r,s,a),r=r.sibling}function pd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(pd(r,s,a),r=r.sibling;r!==null;)pd(r,s,a),r=r.sibling}var Nt=null,jn=!1;function ci(r,s,a){for(a=a.child;a!==null;)Ag(r,s,a),a=a.sibling}function Ag(r,s,a){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Yi,a)}catch{}switch(a.tag){case 5:jt||So(a,s);case 6:var h=Nt,d=jn;Nt=null,ci(r,s,a),Nt=h,jn=d,Nt!==null&&(jn?(r=Nt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Nt.removeChild(a.stateNode));break;case 18:Nt!==null&&(jn?(r=Nt,a=a.stateNode,r.nodeType===8?Ch(r.parentNode,a):r.nodeType===1&&Ch(r,a),Ln(r)):Ch(Nt,a.stateNode));break;case 4:h=Nt,d=jn,Nt=a.stateNode.containerInfo,jn=!0,ci(r,s,a),Nt=h,jn=d;break;case 0:case 11:case 14:case 15:if(!jt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){d=h=h.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&((g&2)!==0||(g&4)!==0)&&hd(a,s,v),d=d.next}while(d!==h)}ci(r,s,a);break;case 1:if(!jt&&(So(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(A){nt(a,s,A)}ci(r,s,a);break;case 21:ci(r,s,a);break;case 22:a.mode&1?(jt=(h=jt)||a.memoizedState!==null,ci(r,s,a),jt=h):ci(r,s,a);break;default:ci(r,s,a)}}function Rg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new UT),s.forEach(function(h){var d=GT.bind(null,r,h);a.has(h)||(a.add(h),h.then(d,d))})}}function zn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var d=a[h];try{var g=r,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 5:Nt=A.stateNode,jn=!1;break e;case 3:Nt=A.stateNode.containerInfo,jn=!0;break e;case 4:Nt=A.stateNode.containerInfo,jn=!0;break e}A=A.return}if(Nt===null)throw Error(t(160));Ag(g,v,d),Nt=null,jn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){nt(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Cg(s,r),s=s.sibling}function Cg(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(zn(s,r),ir(r),h&4){try{qa(3,r,r.return),Mu(3,r)}catch(he){nt(r,r.return,he)}try{qa(5,r,r.return)}catch(he){nt(r,r.return,he)}}break;case 1:zn(s,r),ir(r),h&512&&a!==null&&So(a,a.return);break;case 5:if(zn(s,r),ir(r),h&512&&a!==null&&So(a,a.return),r.flags&32){var d=r.stateNode;try{Kr(d,"")}catch(he){nt(r,r.return,he)}}if(h&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,A=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&ta(d,g),ca(A,v);var z=ca(A,g);for(v=0;v<P.length;v+=2){var Q=P[v],J=P[v+1];Q==="style"?aa(d,J):Q==="dangerouslySetInnerHTML"?sa(d,J):Q==="children"?Kr(d,J):ee(d,Q,J,z)}switch(A){case"input":na(d,g);break;case"textarea":Fs(d,g);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?Er(d,!!g.multiple,oe,!1):G!==!!g.multiple&&(g.defaultValue!=null?Er(d,!!g.multiple,g.defaultValue,!0):Er(d,!!g.multiple,g.multiple?[]:"",!1))}d[Oa]=g}catch(he){nt(r,r.return,he)}}break;case 6:if(zn(s,r),ir(r),h&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(he){nt(r,r.return,he)}}break;case 3:if(zn(s,r),ir(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(s.containerInfo)}catch(he){nt(r,r.return,he)}break;case 4:zn(s,r),ir(r);break;case 13:zn(s,r),ir(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(yd=qe())),h&4&&Rg(r);break;case 22:if(Q=a!==null&&a.memoizedState!==null,r.mode&1?(jt=(z=jt)||Q,zn(s,r),jt=z):zn(s,r),ir(r),h&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!Q&&(r.mode&1)!==0)for(ue=r,Q=r.child;Q!==null;){for(J=ue=Q;ue!==null;){switch(G=ue,oe=G.child,G.tag){case 0:case 11:case 14:case 15:qa(4,G,G.return);break;case 1:So(G,G.return);var ce=G.stateNode;if(typeof ce.componentWillUnmount=="function"){h=G,a=G.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){nt(h,a,he)}}break;case 5:So(G,G.return);break;case 22:if(G.memoizedState!==null){Ng(J);continue}}oe!==null?(oe.return=G,ue=oe):Ng(J)}Q=Q.sibling}e:for(Q=null,J=r;;){if(J.tag===5){if(Q===null){Q=J;try{d=J.stateNode,z?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=J.stateNode,P=J.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=oa("display",v))}catch(he){nt(r,r.return,he)}}}else if(J.tag===6){if(Q===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(he){nt(r,r.return,he)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;Q===J&&(Q=null),J=J.return}Q===J&&(Q=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:zn(s,r),ir(r),h&4&&Rg(r);break;case 21:break;default:zn(s,r),ir(r)}}function ir(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Ig(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var d=h.stateNode;h.flags&32&&(Kr(d,""),h.flags&=-33);var g=Sg(r);pd(r,g,d);break;case 3:case 4:var v=h.stateNode.containerInfo,A=Sg(r);fd(r,A,v);break;default:throw Error(t(161))}}catch(P){nt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function jT(r,s,a){ue=r,Pg(r)}function Pg(r,s,a){for(var h=(r.mode&1)!==0;ue!==null;){var d=ue,g=d.child;if(d.tag===22&&h){var v=d.memoizedState!==null||bu;if(!v){var A=d.alternate,P=A!==null&&A.memoizedState!==null||jt;A=bu;var z=jt;if(bu=v,(jt=P)&&!z)for(ue=d;ue!==null;)v=ue,P=v.child,v.tag===22&&v.memoizedState!==null?xg(d):P!==null?(P.return=v,ue=P):xg(d);for(;g!==null;)ue=g,Pg(g),g=g.sibling;ue=d,bu=A,jt=z}kg(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ue=g):kg(r)}}function kg(r){for(;ue!==null;){var s=ue;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:jt||Mu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!jt)if(a===null)h.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);h.componentDidUpdate(d,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Nm(s,g,h);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Nm(s,v,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var Q=z.memoizedState;if(Q!==null){var J=Q.dehydrated;J!==null&&Ln(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&dd(s)}catch(G){nt(s,s.return,G)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Ng(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function xg(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Mu(4,s)}catch(P){nt(s,a,P)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var d=s.return;try{h.componentDidMount()}catch(P){nt(s,d,P)}}var g=s.return;try{dd(s)}catch(P){nt(s,g,P)}break;case 5:var v=s.return;try{dd(s)}catch(P){nt(s,v,P)}}}catch(P){nt(s,s.return,P)}if(s===r){ue=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ue=A;break}ue=s.return}}var zT=Math.ceil,Uu=re.ReactCurrentDispatcher,md=re.ReactCurrentOwner,Sn=re.ReactCurrentBatchConfig,Le=0,At=null,ct=null,xt=0,pn=0,Ao=si(0),vt=0,Wa=null,ds=0,Fu=0,gd=0,Ha=null,tn=null,yd=0,Ro=1/0,Lr=null,ju=!1,_d=null,hi=null,zu=!1,di=null,Bu=0,Ka=0,vd=null,$u=-1,qu=0;function Gt(){return(Le&6)!==0?qe():$u!==-1?$u:$u=qe()}function fi(r){return(r.mode&1)===0?1:(Le&2)!==0&&xt!==0?xt&-xt:ST.transition!==null?(qu===0&&(qu=es()),qu):(r=xe,r!==0||(r=window.event,r=r===void 0?16:wa(r.type)),r)}function Bn(r,s,a,h){if(50<Ka)throw Ka=0,vd=null,Error(t(185));Jr(r,a,h),((Le&2)===0||r!==At)&&(r===At&&((Le&2)===0&&(Fu|=a),vt===4&&pi(r,xt)),nn(r,h),a===1&&Le===0&&(s.mode&1)===0&&(Ro=qe()+500,_u&&ai()))}function nn(r,s){var a=r.callbackNode;Ir(r,s);var h=Zi(r,r===At?xt:0);if(h===0)a!==null&&ga(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&ga(a),s===1)r.tag===0?IT(Og.bind(null,r)):_m(Og.bind(null,r)),vT(function(){(Le&6)===0&&ai()}),a=null;else{switch(Zr(h)){case 1:a=Ji;break;case 4:a=Gr;break;case 16:a=yn;break;case 536870912:a=ql;break;default:a=yn}a=zg(a,Dg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Dg(r,s){if($u=-1,qu=0,(Le&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Co()&&r.callbackNode!==a)return null;var h=Zi(r,r===At?xt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=Wu(r,h);else{s=h;var d=Le;Le|=2;var g=Lg();(At!==r||xt!==s)&&(Lr=null,Ro=qe()+500,ps(r,s));do try{qT();break}catch(A){Vg(r,A)}while(!0);Mh(),Uu.current=g,Le=d,ct!==null?s=0:(At=null,xt=0,s=vt)}if(s!==0){if(s===2&&(d=un(r),d!==0&&(h=d,s=Ed(r,d))),s===1)throw a=Wa,ps(r,0),pi(r,h),nn(r,qe()),a;if(s===6)pi(r,h);else{if(d=r.current.alternate,(h&30)===0&&!BT(d)&&(s=Wu(r,h),s===2&&(g=un(r),g!==0&&(h=g,s=Ed(r,g))),s===1))throw a=Wa,ps(r,0),pi(r,h),nn(r,qe()),a;switch(r.finishedWork=d,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:ms(r,tn,Lr);break;case 3:if(pi(r,h),(h&130023424)===h&&(s=yd+500-qe(),10<s)){if(Zi(r,0)!==0)break;if(d=r.suspendedLanes,(d&h)!==h){Gt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Rh(ms.bind(null,r,tn,Lr),s);break}ms(r,tn,Lr);break;case 4:if(pi(r,h),(h&4194240)===h)break;for(s=r.eventTimes,d=-1;0<h;){var v=31-Wt(h);g=1<<v,v=s[v],v>d&&(d=v),h&=~g}if(h=d,h=qe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*zT(h/1960))-h,10<h){r.timeoutHandle=Rh(ms.bind(null,r,tn,Lr),h);break}ms(r,tn,Lr);break;case 5:ms(r,tn,Lr);break;default:throw Error(t(329))}}}return nn(r,qe()),r.callbackNode===a?Dg.bind(null,r):null}function Ed(r,s){var a=Ha;return r.current.memoizedState.isDehydrated&&(ps(r,s).flags|=256),r=Wu(r,s),r!==2&&(s=tn,tn=a,s!==null&&wd(s)),r}function wd(r){tn===null?tn=r:tn.push.apply(tn,r)}function BT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var d=a[h],g=d.getSnapshot;d=d.value;try{if(!Mn(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function pi(r,s){for(s&=~gd,s&=~Fu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Wt(s),h=1<<a;r[a]=-1,s&=~h}}function Og(r){if((Le&6)!==0)throw Error(t(327));Co();var s=Zi(r,0);if((s&1)===0)return nn(r,qe()),null;var a=Wu(r,s);if(r.tag!==0&&a===2){var h=un(r);h!==0&&(s=h,a=Ed(r,h))}if(a===1)throw a=Wa,ps(r,0),pi(r,s),nn(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ms(r,tn,Lr),nn(r,qe()),null}function Td(r,s){var a=Le;Le|=1;try{return r(s)}finally{Le=a,Le===0&&(Ro=qe()+500,_u&&ai())}}function fs(r){di!==null&&di.tag===0&&(Le&6)===0&&Co();var s=Le;Le|=1;var a=Sn.transition,h=xe;try{if(Sn.transition=null,xe=1,r)return r()}finally{xe=h,Sn.transition=a,Le=s,(Le&6)===0&&ai()}}function Id(){pn=Ao.current,Ge(Ao)}function ps(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,_T(a)),ct!==null)for(a=ct.return;a!==null;){var h=a;switch(Dh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&gu();break;case 3:To(),Ge(Yt),Ge(Mt),Wh();break;case 5:$h(h);break;case 4:To();break;case 13:Ge(Ye);break;case 19:Ge(Ye);break;case 10:Uh(h.type._context);break;case 22:case 23:Id()}a=a.return}if(At=r,ct=r=mi(r.current,null),xt=pn=s,vt=0,Wa=null,gd=Fu=ds=0,tn=Ha=null,us!==null){for(s=0;s<us.length;s++)if(a=us[s],h=a.interleaved,h!==null){a.interleaved=null;var d=h.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,h.next=v}a.pending=h}us=null}return r}function Vg(r,s){do{var a=ct;try{if(Mh(),Pu.current=Du,ku){for(var h=Ze.memoizedState;h!==null;){var d=h.queue;d!==null&&(d.pending=null),h=h.next}ku=!1}if(hs=0,St=_t=Ze=null,Fa=!1,ja=0,md.current=null,a===null||a.return===null){vt=1,Wa=s,ct=null;break}e:{var g=r,v=a.return,A=a,P=s;if(s=xt,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,Q=A,J=Q.tag;if((Q.mode&1)===0&&(J===0||J===11||J===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var oe=sg(v);if(oe!==null){oe.flags&=-257,og(oe,v,A,g,s),oe.mode&1&&ig(g,z,s),s=oe,P=z;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(P),s.updateQueue=he}else ce.add(P);break e}else{if((s&1)===0){ig(g,z,s),Sd();break e}P=Error(t(426))}}else if(Je&&A.mode&1){var at=sg(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),og(at,v,A,g,s),Lh(Io(P,A));break e}}g=P=Io(P,A),vt!==4&&(vt=2),Ha===null?Ha=[g]:Ha.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=ng(g,P,s);km(g,U);break e;case 1:A=P;var x=g.type,j=g.stateNode;if((g.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(hi===null||!hi.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var Y=rg(g,A,s);km(g,Y);break e}}g=g.return}while(g!==null)}Mg(a)}catch(de){s=de,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function Lg(){var r=Uu.current;return Uu.current=Du,r===null?Du:r}function Sd(){(vt===0||vt===3||vt===2)&&(vt=4),At===null||(ds&268435455)===0&&(Fu&268435455)===0||pi(At,xt)}function Wu(r,s){var a=Le;Le|=2;var h=Lg();(At!==r||xt!==s)&&(Lr=null,ps(r,s));do try{$T();break}catch(d){Vg(r,d)}while(!0);if(Mh(),Le=a,Uu.current=h,ct!==null)throw Error(t(261));return At=null,xt=0,vt}function $T(){for(;ct!==null;)bg(ct)}function qT(){for(;ct!==null&&!Bl();)bg(ct)}function bg(r){var s=jg(r.alternate,r,pn);r.memoizedProps=r.pendingProps,s===null?Mg(r):ct=s,md.current=null}function Mg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=bT(a,s,pn),a!==null){ct=a;return}}else{if(a=MT(a,s),a!==null){a.flags&=32767,ct=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{vt=6,ct=null;return}}if(s=s.sibling,s!==null){ct=s;return}ct=s=r}while(s!==null);vt===0&&(vt=5)}function ms(r,s,a){var h=xe,d=Sn.transition;try{Sn.transition=null,xe=1,WT(r,s,a,h)}finally{Sn.transition=d,xe=h}return null}function WT(r,s,a,h){do Co();while(di!==null);if((Le&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(r,g),r===At&&(ct=At=null,xt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||zu||(zu=!0,zg(yn,function(){return Co(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Sn.transition,Sn.transition=null;var v=xe;xe=1;var A=Le;Le|=4,md.current=null,FT(r,a),Cg(a,r),hT(Sh),ti=!!Ih,Sh=Ih=null,r.current=a,jT(a),ah(),Le=A,xe=v,Sn.transition=g}else r.current=a;if(zu&&(zu=!1,di=r,Bu=d),g=r.pendingLanes,g===0&&(hi=null),Wl(a.stateNode),nn(r,qe()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],h(d.value,{componentStack:d.stack,digest:d.digest});if(ju)throw ju=!1,r=_d,_d=null,r;return(Bu&1)!==0&&r.tag!==0&&Co(),g=r.pendingLanes,(g&1)!==0?r===vd?Ka++:(Ka=0,vd=r):Ka=0,ai(),null}function Co(){if(di!==null){var r=Zr(Bu),s=Sn.transition,a=xe;try{if(Sn.transition=null,xe=16>r?16:r,di===null)var h=!1;else{if(r=di,di=null,Bu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ue=r.current;ue!==null;){var g=ue,v=g.child;if((ue.flags&16)!==0){var A=g.deletions;if(A!==null){for(var P=0;P<A.length;P++){var z=A[P];for(ue=z;ue!==null;){var Q=ue;switch(Q.tag){case 0:case 11:case 15:qa(8,Q,g)}var J=Q.child;if(J!==null)J.return=Q,ue=J;else for(;ue!==null;){Q=ue;var G=Q.sibling,oe=Q.return;if(Tg(Q),Q===z){ue=null;break}if(G!==null){G.return=oe,ue=G;break}ue=oe}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var at=he.sibling;he.sibling=null,he=at}while(he!==null)}}ue=g}}if((g.subtreeFlags&2064)!==0&&v!==null)v.return=g,ue=v;else e:for(;ue!==null;){if(g=ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:qa(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,ue=U;break e}ue=g.return}}var x=r.current;for(ue=x;ue!==null;){v=ue;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,ue=j;else e:for(v=x;ue!==null;){if(A=ue,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Mu(9,A)}}catch(de){nt(A,A.return,de)}if(A===v){ue=null;break e}var Y=A.sibling;if(Y!==null){Y.return=A.return,ue=Y;break e}ue=A.return}}if(Le=d,ai(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Yi,r)}catch{}h=!0}return h}finally{xe=a,Sn.transition=s}}return!1}function Ug(r,s,a){s=Io(a,s),s=ng(r,s,1),r=ui(r,s,1),s=Gt(),r!==null&&(Jr(r,1,s),nn(r,s))}function nt(r,s,a){if(r.tag===3)Ug(r,r,a);else for(;s!==null;){if(s.tag===3){Ug(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(hi===null||!hi.has(h))){r=Io(a,r),r=rg(s,r,1),s=ui(s,r,1),r=Gt(),s!==null&&(Jr(s,1,r),nn(s,r));break}}s=s.return}}function HT(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Gt(),r.pingedLanes|=r.suspendedLanes&a,At===r&&(xt&a)===a&&(vt===4||vt===3&&(xt&130023424)===xt&&500>qe()-yd?ps(r,0):gd|=a),nn(r,s)}function Fg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Qs,Qs<<=1,(Qs&130023424)===0&&(Qs=4194304)));var a=Gt();r=Dr(r,s),r!==null&&(Jr(r,s,a),nn(r,a))}function KT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Fg(r,a)}function GT(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Fg(r,a)}var jg;jg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Yt.current)en=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return en=!1,LT(r,s,a);en=(r.flags&131072)!==0}else en=!1,Je&&(s.flags&1048576)!==0&&vm(s,Eu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Lu(r,s),r=s.pendingProps;var d=mo(s,Mt.current);wo(s,a),d=Gh(null,s,h,r,d,a);var g=Qh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Zt(h)?(g=!0,yu(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,zh(s),d.updater=Ou,s.stateNode=d,d._reactInternals=s,td(s,h,r,a),s=sd(null,s,h,!0,g,a)):(s.tag=0,Je&&g&&xh(s),Kt(null,s,d,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Lu(r,s),r=s.pendingProps,d=h._init,h=d(h._payload),s.type=h,d=s.tag=XT(h),r=Fn(h,r),d){case 0:s=id(null,s,h,r,a);break e;case 1:s=dg(null,s,h,r,a);break e;case 11:s=ag(null,s,h,r,a);break e;case 14:s=lg(null,s,h,Fn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Fn(h,d),id(r,s,h,d,a);case 1:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Fn(h,d),dg(r,s,h,d,a);case 3:e:{if(fg(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,d=g.element,Pm(r,s),Ru(s,h,null,a);var v=s.memoizedState;if(h=v.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=Io(Error(t(423)),s),s=pg(r,s,h,a,d);break e}else if(h!==d){d=Io(Error(t(424)),s),s=pg(r,s,h,a,d);break e}else for(fn=ii(s.stateNode.containerInfo.firstChild),dn=s,Je=!0,Un=null,a=Rm(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_o(),h===d){s=Vr(r,s,a);break e}Kt(r,s,h,a)}s=s.child}return s;case 5:return xm(s),r===null&&Vh(s),h=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,v=d.children,Ah(h,d)?v=null:g!==null&&Ah(h,g)&&(s.flags|=32),hg(r,s),Kt(r,s,v,a),s.child;case 6:return r===null&&Vh(s),null;case 13:return mg(r,s,a);case 4:return Bh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=vo(s,null,h,a):Kt(r,s,h,a),s.child;case 11:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Fn(h,d),ag(r,s,h,d,a);case 7:return Kt(r,s,s.pendingProps,a),s.child;case 8:return Kt(r,s,s.pendingProps.children,a),s.child;case 12:return Kt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,d=s.pendingProps,g=s.memoizedProps,v=d.value,We(Iu,h._currentValue),h._currentValue=v,g!==null)if(Mn(g.value,v)){if(g.children===d.children&&!Yt.current){s=Vr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){v=g.child;for(var P=A.firstContext;P!==null;){if(P.context===h){if(g.tag===1){P=Or(-1,a&-a),P.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var Q=z.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),z.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Fh(g.return,a,s),A.lanes|=a;break}P=P.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),Fh(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}Kt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,h=s.pendingProps.children,wo(s,a),d=Tn(d),h=h(d),s.flags|=1,Kt(r,s,h,a),s.child;case 14:return h=s.type,d=Fn(h,s.pendingProps),d=Fn(h.type,d),lg(r,s,h,d,a);case 15:return ug(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Fn(h,d),Lu(r,s),s.tag=1,Zt(h)?(r=!0,yu(s)):r=!1,wo(s,a),eg(s,h,d),td(s,h,d,a),sd(null,s,h,!0,r,a);case 19:return yg(r,s,a);case 22:return cg(r,s,a)}throw Error(t(156,s.tag))};function zg(r,s){return Ks(r,s)}function QT(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,s,a,h){return new QT(r,s,a,h)}function Ad(r){return r=r.prototype,!(!r||!r.isReactComponent)}function XT(r){if(typeof r=="function")return Ad(r)?1:0;if(r!=null){if(r=r.$$typeof,r===b)return 11;if(r===Lt)return 14}return 2}function mi(r,s){var a=r.alternate;return a===null?(a=An(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Hu(r,s,a,h,d,g){var v=2;if(h=r,typeof r=="function")Ad(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case N:return gs(a.children,d,g,s);case S:v=8,d|=8;break;case C:return r=An(12,a,s,d|2),r.elementType=C,r.lanes=g,r;case R:return r=An(13,a,s,d),r.elementType=R,r.lanes=g,r;case st:return r=An(19,a,s,d),r.elementType=st,r.lanes=g,r;case ze:return Ku(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:v=10;break e;case D:v=9;break e;case b:v=11;break e;case Lt:v=14;break e;case bt:v=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=An(v,a,s,d),s.elementType=r,s.type=h,s.lanes=g,s}function gs(r,s,a,h){return r=An(7,r,h,s),r.lanes=a,r}function Ku(r,s,a,h){return r=An(22,r,h,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function Rd(r,s,a){return r=An(6,r,null,s),r.lanes=a,r}function Cd(r,s,a){return s=An(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function JT(r,s,a,h,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xr(0),this.expirationTimes=Xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xr(0),this.identifierPrefix=h,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Pd(r,s,a,h,d,g,v,A,P){return r=new JT(r,s,a,A,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=An(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(g),r}function YT(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Bg(r){if(!r)return oi;r=r._reactInternals;e:{if(Nn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Zt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Zt(a))return gm(r,a,s)}return s}function $g(r,s,a,h,d,g,v,A,P){return r=Pd(a,h,!0,r,d,g,v,A,P),r.context=Bg(null),a=r.current,h=Gt(),d=fi(a),g=Or(h,d),g.callback=s??null,ui(a,g,d),r.current.lanes=d,Jr(r,d,h),nn(r,h),r}function Gu(r,s,a,h){var d=s.current,g=Gt(),v=fi(d);return a=Bg(a),s.context===null?s.context=a:s.pendingContext=a,s=Or(g,v),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=ui(d,s,v),r!==null&&(Bn(r,d,v,g),Au(r,d,v)),v}function Qu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function qg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function kd(r,s){qg(r,s),(r=r.alternate)&&qg(r,s)}function ZT(){return null}var Wg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Nd(r){this._internalRoot=r}Xu.prototype.render=Nd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Gu(r,s,null,null)},Xu.prototype.unmount=Nd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;fs(function(){Gu(null,r,null,null)}),s[Pr]=null}};function Xu(r){this._internalRoot=r}Xu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Xl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Jn.length&&s!==0&&s<Jn[a].priority;a++);Jn.splice(a,0,r),a===0&&Zl(r)}};function xd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ju(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function e0(r,s,a,h,d){if(d){if(typeof h=="function"){var g=h;h=function(){var z=Qu(v);g.call(z)}}var v=$g(s,h,r,0,null,!1,!1,"",Hg);return r._reactRootContainer=v,r[Pr]=v.current,xa(r.nodeType===8?r.parentNode:r),fs(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof h=="function"){var A=h;h=function(){var z=Qu(P);A.call(z)}}var P=Pd(r,0,!1,null,null,!1,!1,"",Hg);return r._reactRootContainer=P,r[Pr]=P.current,xa(r.nodeType===8?r.parentNode:r),fs(function(){Gu(s,P,a,h)}),P}function Yu(r,s,a,h,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var A=d;d=function(){var P=Qu(v);A.call(P)}}Gu(s,v,r,d)}else v=e0(a,s,r,d,h);return Qu(v)}Gl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Qr(s.pendingLanes);a!==0&&(Yr(s,a|1),nn(s,qe()),(Le&6)===0&&(Ro=qe()+500,ai()))}break;case 13:fs(function(){var h=Dr(r,1);if(h!==null){var d=Gt();Bn(h,r,1,d)}}),kd(r,1)}},Xs=function(r){if(r.tag===13){var s=Dr(r,134217728);if(s!==null){var a=Gt();Bn(s,r,134217728,a)}kd(r,134217728)}},Ql=function(r){if(r.tag===13){var s=fi(r),a=Dr(r,s);if(a!==null){var h=Gt();Bn(a,r,s,h)}kd(r,s)}},Xl=function(){return xe},Jl=function(r,s){var a=xe;try{return xe=r,s()}finally{xe=a}},zs=function(r,s,a){switch(s){case"input":if(na(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var d=mu(h);if(!d)throw Error(t(90));Ls(h),na(h,d)}}}break;case"textarea":Fs(r,a);break;case"select":s=a.value,s!=null&&Er(r,!!a.multiple,s,!1)}},Ki=Td,da=fs;var t0={usingClientEntryPoint:!1,Events:[Va,fo,mu,Qn,ha,Td]},Ga={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n0={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ma(r),r===null?null:r.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||ZT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zu.isDisabled&&Zu.supportsFiber)try{Yi=Zu.inject(n0),ln=Zu}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0,rn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xd(s))throw Error(t(200));return YT(r,s,null,a)},rn.createRoot=function(r,s){if(!xd(r))throw Error(t(299));var a=!1,h="",d=Wg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Pd(r,1,!1,null,null,a,!1,h,d),r[Pr]=s.current,xa(r.nodeType===8?r.parentNode:r),new Nd(s)},rn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ma(s),r=r===null?null:r.stateNode,r},rn.flushSync=function(r){return fs(r)},rn.hydrate=function(r,s,a){if(!Ju(s))throw Error(t(200));return Yu(null,r,s,!0,a)},rn.hydrateRoot=function(r,s,a){if(!xd(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,d=!1,g="",v=Wg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=$g(s,null,r,1,a??null,d,!1,g,v),r[Pr]=s.current,xa(r),h)for(r=0;r<h.length;r++)a=h[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Xu(s)},rn.render=function(r,s,a){if(!Ju(s))throw Error(t(200));return Yu(null,r,s,!1,a)},rn.unmountComponentAtNode=function(r){if(!Ju(r))throw Error(t(40));return r._reactRootContainer?(fs(function(){Yu(null,null,r,!1,function(){r._reactRootContainer=null,r[Pr]=null})}),!0):!1},rn.unstable_batchedUpdates=Td,rn.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Ju(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Yu(r,s,a,!1,h)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var ey;function G_(){if(ey)return Vd.exports;ey=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Vd.exports=h0(),Vd.exports}var ty;function d0(){if(ty)return ec;ty=1;var n=G_();return ec.createRoot=n.createRoot,ec.hydrateRoot=n.hydrateRoot,ec}var f0=d0();const p0=H_(f0);G_();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cl(){return cl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},cl.apply(this,arguments)}var Ii;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ii||(Ii={}));const ny="popstate";function m0(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:c,hash:f}=i.location;return Jd("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:vc(o)}return y0(e,t,null,n)}function et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function xf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function g0(){return Math.random().toString(36).substr(2,8)}function ry(n,e){return{usr:n.state,key:n.key,idx:e}}function Jd(n,e,t,i){return t===void 0&&(t=null),cl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ho(e):e,{state:t,key:e&&e.key||i||g0()})}function vc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ho(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function y0(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,f=Ii.Pop,p=null,y=E();y==null&&(y=0,c.replaceState(cl({},c.state,{idx:y}),""));function E(){return(c.state||{idx:null}).idx}function T(){f=Ii.Pop;let L=E(),ie=L==null?null:L-y;y=L,p&&p({action:f,location:q.location,delta:ie})}function I(L,ie){f=Ii.Push;let Z=Jd(q.location,L,ie);y=E()+1;let ee=ry(Z,y),re=q.createHref(Z);try{c.pushState(ee,"",re)}catch(Re){if(Re instanceof DOMException&&Re.name==="DataCloneError")throw Re;o.location.assign(re)}l&&p&&p({action:f,location:q.location,delta:1})}function V(L,ie){f=Ii.Replace;let Z=Jd(q.location,L,ie);y=E();let ee=ry(Z,y),re=q.createHref(Z);c.replaceState(ee,"",re),l&&p&&p({action:f,location:q.location,delta:0})}function B(L){let ie=o.location.origin!=="null"?o.location.origin:o.location.href,Z=typeof L=="string"?L:vc(L);return Z=Z.replace(/ $/,"%20"),et(ie,"No window.location.(origin|href) available to create URL for href: "+Z),new URL(Z,ie)}let q={get action(){return f},get location(){return n(o,c)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(ny,T),p=L,()=>{o.removeEventListener(ny,T),p=null}},createHref(L){return e(o,L)},createURL:B,encodeLocation(L){let ie=B(L);return{pathname:ie.pathname,search:ie.search,hash:ie.hash}},push:I,replace:V,go(L){return c.go(L)}};return q}var iy;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(iy||(iy={}));function _0(n,e,t){return t===void 0&&(t="/"),v0(n,e,t)}function v0(n,e,t,i){let o=typeof e=="string"?Ho(e):e,l=Fo(o.pathname||"/",t);if(l==null)return null;let c=Q_(n);E0(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let y=x0(l);f=k0(c[p],y)}return f}function Q_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(et(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=Ai([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(et(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Q_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:C0(y,l.index),routesMeta:E})};return n.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,c);else for(let p of X_(l.path))o(l,c,p)}),e}function X_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=X_(i.join("/")),f=[];return f.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...c),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function E0(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:P0(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const w0=/^:[\w-]+$/,T0=3,I0=2,S0=1,A0=10,R0=-2,sy=n=>n==="*";function C0(n,e){let t=n.split("/"),i=t.length;return t.some(sy)&&(i+=R0),e&&(i+=I0),t.filter(o=>!sy(o)).reduce((o,l)=>o+(w0.test(l)?T0:l===""?S0:A0),i)}function P0(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function k0(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let f=0;f<i.length;++f){let p=i[f],y=f===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=Yd({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),I=p.route;if(!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Ai([l,T.pathname]),pathnameBase:b0(Ai([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Ai([l,T.pathnameBase]))}return c}function Yd(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=N0(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,E,T)=>{let{paramName:I,isOptional:V}=E;if(I==="*"){let q=f[T]||"";c=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const B=f[T];return V&&!B?y[I]=void 0:y[I]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function N0(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),xf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function x0(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Fo(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const D0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,O0=n=>D0.test(n);function V0(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Ho(n):n,l;if(t)if(O0(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),xf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+t))}t.startsWith("/")?l=oy(t.substring(1),"/"):l=oy(t,e)}else l=e;return{pathname:l,search:M0(i),hash:U0(o)}}function oy(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Md(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function L0(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Df(n,e){let t=L0(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Of(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Ho(n):(o=cl({},n),et(!o.pathname||!o.pathname.includes("?"),Md("?","pathname","search",o)),et(!o.pathname||!o.pathname.includes("#"),Md("#","pathname","hash",o)),et(!o.search||!o.search.includes("#"),Md("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let p=V0(o,f),y=c&&c!=="/"&&c.endsWith("/"),E=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}const Ai=n=>n.join("/").replace(/\/\/+/g,"/"),b0=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),M0=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,U0=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function F0(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const J_=["post","put","patch","delete"];new Set(J_);const j0=["get",...J_];new Set(j0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},hl.apply(this,arguments)}const Fc=X.createContext(null),Y_=X.createContext(null),Wr=X.createContext(null),jc=X.createContext(null),gr=X.createContext({outlet:null,matches:[],isDataRoute:!1}),Z_=X.createContext(null);function z0(n,e){let{relative:t}=e===void 0?{}:e;Ko()||et(!1);let{basename:i,navigator:o}=X.useContext(Wr),{hash:l,pathname:c,search:f}=zc(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Ai([i,c])),o.createHref({pathname:p,search:f,hash:l})}function Ko(){return X.useContext(jc)!=null}function Ui(){return Ko()||et(!1),X.useContext(jc).location}function ev(n){X.useContext(Wr).static||X.useLayoutEffect(n)}function Sl(){let{isDataRoute:n}=X.useContext(gr);return n?rI():B0()}function B0(){Ko()||et(!1);let n=X.useContext(Fc),{basename:e,future:t,navigator:i}=X.useContext(Wr),{matches:o}=X.useContext(gr),{pathname:l}=Ui(),c=JSON.stringify(Df(o,t.v7_relativeSplatPath)),f=X.useRef(!1);return ev(()=>{f.current=!0}),X.useCallback(function(y,E){if(E===void 0&&(E={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let T=Of(y,JSON.parse(c),l,E.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Ai([e,T.pathname])),(E.replace?i.replace:i.push)(T,E.state,E)},[e,i,c,l,n])}const $0=X.createContext(null);function q0(n){let e=X.useContext(gr).outlet;return e&&X.createElement($0.Provider,{value:n},e)}function W0(){let{matches:n}=X.useContext(gr),e=n[n.length-1];return e?e.params:{}}function zc(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=X.useContext(Wr),{matches:o}=X.useContext(gr),{pathname:l}=Ui(),c=JSON.stringify(Df(o,i.v7_relativeSplatPath));return X.useMemo(()=>Of(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function H0(n,e){return K0(n,e)}function K0(n,e,t,i){Ko()||et(!1);let{navigator:o}=X.useContext(Wr),{matches:l}=X.useContext(gr),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let y=Ui(),E;if(e){var T;let L=typeof e=="string"?Ho(e):e;p==="/"||(T=L.pathname)!=null&&T.startsWith(p)||et(!1),E=L}else E=y;let I=E.pathname||"/",V=I;if(p!=="/"){let L=p.replace(/^\//,"").split("/");V="/"+I.replace(/^\//,"").split("/").slice(L.length).join("/")}let B=_0(n,{pathname:V}),q=Y0(B&&B.map(L=>Object.assign({},L,{params:Object.assign({},f,L.params),pathname:Ai([p,o.encodeLocation?o.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?p:Ai([p,o.encodeLocation?o.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),l,t,i);return e&&q?X.createElement(jc.Provider,{value:{location:hl({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Ii.Pop}},q):q}function G0(){let n=nI(),e=F0(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),t?X.createElement("pre",{style:o},t):null,null)}const Q0=X.createElement(G0,null);class X0 extends X.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?X.createElement(gr.Provider,{value:this.props.routeContext},X.createElement(Z_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function J0(n){let{routeContext:e,match:t,children:i}=n,o=X.useContext(Fc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),X.createElement(gr.Provider,{value:e},i)}function Y0(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let E=c.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);E>=0||et(!1),c=c.slice(0,Math.min(c.length,E+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let E=0;E<c.length;E++){let T=c[E];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=E),T.route.id){let{loaderData:I,errors:V}=t,B=T.route.loader&&I[T.route.id]===void 0&&(!V||V[T.route.id]===void 0);if(T.route.lazy||B){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((E,T,I)=>{let V,B=!1,q=null,L=null;t&&(V=f&&T.route.id?f[T.route.id]:void 0,q=T.route.errorElement||Q0,p&&(y<0&&I===0?(iI("route-fallback"),B=!0,L=null):y===I&&(B=!0,L=T.route.hydrateFallbackElement||null)));let ie=e.concat(c.slice(0,I+1)),Z=()=>{let ee;return V?ee=q:B?ee=L:T.route.Component?ee=X.createElement(T.route.Component,null):T.route.element?ee=T.route.element:ee=E,X.createElement(J0,{match:T,routeContext:{outlet:E,matches:ie,isDataRoute:t!=null},children:ee})};return t&&(T.route.ErrorBoundary||T.route.errorElement||I===0)?X.createElement(X0,{location:t.location,revalidation:t.revalidation,component:q,error:V,children:Z(),routeContext:{outlet:null,matches:ie,isDataRoute:!0}}):Z()},null)}var tv=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(tv||{}),nv=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(nv||{});function Z0(n){let e=X.useContext(Fc);return e||et(!1),e}function eI(n){let e=X.useContext(Y_);return e||et(!1),e}function tI(n){let e=X.useContext(gr);return e||et(!1),e}function rv(n){let e=tI(),t=e.matches[e.matches.length-1];return t.route.id||et(!1),t.route.id}function nI(){var n;let e=X.useContext(Z_),t=eI(),i=rv();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function rI(){let{router:n}=Z0(tv.UseNavigateStable),e=rv(nv.UseNavigateStable),t=X.useRef(!1);return ev(()=>{t.current=!0}),X.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,hl({fromRouteId:e},l)))},[n,e])}const ay={};function iI(n,e,t){ay[n]||(ay[n]=!0)}function sI(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Zd(n){let{to:e,replace:t,state:i,relative:o}=n;Ko()||et(!1);let{future:l,static:c}=X.useContext(Wr),{matches:f}=X.useContext(gr),{pathname:p}=Ui(),y=Sl(),E=Of(e,Df(f,l.v7_relativeSplatPath),p,o==="path"),T=JSON.stringify(E);return X.useEffect(()=>y(JSON.parse(T),{replace:t,state:i,relative:o}),[y,T,o,t,i]),null}function oI(n){return q0(n.context)}function sn(n){et(!1)}function aI(n){let{basename:e="/",children:t=null,location:i,navigationType:o=Ii.Pop,navigator:l,static:c=!1,future:f}=n;Ko()&&et(!1);let p=e.replace(/^\/*/,"/"),y=X.useMemo(()=>({basename:p,navigator:l,static:c,future:hl({v7_relativeSplatPath:!1},f)}),[p,f,l,c]);typeof i=="string"&&(i=Ho(i));let{pathname:E="/",search:T="",hash:I="",state:V=null,key:B="default"}=i,q=X.useMemo(()=>{let L=Fo(E,p);return L==null?null:{location:{pathname:L,search:T,hash:I,state:V,key:B},navigationType:o}},[p,E,T,I,V,B,o]);return q==null?null:X.createElement(Wr.Provider,{value:y},X.createElement(jc.Provider,{children:t,value:q}))}function lI(n){let{children:e,location:t}=n;return H0(ef(e),t)}new Promise(()=>{});function ef(n,e){e===void 0&&(e=[]);let t=[];return X.Children.forEach(n,(i,o)=>{if(!X.isValidElement(i))return;let l=[...e,o];if(i.type===X.Fragment){t.push.apply(t,ef(i.props.children,l));return}i.type!==sn&&et(!1),!i.props.index||!i.props.children||et(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=ef(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ec(){return Ec=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ec.apply(this,arguments)}function iv(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function uI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function cI(n,e){return n.button===0&&(!e||e==="_self")&&!uI(n)}const hI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dI=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],fI="6";try{window.__reactRouterVersion=fI}catch{}const pI=X.createContext({isTransitioning:!1}),mI="startTransition",ly=l0[mI];function gI(n){let{basename:e,children:t,future:i,window:o}=n,l=X.useRef();l.current==null&&(l.current=m0({window:o,v5Compat:!0}));let c=l.current,[f,p]=X.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},E=X.useCallback(T=>{y&&ly?ly(()=>p(T)):p(T)},[p,y]);return X.useLayoutEffect(()=>c.listen(E),[c,E]),X.useEffect(()=>sI(i),[i]),X.createElement(aI,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:i})}const yI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_I=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_s=X.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:f,target:p,to:y,preventScrollReset:E,viewTransition:T}=e,I=iv(e,hI),{basename:V}=X.useContext(Wr),B,q=!1;if(typeof y=="string"&&_I.test(y)&&(B=y,yI))try{let ee=new URL(window.location.href),re=y.startsWith("//")?new URL(ee.protocol+y):new URL(y),Re=Fo(re.pathname,V);re.origin===ee.origin&&Re!=null?y=Re+re.search+re.hash:q=!0}catch{}let L=z0(y,{relative:o}),ie=EI(y,{replace:c,state:f,target:p,preventScrollReset:E,relative:o,viewTransition:T});function Z(ee){i&&i(ee),ee.defaultPrevented||ie(ee)}return X.createElement("a",Ec({},I,{href:B||L,onClick:q||l?i:Z,ref:t,target:p}))}),Po=X.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:o=!1,className:l="",end:c=!1,style:f,to:p,viewTransition:y,children:E}=e,T=iv(e,dI),I=zc(p,{relative:T.relative}),V=Ui(),B=X.useContext(Y_),{navigator:q,basename:L}=X.useContext(Wr),ie=B!=null&&wI(I)&&y===!0,Z=q.encodeLocation?q.encodeLocation(I).pathname:I.pathname,ee=V.pathname,re=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;o||(ee=ee.toLowerCase(),re=re?re.toLowerCase():null,Z=Z.toLowerCase()),re&&L&&(re=Fo(re,L)||re);const Re=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let we=ee===Z||!c&&ee.startsWith(Z)&&ee.charAt(Re)==="/",N=re!=null&&(re===Z||!c&&re.startsWith(Z)&&re.charAt(Z.length)==="/"),S={isActive:we,isPending:N,isTransitioning:ie},C=we?i:void 0,k;typeof l=="function"?k=l(S):k=[l,we?"active":null,N?"pending":null,ie?"transitioning":null].filter(Boolean).join(" ");let D=typeof f=="function"?f(S):f;return X.createElement(_s,Ec({},T,{"aria-current":C,className:k,ref:t,style:D,to:p,viewTransition:y}),typeof E=="function"?E(S):E)});var tf;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(tf||(tf={}));var uy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(uy||(uy={}));function vI(n){let e=X.useContext(Fc);return e||et(!1),e}function EI(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:f}=e===void 0?{}:e,p=Sl(),y=Ui(),E=zc(n,{relative:c});return X.useCallback(T=>{if(cI(T,t)){T.preventDefault();let I=i!==void 0?i:vc(y)===vc(E);p(n,{replace:I,state:o,preventScrollReset:l,relative:c,viewTransition:f})}},[y,p,E,i,o,t,n,l,c,f])}function wI(n,e){e===void 0&&(e={});let t=X.useContext(pI);t==null&&et(!1);let{basename:i}=vI(tf.useViewTransitionState),o=zc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Fo(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Fo(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Yd(o.pathname,c)!=null||Yd(o.pathname,l)!=null}const TI=()=>{};var cy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},II=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},ov={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,V=y&63;p||(V=64,c||(I=64)),i.push(t[E],t[T],t[I],t[V])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):II(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new SI;const I=l<<2|f>>4;if(i.push(I),y!==64){const V=f<<4&240|y>>2;if(i.push(V),T!==64){const B=y<<6&192|T;i.push(B)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class SI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AI=function(n){const e=sv(n);return ov.encodeByteArray(e,!0)},wc=function(n){return AI(n).replace(/\./g,"")},av=function(n){try{return ov.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=()=>RI().__FIREBASE_DEFAULTS__,PI=()=>{if(typeof process>"u"||typeof cy>"u")return;const n=cy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&av(n[1]);return e&&JSON.parse(e)},Bc=()=>{try{return TI()||CI()||PI()||kI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lv=n=>{var e,t;return(t=(e=Bc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},uv=n=>{const e=lv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},cv=()=>{var n;return(n=Bc())===null||n===void 0?void 0:n.config},hv=n=>{var e;return(e=Bc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vf(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wc(JSON.stringify(t)),wc(JSON.stringify(c)),""].join(".")}const rl={};function xI(){const n={prod:[],emulator:[]};for(const e of Object.keys(rl))rl[e]?n.emulator.push(e):n.prod.push(e);return n}function DI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let hy=!1;function Lf(n,e){if(typeof window>"u"||typeof document>"u"||!Fi(window.location.host)||rl[n]===e||rl[n]||hy)return;rl[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=xI().prod.length>0;function c(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function p(I,V){I.setAttribute("width","24"),I.setAttribute("id",V),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{hy=!0,c()},I}function E(I,V){I.setAttribute("id",V),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=DI(i),V=t("text"),B=document.getElementById(V)||document.createElement("span"),q=t("learnmore"),L=document.getElementById(q)||document.createElement("a"),ie=t("preprendIcon"),Z=document.getElementById(ie)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ee=I.element;f(ee),E(L,q);const re=y();p(Z,ie),ee.append(Z,B,L,re),document.body.appendChild(ee)}l?(B.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function VI(){var n;const e=(n=Bc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function MI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UI(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function FI(){return!VI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jI(){try{return typeof indexedDB=="object"}catch{return!1}}function zI(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="FirebaseError";class yr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=BI,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Al.prototype.create)}}class Al{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?$I(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new yr(o,f,i)}}function $I(n,e){return n.replace(qI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const qI=/\{\$([^}]+)}/g;function WI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ts(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(dy(l)&&dy(c)){if(!Ts(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function dy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ja(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ya(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function HI(n,e){const t=new KI(n,e);return t.subscribe.bind(t)}class KI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");GI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Ud),o.error===void 0&&(o.error=Ud),o.complete===void 0&&(o.complete=Ud);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ud(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n){return n&&n._delegate?n._delegate:n}class Ni{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new NI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JI(e))try{this.getOrInitializeService({instanceIdentifier:ys})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ys){return this.instances.has(e)}getOptions(e=ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:XI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ys){return this.component?this.component.multipleInstances?e:ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XI(n){return n===ys?void 0:n}function JI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new QI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const ZI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},eS=ke.INFO,tS={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},nS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=tS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bf{constructor(e){this.name=e,this._logLevel=eS,this._logHandler=nS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const rS=(n,e)=>e.some(t=>n instanceof t);let fy,py;function iS(){return fy||(fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sS(){return py||(py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fv=new WeakMap,nf=new WeakMap,pv=new WeakMap,Fd=new WeakMap,Mf=new WeakMap;function oS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ri(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&fv.set(t,n)}).catch(()=>{}),Mf.set(e,n),e}function aS(n){if(nf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});nf.set(n,e)}let rf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return nf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ri(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function lS(n){rf=n(rf)}function uS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(jd(this),e,...t);return pv.set(i,e.sort?e.sort():[e]),Ri(i)}:sS().includes(n)?function(...e){return n.apply(jd(this),e),Ri(fv.get(this))}:function(...e){return Ri(n.apply(jd(this),e))}}function cS(n){return typeof n=="function"?uS(n):(n instanceof IDBTransaction&&aS(n),rS(n,iS())?new Proxy(n,rf):n)}function Ri(n){if(n instanceof IDBRequest)return oS(n);if(Fd.has(n))return Fd.get(n);const e=cS(n);return e!==n&&(Fd.set(n,e),Mf.set(e,n)),e}const jd=n=>Mf.get(n);function hS(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=Ri(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ri(c.result),p.oldVersion,p.newVersion,Ri(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const dS=["get","getKey","getAll","getAllKeys","count"],fS=["put","add","delete","clear"],zd=new Map;function my(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(zd.get(e))return zd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=fS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||dS.includes(t)))return;const l=async function(c,...f){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return zd.set(e,l),l}lS(n=>({...n,get:(e,t,i)=>my(e,t)||n.get(e,t,i),has:(e,t)=>!!my(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function mS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sf="@firebase/app",gy="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new bf("@firebase/app"),gS="@firebase/app-compat",yS="@firebase/analytics-compat",_S="@firebase/analytics",vS="@firebase/app-check-compat",ES="@firebase/app-check",wS="@firebase/auth",TS="@firebase/auth-compat",IS="@firebase/database",SS="@firebase/data-connect",AS="@firebase/database-compat",RS="@firebase/functions",CS="@firebase/functions-compat",PS="@firebase/installations",kS="@firebase/installations-compat",NS="@firebase/messaging",xS="@firebase/messaging-compat",DS="@firebase/performance",OS="@firebase/performance-compat",VS="@firebase/remote-config",LS="@firebase/remote-config-compat",bS="@firebase/storage",MS="@firebase/storage-compat",US="@firebase/firestore",FS="@firebase/ai",jS="@firebase/firestore-compat",zS="firebase",BS="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="[DEFAULT]",$S={[sf]:"fire-core",[gS]:"fire-core-compat",[_S]:"fire-analytics",[yS]:"fire-analytics-compat",[ES]:"fire-app-check",[vS]:"fire-app-check-compat",[wS]:"fire-auth",[TS]:"fire-auth-compat",[IS]:"fire-rtdb",[SS]:"fire-data-connect",[AS]:"fire-rtdb-compat",[RS]:"fire-fn",[CS]:"fire-fn-compat",[PS]:"fire-iid",[kS]:"fire-iid-compat",[NS]:"fire-fcm",[xS]:"fire-fcm-compat",[DS]:"fire-perf",[OS]:"fire-perf-compat",[VS]:"fire-rc",[LS]:"fire-rc-compat",[bS]:"fire-gcs",[MS]:"fire-gcs-compat",[US]:"fire-fst",[jS]:"fire-fst-compat",[FS]:"fire-vertex","fire-js":"fire-js",[zS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Map,qS=new Map,af=new Map;function yy(n,e){try{n.container.addComponent(e)}catch(t){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Is(n){const e=n.name;if(af.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;af.set(e,n);for(const t of Tc.values())yy(t,n);for(const t of qS.values())yy(t,n);return!0}function $c(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function an(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ci=new Al("app","Firebase",WS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=BS;function mv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:of,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Ci.create("bad-app-name",{appName:String(o)});if(t||(t=cv()),!t)throw Ci.create("no-options");const l=Tc.get(o);if(l){if(Ts(t,l.options)&&Ts(i,l.config))return l;throw Ci.create("duplicate-app",{appName:o})}const c=new YI(o);for(const p of af.values())c.addComponent(p);const f=new HS(t,i,c);return Tc.set(o,f),f}function Uf(n=of){const e=Tc.get(n);if(!e&&n===of&&cv())return mv();if(!e)throw Ci.create("no-app",{appName:n});return e}function ar(n,e,t){var i;let o=(i=$S[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(f.join(" "));return}Is(new Ni(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="firebase-heartbeat-database",GS=1,dl="firebase-heartbeat-store";let Bd=null;function gv(){return Bd||(Bd=hS(KS,GS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ci.create("idb-open",{originalErrorMessage:n.message})})),Bd}async function QS(n){try{const t=(await gv()).transaction(dl),i=await t.objectStore(dl).get(yv(n));return await t.done,i}catch(e){if(e instanceof yr)Fr.warn(e.message);else{const t=Ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(t.message)}}}async function _y(n,e){try{const i=(await gv()).transaction(dl,"readwrite");await i.objectStore(dl).put(e,yv(n)),await i.done}catch(t){if(t instanceof yr)Fr.warn(t.message);else{const i=Ci.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fr.warn(i.message)}}}function yv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=1024,JS=30;class YS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new eA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=vy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>JS){const c=tA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Fr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vy(),{heartbeatsToSend:i,unsentEntries:o}=ZS(this._heartbeatsCache.heartbeats),l=wc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Fr.warn(t),""}}}function vy(){return new Date().toISOString().substring(0,10)}function ZS(n,e=XS){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Ey(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ey(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class eA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jI()?zI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await QS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return _y(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return _y(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ey(n){return wc(JSON.stringify({version:2,heartbeats:n})).length}function tA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(n){Is(new Ni("platform-logger",e=>new pS(e),"PRIVATE")),Is(new Ni("heartbeat",e=>new YS(e),"PRIVATE")),ar(sf,gy,n),ar(sf,gy,"esm2017"),ar("fire-js","")}nA("");function Ff(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function _v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rA=_v,vv=new Al("auth","Firebase",_v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new bf("@firebase/auth");function iA(n,...e){Ic.logLevel<=ke.WARN&&Ic.warn(`Auth (${Ps}): ${n}`,...e)}function uc(n,...e){Ic.logLevel<=ke.ERROR&&Ic.error(`Auth (${Ps}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n,...e){throw jf(n,...e)}function lr(n,...e){return jf(n,...e)}function Ev(n,e,t){const i=Object.assign(Object.assign({},rA()),{[e]:t});return new Al("auth","Firebase",i).create(e,{appName:n.name})}function ur(n){return Ev(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return vv.create(n,...e)}function _e(n,e,...t){if(!n)throw jf(e,...t)}function br(n){const e="INTERNAL ASSERTION FAILED: "+n;throw uc(e),new Error(e)}function jr(n,e){n||br(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function sA(){return wy()==="http:"||wy()==="https:"}function wy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sA()||bI()||"connection"in navigator)?navigator.onLine:!0}function aA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=OI()||MI()}get(){return oA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(n,e){jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cA=new Cl(3e4,6e4);function ji(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function zi(n,e,t,i,o={}){return Tv(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=Rl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return LI()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Fi(n.emulatorConfig.host)&&(y.credentials="include"),wv.fetch()(await Iv(n,n.config.apiHost,t,f),y)})}async function Tv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},lA),e);try{const o=new dA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw tc(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw tc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw tc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw tc(n,"user-disabled",c);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Ev(n,E,y);Hn(n,E)}}catch(o){if(o instanceof yr)throw o;Hn(n,"network-request-failed",{message:String(o)})}}async function Pl(n,e,t,i,o={}){const l=await zi(n,e,t,i,o);return"mfaPendingCredential"in l&&Hn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Iv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?zf(n.config,o):`${n.config.apiScheme}://${o}`;return uA.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function hA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(lr(this.auth,"network-request-failed")),cA.get())})}}function tc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=lr(n,e,i);return o.customData._tokenResponse=t,o}function Ty(n){return n!==void 0&&n.enterprise!==void 0}class fA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return hA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function pA(n,e){return zi(n,"GET","/v2/recaptchaConfig",ji(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(n,e){return zi(n,"POST","/v1/accounts:delete",e)}async function Sc(n,e){return zi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gA(n,e=!1){const t=wt(n),i=await t.getIdToken(e),o=Bf(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:il($d(o.auth_time)),issuedAtTime:il($d(o.iat)),expirationTime:il($d(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function $d(n){return Number(n)*1e3}function Bf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return uc("JWT malformed, contained fewer than 3 sections"),null;try{const o=av(t);return o?JSON.parse(o):(uc("Failed to decode base64 JWT payload"),null)}catch(o){return uc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Iy(n){const e=Bf(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof yr&&yA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function yA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=il(this.lastLoginAt),this.creationTime=il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(n){var e;const t=n.auth,i=await n.getIdToken(),o=await fl(n,Sc(t,{idToken:i}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Sv(l.providerUserInfo):[],f=EA(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),E=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new uf(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function vA(n){const e=wt(n);await Ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Sv(n){return n.map(e=>{var{providerId:t}=e,i=Ff(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(n,e){const t=await Tv(n,{},async()=>{const i=Rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await Iv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return n.emulatorConfig&&Fi(n.emulatorConfig.host)&&(p.credentials="include"),wv.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function TA(n,e){return zi(n,"POST","/v2/accounts:revokeToken",ji(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Iy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await wA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Vo;return i&&(_e(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vo,this.toJSON())}_performRefresh(){return br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Ff(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _A(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new uf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await fl(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gA(this,e)}reload(){return vA(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ac(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(ur(this.auth));const e=await this.getIdToken();return await fl(this,mA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,f,p,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,V=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,B=(c=t.photoURL)!==null&&c!==void 0?c:void 0,q=(f=t.tenantId)!==null&&f!==void 0?f:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ie=(y=t.createdAt)!==null&&y!==void 0?y:void 0,Z=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ee,emailVerified:re,isAnonymous:Re,providerData:we,stsTokenManager:N}=t;_e(ee&&N,e,"internal-error");const S=Vo.fromJSON(this.name,N);_e(typeof ee=="string",e,"internal-error"),yi(T,e.name),yi(I,e.name),_e(typeof re=="boolean",e,"internal-error"),_e(typeof Re=="boolean",e,"internal-error"),yi(V,e.name),yi(B,e.name),yi(q,e.name),yi(L,e.name),yi(ie,e.name),yi(Z,e.name);const C=new $n({uid:ee,auth:e,email:I,emailVerified:re,displayName:T,isAnonymous:Re,photoURL:B,phoneNumber:V,tenantId:q,stsTokenManager:S,createdAt:ie,lastLoginAt:Z});return we&&Array.isArray(we)&&(C.providerData=we.map(k=>Object.assign({},k))),L&&(C._redirectEventId=L),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new Vo;o.updateFromServerResponse(t);const l=new $n({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Ac(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Sv(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Vo;f.updateFromIdToken(i);const p=new $n({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new uf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=new Map;function Mr(n){jr(n instanceof Function,"Expected a class definition");let e=Sy.get(n);return e?(jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Av.type="NONE";const Ay=Av;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n,e,t){return`firebase:${n}:${e}:${t}`}class Lo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=cc(this.userKey,o.apiKey,l),this.fullPersistenceKey=cc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Sc(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Lo(Mr(Ay),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Mr(Ay);const c=cc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const E=await y._get(c);if(E){let T;if(typeof E=="string"){const I=await Sc(e,{idToken:E}).catch(()=>{});if(!I)break;T=await $n._fromGetAccountInfoResponse(e,I,E)}else T=$n._fromJSON(e,E);y!==l&&(f=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Lo(l,e,i):(l=p[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Lo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xv(e))return"Blackberry";if(Dv(e))return"Webos";if(Cv(e))return"Safari";if((e.includes("chrome/")||Pv(e))&&!e.includes("edge/"))return"Chrome";if(Nv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Rv(n=qt()){return/firefox\//i.test(n)}function Cv(n=qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pv(n=qt()){return/crios\//i.test(n)}function kv(n=qt()){return/iemobile/i.test(n)}function Nv(n=qt()){return/android/i.test(n)}function xv(n=qt()){return/blackberry/i.test(n)}function Dv(n=qt()){return/webos/i.test(n)}function $f(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function IA(n=qt()){var e;return $f(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SA(){return UI()&&document.documentMode===10}function Ov(n=qt()){return $f(n)||Nv(n)||Dv(n)||xv(n)||/windows phone/i.test(n)||kv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(n,e=[]){let t;switch(n){case"Browser":t=Ry(qt());break;case"Worker":t=`${Ry(qt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ps}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const p=e(l);c(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(n,e={}){return zi(n,"GET","/v2/passwordPolicy",ji(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=6;class PA{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:CA,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cy(this),this.idTokenSubscription=new Cy(this),this.beforeStateQueue=new AA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Lo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Sc(this,{idToken:e}),i=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(an(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ac(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(ur(this));const t=e?wt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RA(this),t=new PA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Al("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await TA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Lo.create(this,[Mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(an(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&iA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Bi(n){return wt(n)}class Cy{constructor(e){this.auth=e,this.observer=null,this.addObserver=HI(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NA(n){qc=n}function Lv(n){return qc.loadJS(n)}function xA(){return qc.recaptchaEnterpriseScript}function DA(){return qc.gapiScript}function OA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class VA{constructor(){this.enterprise=new LA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class LA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const bA="recaptcha-enterprise",bv="NO_RECAPTCHA";class MA{constructor(e){this.type=bA,this.auth=Bi(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{pA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new fA(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,c,f){const p=window.grecaptcha;Ty(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(bv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VA().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&Ty(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=xA();p.length!==0&&(p+=f),Lv(p).then(()=>{o(f,l,c)}).catch(y=>{c(y)})}}).catch(f=>{c(f)})})}}async function Py(n,e,t,i=!1,o=!1){const l=new MA(n);let c;if(o)c=bv;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function cf(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Py(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Py(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(n,e){const t=$c(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ts(l,e??{}))return o;Hn(o,"already-initialized")}return t.initialize({options:e})}function FA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Mr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function jA(n,e,t){const i=Bi(n);_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Mv(e),{host:c,port:f}=zA(e),p=f===null?"":`:${f}`,y={url:`${l}//${c}${p}/`},E=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){_e(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),_e(Ts(y,i.config.emulator)&&Ts(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,Fi(c)?(Vf(`${l}//${c}${p}`),Lf("Auth",!0)):BA()}function Mv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zA(n){const e=Mv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:ky(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:ky(c)}}}function ky(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function BA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return br("not implemented")}_getIdTokenResponse(e){return br("not implemented")}_linkToIdToken(e,t){return br("not implemented")}_getReauthenticationResolver(e){return br("not implemented")}}async function $A(n,e){return zi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(n,e){return Pl(n,"POST","/v1/accounts:signInWithPassword",ji(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(n,e){return Pl(n,"POST","/v1/accounts:signInWithEmailLink",ji(n,e))}async function HA(n,e){return Pl(n,"POST","/v1/accounts:signInWithEmailLink",ji(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends qf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new pl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new pl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cf(e,t,"signInWithPassword",qA);case"emailLink":return WA(e,{email:this._email,oobCode:this._password});default:Hn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cf(e,i,"signUpPassword",$A);case"emailLink":return HA(e,{idToken:t,email:this._email,oobCode:this._password});default:Hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(n,e){return Pl(n,"POST","/v1/accounts:signInWithIdp",ji(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="http://localhost";class Ss extends qf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Hn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Ff(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Ss(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return bo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,bo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bo(e,t)}buildRequest(){const e={requestUri:KA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QA(n){const e=Ja(Ya(n)).link,t=e?Ja(Ya(e)).deep_link_id:null,i=Ja(Ya(n)).deep_link_id;return(i?Ja(Ya(i)).link:null)||i||t||e||n}class Wf{constructor(e){var t,i,o,l,c,f;const p=Ja(Ya(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,T=GA((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&E&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=QA(e);try{return new Wf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.providerId=Go.PROVIDER_ID}static credential(e,t){return pl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Wf.parseLink(t);return _e(i,"argument-error"),pl._fromEmailAndCode(e,i.code,i.tenantId)}}Go.PROVIDER_ID="password";Go.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends Uv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends kl{constructor(){super("facebook.com")}static credential(e){return Ss._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.FACEBOOK_SIGN_IN_METHOD="facebook.com";_i.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ss._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return vi.credential(t,i)}catch{return null}}}vi.GOOGLE_SIGN_IN_METHOD="google.com";vi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends kl{constructor(){super("github.com")}static credential(e){return Ss._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.GITHUB_SIGN_IN_METHOD="github.com";Ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends kl{constructor(){super("twitter.com")}static credential(e,t){return Ss._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return wi.credential(t,i)}catch{return null}}}wi.TWITTER_SIGN_IN_METHOD="twitter.com";wi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(n,e){return Pl(n,"POST","/v1/accounts:signUp",ji(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await $n._fromIdTokenResponse(e,i,o),c=Ny(i);return new zr({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Ny(i);return new zr({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Ny(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(n){var e;if(an(n.app))return Promise.reject(ur(n));const t=Bi(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new zr({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Fv(t,{returnSecureToken:!0}),o=await zr._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends yr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Rc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Rc(e,t,i,o)}}function jv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Rc._fromErrorAndOperation(n,l,e,i):l})}async function JA(n,e,t=!1){const i=await fl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return zr._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(n,e,t=!1){const{auth:i}=n;if(an(i.app))return Promise.reject(ur(i));const o="reauthenticate";try{const l=await fl(n,jv(i,o,e,n),t);_e(l.idToken,i,"internal-error");const c=Bf(l.idToken);_e(c,i,"internal-error");const{sub:f}=c;return _e(n.uid===f,i,"user-mismatch"),zr._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Hn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(n,e,t=!1){if(an(n.app))return Promise.reject(ur(n));const i="signIn",o=await jv(n,i,e),l=await zr._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function ZA(n,e){return zv(Bi(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(n){const e=Bi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eR(n,e,t){if(an(n.app))return Promise.reject(ur(n));const i=Bi(n),c=await cf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fv).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Bv(n),p}),f=await zr._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(f.user),f}function tR(n,e,t){return an(n.app)?Promise.reject(ur(n)):ZA(wt(n),Go.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Bv(n),i})}function nR(n,e,t,i){return wt(n).onIdTokenChanged(e,t,i)}function rR(n,e,t){return wt(n).beforeAuthStateChanged(e,t)}function iR(n,e,t,i){return wt(n).onAuthStateChanged(e,t,i)}function sR(n){return wt(n).signOut()}const Cc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cc,"1"),this.storage.removeItem(Cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=1e3,aR=10;class qv extends $v{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);SA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,aR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qv.type="LOCAL";const lR=qv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv extends $v{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wv.type="SESSION";const Hv=Wv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Wc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async y=>y(t.origin,l)),p=await uR(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,p)=>{const y=Hf("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return window}function hR(n){cr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function dR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function pR(){return Kv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="firebaseLocalStorageDb",mR=1,Pc="firebaseLocalStorage",Qv="fbase_key";class Nl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hc(n,e){return n.transaction([Pc],e?"readwrite":"readonly").objectStore(Pc)}function gR(){const n=indexedDB.deleteDatabase(Gv);return new Nl(n).toPromise()}function hf(){const n=indexedDB.open(Gv,mR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Pc,{keyPath:Qv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Pc)?e(i):(i.close(),await gR(),e(await hf()))})})}async function xy(n,e,t){const i=Hc(n,!0).put({[Qv]:e,value:t});return new Nl(i).toPromise()}async function yR(n,e){const t=Hc(n,!1).get(e),i=await new Nl(t).toPromise();return i===void 0?null:i.value}function Dy(n,e){const t=Hc(n,!0).delete(e);return new Nl(t).toPromise()}const _R=800,vR=3;class Xv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>vR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(pR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dR(),!this.activeServiceWorker)return;this.sender=new cR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hf();return await xy(e,Cc,"1"),await Dy(e,Cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>xy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>yR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Hc(o,!1).getAll();return new Nl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xv.type="LOCAL";const ER=Xv;new Cl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(n,e){return e?Mr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends qf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function TR(n){return zv(n.auth,new Kf(n),n.bypassAuthState)}function IR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),YA(t,new Kf(n),n.bypassAuthState)}async function SR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),JA(t,new Kf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TR;case"linkViaPopup":case"linkViaRedirect":return SR;case"reauthViaPopup":case"reauthViaRedirect":return IR;default:Hn(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=new Cl(2e3,1e4);class Oo extends Jv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Oo.currentPopupAction&&Oo.currentPopupAction.cancel(),Oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=Hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AR.get())};e()}}Oo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR="pendingRedirect",hc=new Map;class CR extends Jv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=hc.get(this.auth._key());if(!e){try{const i=await PR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}hc.set(this.auth._key(),e)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PR(n,e){const t=xR(e),i=NR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function kR(n,e){hc.set(n._key(),e)}function NR(n){return Mr(n._redirectPersistence)}function xR(n){return cc(RR,n.config.apiKey,n.name)}async function DR(n,e,t=!1){if(an(n.app))return Promise.reject(ur(n));const i=Bi(n),o=wR(i,e),c=await new CR(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=600*1e3;class VR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Yv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(lr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oy(e))}saveEventToCache(e){this.cachedEventUids.add(Oy(e)),this.lastProcessedEventTime=Date.now()}}function Oy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(n,e={}){return zi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UR=/^https?/;async function FR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bR(n);for(const t of e)try{if(jR(t))return}catch{}Hn(n,"unauthorized-domain")}function jR(n){const e=lf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!UR.test(t))return!1;if(MR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=new Cl(3e4,6e4);function Vy(){const n=cr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function BR(n){return new Promise((e,t)=>{var i,o,l;function c(){Vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vy(),t(lr(n,"network-request-failed"))},timeout:zR.get()})}if(!((o=(i=cr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=cr().gapi)===null||l===void 0)&&l.load)c();else{const f=OA("iframefcb");return cr()[f]=()=>{gapi.load?c():t(lr(n,"network-request-failed"))},Lv(`${DA()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw dc=null,e})}let dc=null;function $R(n){return dc=dc||BR(n),dc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=new Cl(5e3,15e3),WR="__/auth/iframe",HR="emulator/auth/iframe",KR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QR(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zf(e,HR):`https://${n.config.authDomain}/${WR}`,i={apiKey:e.apiKey,appName:n.name,v:Ps},o=GR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Rl(i).slice(1)}`}async function XR(n){const e=await $R(n),t=cr().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:QR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=lr(n,"network-request-failed"),f=cr().setTimeout(()=>{l(c)},qR.get());function p(){cr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YR=500,ZR=600,e1="_blank",t1="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function n1(n,e,t,i=YR,o=ZR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},JR),{width:i.toString(),height:o.toString(),top:l,left:c}),y=qt().toLowerCase();t&&(f=Pv(y)?e1:t),Rv(y)&&(e=e||t1,p.scrollbars="yes");const E=Object.entries(p).reduce((I,[V,B])=>`${I}${V}=${B},`,"");if(IA(y)&&f!=="_self")return r1(e||"",f),new Ly(null);const T=window.open(e||"",f,E);_e(T,n,"popup-blocked");try{T.focus()}catch{}return new Ly(T)}function r1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="__/auth/handler",s1="emulator/auth/handler",o1=encodeURIComponent("fac");async function by(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ps,eventId:o};if(e instanceof Uv){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",WI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))c[E]=T}if(e instanceof kl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(c.scopes=E.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await n._getAppCheckToken(),y=p?`#${o1}=${encodeURIComponent(p)}`:"";return`${a1(n)}?${Rl(f).slice(1)}${y}`}function a1({config:n}){return n.emulator?zf(n,s1):`https://${n.authDomain}/${i1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="webStorageSupport";class l1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hv,this._completeRedirectFn=DR,this._overrideRedirectResult=kR}async _openPopup(e,t,i,o){var l;jr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await by(e,t,i,lf(),o);return n1(e,c,Hf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await by(e,t,i,lf(),o);return hR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(jr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await XR(e),i=new VR(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qd,{type:qd},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[qd];c!==void 0&&t(!!c),Hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=FR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ov()||Cv()||$f()}}const u1=l1;var My="@firebase/auth",Uy="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function d1(n){Is(new Ni("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;_e(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vv(n)},y=new kA(i,o,l,p);return FA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Is(new Ni("auth-internal",e=>{const t=Bi(e.getProvider("auth").getImmediate());return(i=>new c1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(My,Uy,h1(n)),ar(My,Uy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=300,p1=hv("authIdTokenMaxAge")||f1;let Fy=null;const m1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>p1)return;const o=t==null?void 0:t.token;Fy!==o&&(Fy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function g1(n=Uf()){const e=$c(n,"auth");if(e.isInitialized())return e.getImmediate();const t=UA(n,{popupRedirectResolver:u1,persistence:[ER,lR,Hv]}),i=hv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=m1(l.toString());rR(t,c,()=>c(t.currentUser)),nR(t,f=>c(f))}}const o=lv("auth");return o&&jA(t,`http://${o}`),t}function y1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}NA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=lr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",y1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});d1("Browser");var jy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pi,Zv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function C(){}C.prototype=S.prototype,N.D=S.prototype,N.prototype=new C,N.prototype.constructor=N,N.C=function(k,D,b){for(var R=Array(arguments.length-2),st=2;st<arguments.length;st++)R[st-2]=arguments[st];return S.prototype[D].apply(k,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,C){C||(C=0);var k=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)k[D]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(D=0;16>D;++D)k[D]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=N.g[0],C=N.g[1],D=N.g[2];var b=N.g[3],R=S+(b^C&(D^b))+k[0]+3614090360&4294967295;S=C+(R<<7&4294967295|R>>>25),R=b+(D^S&(C^D))+k[1]+3905402710&4294967295,b=S+(R<<12&4294967295|R>>>20),R=D+(C^b&(S^C))+k[2]+606105819&4294967295,D=b+(R<<17&4294967295|R>>>15),R=C+(S^D&(b^S))+k[3]+3250441966&4294967295,C=D+(R<<22&4294967295|R>>>10),R=S+(b^C&(D^b))+k[4]+4118548399&4294967295,S=C+(R<<7&4294967295|R>>>25),R=b+(D^S&(C^D))+k[5]+1200080426&4294967295,b=S+(R<<12&4294967295|R>>>20),R=D+(C^b&(S^C))+k[6]+2821735955&4294967295,D=b+(R<<17&4294967295|R>>>15),R=C+(S^D&(b^S))+k[7]+4249261313&4294967295,C=D+(R<<22&4294967295|R>>>10),R=S+(b^C&(D^b))+k[8]+1770035416&4294967295,S=C+(R<<7&4294967295|R>>>25),R=b+(D^S&(C^D))+k[9]+2336552879&4294967295,b=S+(R<<12&4294967295|R>>>20),R=D+(C^b&(S^C))+k[10]+4294925233&4294967295,D=b+(R<<17&4294967295|R>>>15),R=C+(S^D&(b^S))+k[11]+2304563134&4294967295,C=D+(R<<22&4294967295|R>>>10),R=S+(b^C&(D^b))+k[12]+1804603682&4294967295,S=C+(R<<7&4294967295|R>>>25),R=b+(D^S&(C^D))+k[13]+4254626195&4294967295,b=S+(R<<12&4294967295|R>>>20),R=D+(C^b&(S^C))+k[14]+2792965006&4294967295,D=b+(R<<17&4294967295|R>>>15),R=C+(S^D&(b^S))+k[15]+1236535329&4294967295,C=D+(R<<22&4294967295|R>>>10),R=S+(D^b&(C^D))+k[1]+4129170786&4294967295,S=C+(R<<5&4294967295|R>>>27),R=b+(C^D&(S^C))+k[6]+3225465664&4294967295,b=S+(R<<9&4294967295|R>>>23),R=D+(S^C&(b^S))+k[11]+643717713&4294967295,D=b+(R<<14&4294967295|R>>>18),R=C+(b^S&(D^b))+k[0]+3921069994&4294967295,C=D+(R<<20&4294967295|R>>>12),R=S+(D^b&(C^D))+k[5]+3593408605&4294967295,S=C+(R<<5&4294967295|R>>>27),R=b+(C^D&(S^C))+k[10]+38016083&4294967295,b=S+(R<<9&4294967295|R>>>23),R=D+(S^C&(b^S))+k[15]+3634488961&4294967295,D=b+(R<<14&4294967295|R>>>18),R=C+(b^S&(D^b))+k[4]+3889429448&4294967295,C=D+(R<<20&4294967295|R>>>12),R=S+(D^b&(C^D))+k[9]+568446438&4294967295,S=C+(R<<5&4294967295|R>>>27),R=b+(C^D&(S^C))+k[14]+3275163606&4294967295,b=S+(R<<9&4294967295|R>>>23),R=D+(S^C&(b^S))+k[3]+4107603335&4294967295,D=b+(R<<14&4294967295|R>>>18),R=C+(b^S&(D^b))+k[8]+1163531501&4294967295,C=D+(R<<20&4294967295|R>>>12),R=S+(D^b&(C^D))+k[13]+2850285829&4294967295,S=C+(R<<5&4294967295|R>>>27),R=b+(C^D&(S^C))+k[2]+4243563512&4294967295,b=S+(R<<9&4294967295|R>>>23),R=D+(S^C&(b^S))+k[7]+1735328473&4294967295,D=b+(R<<14&4294967295|R>>>18),R=C+(b^S&(D^b))+k[12]+2368359562&4294967295,C=D+(R<<20&4294967295|R>>>12),R=S+(C^D^b)+k[5]+4294588738&4294967295,S=C+(R<<4&4294967295|R>>>28),R=b+(S^C^D)+k[8]+2272392833&4294967295,b=S+(R<<11&4294967295|R>>>21),R=D+(b^S^C)+k[11]+1839030562&4294967295,D=b+(R<<16&4294967295|R>>>16),R=C+(D^b^S)+k[14]+4259657740&4294967295,C=D+(R<<23&4294967295|R>>>9),R=S+(C^D^b)+k[1]+2763975236&4294967295,S=C+(R<<4&4294967295|R>>>28),R=b+(S^C^D)+k[4]+1272893353&4294967295,b=S+(R<<11&4294967295|R>>>21),R=D+(b^S^C)+k[7]+4139469664&4294967295,D=b+(R<<16&4294967295|R>>>16),R=C+(D^b^S)+k[10]+3200236656&4294967295,C=D+(R<<23&4294967295|R>>>9),R=S+(C^D^b)+k[13]+681279174&4294967295,S=C+(R<<4&4294967295|R>>>28),R=b+(S^C^D)+k[0]+3936430074&4294967295,b=S+(R<<11&4294967295|R>>>21),R=D+(b^S^C)+k[3]+3572445317&4294967295,D=b+(R<<16&4294967295|R>>>16),R=C+(D^b^S)+k[6]+76029189&4294967295,C=D+(R<<23&4294967295|R>>>9),R=S+(C^D^b)+k[9]+3654602809&4294967295,S=C+(R<<4&4294967295|R>>>28),R=b+(S^C^D)+k[12]+3873151461&4294967295,b=S+(R<<11&4294967295|R>>>21),R=D+(b^S^C)+k[15]+530742520&4294967295,D=b+(R<<16&4294967295|R>>>16),R=C+(D^b^S)+k[2]+3299628645&4294967295,C=D+(R<<23&4294967295|R>>>9),R=S+(D^(C|~b))+k[0]+4096336452&4294967295,S=C+(R<<6&4294967295|R>>>26),R=b+(C^(S|~D))+k[7]+1126891415&4294967295,b=S+(R<<10&4294967295|R>>>22),R=D+(S^(b|~C))+k[14]+2878612391&4294967295,D=b+(R<<15&4294967295|R>>>17),R=C+(b^(D|~S))+k[5]+4237533241&4294967295,C=D+(R<<21&4294967295|R>>>11),R=S+(D^(C|~b))+k[12]+1700485571&4294967295,S=C+(R<<6&4294967295|R>>>26),R=b+(C^(S|~D))+k[3]+2399980690&4294967295,b=S+(R<<10&4294967295|R>>>22),R=D+(S^(b|~C))+k[10]+4293915773&4294967295,D=b+(R<<15&4294967295|R>>>17),R=C+(b^(D|~S))+k[1]+2240044497&4294967295,C=D+(R<<21&4294967295|R>>>11),R=S+(D^(C|~b))+k[8]+1873313359&4294967295,S=C+(R<<6&4294967295|R>>>26),R=b+(C^(S|~D))+k[15]+4264355552&4294967295,b=S+(R<<10&4294967295|R>>>22),R=D+(S^(b|~C))+k[6]+2734768916&4294967295,D=b+(R<<15&4294967295|R>>>17),R=C+(b^(D|~S))+k[13]+1309151649&4294967295,C=D+(R<<21&4294967295|R>>>11),R=S+(D^(C|~b))+k[4]+4149444226&4294967295,S=C+(R<<6&4294967295|R>>>26),R=b+(C^(S|~D))+k[11]+3174756917&4294967295,b=S+(R<<10&4294967295|R>>>22),R=D+(S^(b|~C))+k[2]+718787259&4294967295,D=b+(R<<15&4294967295|R>>>17),R=C+(b^(D|~S))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+b&4294967295}i.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var C=S-this.blockSize,k=this.B,D=this.h,b=0;b<S;){if(D==0)for(;b<=C;)o(this,N,b),b+=this.blockSize;if(typeof N=="string"){for(;b<S;)if(k[D++]=N.charCodeAt(b++),D==this.blockSize){o(this,k),D=0;break}}else for(;b<S;)if(k[D++]=N[b++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=S},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var C=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=C&255,C/=256;for(this.u(N),N=Array(16),S=C=0;4>S;++S)for(var k=0;32>k;k+=8)N[C++]=this.g[S]>>>k&255;return N};function l(N,S){var C=f;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=S(N)}function c(N,S){this.h=S;for(var C=[],k=!0,D=N.length-1;0<=D;D--){var b=N[D]|0;k&&b==S||(C[D]=b,k=!1)}this.g=C}var f={};function p(N){return-128<=N&&128>N?l(N,function(S){return new c([S|0],0>S?-1:0)}):new c([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return L(y(-N));for(var S=[],C=1,k=0;N>=C;k++)S[k]=N/C|0,C*=4294967296;return new c(S,0)}function E(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return L(E(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(S,8)),k=T,D=0;D<N.length;D+=8){var b=Math.min(8,N.length-D),R=parseInt(N.substring(D,D+b),S);8>b?(b=y(Math.pow(S,b)),k=k.j(b).add(y(R))):(k=k.j(C),k=k.add(y(R)))}return k}var T=p(0),I=p(1),V=p(16777216);n=c.prototype,n.m=function(){if(q(this))return-L(this).m();for(var N=0,S=1,C=0;C<this.g.length;C++){var k=this.i(C);N+=(0<=k?k:4294967296+k)*S,S*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(B(this))return"0";if(q(this))return"-"+L(this).toString(N);for(var S=y(Math.pow(N,6)),C=this,k="";;){var D=re(C,S).g;C=ie(C,D.j(S));var b=((0<C.g.length?C.g[0]:C.h)>>>0).toString(N);if(C=D,B(C))return b+k;for(;6>b.length;)b="0"+b;k=b+k}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function B(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function q(N){return N.h==-1}n.l=function(N){return N=ie(this,N),q(N)?-1:B(N)?0:1};function L(N){for(var S=N.g.length,C=[],k=0;k<S;k++)C[k]=~N.g[k];return new c(C,~N.h).add(I)}n.abs=function(){return q(this)?L(this):this},n.add=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],k=0,D=0;D<=S;D++){var b=k+(this.i(D)&65535)+(N.i(D)&65535),R=(b>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);k=R>>>16,b&=65535,R&=65535,C[D]=R<<16|b}return new c(C,C[C.length-1]&-2147483648?-1:0)};function ie(N,S){return N.add(L(S))}n.j=function(N){if(B(this)||B(N))return T;if(q(this))return q(N)?L(this).j(L(N)):L(L(this).j(N));if(q(N))return L(this.j(L(N)));if(0>this.l(V)&&0>N.l(V))return y(this.m()*N.m());for(var S=this.g.length+N.g.length,C=[],k=0;k<2*S;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<N.g.length;D++){var b=this.i(k)>>>16,R=this.i(k)&65535,st=N.i(D)>>>16,Lt=N.i(D)&65535;C[2*k+2*D]+=R*Lt,Z(C,2*k+2*D),C[2*k+2*D+1]+=b*Lt,Z(C,2*k+2*D+1),C[2*k+2*D+1]+=R*st,Z(C,2*k+2*D+1),C[2*k+2*D+2]+=b*st,Z(C,2*k+2*D+2)}for(k=0;k<S;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=S;k<2*S;k++)C[k]=0;return new c(C,0)};function Z(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function ee(N,S){this.g=N,this.h=S}function re(N,S){if(B(S))throw Error("division by zero");if(B(N))return new ee(T,T);if(q(N))return S=re(L(N),S),new ee(L(S.g),L(S.h));if(q(S))return S=re(N,L(S)),new ee(L(S.g),S.h);if(30<N.g.length){if(q(N)||q(S))throw Error("slowDivide_ only works with positive integers.");for(var C=I,k=S;0>=k.l(N);)C=Re(C),k=Re(k);var D=we(C,1),b=we(k,1);for(k=we(k,2),C=we(C,2);!B(k);){var R=b.add(k);0>=R.l(N)&&(D=D.add(C),b=R),k=we(k,1),C=we(C,1)}return S=ie(N,D.j(S)),new ee(D,S)}for(D=T;0<=N.l(S);){for(C=Math.max(1,Math.floor(N.m()/S.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),b=y(C),R=b.j(S);q(R)||0<R.l(N);)C-=k,b=y(C),R=b.j(S);B(b)&&(b=I),D=D.add(b),N=ie(N,R)}return new ee(D,N)}n.A=function(N){return re(this,N).h},n.and=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)&N.i(k);return new c(C,this.h&N.h)},n.or=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)|N.i(k);return new c(C,this.h|N.h)},n.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],k=0;k<S;k++)C[k]=this.i(k)^N.i(k);return new c(C,this.h^N.h)};function Re(N){for(var S=N.g.length+1,C=[],k=0;k<S;k++)C[k]=N.i(k)<<1|N.i(k-1)>>>31;return new c(C,N.h)}function we(N,S){var C=S>>5;S%=32;for(var k=N.g.length-C,D=[],b=0;b<k;b++)D[b]=0<S?N.i(b+C)>>>S|N.i(b+C+1)<<32-S:N.i(b+C);return new c(D,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Zv=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=E,Pi=c}).apply(typeof jy<"u"?jy:typeof self<"u"?self:typeof window<"u"?window:{});var nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eE,Za,tE,fc,df,nE,rE,iE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof nc=="object"&&nc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var M=u[w];if(!(M in _))break e;_=_[M]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,M={next:function(){if(!w&&_<u.length){var $=_++;return{value:m($,u[$]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),u.apply(m,M)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,I.apply(null,arguments)}function V(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function B(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,M,$){for(var te=Array(arguments.length-2),je=2;je<arguments.length;je++)te[je-2]=arguments[je];return m.prototype[M].apply(w,te)}}function q(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function L(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const M=u.length||0,$=w.length||0;u.length=M+$;for(let te=0;te<$;te++)u[M+te]=w[te]}else u.push(w)}}class ie{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Z(u){return/^[\s\xa0]*$/.test(u)}function ee(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function re(u){return re[" "](u),u}re[" "]=function(){};var Re=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function we(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let _,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(_ in w)u[_]=w[_];for(let $=0;$<C.length;$++)_=C[$],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function D(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function b(u){f.setTimeout(()=>{throw u},0)}function R(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class st{constructor(){this.h=this.g=null}add(m,_){const w=Lt.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Lt=new ie(()=>new bt,u=>u.reset());class bt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,ne=!1,me=new st,le=()=>{const u=f.Promise.resolve(void 0);ze=()=>{u.then(O)}};var O=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){b(_)}var m=Lt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ne=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u})();function Ce(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Re){e:{try{re(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}B(Ce,fe);var De={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,m,_,w,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=M,this.key=++Ue,this.da=this.fa=!1}function Tt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function _r(u){this.src=u,this.g={},this.h=0}_r.prototype.add=function(u,m,_,w,M){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var te=Hr(u,m,w,M);return-1<te?(m=u[te],_||(m.fa=!1)):(m=new $e(m,this.src,$,!!w,M),m.fa=_,u.push(m)),m};function Ls(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],M=Array.prototype.indexOf.call(w,m,void 0),$;($=0<=M)&&Array.prototype.splice.call(w,M,1),$&&(Tt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Hr(u,m,_,w){for(var M=0;M<u.length;++M){var $=u[M];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==w)return M}return-1}var $i="closure_lm_"+(1e6*Math.random()|0),bs={};function ta(u,m,_,w,M){if(Array.isArray(m)){for(var $=0;$<m.length;$++)ta(u,m[$],_,w,M);return null}return _=ia(_),u&&u[Me]?u.K(m,_,y(w)?!!w.capture:!1,M):na(u,m,_,!1,w,M)}function na(u,m,_,w,M,$){if(!m)throw Error("Invalid event type");var te=y(M)?!!M.capture:!!M,je=Us(u);if(je||(u[$i]=je=new _r(u)),_=je.add(m,_,w,te,$),_.proxy)return _;if(w=Fl(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Se||(M=te),M===void 0&&(M=!1),u.addEventListener(m.toString(),w,M);else if(u.attachEvent)u.attachEvent(Er(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Fl(){function u(_){return m.call(u.src,u.listener,_)}const m=ra;return u}function Ms(u,m,_,w,M){if(Array.isArray(m))for(var $=0;$<m.length;$++)Ms(u,m[$],_,w,M);else w=y(w)?!!w.capture:!!w,_=ia(_),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],_=Hr($,_,w,M),-1<_&&(Tt($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=Us(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Hr(m,_,w,M)),(_=-1<u?m[u]:null)&&vr(_))}function vr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])Ls(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(Er(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Us(m))?(Ls(_,u),_.h==0&&(_.src=null,m[$i]=null)):Tt(u)}}}function Er(u){return u in bs?bs[u]:bs[u]="on"+u}function ra(u,m){if(u.da)u=!0;else{m=new Ce(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&vr(u),u=_.call(w,m)}return u}function Us(u){return u=u[$i],u instanceof _r?u:null}var Fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ia(u){return typeof u=="function"?u:(u[Fs]||(u[Fs]=function(m){return u.handleEvent(m)}),u[Fs])}function mt(){K.call(this),this.i=new _r(this),this.M=this,this.F=null}B(mt,K),mt.prototype[Me]=!0,mt.prototype.removeEventListener=function(u,m,_,w){Ms(this,u,m,_,w)};function gt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var M=m;m=new fe(w,u),k(m,M)}if(M=!0,_)for(var $=_.length-1;0<=$;$--){var te=m.g=_[$];M=wr(te,w,!0,m)&&M}if(te=m.g=u,M=wr(te,w,!0,m)&&M,M=wr(te,w,!1,m)&&M,_)for($=0;$<_.length;$++)te=m.g=_[$],M=wr(te,w,!1,m)&&M}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)Tt(_[w]);delete u.g[m],u.h--}}this.F=null},mt.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},mt.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function wr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,$=0;$<m.length;++$){var te=m[$];if(te&&!te.da&&te.capture==_){var je=te.listener,yt=te.ha||te.src;te.fa&&Ls(u.i,te),M=je.call(yt,w)!==!1&&M}}return M&&!w.defaultPrevented}function sa(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Kr(u){u.g=sa(()=>{u.g=null,u.i&&(u.i=!1,Kr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class qi extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Kr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(u){K.call(this),this.h=u,this.g={}}B(Wi,K);var oa=[];function aa(u){we(u.g,function(m,_){this.g.hasOwnProperty(_)&&vr(m)},u),u.g={}}Wi.prototype.N=function(){Wi.aa.N.call(this),aa(this)},Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var la=f.JSON.stringify,ua=f.JSON.parse,ca=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Hi(){}Hi.prototype.h=null;function js(u){return u.h||(u.h=u.i())}function zs(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gn(){fe.call(this,"d")}B(Gn,fe);function Bs(){fe.call(this,"c")}B(Bs,fe);var Qn={},ha=null;function Ki(){return ha=ha||new mt}Qn.La="serverreachability";function da(u){fe.call(this,Qn.La,u)}B(da,fe);function Tr(u){const m=Ki();gt(m,new da(m))}Qn.STAT_EVENT="statevent";function fa(u,m){fe.call(this,Qn.STAT_EVENT,u),this.stat=m}B(fa,fe);function ot(u){const m=Ki();gt(m,new fa(m,u))}Qn.Ma="timingevent";function $s(u,m){fe.call(this,Qn.Ma,u),this.size=m}B($s,fe);function Pn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Gi(){this.g=!0}Gi.prototype.xa=function(){this.g=!1};function Qi(u,m,_,w,M,$){u.info(function(){if(u.g)if($)for(var te="",je=$.split("&"),yt=0;yt<je.length;yt++){var Oe=je[yt].split("=");if(1<Oe.length){var It=Oe[0];Oe=Oe[1];var ut=It.split("_");te=2<=ut.length&&ut[1]=="type"?te+(It+"="+Oe+"&"):te+(It+"=redacted&")}}else te=null;else te=$;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+m+`
`+_+`
`+te})}function qs(u,m,_,w,M,$,te){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+m+`
`+_+`
`+$+" "+te})}function kn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+oh(u,_)+(w?" "+w:"")})}function pa(u,m){u.info(function(){return"TIMEOUT: "+m})}Gi.prototype.info=function(){};function oh(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var $=M[0];if($!="noop"&&$!="stop"&&$!="close")for(var te=1;te<M.length;te++)M[te]=""}}}}return la(_)}catch{return m}}var Ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function Xi(){}B(Xi,Hi),Xi.prototype.g=function(){return new XMLHttpRequest},Xi.prototype.i=function(){return{}},Nn=new Xi;function xn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new Wi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zl}function zl(){this.i=null,this.g="",this.h=!1}var ma={},Hs={};function Ks(u,m,_){u.L=1,u.v=Yr(un(m)),u.m=_,u.P=!0,ga(u,null)}function ga(u,m){u.F=Date.now(),qe(u),u.A=un(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),ei(_.i,"t",w),u.C=0,_=u.j.J,u.h=new zl,u.g=su(u.j,_?m:null,!u.m),0<u.O&&(u.M=new qi(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(oa[0]=M.toString()),M=oa);for(var $=0;$<M.length;$++){var te=ta(_,M[$],w||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Tr(),Qi(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Jt(u)==3?m.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)e:{const ut=Jt(this.g);var m=this.g.Ba();const vn=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Ta(this.g)))){this.J||ut!=4||m==7||(m==8||0>=vn?Tr(3):Tr(2)),Ji(this);var _=this.g.Z();this.X=_;t:if(Bl(this)){var w=Ta(this.g);u="";var M=w.length,$=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),Gr(this);var te="";break t}this.h.i=new f.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!($&&m==M-1)});w.length=0,this.h.g+=u,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,qs(this.i,this.u,this.A,this.l,this.R,ut,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,yt=this.g;if((je=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(je)){var Oe=je;break t}}Oe=null}if(_=Oe)kn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,_);else{this.o=!1,this.s=3,ot(12),yn(this),Gr(this);break e}}if(this.P){_=!0;let hn;for(;!this.J&&this.C<te.length;)if(hn=ah(this,te),hn==Hs){ut==4&&(this.s=4,ot(14),_=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==ma){this.s=4,ot(15),kn(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else kn(this.i,this.l,hn,null),ya(this,hn);if(Bl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||te.length!=0||this.h.h||(this.s=1,ot(16),_=!1),this.o=this.o&&_,!_)kn(this.i,this.l,te,"[Invalid Chunked Response]"),yn(this),Gr(this);else if(0<te.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),Sa(It),It.M=!0,ot(11))}}else kn(this.i,this.l,te,null),ya(this,te);ut==4&&yn(this),this.o&&!this.J&&(ut==4?io(this.j,this):(this.o=!1,qe(this)))}else Zs(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),yn(this),Gr(this)}}}catch{}finally{}};function Bl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ah(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Hs:(_=Number(m.substring(_,w)),isNaN(_)?ma:(w+=1,w+_>m.length?Hs:(m=m.slice(w,w+_),u.C=w+_,m)))}xn.prototype.cancel=function(){this.J=!0,yn(this)};function qe(u){u.S=Date.now()+u.I,$l(u,u.I)}function $l(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Pn(I(u.ba,u),m)}function Ji(u){u.B&&(f.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(pa(this.i,this.A),this.L!=2&&(Tr(),ot(17)),yn(this),this.s=2,Gr(this)):$l(this,this.S-u)};function Gr(u){u.j.G==0||u.J||io(u.j,u)}function yn(u){Ji(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,aa(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ya(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Wt(_.h,u))){if(!u.K&&Wt(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)ro(_),bn(_);else break e;no(_),ot(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Pn(I(_.Za,_),6e3));if(1>=Wl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Cr(_,11)}else if((u.K||_.g==u)&&ro(_),!Z(m))for(M=_.Da.g.parse(m),m=0;m<M.length;m++){let Oe=M[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const It=Oe[3];It!=null&&(_.la=It,_.j.info("VER="+_.la));const ut=Oe[4];ut!=null&&(_.Aa=ut,_.j.info("SVER="+_.Aa));const vn=Oe[5];vn!=null&&typeof vn=="number"&&0<vn&&(w=1.5*vn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const hn=u.g;if(hn){const is=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(is){var $=w.h;$.g||is.indexOf("spdy")==-1&&is.indexOf("quic")==-1&&is.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(_a($,$.h),$.h=null))}if(w.D){const oo=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;oo&&(w.ya=oo,Be(w.I,w.D,oo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var te=u;if(w.qa=iu(w,w.J?w.ia:null,w.W),te.K){Hl(w.h,te);var je=te,yt=w.L;yt&&(je.I=yt),je.B&&(Ji(je),qe(je)),w.g=te}else rs(w);0<_.i.length&&Zn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Cr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Cr(_,7):kt(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}Tr(4)}catch{}}var ql=class{constructor(u,m){this.g=u,this.map=m}};function Yi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ln(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Wl(u){return u.h?1:u.g?u.g.size:0}function Wt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function _a(u,m){u.g?u.g.add(m):u.h=m}function Hl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Yi.prototype.cancel=function(){if(this.i=Kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Kl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return q(u.i)}function Gs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Qs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function Qr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Qs(u),w=Gs(u),M=w.length,$=0;$<M;$++)m.call(void 0,w[$],_&&_[$],u)}var Zi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),M=null;if(0<=w){var $=u[_].substring(0,w);M=u[_].substring(w+1)}else $=u[_];m($,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Ir(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ir){this.h=u.h,es(this,u.j),this.o=u.o,this.g=u.g,Xr(this,u.s),this.l=u.l;var m=u.i,_=new Xn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Jr(this,_),this.m=u.m}else u&&(m=String(u).match(Zi))?(this.h=!1,es(this,m[1]||"",!0),this.o=xe(m[2]||""),this.g=xe(m[3]||"",!0),Xr(this,m[4]),this.l=xe(m[5]||"",!0),Jr(this,m[6]||"",!0),this.m=xe(m[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Ir.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Zr(m,Xs,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Zr(m,Xs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Zr(_,_.charAt(0)=="/"?Xl:Ql,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Zr(_,va)),u.join("")};function un(u){return new Ir(u)}function es(u,m,_){u.j=_?xe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Xr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Jr(u,m,_){m instanceof Xn?(u.i=m,Jn(u.i,u.h)):(_||(m=Zr(m,Jl)),u.i=new Xn(m,u.h))}function Be(u,m,_){u.i.set(m,_)}function Yr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Zr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Gl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Gl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Xs=/[#\/\?@]/g,Ql=/[#\?:]/g,Xl=/[#\?]/g,Jl=/[#\?@]/g,va=/#/g;function Xn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Pt(u){u.g||(u.g=new Map,u.h=0,u.i&&lh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Xn.prototype,n.add=function(u,m){Pt(this),this.i=null,u=_n(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Dn(u,m){Pt(u),m=_n(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function On(u,m){return Pt(u),m=_n(u,m),u.g.has(m)}n.forEach=function(u,m){Pt(this),this.g.forEach(function(_,w){_.forEach(function(M){u.call(m,M,w,this)},this)},this)},n.na=function(){Pt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const M=u[w];for(let $=0;$<M.length;$++)_.push(m[w])}return _},n.V=function(u){Pt(this);let m=[];if(typeof u=="string")On(this,u)&&(m=m.concat(this.g.get(_n(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Pt(this),this.i=null,u=_n(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ei(u,m,_){Dn(u,m),0<_.length&&(u.i=null,u.g.set(_n(u,m),q(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const $=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var M=$;te[w]!==""&&(M+="="+encodeURIComponent(String(te[w]))),u.push(M)}}return this.i=u.join("&")};function _n(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Jn(u,m){m&&!u.j&&(Pt(u),u.i=null,u.g.forEach(function(_,w){var M=w.toLowerCase();w!=M&&(Dn(this,w),ei(this,M,_))},u)),u.j=m}function uh(u,m){const _=new Gi;if(f.Image){const w=new Image;w.onload=V(Xt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=V(Xt,_,"TestLoadImage: error",!1,m,w),w.onabort=V(Xt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=V(Xt,_,"TestLoadImage: timeout",!1,m,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function Yl(u,m){const _=new Gi,w=new AbortController,M=setTimeout(()=>{w.abort(),Xt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then($=>{clearTimeout(M),$.ok?Xt(_,"TestPingServer: ok",!0,m):Xt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),Xt(_,"TestPingServer: error",!1,m)})}function Xt(u,m,_,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(_)}catch{}}function ch(){this.g=new ca}function Zl(u,m,_){const w=_||"";try{Qr(u,function(M,$){let te=M;y(M)&&(te=la(M)),m.push(w+$+"="+encodeURIComponent(te))})}catch(M){throw m.push(w+"type="+encodeURIComponent("_badmap")),M}}function Sr(u){this.l=u.Ub||null,this.j=u.eb||!1}B(Sr,Hi),Sr.prototype.g=function(){return new ts(this.l,this.j)},Sr.prototype.i=(function(u){return function(){return u}})({});function ts(u,m){mt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(ts,mt),n=ts.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Ln(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;eu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function eu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Vn(this):Ln(this),this.readyState==3&&eu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Vn(this))},n.Qa=function(u){this.g&&(this.response=u,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ln(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ar(u){let m="";return we(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function ti(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Ar(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Be(u,m,_))}function Xe(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Xe,mt);var hh=/^https?$/i,Ea=["POST","PUT"];n=Xe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?js(this.o):js(Nn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){ns(this,$);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)_.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const $ of w.keys())_.set($,w.get($));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Ea,m,void 0))||w||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,te]of _)this.g.setRequestHeader($,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ys(this),this.u=!0,this.g.send(u),this.u=!1}catch($){ns(this,$)}};function ns(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Js(u),cn(u)}function Js(u){u.A||(u.A=!0,gt(u,"complete"),gt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,gt(this,"complete"),gt(this,"abort"),cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),Xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?wa(this):this.bb())},n.bb=function(){wa(this)};function wa(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Jt(u)!=4||u.Z()!=2)){if(u.u&&Jt(u)==4)sa(u.Ea,0,u);else if(gt(u,"readystatechange"),Jt(u)==4){u.h=!1;try{const te=u.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=te===0){var M=String(u.D).match(Zi)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),w=!hh.test(M?M.toLowerCase():"")}_=w}if(_)gt(u,"complete"),gt(u,"success");else{u.m=6;try{var $=2<Jt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",Js(u)}}finally{cn(u)}}}}function cn(u,m){if(u.g){Ys(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||gt(u,"ready");try{_.onreadystatechange=w}catch{}}}function Ys(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Jt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ua(m)}};function Ta(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Zs(u){const m={};u=(u.g&&2<=Jt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(Z(u[w]))continue;var _=D(u[w]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[M]||[];m[M]=$,$.push(_)}N(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Ia(u){this.Aa=0,this.i=[],this.j=new Gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,u),this.cb=Yn("retryDelaySeedMs",1e4,u),this.Wa=Yn("forwardChannelMaxRetries",2,u),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(u&&u.concurrentRequestLimit),this.Da=new ch,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ia.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){ot(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=iu(this,null,this.W),Zn(this)};function kt(u){if(eo(u),u.G==3){var m=u.U++,_=un(u.I);if(Be(_,"SID",u.K),Be(_,"RID",m),Be(_,"TYPE","terminate"),Rr(u,_),m=new xn(u,u.j,m),m.L=2,m.v=Yr(un(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=su(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}ru(u)}function bn(u){u.g&&(Sa(u),u.g.cancel(),u.g=null)}function eo(u){bn(u),u.u&&(f.clearTimeout(u.u),u.u=null),ro(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Zn(u){if(!ln(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||le(),ne||(ze(),ne=!0),me.add(m,u),u.B=0}}function dh(u,m){return Wl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Pn(I(u.Ga,u,m),nu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new xn(this,this.j,u);let $=this.o;if(this.S&&($?($=S($),k($,this.S)):$=this.S),this.m!==null||this.O||(M.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ni(this,M,m),_=un(this.I),Be(_,"RID",u),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),Rr(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(Ar($)))+"&"+m:this.m&&ti(_,this.m,$)),_a(this.h,M),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",m),Be(_,"SID","null"),M.T=!0,Ks(M,_,null)):Ks(M,_,m),this.G=2}}else this.G==3&&(u?to(this,u):this.i.length==0||ln(this.h)||to(this))};function to(u,m){var _;m?_=m.l:_=u.U++;const w=un(u.I);Be(w,"SID",u.K),Be(w,"RID",_),Be(w,"AID",u.T),Rr(u,w),u.m&&u.o&&ti(w,u.m,u.o),_=new xn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ni(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),_a(u.h,_),Ks(_,w,m)}function Rr(u,m){u.H&&we(u.H,function(_,w){Be(m,w,_)}),u.l&&Qr({},function(_,w){Be(m,w,_)})}function ni(u,m,_){_=Math.min(u.i.length,_);var w=u.l?I(u.l.Na,u.l,u):null;e:{var M=u.i;let $=-1;for(;;){const te=["count="+_];$==-1?0<_?($=M[0].g,te.push("ofs="+$)):$=0:te.push("ofs="+$);let je=!0;for(let yt=0;yt<_;yt++){let Oe=M[yt].g;const It=M[yt].map;if(Oe-=$,0>Oe)$=Math.max(0,M[yt].g-100),je=!1;else try{Zl(It,te,"req"+Oe+"_")}catch{w&&w(It)}}if(je){w=te.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function rs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||le(),ne||(ze(),ne=!0),me.add(m,u),u.v=0}}function no(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Pn(I(u.Fa,u),nu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,tu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Pn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),bn(this),tu(this))};function Sa(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function tu(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=un(u.qa);Be(m,"RID","rpc"),Be(m,"SID",u.K),Be(m,"AID",u.T),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(m,"TO",u.ja),Be(m,"TYPE","xmlhttp"),Rr(u,m),u.m&&u.o&&ti(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Yr(un(m)),_.m=null,_.P=!0,ga(_,u)}n.Za=function(){this.C!=null&&(this.C=null,bn(this),no(this),ot(19))};function ro(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function io(u,m){var _=null;if(u.g==m){ro(u),Sa(u),u.g=null;var w=2}else if(Wt(u.h,m))_=m.D,Hl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var M=u.B;w=Ki(),gt(w,new $s(w,_)),Zn(u)}else rs(u);else if(M=m.s,M==3||M==0&&0<m.X||!(w==1&&dh(u,m)||w==2&&no(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),M){case 1:Cr(u,5);break;case 4:Cr(u,10);break;case 3:Cr(u,6);break;default:Cr(u,2)}}}function nu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Cr(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),w=u.Xa;const M=!w;w=new Ir(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||es(w,"https"),Yr(w),M?uh(w.toString(),_):Yl(w.toString(),_)}else ot(2);u.G=0,u.l&&u.l.sa(m),ru(u),eo(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function ru(u){if(u.G=0,u.ka=[],u.l){const m=Kl(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function iu(u,m,_){var w=_ instanceof Ir?un(_):new Ir(_);if(w.g!="")m&&(w.g=m+"."+w.g),Xr(w,w.s);else{var M=f.location;w=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var $=new Ir(null);w&&es($,w),m&&($.g=m),M&&Xr($,M),_&&($.l=_),w=$}return _=u.D,m=u.ya,_&&m&&Be(w,_,m),Be(w,"VER",u.la),Rr(u,w),w}function su(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Xe(new Sr({eb:_})):new Xe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Aa(){}n=Aa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function so(){}so.prototype.g=function(u,m){return new Ht(u,m)};function Ht(u,m){mt.call(this),this.g=new Ia(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Z(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Z(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new er(this)}B(Ht,mt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){kt(this.g)},Ht.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=la(u),u=_);m.i.push(new ql(m.Ya++,u)),m.G==3&&Zn(m)},Ht.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,Ht.aa.N.call(this)};function ou(u){Gn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}B(ou,Gn);function au(){Bs.call(this),this.status=1}B(au,Bs);function er(u){this.g=u}B(er,Aa),er.prototype.ua=function(){gt(this.g,"a")},er.prototype.ta=function(u){gt(this.g,new ou(u))},er.prototype.sa=function(u){gt(this.g,new au)},er.prototype.ra=function(){gt(this.g,"b")},so.prototype.createWebChannel=so.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,iE=function(){return new so},rE=function(){return Ki()},nE=Qn,df={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ws.NO_ERROR=0,Ws.TIMEOUT=8,Ws.HTTP_ERROR=6,fc=Ws,jl.COMPLETE="complete",tE=jl,zs.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Za=zs,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,eE=Xe}).apply(typeof nc<"u"?nc:typeof self<"u"?self:typeof window<"u"?window:{});const zy="@firebase/firestore",By="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new bf("@firebase/firestore");function ko(){return As.logLevel}function ae(n,...e){if(As.logLevel<=ke.DEBUG){const t=e.map(Gf);As.debug(`Firestore (${Qo}): ${n}`,...t)}}function Br(n,...e){if(As.logLevel<=ke.ERROR){const t=e.map(Gf);As.error(`Firestore (${Qo}): ${n}`,...t)}}function xi(n,...e){if(As.logLevel<=ke.WARN){const t=e.map(Gf);As.warn(`Firestore (${Qo}): ${n}`,...t)}}function Gf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,sE(n,i,t)}function sE(n,e,t){let i=`FIRESTORE (${Qo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Br(i),new Error(i)}function Fe(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||sE(e,o,i)}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends yr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Bt.UNAUTHENTICATED)))}shutdown(){}}class v1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class E1{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ur,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},f=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ur)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string",31837,{l:i}),new oE(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class w1{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class T1{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new w1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $y{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,an(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $y(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new $y(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=S1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ae(n,e){return n<e?-1:n>e?1:0}function ff(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ae(i,o);{const l=aE(),c=A1(l.encode(qy(n,t)),l.encode(qy(e,t)));return c!==0?c:Ae(i,o)}}t+=i>65535?2:1}return Ae(n.length,e.length)}function qy(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function A1(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ae(n[t],e[t]);return Ae(n.length,e.length)}function jo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="__name__";class sr{constructor(e,t,i){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ve(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=sr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const i=sr.isNumericId(e),o=sr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?sr.extractNumericId(e).compare(sr.extractNumericId(t)):ff(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pi.fromString(e.substring(4,e.length-2))}}class He extends sr{construct(e,t,i){return new He(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new se(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const R1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends sr{construct(e,t,i){return new Ot(e,t,i)}static isValidIdentifier(e){return R1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wy}static keyField(){return new Ot([Wy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new se(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new se(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(i+=f,o++):(l(),o++)}if(l(),c)throw new se(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ot(t)}static emptyPath(){return new Ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(He.fromString(e))}static fromName(e){return new pe(He.fromString(e).popFirst(5))}static empty(){return new pe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(n,e,t){if(!t)throw new se(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function C1(n,e,t,i){if(e===!0&&i===!0)throw new se(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hy(n){if(!pe.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ky(n){if(pe.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function uE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Kc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ve(12329,{type:typeof n})}function $r(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Kc(n);throw new se(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n,e){const t={typeString:n};return e&&(t.value=e),t}function xl(n,e){if(!uE(n))throw new se(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new se(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=-62135596800,Qy=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Qy);return new Qe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Gy)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qy}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Gy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ft("string",Qe._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Qe(0,0))}static max(){return new Te(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=-1;function P1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new Qe(t+1,0):new Qe(t,i));return new Di(o,pe.empty(),e)}function k1(n){return new Di(n.readTime,n.key,ml)}class Di{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Di(Te.min(),pe.empty(),ml)}static max(){return new Di(Te.max(),pe.empty(),ml)}}function N1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class D1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==x1)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,i)=>{t(e)}))}static reject(e){return new H(((t,i)=>{i(e)}))}static waitFor(e){return new H(((t,i)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(p=>i(p)))})),c=!0,l===o&&t()}))}static or(e){let t=H.resolve(!1);for(const i of e)t=t.next((o=>o?H.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new H(((i,o)=>{const l=e.length,c=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((E=>{c[y]=E,++f,f===l&&i(c)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function O1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Jo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Gc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=-1;function Qc(n){return n==null}function kc(n){return n===0&&1/n==-1/0}function V1(n){return typeof n=="number"&&Number.isInteger(n)&&!kc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="";function L1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xy(e)),e=b1(n.get(t),e);return Xy(e)}function b1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case cE:t+="";break;default:t+=l}}return t}function Xy(n){return n+cE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ks(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rc(this.root,e,this.comparator,!1)}getReverseIterator(){return new rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rc(this.root,e,this.comparator,!0)}}class rc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Dt.RED,this.left=o??Dt.EMPTY,this.right=l??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Dt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yy(this.data.getIterator())}getIteratorFrom(e){return new Yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(Ot.comparator)}static empty(){return new qn([])}unionWith(e){let t=new Et(Ot.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new dE("Invalid base64 string: "+l):l}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const M1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(n){if(Fe(!!n,39018),typeof n=="string"){let e=0;const t=M1.exec(n);if(Fe(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vi(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="server_timestamp",pE="__type__",mE="__previous_value__",gE="__local_write_time__";function Jf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[pE])===null||t===void 0?void 0:t.stringValue)===fE}function Xc(n){const e=n.mapValue.fields[mE];return Jf(e)?Xc(e):e}function gl(n){const e=Oi(n.mapValue.fields[gE].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,t,i,o,l,c,f,p,y,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=E}}const Nc="(default)";class yl{constructor(e,t){this.projectId=e,this.database=t||Nc}static empty(){return new yl("","")}get isDefaultDatabase(){return this.database===Nc}isEqual(e){return e instanceof yl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="__type__",F1="__max__",ic={mapValue:{}},_E="__vector__",xc="value";function Li(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Jf(n)?4:z1(n)?9007199254740991:j1(n)?10:11:ve(28295,{value:n})}function mr(n,e){if(n===e)return!0;const t=Li(n);if(t!==Li(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gl(n).isEqual(gl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Oi(o.timestampValue),f=Oi(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Vi(o.bytesValue).isEqual(Vi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=lt(o.doubleValue),f=lt(l.doubleValue);return c===f?kc(c)===kc(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return jo(n.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Jy(c)!==Jy(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!mr(c[p],f[p])))return!1;return!0})(n,e);default:return ve(52216,{left:n})}}function _l(n,e){return(n.values||[]).find((t=>mr(t,e)))!==void 0}function zo(n,e){if(n===e)return 0;const t=Li(n),i=Li(e);if(t!==i)return Ae(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=lt(l.integerValue||l.doubleValue),p=lt(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return Zy(n.timestampValue,e.timestampValue);case 4:return Zy(gl(n),gl(e));case 5:return ff(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=Vi(l),p=Vi(c);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),p=c.split("/");for(let y=0;y<f.length&&y<p.length;y++){const E=Ae(f[y],p[y]);if(E!==0)return E}return Ae(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Ae(lt(l.latitude),lt(c.latitude));return f!==0?f:Ae(lt(l.longitude),lt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return e_(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var f,p,y,E;const T=l.fields||{},I=c.fields||{},V=(f=T[xc])===null||f===void 0?void 0:f.arrayValue,B=(p=I[xc])===null||p===void 0?void 0:p.arrayValue,q=Ae(((y=V==null?void 0:V.values)===null||y===void 0?void 0:y.length)||0,((E=B==null?void 0:B.values)===null||E===void 0?void 0:E.length)||0);return q!==0?q:e_(V,B)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===ic.mapValue&&c===ic.mapValue)return 0;if(l===ic.mapValue)return 1;if(c===ic.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=c.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const I=ff(p[T],E[T]);if(I!==0)return I;const V=zo(f[p[T]],y[E[T]]);if(V!==0)return V}return Ae(p.length,E.length)})(n.mapValue,e.mapValue);default:throw ve(23264,{le:t})}}function Zy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=Oi(n),i=Oi(e),o=Ae(t.seconds,i.seconds);return o!==0?o:Ae(t.nanos,i.nanos)}function e_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=zo(t[o],i[o]);if(l)return l}return Ae(t.length,i.length)}function Bo(n){return pf(n)}function pf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Oi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Vi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return pe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=pf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${pf(t.fields[c])}`;return o+"}"})(n.mapValue):ve(61005,{value:n})}function pc(n){switch(Li(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xc(n);return e?16+pc(e):16;case 5:return 2*n.stringValue.length;case 6:return Vi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+pc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return ks(i.fields,((l,c)=>{o+=l.length+pc(c)})),o})(n.mapValue);default:throw ve(13486,{value:n})}}function t_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function mf(n){return!!n&&"integerValue"in n}function Yf(n){return!!n&&"arrayValue"in n}function n_(n){return!!n&&"nullValue"in n}function r_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mc(n){return!!n&&"mapValue"in n}function j1(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[yE])===null||t===void 0?void 0:t.stringValue)===_E}function sl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ks(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=sl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=sl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function z1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===F1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!mc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sl(t)}setAll(e){let t=Ot.emptyPath(),i={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}c?i[f.lastSegment()]=sl(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());mc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];mc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ks(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Rn(sl(this.value))}}function vE(n){const e=[];return ks(n.fields,((t,i)=>{const o=new Ot([t]);if(mc(i)){const l=vE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,i,o,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new $t(e,0,Te.min(),Te.min(),Te.min(),Rn.empty(),0)}static newFoundDocument(e,t,i,o){return new $t(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new $t(e,2,t,Te.min(),Te.min(),Rn.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,Te.min(),Te.min(),Rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t){this.position=e,this.inclusive=t}}function i_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(c.referenceValue),t.key):i=zo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function s_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t="asc"){this.field=e,this.dir=t}}function B1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{}class dt extends EE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new q1(e,t,i):t==="array-contains"?new K1(e,i):t==="in"?new G1(e,i):t==="not-in"?new Q1(e,i):t==="array-contains-any"?new X1(e,i):new dt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new W1(e,i):new H1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zo(t,this.value)):t!==null&&Li(this.value)===Li(t)&&this.matchesComparison(zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends EE{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Kn(e,t)}matches(e){return wE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function wE(n){return n.op==="and"}function TE(n){return $1(n)&&wE(n)}function $1(n){for(const e of n.filters)if(e instanceof Kn)return!1;return!0}function gf(n){if(n instanceof dt)return n.field.canonicalString()+n.op.toString()+Bo(n.value);if(TE(n))return n.filters.map((e=>gf(e))).join(",");{const e=n.filters.map((t=>gf(t))).join(",");return`${n.op}(${e})`}}function IE(n,e){return n instanceof dt?(function(i,o){return o instanceof dt&&i.op===o.op&&i.field.isEqual(o.field)&&mr(i.value,o.value)})(n,e):n instanceof Kn?(function(i,o){return o instanceof Kn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,f)=>l&&IE(c,o.filters[f])),!0):!1})(n,e):void ve(19439)}function SE(n){return n instanceof dt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Bo(t.value)}`})(n):n instanceof Kn?(function(t){return t.op.toString()+" {"+t.getFilters().map(SE).join(" ,")+"}"})(n):"Filter"}class q1 extends dt{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class W1 extends dt{constructor(e,t){super(e,"in",t),this.keys=AE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class H1 extends dt{constructor(e,t){super(e,"not-in",t),this.keys=AE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function AE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>pe.fromName(i.referenceValue)))}class K1 extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yf(t)&&_l(t.arrayValue,this.value)}}class G1 extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_l(this.value.arrayValue,t)}}class Q1 extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(_l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_l(this.value.arrayValue,t)}}class X1 extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>_l(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,t=null,i=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.Pe=null}}function o_(n,e=null,t=[],i=[],o=null,l=null,c=null){return new J1(n,e,t,i,o,l,c)}function Zf(n){const e=Ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>gf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Qc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Bo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Bo(i))).join(",")),e.Pe=t}return e.Pe}function ep(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!B1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!IE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!s_(n.startAt,e.startAt)&&s_(n.endAt,e.endAt)}function yf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t=null,i=[],o=[],l=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Y1(n,e,t,i,o,l,c,f){return new Yo(n,e,t,i,o,l,c,f)}function tp(n){return new Yo(n)}function a_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function RE(n){return n.collectionGroup!==null}function ol(n){const e=Ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Et(Ot.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new vl(l,i))})),t.has(Ot.keyField().canonicalString())||e.Te.push(new vl(Ot.keyField(),i))}return e.Te}function hr(n){const e=Ie(n);return e.Ie||(e.Ie=Z1(e,ol(n))),e.Ie}function Z1(n,e){if(n.limitType==="F")return o_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new vl(o.field,l)}));const t=n.endAt?new Dc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Dc(n.startAt.position,n.startAt.inclusive):null;return o_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function _f(n,e){const t=n.filters.concat([e]);return new Yo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function vf(n,e,t){return new Yo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Jc(n,e){return ep(hr(n),hr(e))&&n.limitType===e.limitType}function CE(n){return`${Zf(hr(n))}|lt:${n.limitType}`}function No(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>SE(o))).join(", ")}]`),Qc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Bo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Bo(o))).join(",")),`Target(${i})`})(hr(n))}; limitType=${n.limitType})`}function Yc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of ol(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,f,p){const y=i_(c,f,p);return c.inclusive?y<=0:y<0})(i.startAt,ol(i),o)||i.endAt&&!(function(c,f,p){const y=i_(c,f,p);return c.inclusive?y>=0:y>0})(i.endAt,ol(i),o))})(n,e)}function eC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function PE(n){return(e,t)=>{let i=!1;for(const o of ol(n)){const l=tC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function tC(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,c,f){const p=c.data.field(l),y=f.data.field(l);return p!==null&&y!==null?zo(p,y):ve(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ve(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return hE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new tt(pe.comparator);function qr(){return nC}const kE=new tt(pe.comparator);function el(...n){let e=kE;for(const t of n)e=e.insert(t.key,t);return e}function NE(n){let e=kE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function vs(){return al()}function xE(){return al()}function al(){return new Ns((n=>n.toString()),((n,e)=>n.isEqual(e)))}const rC=new tt(pe.comparator),iC=new Et(pe.comparator);function Ne(...n){let e=iC;for(const t of n)e=e.add(t);return e}const sC=new Et(Ae);function oC(){return sC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kc(e)?"-0":e}}function DE(n){return{integerValue:""+n}}function aC(n,e){return V1(e)?DE(e):np(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this._=void 0}}function lC(n,e,t){return n instanceof El?(function(o,l){const c={fields:{[pE]:{stringValue:fE},[gE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Jf(l)&&(l=Xc(l)),l&&(c.fields[mE]=l),{mapValue:c}})(t,e):n instanceof wl?VE(n,e):n instanceof Tl?LE(n,e):(function(o,l){const c=OE(o,l),f=l_(c)+l_(o.Ee);return mf(c)&&mf(o.Ee)?DE(f):np(o.serializer,f)})(n,e)}function uC(n,e,t){return n instanceof wl?VE(n,e):n instanceof Tl?LE(n,e):t}function OE(n,e){return n instanceof Oc?(function(i){return mf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class El extends Zc{}class wl extends Zc{constructor(e){super(),this.elements=e}}function VE(n,e){const t=bE(e);for(const i of n.elements)t.some((o=>mr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Tl extends Zc{constructor(e){super(),this.elements=e}}function LE(n,e){let t=bE(e);for(const i of n.elements)t=t.filter((o=>!mr(o,i)));return{arrayValue:{values:t}}}class Oc extends Zc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function l_(n){return lt(n.integerValue||n.doubleValue)}function bE(n){return Yf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,t){this.field=e,this.transform=t}}function hC(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof wl&&o instanceof wl||i instanceof Tl&&o instanceof Tl?jo(i.elements,o.elements,mr):i instanceof Oc&&o instanceof Oc?mr(i.Ee,o.Ee):i instanceof El&&o instanceof El})(n.transform,e.transform)}class dC{constructor(e,t){this.version=e,this.transformResults=t}}class Wn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class eh{}function ME(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new rp(n.key,Wn.none()):new Dl(n.key,n.data,Wn.none());{const t=n.data,i=Rn.empty();let o=new Et(Ot.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new xs(n.key,i,new qn(o.toArray()),Wn.none())}}function fC(n,e,t){n instanceof Dl?(function(o,l,c){const f=o.value.clone(),p=c_(o.fieldTransforms,l,c.transformResults);f.setAll(p),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof xs?(function(o,l,c){if(!gc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=c_(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(UE(o)),p.setAll(f),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function ll(n,e,t,i){return n instanceof Dl?(function(l,c,f,p){if(!gc(l.precondition,c))return f;const y=l.value.clone(),E=h_(l.fieldTransforms,p,c);return y.setAll(E),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof xs?(function(l,c,f,p){if(!gc(l.precondition,c))return f;const y=h_(l.fieldTransforms,p,c),E=c.data;return E.setAll(UE(l)),E.setAll(y),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,c,f){return gc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function pC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=OE(i.transform,o||null);l!=null&&(t===null&&(t=Rn.empty()),t.set(i.field,l))}return t||null}function u_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&jo(i,o,((l,c)=>hC(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Dl extends eh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class xs extends eh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function UE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function c_(n,e,t){const i=new Map;Fe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);i.set(l.field,uC(c,f,t[o]))}return i}function h_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,lC(l,c,e))}return i}class rp extends eh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mC extends eh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&fC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ll(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ll(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=xE();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const p=ME(c,f);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Te.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,((t,i)=>u_(t,i)))&&jo(this.baseMutations,e.baseMutations,((t,i)=>u_(t,i)))}}class ip{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return rC})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new ip(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Ve;function vC(n){switch(n){case W.OK:return ve(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return ve(15467,{code:n})}}function FE(n){if(n===void 0)return Br("GRPC error has no .code"),W.UNKNOWN;switch(n){case ht.OK:return W.OK;case ht.CANCELLED:return W.CANCELLED;case ht.UNKNOWN:return W.UNKNOWN;case ht.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ht.INTERNAL:return W.INTERNAL;case ht.UNAVAILABLE:return W.UNAVAILABLE;case ht.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ht.NOT_FOUND:return W.NOT_FOUND;case ht.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ht.ABORTED:return W.ABORTED;case ht.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ht.DATA_LOSS:return W.DATA_LOSS;default:return ve(39323,{code:n})}}(Ve=ht||(ht={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=new Pi([4294967295,4294967295],0);function d_(n){const e=aE().encode(n),t=new Zv;return t.update(e),new Uint8Array(t.digest())}function f_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Pi([t,i],0),new Pi([o,l],0)]}class sp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new tl(`Invalid padding: ${t}`);if(i<0)throw new tl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new tl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new tl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Pi.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Pi.fromNumber(i)));return o.compare(EC)===1&&(o=new Pi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=d_(e),[i,o]=f_(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);if(!this.ye(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new sp(l,o,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.fe===0)return;const t=d_(e),[i,o]=f_(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);this.we(c)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class tl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Ol.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new th(Te.min(),o,new tt(Ae),qr(),Ne())}}class Ol{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ol(i,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class jE{constructor(e,t){this.targetId=e,this.De=t}}class zE{constructor(e,t,i=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class p_{constructor(){this.ve=0,this.Ce=m_(),this.Fe=Vt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),t=Ne(),i=Ne();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ve(38017,{changeType:l})}})),new Ol(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=m_()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class wC{constructor(e){this.We=e,this.Ge=new Map,this.ze=qr(),this.je=sc(),this.Je=sc(),this.He=new tt(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(yf(l))if(i===0){const c=new pe(l.path);this.Xe(t,c,$t.newNoDocument(c,Te.min()))}else Fe(i===1,20013,{expectedCount:i});else{const c=this.ot(t);if(c!==i){const f=this._t(e),p=f?this.ut(f,e,c):1;if(p!==0){this.rt(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=Vi(i).toUint8Array()}catch(p){if(p instanceof dE)return xi("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new sp(c,o,l)}catch(p){return xi(p instanceof tl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.We.lt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,c)=>{const f=this.st(c);if(f){if(l.current&&yf(f.target)){const p=new pe(f.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,$t.newNoDocument(p,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}}));let i=Ne();this.Je.forEach(((l,c)=>{let f=!0;c.forEachWhile((p=>{const y=this.st(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,c)=>c.setReadTime(e)));const o=new th(e,t,this.He,this.ze,i);return this.ze=qr(),this.je=sc(),this.Je=sc(),this.He=new tt(Ae),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new p_,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Et(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Et(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new p_),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function sc(){return new tt(pe.comparator)}function m_(){return new tt(pe.comparator)}const TC={asc:"ASCENDING",desc:"DESCENDING"},IC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SC={and:"AND",or:"OR"};class AC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ef(n,e){return n.useProto3Json||Qc(e)?e:{value:e}}function Vc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function RC(n,e){return Vc(n,e.toTimestamp())}function dr(n){return Fe(!!n,49232),Te.fromTimestamp((function(t){const i=Oi(t);return new Qe(i.seconds,i.nanos)})(n))}function op(n,e){return wf(n,e).canonicalString()}function wf(n,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function $E(n){const e=He.fromString(n);return Fe(GE(e),10190,{key:e.toString()}),e}function Tf(n,e){return op(n.databaseId,e.path)}function Wd(n,e){const t=$E(e);if(t.get(1)!==n.databaseId.projectId)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(WE(t))}function qE(n,e){return op(n.databaseId,e)}function CC(n){const e=$E(n);return e.length===4?He.emptyPath():WE(e)}function If(n){return new He(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function WE(n){return Fe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function g_(n,e,t){return{name:Tf(n,e),fields:t.value.mapValue.fields}}function PC(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ve(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,E){return y.useProto3Json?(Fe(E===void 0||typeof E=="string",58123),Vt.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Vt.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(y){const E=y.code===void 0?W.UNKNOWN:FE(y.code);return new se(E,y.message||"")})(c);t=new zE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Wd(n,i.document.name),l=dr(i.document.updateTime),c=i.document.createTime?dr(i.document.createTime):Te.min(),f=new Rn({mapValue:{fields:i.document.fields}}),p=$t.newFoundDocument(o,l,c,f),y=i.targetIds||[],E=i.removedTargetIds||[];t=new yc(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Wd(n,i.document),l=i.readTime?dr(i.readTime):Te.min(),c=$t.newNoDocument(o,l),f=i.removedTargetIds||[];t=new yc([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Wd(n,i.document),l=i.removedTargetIds||[];t=new yc([],l,o,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new _C(o,l),f=i.targetId;t=new jE(f,c)}}return t}function kC(n,e){let t;if(e instanceof Dl)t={update:g_(n,e.key,e.value)};else if(e instanceof rp)t={delete:Tf(n,e.key)};else if(e instanceof xs)t={update:g_(n,e.key,e.data),updateMask:UC(e.fieldMask)};else{if(!(e instanceof mC))return ve(16599,{Rt:e.type});t={verify:Tf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof El)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof wl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Tl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Oc)return{fieldPath:c.field.canonicalString(),increment:f.Ee};throw ve(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:RC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)})(n,e.precondition)),t}function NC(n,e){return n&&n.length>0?(Fe(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?dr(o.updateTime):dr(l);return c.isEqual(Te.min())&&(c=dr(l)),new dC(c,o.transformResults||[])})(t,e)))):[]}function xC(n,e){return{documents:[qE(n,e.path)]}}function DC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=qE(n,o);const l=(function(y){if(y.length!==0)return KE(Kn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((E=>(function(I){return{field:xo(I.field),direction:LC(I.dir)}})(E)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=Ef(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function OC(n){let e=CC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(T){const I=HE(T);return I instanceof Kn&&TE(I)?I.getFilters():[I]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((I=>(function(B){return new vl(Do(B.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,Qc(I)?null:I})(t.limit));let p=null;t.startAt&&(p=(function(T){const I=!!T.before,V=T.values||[];return new Dc(V,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const I=!T.before,V=T.values||[];return new Dc(V,I)})(t.endAt)),Y1(e,o,c,l,f,"F",p,y)}function VC(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function HE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Do(t.unaryFilter.field);return dt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Do(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Do(t.unaryFilter.field);return dt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Do(t.unaryFilter.field);return dt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(n):n.fieldFilter!==void 0?(function(t){return dt.create(Do(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Kn.create(t.compositeFilter.filters.map((i=>HE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(n):ve(30097,{filter:n})}function LC(n){return TC[n]}function bC(n){return IC[n]}function MC(n){return SC[n]}function xo(n){return{fieldPath:n.canonicalString()}}function Do(n){return Ot.fromServerFormat(n.fieldPath)}function KE(n){return n instanceof dt?(function(t){if(t.op==="=="){if(r_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NAN"}};if(n_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(r_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NAN"}};if(n_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xo(t.field),op:bC(t.op),value:t.value}}})(n):n instanceof Kn?(function(t){const i=t.getFilters().map((o=>KE(o)));return i.length===1?i[0]:{compositeFilter:{op:MC(t.op),filters:i}}})(n):ve(54877,{filter:n})}function UC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function GE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,i,o,l=Te.min(),c=Te.min(),f=Vt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.gt=e}}function jC(n){const e=OC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this.Dn=new BC}addToCollectionParentIndex(e,t){return this.Dn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Di.min())}updateCollectionGroup(e,t,i){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class BC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Et(He.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Et(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},QE=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(QE,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new $o(0)}static ur(){return new $o(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="LruGarbageCollector",$C=1048576;function v_([n,e],[t,i]){const o=Ae(n,t);return o===0?Ae(e,i):o}class qC{constructor(e){this.Tr=e,this.buffer=new Et(v_),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();v_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class WC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ae(__,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Jo(t)?ae(__,"Ignoring IndexedDB error during garbage collection: ",t):await Xo(t)}await this.Rr(3e5)}))}}class HC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(Gc.ue);const i=new qC(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(y_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),y_):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,c,f,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(y=Date.now(),ko()<=ke.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${o} in `+(f-c)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function KC(n,e){return new HC(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.changes=new Ns((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?H.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&ll(i.mutation,o,qn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const o=vs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=el();return l.forEach(((f,p)=>{c=c.insert(f,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=vs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,o){let l=qr();const c=al(),f=(function(){return al()})();return t.forEach(((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof xs)?l=l.insert(y.key,y):E!==void 0?(c.set(y.key,E.mutation.getFieldMask()),ll(E.mutation,y,E.mutation.getFieldMask(),Qe.now())):c.set(y.key,qn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,E)=>c.set(y,E))),t.forEach(((y,E)=>{var T;return f.set(y,new QC(E,(T=c.get(y))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=al();let o=new tt(((c,f)=>c-f)),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||qn.empty();E=f.applyToLocalView(y,E),i.set(p,E);const T=(o.get(f.batchId)||Ne()).add(p);o=o.insert(f.batchId,T)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,E=p.value,T=xE();E.forEach((I=>{if(!l.has(I)){const V=ME(t.get(I),i.get(I));V!==null&&T.set(I,V),l=l.add(I)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return H.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return pe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):RE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):H.resolve(vs());let f=ml,p=l;return c.next((y=>H.forEach(y,((E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((I=>{p=p.insert(E,I)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,Ne()))).next((E=>({batchId:f,changes:NE(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((i=>{let o=el();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=el();return this.indexManager.getCollectionParents(e,l).next((f=>H.forEach(f,(p=>{const y=(function(T,I){return new Yo(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((E=>{E.forEach(((T,I)=>{c=c.insert(T,I)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((p,y)=>{const E=y.getKey();c.get(E)===null&&(c=c.insert(E,$t.newInvalidDocument(E)))}));let f=el();return c.forEach(((p,y)=>{const E=l.get(p);E!==void 0&&ll(E.mutation,y,qn.empty(),Qe.now()),Yc(t,y)&&(f=f.insert(p,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return H.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:dr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:jC(o.bundledQuery),readTime:dr(o.readTime)}})(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.overlays=new tt(pe.comparator),this.kr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const i=vs();return H.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),H.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),H.resolve()}getOverlaysForCollection(e,t,i){const o=vs(),l=t.length+1,c=new pe(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt(((y,E)=>y-E));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=vs(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const f=vs(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,E)=>f.set(y,E))),!(f.size()>=o)););return H.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new yC(t,i));let l=this.kr.get(t);l===void 0&&(l=Ne(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.qr=new Et(Ct.Qr),this.$r=new Et(Ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Ct(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new pe(new He([])),i=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.$r.forEachInRange([i,o],(c=>{this.Wr(c),l.push(c.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new He([])),i=new Ct(t,e),o=new Ct(t,e+1);let l=Ne();return this.$r.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Ct(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Et(Ct.Qr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new gC(l,t,i,o);this.mutationQueue.push(c);for(const f of o)this.Yr=this.Yr.add(new Ct(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return H.resolve(c)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Xf:this.er-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(c=>{const f=this.Zr(c.Hr);l.push(f)})),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Et(Ae);return t.forEach((o=>{const l=new Ct(o,0),c=new Ct(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],(f=>{i=i.add(f.Hr)}))})),H.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const c=new Ct(new pe(l),0);let f=new Et(Ae);return this.Yr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.Hr)),!0)}),c),H.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return H.forEach(t.mutations,(o=>{const l=new Ct(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Ct(t,0),o=this.Yr.firstAfterOrEqual(i);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.ni=e,this.docs=(function(){return new tt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return H.resolve(i?i.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let i=qr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():$t.newInvalidDocument(o))})),H.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=qr();const c=t.path,f=new pe(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||N1(k1(E),i)<=0||(o.has(E.key)||Yc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ve(9500)}ri(e,t){return H.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new nP(this)}getSize(e){return H.resolve(this.size)}}class nP extends GC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),H.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.persistence=e,this.ii=new Ns((t=>Zf(t)),ep),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.si=0,this.oi=new ap,this.targetCount=0,this._i=$o.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),H.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new $o(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.hr(t),H.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),H.waitFor(l).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return H.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),H.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return H.resolve(i)}containsKey(e,t){return H.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,t){this.ai={},this.overlays={},this.ui=new Gc(0),this.ci=!1,this.ci=!0,this.li=new ZC,this.referenceDelegate=e(this),this.hi=new rP(this),this.indexManager=new zC,this.remoteDocumentCache=(function(o){return new tP(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new FC(t),this.Ti=new JC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new YC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new eP(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new iP(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return H.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class iP extends D1{constructor(e){super(),this.currentSequenceNumber=e}}class lp{constructor(e){this.persistence=e,this.Ai=new ap,this.Ri=null}static Vi(e){return new lp(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),H.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.mi,(i=>{const o=pe.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return H.or([()=>H.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Lc{constructor(e,t){this.persistence=e,this.gi=new Ns((i=>L1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=KC(this,t)}static Vi(e,t){return new Lc(e,t)}Ii(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return H.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?H.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(c=>this.Sr(e,c,t).next((f=>{f||(i++,l.removeEntry(c,Te.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),H.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=pc(e.data.value)),t}Sr(e,t,i){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return H.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new up(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return FI()?8:O1(qt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new sP;return this.ws(e,t,c).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,c,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(ko()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",No(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(ko()<=ke.DEBUG&&ae("QueryEngine","Query:",No(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(ko()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",No(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hr(t))):H.resolve())}ps(e,t){if(a_(t))return H.resolve(null);let i=hr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=vf(t,null,"F"),i=hr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Ne(...l);return this.gs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.bs(t,f);return this.Ds(t,y,c,p.readTime)?this.ps(e,vf(t,null,"F")):this.vs(e,y,t,p)}))))})))))}ys(e,t,i,o){return a_(t)||o.isEqual(Te.min())?H.resolve(null):this.gs.getDocuments(e,i).next((l=>{const c=this.bs(t,l);return this.Ds(t,c,i,o)?H.resolve(null):(ko()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),No(t)),this.vs(e,c,t,P1(o,ml)).next((f=>f)))}))}bs(e,t){let i=new Et(PE(e));return t.forEach(((o,l)=>{Yc(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return ko()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",No(t)),this.gs.getDocumentsMatchingQuery(e,t,Di.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="LocalStore",aP=3e8;class lP{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new tt(Ae),this.Ms=new Ns((l=>Zf(l)),ep),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function uP(n,e,t,i){return new lP(n,e,t,i)}async function JE(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let p=Ne();for(const y of o){c.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Bs:y,removedBatchIds:c,addedBatchIds:f})))}))}))}function cP(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,p,y,E){const T=y.batch,I=T.keys();let V=H.resolve();return I.forEach((B=>{V=V.next((()=>E.getEntry(p,B))).next((q=>{const L=y.docVersions.get(B);Fe(L!==null,48541),q.version.compareTo(L)<0&&(T.applyToRemoteDocument(q,y),q.isValidDocument()&&(q.setReadTime(y.commitVersion),E.addEntry(q)))}))})),V.next((()=>f.mutationQueue.removeMutationBatch(p,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=Ne();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function YE(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function hP(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((E,T)=>{const I=o.get(T);if(!I)return;f.push(t.hi.removeMatchingKeys(l,E.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,E.addedDocuments,T))));let V=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?V=V.withResumeToken(Vt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):E.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(E.resumeToken,i)),o=o.insert(T,V),(function(q,L,ie){return q.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=aP?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0})(I,V,E)&&f.push(t.hi.updateTargetData(l,V))}));let p=qr(),y=Ne();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(dP(l,c,e.documentUpdates).next((E=>{p=E.Ls,y=E.ks}))),!i.isEqual(Te.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(E)}return H.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.Fs=o,l)))}function dP(n,e,t){let i=Ne(),o=Ne();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=qr();return t.forEach(((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):ae(cp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)})),{Ls:c,ks:o}}))}function fP(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Xf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function pP(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,H.resolve(o)):t.hi.allocateTargetId(i).next((c=>(o=new Si(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function Sf(n,e,t){const i=Ie(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!Jo(c))throw c;ae(cp,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function E_(n,e,t){const i=Ie(n);let o=Te.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,y,E){const T=Ie(p),I=T.Ms.get(E);return I!==void 0?H.resolve(T.Fs.get(I)):T.hi.getTargetData(y,E)})(i,c,hr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(c,f.targetId).next((p=>{l=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:Te.min(),t?l:Ne()))).next((f=>(mP(i,eC(e),f),{documents:f,qs:l})))))}function mP(n,e,t){let i=n.xs.get(e)||Te.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class w_{constructor(){this.activeTargetIds=oC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gP{constructor(){this.Fo=new w_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new w_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="ConnectivityMonitor";class I_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ae(T_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ae(T_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc=null;function Af(){return oc===null?oc=(function(){return 268435456+Math.round(2147483648*Math.random())})():oc++,"0x"+oc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="RestConnection",_P={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===Nc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const c=Af(),f=this.Go(e,t.toUriEncodedString());ae(Hd,`Sending RPC '${e}' ${c}:`,f,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,l);const{host:y}=new URL(f),E=Fi(y);return this.jo(e,f,p,i,E).then((T=>(ae(Hd,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw xi(Hd,`RPC '${e}' ${c} failed with error: `,T,"url: ",f,"request:",i),T}))}Jo(e,t,i,o,l,c){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Qo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=_P[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="WebChannelConnection";class wP extends vP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const c=Af();return new Promise(((f,p)=>{const y=new eE;y.setWithCredentials(!0),y.listenOnce(tE.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case fc.NO_ERROR:const T=y.getResponseJson();ae(zt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),f(T);break;case fc.TIMEOUT:ae(zt,`RPC '${e}' ${c} timed out`),p(new se(W.DEADLINE_EXCEEDED,"Request time out"));break;case fc.HTTP_ERROR:const I=y.getStatus();if(ae(zt,`RPC '${e}' ${c} failed with status:`,I,"response text:",y.getResponseText()),I>0){let V=y.getResponseJson();Array.isArray(V)&&(V=V[0]);const B=V==null?void 0:V.error;if(B&&B.status&&B.message){const q=(function(ie){const Z=ie.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(Z)>=0?Z:W.UNKNOWN})(B.status);p(new se(q,B.message))}else p(new se(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new se(W.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:c,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{ae(zt,`RPC '${e}' ${c} completed.`)}}));const E=JSON.stringify(o);ae(zt,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",E,i,15)}))}P_(e,t,i){const o=Af(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=iE(),f=rE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");ae(zt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=c.createWebChannel(E,p);this.T_(T);let I=!1,V=!1;const B=new EP({Ho:L=>{V?ae(zt,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(I||(ae(zt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ae(zt,`RPC '${e}' stream ${o} sending:`,L),T.send(L))},Yo:()=>T.close()}),q=(L,ie,Z)=>{L.listen(ie,(ee=>{try{Z(ee)}catch(re){setTimeout((()=>{throw re}),0)}}))};return q(T,Za.EventType.OPEN,(()=>{V||(ae(zt,`RPC '${e}' stream ${o} transport opened.`),B.s_())})),q(T,Za.EventType.CLOSE,(()=>{V||(V=!0,ae(zt,`RPC '${e}' stream ${o} transport closed`),B.__(),this.I_(T))})),q(T,Za.EventType.ERROR,(L=>{V||(V=!0,xi(zt,`RPC '${e}' stream ${o} transport errored. Name:`,L.name,"Message:",L.message),B.__(new se(W.UNAVAILABLE,"The operation could not be completed")))})),q(T,Za.EventType.MESSAGE,(L=>{var ie;if(!V){const Z=L.data[0];Fe(!!Z,16349);const ee=Z,re=(ee==null?void 0:ee.error)||((ie=ee[0])===null||ie===void 0?void 0:ie.error);if(re){ae(zt,`RPC '${e}' stream ${o} received error:`,re);const Re=re.status;let we=(function(C){const k=ht[C];if(k!==void 0)return FE(k)})(Re),N=re.message;we===void 0&&(we=W.INTERNAL,N="Unknown error status: "+Re+" with message "+re.message),V=!0,B.__(new se(we,N)),T.close()}else ae(zt,`RPC '${e}' stream ${o} received:`,Z),B.a_(Z)}})),q(f,nE.STAT_EVENT,(L=>{L.stat===df.PROXY?ae(zt,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===df.NOPROXY&&ae(zt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{B.o_()}),0),B}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Kd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n){return new AC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="PersistentStream";class ew{constructor(e,t,i,o,l,c,f,p){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ZE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new se(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ae(S_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ae(S_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class TP extends ew{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=PC(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Te.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Te.min():c.readTime?dr(c.readTime):Te.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=If(this.serializer),t.addTarget=(function(l,c){let f;const p=c.target;if(f=yf(p)?{documents:xC(l,p)}:{query:DC(l,p).Vt},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=BE(l,c.resumeToken);const y=Ef(l,c.expectedCount);y!==null&&(f.expectedCount=y)}else if(c.snapshotVersion.compareTo(Te.min())>0){f.readTime=Vc(l,c.snapshotVersion.toTimestamp());const y=Ef(l,c.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=VC(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=If(this.serializer),t.removeTarget=e,this.k_(t)}}class IP extends ew{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=NC(e.writeResults,e.commitTime),i=dr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=If(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>kC(this.serializer,i)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{}class AP extends SP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,wf(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new se(W.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Jo(e,wf(t,i),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new se(W.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class RP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Br(t),this._a=!1):ae("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="RemoteStore";class CP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((c=>{i.enqueueAndForget((async()=>{Ds(this)&&(ae(Rs,"Restarting streams for network reachability change."),await(async function(p){const y=Ie(p);y.Ia.add(4),await Vl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await rh(y)})(this))}))})),this.Aa=new RP(i,o)}}async function rh(n){if(Ds(n))for(const e of n.da)await e(!0)}async function Vl(n){for(const e of n.da)await e(!1)}function tw(n,e){const t=Ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),pp(t)?fp(t):Zo(t).x_()&&dp(t,e))}function hp(n,e){const t=Ie(n),i=Zo(t);t.Ta.delete(e),i.x_()&&nw(t,e),t.Ta.size===0&&(i.x_()?i.B_():Ds(t)&&t.Aa.set("Unknown"))}function dp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Zo(n).H_(e)}function nw(n,e){n.Ra.$e(e),Zo(n).Y_(e)}function fp(n){n.Ra=new wC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Zo(n).start(),n.Aa.aa()}function pp(n){return Ds(n)&&!Zo(n).M_()&&n.Ta.size>0}function Ds(n){return Ie(n).Ia.size===0}function rw(n){n.Ra=void 0}async function PP(n){n.Aa.set("Online")}async function kP(n){n.Ta.forEach(((e,t)=>{dp(n,e)}))}async function NP(n,e){rw(n),pp(n)?(n.Aa.la(e),fp(n)):n.Aa.set("Unknown")}async function xP(n,e,t){if(n.Aa.set("Online"),e instanceof zE&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.Ta.delete(f),o.Ra.removeTarget(f))})(n,e)}catch(i){ae(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await bc(n,i)}else if(e instanceof yc?n.Ra.Ye(e):e instanceof jE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Te.min()))try{const i=await YE(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.Ra.Pt(c);return f.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.Ta.get(y);E&&l.Ta.set(y,E.withResumeToken(p.resumeToken,c))}})),f.targetMismatches.forEach(((p,y)=>{const E=l.Ta.get(p);if(!E)return;l.Ta.set(p,E.withResumeToken(Vt.EMPTY_BYTE_STRING,E.snapshotVersion)),nw(l,p);const T=new Si(E.target,p,y,E.sequenceNumber);dp(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){ae(Rs,"Failed to raise snapshot:",i),await bc(n,i)}}async function bc(n,e,t){if(!Jo(e))throw e;n.Ia.add(1),await Vl(n),n.Aa.set("Offline"),t||(t=()=>YE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ae(Rs,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await rh(n)}))}function iw(n,e){return e().catch((t=>bc(n,t,e)))}async function ih(n){const e=Ie(n),t=bi(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Xf;for(;DP(e);)try{const o=await fP(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,OP(e,o)}catch(o){await bc(e,o)}sw(e)&&ow(e)}function DP(n){return Ds(n)&&n.Pa.length<10}function OP(n,e){n.Pa.push(e);const t=bi(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function sw(n){return Ds(n)&&!bi(n).M_()&&n.Pa.length>0}function ow(n){bi(n).start()}async function VP(n){bi(n).na()}async function LP(n){const e=bi(n);for(const t of n.Pa)e.X_(t.mutations)}async function bP(n,e,t){const i=n.Pa.shift(),o=ip.from(i,e,t);await iw(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ih(n)}async function MP(n,e){e&&bi(n).Z_&&await(async function(i,o){if((function(c){return vC(c)&&c!==W.ABORTED})(o.code)){const l=i.Pa.shift();bi(i).N_(),await iw(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await ih(i)}})(n,e),sw(n)&&ow(n)}async function A_(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),ae(Rs,"RemoteStore received new credentials");const i=Ds(t);t.Ia.add(3),await Vl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await rh(t)}async function UP(n,e){const t=Ie(n);e?(t.Ia.delete(2),await rh(t)):e||(t.Ia.add(2),await Vl(t),t.Aa.set("Unknown"))}function Zo(n){return n.Va||(n.Va=(function(t,i,o){const l=Ie(t);return l.ia(),new TP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:PP.bind(null,n),e_:kP.bind(null,n),n_:NP.bind(null,n),J_:xP.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),pp(n)?fp(n):n.Aa.set("Unknown")):(await n.Va.stop(),rw(n))}))),n.Va}function bi(n){return n.ma||(n.ma=(function(t,i,o){const l=Ie(t);return l.ia(),new IP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:VP.bind(null,n),n_:MP.bind(null,n),ea:LP.bind(null,n),ta:bP.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await ih(n)):(await n.ma.stop(),n.Pa.length>0&&(ae(Rs,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,f=new mp(e,t,c,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gp(n,e){if(Br("AsyncQueue",`${e}: ${n}`),Jo(n))return new se(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{static emptySet(e){return new Mo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=el(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Mo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.fa=new tt(pe.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ve(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class qo{constructor(e,t,i,o,l,c,f,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new qo(e,t,Mo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class jP{constructor(){this.queries=C_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=C_(),l.forEach(((c,f)=>{for(const p of f.wa)p.onError(i)}))})(this,new se(W.ABORTED,"Firestore shutting down"))}}function C_(){return new Ns((n=>CE(n)),Jc)}async function aw(n,e){const t=Ie(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new FP,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=gp(c,`Initialization of query '${No(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&yp(t)}async function lw(n,e){const t=Ie(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function zP(n,e){const t=Ie(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.wa)f.Ca(o)&&(i=!0);c.ya=o}}i&&yp(t)}function BP(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function yp(n){n.Da.forEach((e=>{e.next()}))}var Rf,P_;(P_=Rf||(Rf={})).Fa="default",P_.Cache="cache";class uw{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new qo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Rf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.key=e}}class hw{constructor(e){this.key=e}}class $P{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=PE(e),this.eu=new Mo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new R_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const I=o.get(E),V=Yc(this.query,T)?T:null,B=!!I&&this.mutatedKeys.has(I.key),q=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let L=!1;I&&V?I.data.isEqual(V.data)?B!==q&&(i.track({type:3,doc:V}),L=!0):this.iu(I,V)||(i.track({type:2,doc:V}),L=!0,(p&&this.Xa(V,p)>0||y&&this.Xa(V,y)<0)&&(f=!0)):!I&&V?(i.track({type:0,doc:V}),L=!0):I&&!V&&(i.track({type:1,doc:I}),L=!0,(p||y)&&(f=!0)),L&&(V?(c=c.add(V),l=q?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{eu:c,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((E,T)=>(function(V,B){const q=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:L})}};return q(V)-q(B)})(E.type,T.type)||this.Xa(E.doc,T.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,y=p!==this.Ya;return this.Ya=p,c.length!==0||y?{snapshot:new qo(this.query,e.eu,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new R_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new hw(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new cw(i))})),t}uu(e){this.Ha=e.qs,this.Za=Ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return qo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const _p="SyncEngine";class qP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class WP{constructor(e){this.key=e,this.lu=!1}}class HP{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new Ns((f=>CE(f)),Jc),this.Tu=new Map,this.Iu=new Set,this.du=new tt(pe.comparator),this.Eu=new Map,this.Au=new ap,this.Ru={},this.Vu=new Map,this.mu=$o.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function KP(n,e,t=!0){const i=yw(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await dw(i,e,t,!0),o}async function GP(n,e){const t=yw(n);await dw(t,e,!0,!1)}async function dw(n,e,t,i){const o=await pP(n.localStore,hr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await QP(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&tw(n.remoteStore,o),f}async function QP(n,e,t,i,o){n.gu=(T,I,V)=>(async function(q,L,ie,Z){let ee=L.view.nu(ie);ee.Ds&&(ee=await E_(q.localStore,L.query,!1).then((({documents:N})=>L.view.nu(N,ee))));const re=Z&&Z.targetChanges.get(L.targetId),Re=Z&&Z.targetMismatches.get(L.targetId)!=null,we=L.view.applyChanges(ee,q.isPrimaryClient,re,Re);return N_(q,L.targetId,we._u),we.snapshot})(n,T,I,V);const l=await E_(n.localStore,e,!0),c=new $P(e,l.qs),f=c.nu(l.documents),p=Ol.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(f,n.isPrimaryClient,p);N_(n,t,y._u);const E=new qP(e,t,c);return n.Pu.set(e,E),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function XP(n,e,t){const i=Ie(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((c=>!Jc(c,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Sf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&hp(i.remoteStore,o.targetId),Cf(i,o.targetId)})).catch(Xo)):(Cf(i,o.targetId),await Sf(i.localStore,o.targetId,!0))}async function JP(n,e){const t=Ie(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),hp(t.remoteStore,i.targetId))}async function YP(n,e,t){const i=sk(n);try{const o=await(function(c,f){const p=Ie(c),y=Qe.now(),E=f.reduce(((V,B)=>V.add(B.key)),Ne());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let B=qr(),q=Ne();return p.Os.getEntries(V,E).next((L=>{B=L,B.forEach(((ie,Z)=>{Z.isValidDocument()||(q=q.add(ie))}))})).next((()=>p.localDocuments.getOverlayedDocuments(V,B))).next((L=>{T=L;const ie=[];for(const Z of f){const ee=pC(Z,T.get(Z.key).overlayedDocument);ee!=null&&ie.push(new xs(Z.key,ee,vE(ee.value.mapValue),Wn.exists(!0)))}return p.mutationQueue.addMutationBatch(V,y,ie,f)})).next((L=>{I=L;const ie=L.applyToLocalDocumentSet(T,q);return p.documentOverlayCache.saveOverlays(V,L.batchId,ie)}))})).then((()=>({batchId:I.batchId,changes:NE(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,f,p){let y=c.Ru[c.currentUser.toKey()];y||(y=new tt(Ae)),y=y.insert(f,p),c.Ru[c.currentUser.toKey()]=y})(i,o.batchId,t),await Ll(i,o.changes),await ih(i.remoteStore)}catch(o){const l=gp(o,"Failed to persist write");t.reject(l)}}async function fw(n,e){const t=Ie(n);try{const i=await hP(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Eu.get(l);c&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.lu=!0:o.modifiedDocuments.size>0?Fe(c.lu,14607):o.removedDocuments.size>0&&(Fe(c.lu,42227),c.lu=!1))})),await Ll(t,i,e)}catch(i){await Xo(i)}}function k_(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const p=Ie(c);p.onlineState=f;let y=!1;p.queries.forEach(((E,T)=>{for(const I of T.wa)I.va(f)&&(y=!0)})),y&&yp(p)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function ZP(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let c=new tt(pe.comparator);c=c.insert(l,$t.newNoDocument(l,Te.min()));const f=Ne().add(l),p=new th(Te.min(),new Map,new tt(Ae),c,f);await fw(i,p),i.du=i.du.remove(l),i.Eu.delete(e),vp(i)}else await Sf(i.localStore,e,!1).then((()=>Cf(i,e,t))).catch(Xo)}async function ek(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await cP(t.localStore,e);mw(t,i,null),pw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Ll(t,o)}catch(o){await Xo(o)}}async function tk(n,e,t){const i=Ie(n);try{const o=await(function(c,f){const p=Ie(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let E;return p.mutationQueue.lookupMutationBatch(y,f).next((T=>(Fe(T!==null,37113),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E))).next((()=>p.localDocuments.getDocuments(y,E)))}))})(i.localStore,e);mw(i,e,t),pw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Ll(i,o)}catch(o){await Xo(o)}}function pw(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function mw(n,e,t){const i=Ie(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Cf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||gw(n,i)}))}function gw(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(hp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),vp(n))}function N_(n,e,t){for(const i of t)i instanceof cw?(n.Au.addReference(i.key,e),nk(n,i)):i instanceof hw?(ae(_p,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||gw(n,i.key)):ve(19791,{yu:i})}function nk(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(ae(_p,"New document in limbo: "+t),n.Iu.add(i),vp(n))}function vp(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new pe(He.fromString(e)),i=n.mu.next();n.Eu.set(i,new WP(t)),n.du=n.du.insert(t,i),tw(n.remoteStore,new Si(hr(tp(t.path)),i,"TargetPurposeLimboResolution",Gc.ue))}}async function Ll(n,e,t){const i=Ie(n),o=[],l=[],c=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,p)=>{c.push(i.gu(p,e,t).then((y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=up.Es(p.targetId,y);l.push(T)}})))})),await Promise.all(c),i.hu.J_(o),await(async function(p,y){const E=Ie(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>H.forEach(y,(I=>H.forEach(I.Is,(V=>E.persistence.referenceDelegate.addReference(T,I.targetId,V))).next((()=>H.forEach(I.ds,(V=>E.persistence.referenceDelegate.removeReference(T,I.targetId,V)))))))))}catch(T){if(!Jo(T))throw T;ae(cp,"Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const V=E.Fs.get(I),B=V.snapshotVersion,q=V.withLastLimboFreeSnapshotVersion(B);E.Fs=E.Fs.insert(I,q)}}})(i.localStore,l))}async function rk(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){ae(_p,"User change. New user:",e.toKey());const i=await JE(t.localStore,e);t.currentUser=e,(function(l,c){l.Vu.forEach((f=>{f.forEach((p=>{p.reject(new se(W.CANCELLED,c))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ll(t,i.Bs)}}function ik(n,e){const t=Ie(n),i=t.Eu.get(e);if(i&&i.lu)return Ne().add(i.key);{let o=Ne();const l=t.Tu.get(e);if(!l)return o;for(const c of l){const f=t.Pu.get(c);o=o.unionWith(f.view.tu)}return o}}function yw(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ik.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZP.bind(null,e),e.hu.J_=zP.bind(null,e.eventManager),e.hu.pu=BP.bind(null,e.eventManager),e}function sk(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ek.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tk.bind(null,e),e}class Mc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nh(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return uP(this.persistence,new oP,e.initialUser,this.serializer)}Du(e){return new XE(lp.Vi,this.serializer)}bu(e){return new gP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mc.provider={build:()=>new Mc};class ok extends Mc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof Lc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new WC(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new XE((i=>Lc.Vi(i,t)),this.serializer)}}class Pf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>k_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=rk.bind(null,this.syncEngine),await UP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new jP})()}createDatastore(e){const t=nh(e.databaseInfo.databaseId),i=(function(l){return new wP(l)})(e.databaseInfo);return(function(l,c,f,p){return new AP(l,c,f,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,f){return new CP(i,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>k_(this.syncEngine,t,0)),(function(){return I_.C()?new I_:new yP})())}createSyncEngine(e,t){return(function(o,l,c,f,p,y,E){const T=new HP(o,l,c,f,p,y);return E&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ie(o);ae(Rs,"RemoteStore shutting down."),l.Ia.add(5),await Vl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pf.provider={build:()=>new Pf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="FirestoreClient";class ak{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=Qf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{ae(Mi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(ae(Mi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=gp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Gd(n,e){n.asyncQueue.verifyOperationInProgress(),ae(Mi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await JE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{xi("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ae("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{xi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function x_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await lk(n);ae(Mi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>A_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>A_(e.remoteStore,o))),n._onlineComponents=e}async function lk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae(Mi,"Using user provided OfflineComponentProvider");try{await Gd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;xi("Error using user provided cache. Falling back to memory cache: "+t),await Gd(n,new Mc)}}else ae(Mi,"Using default OfflineComponentProvider"),await Gd(n,new ok(void 0));return n._offlineComponents}async function vw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae(Mi,"Using user provided OnlineComponentProvider"),await x_(n,n._uninitializedComponentsProvider._online)):(ae(Mi,"Using default OnlineComponentProvider"),await x_(n,new Pf))),n._onlineComponents}function uk(n){return vw(n).then((e=>e.syncEngine))}async function Ew(n){const e=await vw(n),t=e.eventManager;return t.onListen=KP.bind(null,e.syncEngine),t.onUnlisten=XP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=JP.bind(null,e.syncEngine),t}function ck(n,e,t={}){const i=new Ur;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,y){const E=new _w({next:I=>{E.Ou(),c.enqueueAndForget((()=>lw(l,T)));const V=I.docs.has(f);!V&&I.fromCache?y.reject(new se(W.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&I.fromCache&&p&&p.source==="server"?y.reject(new se(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new uw(tp(f.path),E,{includeMetadataChanges:!0,ka:!0});return aw(l,T)})(await Ew(n),n.asyncQueue,e,t,i))),i.promise}function hk(n,e,t={}){const i=new Ur;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,y){const E=new _w({next:I=>{E.Ou(),c.enqueueAndForget((()=>lw(l,T))),I.fromCache&&p.source==="server"?y.reject(new se(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new uw(f,E,{includeMetadataChanges:!0,ka:!0});return aw(l,T)})(await Ew(n),n.asyncQueue,e,t,i))),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="firestore.googleapis.com",O_=!0;class V_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new se(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Tw,this.ssl=O_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:O_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=QE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$C)throw new se(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}C1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ww((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new V_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new V_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new _1;switch(i.type){case"firstParty":return new T1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new se(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=D_.get(t);i&&(ae("ComponentProvider","Removing Datastore"),D_.delete(t),i.terminate())})(this),Promise.resolve()}}function dk(n,e,t,i={}){var o;n=$r(n,sh);const l=Fi(e),c=n._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(Vf(`https://${p}`),Lf("Firestore",!0)),c.host!==Tw&&c.host!==p&&xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:i});if(!Ts(y,f)&&(n._setSettings(y),i.mockUserToken)){let E,T;if(typeof i.mockUserToken=="string")E=i.mockUserToken,T=Bt.MOCK_USER;else{E=dv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new se(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Bt(I)}n._authCredentials=new v1(new oE(E,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Os(this.firestore,e,this._query)}}class pt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(xl(t,pt._jsonSchema))return new pt(e,i||null,new pe(He.fromString(t.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:ft("string",pt._jsonSchemaVersion),referencePath:ft("string")};class ki extends Os{constructor(e,t,i){super(e,t,tp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new pe(e))}withConverter(e){return new ki(this.firestore,e,this._path)}}function Ep(n,e,...t){if(n=wt(n),lE("collection","path",e),n instanceof sh){const i=He.fromString(e,...t);return Ky(i),new ki(n,null,i)}{if(!(n instanceof pt||n instanceof ki))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return Ky(i),new ki(n.firestore,null,i)}}function bl(n,e,...t){if(n=wt(n),arguments.length===1&&(e=Qf.newId()),lE("doc","path",e),n instanceof sh){const i=He.fromString(e,...t);return Hy(i),new pt(n,null,new pe(i))}{if(!(n instanceof pt||n instanceof ki))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return Hy(i),new pt(n.firestore,n instanceof ki?n.converter:null,new pe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="AsyncQueue";class b_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ZE(this,"async_queue_retry"),this.oc=()=>{const i=Kd();i&&ae(L_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=Kd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Kd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ur;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Jo(e))throw e;ae(L_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Br("INTERNAL UNHANDLED ERROR: ",M_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=mp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ve(47125,{hc:M_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function M_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ea extends sh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new b_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new b_(e),this._firestoreClient=void 0,await e}}}function fk(n,e){const t=typeof n=="object"?n:Uf(),i=typeof n=="string"?n:Nc,o=$c(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=uv("firestore");l&&dk(o,...l)}return o}function wp(n){if(n._terminated)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||pk(n),n._firestoreClient}function pk(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,p,y,E){return new U1(f,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,ww(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new ak(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Vt.fromBase64String(e))}catch(t){throw new se(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Cn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xl(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:ft("string",Cn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fr._jsonSchemaVersion}}static fromJSON(e){if(xl(e,fr._jsonSchema))return new fr(e.latitude,e.longitude)}}fr._jsonSchemaVersion="firestore/geoPoint/1.0",fr._jsonSchema={type:ft("string",fr._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:pr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xl(e,pr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new pr(e.vectorValues);throw new se(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pr._jsonSchemaVersion="firestore/vectorValue/1.0",pr._jsonSchema={type:ft("string",pr._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=/^__.*__$/;class gk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new xs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dl(e,this.data,t,this.fieldTransforms)}}function Iw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:n})}}class Sp{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Sp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Uc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Iw(this.Ec)&&mk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class yk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||nh(e)}Dc(e,t,i,o=!1){return new Sp({Ec:e,methodName:t,bc:i,path:Ot.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ap(n){const e=n._freezeSettings(),t=nh(n._databaseId);return new yk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Sw(n,e,t,i,o,l={}){const c=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);Cw("Data must be an object, but it was:",c,i);const f=Aw(i,c);let p,y;if(l.merge)p=new qn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const I=vk(e,T,t);if(!c.contains(I))throw new se(W.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);wk(E,I)||E.push(I)}p=new qn(E),y=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,y=c.fieldTransforms;return new gk(new Rn(f),p,y)}class Rp extends Ip{_toFieldTransform(e){return new cC(e.path,new El)}isEqual(e){return e instanceof Rp}}function _k(n,e,t,i=!1){return Cp(t,n.Dc(i?4:3,e))}function Cp(n,e){if(Rw(n=wt(n)))return Cw("Unsupported field value:",e,n),Aw(n,e);if(n instanceof Ip)return(function(i,o){if(!Iw(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const f of i){let p=Cp(f,o.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=wt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return aC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Qe.fromDate(i);return{timestampValue:Vc(o.serializer,l)}}if(i instanceof Qe){const l=new Qe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Vc(o.serializer,l)}}if(i instanceof fr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Cn)return{bytesValue:BE(o.serializer,i._byteString)};if(i instanceof pt){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:op(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof pr)return(function(c,f){return{mapValue:{fields:{[yE]:{stringValue:_E},[xc]:{arrayValue:{values:c.toArray().map((y=>{if(typeof y!="number")throw f.wc("VectorValues must only contain numeric values.");return np(f.serializer,y)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Kc(i)}`)})(n,e)}function Aw(n,e){const t={};return hE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(n,((i,o)=>{const l=Cp(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function Rw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Qe||n instanceof fr||n instanceof Cn||n instanceof pt||n instanceof Ip||n instanceof pr)}function Cw(n,e,t){if(!Rw(t)||!uE(t)){const i=Kc(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function vk(n,e,t){if((e=wt(e))instanceof Tp)return e._internalPath;if(typeof e=="string")return Pw(n,e);throw Uc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ek=new RegExp("[~\\*/\\[\\]]");function Pw(n,e,t){if(e.search(Ek)>=0)throw Uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Tp(...e.split("."))._internalPath}catch{throw Uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Uc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new se(W.INVALID_ARGUMENT,f+n+p)}function wk(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Tk extends kw{data(){return super.data()}}function Pp(n,e){return typeof e=="string"?Pw(n,e):e instanceof Tp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kp{}class Nw extends kp{}function Sk(n,e,...t){let i=[];e instanceof kp&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof xp)).length,f=l.filter((p=>p instanceof Np)).length;if(c>1||c>0&&f>0)throw new se(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class Np extends Nw{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Np(e,t,i)}_apply(e){const t=this._parse(e);return xw(e._query,t),new Os(e.firestore,e.converter,_f(e._query,t))}_parse(e){const t=Ap(e.firestore);return(function(l,c,f,p,y,E,T){let I;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new se(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){F_(T,E);const B=[];for(const q of T)B.push(U_(p,l,q));I={arrayValue:{values:B}}}else I=U_(p,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||F_(T,E),I=_k(f,c,T,E==="in"||E==="not-in");return dt.create(y,E,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class xp extends kp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const f=l.getFlattenedFilters();for(const p of f)xw(c,p),c=_f(c,p)})(e._query,t),new Os(e.firestore,e.converter,_f(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dp extends Nw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Dp(e,t)}_apply(e){const t=(function(o,l,c){if(o.startAt!==null)throw new se(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vl(l,c)})(e._query,this._field,this._direction);return new Os(e.firestore,e.converter,(function(o,l){const c=o.explicitOrderBy.concat([l]);return new Yo(o.path,o.collectionGroup,c,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Ak(n,e="asc"){const t=e,i=Pp("orderBy",n);return Dp._create(i,t)}function U_(n,e,t){if(typeof(t=wt(t))=="string"){if(t==="")throw new se(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RE(e)&&t.indexOf("/")!==-1)throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(He.fromString(t));if(!pe.isDocumentKey(i))throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return t_(n,new pe(i))}if(t instanceof pt)return t_(n,t._key);throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kc(t)}.`)}function F_(n,e){if(!Array.isArray(n)||n.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xw(n,e){const t=(function(o,l){for(const c of o)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Rk{convertValue(e,t="none"){switch(Li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ks(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[xc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>lt(c.doubleValue)));return new pr(l)}convertGeoPoint(e){return new fr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Xc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const t=Oi(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=He.fromString(e);Fe(GE(i),9688,{name:e});const o=new yl(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class nl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Es extends kw{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _c(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Pp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Es._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Es._jsonSchemaVersion="firestore/documentSnapshot/1.0",Es._jsonSchema={type:ft("string",Es._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class _c extends Es{data(e={}){return super.data(e)}}class Uo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new nl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new _c(this._firestore,this._userDataWriter,i.key,i,new nl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const p=new _c(o._firestore,o._userDataWriter,f.doc.key,f.doc,new nl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new _c(o._firestore,o._userDataWriter,f.doc.key,f.doc,new nl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return f.type!==0&&(y=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),E=c.indexOf(f.doc.key)),{type:Ck(f.type),doc:p,oldIndex:y,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Uo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ck(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(n){n=$r(n,pt);const e=$r(n.firestore,ea);return ck(wp(e),n._key).then((t=>xk(e,n,t)))}Uo._jsonSchemaVersion="firestore/querySnapshot/1.0",Uo._jsonSchema={type:ft("string",Uo._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class Vw extends Rk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,t)}}function Pk(n){n=$r(n,Os);const e=$r(n.firestore,ea),t=wp(e),i=new Vw(e);return Ik(n._query),hk(t,n._query).then((o=>new Uo(e,i,n,o)))}function kk(n,e,t){n=$r(n,pt);const i=$r(n.firestore,ea),o=Dw(n.converter,e,t);return Vp(i,[Sw(Ap(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Wn.none())])}function Nk(n){return Vp($r(n.firestore,ea),[new rp(n._key,Wn.none())])}function Op(n,e){const t=$r(n.firestore,ea),i=bl(n),o=Dw(n.converter,e);return Vp(t,[Sw(Ap(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Wn.exists(!1))]).then((()=>i))}function Vp(n,e){return(function(i,o){const l=new Ur;return i.asyncQueue.enqueueAndForget((async()=>YP(await uk(i),o,l))),l.promise})(wp(n),e)}function xk(n,e,t){const i=t.docs.get(e._key),o=new Vw(n);return new Es(n,o,e._key,i,new nl(t.hasPendingWrites,t.fromCache),e.converter)}function Il(){return new Rp("serverTimestamp")}(function(e,t=!0){(function(o){Qo=o})(Ps),Is(new Ni("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new ea(new E1(i.getProvider("auth-internal")),new I1(c,i.getProvider("app-check-internal")),(function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new se(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yl(y.options.projectId,E)})(c,o),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),ar(zy,By,e),ar(zy,By,"esm2017")})();var Dk="firebase",Ok="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(Dk,Ok,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="firebasestorage.googleapis.com",bw="storageBucket",Vk=120*1e3,Lk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends yr{constructor(e,t,i=0){super(Qd(e),`Firebase Storage: ${t} (${Qd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function Qd(n){return"storage/"+n}function Lp(){const n="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,n)}function bk(n){return new it(rt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Mk(n){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Uk(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,n)}function Fk(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jk(n){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function zk(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Bk(){return new it(rt.CANCELED,"User canceled the upload/download.")}function $k(n){return new it(rt.INVALID_URL,"Invalid URL '"+n+"'.")}function qk(n){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Wk(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bw+"' property when initializing the app?")}function Hk(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Kk(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Gk(n){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function kf(n){return new it(rt.INVALID_ARGUMENT,n)}function Mw(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function Qk(n){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ul(n,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Xa(n){throw new it(rt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=mn.makeFromUrl(e,t)}catch{return new mn(e,"")}if(i.path==="")return i;throw qk(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const c="(/(.*))?$",f=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(re){re.path_=decodeURIComponent(re.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",V=new RegExp(`^https?://${T}/${E}/b/${o}/o${I}`,"i"),B={bucket:1,path:3},q=t===Lw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",ie=new RegExp(`^https?://${q}/${o}/${L}`,"i"),ee=[{regex:f,indices:p,postModify:l},{regex:V,indices:B,postModify:y},{regex:ie,indices:{bucket:1,path:2},postModify:y}];for(let re=0;re<ee.length;re++){const Re=ee[re],we=Re.regex.exec(e);if(we){const N=we[Re.indices.bucket];let S=we[Re.indices.path];S||(S=""),i=new mn(N,S),Re.postModify(i);break}}if(i==null)throw $k(e);return i}}class Xk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(n,e,t){let i=1,o=null,l=null,c=!1,f=0;function p(){return f===2}let y=!1;function E(...L){y||(y=!0,e.apply(null,L))}function T(L){o=setTimeout(()=>{o=null,n(V,p())},L)}function I(){l&&clearTimeout(l)}function V(L,...ie){if(y){I();return}if(L){I(),E.call(null,L,...ie);return}if(p()||c){I(),E.call(null,L,...ie);return}i<64&&(i*=2);let ee;f===1?(f=2,ee=0):ee=(i+Math.random())*1e3,T(ee)}let B=!1;function q(L){B||(B=!0,I(),!y&&(o!==null?(L||(f=2),clearTimeout(o),T(0)):L||(f=1)))}return T(0),l=setTimeout(()=>{c=!0,q(!0)},t),q}function Yk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(n){return n!==void 0}function eN(n){return typeof n=="object"&&!Array.isArray(n)}function bp(n){return typeof n=="string"||n instanceof String}function j_(n){return Mp()&&n instanceof Blob}function Mp(){return typeof Blob<"u"}function z_(n,e,t,i){if(i<e)throw kf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw kf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Uw(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var ws;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ws||(ws={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,t,i,o,l,c,f,p,y,E,T,I=!0,V=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=f,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=T,this.retry=I,this.isUsingEmulator=V,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((B,q)=>{this.resolve_=B,this.reject_=q,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new ac(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=f=>{const p=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const f=l.getErrorCode()===ws.NO_ERROR,p=l.getStatus();if(!f||tN(p,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===ws.ABORT;i(!1,new ac(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new ac(y,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());Zk(p)?l(p):l()}catch(p){c(p)}else if(f!==null){const p=Lp();p.serverResponse=f.getErrorText(),this.errorCallback_?c(this.errorCallback_(f,p)):c(p)}else if(o.canceled){const p=this.appDelete_?Mw():Bk();c(p)}else{const p=zk();c(p)}};this.canceled_?t(!1,new ac(!1,null,!0)):this.backoffId_=Jk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Yk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ac{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function rN(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function iN(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sN(n,e){e&&(n["X-Firebase-GMPID"]=e)}function oN(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function aN(n,e,t,i,o,l,c=!0,f=!1){const p=Uw(n.urlParams),y=n.url+p,E=Object.assign({},n.headers);return sN(E,e),rN(E,t),iN(E,l),oN(E,i),new nN(y,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function uN(...n){const e=lN();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Mp())return new Blob(n);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function cN(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(n){if(typeof atob>"u")throw Gk("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xd{constructor(e,t){this.data=e,this.contentType=t||null}}function dN(n,e){switch(n){case or.RAW:return new Xd(Fw(e));case or.BASE64:case or.BASE64URL:return new Xd(jw(n,e));case or.DATA_URL:return new Xd(pN(e),mN(e))}throw Lp()}function Fw(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function fN(n){let e;try{e=decodeURIComponent(n)}catch{throw ul(or.DATA_URL,"Malformed data URL.")}return Fw(e)}function jw(n,e){switch(n){case or.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw ul(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case or.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw ul(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=hN(e)}catch(o){throw o.message.includes("polyfill")?o:ul(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class zw{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ul(or.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=gN(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function pN(n){const e=new zw(n);return e.base64?jw(or.BASE64,e.rest):fN(e.rest)}function mN(n){return new zw(n).contentType}function gN(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){let i=0,o="";j_(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(j_(this.data_)){const i=this.data_,o=cN(i,e,t);return o===null?null:new Ti(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Ti(i,!0)}}static getBlob(...e){if(Mp()){const t=e.map(i=>i instanceof Ti?i.data_:i);return new Ti(uN.apply(null,t))}else{const t=e.map(c=>bp(c)?dN(or.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let f=0;f<c.length;f++)o[l++]=c[f]}),new Ti(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(n){let e;try{e=JSON.parse(n)}catch{return null}return eN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function _N(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function $w(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(n,e){return e}class Qt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||vN}}let lc=null;function EN(n){return!bp(n)||n.length<2?n:$w(n)}function qw(){if(lc)return lc;const n=[];n.push(new Qt("bucket")),n.push(new Qt("generation")),n.push(new Qt("metageneration")),n.push(new Qt("name","fullPath",!0));function e(l,c){return EN(c)}const t=new Qt("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const o=new Qt("size");return o.xform=i,n.push(o),n.push(new Qt("timeCreated")),n.push(new Qt("updated")),n.push(new Qt("md5Hash",null,!0)),n.push(new Qt("cacheControl",null,!0)),n.push(new Qt("contentDisposition",null,!0)),n.push(new Qt("contentEncoding",null,!0)),n.push(new Qt("contentLanguage",null,!0)),n.push(new Qt("contentType",null,!0)),n.push(new Qt("metadata","customMetadata",!0)),lc=n,lc}function wN(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new mn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function TN(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return wN(i,n),i}function Ww(n,e,t){const i=Bw(e);return i===null?null:TN(n,i,t)}function IN(n,e,t,i){const o=Bw(e);if(o===null||!bp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(y=>{const E=n.bucket,T=n.fullPath,I="/b/"+c(E)+"/o/"+c(T),V=Up(I,t,i),B=Uw({alt:"media",token:y});return V+B})[0]}function SN(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class Hw{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(n){if(!n)throw Lp()}function AN(n,e){function t(i,o){const l=Ww(n,o,e);return Kw(l!==null),l}return t}function RN(n,e){function t(i,o){const l=Ww(n,o,e);return Kw(l!==null),IN(l,o,n.host,n._protocol)}return t}function Gw(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=Fk():o=Uk():t.getStatus()===402?o=Mk(n.bucket):t.getStatus()===403?o=jk(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function CN(n){const e=Gw(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=bk(n.path)),l.serverResponse=o.serverResponse,l}return t}function PN(n,e,t){const i=e.fullServerUrl(),o=Up(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,f=new Hw(o,l,RN(n,t),c);return f.errorHandler=CN(e),f}function kN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function NN(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=kN(null,e)),i}function xN(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function f(){let ee="";for(let re=0;re<2;re++)ee=ee+Math.random().toString().slice(2);return ee}const p=f();c["Content-Type"]="multipart/related; boundary="+p;const y=NN(e,i,o),E=SN(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,I=`\r
--`+p+"--",V=Ti.getBlob(T,i,I);if(V===null)throw Hk();const B={name:y.fullPath},q=Up(l,n.host,n._protocol),L="POST",ie=n.maxUploadRetryTime,Z=new Hw(q,L,AN(n,t),ie);return Z.urlParams=B,Z.headers=c,Z.body=V.uploadData(),Z.errorHandler=Gw(e),Z}class DN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ws.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ws.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ws.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw Xa("cannot .send() more than once");if(Fi(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const c in l)l.hasOwnProperty(c)&&this.xhr_.setRequestHeader(c,l[c].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ON extends DN{initXhr(){this.xhr_.responseType="text"}}function Qw(){return new ON}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this._service=e,t instanceof mn?this._location=t:this._location=mn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Cs(e,t)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $w(this._location.path)}get storage(){return this._service}get parent(){const e=yN(this._location.path);if(e===null)return null;const t=new mn(this._location.bucket,e);return new Cs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Qk(e)}}function VN(n,e,t){n._throwIfRoot("uploadBytes");const i=xN(n.storage,n._location,qw(),new Ti(e,!0),t);return n.storage.makeRequestWithTokens(i,Qw).then(o=>({metadata:o,ref:n}))}function LN(n){n._throwIfRoot("getDownloadURL");const e=PN(n.storage,n._location,qw());return n.storage.makeRequestWithTokens(e,Qw).then(t=>{if(t===null)throw Kk();return t})}function bN(n,e){const t=_N(n._location.path,e),i=new mn(n._location.bucket,t);return new Cs(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(n){return/^[A-Za-z]+:\/\//.test(n)}function UN(n,e){return new Cs(n,e)}function Xw(n,e){if(n instanceof Fp){const t=n;if(t._bucket==null)throw Wk();const i=new Cs(t,t._bucket);return e!=null?Xw(i,e):i}else return e!==void 0?bN(n,e):n}function FN(n,e){if(e&&MN(e)){if(n instanceof Fp)return UN(n,e);throw kf("To use ref(service, url), the first argument must be a Storage instance.")}else return Xw(n,e)}function B_(n,e){const t=e==null?void 0:e[bw];return t==null?null:mn.makeFromBucketSpec(t,n)}function jN(n,e,t,i={}){n.host=`${e}:${t}`;const o=Fi(e);o&&(Vf(`https://${n.host}/b`),Lf("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:dv(l,n.app.options.projectId))}class Fp{constructor(e,t,i,o,l,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=Lw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Vk,this._maxUploadRetryTime=Lk,this._requests=new Set,o!=null?this._bucket=mn.makeFromBucketSpec(o,this._host):this._bucket=B_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=B_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){z_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){z_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(an(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cs(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Xk(Mw());{const c=aN(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const $_="@firebase/storage",q_="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="storage";function zN(n,e,t){return n=wt(n),VN(n,e,t)}function BN(n){return n=wt(n),LN(n)}function $N(n,e){return n=wt(n),FN(n,e)}function qN(n=Uf(),e){n=wt(n);const i=$c(n,Jw).getImmediate({identifier:e}),o=uv("storage");return o&&WN(i,...o),i}function WN(n,e,t,i={}){jN(n,e,t,i)}function HN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Fp(t,i,o,e,Ps)}function KN(){Is(new Ni(Jw,HN,"PUBLIC").setMultipleInstances(!0)),ar($_,q_,""),ar($_,q_,"esm2017")}KN();const GN={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},jp=mv(GN),Ml=g1(jp),Vs=fk(jp),QN=qN(jp);function XN(n){return iR(Ml,n)}async function JN(n,e){const t=await eR(Ml,n,e);return await kk(bl(Vs,"users",t.user.uid),{email:n,role:"user",createdAt:Il()},{merge:!0}),t.user}async function YN(n,e){return(await tR(Ml,n,e)).user}async function ZN(){return(await XA(Ml)).user}function ex(){return sR(Ml)}async function tx(n){const e=await Ow(bl(Vs,"users",n));return e.exists()?e.data():{role:"user"}}const Yw=X.createContext(null);function nx({children:n}){const[e,t]=X.useState(null),[i,o]=X.useState(null),[l,c]=X.useState(!0);X.useEffect(()=>XN(async y=>{if(t(y),y){const E=await tx(y.uid);o(E)}else o(null);c(!1)}),[]);const f=X.useMemo(()=>({user:e,profile:i,loading:l,isAdmin:(i==null?void 0:i.role)==="admin",loginWithEmail:YN,registerWithEmail:JN,loginGuest:ZN,logout:ex}),[e,i,l]);return F.jsx(Yw.Provider,{value:f,children:n})}function Ul(){const n=X.useContext(Yw);if(!n)throw new Error("useAuth csak AuthProvider-en belül használható.");return n}function rx(){const{user:n,isAdmin:e,logout:t}=Ul();async function i(){await t()}return F.jsxs("div",{className:"app-shell",children:[F.jsxs("header",{className:"topbar",children:[F.jsx(_s,{to:"/",className:"brand",children:"LézerMűhely"}),F.jsxs("nav",{children:[F.jsx(Po,{to:"/",children:"Főoldal"}),F.jsx(Po,{to:"/egyedi-tervezes",children:"Egyedi tervezés"}),F.jsx(Po,{to:"/kosar",children:"Kosár"}),e&&F.jsx(Po,{to:"/admin",children:"Admin"})]}),F.jsx("div",{className:"topbar-actions",children:n?F.jsx("button",{className:"ghost-btn",onClick:i,children:"Kijelentkezés"}):F.jsxs(F.Fragment,{children:[F.jsx(Po,{to:"/bejelentkezes",children:"Belépés"}),F.jsx(Po,{to:"/regisztracio",children:"Regisztráció"})]})})]}),F.jsx("main",{className:"container",children:F.jsx(oI,{})}),F.jsxs("footer",{className:"footer",children:[F.jsx(_s,{to:"/aszf",children:"ÁSZF"}),F.jsx(_s,{to:"/adatvedelem",children:"Adatkezelés"}),F.jsx(_s,{to:"/impresszum",children:"Impresszum"})]})]})}function ix({children:n,requireAdmin:e=!1}){const{user:t,isAdmin:i,loading:o}=Ul(),l=Ui();return o?F.jsx("p",{children:"Töltés..."}):t?e&&!i?F.jsx(Zd,{to:"/",replace:!0}):n:F.jsx(Zd,{to:"/bejelentkezes",replace:!0,state:{from:l.pathname}})}function Wo(n){return new Intl.NumberFormat("hu-HU",{style:"currency",currency:"HUF",maximumFractionDigits:0}).format(n||0)}function sx({product:n,onAddToCart:e}){var t;return F.jsxs("article",{className:"card",children:[F.jsx("img",{src:(t=n.imageUrls)==null?void 0:t[0],alt:n.name,className:"card-image"}),F.jsx("h3",{children:n.name}),F.jsx("p",{children:n.shortDescription}),F.jsx("p",{className:"price",children:Wo(n.price)}),F.jsxs("div",{className:"card-actions",children:[F.jsx(_s,{to:`/termek/${n.id}`,className:"btn",children:"Részletek"}),F.jsx("button",{className:"btn secondary",onClick:()=>e(n),children:"Kosárba"})]})]})}const Zw=Ep(Vs,"products");async function eT(){const n=Sk(Zw,Ak("createdAt","desc"));return(await Pk(n)).docs.map(t=>({id:t.id,...t.data()}))}async function ox(n){const e=await Ow(bl(Vs,"products",n));return e.exists()?{id:e.id,...e.data()}:null}async function ax(n){return Op(Zw,{...n,createdAt:Il(),updatedAt:Il()})}async function lx(n){return Nk(bl(Vs,"products",n))}function ux(){return JSON.parse(localStorage.getItem("cart_items")||"[]")}function cx(n){localStorage.setItem("cart_items",JSON.stringify(n))}function hx(){const[n,e]=X.useState([]),[t,i]=X.useState(!0);X.useEffect(()=>{eT().then(e).finally(()=>i(!1))},[]);function o(l){var p;const c=ux(),f=c.find(y=>y.id===l.id);f?f.quantity+=1:c.push({id:l.id,name:l.name,price:l.price,image:(p=l.imageUrls)==null?void 0:p[0],quantity:1}),cx(c),alert("Termék kosárba téve.")}return t?F.jsx("p",{children:"Töltés..."}):F.jsxs("section",{children:[F.jsx("h1",{children:"Lézergravírozott termékek"}),F.jsx("p",{className:"lead",children:"Kész termékek és egyedi gravírozás vállalása rövid határidővel."}),F.jsx("div",{className:"grid",children:n.map(l=>F.jsx(sx,{product:l,onAddToCart:o},l.id))})]})}function dx(){return JSON.parse(localStorage.getItem("cart_items")||"[]")}function fx(n){localStorage.setItem("cart_items",JSON.stringify(n))}function px(){var o;const{id:n}=W0(),[e,t]=X.useState(null);X.useEffect(()=>{ox(n).then(t)},[n]);function i(){var f;const l=dx(),c=l.find(p=>p.id===e.id);c?c.quantity+=1:l.push({id:e.id,name:e.name,price:e.price,image:(f=e.imageUrls)==null?void 0:f[0],quantity:1}),fx(l),alert("Termék kosárba téve.")}return e?F.jsxs("section",{children:[F.jsx("h1",{children:e.name}),F.jsx("div",{className:"gallery",children:(o=e.imageUrls)==null?void 0:o.map(l=>F.jsx("img",{src:l,alt:e.name},l))}),F.jsx("p",{children:e.description}),F.jsx("p",{className:"price",children:Wo(e.price)}),F.jsx("button",{className:"btn",onClick:i,children:"Kosárba teszem"})]}):F.jsx("p",{children:"Töltés..."})}function W_(){return JSON.parse(localStorage.getItem("cart_items")||"[]")}function mx(n){localStorage.setItem("cart_items",JSON.stringify(n))}function gx(){const n=W_();function e(i,o){const l=W_().map(c=>c.id===i?{...c,quantity:c.quantity+o}:c).filter(c=>c.quantity>0);mx(l),window.location.reload()}const t=n.reduce((i,o)=>i+o.price*o.quantity,0);return F.jsxs("section",{children:[F.jsx("h1",{children:"Kosár"}),n.length===0&&F.jsx("p",{children:"A kosár üres."}),n.map(i=>F.jsxs("article",{className:"cart-row",children:[F.jsx("img",{src:i.image,alt:i.name}),F.jsxs("div",{children:[F.jsx("h3",{children:i.name}),F.jsx("p",{children:Wo(i.price)})]}),F.jsxs("div",{className:"qty-controls",children:[F.jsx("button",{onClick:()=>e(i.id,-1),children:"-"}),F.jsx("span",{children:i.quantity}),F.jsx("button",{onClick:()=>e(i.id,1),children:"+"})]})]},i.id)),F.jsxs("h3",{children:["Végösszeg: ",Wo(t)]}),n.length>0&&F.jsx(_s,{className:"btn",to:"/penztar",children:"Tovább a pénztárhoz"})]})}async function yx(n){return Op(Ep(Vs,"orders"),{...n,createdAt:Il(),status:"new"})}async function _x(n){return Op(Ep(Vs,"designRequests"),{...n,createdAt:Il(),status:"new"})}function vx(){return JSON.parse(localStorage.getItem("cart_items")||"[]")}function Ex(){const n=vx(),{user:e,loginGuest:t}=Ul(),i=Sl(),[o,l]=X.useState(!1),[c,f]=X.useState({fullName:"",email:"",phone:"",zip:"",city:"",address:"",acceptTerms:!1,acceptPrivacy:!1}),p=n.reduce((T,I)=>T+I.price*I.quantity,0);function y(T){const{name:I,value:V,type:B,checked:q}=T.target;f(L=>({...L,[I]:B==="checkbox"?q:V}))}async function E(T){if(T.preventDefault(),n.length===0){alert("A kosár üres.");return}if(!c.acceptTerms||!c.acceptPrivacy){alert("Az ÁSZF és az adatkezelés elfogadása kötelező.");return}l(!0);try{const I=e||await t();await yx({uid:I.uid,customer:{fullName:c.fullName,email:c.email,phone:c.phone,zip:c.zip,city:c.city,address:c.address},items:n,total:p,legal:{termsAcceptedAt:new Date().toISOString(),privacyAcceptedAt:new Date().toISOString()}}),localStorage.removeItem("cart_items"),alert("Rendelés rögzítve."),i("/")}catch(I){alert(`Hiba: ${I.message}`)}finally{l(!1)}}return F.jsxs("section",{children:[F.jsx("h1",{children:"Pénztár"}),F.jsx("p",{children:"Fizetés most: demo módban. Élesben online fizetési szolgáltató szükséges."}),F.jsxs("h3",{children:["Fizetendő: ",Wo(p)]}),F.jsxs("form",{onSubmit:E,className:"form",children:[F.jsx("input",{name:"fullName",placeholder:"Teljes név",value:c.fullName,onChange:y,required:!0}),F.jsx("input",{name:"email",type:"email",placeholder:"E-mail",value:c.email,onChange:y,required:!0}),F.jsx("input",{name:"phone",placeholder:"Telefonszám",value:c.phone,onChange:y,required:!0}),F.jsx("input",{name:"zip",placeholder:"Irányítószám",value:c.zip,onChange:y,required:!0}),F.jsx("input",{name:"city",placeholder:"Város",value:c.city,onChange:y,required:!0}),F.jsx("input",{name:"address",placeholder:"Cím",value:c.address,onChange:y,required:!0}),F.jsxs("label",{children:[F.jsx("input",{type:"checkbox",name:"acceptTerms",checked:c.acceptTerms,onChange:y})," Elfogadom az ÁSZF-et."]}),F.jsxs("label",{children:[F.jsx("input",{type:"checkbox",name:"acceptPrivacy",checked:c.acceptPrivacy,onChange:y})," Elfogadom az adatkezelési tájékoztatót."]}),F.jsx("button",{className:"btn",type:"submit",disabled:o,children:o?"Mentés...":"Rendelés elküldése"})]})]})}function wx(){const{loginWithEmail:n}=Ul(),e=Sl(),t=Ui(),[i,o]=X.useState({email:"",password:""});function l(f){const{name:p,value:y}=f.target;o(E=>({...E,[p]:y}))}async function c(f){var p;f.preventDefault();try{await n(i.email,i.password),e(((p=t.state)==null?void 0:p.from)||"/")}catch(y){alert(`Sikertelen belépés: ${y.message}`)}}return F.jsxs("section",{children:[F.jsx("h1",{children:"Belépés"}),F.jsxs("form",{className:"form",onSubmit:c,children:[F.jsx("input",{name:"email",type:"email",placeholder:"E-mail",value:i.email,onChange:l,required:!0}),F.jsx("input",{name:"password",type:"password",placeholder:"Jelszó",value:i.password,onChange:l,required:!0}),F.jsx("button",{className:"btn",type:"submit",children:"Belépés"})]})]})}function Tx(){const{registerWithEmail:n}=Ul(),e=Sl(),[t,i]=X.useState({email:"",password:""});function o(c){const{name:f,value:p}=c.target;i(y=>({...y,[f]:p}))}async function l(c){c.preventDefault();try{await n(t.email,t.password),e("/")}catch(f){alert(`Sikertelen regisztráció: ${f.message}`)}}return F.jsxs("section",{children:[F.jsx("h1",{children:"Regisztráció"}),F.jsxs("form",{className:"form",onSubmit:l,children:[F.jsx("input",{name:"email",type:"email",placeholder:"E-mail",value:t.email,onChange:o,required:!0}),F.jsx("input",{name:"password",type:"password",minLength:8,placeholder:"Jelszó (min. 8 karakter)",value:t.password,onChange:o,required:!0}),F.jsx("button",{className:"btn",type:"submit",children:"Fiók létrehozása"})]})]})}function Ix(){const[n,e]=X.useState({fullName:"",email:"",message:"",material:"",quantity:1});function t(o){const{name:l,value:c}=o.target;e(f=>({...f,[l]:c}))}async function i(o){o.preventDefault();try{await _x(n),alert("Egyedi ajánlatkérés elküldve."),e({fullName:"",email:"",message:"",material:"",quantity:1})}catch(l){alert(`Hiba: ${l.message}`)}}return F.jsxs("section",{children:[F.jsx("h1",{children:"Egyedi tervezés kérése"}),F.jsxs("form",{className:"form",onSubmit:i,children:[F.jsx("input",{name:"fullName",placeholder:"Teljes név",value:n.fullName,onChange:t,required:!0}),F.jsx("input",{name:"email",type:"email",placeholder:"E-mail",value:n.email,onChange:t,required:!0}),F.jsx("input",{name:"material",placeholder:"Anyag (pl. fa, fém, akril)",value:n.material,onChange:t,required:!0}),F.jsx("input",{name:"quantity",type:"number",min:1,placeholder:"Darabszám",value:n.quantity,onChange:t,required:!0}),F.jsx("textarea",{name:"message",placeholder:"Leírás, méret, határidő",value:n.message,onChange:t,rows:5,required:!0}),F.jsx("button",{className:"btn",type:"submit",children:"Ajánlatkérés elküldése"})]})]})}async function Sx(n){const e=n.map(async t=>{const i=`${Date.now()}-${Math.random().toString(36).slice(2)}-${t.name}`,o=$N(QN,`products/${i}`);return await zN(o,t,{contentType:t.type}),BN(o)});return Promise.all(e)}function Ax(){const[n,e]=X.useState([]),[t,i]=X.useState(!1),[o,l]=X.useState({name:"",shortDescription:"",description:"",price:"",stock:""}),[c,f]=X.useState([]);async function p(){const V=await eT();e(V)}X.useEffect(()=>{p()},[]);function y(V){const{name:B,value:q}=V.target;l(L=>({...L,[B]:q}))}function E(V){f(Array.from(V.target.files||[]))}async function T(V){if(V.preventDefault(),c.length<3){alert("Minimum 3 kép feltöltése kötelező.");return}i(!0);try{const B=await Sx(c);await ax({name:o.name,shortDescription:o.shortDescription,description:o.description,price:Number(o.price),stock:Number(o.stock),imageUrls:B,isActive:!0}),l({name:"",shortDescription:"",description:"",price:"",stock:""}),f([]),await p(),alert("Termék mentve.")}catch(B){alert(`Hiba: ${B.message}`)}finally{i(!1)}}async function I(V){window.confirm("Biztosan törlöd a terméket?")&&(await lx(V),await p())}return F.jsxs("section",{children:[F.jsx("h1",{children:"Admin felület"}),F.jsxs("form",{className:"form",onSubmit:T,children:[F.jsx("input",{name:"name",placeholder:"Terméknév",value:o.name,onChange:y,required:!0}),F.jsx("input",{name:"shortDescription",placeholder:"Rövid leírás",value:o.shortDescription,onChange:y,required:!0}),F.jsx("textarea",{name:"description",placeholder:"Teljes leírás",value:o.description,onChange:y,rows:4,required:!0}),F.jsx("input",{name:"price",type:"number",min:0,placeholder:"Ár (HUF)",value:o.price,onChange:y,required:!0}),F.jsx("input",{name:"stock",type:"number",min:0,placeholder:"Készlet",value:o.stock,onChange:y,required:!0}),F.jsx("input",{type:"file",multiple:!0,accept:"image/*",onChange:E,required:!0}),F.jsx("small",{children:"Minimum 3 kép kötelező."}),F.jsx("button",{className:"btn",type:"submit",disabled:t,children:t?"Mentés...":"Termék mentése"})]}),F.jsx("h2",{children:"Jelenlegi termékek"}),F.jsx("div",{className:"grid",children:n.map(V=>{var B;return F.jsxs("article",{className:"card",children:[F.jsx("img",{src:(B=V.imageUrls)==null?void 0:B[0],alt:V.name,className:"card-image"}),F.jsx("h3",{children:V.name}),F.jsx("p",{children:Wo(V.price)}),F.jsx("button",{className:"btn danger",onClick:()=>I(V.id),children:"Törlés"})]},V.id)})})]})}function Rx(){return F.jsxs("section",{children:[F.jsx("h1",{children:"Általános Szerződési Feltételek (minta)"}),F.jsx("p",{children:"Ez egy technikai mintaoldal. Éles használat előtt ügyvéddel vagy jogásszal véglegesíteni szükséges a magyar és EU fogyasztóvédelmi szabályok szerint."}),F.jsx("p",{children:"Kötelező elemek: szolgáltató adatai, termékek fő jellemzői, árak és díjak, szállítási információk, elállási jog, kellékszavatosság, panaszkezelés, békéltető testület adatok."})]})}function Cx(){return F.jsxs("section",{children:[F.jsx("h1",{children:"Adatkezelési Tájékoztató (minta)"}),F.jsx("p",{children:"Ez minta. Éles oldalon GDPR-kompatibilis, jogász által validált tájékoztató szükséges, különösen: jogalap, adattárolási idők, érintetti jogok, adatfeldolgozók, címzettek, nemzetközi adattovábbítás."})]})}function Px(){return F.jsxs("section",{children:[F.jsx("h1",{children:"Impresszum (minta)"}),F.jsx("p",{children:"Töltsd ki a vállalkozás pontos adataival: cégnév, székhely, adószám, cégjegyzékszám/nyilvántartási szám, elérhetőség, tárhelyszolgáltató adatai."})]})}function kx(){return F.jsxs(lI,{children:[F.jsxs(sn,{element:F.jsx(rx,{}),children:[F.jsx(sn,{path:"/",element:F.jsx(hx,{})}),F.jsx(sn,{path:"/termek/:id",element:F.jsx(px,{})}),F.jsx(sn,{path:"/kosar",element:F.jsx(gx,{})}),F.jsx(sn,{path:"/penztar",element:F.jsx(Ex,{})}),F.jsx(sn,{path:"/egyedi-tervezes",element:F.jsx(Ix,{})}),F.jsx(sn,{path:"/aszf",element:F.jsx(Rx,{})}),F.jsx(sn,{path:"/adatvedelem",element:F.jsx(Cx,{})}),F.jsx(sn,{path:"/impresszum",element:F.jsx(Px,{})}),F.jsx(sn,{path:"/bejelentkezes",element:F.jsx(wx,{})}),F.jsx(sn,{path:"/regisztracio",element:F.jsx(Tx,{})}),F.jsx(sn,{path:"/admin",element:F.jsx(ix,{requireAdmin:!0,children:F.jsx(Ax,{})})})]}),F.jsx(sn,{path:"*",element:F.jsx(Zd,{to:"/",replace:!0})})]})}p0.createRoot(document.getElementById("root")).render(F.jsx(K_.StrictMode,{children:F.jsx(gI,{children:F.jsx(nx,{children:F.jsx(kx,{})})})}));
