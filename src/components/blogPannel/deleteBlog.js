"use client";

import { deleteBlog } from "@/lib/actions";
import { Card, Button, Typography, Input } from "@/lib/export-mat-tailwind";
import { useState } from "react";

const DeleteBlog = ({ author }) => {
  const [title, setTitle] = useState({
    value: "",
    msg: "",
  });

  const handleTitleChange = (e) => {
    setTitle({ value: e.target.value, msg: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.value) {
      const res = await deleteBlog({ title: title.value, author });
      setTitle({ value: "", msg: res });
    }
  };
  return (
    <Card
      color="transparent"
      className="p-4 w-fit h-fit shadow-lg mx-auto mb-12"
    >
      <Typography
        variant="h4"
        color="blue-gray"
        className="[&::first-letter]:capitalize text-center"
      >
        delete a blog
      </Typography>

      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-50 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 capitalize"
          >
            title
          </Typography>
          <Input
            size="lg"
            label="blog title"
            value={title.value}
            onChange={handleTitleChange}
            name="title"
          />
        </div>

        <Button color="red" fullWidth type="submit" disabled={!title.value}>
          delete blog
        </Button>
        {title.msg && (
          <Typography
            variant="h6"
            color={title.msg.success ? "green" : "red"}
            className="animate-pulse [&::first-letter]:capitalize"
          >
            {title.msg.success || title.msg.error}
          </Typography>
        )}
      </form>
    </Card>
  );
};
export default DeleteBlog;
