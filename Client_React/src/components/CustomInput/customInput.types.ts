import { Rule } from "antd/es/form";
import React from "react";

interface CustomInputPropsType {
  label?: React.ReactNode;
  name?: string | number;
  layout?: "vertical" | "horizontal";
  rules?: Rule[];
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  type: "text" | "number" | "email" | "password" | "search";
  variant?: "outlined" | "borderless" | "filled";
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  showCount?: boolean;
  maxLength?: number;
  placeholder?: string;
  parentClassName?: string;
  allowClear?:
    | boolean
    | {
        clearIcon?: React.ReactNode;
      };
}
export type { CustomInputPropsType };
