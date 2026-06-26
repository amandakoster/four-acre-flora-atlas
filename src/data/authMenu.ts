export type AuthMenuLinkItem = {
  label: string;
  href: string;
};

export type AuthMenuActionItem = {
  label: string;
  action: "sign-out";
};

export type AuthMenuItem = AuthMenuLinkItem | AuthMenuActionItem;

export type AuthMenuSection = {
  items: AuthMenuItem[];
};

export const authMenu: AuthMenuSection[] = [
  {
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
      },
      {
        label: "My Observations",
        href: "/observations",
      },
      {
        label: "My Species",
        href: "/species",
      },
      {
        label: "Settings",
        href: "/settings",
      },
    ],
  },
  {
    items: [
      {
        label: "Sign Out",
        action: "sign-out",
      },
    ],
  },
];
