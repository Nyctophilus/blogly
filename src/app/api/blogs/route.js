import { getBlogs } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async () => {
  const blogs = await getBlogs();
  return NextResponse.json(blogs);
};
