type IconType =
  | "faAt"
  | "faMagnifyingGlass"
  | "faLock"
  | "faUnlockKeyhole"
  | "faHashtag"
  | "faCartShopping"
  | "faPlus";

interface FontAwesomeIconPropsType {
  className?: string;
  icon: IconType;
}

export type { FontAwesomeIconPropsType };
