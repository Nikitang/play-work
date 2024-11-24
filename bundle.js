(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(t=n.currentScript.src),!t)){var s=n.getElementsByTagName("script");if(s.length)for(var i=s.length-1;i>-1&&(!t||!/^http(s?):/.test(t));)t=s[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=".",n=Symbol("target"),s=Symbol("unsubscribe");function i(e){return e instanceof Date||e instanceof Set||e instanceof Map||e instanceof WeakSet||e instanceof WeakMap||ArrayBuffer.isView(e)}const a=Array.isArray;function r(e){return"symbol"==typeof e}const o={after:(e,t)=>a(e)?e.slice(t.length):""===t?e:e.slice(t.length+1),concat:(e,n)=>a(e)?(e=[...e],n&&e.push(n),e):n&&void 0!==n.toString?(""!==e&&(e+=t),r(n)?e+n.toString():e+n):e,initial(e){if(a(e))return e.slice(0,-1);if(""===e)return e;const n=e.lastIndexOf(t);return-1===n?"":e.slice(0,n)},last(e){if(a(e))return e.at(-1)??"";if(""===e)return e;const n=e.lastIndexOf(t);return-1===n?e:e.slice(n+1)},walk(e,n){if(a(e))for(const t of e)n(t);else if(""!==e){let s=0,i=e.indexOf(t);if(-1===i)n(e);else for(;s<e.length;)-1===i&&(i=e.length),n(e.slice(s,i)),s=i+1,i=e.indexOf(t,s)}},get(e,t){return this.walk(t,(t=>{e&&(e=e[t])})),e},isSubPath(e,n){if(a(e)){if(e.length<n.length)return!1;for(let t=0;t<n.length;t++)if(e[t]!==n[t])return!1;return!0}return!(e.length<n.length||e!==n&&(!e.startsWith(n)||e[n.length]!==t))},isRootPath:e=>a(e)?0===e.length:""===e};function c(e,t,n){return e.isUnsubscribed||t.ignoreSymbols&&r(n)||t.ignoreUnderscores&&"_"===n.charAt(0)||"ignoreKeys"in t&&t.ignoreKeys.includes(n)}class l{constructor(e){this._equals=e,this._proxyCache=new WeakMap,this._pathCache=new WeakMap,this.isUnsubscribed=!1}_getDescriptorCache(){return void 0===this._descriptorCache&&(this._descriptorCache=new WeakMap),this._descriptorCache}_getProperties(e){const t=this._getDescriptorCache();let n=t.get(e);return void 0===n&&(n={},t.set(e,n)),n}_getOwnPropertyDescriptor(e,t){if(this.isUnsubscribed)return Reflect.getOwnPropertyDescriptor(e,t);const n=this._getProperties(e);let s=n[t];return void 0===s&&(s=Reflect.getOwnPropertyDescriptor(e,t),n[t]=s),s}getProxy(e,t,n,s){if(this.isUnsubscribed)return e;const i=e[s],a=i??e;this._pathCache.set(a,t);let r=this._proxyCache.get(a);return void 0===r&&(r=void 0===i?new Proxy(e,n):e,this._proxyCache.set(a,r)),r}getPath(e){return this.isUnsubscribed?void 0:this._pathCache.get(e)}isDetached(e,t){return!Object.is(e,o.get(t,this.getPath(e)))}defineProperty(e,t,n){return!!Reflect.defineProperty(e,t,n)&&(this.isUnsubscribed||(this._getProperties(e)[t]=n),!0)}setProperty(e,t,n,s,i){if(!this._equals(i,n)||!(t in e)){const i=this._getOwnPropertyDescriptor(e,t);return void 0!==i&&"set"in i?Reflect.set(e,t,n,s):Reflect.set(e,t,n)}return!0}deleteProperty(e,t,n){if(Reflect.deleteProperty(e,t)){if(!this.isUnsubscribed){const s=this._getDescriptorCache().get(e);s&&(delete s[t],this._pathCache.delete(n))}return!0}return!1}isSameDescriptor(e,t,n){const s=this._getOwnPropertyDescriptor(t,n);return void 0!==e&&void 0!==s&&Object.is(e.value,s.value)&&(e.writable||!1)===(s.writable||!1)&&(e.enumerable||!1)===(s.enumerable||!1)&&(e.configurable||!1)===(s.configurable||!1)&&e.get===s.get&&e.set===s.set}isGetInvariant(e,t){const n=this._getOwnPropertyDescriptor(e,t);return void 0!==n&&!0!==n.configurable&&!0!==n.writable}unsubscribe(){this._descriptorCache=null,this._pathCache=null,this._proxyCache=null,this.isUnsubscribed=!0}}function d(e){return"[object Object]"===toString.call(e)}function u(){return!0}function h(e,t){return e.length!==t.length||e.some(((e,n)=>t[n]!==e))}const p=new Set(["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),m=new Set(["concat","includes","indexOf","join","keys","lastIndexOf"]),f={push:u,pop:u,shift:u,unshift:u,copyWithin:h,reverse:h,sort:h,splice:h,flat:h,fill:h},g=new Set([...p,...m,...Object.keys(f)]);function _(e,t){if(e.size!==t.size)return!0;for(const n of e)if(!t.has(n))return!0;return!1}const y=["keys","values","entries"],b=new Set(["has","toString"]),v={add:_,clear:_,delete:_,forEach:_},w=new Set([...b,...Object.keys(v),...y]);function C(e,t){if(e.size!==t.size)return!0;let n;for(const[s,i]of e)if(n=t.get(s),n!==i||void 0===n&&!t.has(s))return!0;return!1}const S=new Set([...b,"get"]),k={set:C,clear:C,delete:C,forEach:C},P=new Set([...S,...Object.keys(k),...y]);class O{constructor(e,t,n,s){this._path=t,this._isChanged=!1,this._clonedCache=new Set,this._hasOnValidate=s,this._changes=s?[]:null,this.clone=void 0===t?e:this._shallowClone(e)}static isHandledMethod(e){return p.has(e)}_shallowClone(e){let t=e;if(d(e))t={...e};else if(a(e)||ArrayBuffer.isView(e))t=[...e];else if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set([...e].map((e=>this._shallowClone(e))));else if(e instanceof Map){t=new Map;for(const[n,s]of e.entries())t.set(n,this._shallowClone(s))}return this._clonedCache.add(t),t}preferredThisArg(e,t,n,s){return e?(a(s)?this._onIsChanged=f[t]:s instanceof Set?this._onIsChanged=v[t]:s instanceof Map&&(this._onIsChanged=k[t]),s):n}update(e,t,n){const s=o.after(e,this._path);if("length"!==t){let e=this.clone;o.walk(s,(t=>{e?.[t]&&(this._clonedCache.has(e[t])||(e[t]=this._shallowClone(e[t])),e=e[t])})),this._hasOnValidate&&this._changes.push({path:s,property:t,previous:n}),e?.[t]&&(e[t]=n)}this._isChanged=!0}undo(e){let t;for(let n=this._changes.length-1;-1!==n;n--)t=this._changes[n],o.get(e,t.path)[t.property]=t.previous}isChanged(e){return void 0===this._onIsChanged?this._isChanged:this._onIsChanged(this.clone,e)}isPathApplicable(e){return o.isRootPath(this._path)||o.isSubPath(e,this._path)}}class x extends O{static isHandledMethod(e){return g.has(e)}}class M extends O{undo(e){e.setTime(this.clone.getTime())}isChanged(e,t){return!t(this.clone.valueOf(),e.valueOf())}}class E extends O{static isHandledMethod(e){return w.has(e)}undo(e){for(const t of this.clone)e.add(t);for(const t of e)this.clone.has(t)||e.delete(t)}}class N extends O{static isHandledMethod(e){return P.has(e)}undo(e){for(const[t,n]of this.clone.entries())e.set(t,n);for(const t of e.keys())this.clone.has(t)||e.delete(t)}}class q extends O{constructor(e,t,n,s){super(void 0,t,n,s),this._argument1=n[0],this._weakValue=e.has(this._argument1)}isChanged(e){return this._weakValue!==e.has(this._argument1)}undo(e){this._weakValue&&!e.has(this._argument1)?e.add(this._argument1):e.delete(this._argument1)}}class D extends O{constructor(e,t,n,s){super(void 0,t,n,s),this._weakKey=n[0],this._weakHas=e.has(this._weakKey),this._weakValue=e.get(this._weakKey)}isChanged(e){return this._weakValue!==e.get(this._weakKey)}undo(e){const t=e.has(this._weakKey);this._weakHas&&!t?e.set(this._weakKey,this._weakValue):!this._weakHas&&t?e.delete(this._weakKey):this._weakValue!==e.get(this._weakKey)&&e.set(this._weakKey,this._weakValue)}}class H{constructor(e){this._stack=[],this._hasOnValidate=e}static isHandledType(e){return d(e)||a(e)||i(e)}static isHandledMethod(e,t){return d(e)?O.isHandledMethod(t):a(e)?x.isHandledMethod(t):e instanceof Set?E.isHandledMethod(t):e instanceof Map?N.isHandledMethod(t):i(e)}get isCloning(){return this._stack.length>0}start(e,t,n){let s=O;a(e)?s=x:e instanceof Date?s=M:e instanceof Set?s=E:e instanceof Map?s=N:e instanceof WeakSet?s=q:e instanceof WeakMap&&(s=D),this._stack.push(new s(e,t,n,this._hasOnValidate))}update(e,t,n){this._stack.at(-1).update(e,t,n)}preferredThisArg(e,t,n){const{name:s}=e,i=H.isHandledMethod(n,s);return this._stack.at(-1).preferredThisArg(i,s,t,n)}isChanged(e,t,n){return this._stack.at(-1).isChanged(e,t,n)}isPartOfClone(e){return this._stack.at(-1).isPathApplicable(e)}undo(e){void 0!==this._previousClone&&this._previousClone.undo(e)}stop(){return this._previousClone=this._stack.pop(),this._previousClone.clone}}const V={equals:Object.is,isShallow:!1,pathAsArray:!1,ignoreSymbols:!1,ignoreUnderscores:!1,ignoreDetached:!1,details:!1},R=(e,d,u={})=>{u={...V,...u};const h=Symbol("ProxyTarget"),{equals:p,isShallow:m,ignoreDetached:f,details:g}=u,_=new l(p),y="function"==typeof u.onValidate,b=new H(y),v=(e,t,n,s,i)=>!y||b.isCloning||!0===u.onValidate(o.concat(_.getPath(e),t),n,s,i),w=(t,n,s,i)=>{c(_,u,n)||f&&_.isDetached(t,e)||C(_.getPath(t),n,s,i)},C=(e,t,n,s,i)=>{b.isCloning&&b.isPartOfClone(e)?b.update(e,t,s):d(o.concat(e,t),n,s,i)},S=e=>e?e[h]??e:e,k=(t,n,s,i)=>{if(function(e){return("object"==typeof e?null===e:"function"!=typeof e)||e instanceof RegExp}(t)||"constructor"===s||m&&!H.isHandledMethod(n,s)||c(_,u,s)||_.isGetInvariant(n,s)||f&&_.isDetached(n,e))return t;void 0===i&&(i=_.getPath(n));const a=o.concat(i,s),r=_.getPath(t);return r&&P(a,r)?_.getProxy(t,r,O,h):_.getProxy(t,a,O,h)},P=(e,n)=>{if(r(e)||e.length<=n.length)return!1;if(a(n)&&0===n.length)return!1;const s=a(e)?e:e.split(t),i=a(n)?n:n.split(t);return!(s.length<=i.length||i.some(((e,t)=>e!==s[t])))},O={get(e,t,a){if(r(t)){if(t===h||t===n)return e;if(t===s&&!_.isUnsubscribed&&0===_.getPath(e).length)return _.unsubscribe(),e}const o=i(e)?Reflect.get(e,t):Reflect.get(e,t,a);return k(o,e,t)},set(e,t,n,s){n=S(n);const i=e[h]??e,a=i[t];if(p(a,n)&&t in e)return!0;const r=v(e,t,n,a);return r&&_.setProperty(i,t,n,s,a)?(w(e,t,e[t],a),!0):!r},defineProperty(e,t,n){if(!_.isSameDescriptor(n,e,t)){const s=e[t];v(e,t,n.value,s)&&_.defineProperty(e,t,n,s)&&w(e,t,n.value,s)}return!0},deleteProperty(e,t){if(!Reflect.has(e,t))return!0;const n=Reflect.get(e,t),s=v(e,t,void 0,n);return s&&_.deleteProperty(e,t,n)?(w(e,t,void 0,n),!0):!s},apply(t,s,i){const a=s[h]??s;if(_.isUnsubscribed)return Reflect.apply(t,a,i);if((!1===g||!0!==g&&!g.includes(t.name))&&H.isHandledType(a)){let c=o.initial(_.getPath(t));const l=H.isHandledMethod(a,t.name);b.start(a,c,i);let d=Reflect.apply(t,b.preferredThisArg(t,s,a),l?i.map((e=>S(e))):i);const u=b.isChanged(a,p),h=b.stop();if(H.isHandledType(d)&&l&&(s instanceof Map&&"get"===t.name&&(c=o.concat(c,i[0])),d=_.getProxy(d,c,O)),u){const n={name:t.name,args:i,result:d},s=b.isCloning?o.initial(c):c,r=b.isCloning?o.last(c):"";v(o.get(e,s),r,a,h,n)?C(s,r,a,h,n):b.undo(a)}return(s instanceof Map||s instanceof Set)&&"object"==typeof(r=d)&&"function"==typeof r.next?function(e,t,s,i,a){const r=e.next;if("entries"===t.name)e.next=function(){const e=r.call(this);return!1===e.done&&(e.value[0]=a(e.value[0],t,e.value[0],i),e.value[1]=a(e.value[1],t,e.value[0],i)),e};else if("values"===t.name){const o=s[n].keys();e.next=function(){const e=r.call(this);return!1===e.done&&(e.value=a(e.value,t,o.next().value,i)),e}}else e.next=function(){const e=r.call(this);return!1===e.done&&(e.value=a(e.value,t,e.value,i)),e};return e}(d,t,s,c,k):d}var r;return Reflect.apply(t,s,i)}},x=_.getProxy(e,u.pathAsArray?[]:"",O);return d=d.bind(x),y&&(u.onValidate=u.onValidate.bind(x)),x};R.target=e=>e?.[n]??e,R.unsubscribe=e=>e?.[s]??e;const A=R,L=(e.p,e.p+"68c84e3a3a25be5db076.png"),I=e.p+"396676a1e0b1b341d76e.png",T=e.p+"1fa160c3bdf629191a62.png",j=e.p+"0ab8771398f63caaa058.png",U=e.p+"bc62c93b678e5281845a.png",K=e.p+"311fec17edfd637f7f1e.png",$=e.p+"9e0b5d63690af083c0b4.png",W=[{id:"123",name:"Владимир",lastName:"Ларионов",img:"male",points:"463"},{id:"9",name:"Владимир",lastName:"Сергеев",img:"male",points:"521"},{id:"231",name:"Вениамин",lastName:"Васильев",img:"male",points:"865"},{id:"321",name:"Мария",lastName:"Логинова",img:"female",points:"865"},{id:"492",name:"Борис",lastName:"Казанцев",img:"male",points:"784"},{id:"452",name:"Полина",lastName:"Калинина",img:"female",points:"225"},{id:"796",name:"Даниил",lastName:"Воробьёв",img:"male",points:"642"},{id:"4",name:"Эрик",lastName:"Аксёнов",img:"male",points:"150"},{id:"1155",name:"Иван",lastName:"Иванов",img:"male",points:"100"},{id:"12145",name:"Артем",lastName:"Алексеев",img:"male",points:"1000"}].sort(((e,t)=>t.points-e.points)),B=[{id:"9",name:"Владимир",lastName:"Сергеев",img:"male"},{id:"4",name:"Эрик",lastName:"Аксёнов",img:"male"},{id:"15411",name:"Ирина",lastName:"Чеснокова",img:"female"},{id:"15564",name:"Дарина",lastName:"Ляхина",img:"female"},{id:"52",name:"Владимир",lastName:"Грачёв",img:"male"},{id:"42",name:"Эрик",lastName:"Фролов",img:"male"},{id:"15",name:"Ирина",lastName:"Петрова",img:"female"},{id:"191",name:"Дарина",lastName:"Нифёдова",img:"female"},{id:"927",name:"Владимир",lastName:"Крапов",img:"male"},{id:"83",name:"Эрик",lastName:"Иванов",img:"male"},{id:"44",name:"Ирина",lastName:"Алексина",img:"female"},{id:"66",name:"Дарина",lastName:"Боброва",img:"female"}],z=e.p+"c10add7557da5d8fb4e5.png",F=e.p+"c9c1c5d3cd1815ba3de0.png",G=e.p+"bfd80d93c3b77f65c957.png",J=e.p+"f40b72cfb4c8e3732b3e.png",Q=(document.querySelector(".map__items-rating"),e.p+"b6c591bde4aca9ab39da.png");!function(){document.querySelector(".map__items-chat").querySelector("img").src=L,document.querySelector(".map__items-go").querySelector("img").src=I,document.querySelector(".map__items-sms").querySelector("img").src=T,document.querySelector(".map__items-rating").querySelector("img").src=j;const e=document.querySelector(".map__menu-peoples-close");e.src=U,document.querySelector(".map__items-friends-left-btn img").src=K,document.querySelector(".map__items-friends-right-btn img").src=$;const t=A({isOpenMenu:!1},((e,t)=>{"isOpenMenu"===e&&((e=!1)=>{const t=document.querySelector(".map__menu");e?t.classList.add("opened"):t.classList.remove("opened")})(t)}));document.querySelector(".map__items-rating").addEventListener("click",(()=>t.isOpenMenu=!t.isOpenMenu)),e.addEventListener("click",(()=>t.isOpenMenu=!1));const n=document.querySelector(".map__items-go"),s=document.querySelector(".map__sprite-container-img");n.addEventListener("click",(()=>{const e=window.getComputedStyle(s),t=parseFloat(e.top),n=parseFloat(e.left);390===t&&90===n||(s.style.animation="",s.style.animation="move 9s linear forwards",s.style.backgroundPosition="0",s.style.animation="play 0.8s steps(9) infinite, move 9s linear forwards",setTimeout((()=>{s.style.animation="move 9s linear forwards"}),8900))})),(()=>{const e=W.filter((e=>B.map((e=>e.id)).includes(e.id))),t=document.querySelector(".map__menu-peoples"),n=document.createElement("ul");W.forEach(((t,s)=>{const i=document.createElement("li"),a=document.createElement("div");a.classList.add("map__menu-people"),a.style.backgroundImage=`url(${z})`;const r=document.createElement("div");r.classList.add("map__menu-people-place");const o=document.createElement("span");o.textContent=`${s+1}`,r.appendChild(o);const c=document.createElement("div");c.classList.add("map__menu-people-person");const l=document.createElement("div");l.classList.add("map__menu-people-person-icon"),l.style.backgroundImage=`url(${F})`;const d=document.createElement("img");d.src="male"===t.img?G:J,l.appendChild(d);const u=document.createElement("div");u.classList.add("map__menu-people-person-name");const h=document.createElement("span");e.forEach((e=>e.id===t.id?h.style.color="green":null)),h.textContent=`${t.name} ${t.lastName}`,u.appendChild(h),c.appendChild(l),c.appendChild(u);const p=document.createElement("div");p.classList.add("map__menu-people-points");const m=document.createElement("span");m.textContent=`${t.points}`,p.appendChild(m),a.appendChild(r),a.appendChild(c),a.appendChild(p),i.appendChild(a),n.appendChild(i)})),t.appendChild(n)})(),(()=>{const e=document.querySelector(".map__items-friends-list");B.forEach((t=>{const n=document.createElement("div");n.classList.add("map__items-friends-list-item"),n.style.backgroundImage=`url(${Q})`;const s=document.createElement("img");s.classList.add("map__items-friends-list-item-icon"),s.src="male"===t.img?G:J,n.appendChild(s),e.appendChild(n)}));const t=document.querySelector(".map__items-friends-left-btn"),n=document.querySelector(".map__items-friends-right-btn");t.addEventListener("click",(()=>{e.scrollBy({left:-60,behavior:"smooth"})})),n.addEventListener("click",(()=>{e.scrollBy({left:60,behavior:"smooth"})}))})()}()})();