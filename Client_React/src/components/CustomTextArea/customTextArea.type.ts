import { Rule } from "antd/es/form";
import React from "react";

interface CustomTextAreaPropsType {
  label?: React.ReactNode;
  name?: string | number;
  layout?: "vertical" | "horizontal";
  rules?: Rule[];
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  variant?: "outlined" | "borderless" | "filled";
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string | number;
  showCount?: boolean;
  maxLength?: number;
  placeholder?: string;
  allowClear?:
    | boolean
    | {
        clearIcon?: React.ReactNode;
      };
}
export type { CustomTextAreaPropsType };
