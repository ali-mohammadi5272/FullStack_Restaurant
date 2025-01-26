<template>
  <article class="bg-gray-50 rounded-[70px] overflow-hidden">
    <section>
      <img :src="props.src" alt="Food's Image" class="w-full h-auto" />
    </section>
    <section class="px-7 pb-10 text-center">
      <header>
        <h1 class="text-3xl font-bold">{{ props.title }}</h1>
      </header>
      <div class="my-5">
        <a-rate :defaultValue="props.rate" class="text-primary" disabled />
      </div>
      <p class="mb-8 leading-7">{{ props.description }}</p>
      <footer class="flex items-center">
        <strong class="flex-grow w-1/2 text-2xl">${{ props.price }}</strong>
        <CustomButton
          class="flex-grow w-1/2 font-bold bg-primary hidden sm:inline-block cursor-pointer"
          title="Order bow"
        />
        <CustomButton
          class="sm:flex-grow w-[50px] sm:w-1/2 font-bold rounded-full bg-primary inline-block sm:hidden cursor-pointer"
        >
          <FontAwesomeIcon icon="plus" />
        </CustomButton>
      </footer>
    </section>
  </article>
</template>

<script lang="ts" setup>
import CustomButton from "../CustomButton/CustomButton.vue";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon.vue";
import type { MenuCardPropsType } from "./menuCard.types.ts";

const props = defineProps<MenuCardPropsType>();
</script>

<style lang="scss" scoped></style>
