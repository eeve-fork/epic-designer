import{i as w,k as v,m as k,r as S,w as D,o as d,c as u,F as C,E as N,aa as P,ab as V,d as r,a4 as E,e as F,u as m,G as I,H as z}from"../app.c1700df1.js";import{N as B,co as U,c9 as j,cp as f,ci as x}from"./index.fb95377d.js";const A=["title"],T={class:"attr-input"},L=w({__name:"attributeView",setup(_){const s=v("designer"),c=v("pageSchema"),h=B.getComponentConfings(),n=k(()=>s.state.checkedNode);function b(a){var o;return typeof a.show=="boolean"?a.show:typeof a.show=="function"?(o=a.show)==null?void 0:o.call(a,{values:n.value}):!0}const i=S([]);D(()=>{var a;return(a=s.state.checkedNode)==null?void 0:a.type},()=>{var l;var a,o;const t=(a=s.state.checkedNode)==null?void 0:a.type;if(!t)return[];const e=(l=(o=h[t])==null?void 0:o.config.attribute)!=null?l:[];i.value=[{label:"\u7EC4\u4EF6ID",type:"input",field:"id",componentProps:{disabled:!0}},...e],t==="page"&&i.value.push({label:"\u753B\u5E03\u5BBD\u5EA6",type:"EInputSize",field:"canvas.width",editData:c},{label:"\u753B\u5E03\u9AD8\u5EA6",type:"EInputSize",field:"canvas.height",editData:c})},{immediate:!0});function g(a,o,t,e=n.value){typeof t.onChange=="function"&&t.onChange({value:a,values:e,componentAttributes:i}),t.changeSync?f(a,o,e):z(()=>{f(a,o,e)}),x.push(c.schemas,"\u7F16\u8F91\u7EC4\u4EF6\u5C5E\u6027")}return(a,o)=>{var t;return d(),u("aside",{class:"epic-attribute-view",key:(t=n.value)==null?void 0:t.id},[(d(!0),u(C,null,N(i.value,e=>{var p;var l;return d(),u("div",{key:e.field},[P(r("div",{class:I(["attr-item",e.layout])},[r("div",{class:"attr-label",title:e.label},E(e.label),9,A),r("div",T,[F(m(j),{componentSchema:{...e,componentProps:{...e.componentProps,...e.field==="componentProps.defaultValue"?(l=n.value)==null?void 0:l.componentProps:{},input:!1,field:void 0,hidden:!1},show:!0,noFormItem:!0},"model-value":m(U)(e.field,(p=e.editData)!=null?p:n.value),"onUpdate:modelValue":y=>g(y,e.field,e,e.editData)},null,8,["componentSchema","model-value","onUpdate:modelValue"])])],2),[[V,b(e)]])])}),128))])}}});export{L as default};
