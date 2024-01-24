"use client";

import { loginWithCredentials } from "@/lib/actions";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

const defaultForm = { username: "", email: "", password: "", vaild: false };

const CredentailsForm = () => {
  const [state, formAction] = useFormState(loginWithCredentials, undefined);
  const [form, setForm] = useState(defaultForm);
  const [mailVaild, setMailVaild] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const formContainer = useRef(null);

  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);

  const handleChangeForm = (e) => {
    if (e.target.name === "email") {
      let regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      setMailVaild(regExp.test(e.target.value));
    }

    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (form.email && form.username && form.password && checkbox)
      setForm({ ...form, vaild: true });
    else setForm({ ...form, vaild: false });
  }, [form.email, form.username, form.password, checkbox]);

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Welcome Back. Please, Sign In.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        action={async (formData) => {
          await formAction(formData);

          formContainer.current?.reset();
          setForm(defaultForm);
          setCheckbox(false);
        }}
        ref={formContainer}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            label="Muhammed Fayad"
            type="text"
            name="username"
            value={form.username}
            onChange={handleChangeForm}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            label="name@mail.com"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChangeForm}
            error={!mailVaild}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            label="********"
            name="password"
            value={form.password}
            onChange={handleChangeForm}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          onClick={() => setCheckbox((prev) => !prev)}
        />
        <Button className="mt-6" fullWidth type="submit" disabled={!form.vaild}>
          sign In
        </Button>

        {state?.error && (
          <p className="text-red-500 animate-pulse text-center">
            {state.error}
          </p>
        )}

        <Typography color="gray" className="mt-4 text-center font-normal">
          Don&apos;t have an account?{" "}
          <Link href={"/register"} className="font-bold text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default CredentailsForm;
