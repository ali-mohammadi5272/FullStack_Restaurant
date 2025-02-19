import React from "react";
import CustomInput from "../CustomInput/CustomInput.tsx";
import FormButton from "../FormButton/FormButton.tsx";
import { Form, InputNumber } from "antd";

const BookATableForm = (): React.ReactNode => {
  const [form] = Form.useForm();

  return (
    <Form
      name="wrap"
      labelAlign="left"
      form={form}
      labelWrap
      wrapperCol={{ flex: 1 }}
    >
      <CustomInput
        rules={[{ required: true }]}
        label="Email"
        type="email"
        name="Email"
      />
      <CustomInput
        rules={[{ required: true }]}
        label="Password"
        type="password"
        name="Password"
      />

      <Form.Item
        rules={[{ required: true }]}
        label="Party Size"
        name="Party Size"
        layout="vertical"
      >
        <InputNumber
          min={1}
          variant="filled"
          className="base-input w-full flex items-center"
          type="number"
        />
      </Form.Item>
      <Form.Item>
        <FormButton
          htmlType="submit"
          className="bg-primary w-full"
          title="Log in"
        />
      </Form.Item>
    </Form>
  );
};

export default BookATableForm;
