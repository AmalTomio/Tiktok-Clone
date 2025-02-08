<template>
  <div
    id="TopNav"
    class="fixed bg-white z-20 flex items-center w-full border-b h-[61px]"
  >
    <div
      :class="route.fullPath === '/' ? 'max-w-[1150px]' : ''"
      class="flex items-center justify-between w-full mx-auto"
    >
      <div :class="route.fullPath === '/' ? 'w-[80%]' : 'lg:w-[20%] w-[70%]'">
        <nuxt-link to="/">
          <img width="115" src="~/assets/images/tiktok-logo.png"
        /></nuxt-link>
      </div>

      <div
        class="hidden md:flex items-center bg-[#F1F1F2] p-1 rounded-full max-w-[380px] w-full"
      >
        <input
          type="text"
          class="w-full pl-3 my-2 bg-transparent focus:outline-none"
          placeholder="Search accounts"
        />
        <div class="px-3 py-1 flex items-center border-l boprder-l-grey-300">
          <Icon name="ri:search-line" class="text-[#A1A2A7]" size="22"></Icon>
        </div>
      </div>

      <div
        class="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full"
      >
        <button
          class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100"
        >
          <Icon name="material-symbols:add" color="#000000" size="22"> </Icon>
          <span class="px-2 font-medium text-[15px]">Upload</span>
        </button>

        <div class="flex items-center">
          <button
            class="flex items-center bg-[#F02C56] text-white border rounded-md px-3 py-[6px]"
          >
            <span class="mx-4 font-medium text-[15px]">Login</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
