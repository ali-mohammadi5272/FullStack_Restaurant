<template>
  <article class="text-center text-2xl space-y-4 sm:space-y-8">
    <img
        :class="`w-full h-auto rounded-[50px] ${props.imageClass ? props.imageClass : ''}`"
        :src="props.img"
        alt="Food's Image"
    />
    <h3 class="text-sm sm:text-lg md:text-2xl font-semibold text-[#311F09]">
      {{ props.name }}
    </h3>
    <h4 class="text-sm sm:text-lg md:text-2xl text-[#A08D76]">{{ props.role }}</h4>
  </article>
</template>

<script lang="ts" setup>
import type {ChefCardPropsType} from "./chefCard.type";

const props = defineProps<ChefCardPropsType>()
</script>

<style lang="scss" scoped></style>