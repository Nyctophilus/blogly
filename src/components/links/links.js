import { getUser } from "@/lib/data";
import Sidebar from "../sidebar/sidebar";
import LinkItems from "./linkItems";
import { auth } from "@/lib/auth";

const Links = async () => {
  const session = await auth();
  const { username } = await getUser(session.user?.id);

  return (
    <nav>
      <LinkItems row session={session} uName={username} />
      <Sidebar />
    </nav>
  );
};
export default Links;
