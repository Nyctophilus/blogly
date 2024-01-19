"use server";

export const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
    method: "GET",
    next: { revalidate: 1 },
  });
  if (!res.ok) throw new Error("something went wrong!");
  const data = await res.json();

  return data;
};

export const getSingleBlog = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${slug}`,
    {
      method: "GET",
      next: { revalidate: 1 },
    }
  );

  if (!res.ok) throw new Error("fetch request is failed");

  const data = await res.json();
  return data;
};