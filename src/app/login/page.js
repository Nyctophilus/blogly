import { handleGitLogin } from "@/lib/actions";
import { Button } from "@/lib/export-mat-tailwind";

export const metadata = {
  title: "Login",
  description:
    "this log in and out page. you can login using the form by different providers.",
};

const Login = () => {
  return (
    <form
      action={handleGitLogin}
      className="grid place-items-center h-[calc(100svh-360px)]"
    >
      <Button type="submit">Login with GitHub</Button>
    </form>
  );
};
export default Login;
