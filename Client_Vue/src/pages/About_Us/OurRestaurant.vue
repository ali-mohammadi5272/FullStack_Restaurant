<template>
  <div class="my-20 sm:my-40 py-24 md:py-12">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quibusdam voluptate alias est? Sunt eaque aspernatur
            molestias dolor itaque beatae suscipit consequuntur, autem repellat.
          </p>
        </section>
        <section class="w-full md:w-1/2">
          <img :src="foodImage_2" alt="Food's Image" class="w-full h-auto" />
        </section>
      </div>
    </InnerContainer>
  </div>
  <div class="my-20 sm:my-40 py-24 md:py-12">
    <InnerContainer>
      <div
        class="flex justify-between items-center flex-col-reverse md:flex-row gap-10"
      >
        <section class="w-full md:w-1/2">
          <p class="text-lg text-[#5C4529] mt-10 mb-20 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quibusdam voluptate alias est? Sunt eaque aspernatur
            molestias dolor itaque beatae suscipit consequuntur, autem repellat.
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
