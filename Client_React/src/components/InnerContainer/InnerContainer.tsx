import React, { PropsWithChildren } from "react";
import { InnerContainerPropsType } from "./innerContainer.type";

const InnerContainer: React.FC<PropsWithChildren<InnerContainerPropsType>> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default InnerContainer;
