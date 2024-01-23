import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { User } from "./models";
import { connectToDB } from "./utils";
import { authConfig } from "./auth.config";
import bcrypt from "bcrypt";

const CredentialsLogin = async (credentials) => {
  try {
    connectToDB();

    const user = await User.findOne({ username: credentials.username });
    if (!user) return { error: "Invalid credentials!" };

    const isPwCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPwCorrect) return { error: "Invalid password!" };

    return user;
  } catch (error) {
    console.log(error);
    return { error: "login with credentials failed!" };
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialProvider({
      async authorize(credentials) {
        try {
          const user = await CredentialsLogin(credentials);
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        try {
          connectToDB();
          const user = await User.findOne({ username: profile.name });

          if (!user) {
            const newUser = await User({
              username: profile.name,
              email: profile.email,
              img: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },
    ...authConfig.callbacks,
  },
});
