import{g as c,w as k,o as d,e as f,i as m,l as v,j as y,m as p,n as C,k as b,T as w}from"./vendor.d121aa1e.js";import{o as h}from"./index.c3c05765.js";import{_ as B}from"./index.80f6b431.js";const S={name:"TwDropdown",props:{origin:{type:String,default:"left",validator(t){return["left","right"].includes(t)}},bodyClass:{type:[String,Array,Object],default:""},hideOnClick:{type:Boolean},trigger:{type:String,default:"click",validator(t){return["click","hover"].includes(t)}}},emits:["show","hide"],setup(t,{emit:o}){const e=c(!1);k(e,n=>{o("show",n.value),o("hide",!n.value)});const a=t.trigger==="click",i=!a,l=()=>{a&&(e.value=!e.value)},r=()=>{i&&(e.value=!0)},u=()=>{i&&(e.value=!1)},g=()=>{t.hideOnClick&&(e.value=!1)},s=c(null);return h(s,()=>e.value=!1),{open:e,click:l,hover:r,leave:u,bodyClick:g,dropdownRef:s}}};function D(t,o,e,a,i,l){return d(),f("div",{ref:"dropdownRef",class:"relative inline-block",onMouseleave:o[3]||(o[3]=r=>a.leave())},[m("span",{onClick:o[0]||(o[0]=(...r)=>a.click&&a.click(...r)),onMouseover:o[1]||(o[1]=r=>a.hover())},[v(t.$slots,"default")],32),y(w,{"enter-from-class":"opacity-0 scale-75","enter-active-class":"transition duration-75 ease-out-quad","enter-to-class":"opacity-100 scale-100","leave-from-class":"opacity-100 scale-100","leave-active-class":"transition duration-150 ease-in-quad","leave-to-class":"opacity-0 scale-75"},{default:p(()=>[a.open?(d(),f("div",{key:0,class:C(["transform w-52 py-2 absolute z-10 bg-white border border-gray-200 rounded-md",[{"origin-top-left left-0":e.origin=="left"},{"origin-top-right right-0":e.origin=="right"},e.bodyClass]]),onClick:o[2]||(o[2]=r=>a.bodyClick())},[v(t.$slots,"body")],2)):b("",!0)]),_:3})],544)}var V=B(S,[["render",D]]);export{V as D};