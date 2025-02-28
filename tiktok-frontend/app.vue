<template>
  <NuxtLayout>
    <NuxtPage />

    <Auth v-if="isLoginOpen" />
    <EditProfile v-if="isEditProfileOpen" />
  </NuxtLayout>
</template>

<script setup>
import { storeToRefs } from "pinia";
const { $generalStore } = useNuxtApp();
const { isLoginOpen, isEditProfileOpen } = storeToRefs($generalStore);
</script>
