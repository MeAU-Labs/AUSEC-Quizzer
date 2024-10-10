import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials"; // Import Credentials Provider
import { createTransport } from "nodemailer"; // Assuming you use nodemailer for sending emails
import { env } from "~/env";
import { db } from "~/server/db";

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
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verification",
    error: "/auth/error",
    // Add any custom sign-in, verification, sign-out, or error pages
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Team ID Login",
      credentials: {
        teamId: { label: "Team ID", type: "text", placeholder: "98765432" },
      },
      async authorize(credentials) {
        const { teamId } = credentials || {};

        if (!teamId) {
          throw new Error("Team ID is required");
        }

        // 1. Look up the user by team ID
        const user = await db.user.findFirst({
          where: { id: teamId },
        });

        if (!user) {
          return null;
        }

        // 2. Generate a verification code (e.g., a 6-digit code)
        const verificationCode = Math.floor(
          100000 + Math.random() * 900000,
        ).toString();

        // 3. Store the verification code and its expiration time in the database
        await db.verificationToken.create({
          data: {
            identifier: user.id,
            token: verificationCode,
            expires: new Date(Date.now() + 15 * 60 * 1000), // Expires in 15 minutes
          },
        });

        // 4. Send the verification code via email
        const transporter = createTransport({
          service: "gmail", // or any email provider
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_FROM,
          to: user.teamEmail,
          subject: "Your Verification Code",
          text: `Your verification URL is: ${process.env.NEXTAUTH_URL}/api/auth/verify?teamId=${teamId}&code=${verificationCode}`,
        };

        await transporter.sendMail(mailOptions);

        // 5. Return verification page
        return "/auth/verification";
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
