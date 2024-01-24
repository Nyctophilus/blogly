"use server";

import { revalidatePath } from "next/cache";
import { Blog, User } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

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

export const createBlog = async (blog) => {
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

export const deleteBlog = async ({ title, author }) => {
  const slug = title.replaceAll(" ", "-");
  try {
    connectToDB();

    const blog = await Blog.findOne({ slug });
    console.log(blog.author.toString());

    const isAuthor = blog.author.toString() === author;
    if (!isAuthor) return { error: "You aren't the author of this blog." };

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

export const updateBlog = async (title, updates, author) => {
  const catcher = title.replaceAll(" ", "-");

  try {
    connectToDB();

    const blog = await Blog.findOne({ title });
    if (blog) {
      const isAuthor = blog.author.toString() === author;
      if (!isAuthor) return { error: "You aren't the author of this blog." };

      const res = await Blog.updateOne(
        { slug: catcher },
        { ...updates, slug: catcher }
      );

      if (res.modifiedCount) {
        revalidatePath(`/blogs/${catcher}`, "page");
        revalidatePath("/blogs");
        return { success: "the blog has been updated successfully." };
      }
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

export const loginWithCredentials = async (prevState, formData) => {
  const { username, password, email } = Object.fromEntries(formData);

  try {
    connectToDB();

    const user = await User.findOne({ username });
    if (!user) return { error: "Invalid username" };

    if (email !== user.email) return { error: "Invalid email" };

    const isPwCorrect = await bcrypt.compare(password, user.password);
    if (!isPwCorrect) return { error: "Invalid Password" };

    await signIn("credentials", { username, password, email });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin"))
      return { error: "Invalid Credentials" };

    throw error;
  }
};

export const registerWithCredentials = async (prevState, formData) => {
  const { username, password, repassword, email } =
    Object.fromEntries(formData);
  console.log({ username, password, repassword, email });

  if (password !== repassword) return { error: "passwords doesn't match." };

  try {
    connectToDB();

    const user = await User.findOne({ username });
    if (user) return { error: "username already been used." };

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashPassword, email });

    await newUser.save();
    console.log("user saved to db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Failed to login with credentials" };
  }
};