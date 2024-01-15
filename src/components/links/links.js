import Sidebar from "../sidebar/sidebar";
import LinkItems from "./linkItems";

const Links = () => {
  return (
    <nav>
      <LinkItems row />
      <Sidebar />
    </nav>
  );
};
export default Links;
