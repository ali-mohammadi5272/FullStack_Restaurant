type IconType =
  | "at"
  | "magnifying-glass"
  | "lock-open"
  | "unlock-keyhole"
  | "hashtag"
  | "cart-shopping"
  | "plus"
  | "instagram"
  | "facebook"
  | "twitter";

interface FontAwesomeIconPropsType {
  class?: string;
  icon: IconType;
}

export type { FontAwesomeIconPropsType };
