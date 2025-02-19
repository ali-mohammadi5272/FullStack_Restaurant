<template>
  <a-form
    :wrapperCol="{ flex: 1 }"
    labelAlign="left"
    labelWrap
    layout="vertical"
    name="wrap"
  >
    <CustomInput
      :rules="[{ required: true }]"
      label="Date"
      name="Date"
      type="date"
    />
    <CustomInput
      :rules="[{ required: true }]"
      label="Time"
      name="Time"
      type="time"
    />
    <a-form-item
      :rules="{ required: true }"
      label="Party Size"
      name="Party Size"
    >
      <a-input-number
        :min="1"
        class="base-input w-full flex items-center"
        type="number"
      ></a-input-number>
    </a-form-item>
    <a-form-item>
      <FormButton
        class="bg-primary w-full"
        htmlType="submit"
        title="Book now"
      />
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import FormButton from "../FormButton/FormButton.vue";
import CustomInput from "../CustomInput/CustomInput.vue";
</script>

<style lang="scss" scoped></style>
