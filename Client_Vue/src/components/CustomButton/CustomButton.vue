<template>
  <Button
    :class="`base-button rounded-[162.94px] ${props.class}`"
    :htmlType="props.htmlType ? props.htmlType : 'button'"
    :type="props.type ? props.type : 'primary'"
  >
    {{ props.title }}
  </Button>
</template>

<script lang="ts" setup>
import { Button } from "ant-design-vue";
import type { ButtonPropsType } from "./customButton.types";

const props = defineProps<ButtonPropsType>();
</script>
