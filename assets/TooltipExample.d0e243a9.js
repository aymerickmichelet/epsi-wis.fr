import{_ as d}from"./TwCodePreviewEditor.59c40775.js";import{g as u,f as m,o as a,e as n,n as w,B as _,t as f,k as h,l as b,C as g,D as v,i as y,z as p,j as x,p as T}from"./vendor.d121aa1e.js";import{_ as c}from"./index.a748f73e.js";import{T as B}from"./TwButton.d5a0d517.js";import"./TwIcon.7e42b01c.js";import"./index.c3c05765.js";var S=`<tw-tooltip text="Awesome, you did it!">
  <tw-button type="primary">Hover me!</tw-button>
</tw-tooltip>
<tw-tooltip class="ml-2" text="Very beautiful!" position="bottom">
  <tw-button type="success">Bottom</tw-button>
</tw-tooltip>
<tw-tooltip class="ml-2" text="Yes, that's right!" position="right">
  <tw-button type="warning">Right</tw-button>
</tw-tooltip>
<tw-tooltip class="ml-2" text="You must be happy!" position="left">
  <tw-button type="danger">Left</tw-button>
</tw-tooltip>`;const $={name:"TwTooltip",props:{text:{type:String,required:!0},position:{type:String,default:"top",validator(t){return["top","bottom","left","right"].includes(t)}}},setup(t){const o=u(!1),s=m(()=>"position-"+t.position);return{show:o,position:s}}},V=t=>(g("data-v-74029bb2"),t=t(),v(),t),k=V(()=>y("span",{class:"absolute w-0 h-0 border-gray-800 border-opacity-95 arrow"},null,-1));function N(t,o,s,e,r,l){return a(),n("div",{class:"relative inline-block",onMouseover:o[0]||(o[0]=i=>e.show=!0),onMouseleave:o[1]||(o[1]=i=>e.show=!1)},[e.show?(a(),n("div",{key:0,class:w(["absolute z-40 bg-gray-800 bg-opacity-95 px-4 py-1 rounded-md text-xs text-white whitespace-nowrap transform",e.position])},[k,_(" "+f(s.text),1)],2)):h("",!0),b(t.$slots,"default",{},void 0,!0)],32)}var C=c($,[["render",N],["__scopeId","data-v-74029bb2"]]);const I={name:"TooltipExample",data(){return{components:{"tw-tooltip":p(C),"tw-button":p(B)},codeBasicUsage:S}}},z={class:"page-example"},D=T('<h1>Tooltip</h1><p>Display prompt information for mouse hover.</p><h2 class="mt-8">Basic usage</h2><p>Hover to show the tooltip. Choose the best position for your needs, either <code>top</code>, <code>bottom</code>, <code>right</code> or <code>left</code>.</p>',4);function E(t,o,s,e,r,l){const i=d;return a(),n("div",z,[D,x(i,{source:r.codeBasicUsage,components:r.components},null,8,["source","components"])])}var q=c(I,[["render",E]]);export{q as default};
