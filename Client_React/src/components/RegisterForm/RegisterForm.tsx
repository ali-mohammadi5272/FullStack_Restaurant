import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import { Checkbox, Flex, Form } from "antd";

const LoginForm = (): React.ReactNode => {
  const [form] = Form.useForm();
  return (
    <Form
      name="wrap"
      labelAlign="left"
      form={form}
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
      style={{ maxWidth: 600 }}
    >
      <CustomInput
        label="Full Name"
        type="text"
        name="Full Name"
        rules={[{ required: true }]}
      />
      <CustomInput
        label="Email"
        type="email"
        name="Email"
        rules={[{ required: true }]}
      />
      <CustomInput
        label="Password"
        type="password"
        name="Password"
        rules={[{ required: true }]}
      />
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="text-lg">Remember me</Checkbox>
          </Form.Item>
        </Flex>
      </Form.Item>
      <Form.Item>
        <CustomButton className="bg-primary" title="Sign up" />
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
