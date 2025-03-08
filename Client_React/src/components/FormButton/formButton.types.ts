interface FormButtonPropsType {
  type?: "link" | "text" | "default" | "primary" | "dashed";
  htmlType?: "button" | "submit" | "reset";
  className?: string;
  title: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export type { FormButtonPropsType };
