import { getBlogs } from "@/lib/data";
import { Card, CardBody, Typography, Button } from "@/lib/export-mat-tailwind";
import Image from "next/image";
import UserTag from "./userTag";
import { deleteBlog } from "@/lib/actions";

const BlogsList = async () => {
  const blogs = await getBlogs();

  return (
    <>
      {blogs.map((blog) => {
        return (
          <Card
            shadow={false}
            className="relative grid h-[10rem] w-full items-end overflow-hidden text-center"
            key={blog._id}
          >
            {blog.img && (
              <Image
                fill
                src={blog.img}
                alt="blog image"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="blur-sm"
                quality={Card}
              />
            )}
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />

            <CardBody className="relative py-2 px-4">
              <Typography
                variant="h5"
                color="white"
                className="font-medium mb-2 [&::first-letter]:capitalize"
              >
                {blog.title}
              </Typography>
              <div className="flex justify-between items-center">
                <UserTag author={blog.author} />
                <form
                  action={async (_) => {
                    "use server";

                    await deleteBlog({ title: blog.title, isAdmin: true });
                  }}
                >
                  <Button size="md" color="red" type="submit">
                    delete
                  </Button>
                </form>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};
export default BlogsList;
