import { redirect } from "next/navigation";
import LandingPage from "~/components/landing/landing-page";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  if (session) {
    redirect("/quiz");
  }

  return <LandingPage />;
}
