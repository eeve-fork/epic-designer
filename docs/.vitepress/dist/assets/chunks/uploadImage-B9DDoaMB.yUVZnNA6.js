import{E,a as y}from"./index.BA4NKR8e.js";import{E as V}from"./index.DPskNfiZ.js";import{d as j,j as o,x as n,h as w,ah as t,R as C}from"./framework.Bp6pYewT.js";import"./index-D0Hjkk1x.DbREz0MF.js";import"./index.Ds2ynwF9.js";import"./isEqual.BhnXD_gT.js";import"./use-global-config.CKdSFgtm.js";import"./debounce.ClzP27_a.js";const R=j({props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(p,{emit:m,attrs:d}){const a=o([]),r=o(""),i=o(!1),s=e=>{i.value=e};n(a,e=>{m("update:modelValue",e)}),n(()=>p.modelValue,e=>{if(e!=null&&e.length>0&&a.value!=null){if(a.value===e)return;a.value.length=0,a.value.push(...e)}},{deep:!0,immediate:!0});const c=(e,l)=>{C(()=>{a.value=l})},g=(e,l,u)=>{console.log(u)},f=(e,l,u)=>{y.error("上传失败"),console.error(e)},v=e=>{},h=w(()=>({...d,"file-list":a.value,"list-type":"picture-card",accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",onBeforeUpload:v,onChange:c,onSuccess:g,onError:f,onPreview:x})),x=e=>{e.url&&(r.value=e.url,s(!0))};return()=>t("div",{class:"epic-upload-image"},{default:()=>[t(E,h.value,{default:()=>[t("div",{style:{"text-align":"center"}},{default:()=>[t("span",{class:"iconfont epic-icon-shangchuan1 text-md",style:{"margin-right":"2px"}}),t("div",{class:"ant-upload-text"},{default:()=>"点击上传"})]})]}),(()=>{if(i.value)return t(V,{urlList:[r.value],onClose:()=>{s(!1)}})})()]})}});export{R as default};
