<template>
  <div class="text-center text-[28px] mb-4 font-bold">Log in</div>
  <div class="px-6 pb-1.5 text-[15px] font-bold">Email Address</div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Email Address"
      v-model:input="email"
      inputType="email"
      :autoFocus="true"
      error=" "
    ></TextInput>
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Password"
      v-model:input="password"
      inputType="password"
    ></TextInput>
  </div>

  <div class="px-6 text-[12px] text-gray-600">Forgot Password?</div>

  <div class="px-6 pb-2 mt-6">
    <!--:disabled="!email || !password"
    :class="!email || !password ? 'bg-gray-200' : 'bg-[#F02C56]'"--->
    <button
      @click="($event) => login()"
      class="w-full text-[17px] bg-[#F02C56] font-semibold text-white py-3 rounded-sm"
    >
      Log in
    </button>
  </div>
</template>

<script setup>
const { $axios } = useNuxtApp();

let email = ref("");
let password = ref("");
let error = ref(null);

const login = async () => {
  try {
    // 1. Get CSRF Cookie (very important - from root, not /api)
    await $axios.get("/sanctum/csrf-cookie");

    // 2. Login (this hits /login directly)
    await $axios.post("/login", {
      email: "atul@gmail.com",
      password: "123",
    });

    // 3. Fetch User (this one is in /api)
    const res = await $axios.get("/api/user");
    console.log("User:", res.data);
  } catch (err) {
    console.error("Login failed:", err.response?.data || err.message);
    error.value = err.response?.data?.message || "Login failed.";
  }
};
</script>
