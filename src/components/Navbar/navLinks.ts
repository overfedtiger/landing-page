export type NavLink = {
  id: number;
  name: string;
  link: string;
};

export const NavLinks: NavLink[] = [
  {
    id: 1,
    name: 'HOME',
    link: '/#',
  },
  {
    id: 2,
    name: 'PRODUCTS',
    link: '/#products',
  },
  {
    id: 3,
    name: 'ABOUT',
    link: '/#about',
  },
  {
    id: 4,
    name: 'BOOKING',
    link: '/#booking',
  },
];
