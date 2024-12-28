import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAt,
  faCartShopping,
  faHashtag,
  faLock,
  faMagnifyingGlass,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";

const icons: Record<string, IconDefinition> = {
  at: faAt,
  "magnifying-glass": faMagnifyingGlass,
  "lock-open": faLock,
  "unlock-keyhole": faUnlockKeyhole,
  hashtag: faHashtag,
  "cart-shopping": faCartShopping,
};

export { icons };
