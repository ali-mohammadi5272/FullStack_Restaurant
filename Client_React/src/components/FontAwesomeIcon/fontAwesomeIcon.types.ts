type IconType =
  | "faAt"
  | "faMagnifyingGlass"
  | "faLock"
  | "faUnlockKeyhole"
  | "faHashtag"
  | "faCartShopping";

interface FontAwesomeIconPropsType {
  className?: string;
  icon: IconType;
}

export type { FontAwesomeIconPropsType };
