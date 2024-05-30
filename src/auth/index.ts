import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";

const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email...",
        },
      },
      async authorize(credentials) {
        try {
          const email = credentials?.email as string;
          const user = await prisma.user.findUnique({ where: { email } });

          if (!user) {
            return null;
          }

          return user;
        } catch (err) {
          throw new Error(
            "There is some issue in the server, Please try again later..."
          );
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks: {
    async signIn({ user, account, ...rest }) {
      if (!account) {
        return false;
      }

      const email = user.email;
      if (!email) {
        return false;
      }

      // Check if a user with the same email exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        // Check if an account with the same provider and providerAccountId exists
        const existingAccount = await prisma.account.findUnique({
          where: {
            provider_providerAccountId: {
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            },
          },
        });

        if (!existingAccount) {
          // If no existing account, create a new one
          await prisma.account.create({
            data: {
              userId: existingUser.id,
              type: account.type,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              refresh_token: account.refresh_token,
              access_token: account.access_token,
              expires_at: account.expires_at,
              token_type: account.token_type,
              scope: account.scope,
              id_token: account.id_token,
              session_state: account.session_state,
            },
          });
        }
      }

      return true;
    },

    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      return token;
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
  session: { strategy: "jwt" },
};

export const handler = NextAuth(authConfig);
