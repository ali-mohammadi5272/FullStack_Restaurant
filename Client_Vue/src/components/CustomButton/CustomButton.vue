<template>
  <Button
    :type="props.type ? props.type : 'primary'"
    :htmlType="props.htmlType ? props.htmlType : 'button'"
    :className="`base-button rounded-[162.94px] ${className}`"
    >{{ props.title }}</Button
  >
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { Button } from "ant-design-vue";
import type { ButtonPropsType } from "./customButton.types";

const props = defineProps<ButtonPropsType>();
</script>
