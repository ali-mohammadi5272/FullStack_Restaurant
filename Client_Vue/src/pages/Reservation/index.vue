<template>
  <div class="my-20 sm:my-40 py-24 md:py-12">
    <h2 class="font-bold text-3xl md:hidden text-center mb-16">Book a table</h2>
    <div class="flex items-center justify-between flex-col md:flex-row gap-10">
      <section class="w-full md:w-1/2">
        <img :src="tableImage" alt="Food's Image" class="w-full h-auto" />
      </section>
      <section class="w-full md:w-1/2">
        <InnerContainer position="right">
          <h2 class="font-bold text-5xl sm:text-6xl hidden md:block">
            Book a table
          </h2>
          <BookATableForm />
        </InnerContainer>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InnerContainer from "../../components/InnerContainer/InnerContainer.vue";
import tableImage from "./../../assets/images/Picture.png";
import BookATableForm from "../../components/BookATableForm/BookATableForm.vue";
</script>

<style lang="scss" scoped></style>
