<template>
  <main class="flex h-screen">
    <section class="w-full md:w-1/2 flex items-center">
      <div class="px-5 sm:px-10 w-full xl:w-5/6">
        <h1 class="font-bold text-5xl my-6">Sign up</h1>
        <p class="text-lg mb-14 space-x-2">
          <span class="text-#5C4529">Already registered?</span>
          <router-link class="text-blue-400 font-medium" to="/auth/login">
            Log in
          </router-link>
        </p>
        <RegisterForm />
      </div>
    </section>
    <section class="hidden w-1/2 md:flex justify-between">
      <img class="w-full h-auto" :src="foodImage" alt="" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import foodImage from "./../../assets/images/unsplash_8Nc_oQsc2qQ.png";
import RegisterForm from "../../components/RegisterForm/RegisterForm.vue";

onBeforeMount(() => {
  document.title = "Sign up";
});
</script>

<style lang="scss" scoped></style>
