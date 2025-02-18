<template>
  <div
    :class="{
      'pr-5 sm:pr-10': props.position === 'right',
      'pl-5 sm:pl-10': props.position === 'left',
      'px-5 sm:px-10': !props.position,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import type { InnerContainerPropsType } from "./innerContainer.type.ts";

const props = defineProps<InnerContainerPropsType>();
</script>

<style lang="scss" scoped></style>
