import CredentailsForm from "@/components/form/credentialsForm";
import GitForm from "@/components/form/gitForm";

export const metadata = {
  title: "Login",
  description:
    "this log in and out page. you can login using the form by different providers.",
};

const Login = () => {
  return (
    <main className="min-h-[calc(100dvh-80px)] mt-36">
      <CredentailsForm />
      <GitForm />
    </main>
  );
};
export default Login;
