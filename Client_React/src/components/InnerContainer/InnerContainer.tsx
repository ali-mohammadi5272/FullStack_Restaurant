import React, { PropsWithChildren } from "react";
import { InnerContainerPropsType } from "./innerContainer.type";

const InnerContainer: React.FC<PropsWithChildren<InnerContainerPropsType>> = ({
  children,
}) => {
  return <div className="px-5">{children}</div>;
};

export default InnerContainer;
