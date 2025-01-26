<template>
  <a-button
    :class="`base-button rounded-[162.94px] ${props.class}`"
    :htmlType="props.htmlType ? props.htmlType : 'button'"
    :type="props.type ? props.type : 'primary'"
  >
    {{ props.title }}
    <slot v-if="!props.title"></slot>
  </a-button>
</template>

<script lang="ts" setup>
import type { ButtonPropsType } from "./customButton.types";

const props = defineProps<ButtonPropsType>();
</script>
