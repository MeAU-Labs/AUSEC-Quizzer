import { getCsrfToken } from "next-auth/react";
import { redirect } from "next/navigation";
import SignInPage from "~/components/signin/signin-page";
import { getServerAuthSession } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";

export default async function SignIn() {
  const session = await getServerAuthSession();

  const csrfToken = await getCsrfToken();

  if (session) {
    redirect("/");
  }

  return (
    <HydrateClient>
      <SignInPage csrfToken={csrfToken} />
    </HydrateClient>
  );
}
