<template>
  <a-form
    layout="vertical"
    name="wrap"
    labelAlign="left"
    labelWrap
    :wrapperCol="{ flex: 1 }"
  >
    <CustomInput
      :rules="[{ required: true }]"
      label="Email"
      type="email"
      name="Email"
    />
    <CustomInput
      :rules="[{ required: true }]"
      label="Password"
      type="password"
      name="Password"
    />
    <a-form-item>
      <a-flex justify="space-between" align="center">
        <a-form-item name="remember" valuePropName="checked" noStyle>
          <Checkbox className="text-lg">Remember me</Checkbox>
        </a-form-item>
        <router-link to="#" className="text-lg"> Forgot password </router-link>
      </a-flex>
    </a-form-item>
    <a-form-item>
      <FormButton htmlType="submit" class="bg-primary w-full" title="Log in" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import CustomInput from "./../CustomInput/CustomInput.vue";
import FormButton from "./../FormButton/FormButton.vue";
</script>
