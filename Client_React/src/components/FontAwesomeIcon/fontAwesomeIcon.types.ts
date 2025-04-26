type IconType =
  | "faAt"
  | "faMagnifyingGlass"
  | "faLock"
  | "faUnlockKeyhole"
  | "faHashtag"
  | "faCartShopping"
  | "faPlus"
  | "faAngleLeft"
  | "faAngleRight"
  | "faInstagram"
  | "faFacebookF"
  | "faTwitter"
  | "faUser";

interface FontAwesomeIconPropsType {
  className?: string;
  icon: IconType;
}

export type { FontAwesomeIconPropsType };
