export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.name|| token.username;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;

      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blogs");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnAdminPage = request.nextUrl?.pathname.startsWith("/admin");

      // only admin can reach admin page
      if (isOnAdminPage && !user?.isAdmin) return false;

      // only Authenticated users can reach blog page
      if (isOnBlogPage && !user) return false;

      // only Unauthenticated users can reach login page
      if (isOnLoginPage && user)
        return Response.redirect(new URL("/", request.nextUrl));

      return true;
    },
  },
};
