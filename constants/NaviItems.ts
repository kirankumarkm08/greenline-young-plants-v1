import type { ReactNode } from "react";

// Interfaces
export interface NaviItemType {
  name: string;
  dropdownMenu?: DropdownMenuItem[];
   href?: string; // Added href to NaviItem for consistency
}

export interface DropdownMenuItem {
  label: string;
  href: string;
  icon?: React.ComponentType<any> | string; // Icon can be a React component or a string (for placeholder)
}

// Placeholder icon component

// Data
export const NaviItems: NaviItemType[] = [
  {
    name: "Our Company",
    dropdownMenu: [
      {
        label: "About Us",
        href: "/about-us",
        icon: "PlaceholderIcon",
      },
      {
        label: "Our History",
        href: "/our-history",
        icon: "PlaceholderIcon",
      },
      {
        label: "Our Form",
        href: "/our-form",
        icon: "PlaceholderIcon",
      },
      {
        label: "Our Infrastructure",
        href: "/our-infrastructure",
        icon: "PlaceholderIcon",
      },
      {
        label: "Our Production Process",
        href: "/our-production-process",
        icon: "PlaceholderIcon",
      },
      {
        label: "Our Catalogs",
        href: "/our-catalogs",
        icon: "PlaceholderIcon",
      },
    ],
  },
  {
    name: " research and developement",
    dropdownMenu: [
      {
        label: " Breeding",
        href: "Breeding",
        icon: "PlaceholderIcon",
      },
      {
        label: " diversification",
        href: "/diversification",
        icon: "PlaceholderIcon",
      },
      {
        label: " research team",
        href: "/rearch-team",
        icon: "PlaceholderIcon",
      },
    ],
  },
  {
    name: "Our Products",
    dropdownMenu: [
      {
        label: "carnation",
        href: "/carnation",
      },
      {
        label: "spray carnation",
        href: "/spray-carnation",
      },
      {
        label: "porthus",
        href: "/porthus",
      },
    ],
  },
  {
    name:"our varieties",
    href:"/our-varieties",
  },{
    name:"Blog",
    href:"/blog",
  },{
    name: "Contact Us",
    dropdownMenu: [
        {
            label:"  our team",
            href:"/our-team",
        },{
            label:" agents in the world",
            href:"/agents-in-the-world",
        },{
            label:"our allies",
            href:"/our-allies",
        },{
            label:"ethical code",
            href:"/ethical-code",
        }
    ],
  }
];
