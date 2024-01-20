"use client";

import { createBlog } from "@/lib/actions";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@/lib/export-mat-tailwind";
import { useState, useEffect } from "react";

const defalutForm = {
  title: "",
  body: "",
  author: "",
  img: "",
  valid: false,
};

const WriteBlog = () => {
  const [form, setForm] = useState(defalutForm);

  const handleFormChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    setForm((prev) => {
      return {
        ...prev,
        valid: prev.title && prev.body && prev.author,
      };
    });
  }, [form.title, form.author, form.body]);

  return (
    <Card color="transparent" className="p-4 w-fit shadow-lg mx-auto mb-12">
      <Typography
        variant="h4"
        color="blue-gray"
        className="[&::first-letter]:capitalize"
      >
        write a blog
      </Typography>
      <Typography
        color="gray"
        className="mt-1 font-normal [&::first-letter]:capitalize"
      >
        what is in your mind right now.
      </Typography>
      <form
        action={createBlog}
        onSubmit={() => setForm(defalutForm)}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
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
            value={form.title}
            onChange={handleFormChange}
            name="title"
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 capitalize"
          >
            body
          </Typography>
          <Textarea
            size="lg"
            label="body of your blog"
            value={form.body}
            onChange={handleFormChange}
            name="body"
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 capitalize"
          >
            author
          </Typography>
          <Input
            size="lg"
            label="author id"
            value={form.author}
            onChange={handleFormChange}
            name="author"
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 capitalize"
          >
            blog cover
          </Typography>
          <Input
            size="lg"
            label="image cover url (imgur.com) or (pexels.com)"
            value={form.img}
            onChange={handleFormChange}
            name="img"
          />
        </div>

        <Button className="mt-6" fullWidth type="submit" disabled={!form.valid}>
          create blog
        </Button>
      </form>
    </Card>
  );
};
export default WriteBlog;
