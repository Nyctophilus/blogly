import Sidebar from "../sidebar/sidebar";
import LinkItems from "./linkItems";
import { auth } from "@/lib/auth";

const Links = async () => {
  const session = await auth();

  return (
    <nav>
      <LinkItems row session={session} />
      <Sidebar />
    </nav>
  );
};
export default Links;
