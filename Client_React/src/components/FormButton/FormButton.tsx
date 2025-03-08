import React from "react";
import { Button } from "antd";
import { FormButtonPropsType } from "./formButton.types";

const FormButton: React.FC<FormButtonPropsType> = ({
  type,
  htmlType,
  className,
  title,
  disabled,
  onClick,
}) => {
  return (
    <Button
      type={type ? type : "primary"}
      htmlType={htmlType ? htmlType : "button"}
      className={`base-button rounded-[10px] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default FormButton;
