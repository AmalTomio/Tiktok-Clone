<template>
  <div
    class="flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2"
  >
    <img
      class="rounded-full lg:mx-0 mx-auto"
      width="35"
      src="https://picsum.photos/id/8/300/320"
    />
    <div class="lg:pl-2.5 lg:block hidden">
      <div class="flex items-center">
        <div class="font-bold text-[14px]">User name</div>
        <div
          class="ml-1 rounded-full bg-custom-blue h-[14px] w-[14px] flex items-center justify-center"
        >
          <Icon
            class="text-white"
            name="teenyicons:tick-small-solid"
            size="14"
          />
        </div>
      </div>
      <div class="font-light text-[12px] text-gray-600">User name</div>
    </div>
  </div>
</template>

<script setup>
defineProps(["user"]);
</script>
