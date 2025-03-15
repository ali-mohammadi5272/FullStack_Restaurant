import React, { PropsWithChildren } from "react";
import { Button } from "antd";
import { ButtonPropsType } from "./customButton.types";
const CustomButton: React.FC<PropsWithChildren<ButtonPropsType>> = ({
  type,
  htmlType,
  className,
  title,
  children,
  onClick,
}) => {
  return (
    <Button
      type={type ? type : "primary"}
      htmlType={htmlType ? htmlType : "button"}
      className={`base-button rounded-[162.94px] ${className}`}
      onClick={onClick}
    >
      {children ? children : title}
    </Button>
  );
};

export default CustomButton;
