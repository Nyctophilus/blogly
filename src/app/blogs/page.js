import BlogCard from "@/components/blogCard/blogCard";
import { getData } from "@/lib/actions";
import { Suspense } from "react";
import Loading from "./loading";
import WriteBlog from "@/components/writeBlog/writeBlog";

export const metadata = {
  title: "Blogs",
  description:
    "this page is listing all blogs of the website. you can also create your own blog using the form at the top of the page.",
};

const Blogs = async () => {
  const blogs = await getData();

  return (
    <main className="container min-h-[calc(100svh-80px)] py-12">
      <WriteBlog />

      <section className="grid place-items-center grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(24rem,_1fr))] gap-6">
        {blogs.map((blog) => (
          <Suspense key={blog._id} fallback={<Loading />}>
            <BlogCard {...blog} />
          </Suspense>
        ))}
      </section>
    </main>
  );
};

export default Blogs;
