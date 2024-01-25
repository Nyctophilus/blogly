import DeleteBlog from "./deleteBlog";
import UpdateBlog from "./updateBlog";
import WriteBlog from "./writeBlog";
import { getSession } from "@/lib/actions";

const BlogPannel = async () => {
  const {
    user: { id },
  } = await getSession();

  return (
    <section className="container flex flex-wrap justify-between items-center mt-20">
      <WriteBlog author={id} />

      <UpdateBlog author={id} />

      <DeleteBlog author={id} />
    </section>
  );
};
export default BlogPannel;
