import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@/lib/export-mat-tailwind";

import Image from "next/image";
import Link from "next/link";
import UserCard from "../userCard/userCard";
import Loading from "@/app/blogs/[slug]/loading";
import { Suspense } from "react";
const noAvatarImg = "https://i.imgur.com/CEofREj.jpg";

const BlogCard = ({ title, body, img, author, slug, createdAt }) => (
  <Card className="w-full max-w-[500px] overflow-hidden h-[700px]">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 rounded-none w-full h-[60%]"
    >
      <Image
        src={img || noAvatarImg}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </CardHeader>
    <CardBody className="h-[30%]">
      <Typography
        variant="h4"
        color="blue-gray"
        className="[&::first-letter]:capitalize"
      >
        {title}
      </Typography>
      <Typography
        variant="lead"
        color="gray"
        className="mt-3 font-normal line-clamp-3"
        style={{ display: "-webkit-box" }}
      >
        {body}
      </Typography>
    </CardBody>
    <CardFooter className="flex items-center justify-between flex-wrap">
      <Suspense fallback={<Loading />}>
        <UserCard />
      </Suspense>
      {createdAt && (
        <Typography className="font-normal capitalize">
          {Date(createdAt).split(" ").slice(1, 4).join(" ")}
        </Typography>
      )}
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
