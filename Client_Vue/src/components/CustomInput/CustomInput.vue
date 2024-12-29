<template>
  <a-config-provider
    :theme="{
      components: {
        Form: {
          labelColor: '#311F09',
          labelFontSize: 18,
        },
      },
    }"
  >
    <a-form-item :label="props.label" :name="props.name" :rules="props.rules">
      <a-input
        v-if="props.type !== 'password'"
        :type="props.type"
        :value="props.value"
        :class="`base-input ${props.class}`"
        :prefix="props.prefix"
        :suffix="props.suffix"
        :allowClear="props.allowClear"
        :bordered="props.variant === 'borderless' ? false : true"
        @input="emit('update:modelValue', $event.target.value)"
      >
        <template v-if="!props.prefix && props.type === 'email'" #prefix>
          <FontAwesomeIcon class="base-input-icon" icon="at" />
        </template>
        <template v-else-if="!props.prefix && props.type === 'search'" #prefix>
          <FontAwesomeIcon class="base-input-icon" icon="magnifying-glass" />
        </template>
        <template v-if="!props.suffix" #suffix>
          <slot name="suffix"></slot>
        </template>
      </a-input>
      <a-input-password
        v-else
        type="password"
        :value="props.value"
        :class="`base-input ${props.class}`"
        :prefix="props.prefix"
        :allowClear="props.allowClear"
        :bordered="props.variant === 'borderless' ? false : true"
        @input="emit('update:modelValue', $event.target.value)"
      >
        <template v-if="!props.prefix" #prefix>
          <FontAwesomeIcon class="base-input-icon" icon="unlock-keyhole" />
        </template>
      </a-input-password>
    </a-form-item>
  </a-config-provider>
</template>

<script lang="ts" setup>
import type { CustomInputPropsType } from "./customInput.types";
import FontAwesomeIcon from "./../FontAwesomeIcon/FontAwesomeIcon.vue";

const props = defineProps<CustomInputPropsType>();
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped></style>
