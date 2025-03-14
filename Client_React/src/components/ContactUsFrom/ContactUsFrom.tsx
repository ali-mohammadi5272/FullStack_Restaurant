import CustomInput from "../CustomInput/CustomInput";
import FormButton from "../FormButton/FormButton";
import React, { memo, useRef, useState } from "react";
import useFormValidator from "../../hooks/formValidator/formValidator";
import CustomTextArea from "../CustomTextArea/CustomTextArea";
import { Flex, Form } from "antd";
import { request } from "../../services/axios/axios";
import { ContactBodyType } from "./contactUsFrom.type";

const ContactUsFrom = (): React.ReactNode => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, submittable] = useFormValidator<ContactBodyType>();
  const debounceRef: React.MutableRefObject<number> = useRef(Date.now());

  const formOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (debounceRef.current > Date.now()) return;

    try {
      setIsLoading(true);

      debounceRef.current = Date.now() + 5000;

      await form.validateFields({ validateOnly: true });

      await request.POST<null, ContactBodyType>({
        url: "/contact-us",
        body: {
          firstName: form.getFieldValue("firstName"),
          lastName: form.getFieldValue("lastName"),
          email: form.getFieldValue("email"),
          subject: form.getFieldValue("subject"),
          message: form.getFieldValue("subject"),
        },
      });

      form.resetFields();
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
      <Flex justify="space-between" gap={24} align="center">
        <CustomInput
          rules={[{ required: true, message: "Firstname is required" }]}
          label="Firstname"
          type="text"
          name="firstName"
          parentClassName="w-full flex-grow"
        />
        <CustomInput
          rules={[{ required: true, message: "Lastname is required" }]}
          label="Lastname"
          type="text"
          name="lastName"
          parentClassName="w-full flex-grow"
        />
      </Flex>
      <Flex justify="space-between" gap={24} align="center">
        <CustomInput
          rules={[{ required: true, message: "Email is required" }]}
          label="Email address"
          type="email"
          name="email"
          parentClassName="w-full flex-grow"
        />
        <CustomInput
          rules={[{ required: true, message: "Subject is required" }]}
          label="Subject"
          type="text"
          name="subject"
          parentClassName="w-full flex-grow"
        />
      </Flex>
      <CustomTextArea
        rules={[{ required: true, message: "Message is required" }]}
        label="Message"
        name="message"
        style={{ height: "300px", resize: "none" }}
      />
      <Form.Item>
        <FormButton
          htmlType="submit"
          className="block bg-primary w-1/3 mx-auto"
          title="Submit"
          disabled={!submittable || isLoading}
        />
      </Form.Item>
    </Form>
  );
};

export default memo(ContactUsFrom);
