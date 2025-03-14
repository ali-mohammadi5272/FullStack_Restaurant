import { ConfigProvider, Form, Input } from "antd";
import React, { memo } from "react";
import { CustomTextAreaPropsType } from "./customTextArea.type";

const CustomTextArea: React.FC<CustomTextAreaPropsType> = ({
  label,
  name,
  layout,
  rules,
  variant,
  className,
  allowClear,
  onChange,
  value,
  showCount,
  maxLength,
  placeholder,
  style,
  parentClassName,
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "#311F09",
            labelFontSize: 18,
          },
        },
      }}
    >
      <Form.Item
        label={label}
        name={name}
        layout={layout ? layout : "vertical"}
        rules={rules}
        className={parentClassName}
      >
        <Input.TextArea
          variant={variant ? variant : "filled"}
          className={`base-textArea ${className}`}
          allowClear={allowClear ? allowClear : false}
          onChange={onChange}
          value={value}
          showCount={showCount}
          maxLength={maxLength}
          style={style}
          placeholder={placeholder}
        />
      </Form.Item>
    </ConfigProvider>
  );
};

export default memo(CustomTextArea);
