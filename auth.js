import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import db from "./lib/db";

export const authOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        try {
          if (!credentials.email || !credentials.password) {
            return null;
          }
          const user = await db.User.findUnique({
            where: { email: credentials?.email },
          });
          if (!user) {
            throw new Error("invalid credentials");
          }
          const passwordMatch = await bcrypt.compare(
            credentials?.password ?? "",
            user.password
          );
          if (!passwordMatch) {
            throw new Error("Invalid credentials");
          }
          return user;
        } catch (error) {
          console.log(error);

          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.phone = user.phone;
        token.image = user.image;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          userId: token.id,
          email: token.email,
          name: token.name,
          phone: token.phone,
          image: token.image,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
    // signOut: '/auth/signout',
    // error: "/api/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
