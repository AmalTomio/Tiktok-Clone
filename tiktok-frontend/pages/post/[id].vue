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
        v-if="!isLoaded"
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

        <Icon
          v-if="true"
          @click="($event) => deletePost()"
          class="cursor-pointer"
          name="material-symbols:delete-outline-sharp"
          size="25"
        />
      </div>

      <div class="px-8 mt-4 text-sm">This is the post text</div>
      <div class="px-8 mt-4 text-sm font-bold flex items-center space-x-2">
        <Icon name="mdi:music" size="17" />
        <span>Original sound - User name</span>
      </div>

      <div class="flex items-center px-8 mt-8">
        <div class="text-center flex items-center">
          <button
            class="rounded-full bg-gray-200 p-2 flex items-center justify-center"
          >
            <Icon name="mdi:heart" size="25" />
          </button>

          <span class="text-xs pl-2 pr-4 text-gray-800 font-semibold">123</span>
        </div>

        <div class="text-center flex items-center">
          <button
            class="rounded-full bg-gray-200 p-2 flex items-center justify-center"
          >
            <Icon name="bx:bxs-message-rounded-dots" size="25" />
          </button>

          <span class="text-xs pl-2 pr-4 text-gray-800 font-semibold">123</span>
        </div>
      </div>

      <div
        id="Comments"
        class="bg-[#F8F8F8] z-0 w-full h-[calc(100%-273px)] border-t-2 overflow-auto mt-4"
      >
        <div class="pt-2" />

        <div v-if="false" class="text-center mt-6 text-xl text-gray-500">
          No comments...
        </div>

        <div v-else class="flex items-center justify-between px-8 mt-4">
          <div class="flex items-center relative w-full">
            <NuxtLink to="/">
              <img
                class="absolute top-0 rounded-full lg:mx-0 mx-auto"
                width="40"
                src="https://picsum.photos/id/8/300/320"
              />
            </NuxtLink>

            <div class="ml-14 pt-0.5 w-full">
              <div
                class="text-[18px] font-semibold flex items-center justify-between"
              >
                User name
                <Icon
                  v-if="true"
                  @click="($event) => deleteComment()"
                  class="cursor-pointer"
                  name="material-symbols:delete-outline-sharp"
                  size="25"
                />
              </div>

              <div class="text-[15px] font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus aliquid blanditiis fugiat. Nihil, labore quam sunt,
                animi quis maiores tempora delectus sed dolore voluptatibus modi
                tempore suscipit non voluptate deleniti!
              </div>
            </div>
          </div>
        </div>

        <div class="mb-28" />
      </div>

      <div
        id="CreateComment"
        v-if="true"
        class="absolute flex items-center justify-between bottom-0 bg-white h-[85px] lg:max-w-[550px] w-full py-5 px-8 border-t-2"
      >
        <div
          :class="
            inputFocused
              ? 'border-2 border-gray-400'
              : 'border-2 border-[#F1F1F2]'
          "
          class="bg-[#F1F1F2] flex items-center rounded-lg w-full lg:max-w-[420px] transition-all duration-200"
        >
          <input
            v-model="comment"
            @focus="inputFocused = true"
            @blur="inputFocused = false"
            class="bg-[#F1F1F2] text-[14px] focus:outline-none w-full lg:max-w-[420px] p-2 rounded-lg"
            type="text"
            placeholder="Write a comment... "
          />
        </div>

        <button
          :disabled="!comment"
          @click="($event) => addComment()"
          :class="comment ? 'text-[#F02C56] cursor-pointer' : 'text-gray-400'"
          class="font-semibold text-sm ml-5 pr-1"
        >
          Post
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();

let video = ref(null);
let isLoaded = ref(false);
let comment = ref(null);
let inputFocused = ref(false);

onMounted(() => {
  isLoaded.value = true; // Set to true when the video is loaded
  video.value.play(); // Play the video after it's loaded
});

onBeforeUnmount(() => {
  video.value.pause();
  video.value.currentTime = 0;
  video.value.src = "";
});

watch(
  () => isLoaded.value,
  () => {
    if (isLoaded.value) {
      setTimeout(() => video.value.play(), 500);
    }
  }
);
</script>
