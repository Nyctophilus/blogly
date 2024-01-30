import DeleteBlog from "@/components/blogPannel/deleteBlog";
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
  const {
    user: { id, isAdmin },
  } = await getSession();

  !isAdmin && redirect("/");

  if (isAdmin)
    return (
      <main className="container my-20 min-h-[calc(100svh-360px)] grid place-items-center grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="flex flex-col gap-4 w-full">
          <BlogsList />
        </section>
        <section className="w-full">
          <WriteBlog author={id} />
        </section>
        <section className="flex flex-col gap-4 w-full">
          <UsersList />
        </section>
        <section className="w-full">
          <DeleteBlog author={id} />
        </section>
      </main>
    );
};
export default Admin;
