type IconType =
  | "at"
  | "magnifying-glass"
  | "lock-open"
  | "unlock-keyhole"
  | "hashtag"
  | "cart-shopping";

interface FontAwesomeIconPropsType {
  class?: string;
  icon: IconType;
}

export type { FontAwesomeIconPropsType };
