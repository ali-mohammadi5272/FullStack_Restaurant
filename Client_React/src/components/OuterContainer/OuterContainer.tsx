import React, { PropsWithChildren } from "react";
import { OuterContainerPropsType } from "./outerContainer.type";

const OuterContainer: React.FC<PropsWithChildren<OuterContainerPropsType>> = ({
  children,
}) => {
  return <div className="max-w-[1450px] mx-auto">{children}</div>;
};

export default OuterContainer;
