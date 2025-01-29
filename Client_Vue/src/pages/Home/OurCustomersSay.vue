<template>
  <div class="bg-[#fbfafa] sm:py-16 my-20 sm:my-40">
    <div
      class="bg-no-repeat bg-right-top sm:bg-left-top bg-[url('./../../assets/images/Ball.png')] sm:bg-[url('./../../assets/images/Round.png')] text-center flex flex-col justify-between items-center"
    >
      <h2 class="font-bold text-4xl sm:text-6xl my-24">Our Customers say</h2>
      <CustomerCard
        :img="customerImage"
        class="w-[120px] sm:w-[262px]"
        name="Starla Virgoun"
        role="Financial advisor"
      />
      <q class="text-[12px] sm:text-lg w-1/2 my-4 sm:my-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
        ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
        quam
      </q>
      <img
        :src="customersImage"
        alt="Customers'es Image"
        class="w-3/5 sm:w-2/3"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CustomerCard from "../../components/CustomerCard/CustomerCard.vue";
import customerImage from "./../../assets/images/Ellipse 16.png";
import customersImage from "./../../assets/images/User.png";
</script>

<style lang="scss" scoped></style>
