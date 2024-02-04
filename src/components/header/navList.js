import { List, ListItem } from "@/lib/export-mat-tailwind";
import Link from "next/link";

const navItems = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about Us",
    path: "/about",
  },
  {
    title: "blogs",
    path: "/blogs",
  },
  {
    title: "contact us",
    path: "/contact",
  },
];

const NavList = () => {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {navItems.map(({ title, path }) => (
        <Link href={path} key={path} className="text-blue-gray">
          <ListItem className="flex items-center gap-2 py-2 pr-4 capitalize">
            {title}
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
export default NavList;
