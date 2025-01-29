<template>
  <InnerContainer>
    <div
      class="my-20 sm:my-40 bg-[url('./../../assets/images/unsplash_gKN5m528N6o.png')] bg-no-repeat bg-cover rounded-[80px] py-20"
    >
      <div
        class="flex justify-center items-center flex-col-reverse md:flex-row gap-10 text-center"
      >
        <div class="w-full sm:w-2/3 md:w-1/2">
          <h2
            class="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white"
          >
            we are open from
          </h2>
          <h3
            class="font-bold text-lg sm:text-2xl lg:text-3xl xl:text-4xl text-white my-5 sm:my-7 md:my-10"
          >
            Monday-Sunday
          </h3>
          <div
            class="text-xs sm:text-sm md:text-base lg:text-lg mb-10 text-white space-y-1"
          >
            <div class="flex justify-center gap-2">
              <p>Launch: Mon-Sun :</p>
              <p>11:00am-02:00pm</p>
            </div>
            <div class="flex justify-center gap-2">
              <p>Dinner: Sunday :</p>
              <div>
                <p>04:00pm-08:00pm</p>
                <p>04:00pm-09:00pm</p>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center sm:items-stretch"
          >
            <CustomButton
              class="w-1/2 bg-primary py-7 font-semibold text-sm sm:text-base md:text-lg lg:text-xl"
              title="Order now"
            />
            <CustomButton
              class="w-1/2 bg-[#FFFFFFF2] text-black py-7 font-semibold text-sm sm:text-base md:text-lg lg:text-xl"
              title="Reservation"
            />
          </div>
        </div>
      </div>
    </div>
  </InnerContainer>
</template>

<script lang="ts" setup>
import InnerContainer from "../../components/InnerContainer/InnerContainer.vue";
import CustomButton from "../../components/CustomButton/CustomButton.vue";
</script>

<style lang="scss" scoped></style>
