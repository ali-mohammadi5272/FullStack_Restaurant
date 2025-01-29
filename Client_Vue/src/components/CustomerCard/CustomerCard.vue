<template>
  <div
    :class="`text-center text-2xl space-y-4 sm:space-y-8 ${props.class ? props.class : ''}`"
  >
    <section>
      <img
        :src="props.img"
        alt="Customer's Image"
        class="w-full h-auto rounded-full"
      />
    </section>
    <section>
      <h3
        class="text-[16px] leading-3 sm:text-lg md:text-3xl font-semibold text-[#311F09]"
      >
        {{ props.name }}
      </h3>
      <h4 class="text-[12px] sm:text-sm md:text-xl text-[#5C4529]">
        {{ props.role }}
      </h4>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { type CustomerCardPropsType } from "./customerCard.type.ts";

const props = defineProps<CustomerCardPropsType>();
</script>

<style lang="scss" scoped></style>
