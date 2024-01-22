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
  img: { url: "", valid: false },
  valid: false,
};

const WriteBlog = () => {
  const [form, setForm] = useState(defalutForm);

  const handleFormChange = (e) => {
    if (e.target.name === "img") {
      setForm((prev) => {
        const testImgUrl =
          /(https:\/\/)?(i.imgur|avatars.githubusercontent|images.pexels).com\/(.*)/.test(
            e.target.value
          );

        return {
          ...prev,
          img: { url: e.target.value, valid: testImgUrl },
        };
      });

      return;
    }

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
        className="mt-8 mb-2 w-50 sm:w-96 max-w-screen-lg"
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
            maxLength={30}
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
            className="-mb-3 [&::first-letter]:capitalize"
          >
            blog cover (imgur.com) or (pexels.com)
          </Typography>
          <Input
            size="lg"
            label="image cover url"
            value={form.img.url}
            onChange={handleFormChange}
            name="img"
            error={form.img.url && !form.img.valid ? true : false}
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
