<template>
  <button class="inline-block bg-gray-50 rounded-full relative scale-50">
    <FontAwesomeIcon class="text-4xl px-8 py-8" icon="cart-shopping" />
    <span
      class="absolute bg-red-500 rounded-full text-white top-3 right-2 text-sm w-8 h-8 flex justify-center items-center"
      >10</span
    >
  </button>
</template>

<script lang="ts" setup>
import FontAwesomeIcon from "./../FontAwesomeIcon/FontAwesomeIcon.vue";
</script>

<style lang="scss" scoped></style>
