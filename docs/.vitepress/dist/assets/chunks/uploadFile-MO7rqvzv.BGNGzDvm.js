import{E as c,a as h}from"./index.BA4NKR8e.js";import{E as g}from"./index.DJ-2FSI2.js";import{d as v,j as E,x as r,h as x,ah as l,R as y}from"./framework.Bp6pYewT.js";import"./index-D0Hjkk1x.DbREz0MF.js";import"./index.Ds2ynwF9.js";import"./isEqual.BhnXD_gT.js";import"./use-global-config.CKdSFgtm.js";import"./use-form-item.D6dUcE8J.js";const M=v({props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(n,{emit:s,attrs:u}){const a=E([]);r(a,e=>{s("update:modelValue",e)}),r(()=>n.modelValue,e=>{if(e!=null&&e.length>0&&a.value!=null){if(a.value===e)return;a.value.length=0,a.value.push(...e)}},{deep:!0,immediate:!0});const p=(e,o)=>{y(()=>{a.value=o})},i=e=>{},m=(e,o,t)=>{console.log(t)},d=(e,o,t)=>{h.error("上传失败"),console.error(e)},f=x(()=>({...u,"file-list":a.value,onBeforeUpload:i,onChange:p,onSuccess:m,onError:d}));return()=>l("div",null,{default:()=>[l(c,f.value,{default:()=>[l(g,{},{default:()=>[l("span",{class:"iconfont epic-icon-shangchuan1",style:{"margin-right":"2px"}}),l("span",null,{default:()=>"上传文件"})]})]})]})}});export{M as default};
