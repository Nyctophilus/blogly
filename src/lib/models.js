import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    password: { type: String, required: true, unique: true, min: 4, max: 25 },
    email: { type: String },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    img: { type: String },
    author: { type: mongoose.Types.ObjectId, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);
