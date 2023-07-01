(function(s,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],a):(s=typeof globalThis<"u"?globalThis:s||self,a(s.index={},s.Vue))})(this,function(s,a){"use strict";var ue=Object.defineProperty;var se=(s,a,m)=>a in s?ue(s,a,{enumerable:!0,configurable:!0,writable:!0,value:m}):s[a]=m;var v=(s,a,m)=>(se(s,typeof a!="symbol"?a+"":a,m),m);function m(t=10){return Number(`${Math.random().toString().substring(3,t)}${Date.now()}`).toString(36)}function T(t){return t.charAt(0).toUpperCase()+t.slice(1)}function S(t,e=new WeakMap){if(typeof t!="object"||t===null)return t;if(e.has(t))return e.get(t);if(Array.isArray(t)){const r=t.map(o=>S(o,e));return e.set(t,r),r}const n={};return e.set(t,n),Object.keys(t).forEach(r=>{n[r]=S(t[r],e)}),n}function D(t,e){for(const[n,r]of Object.entries(e)){const o=t==null?void 0:t[n];o&&r&&typeof o=="object"&&typeof r=="object"?D(o,r):t[n]=r}Object.keys(t).reverse().forEach(n=>{e.hasOwnProperty(n)||(Array.isArray(e)?t.splice(n,1):delete t[n])})}function K(t,e,n=new WeakMap){const r=o=>{if(Array.isArray(o))return o.map(r);if(typeof o=="object"&&o!==null){if(n.has(o))return"[Circular]";n.set(o,!0);const u=Object.keys(o).sort(),l={};return u.forEach(i=>{l[i]=r(o[i])}),n.delete(o),l}else return o};return JSON.stringify(r(t))===JSON.stringify(r(e))}const g=(t,e)=>a.defineAsyncComponent({loader:t,loadingComponent:e,delay:80});function V(t,e){var r;const n=[{type:"root",children:t}];for(;n.length>0;){const o=n.pop(),u=o==null?void 0:o.children;if(u!=null)for(let l=0;l<u.length;l++){if(u[l].id===e)return{list:(r=o==null?void 0:o.children)!=null?r:[],schema:u[l],index:l};n.push(...u)}}throw new Error(`\u6CA1\u6709\u67E5\u8BE2\u5230id\u4E3A${e}\u7684\u8282\u70B9`)}function U(t,e){const n=[];let r=!1;function o(u){if(n.push(u),u.id===e&&(r=!0),!r&&u.children!=null&&u.children.length>0)for(let l=0;l<u.children.length&&(o(u.children[l]),!r);l++);r||n.pop()}return t.forEach(o),r||console.error(`\u6CA1\u6709\u67E5\u8BE2\u5230id\u4E3A${e}\u7684\u8282\u70B9`),n}function J(t,e){const n=t.split(".");let r=e;for(let o=0;o<n.length;o++)if(r=r[n[o]],r==null&&r!==!1&&r!==0)return;return r}function z(t,e,n){const r=e.split(".");let o=n;r.forEach((u,l)=>{var i;if(l===r.length-1){o[u]=t;return}o=(i=o[u])!=null?i:o[u]={}})}class O{constructor(){v(this,"components",{});v(this,"componentConfigs",{});v(this,"schemaGroup",[]);v(this,"schemaGroupList",a.ref([]));v(this,"viewsContainers",{activitybars:[],rightSidebars:[]});v(this,"publicMethods",{test:{describe:"\u6D4B\u8BD5\u51FD\u6570",methodName:"test",method:()=>{alert("\u6D4B\u8BD5\u51FD\u6570\u5F39\u51FA")}}})}component(e,n){typeof n=="function"&&(n=g(n)),this.components[e]=n}registerComponent(e){this.component(e.defaultSchema.type,e.component),this.componentConfigs[e.defaultSchema.type]=e}getComponents(){return this.components}getComponent(e){return this.components[e]}registerActivitybar(e){typeof e.component=="function"&&(e.component=g(e.component));const n=this.viewsContainers.activitybars.findIndex(r=>r.id===e.id);n!==-1?this.viewsContainers.activitybars[n]=e:this.viewsContainers.activitybars.push(e)}getActivitybars(){return this.viewsContainers.activitybars}registerRightSidebar(e){typeof e.component=="function"&&(e.component=g(e.component));const n=this.viewsContainers.rightSidebars.findIndex(r=>r.id===e.id);n!==-1?this.viewsContainers.rightSidebars[n]=e:this.viewsContainers.rightSidebars.push(e)}getRightSidebars(){return this.viewsContainers.rightSidebars}getComponentConfings(){return this.componentConfigs}getComponentConfingByType(e){return this.componentConfigs[e]}setSchemaGroup(e){this.schemaGroup=e,this.computedSchemaGroupList()}addSchemaGroup(e){this.schemaGroup.push(e),this.computedSchemaGroupList()}computedSchemaGroupList(){const e=this.schemaGroup.map(n=>{const r=n.list.map(o=>{var l;const u=(l=this.componentConfigs[o])==null?void 0:l.defaultSchema;return u==null?(console.warn(`${o} \u7EC4\u4EF6\u672A\u6CE8\u518C\u5230pluginManager\u4E2D`),!1):{...u,id:m()}}).filter(o=>o);return{...n,list:r}});this.schemaGroupList.value=e}getSchemaByGroup(){return this.schemaGroupList}addPublicMethod(e){this.publicMethods[e.methodName]=e}}const P=new O;function F(){const t=a.ref({}),e=a.ref({});function n(c){return t.value[c]}function r(c,p){t.value[c]=p}function o(c){delete t.value[c]}function u(c){const p=Object.entries(P.publicMethods).reduce((f,[d,h])=>(f[d]=h.method,f),{});new Function(`${c}`).bind({getComponent:n,defineExpose:l,...p})()}function l(c){c!=null&&(e.value=c)}function i(c,...p){c==null||c.forEach(f=>{var h,y;const d=f.componentId!=null&&n(f.componentId);if(Boolean(d)&&typeof d[f.methodName]=="function"){d[f.methodName](...p);return}(y=(h=e.value)[f.methodName])==null||y.call(h,...p)})}return{componentInstances:t,funcs:e,getComponentInstance:n,addComponentInstance:r,removeComponentInstance:o,setMethods:u,doActions:i}}function W(){const t=a.ref([]),e=a.ref([]),n=a.ref(null);let r=0;function o(i,c="\u63D2\u5165\u7EC4\u4EF6"){const p=Date.now();r+150>p||(r=p,n.value!=null&&(t.value.push(n.value),e.value.splice(0,e.value.length)),n.value={type:c,record:JSON.stringify(i)},t.value.length>20&&t.value.unshift())}function u(){if(t.value.length===0)return!1;const i=t.value.pop();return n.value!=null&&e.value.push(n.value),n.value=i,JSON.parse(i.record)}function l(){if(e.value.length===0)return!1;const i=e.value.pop();return n.value!=null&&t.value.push(n.value),n.value=i,JSON.parse(i.record)}return{recordList:t,undoList:e,currentRecord:n,push:o,undo:u,redo:l}}const q=W();function M(t){return a.getCurrentScope()?(a.onScopeDispose(t),!0):!1}function _(t){let e=0,n,r;const o=()=>{e-=1,r&&e<=0&&(r.stop(),n=void 0,r=void 0)};return(...u)=>(e+=1,n||(r=a.effectScope(!0),n=r.run(()=>t(...u))),M(o),n)}function C(t){return typeof t=="function"?t():a.unref(t)}const R=typeof window<"u",Y=()=>{};function Z(t){var e;const n=C(t);return(e=n==null?void 0:n.$el)!=null?e:n}const I=R?window:void 0;function X(...t){let e,n,r,o;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,o]=t,e=I):[e,n,r,o]=t,!e)return Y;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const u=[],l=()=>{u.forEach(f=>f()),u.length=0},i=(f,d,h,y)=>(f.addEventListener(d,h,y),()=>f.removeEventListener(d,h,y)),c=a.watch(()=>[Z(e),C(o)],([f,d])=>{l(),f&&u.push(...n.flatMap(h=>r.map(y=>i(f,h,y,d))))},{immediate:!0,flush:"post"}),p=()=>{c(),l()};return M(p),p}var H=Object.defineProperty,Q=Object.defineProperties,x=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,$=(t,e,n)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,N=(t,e)=>{for(var n in e||(e={}))j.call(e,n)&&$(t,n,e[n]);if(L)for(var n of L(e))ee.call(e,n)&&$(t,n,e[n]);return t},B=(t,e)=>Q(t,x(e));function te(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function G(...t){let e,n,r={};t.length===3?(e=t[0],n=t[1],r=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],r=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:o=I,eventName:u="keydown",passive:l=!1,dedupe:i=!1}=r,c=te(e);return X(o,u,f=>{f.repeat&&C(i)||c(f)&&n(f)},l)}function w(t,e,n={}){return G(t,e,B(N({},n),{eventName:"keydown"}))}function E(t,e,n={}){return G(t,e,B(N({},n),{eventName:"keyup"}))}function ne(){const t=a.ref(!1),e=a.ref(!1),n=a.ref(!1);return w(" ",r=>{r.preventDefault(),t.value=!0}),E(" ",()=>{t.value=!1}),w("Shift",r=>{r.preventDefault(),e.value=!0}),E("Shift",()=>{e.value=!1}),w("Control",r=>{r.preventDefault(),n.value=!0}),E("Control",()=>{n.value=!1}),{pressSpace:t,pressShift:e,pressCtrl:n}}function b(){return{canvasScale:a.ref(1)}}const k=_(b),A=_(ne);function re(t){const{pressSpace:e}=A();let n=0,r=0;function o(i){var c;n=i.x,r=i.y,(c=i.dataTransfer)==null||c.setDragImage(document.createElement("div"),0,0)}function u(i){if(i.preventDefault(),!i.x||!i.y||!e.value)return;const c=i.x-n,p=i.y-r;n=i.x,r=i.y,t.value&&(t.value.scrollTop-=p,t.value.scrollLeft-=c)}function l(){e.value=!1}return{handleElementDragStart:o,handleElementDrag:u,handleElementDragEnd:l}}function oe(t){const{pressCtrl:e}=A(),{canvasScale:n}=k();function r(o){if(!e.value)return;o.preventDefault();let u=0;o.deltaY<0?u=n.value+.05:u=n.value-.05,!(u>2||u<.2)&&(n.value=u)}return a.watch(()=>n.value,o=>{t.value&&(t.value.style.transform=`scale(${o})`)}),{handleZoom:r,canvasScale:n}}s.PluginManager=O,s.capitalizeFirstLetter=T,s.deepClone=S,s.deepCompareAndModify=D,s.deepEqual=K,s.findSchemaById=V,s.getAttributeValue=J,s.getMatchedById=U,s.getUUID=m,s.loadAsyncComponent=g,s.pluginManager=P,s.revoke=q,s.setAttributeValue=z,s.useElementDrag=re,s.useElementZoom=oe,s.usePageManager=F,s.useShareKeyPress=A,s.useShareStore=k,s.useStore=b,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
