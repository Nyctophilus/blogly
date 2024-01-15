"use client";

import { Button, Input, Textarea } from "@material-tailwind/react";

const Form = () => {
  const success = false;

  const handleEmail = () => {};

  return (
    <form action={handleEmail} className="w-[70%] h-[70%] flex flex-col gap-2">
      <Input type="text" name="username" label="Full Name" />
      <Input type="email" name="email" label="Email address" />
      <Input type="text" name="subject" label="subject" />
      <Textarea type="text" name="message" label="Your message" />

      <Button
        disabled={!success}
        className="mt-4 w-[40%] hover:bg-[var(--bg-900)] hover:text-black hover:shadow-inner"
      >
        send message
      </Button>
    </form>
  );
};
export default Form;
