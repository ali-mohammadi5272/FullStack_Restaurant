import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIconPropsType } from "./fontAwesomeIcon.types";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { icons } from "../../utils/icons";

const FontAwesomeIcon: React.FC<FontAwesomeIconPropsType> = ({
  icon,
  className,
}) => {
  library.add(fas);

  const iconDefinition: IconDefinition | undefined = icons[icon];
  if (!iconDefinition) return "";

  return <Icon icon={iconDefinition} className={className} />;
};

export default FontAwesomeIcon;
