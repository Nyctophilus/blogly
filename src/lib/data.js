import { Blog, User } from "./models";
import { connectToDB } from "./utils";

export const getBlogs = async () => {
  try {
    connectToDB();

    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    console.log(error);
    throw new Error("failed to get blogs from db");
  }
};

export const getBlog = async (slug) => {
  try {
    connectToDB();

    const blog = await Blog.findOne({ slug });
    return blog;
  } catch (error) {
    console.log(error);
    throw new Error("failed to get blogs from db");
  }
};

export const getUsers = async () => {
  try {
    connectToDB();

    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("failed to get users from db");
  }
};

export const getUser = async (data, isId) => {
  try {
    connectToDB();

    if (isId) {
      const user = await User.findById(data);
      return user;
    }

    const user = await User.findOne({ email: data });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to get user from db");
  }
};
