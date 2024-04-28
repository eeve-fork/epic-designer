import{i as V,D as A,p as x,r as U,m as B,o as m,c as k,d as C,e as b,v as j,u as v,aa as F,ab as G,k as h,F as $,E as z,t as K,G as N,y as H,ac as E,C as I}from"../app.c1700df1.js";import{m as D}from"./icon.vue_vue_type_script_setup_true_lang-3f9e4127.b898144b.js";import{N as _}from"./index.fb95377d.js";import{R as J}from"./vuedraggable.umd-6a5b6da9.96e89de6.js";const P=V({name:"ETreeNodeItem",__name:"treeNodeItem",props:{schema:{}},setup(y){const a=y,i=h("slots",{}),o=h("expandedKeys"),r=h("treeProps"),f=h("selectedKeys"),c=h("handleSelect"),p=B(()=>{var s;return o.value.includes((s=a.schema.id)!=null?s:"")}),g=V({setup(){return()=>{var l;var s;return E("span",{class:{text:!0,hover:r.hoverKey===a.schema.id,checked:f.value.includes(a.schema.id)},onClick:()=>c(a.schema.id,a.schema)},(l=(s=i["tree-node"])==null?void 0:s.call(i,a))!=null?l:E("span",{class:"text-padding"},{default:()=>{var e;var t;return[(e=a.schema.label)!=null?e:(t=_.getComponentConfingByType(a.schema.type))==null?void 0:t.defaultSchema.label,E("span",{class:"epic-node-type-text"},a.schema.type)]}}))}}});function n(){const s=a.schema.id;if(!s)return!1;o.value.includes(s)?o.value=o.value.filter(l=>l!==s):o.value.push(s)}function u(){var s;const l=a.schema.id;if(!l||!((s=a.schema.children)!=null&&s.length))return!1;o.value.push(l)}return u(),(s,l)=>{var t,e,d;return m(),k("li",{class:N(["epic-tree-node",{expanded:(t=a.schema.children)==null?void 0:t.length,"level-1":a.schema.type==="page"}])},[C("a",null,[(e=a.schema.children)!=null&&e.length&&a.schema.type!=="page"?(m(),k("span",{key:0,class:N(["icon-expanded",{expanded:p.value}]),onClick:n},[b(v(D),{name:"icon-youjiantou"})],2)):I("",!0),b(v(g))]),(d=a.schema.children)!=null&&d.length?(m(),K(R,{key:0,class:N(["epic-tree-sublist",{expanded:p.value}]),schemas:a.schema.children,"onUpdate:schemas":l[0]||(l[0]=S=>a.schema.children=S),parentSchema:a.schema},null,8,["class","schemas","parentSchema"])):I("",!0)],2)}}}),L={key:1},R=V({name:"ETreeNodes",__name:"treeNodes",props:{schemas:{},parentSchema:{}},emits:["update:schemas"],setup(y,{emit:a}){const i=h("designer"),o=h("treeProps"),r=y,f=a,c=B({get(){return r.schemas},set(n){f("update:schemas",n)}});function p(n){i.setDisableHover(!0),i.setCheckedNode(c.value[n])}function g(n){return n.type==="page"||_.getComponentConfingByType(n.type).immovable?"unmover-item":"draggable-item"}return(n,u)=>{var s,l,t;return(l=v(_).getComponentConfingByType(((s=r.parentSchema)==null?void 0:s.type)||""))!=null&&l.childImmovable?(m(),k("ul",L,[(m(!0),k($,null,z(c.value,e=>(m(),K(P,{key:e.id,schema:e},null,8,["schema"]))),128))])):(m(),K(v(J),H({key:0,modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=e=>c.value=e),"item-key":"id","component-data":{},class:"draggable-range"},{animation:200,tag:"ul",group:"tree-draggable",ghostClass:"moveing",draggable:".draggable-item",disabled:!v(o).draggable||((t=c.value[0])==null?void 0:t.type)==="page"},{onStart:u[1]||(u[1]=e=>p(e.oldIndex))}),{item:j(({element:e,index:d})=>[(m(),K(P,{class:N(g(e)),key:e.id,schema:e},null,8,["class","schema"]))]),_:1},16,["modelValue"]))}}}),O={class:"epic-tree h-full flex flex-col"},Q={class:"search-box px-10px py-6px"},q={class:"epic-tree-main flex-1 overflow-auto h-0"},M={class:"text-center pt-42px text-gray-400"},ee=V({name:"ETree",__name:"tree",props:{options:{type:Array,default:()=>[]},hoverKey:{type:String,default:""},selectedKeys:{type:Array,default:()=>[]},draggable:{type:Boolean,default:!1}},emits:["update:selectedKeys","nodeClick"],setup(y,{emit:a}){const i=A();x("slots",i);const o=_.getComponent("input"),r=U(""),f=U([]),c=y,p=a,g=B({get(){return c.selectedKeys},set(l){p("update:selectedKeys",l)}}),n=B({get(){return u(c.options,r.value)},set(l){console.log(l)}});function u(l,t){const e=[];return l.forEach(d=>{var S;if((S=d.label)!=null&&S.includes(t))e.push(d);else if(d.children){const w=u(d.children,t);if(w.length>0){const T={...d};T.children=w,e.push(T)}}}),e}function s(l,t){g.value=[l],p("nodeClick",{id:l,componentSchema:t})}return x("expandedKeys",f),x("selectedKeys",g),x("treeProps",c),x("handleSelect",s),(l,t)=>(m(),k("div",O,[C("div",Q,[b(v(o),{placeholder:"\u641C\u7D22\u8282\u70B9",clearable:"",allowClear:"",modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),value:r.value,"onUpdate:value":t[1]||(t[1]=e=>r.value=e)},{prefix:j(()=>[b(v(D),{name:"icon-chaxun"})]),_:1},8,["modelValue","value"])]),C("div",q,[C("ul",null,[b(R,{schemas:n.value,"onUpdate:schemas":t[2]||(t[2]=e=>n.value=e)},null,8,["schemas"])]),F(C("div",M,"\u6CA1\u6709\u67E5\u8BE2\u5230\u7684\u6570\u636E",512),[[G,!n.value.length]])])]))}});export{ee as e};
