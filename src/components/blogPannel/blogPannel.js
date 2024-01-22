import DeleteBlog from "./deleteBlog";
import UpdateBlog from "./updateBlog";
import WriteBlog from "./writeBlog";

const BlogPannel = () => {
  return (
    <section className="container flex flex-wrap justify-between items-center mt-20">
      <WriteBlog />

      <UpdateBlog />

      <DeleteBlog />
    </section>
  );
};
export default BlogPannel;
