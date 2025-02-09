<template>
  <div class="my-10 sm:my-20 py-12 md:py-6">
    <InnerContainer>
      <h2 class="font-bold text-3xl md:hidden text-center mb-16">
        <span class="text-primary">Owner </span>
        <span>& </span>
        <span class="block">Executive Chef</span>
      </h2>
      <div
        class="flex justify-between flex-col-reverse md:flex-row-reverse gap-10"
      >
        <section class="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 class="font-bold text-5xl sm:text-6xl hidden md:block">
              <span class="block text-primary">Owner </span>
              <span class="block">& Executive Chef</span>
            </h2>
          </div>
          <div>
            <h2 class="text-center md:text-left sm:text-[40px] my-16 font-bold">
              Ismail Marzuki
            </h2>
            <q
              class="text-sm sm:text-3xl w-1/2 my-4 sm:my-6 text-[#5C4529] ownerQuote"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
              nec quam
            </q>
          </div>
        </section>
        <section class="w-full md:w-1/3">
          <img :src="image4" alt="Owner's Image" class="w-full h-auto" />
        </section>
      </div>
    </InnerContainer>
  </div>
</template>

<script lang="ts" setup>
import image4 from "../../assets/images/image4.png";
import InnerContainer from "../../components/InnerContainer/InnerContainer.vue";
</script>

<style lang="scss" scoped>
q.ownerQuote {
  line-height: 60px;
}
</style>
