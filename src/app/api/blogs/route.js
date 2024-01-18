import { getBlogs, getUsers } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async () => {
  const blogs = await getBlogs();
  const users = await getUsers();

  const data = { blogs, users };
  return NextResponse.json(data);
};
