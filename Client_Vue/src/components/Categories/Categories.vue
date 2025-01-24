<template>
  <div class="flex justify-between gap-5 md:gap-10 my-20 overflow-x-auto">
    <CustomButton
      v-for="category in categories"
      :key="category.id"
      :class="`
        flex-grow py-7 px-10 md:px-0
        ${
          category.id === activeCategoryId
            ? 'bg-[#311F09] text-[#FFFFFF]'
            : 'bg-gray-50 text-[#311F09]'
        }
      `"
      :title="category.title"
      @click="categoryClickHandler(category.id)"
    />
  </div>
</template>

<script lang="ts" setup>
import { type Ref, ref } from "vue";
import type { CategoryType } from "./categories.types.ts";
import CustomButton from "../CustomButton/CustomButton.vue";

const activeCategoryId: Ref<number> = ref(1);
const categories: CategoryType[] = [
  { id: 1, title: "All category" },
  { id: 2, title: "Dinner" },
  { id: 3, title: "Lunch" },
  { id: 4, title: "Dessert" },
  { id: 5, title: "Drink" },
];

const categoryClickHandler = (id: number): void => {
  activeCategoryId.value = id;
};
</script>

<style lang="scss" scoped></style>
