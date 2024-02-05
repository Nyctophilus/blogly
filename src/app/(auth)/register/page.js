import GitForm from "@/components/form/gitForm";
import RegisterForm from "@/components/form/registerForm";

export const metadata = {
  title: "Register",
  description:
    "this register page. you can create an account using the form by different providers.",
};

const Register = () => (
  <main className="min-h-[calc(100dvh-80px)] mt-36">
    <RegisterForm />
    <GitForm />
  </main>
);

export default Register;
