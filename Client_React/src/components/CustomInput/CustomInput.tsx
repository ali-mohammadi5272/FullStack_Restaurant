import { ConfigProvider, Form, Input } from "antd";
import { CustomInputPropsType } from "./customInput.types";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";

const CustomInput: React.FC<CustomInputPropsType> = ({
  label,
  name,
  layout,
  rules,
  prefix,
  suffix,
  type,
  variant,
  className,
  allowClear,
  onChange,
}) => {
  const defaultPrefix = (): React.ReactNode => {
    if (type === "email") {
      return (
        <FontAwesomeIcon icon="faAt" className="text-xl text-[#00000040]" />
      );
    }
    else if (type === "password") {
      return (
        <FontAwesomeIcon
          icon="faUnlockKeyhole"
          className="text-xl text-[#00000040]"
        />
      );
    }
    else if (type === "search") {
      return (
        <FontAwesomeIcon
          icon="faMagnifyingGlass"
          className="text-xl text-[#00000040]"
        />
      );
    }
    else {
      return <></>;
    }
  };

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
      >
        <Input
          prefix={prefix ? prefix : defaultPrefix()}
          suffix={suffix}
          type={type}
          variant={variant ? variant : "filled"}
          className={`base-input ${className}`}
          allowClear={allowClear ? allowClear : false}
          onChange={onChange}
        />
      </Form.Item>
    </ConfigProvider>
  );
};

export default CustomInput;
