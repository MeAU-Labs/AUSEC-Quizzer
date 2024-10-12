import { PrismaAdapter } from "@auth/prisma-adapter";
import MagicLinkEmail from "emails/signin-magic-link";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import EmailProvider from "next-auth/providers/email";
import { env } from "~/env";
import { db } from "~/server/db";
import { resendClient } from "./email";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      emailVerified?: Date;
      schoolEmail: string;
      score: number;
      hasCompletedQuiz: boolean;
      // ...other properties
    } & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),

    async signIn({ user }) {
      if (user.email) {
        const userExists = await db.user.findUnique({
          where: { email: user.email },
        });
        // don't allow sign in if user exists but has completed the quiz
        if (userExists) return !userExists.hasCompletedQuiz;
      }
      return false;
    },
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verification",
    error: "/auth/error",
    // Add any custom sign-in, verification, sign-out, or error pages
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    EmailProvider({
      server: {
        host: env.EMAIL_SERVER_HOST,
        port: env.EMAIL_SERVER_PORT,
        auth: {
          user: env.EMAIL_SERVER_USER,
          pass: env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: env.EMAIL_FROM,
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { from },
      }) {
        await resendClient.emails.send({
          from: from,
          to: email,
          subject: "Your Sign In Link",
          react: MagicLinkEmail({
            verificationUrl: url,
          }),
        });
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
