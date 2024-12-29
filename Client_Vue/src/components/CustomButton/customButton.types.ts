interface ButtonPropsType {
  type?: "link" | "text" | "default" | "primary" | "dashed";
  htmlType?: "button" | "submit" | "reset";
  class?: string;
  title: string;
}

export type { ButtonPropsType };
