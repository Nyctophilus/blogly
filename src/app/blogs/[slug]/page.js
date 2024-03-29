import { getData, getSingleBlog } from "@/lib/actions";
import Image from "next/image";
const noAvatarImg = "https://i.imgur.com/CEofREj.jpg";
import { Typography } from "@/lib/export-mat-tailwind";
import UserCard from "@/components/userCard/userCard";
import { Suspense } from "react";

export const generateMetadata = async ({ params: { slug } }) => {
  const { title, body } = await getSingleBlog(slug);

  return {
    title: `Blog | ${title}`,
    description: body?.substring(0, 150),
  };
};

// generate dynamic pages in build time and so-like pre-render em
export async function generateStaticParams() {
  const blogs = await getData();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

const Blog = async ({ params: { slug } }) => {
  const { title, body, img, createdAt, author } = await getSingleBlog(slug);

  return (
    <main className="container min-h-[calc(100svh-80px)] min-w-[70dvw] grid place-items-center my-24 sm:my-36">
      <Suspense>
        <figure className="w-full min-w-[80dvw] h-full flex flex-col lg:flex-row gap-6">
          <span className="block relative mt-12 h-[300px] lg:h-1/2 w-full lg:w-1/3">
            <Image
              fill
              priority={true}
              src={img || noAvatarImg}
              alt={title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-xl shadow-xl shadow-blue-gray-900/50"
            />
          </span>

          <figcaption className="flex flex-col gap-8 lg:w-2/3">
            <Typography
              variant="h1"
              color="blue-gray"
              className="[&::first-letter]:capitalize"
            >
              {title}
            </Typography>

            <UserCard full author={author} />

            <Typography
              variant="h4"
              color="gray"
              className="[&::first-letter]:capitalize ps-2"
            >
              {body}
            </Typography>

            {createdAt && (
              <Typography
                variant="small"
                color="gray"
                className="capitalize self-end"
              >
                {new Date(createdAt)
                  .toString()
                  .split(" ")
                  .slice(1, 4)
                  .join(" ")}
              </Typography>
            )}
          </figcaption>
        </figure>
      </Suspense>
    </main>
  );
};
export default Blog;
