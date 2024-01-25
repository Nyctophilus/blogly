import { getSession } from "@/lib/actions";
import Sidebar from "../sidebar/sidebar";
import LinkItems from "./linkItems";

const Links = async () => {
  return (
    <nav>
      <LinkItems row session={await getSession()} />
      <Sidebar />
    </nav>
  );
};
export default Links;
