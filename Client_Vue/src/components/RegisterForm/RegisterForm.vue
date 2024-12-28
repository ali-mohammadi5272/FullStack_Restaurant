<template>
  <a-form
    layout="vertical"
    name="wrap"
    labelAlign="left"
    labelWrap
    :wrapperCol="{ flex: 1 }"
  >
    <CustomInput
      label="Full Name"
      type="text"
      name="Full Name"
      :rules="[{ required: true }]"
    />
    <CustomInput
      label="Email"
      type="email"
      name="Email"
      :rules="[{ required: true }]"
    />
    <CustomInput
      label="Password"
      type="password"
      name="Password"
      :rules="[{ required: true }]"
    />
    <a-form-item>
      <a-flex justify="space-between" align="center">
        <a-form-item name="remember" valuePropName="checked" noStyle>
          <a-checkbox class="text-lg">Remember me</a-checkbox>
        </a-form-item>
      </a-flex>
    </a-form-item>
    <a-form-item>
      <FormButton htmlType="submit" class="bg-primary w-full" title="Sign up" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import CustomInput from "./../CustomInput/CustomInput.vue";
import FormButton from "./../FormButton/FormButton.vue";
</script>

<style lang="scss" scoped></style>
