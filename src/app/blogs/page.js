import BlogCard from "@/components/blogCard/blogCard";
import { getData } from "@/lib/actions";
import { Suspense } from "react";
import Loading from "./loading";

const Blogs = async () => {
  const blogs = await getData();

  return (
    <main className="container min-h-[calc(100svh-80px)] grid place-items-center grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-6 py-12">
      {blogs.map((blog) => (
        <Suspense key={blog._id} fallback={<Loading />}>
          <BlogCard {...blog} />
        </Suspense>
      ))}
    </main>
  );
};

export default Blogs;
