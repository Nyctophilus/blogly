import Loading from "@/app/loading";
import { getBlogs } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

// [x] loop over blogs' images and make inf scroller with that

const InfScoller = async () => {
  const blogs = await getBlogs();
  const blog = (
    <ul className="flex animate-infinite-scroll items-center justify-center gap-5 md:justify-start">
      {blogs
        .filter((blog) => blog.img)
        .map(({ _id, title, slug, img }) => {
          return (
            <Link
              key={_id}
              href={`/blogs/${slug}`}
              className="relative h-60 w-48"
            >
              <Image
                src={img}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover w-auto"
                alt={`${title} image`}
              />
              <p className="absolute bottom-0 translate-y-6 left-2 capitalize text-sm">
                {title}
              </p>
            </Link>
          );
        })}
    </ul>
  );

  return (
    <div className="py-6 flex gap-5 w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-120px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      {Array(4)
        .fill(blog)
        .map((el) => el)}
    </div>
  );
};
export default InfScoller;
