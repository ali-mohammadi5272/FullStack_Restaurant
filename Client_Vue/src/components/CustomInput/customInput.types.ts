import type { Rule } from "ant-design-vue/es/form";
import type { Slot } from "vue";

interface CustomInputPropsType {
  label?: string | Slot;
  name?: string | number;
  rules?: Rule[];
  prefix?: string | Slot;
  suffix?: string | Slot;
  type: "text" | "number" | "email" | "password" | "search";
  variant?: "outlined" | "borderless" | "filled";
  class?: string;
  allowClear?: boolean;
  value?: string;
}
export type { CustomInputPropsType };
