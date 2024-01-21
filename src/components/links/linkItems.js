"use client";

import Link from "next/link";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";
import { signOutGit } from "@/lib/actions";

const links = ["home", "about", "contact us", "blogs"];

const LinkItems = ({ row, session }) => {
  const horStyles = "md:flex gap-2 items-center hidden";
  const VerStyles =
    "flex flex-col gap-6 items-center justify-center gap-4 py-6 md:hidden rounded-2xl bg-[var(--bg-900)] fixed top-[80px] right-[0] h-[calc(100svh-120px)] w-[20svh] overflow-hidden z-10";
  const linkStyle = `${
    !row && styles.link
  } capitalize w-full text-center hover:bg-[var(--bg-alt)] whitespace-nowrap py-1 px-2 rounded-lg`;

  const pathname = usePathname();

  return (
    <div className={row ? horStyles : VerStyles}>
      {links.map((link) => (
        <Link
          className={`${linkStyle} ${
            link === "home" && pathname === "/"
              ? styles.active
              : pathname === `/${link.split(" ")[0]}` && styles.active
          }`}
          key={link}
          href={`/${link === "home" ? "" : link.split(" ")[0]}`}
        >
          {link}
        </Link>
      ))}

      {session?.user?.isAdmin && (
        <Link className={`${linkStyle} ${styles.active}`} href={"/admin"}>
          admin
        </Link>
      )}

      {session?.user ? (
        <form action={signOutGit}>
          <button type="submit" className={`${linkStyle} ${styles.active}`}>
            logout
          </button>
        </form>
      ) : (
        <Link
          className={`${linkStyle} ${pathname === "/login" && styles.active}`}
          href={"/login"}
        >
          login
        </Link>
      )}
    </div>
  );
};
export default LinkItems;
