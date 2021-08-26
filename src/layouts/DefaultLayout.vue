<template>
  <!-- Content Container-->
  <div class="min-h-screen">
    <navbar />
    <!-- Content -->
    <div class="lg:ml-5 pt-14 px-5">
      <div class="container mx-auto my-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>