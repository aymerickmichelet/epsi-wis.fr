import{_ as l}from"./TwCodePreviewEditor.c29244a7.js";import{z as i,e as n,j as s,i as e,B as t,o as c}from"./vendor.d121aa1e.js";import{D as p}from"./TwDropdown.4a4b4328.js";import{_ as a}from"./index.d0ff4b51.js";import"./TwIcon.625a6eb2.js";import"./index.c3c05765.js";var d=`<dropdown>
  <button class="px-3 py-2 bg-purple-500 text-white rounded-md">Click me!</button>
  <template #body>
    <ul>
      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 1</li>
      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 2</li>
      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 3</li>
    </ul>
  </template>
</dropdown>`,g=`<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center items-center border-r border-gray-200">
    <p class="text-sm text-gray-400 mb-2">Hover to trigger</p>
    <!-- Here we use 'hover' for the trigger -->
    <dropdown trigger="hover">
      <button class="px-3 py-2 bg-purple-500 text-white rounded-md">Hover me!</button>
      <template #body>
        <ul>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 1</li>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 2</li>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 3</li>
        </ul>
      </template>
    </dropdown>
  </div>
  <div class="flex flex-col justify-center items-center">
    <p class="text-sm text-gray-400 mb-2">Click to trigger</p>
    <dropdown>
      <button class="px-3 py-2 bg-purple-500 text-white rounded-md">Click me!</button>
      <template #body>
        <ul>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 1</li>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 2</li>
          <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 3</li>
        </ul>
      </template>
    </dropdown>
  </div>
</div>`,m=`<dropdown hide-on-click>
  <button class="px-3 py-2 bg-purple-500 text-white rounded-md">Click me!</button>
  <template #body>
    <p class="text-sm text-purple-500 px-3">This content will be hidden if you click any area of dropdown body.</p>
    <ul>
      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 1</li>
      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 2</li>
      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 3</li>
    </ul>
  </template>
</dropdown>`;const u={name:"DropdownExample",data(){return{components:{dropdown:i(p)},codeBasicUsage:d,codeTriggering:g,codeBodyClickHide:m}}},y={class:"page-example"},x=e("h1",null,"Dropdown",-1),h=e("p",null,"Toggleable menu for displaying lists of links and actions.",-1),_=e("h2",{class:"mt-8"},"Basic usage",-1),b=e("p",null,"Click on the dropdown menu to unfold it for more actions.",-1),v=e("h2",{class:"mt-8"},"How to trigger",-1),f=e("p",null,[t("Click the triggering element or hover on it. The default is "),e("code",null,"click"),t(".")],-1),w=e("h2",{class:"mt-8"},"Menu hiding behavior",-1),k=e("p",null,[t("Use "),e("code",null,"hide-on-click"),t(" to define if menu closes on clicking.")],-1);function I(B,C,H,T,o,D){const r=l;return c(),n("div",y,[x,h,_,b,s(r,{source:o.codeBasicUsage,components:o.components},null,8,["source","components"]),v,f,s(r,{source:o.codeTriggering,components:o.components},null,8,["source","components"]),w,k,s(r,{source:o.codeBodyClickHide,components:o.components},null,8,["source","components"])])}var M=a(u,[["render",I]]);export{M as default};
