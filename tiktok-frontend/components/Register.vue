<template>
  <div class="text-center text-[28px] mb-4 font-bold">Sign up</div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Full name"
      v-model:input="name"
      inputType="email"
      :autoFocus="true"
      error=" "
    ></TextInput>
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Email address"
      v-model:input="email"
      inputType="email"
      error=""
    ></TextInput>
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Password"
      v-model:input="password"
      inputType="password"
      error=""
    ></TextInput>
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Confirm Password"
      v-model:input="confirmPassword"
      inputType="password"
      error=""
    ></TextInput>
  </div>

  <div class="px-6 text-[12px] text-gray-600">Forgot Password?</div>

  <div class="px-6 pb-2 mt-6">
    <button
      :disabled="!name || !email || !password || !confirmPassword"
      :class="
        !name || !email || !password || !confirmPassword
          ? 'bg-gray-200'
          : 'bg-[#F02C56]'
      "
      @click="($event) => register()"
      class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
    >
      Sign up
    </button>
  </div>
</template>

<script setup>
let name = ref(null);
let email = ref(null);
let password = ref(null);
let confirmPassword = ref(null);
let errors = ref(null);
</script>
