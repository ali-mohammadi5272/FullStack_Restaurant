interface ButtonPropsType {
  type?: "link" | "text" | "default" | "primary" | "dashed";
  htmlType?: "button" | "submit" | "reset";
  className?: string;
  title: string;
}

export type { ButtonPropsType };
