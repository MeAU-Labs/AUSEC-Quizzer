import SignInPage from "~/components/signin/signin-page";
import { getServerAuthSession } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";

export default async function SignIn() {
  const session = await getServerAuthSession();

  if (session) {
    return { redirect: { destination: "/" } };
  }

  return (
    <HydrateClient>
      <SignInPage />
    </HydrateClient>
  );
}
