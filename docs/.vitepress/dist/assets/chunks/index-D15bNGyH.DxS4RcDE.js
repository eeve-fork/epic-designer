import{T as v}from"./index-D0Hjkk1x.DbREz0MF.js";import{m as p}from"./icon.vue_vue_type_script_setup_true_lang-BKjDMfHm.DAq6Hevl.js";import{d,h as f,j as k,G as b,o as t,c,l as a,F as x,D as C,n as u,I as B,m as h,t as y,b as D,J as w}from"./framework.Bp6pYewT.js";const E={class:"flex relative"},N={class:"epic-action-bar"},V={class:"epic-actions-container"},g=["title","onClick"],z={class:"text-14px"},A={class:"epic-sidebar-container"},J=d({name:"EActionBar",__name:"index",setup(F){const r=f(()=>v.viewsContainers.activitybars.value.filter(l=>l.visible)),e=k(0),n=b(null);n.value=r.value[0].component;function m(l,s){if(e.value===s)return e.value=null,!1;n.value=l.component,e.value=s}return(l,s)=>(t(),c("div",E,[a("div",N,[a("ul",V,[(t(!0),c(x,null,C(r.value,(i,o)=>(t(),c("li",{key:o,class:u(["epic-action-item",{checked:e.value===o}]),title:i.title,onClick:_=>m(i,o)},[B(h(p),{prefix:"",class:"iconfont relative",name:i.icon},null,8,["name"]),a("div",z,y(i.title),1)],10,g))),128))])]),a("div",{class:u(["epic-left-sidebar",{hide:e.value===null}])},[a("div",A,[(t(),D(w(n.value)))])],2)]))}});export{J as default};
