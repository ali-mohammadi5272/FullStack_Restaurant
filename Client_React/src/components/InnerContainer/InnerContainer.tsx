import React, { PropsWithChildren } from "react";
import { InnerContainerPropsType } from "./innerContainer.type";

const InnerContainer: React.FC<PropsWithChildren<InnerContainerPropsType>> = ({
  children,
  position,
}) => {
  return (
    <div
      className={
        position === "right"
          ? "pr-5 sm:pr-10"
          : position === "left"
            ? "pl-5 sm:pl-10"
            : !position
              ? "px-5 sm:px-10"
              : ""
      }
    >
      {children}
    </div>
  );
};

export default InnerContainer;
