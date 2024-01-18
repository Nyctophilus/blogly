"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import Image from "next/image";
import Link from "next/link";
const noAvatarImg = "https://i.imgur.com/CEofREj.jpg";

const BlogCard = ({
  title,
  body,
  img,
  author,
  slug,
  createdAt,
  user: [user],
}) => (
  <Card className="max-w-[280px] lg:max-w-[24rem] overflow-hidden">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 rounded-none w-[100%] h-[260px]"
    >
      <Image
        src={img || noAvatarImg}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </CardHeader>
    <CardBody>
      <Typography variant="h4" color="blue-gray">
        {title}
      </Typography>
      <Typography variant="lead" color="gray" className="mt-3 font-normal">
        {body}
      </Typography>
    </CardBody>
    <CardFooter className="flex items-center justify-between flex-wrap">
      <div className="flex items-center space-x-2">
        <Tooltip content={title}>
          <Avatar
            size="sm"
            variant="circular"
            alt={`${title} author`}
            src={user.img || noAvatarImg}
            className="border-2 border-white hover:z-10"
          />
        </Tooltip>
        <div className="flex flex-col -space-y-2">
          <Typography className="font-normal capitalize">author</Typography>
          <Typography className="font-semibold capitalize">
            {user.username}
          </Typography>
        </div>
      </div>
      <Typography className="font-normal capitalize">
        {createdAt || "22 nov"}
      </Typography>
      <Link href={`/blogs/${slug}`} className="mt-2 inline-block basis-full">
        <Button
          size="sm"
          variant="text"
          className="flex items-center gap-2 mx-auto"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export default BlogCard;
