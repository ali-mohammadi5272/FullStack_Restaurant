import React from "react";
import { Button } from "antd";
import { FormButtonPropsType } from "./formButton.types";
const FormButton: React.FC<FormButtonPropsType> = ({
  type,
  htmlType,
  className,
  title,
  onClick,
}) => {
  return (
    <Button
      type={type ? type : "primary"}
      htmlType={htmlType ? htmlType : "button"}
      className={`base-button rounded-[10px] ${className}`}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default FormButton;
