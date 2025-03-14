import CustomInput from "../CustomInput/CustomInput";
import FormButton from "../FormButton/FormButton";
import useFormValidator from "../../hooks/formValidator/formValidator";
import CustomTextArea from "../CustomTextArea/CustomTextArea";
import React, { memo, useRef, useState } from "react";
import { Form, Modal, Spin } from "antd";
import { request } from "../../services/axios/axios";
import { ContactBodyType } from "./contactUsFrom.type";

const ContactUsFrom = (): React.ReactNode => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [form, submittable] = useFormValidator<ContactBodyType>();
  const debounceRef: React.MutableRefObject<number> = useRef(Date.now());

  const formOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (debounceRef.current > Date.now()) return;
      debounceRef.current = Date.now() + 5000;

      await form.validateFields({ validateOnly: true });

      setIsModalOpen(true);
    } catch (error) {}
  };

  const sendMessage = async (): Promise<void> => {
    setIsLoading(true);

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
  };

  const modalOnOkClick = async (): Promise<void> => {
    try {
      await sendMessage();

      form.resetFields();
    } catch (err) {
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  const modalOnCancelClick = (): void => setIsModalOpen(false);

  return (
    <>
      <Form
        name="wrap"
        labelAlign="left"
        form={form}
        labelWrap
        wrapperCol={{ flex: 1 }}
        onSubmitCapture={formOnSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <CustomInput
            rules={[{ required: true, message: "Firstname is required" }]}
            label="Firstname"
            type="text"
            name="firstName"
            parentClassName="w-full"
          />
          <CustomInput
            rules={[{ required: true, message: "Lastname is required" }]}
            label="Lastname"
            type="text"
            name="lastName"
            parentClassName="w-full"
          />
          <CustomInput
            rules={[{ required: true, message: "Email is required" }]}
            label="Email address"
            type="email"
            name="email"
            parentClassName="w-full"
          />
          <CustomInput
            rules={[{ required: true, message: "Subject is required" }]}
            label="Subject"
            type="text"
            name="subject"
            parentClassName="w-full"
          />
        </div>

        <CustomTextArea
          rules={[{ required: true, message: "Message is required" }]}
          label="Message"
          name="message"
          style={{ height: "300px", resize: "none" }}
        />
        <FormButton
          htmlType="submit"
          className="block bg-primary w-full md:w-1/3 md:mx-auto mt-16"
          title="Submit"
          disabled={!submittable || isLoading}
        />
      </Form>
      <Modal
        open={isModalOpen}
        title="Confirmation"
        
        onOk={modalOnOkClick}
        onCancel={modalOnCancelClick}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <p>Send Message ?</p>
      </Modal>
      <Spin tip="Loading..." fullscreen spinning={isLoading} size="large" />
    </>
  );
};

export default memo(ContactUsFrom);
