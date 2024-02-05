"use client";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import NavList from "./navList";
import Image from "next/image";
import SessionLinks from "./sessionLinks";
import Link from "next/link";

const NavbarContainer = ({ session }) => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="max-w-none px-4 py-2 rounded-none top-0 z-50 fixed">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <Image
            src={"https://i.imgur.com/BblNWo3.png"}
            width={80}
            height={80}
            alt="Logo"
            className="size-12 sm:size-20 w-auto"
            priority
          />
        </Link>
        <div className="hidden lg:block ml-auto">
          <NavList />
        </div>

        <div className="flex items-center justify-between ml-auto lg:ml-0">
          {!openNav && <SessionLinks session={session} />}
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="size-8" strokeWidth={2} />
          ) : (
            <Bars3Icon className="size-8" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};
export default NavbarContainer;
