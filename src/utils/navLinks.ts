import {
  IconComponents,
  IconDashboard,
  IconLock,
  TablerIconsProps
} from "@tabler/icons-react";

export interface NavItem {
  label: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  link?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export const navLinks: NavItem[] = [
  { label: "Dashboard", icon: IconDashboard, link: "/" },
  {
    label: "Auth",
    icon: IconLock,
    initiallyOpened: true,
    links: [
      {
        label: "Login",
        link: "/login",
      },
      {
        label: "Register",
        link: "/register",
      },
    ],
  },
  {
    label: "Pages",
    icon: IconComponents,
    initiallyOpened: true,
    links: [
      {
        label: "Example 1",
        link: "/",
      },
      {
        label: "Example 2",
        link: "/",
      },
    ],
  },
];
