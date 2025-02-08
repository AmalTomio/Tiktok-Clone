<template>
    <!-- Top Navigation Bar (Always in Front) -->
    <TopNav class="fixed top-0 left-0 w-full z-50" />
  
    <div
      :class="[
        route.fullPath === '/' ? 'max-w-[1140px]' : '',
        'flex justify-between mx-auto w-full lg:px-2.5 px-0 pt-[61px]'
      ]"
    >
      <!-- Sidebar (Behind TopNav) -->
      <div class="w-[250px] min-w-[250px] fixed left-0 top-0 h-full bg-white z-10">
        <SideNavMain />
      </div>
  
      <!-- Main Content (Right) -->
      <div class="flex-1 ml-[250px]">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  const route = useRoute();
  </script>
  