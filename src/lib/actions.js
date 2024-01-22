"use server";

import { revalidatePath } from "next/cache";
import { Blog } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";

export const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
    method: "GET",
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("something went wrong!");
  const data = await res.json();

  return data;
};

export const getSingleBlog = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${slug}`,
    {
      method: "GET",
      next: { revalidate: 1 },
    }
  );

  if (!res.ok) throw new Error("fetch request is failed");

  const data = await res.json();
  return data;
};

export const createBlog = async (formData) => {
  const blog = Object.fromEntries(formData);
  console.log(blog);

  try {
    connectToDB();

    const newBlog = await new Blog({
      ...blog,
      slug: blog.title.replaceAll(" ", "-"),
    });
    await newBlog.save();
    revalidatePath("/blogs");
  } catch (err) {
    console.log(err);
    return { error: "failed to create a blog" };
  }
};

export const deleteBlog = async ({ title }) => {
  const slug = title.replaceAll(" ", "-");
  try {
    connectToDB();

    const res = await Blog.deleteOne({ slug });
    console.log(res);

    if (res.deletedCount) {
      revalidatePath("/blogs");
      return { success: "the blog deleted successfully." };
    }

    return {
      error: "There is no blog with that title. Please, check the title again.",
    };
  } catch (error) {
    console.log(error);
    return { error: "failed to delete the blog." };
  }
};

export const updateBlog = async (title, updates) => {
  const catcher = title.replaceAll(" ", "-");

  try {
    connectToDB();

    const res = await Blog.updateOne(
      { slug: catcher },
      { ...updates, slug: catcher }
    );

    if (res.modifiedCount) {
      revalidatePath(`/blogs/${catcher}`, "page");
      revalidatePath("/blogs");
      return { success: "the blog has been updated successfully." };
    }

    return {
      error: "the blog is not found... Please, try to check the title again.",
    };
  } catch (error) {
    console.log(error);
    return { error: "failed to update the blog." };
  }
};


export const handleGitLogin = async () => {
  await signIn("github");
};

export const signOutGit = async () => {
  await signOut();
};