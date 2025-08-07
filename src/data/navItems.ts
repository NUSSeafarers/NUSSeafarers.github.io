export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Voyages", href: "/blog/voyages" },
      { label: "Sailing", href: "/blog/sailing" },
      { label: "Sustainability", href: "/blog/sustainability" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      // { label: "Our Story", href: "/about/story" },
      { label: "Our Team", href: "/about/team" },
    ],
  },
];
