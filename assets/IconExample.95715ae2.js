import{_ as o}from"./TwCodePreviewEditor.2d685a96.js";import{z as s,e as c,j as n,p as a,o as i}from"./vendor.d121aa1e.js";import{T as l}from"./TwIcon.5b113f66.js";import{_ as r}from"./index.80f6b431.js";import"./index.c3c05765.js";var m=`<div class="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-0">
  <div class="flex flex-col items-center md:items-start">
    <p class="text-gray-400 text-sm mb-2">HeroIcons</p>
    <div class="flex space-x-5">
      <tw-icon name="heroicons-outline:home" class="w-12 h-12 text-purple-500" />
      <tw-icon name="heroicons-solid:chart-pie" class="w-12 h-12 text-green-500" />
      <tw-icon name="heroicons-outline:light-bulb" class="w-12 h-12 text-yellow-500" />
    </div>
  </div>
  <div class="flex flex-col items-center md:items-start">
    <p class="text-gray-400 text-sm mb-2">Material Design Icons</p>
    <div class="flex space-x-5">
      <tw-icon name="mdi:baguette" class="w-12 h-12 text-purple-500" />
      <tw-icon name="mdi:fruit-watermelon" class="w-12 h-12 text-green-500" />
      <tw-icon name="mdi:glass-wine" class="w-12 h-12 text-yellow-500" />
    </div>
  </div>
  <div class="flex flex-col items-center md:items-start">
    <p class="text-gray-400 text-sm mb-2">Font Awesome 5 Solid</p>
    <div class="flex space-x-5">
      <tw-icon name="fa-solid:cloud-sun" class="w-12 h-12 text-purple-500" />
      <tw-icon name="fa-solid:basketball-ball" class="w-12 h-12 text-green-500" />
      <tw-icon name="fa-solid:balance-scale" class="w-12 h-12 text-yellow-500" />
    </div>
  </div>
</div>`;const p={name:"IconExample",data(){return{components:{"tw-icon":s(l)},codeBasicUsage:m}}},d={class:"page-example"},u=a('<h1>Icon</h1><p>Admin Panel use <a href="https://github.com/antfu/unplugin-icons" target="_blank">unplugin-icons</a> and <a href="https://github.com/antfu/purge-icons" target="_blank">PurgeIcons</a> to make it efficient, so you will only get icons you need.</p><p> You can use the icon component with two ways (patterns):<br> Using <code>tw-icon</code> component with prop <code>name</code>, e.g. <code>&lt;tw-icon name=&quot;heroicons-outline:home&quot; /&gt;</code>.<br> Or directy place the icon name after <code>tw-icon</code> prefix, e.g. <code>&lt;tw-icon-heroicons-outline-home /&gt;</code>. </p><p>You can found the complete icon name list on unplugin-icons above.</p><h2 class="mt-8">Basic usage</h2>',5);function h(w,g,x,f,e,_){const t=o;return i(),c("div",d,[u,n(t,{source:e.codeBasicUsage,components:e.components},null,8,["source","components"])])}var B=r(p,[["render",h]]);export{B as default};
