import useFormValidator from "../../hooks/formValidator/formValidator";
import FormButton from "../FormButton/FormButton";
import CustomInput from "../CustomInput/CustomInput";
import { useRef, useState } from "react";
import { Checkbox, Flex, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { request } from "../../services/axios/axios";
import { CookieEnum } from "../../utils/helperFuncs/helperFuncs.type";
import { setCookie } from "../../utils/helperFuncs/helperFuncs";
import { RegisterBodyType, RegisterResponseType } from "./registerForm.type";
import { emailPattern } from "../../utils/patterns";

const RegisterForm = (): React.ReactNode => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, submittable] = useFormValidator<RegisterBodyType>();
  const debounceRef: React.MutableRefObject<number> = useRef(Date.now());
  const navigate = useNavigate();

  const formOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (debounceRef.current > Date.now()) return;

    try {
      setIsLoading(true);

      debounceRef.current = Date.now() + 5000;

      await form.validateFields({ validateOnly: true });

      const response = await request.POST<
        RegisterResponseType,
        RegisterBodyType
      >({
        url: "/auth/register",
        body: {
          fullName: form.getFieldValue("fullName"),
          userName: form.getFieldValue("userName"),
          email: form.getFieldValue("email"),
          password: form.getFieldValue("password"),
        },
      });

      setCookie({
        key: CookieEnum.ACCESS_TOKEN,
        value: response.data.data.accessToken,
        maxAge: 60 * 60 * 24,
        path: "/",
      });

      setCookie({
        key: CookieEnum.REFRESH_TOKEN,
        value: response.data.data.refreshToken,
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      form.resetFields();

      navigate("/", { replace: true });
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      name="wrap"
      labelAlign="left"
      form={form}
      labelWrap
      wrapperCol={{ flex: 1 }}
      onSubmitCapture={formOnSubmit}
    >
      <CustomInput
        label="Full Name"
        type="text"
        name="fullName"
        rules={[{ required: true }]}
      />
      <CustomInput
        label="Username"
        type="text"
        name="userName"
        rules={[{ required: true }]}
      />
      <CustomInput
        label="Email"
        type="email"
        name="email"
        rules={[
          { required: true },
          { pattern: emailPattern, message: "Email is not valid" },
        ]}
      />
      <CustomInput
        label="Password"
        type="password"
        name="password"
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
        <FormButton
          htmlType="submit"
          className="bg-primary w-full"
          title="Sign up"
          disabled={!submittable || isLoading}
        />
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
