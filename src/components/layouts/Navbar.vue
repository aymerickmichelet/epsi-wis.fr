<template>
  <div class="fixed z-20 top-0 left-0 lg:left-0 right-0 h-14 bg-white border-b border-gray-200 flex flex-row items-center justify-between px-5">
    <div class="flex items-center cursor-pointer" @click="linkEpsiWis()">
      <img src="@/assets/epsi_logo_carre.png" alt="Logo EPSI" class="mb-1" width="40" height="40">
      x
      <img src="@/assets/wis_logo_carre.png" alt="Logo WIS" width="40" height="40">
      <div class="ml-2 flex flex-col">
        <h1 class="text-sm text-gray-700 font-medium">EPSI WIS</h1>
        <p class="text-gray-400 text-xs">Liens utiles</p>
      </div>
    </div>
    <h3 class="text-sm font-medium text-gray-600"></h3>
    <div class="flex">
      <div class="group flex items-center mr-3 cursor-pointer" @click="viewSource()">
        <span class="text-sm  text-gray-600 group-hover:text-gray-800">GitHub</span>
        <external-link-icon-o class="ml-1 w-4 h-4 text-gray-600 group-hover:text-gray-800" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    viewSource() {
      window.open('https://github.com/aymerickmichelet/epsi-wis.fr')
    },
    linkEpsiWis() {
      window.location.href = 'https://epsiwis.fr'
    }
  }
}
</script>
