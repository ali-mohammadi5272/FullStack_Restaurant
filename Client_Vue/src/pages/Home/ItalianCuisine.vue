<template>
  <InnerContainer>
    <div
      class="flex justify-between items-center mt-10 sm:mt-20 flex-col md:flex-row gap-10"
    >
      <section class="w-full md:w-1/2">
        <h2 class="font-bold text-5xl sm:text-6xl">
          <span class="block">Italian</span>
          <span class="block">Cuisine</span>
        </h2>
        <p class="text-lg text-[#5C4529] mt-10 mb-20 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quibusdam voluptate alias est? Sunt eaque aspernatur
          molestias dolor itaque beatae suscipit consequuntur, autem repellat.
        </p>
        <div class="flex gap-3 sm:gap-6">
          <CustomButton
            class="w-1/2 bg-primary py-7 font-semibold"
            title="Order now"
          />
          <CustomButton
            class="w-1/2 bg-secondary py-7 font-semibold"
            title="Reservation"
          />
        </div>
      </section>
      <section class="w-full md:w-1/2">
        <img :src="foodImage" alt="Food's Image" class="w-full h-auto" />
      </section>
    </div>
  </InnerContainer>
</template>

<script lang="ts" setup>
import InnerContainer from "../../components/InnerContainer/InnerContainer.vue";
import CustomButton from "../../components/CustomButton/CustomButton.vue";
import foodImage from "./../../assets/images/Illustration.png";
</script>

<style lang="scss" scoped></style>
