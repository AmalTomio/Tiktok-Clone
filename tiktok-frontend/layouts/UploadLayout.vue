<template>
  <div class="bg-[#F8F8F8]">
    <TopNav />

    <div
      class="flex justify-between mx-auto w-full max-w-[1140px] lg:px-2.5 px-0 pt-[61px]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
