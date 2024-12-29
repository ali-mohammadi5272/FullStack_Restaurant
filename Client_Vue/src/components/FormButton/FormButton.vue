<template>
  <a-button
    :type="props.type ? props.type : 'primary'"
    :htmlType="props.htmlType ? props.htmlType : 'button'"
    :class="`base-button rounded-[10px] ${props.class}`"
  >
    {{ props.title }}
  </a-button>
</template>

<script lang="ts" setup>
import { FormButtonPropsType } from "./formButton.types";

const props = defineProps<FormButtonPropsType>();
</script>

<style lang="scss" scoped></style>
