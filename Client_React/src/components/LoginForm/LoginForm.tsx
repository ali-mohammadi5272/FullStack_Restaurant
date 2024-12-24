import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
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
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="text-lg">Remember me</Checkbox>
          </Form.Item>
          <Link to="#" className="text-lg">
            Forgot password
          </Link>
        </Flex>
      </Form.Item>
      <Form.Item>
        <CustomButton className="bg-primary" title="Log in" />
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
