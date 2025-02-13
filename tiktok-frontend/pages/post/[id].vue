<template>
  <div
    id="PostPage"
    class="fixed lg:flex justify-between z-50 top-0 left-0 w-full h-full bg-black lg:overflow-hidden overflow-auto"
  >
    <div class="lg:w-[calc(100%-540px)] h-full relative flex">
      <NuxtLink
        class="absolute z-20 m-5 rounded-full bg-gray-700 hover:bg-gray-800 p-3 flex items-center justify-center"
      >
        <Icon name="material-symbols:close" class="text-white" size="20" />
      </NuxtLink>

      <div v-if="true">
        <button
          :disabled="!isLoaded"
          @click="($event) => loopThroughPostsUp()"
          class="absolute z-20 right-4 top-4 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
        >
          <Icon name="mdi:chevron-up" size="30" class="text-white" />
        </button>

        <button
          :disabled="!isLoaded"
          @click="($event) => loopThroughPostsDown()"
          class="absolute z-20 right-4 top-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
        >
          <Icon name="mdi:chevron-down" size="30" class="text-white" />
        </button>
      </div>

      <img
        class="absolute top-[18px] left-[70px] rounded-full lg:mx-0 mx-auto"
        width="45 "
        src="~/assets/images/tiktok-logo-small.png"
      />

      <video
        v-if="true"
        src="/warrior.mp4"
        class="absolute inset-0 object-cover w-full my-auto z-[-1] h-screen"
      ></video>

      <div
        v-if="true"
        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10"
      >
        <Icon
          class="animate-spin ml-1 text-white"
          name="mingcute:loading-line"
          size="100"
        />
      </div>

      <div class="bg-black bg-opacity-70 lg:min-w-[480px]">
        <video
          v-if="true"
          ref="video"
          loop
          muted
          src="/warrior.mp4"
          class="h-screen mx-auto"
        ></video>
      </div>
    </div>

    <div
      id="InfoSection"
      v-if="true"
      class="lg:max-w-[550px] relative w-full h-full bg-white"
    >
      <div class="py-7" />
      <div class="flex items-center justify-between px-8">
        <div class="flex items-center">
          <NuxtLink href="/">
            <img
              src="https://picsum.photos/id/8/300/320"
              class="rounded-full lg:mx-auto mx-auto"
              width="40"
            />
          </NuxtLink>

          <div class="ml-3 pt-0.5">
            <div class="text-[17px] font-semibold">User name</div>
            <div class="text-[13px] -mt-5 font-light">
              User name
              <span class="relative -top-[2px] text-[30px] pr-0.5">.</span>
              <span class="font-medium">Date here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
