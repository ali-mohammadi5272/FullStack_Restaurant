type IconType =
  | "faAt"
  | "faMagnifyingGlass"
  | "faLock"
  | "faUnlockKeyhole"
  | "faHashtag"
  | "faCartShopping"
  | "faPlus"
  | "faAngleLeft"
  | "faAngleRight";

interface FontAwesomeIconPropsType {
  className?: string;
  icon: IconType;
}

export type { FontAwesomeIconPropsType };
