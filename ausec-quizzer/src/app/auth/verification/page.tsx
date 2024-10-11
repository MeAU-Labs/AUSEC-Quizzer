import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export default async function VerifyRequestPage() {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1>Please check your team email</h1>
      <p>A sign in link has been sent to your email address.</p>
    </div>
  );
}
