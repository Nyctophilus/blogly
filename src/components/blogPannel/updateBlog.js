"use client";

import { useEffect, useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@/lib/export-mat-tailwind";
import { updateBlog } from "@/lib/actions";
import Tostify from "../tostify/tostify";

const defalutForm = {
  catcher: "",
  title: "",
  body: "",
  img: { url: "", valid: false },
};

const UpdateBlog = ({ author, isAdmin }) => {
  const [form, setForm] = useState(defalutForm);
  const [valid, setValid] = useState(false);
  const [msg, setMsg] = useState("");

  const handleFormChange = (e) => {
    if (e.target.name === "img") {
      const testImgUrl =
        /(https:\/\/)?(i.imgur|avatars.githubusercontent|images.pexels).com\/(.*)/.test(
          e.target.value
        );

      setForm((prev) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.catcher) {
      let updates = {};
      if (form.title || form.body || form.img.url) {
        if (form.title)
          updates = { ...updates, title: form.title.trim().toLowerCase() };

        if (form.body) updates = { ...updates, body: form.body };

        if (form.img.url) updates = { ...updates, img: form.img.url };
      }

      // check update and delete and make the admin page
      const res = await updateBlog(
        form.catcher.toLowerCase(),
        updates,
        author,
        isAdmin
      );
      setForm(defalutForm);
      setMsg(res);
    }
  };

  useEffect(() => {
    setValid(
      form.catcher &&
        (form.title || form.body || (form.img.url && form.img.valid))
        ? true
        : false
    );
  }, [form.catcher, form.title, form.img, form.body]);

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
        update a blog
      </Typography>

      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-50 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 [&:first-letter]:capitalize"
          >
            blog title that you want to edit
          </Typography>
          <Input
            size="lg"
            label="old title"
            value={form.catcher}
            onChange={handleFormChange}
            name="catcher"
            className="bg-light-green-200"
          />

          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 capitalize"
          >
            new title
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
            new body
          </Typography>
          <Textarea
            size="lg"
            label="blog body"
            value={form.body}
            onChange={handleFormChange}
            name="body"
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 [&::first-letter]:capitalize"
          >
            new blog cover (imgur.com) or (pexels.com)
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

        <Button color="red" fullWidth type="submit" disabled={!valid}>
          update blog
        </Button>
        {msg && <Tostify message={msg} />}
      </form>
    </Card>
  );
};
export default UpdateBlog;
