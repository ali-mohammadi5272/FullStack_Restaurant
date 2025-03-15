import React from "react";

interface ButtonPropsType {
  type?: "link" | "text" | "default" | "primary" | "dashed";
  htmlType?: "button" | "submit" | "reset";
  className?: string;
  title?: string | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children?: string | React.ReactNode;
}

export type { ButtonPropsType };
