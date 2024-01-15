import Link from "next/link";
import styles from "./links.module.css";

const links = ["home", "about", "contact us", "blogs"];

const LinkItems = ({ row }) => {
  const horStyles = "flex gap-2 items-center max-md:hidden";
  const VerStyles =
    "flex flex-col gap-6 items-center justify-center gap-4 py-6 md:hidden rounded-2xl bg-[var(--bg-900)] fixed top-[80px] right-[0] h-[calc(100svh-120px)] w-[20svh] z-10";

  return (
    <div className={row ? horStyles : VerStyles}>
      {links.map((link) => (
        <Link
          className={`${
            !row && styles.link
          } capitalize w-full text-center hover:bg-[var(--bg-alt)] whitespace-nowrap py-1 px-2 rounded-lg`}
          key={link}
          href={`/${link === "home" ? "" : link.split(" ")[0]}`}
        >
          {link}
        </Link>
      ))}

      <Link
        className={`${
          !row && styles.link
        } capitalize w-full text-center hover:bg-[var(--bg-alt)] py-1 px-2 rounded-lg`}
        href={"/admin"}
      >
        admin
      </Link>
      <Link
        className={`${
          !row && styles.link
        } capitalize w-full text-center hover:bg-[var(--bg-alt)] py-1 px-2 rounded-lg`}
        href={"/login"}
      >
        login
      </Link>
    </div>
  );
};
export default LinkItems;
