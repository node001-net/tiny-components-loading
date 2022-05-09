(()=>{"use strict";var t,e={352:()=>{function t(t){return t.replace(/-(\w)/g,((t,e)=>e.toUpperCase()))}function e(t,n){t.firstChild&&(n.appendChild(t.firstChild),e(t,n))}function n(t){r(t.childNodes)}function r(t){Array.from(t).forEach(s)}const s=t=>t&&t.parentNode&&t.parentNode.removeChild(t),o=(t,e)=>e&&e.parentNode&&e.parentNode.insertBefore(t,e),i=new Map,a=Symbol("riot-component"),u=new Set,c="is",l="mount",p="update",h="unmount",d="shouldUpdate",m="onBeforeMount",f="onMounted",b="onBeforeUpdate",O="onUpdated",v="onBeforeUnmount",g="onUnmounted",E="props",N="state",y="slots",T="root",x=Symbol("pure"),_=Symbol("is_updating"),M=Symbol("parent"),j=Symbol("attributes"),A=Symbol("template");var S=Object.freeze({__proto__:null,COMPONENTS_IMPLEMENTATION_MAP:i,DOM_COMPONENT_INSTANCE_PROPERTY:a,PLUGINS_SET:u,IS_DIRECTIVE:c,VALUE_ATTRIBUTE:"value",MOUNT_METHOD_KEY:l,UPDATE_METHOD_KEY:p,UNMOUNT_METHOD_KEY:h,SHOULD_UPDATE_KEY:d,ON_BEFORE_MOUNT_KEY:m,ON_MOUNTED_KEY:f,ON_BEFORE_UPDATE_KEY:b,ON_UPDATED_KEY:O,ON_BEFORE_UNMOUNT_KEY:v,ON_UNMOUNTED_KEY:g,PROPS_KEY:E,STATE_KEY:N,SLOTS_KEY:y,ROOT_KEY:T,IS_PURE_SYMBOL:x,IS_COMPONENT_UPDATING:_,PARENT_KEY_SYMBOL:M,ATTRIBUTES_KEY_SYMBOL:j,TEMPLATE_KEY_SYMBOL:A});var w={EACH:0,IF:1,SIMPLE:2,TAG:3,SLOT:4};var P={ATTRIBUTE:0,EVENT:1,TEXT:2,VALUE:3};const U=Symbol("head"),C=Symbol("tail");function D(t){const e=t.dom.cloneNode(!0),{head:n,tail:r}=function(){const t=document.createTextNode(""),e=document.createTextNode("");return t[U]=!0,e[C]=!0,{head:t,tail:e}}();return{avoidDOMInjection:!0,fragment:e,head:n,tail:r,children:[n,...Array.from(e.childNodes),r]}}function I(t,e,n,r){return void 0===r&&(r={}),Object.defineProperty(t,e,Object.assign({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function L(t,e,n){return Object.entries(e).forEach((e=>{let[r,s]=e;I(t,r,s,n)})),t}function Y(t,e){return Object.entries(e).forEach((e=>{let[n,r]=e;t[n]||(t[n]=r)})),t}function K(t,e){return typeof t===e}function k(t){const e=t.ownerSVGElement;return!!e||null===e}function B(t){return"template"===t.tagName.toLowerCase()}function R(t){return K(t,"function")}function $(t){return!z(t)&&t.constructor===Object}function z(t){return null==t}const F=Symbol("unmount"),H={nodes:[],mount(t,e){return this.update(t,e)},update(t,e){const{placeholder:n,nodes:r,childrenMap:i}=this,a=t===F?null:this.evaluate(t),u=a?Array.from(a):[],{newChildrenMap:c,batches:l,futureNodes:p}=function(t,e,n,r){const{condition:s,template:o,childrenMap:i,itemName:a,getKey:u,indexName:c,root:l,isTemplateTag:p}=r,h=new Map,d=[],m=[];return t.forEach(((t,r)=>{const f=function(t,e){let{itemName:n,indexName:r,index:s,item:o}=e;I(t,n,o),r&&I(t,r,s);return t}(Object.create(e),{itemName:a,indexName:c,index:r,item:t}),b=u?u(f):r,O=i.get(b),v=[];if(function(t,e){return!!t&&!t(e)}(s,f))return;const g=!O,E=O?O.template:o.clone(),N=E.el||l.cloneNode(),y=p&&g?D(E):E.meta;g?d.push((()=>E.mount(N,f,n,y))):d.push((()=>E.update(f,n))),p?v.push(...y.children):v.push(N),i.delete(b),m.push(...v),h.set(b,{nodes:v,template:E,context:f,index:r})})),{newChildrenMap:h,batches:d,futureNodes:m}}(u,t,e,this);return((t,e,n,r)=>{const i=e.length;let a=t.length,u=i,c=0,l=0,p=null;for(;c<a||l<u;)if(a===c){const t=u<i?l?n(e[l-1],-0).nextSibling:n(e[u-l],0):r;for(;l<u;)o(n(e[l++],1),t)}else if(u===l)for(;c<a;)p&&p.has(t[c])||s(n(t[c],-1)),c++;else if(t[c]===e[l])c++,l++;else if(t[a-1]===e[u-1])a--,u--;else if(t[c]===e[u-1]&&e[l]===t[a-1]){const r=n(t[--a],-1).nextSibling;o(n(e[l++],1),n(t[c++],-1).nextSibling),o(n(e[--u],1),r),t[a]=e[u]}else{if(!p){p=new Map;let t=l;for(;t<u;)p.set(e[t],t++)}if(p.has(t[c])){const r=p.get(t[c]);if(l<r&&r<u){let s=c,i=1;for(;++s<a&&s<u&&p.get(t[s])===r+i;)i++;if(i>r-l){const s=n(t[c],0);for(;l<r;)o(n(e[l++],1),s)}else h=n(e[l++],1),(d=n(t[c++],-1))&&d.parentNode&&d.parentNode.replaceChild(h,d)}else c++}else s(n(t[c++],-1))}var h,d})(r,p,function(t,e){return(n,r)=>{if(r<0){const n=t[t.length-1];if(n){const{template:r,nodes:s,context:o}=n;s.pop(),s.length||(t.pop(),r.unmount(o,e,null))}}return n}}(Array.from(i.values()),e),n),l.forEach((t=>t())),this.childrenMap=c,this.nodes=p,this},unmount(t,e){return this.update(F,e),this}};const G={mount(t,e){return this.update(t,e)},update(t,e){const n=!!this.evaluate(t),r=!this.value&&n,s=this.value&&!n,i=()=>{const n=this.node.cloneNode();o(n,this.placeholder),this.template=this.template.clone(),this.template.mount(n,t,e)};switch(!0){case r:i();break;case s:this.unmount(t);break;default:n&&this.template.update(t,e)}return this.value=n,this},unmount(t,e){return this.template.unmount(t,e,!0),this}};function V(t){throw new Error(t)}function q(t){const e=new Map,n=n=>(e.has(n)||e.set(n,t.call(this,n)))&&e.get(n);return n.cache=e,n}function W(e){return e.reduce(((e,n)=>{const{value:r,type:s}=n;switch(!0){case!n.name&&0===s:return Object.assign({},e,r);case 3===s:e.value=n.value;break;default:e[t(n.name)]=n.value}return e}),{})}const X="undefined"==typeof Element?{}:Element.prototype,Z=q((t=>X.hasOwnProperty(t)));function J(t,e,n,r){let{name:s}=e;if(!s)return r&&function(t,e,n){const r=e?Object.keys(e):[];Object.keys(n).filter((t=>!r.includes(t))).forEach((e=>t.removeAttribute(e)))}(t,n,r),void(n&&function(t,e){Object.entries(e).forEach((e=>{let[n,r]=e;return J(t,{name:n},r)}))}(t,n));!Z(s)&&(function(t){return K(t,"boolean")}(n)||$(n)||R(n))&&(t[s]=n),!function(t){return!t&&0!==t}(n)?function(t){return!0===t||["string","number"].includes(typeof t)}(n)&&t.setAttribute(s,function(t,e){return!0===e?t:e}(s,n)):t.removeAttribute(s)}const Q=/^on/,tt={handleEvent(t){this[t.type](t)}},et=new WeakMap;function nt(t){return z(t)?"":t}const rt=(t,e)=>{const n=t.childNodes[e];if(n.nodeType===Node.COMMENT_NODE){const e=document.createTextNode("");return t.replaceChild(e,n),e}return n};var st={0:J,1:function(t,e,n){let{name:r}=e;const s=r.replace(Q,""),o=et.get(t)||(t=>{const e=Object.create(tt);return et.set(t,e),e})(t),[i,a]=(t=>Array.isArray(t)?t:[t,!1])(n),u=o[s],c=i&&!u;u&&!i&&t.removeEventListener(s,o),c&&t.addEventListener(s,o,a),o[s]=i},2:function(t,e,n){t.data=nt(n)},3:function(t,e,n){t.value=nt(n)}};const ot={mount(t){return this.value=this.evaluate(t),it(this,this.value),this},update(t){const e=this.evaluate(t);return this.value!==e&&(it(this,e),this.value=e),this},unmount(){return 1===this.type&&it(this,null),this}};function it(t,e){return st[t.type](t.node,t,e,t.value)}function at(t,e){return Object.assign({},ot,e,{node:2===e.type?rt(t,e.childNodeIndex):t})}const ut=(t,e)=>t[M]||e,ct={attributes:[],getTemplateScope(t,e){return function(t,e,n){if(!t||!t.length)return n;const r=t.map((t=>Object.assign({},t,{value:t.evaluate(e)})));return Object.assign(Object.create(n||null),W(r))}(this.attributes,t,e)},mount(t,e){const r=!!t.slots&&t.slots.find((t=>{let{id:e}=t;return e===this.name})),{parentNode:o}=this.node,i=ut(t,e);return this.template=r&&gt(r.html,r.bindings).createDOM(o),this.template&&(n(this.node),this.template.mount(this.node,this.getTemplateScope(t,i),i),this.template.children=Array.from(this.node.childNodes)),lt(this.node),s(this.node),this},update(t,e){if(this.template){const n=ut(t,e);this.template.update(this.getTemplateScope(t,n),n)}return this},unmount(t,e,n){return this.template&&this.template.unmount(this.getTemplateScope(t,e),null,n),this}};function lt(t){const e=t&&t.firstChild;e&&(o(e,t),lt(t))}function pt(t){return t.reduce(((t,e)=>{let{bindings:n}=e;return t.concat(n)}),[])}const ht={mount(t){return this.update(t)},update(t,e){const n=this.evaluate(t);return n&&n===this.name?this.tag.update(t):(this.unmount(t,e,!0),this.name=n,this.tag=function(t,e,n){return void 0===e&&(e=[]),void 0===n&&(n=[]),t?t({slots:e,attributes:n}):gt(function(t){return t.reduce(((t,e)=>t+e.html),"")}(e),[...pt(e),{expressions:n.map((t=>Object.assign({type:0},t)))}])}(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,t)),this},unmount(t,e,n){return this.tag&&this.tag.unmount(n),this}};var dt={1:function(t,e){let{evaluate:n,template:r}=e;const i=document.createTextNode("");return o(i,t),s(t),Object.assign({},G,{node:t,evaluate:n,placeholder:i,template:r.createDOM(t)})},2:function(t,e){let{expressions:n}=e;return Object.assign({},(r=n.map((e=>at(t,e))),["mount","update","unmount"].reduce(((t,e)=>Object.assign({},t,{[e]:t=>r.map((n=>n[e](t)))&&s})),{})));var r,s},0:function(t,e){let{evaluate:n,condition:r,itemName:i,indexName:a,getKey:u,template:c}=e;const l=document.createTextNode(""),p=t.cloneNode();return o(l,t),s(t),Object.assign({},H,{childrenMap:new Map,node:t,root:p,condition:r,evaluate:n,isTemplateTag:B(p),template:c.createDOM(t),getKey:u,indexName:a,itemName:i,placeholder:l})},3:function(t,e){let{evaluate:n,getComponent:r,slots:s,attributes:o}=e;return Object.assign({},ht,{node:t,evaluate:n,slots:s,attributes:o,getComponent:r})},4:function(t,e){let{name:n,attributes:r}=e;return Object.assign({},ct,{attributes:r,node:t,name:n})}};function mt(t,e){return t.map((t=>2===t.type?Object.assign({},t,{childNodeIndex:t.childNodeIndex+e}):t))}function ft(t,e,n){const{selector:r,type:s,redundantAttribute:o,expressions:i}=e,a=r?t.querySelector(r):t;o&&a.removeAttribute(o);const u=i||[];return(dt[s]||dt[2])(a,Object.assign({},e,{expressions:n&&!r?mt(u,n):u}))}function bt(t,e){return k(t)?function(t,e){return e.ownerDocument.importNode((new window.DOMParser).parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${t}</svg>`,"application/xml").documentElement,!0)}(e,t):function(t,e){const n=B(e)?e:document.createElement("template");return n.innerHTML=t,n.content}(e,t)}function Ot(t,n){switch(!0){case k(t):e(n,t);break;case B(t):t.parentNode.replaceChild(n,t);break;default:t.appendChild(n)}}const vt=Object.freeze({createDOM(t){return this.dom=this.dom||function(t,e){return e&&("string"==typeof e?bt(t,e):e)}(t,this.html)||document.createDocumentFragment(),this},mount(t,e,n,r){if(void 0===r&&(r={}),!t)throw new Error("Please provide DOM node to mount properly your template");this.el&&this.unmount(e);const{fragment:s,children:o,avoidDOMInjection:i}=r,{parentNode:a}=o?o[0]:t,u=B(t),c=u?function(t,e,n){const r=Array.from(t.childNodes);return Math.max(r.indexOf(e),r.indexOf(n.head)+1,0)}(a,t,r):null;this.createDOM(t);const l=s||this.dom.cloneNode(!0);return this.el=u?a:t,this.children=u?o||Array.from(l.childNodes):null,!i&&l&&Ot(t,l),this.bindings=this.bindingsData.map((t=>ft(this.el,t,c))),this.bindings.forEach((t=>t.mount(e,n))),this.meta=r,this},update(t,e){return this.bindings.forEach((n=>n.update(t,e))),this},unmount(t,e,o){void 0===o&&(o=!1);const i=this.el;if(!i)return this;switch(this.bindings.forEach((n=>n.unmount(t,e,o))),!0){case i[x]||null===o:break;case Array.isArray(this.children):r(this.children);break;case!o:n(i);break;case!!o:s(i)}return this.el=null,this},clone(){return Object.assign({},this,{meta:{},el:null})}});function gt(t,e){return void 0===e&&(e=[]),Object.assign({},vt,{html:t,bindingsData:e})}function Et(){return this}function Nt(t){return R(t)?t.prototype&&t.prototype.constructor?new t:t():t}function yt(t){return Array.isArray(t)?t:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&"number"==typeof t.length?Array.from(t):[t]}function Tt(t,e){return yt("string"==typeof t?(e||document).querySelectorAll(t):t)}const xt=t=>1===t.length?t[0]:t;function _t(t,e,n){const r="object"==typeof e?e:{[e]:n},s=Object.keys(r);return yt(t).forEach((t=>{s.forEach((e=>t.setAttribute(e,r[e])))})),t}function Mt(t,e){return function(t,e,n){const r="string"==typeof e?[e]:e;return xt(yt(t).map((t=>xt(r.map((e=>t[n](e)))))))}(t,e,"getAttribute")}const jt=new Map,At=()=>St||(_t(St=Tt("style[riot]")[0]||document.createElement("style"),"type","text/css"),St.parentNode||document.head.appendChild(St),St);var St,wt={CSS_BY_NAME:jt,add(t,e){return jt.has(t)||(jt.set(t,e),this.inject()),this},inject(){return At().innerHTML=[...jt.values()].join("\n"),this},remove(t){return jt.has(t)&&(jt.delete(t),this.inject()),this}};function Pt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return(r=[...n,...r]).length<t.length?Pt(t,...r):t(...r)}}function Ut(t){return Mt(t,c)||t.tagName.toLowerCase()}const Ct=Object.freeze({$(t){return Tt(t,this.root)[0]},$$(t){return Tt(t,this.root)}}),Dt=Object.freeze({[l]:Et,[p]:Et,[h]:Et}),It=Object.freeze({[d]:Et,[m]:Et,[f]:Et,[b]:Et,[O]:Et,[v]:Et,[g]:Et}),Lt=Object.assign({},Dt,{clone:Et,createDOM:Et}),Yt=q($t);function Kt(e,n){return void 0===n&&(n={}),Object.assign({},function(e){return Array.from(e.attributes).reduce(((e,n)=>(e[t(n.name)]=n.value,e)),{})}(e),Nt(n))}const kt=(t,e)=>t[a]=e;function Bt(t){return[l,p,h].reduce(((e,n)=>(e[n]=t(n),e)),{})}function Rt(t,e){const n=function(t){void 0===t&&(t={});return Object.entries(Nt(t)).reduce(((t,e)=>{let[n,r]=e;
/* Riot v6.1.2, @license MIT */
var s;return t[(s=n,s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())]=$t(r),t}),{})}(e.exports?e.exports.components:{});return t(gt,P,w,(t=>t===e.name?Yt(e):n[t]||i.get(t)))}function $t(t){const{css:e,template:n,exports:r,name:s}=t,o=n?Rt(n,t):Lt;return t=>{let{slots:i,attributes:a,props:u}=t;if(r&&r[x])return function(t,e){let{slots:n,attributes:r,props:s,css:o,template:i}=e;i&&V("Pure components can not have html"),o&&V("Pure components do not have css");const a=Y(t({slots:n,attributes:r,props:s}),Dt);return Bt((t=>function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(t===l){const[t]=n;I(t,x,!0),kt(t,a)}return a[t](...n),a}))}(r,{slots:i,attributes:a,props:u,css:e,template:n});const c=Nt(r)||{},p=zt({css:e,template:o,componentAPI:c,name:s})({slots:i,attributes:a,props:u});return{mount:(t,e,n)=>p.mount(t,n,e),update:(t,e)=>p.update(e,t),unmount:t=>p.unmount(t)}}}function zt(t){let{css:e,template:n,componentAPI:r,name:s}=t;return e&&s&&wt.add(s,e),Pt(Ht)(L(Y(r,Object.assign({},It,{[E]:{},[N]:{}})),Object.assign({[y]:null,[T]:null},Ct,{name:s,css:e,template:n})))}function Ft(t,e){return Object.assign({},t,Nt(e))}function Ht(t,e){let{slots:n,attributes:r,props:s}=e;return o=function(t){return[...u].reduce(((t,e)=>e(t)||t),t)}(L($(t)?Object.create(t):t,{mount(e,o,i){return void 0===o&&(o={}),I(e,x,!1),this[M]=i,this[j]=function(t,e){void 0===e&&(e=[]);const n=e.map((e=>at(t,e))),r={};return Object.assign(r,Object.assign({expressions:n},Bt((t=>e=>(n.forEach((n=>n[t](e))),r)))))}(e,r).mount(i),I(this,E,Object.freeze(Object.assign({},Kt(e,s),W(this[j].expressions)))),this.state=Ft(this.state,o),this[A]=this.template.createDOM(e).clone(),kt(e,this),t.name&&function(t,e){Ut(t)!==e&&_t(t,c,e)}(e,t.name),I(this,T,e),I(this,y,n),this.onBeforeMount(this.props,this.state),this[A].mount(e,this,i),this.onMounted(this.props,this.state),this},update(t,e){void 0===t&&(t={}),e&&(this[M]=e,this[j].update(e));const n=W(this[j].expressions);if(!1!==this.shouldUpdate(n,this.props))return I(this,E,Object.freeze(Object.assign({},this.props,n))),this.state=Ft(this.state,t),this.onBeforeUpdate(this.props,this.state),this[_]||(this[_]=!0,this[A].update(this,this[M])),this.onUpdated(this.props,this.state),this[_]=!1,this},unmount(t){return this.onBeforeUnmount(this.props,this.state),this[j].unmount(),this[A].unmount(this,this[M],null===t?null:!t),this.onUnmounted(this.props,this.state),this}})),Object.keys(t).filter((e=>R(t[e]))).forEach((t=>{o[t]=o[t].bind(o)})),o;var o}const{DOM_COMPONENT_INSTANCE_PROPERTY:Gt,COMPONENTS_IMPLEMENTATION_MAP:Vt,PLUGINS_SET:qt}=S;function Wt(t,e){let{css:n,template:r,exports:s}=e;return Vt.has(t)&&V(`The component "${t}" was already registered`),Vt.set(t,$t({name:t,css:n,template:r,exports:s})),Vt}function Xt(t,e,n){return Tt(t).map((t=>function(t,e,n){const r=n||Ut(t);return i.has(r)||V(`The component named "${r}" was never registered`),i.get(r)({props:e}).mount(t)}(t,e,n)))}const Zt={css:null,exports:{state:{active:!1},handleSwitch(){!0===this.state.active?this.state.active=!1:this.state.active=!0,this.update()}},template:(t,e,n,r)=>t('<div class="example m-top-5"><label class="field-label"><input expr1="expr1" class="field-choice" type="checkbox" name="radio" value="true"/><span class="field-switch"></span></label><div expr2="expr2" class="panel"></div></div>',[{redundantAttribute:"expr1",selector:"[expr1]",expressions:[{type:e.EVENT,name:"onchange",evaluate:t=>()=>{t.handleSwitch()}}]},{type:n.IF,evaluate:t=>t.state.active,redundantAttribute:"expr2",selector:"[expr2]",template:t('<div class="panel__body"><tiny-loading expr3="expr3"></tiny-loading></div>',[{type:n.TAG,getComponent:r,evaluate:t=>"tiny-loading",slots:[],attributes:[{type:e.ATTRIBUTE,name:"active",evaluate:t=>t.state.active}],redundantAttribute:"expr3",selector:"[expr3]"}])}]),name:"example-loading"};Wt("tiny-loading",{css:null,exports:null,template:(t,e,n,r)=>t('<div expr0="expr0" class="loading-wrapper"></div>',[{type:n.IF,evaluate:t=>t.props.active,redundantAttribute:"expr0",selector:"[expr0]",template:t('<div class="loading"><span></span><span></span><span></span></div>',[])}]),name:"tiny-loading"}),Wt("example-loading",Zt),Xt("tiny-loading"),Xt("example-loading")},37:()=>{}},n={};function r(t){var s=n[t];if(void 0!==s)return s.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.m=e,t=[],r.O=(e,n,s,o)=>{if(!n){var i=1/0;for(l=0;l<t.length;l++){for(var[n,s,o]=t[l],a=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(r.O).every((t=>r.O[t](n[u])))?n.splice(u--,1):(a=!1,o<i&&(i=o));if(a){t.splice(l--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,s,o]},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={268:0,908:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var s,o,[i,a,u]=n,c=0;if(i.some((e=>0!==t[e]))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(u)var l=u(r)}for(e&&e(n);c<i.length;c++)o=i[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},n=self.webpackChunk_tiny_components_loading=self.webpackChunk_tiny_components_loading||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.O(void 0,[908],(()=>r(352)));var s=r.O(void 0,[908],(()=>r(37)));s=r.O(s)})();