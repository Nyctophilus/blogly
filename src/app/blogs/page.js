import BlogCard from "@/components/blogCard/blogCard";
import { getData } from "@/lib/actions";
import { Suspense } from "react";
import BlogPannel from "@/components/blogPannel/blogPannel";
import Loading from "./loading";

export const metadata = {
  title: "Blogs",
  description:
    "this page is listing all blogs of the website. you can also create your own blog using the form at the top of the page.",
};

const Blogs = async () => {
  const blogs = await getData();

  return (
    <main className="container min-w-[70dvw] min-h-[100dvh] mb-12 mt-24 sm:mt-36">
      <section className="grid place-items-center grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(24rem,_1fr))] gap-6">
        {blogs.map((blog) => (
          <Suspense key={blog._id}>
            <BlogCard blog={blog} />
          </Suspense>
        ))}
      </section>

      <BlogPannel />
    </main>
  );
};

export default Blogs;
