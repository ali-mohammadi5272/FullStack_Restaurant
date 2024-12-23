import React from "react";
import { Button } from "antd";
import { ButtonPropsType } from "./customButton.types";
const CustomButton: React.FC<ButtonPropsType> = ({
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
      className={`base-button ${className}`}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
