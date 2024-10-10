// /app/api/auth/verify/route.ts
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "~/server/auth"; // Adjust the path to your authOptions file
import { db } from "~/server/db"; // Adjust the path according to your project structure

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const teamId = searchParams.get("teamId");
  const code = searchParams.get("code");

  // Check if both teamId and code are provided
  if (!teamId || !code) {
    return NextResponse.redirect(`/auth/signin?error=missing_parameters`);
  }

  // Look for the verification token in the database
  const token = await db.verificationToken.findFirst({
    where: {
      identifier: teamId,
      token: code,
      expires: {
        gte: new Date(),
      },
    },
  });

  // If token is valid, log the user in
  if (token) {
    // Use the session management to log the user in
    const session = await getServerSession(authOptions);

    // Implement your login logic here
    // For example: await loginUser(token.identifier);

    // Redirect the user to a secure page after successful login
    return NextResponse.redirect("/"); // Adjust to your secure page
  } else {
    // If the token is invalid or expired, redirect to the sign-in page with an error
    return NextResponse.redirect(`/auth/signin?error=invalid_code`);
  }
}
