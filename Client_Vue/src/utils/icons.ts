import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAt,
  faCartShopping,
  faHashtag,
  faLock,
  faMagnifyingGlass,
  faUnlockKeyhole,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const icons: Record<string, IconDefinition> = {
  at: faAt,
  "magnifying-glass": faMagnifyingGlass,
  "lock-open": faLock,
  "unlock-keyhole": faUnlockKeyhole,
  hashtag: faHashtag,
  "cart-shopping": faCartShopping,
  plus: faPlus,
  instagram: faInstagram,
  facebook: faFacebook,
  twitter: faTwitter,
};

export { icons };
