<template>
  <div class="my-20 sm:my-40">
    <InnerContainer>
      <h2
        class="block font-bold text-3xl sm:text-[45px] md:text-[60px] lg:text-[80px] text-center sm:mb-32"
      >
        Menu
      </h2>
      <Categories />
      <MenuCards />
    </InnerContainer>
  </div>
</template>

<script lang="ts" setup>
import InnerContainer from "../../components/InnerContainer/InnerContainer.vue";
import Categories from "../../components/Categories/Categories.vue";
import MenuCards from "../../components/MenuCards/MenuCards.vue";
</script>

<style lang="scss" scoped></style>
