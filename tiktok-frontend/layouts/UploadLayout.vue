<template>
  <div class="bg-[#F8F8F8]">
    <TopNav />

    <div class="flex justify-between mx-auto w-full px-2 max-w-[1140px]">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
