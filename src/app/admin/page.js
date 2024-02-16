import UpdateBlog from "@/components/blogPannel/updateBlog";
import WriteBlog from "@/components/blogPannel/writeBlog";
import BlogsList from "@/components/blogsList/blogsList";
import UsersList from "@/components/usersList/usersList";
import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Admin page",
  description:
    "this page is an admin page where the admin have full control of the website. Admin can add blog, add user, delete any blogs on the website, and also can delete a signed in user with all the associated blogs.",
};

const Admin = async () => {
  const session = await getSession();

  if (!session?.user?.isAdmin) redirect("/");

  if (session?.user)
    return (
      <main className="container my-24 sm:mt-36 min-h-[calc(100svh-360px)]">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Admin DashBoard
        </h1>
        <div className="grid justify-center grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="w-full">
            <WriteBlog author={session.user.id} />
          </section>
          <section className="w-full">
            <UpdateBlog author={session.user.id} isAdmin />
          </section>

          <section className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl lg:text-3xl font-bold">Blogs List</h2>
            <BlogsList />
          </section>
          <section className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl lg:text-3xl font-bold">Users List</h2>
            <UsersList />
          </section>
        </div>
      </main>
    );
};
export default Admin;
