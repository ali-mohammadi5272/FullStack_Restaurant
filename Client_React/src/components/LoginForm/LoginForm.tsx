import CustomInput from "../CustomInput/CustomInput";
import FormButton from "../FormButton/FormButton";
import useFormValidator from "../../hooks/formValidator/formValidator";
import React, { memo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, Flex, Form } from "antd";
import { request } from "../../services/axios/axios";
import { setCookie } from "../../utils/helperFuncs/helperFuncs";
import { CookieEnum } from "../../utils/helperFuncs/helperFuncs.type";
import { LoginBodyType, LoginResponseType } from "./loginForm.type";
import {
  combinePattern,
  emailPattern,
  userNamePattern,
} from "../../utils/patterns";

const LoginForm = (): React.ReactNode => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, submittable] = useFormValidator<LoginBodyType>();
  const debounceRef: React.MutableRefObject<number> = useRef(Date.now());
  const navigate = useNavigate();

  const formOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (debounceRef.current > Date.now()) return;

    try {
      setIsLoading(true);

      debounceRef.current = Date.now() + 5000;

      await form.validateFields({ validateOnly: true });

      const response = await request.POST<LoginResponseType, LoginBodyType>({
        url: "/auth/login",
        body: {
          identifier: form.getFieldValue("identifier"),
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
        rules={[
          { required: true, message: "Username/Email is required" },
          {
            pattern: new RegExp(
              `(${userNamePattern.source})|(${emailPattern.source})`
            ),
            message: "Inserted Username/Email is not a valid Username/Email",
          },
        ]}
        label="Username/Email"
        type="text"
        name="identifier"
      />
      <CustomInput
        rules={[
          { required: true, message: "Password is required" },
          { min: 8, message: "Password must be at least 8 Characters" },
        ]}
        label="Password"
        type="password"
        name="password"
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
        <FormButton
          htmlType="submit"
          className="bg-primary w-full"
          title="Log in"
          disabled={!submittable || isLoading}
        />
      </Form.Item>
    </Form>
  );
};

export default memo(LoginForm);
