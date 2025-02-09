<template>
  <div class="my-10 sm:my-20 py-12 md:py-6">
    <InnerContainer>
      <h2 class="font-bold text-5xl sm:text-6xl md:hidden text-center mb-16">
        <span class="text-primary">Our </span>
        <span>Restaurant</span>
      </h2>
      <div
        class="flex justify-between items-center flex-col-reverse md:flex-row-reverse gap-10"
      >
        <section class="w-full md:w-1/2">
          <h2 class="font-bold text-5xl sm:text-6xl hidden md:block">
            <span class="block text-primary">Our</span>
            <span class="block">Restaurant</span>
          </h2>
          <p class="text-lg text-[#5C4529] mt-10 mb-20 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </section>
        <section class="w-full md:w-1/2">
          <img :src="foodImage_2" alt="Food's Image" class="w-full h-auto" />
        </section>
      </div>
      <div
        class="flex justify-between items-center flex-col-reverse md:flex-row gap-10"
      >
        <section class="w-full md:w-1/2">
          <p class="text-lg text-[#5C4529] mt-10 mb-20 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </section>
        <section class="w-full md:w-1/2">
          <img :src="foodImage_1" alt="Food's Image" class="w-full h-auto" />
        </section>
      </div>
    </InnerContainer>
  </div>
</template>

<script lang="ts" setup>
import foodImage_2 from "../../assets/images/Picture_2.png";
import foodImage_1 from "../../assets/images/Picture_1.png";
import InnerContainer from "../../components/InnerContainer/InnerContainer.vue";
</script>

<style lang="scss" scoped></style>
