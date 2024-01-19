import { getBlog } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (_, { params: { slug } }) => {
  const blog = await getBlog(slug);
  return NextResponse.json(blog);
};
