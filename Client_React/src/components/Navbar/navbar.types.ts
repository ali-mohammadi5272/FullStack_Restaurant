interface LinkHref {
  hash?: string;
  pathname?: string;
  search?: string;
}

interface NavbarLinkType {
  id: number;
  title: string;
  to: string | LinkHref;
}

export type { NavbarLinkType };
