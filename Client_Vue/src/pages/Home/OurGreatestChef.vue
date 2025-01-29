<template>
  <div class="my-20 sm:my-40">
    <InnerContainer>
      <h2 class="font-bold text-5xl sm:text-6xl text-center">
        Our greatest chef
      </h2>
      <ChefCards/>
      <div class="text-center flex justify-center">
        <CustomButton class="bg-primary w-[235px]" title="View all"/>
      </div>
    </InnerContainer>
  </div>
</template>

<script lang="ts" setup>
import CustomButton from "../../components/CustomButton/CustomButton.vue";
import ChefCards from "../../components/ChefCards/ChefCards.vue";
import InnerContainer from "../../components/InnerContainer/InnerContainer.vue";
</script>

<style lang="scss" scoped></style>