import { Form, FormInstance } from "antd";
import { useEffect, useState } from "react";

const useFormValidator = <T>(): [FormInstance<T>, boolean] => {
  const [form] = Form.useForm<T>();
  const [submittable, setSubmittable] = useState<boolean>(false);
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return [form, submittable];
};

export default useFormValidator;
