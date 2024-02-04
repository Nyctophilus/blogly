import { getSession } from "@/lib/actions";
import NavbarContainer from "./navbarContainer";

const Header = async () => {
  return <NavbarContainer session={await getSession()} />;
};

export default Header;
