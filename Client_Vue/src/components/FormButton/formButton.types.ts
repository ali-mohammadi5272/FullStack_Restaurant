interface FormButtonPropsType {
  type?: "link" | "text" | "default" | "primary" | "dashed";
  htmlType?: "button" | "submit" | "reset";
  class?: string;
  title: string;
  // onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export type { FormButtonPropsType };
