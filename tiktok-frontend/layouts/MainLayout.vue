<template>
  <!-- Top Navigation Bar (Always in Front) -->
  <TopNav />

  <div
    :class="[
      route.fullPath === '/' ? 'max-w-[1140px]' : '',
      'flex justify-between mx-auto w-full lg:px-2.5 px-0 pt-[61px]',
    ]"
  >
    <!-- Sidebar (Behind TopNav) -->
    <div>
      <SideNavMain />
    </div>
    <slot />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
