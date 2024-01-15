import Image from "next/image";
import Links from "../links/links";

const Header = () => {
  return (
    <header className="container h-[80px] flex justify-between items-center">
      <Image
        src={"https://i.imgur.com/BblNWo3.png"}
        width={80}
        height={80}
        style={{ width: "auto" }}
        alt="Logo"
        priority
      />

      <Links />
    </header>
  );
};
export default Header;
