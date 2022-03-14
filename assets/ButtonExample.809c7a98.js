import{_ as u}from"./TwCodePreviewEditor.2d685a96.js";import{z as d,e as i,j as s,i as t,B as o,o as r}from"./vendor.d121aa1e.js";import{T as a}from"./TwButton.72b40949.js";import{_ as c}from"./index.80f6b431.js";import"./TwIcon.5b113f66.js";import"./index.c3c05765.js";var b=`<div>
  <tw-button>Default</tw-button>
  <tw-button type="primary">Primary</tw-button>
  <tw-button type="success">Success</tw-button>
  <tw-button type="warning">Warning</tw-button>
  <tw-button type="danger">Danger</tw-button>
</div>
<div class="mt-3">
  <tw-button round>Default</tw-button>
  <tw-button type="primary" round>Primary</tw-button>
  <tw-button type="success" round>Success</tw-button>
  <tw-button type="warning" round>Warning</tw-button>
  <tw-button type="danger" round>Danger</tw-button>
</div>`,l=`<div>
  <tw-button size="lg">Large</tw-button>
  <tw-button size="md">Medium</tw-button>
  <tw-button size="sm">Small</tw-button>
</div>
<div class="mt-3">
  <tw-button size="lg" round>Large</tw-button>
  <tw-button size="md" round>Medium</tw-button>
  <tw-button size="sm" round>Small</tw-button>
</div>`,w=`<div>
  <tw-button disabled>Default</tw-button>
  <tw-button type="primary" disabled>Primary</tw-button>
  <tw-button type="success" disabled>Success</tw-button>
  <tw-button type="warning" disabled>Warning</tw-button>
  <tw-button type="danger" disabled>Danger</tw-button>
</div>
<div class="mt-3">
  <tw-button round disabled>Default</tw-button>
  <tw-button type="primary" round disabled>Primary</tw-button>
  <tw-button type="success" round disabled>Success</tw-button>
  <tw-button type="warning" round disabled>Warning</tw-button>
  <tw-button type="danger" round disabled>Danger</tw-button>
</div>`;const m={name:"ButtonExample",data(){return{components:{"tw-button":d(a)},codeBasicUsage:b,codeSizes:l,codeDisabled:w}}},p={class:"page-example"},_=t("h1",null,"Button",-1),g=t("p",null,"Commonly used button.",-1),y=t("h2",{class:"mt-8"},"Basic usage",-1),v=t("h2",{class:"mt-8"},"Sizes",-1),h=t("p",null,[o("Button component provides three sizes, large "),t("code",null,"lg"),o(", medium "),t("code",null,"md"),o(" and small "),t("code",null,"sm"),o(". Medium is the default size.")],-1),f=t("h2",{class:"mt-8"},"Disabled",-1),z=t("p",null,[o("The "),t("code",null,"disabled"),o(" attribute determines if the button is disabled.")],-1);function B(D,S,x,P,e,T){const n=u;return r(),i("div",p,[_,g,y,s(n,{source:e.codeBasicUsage,components:e.components},null,8,["source","components"]),v,h,s(n,{source:e.codeSizes,components:e.components},null,8,["source","components"]),f,z,s(n,{source:e.codeDisabled,components:e.components},null,8,["source","components"])])}var k=c(m,[["render",B]]);export{k as default};
