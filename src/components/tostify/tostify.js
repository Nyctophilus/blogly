"use client";

import { Typography } from "@/lib/export-mat-tailwind";
import { useEffect, useState } from "react";

const Tostify = ({ message, timeout = 10000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const id = setTimeout(() => {
      setShow(false);
    }, timeout);

    return () => clearTimeout(id);
  }, [message]);

  if (show)
    return (
      <Typography
        variant="h6"
        color={message.success ? "green" : "red"}
        className={`[&::first-letter]:capitalize mt-2 text-center ${
          message.error ? "bg-red-100" : "bg-green-100"
        } rounded-xl`}
      >
        {message.success || message.error}
      </Typography>
    );
};
export default Tostify;
