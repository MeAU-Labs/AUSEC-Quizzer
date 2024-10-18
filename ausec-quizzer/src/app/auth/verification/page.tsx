import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export default async function VerifyRequestPage() {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <h1>Please check your team email (Might be in Spam)</h1>
      <p>A link to start the quiz has been sent to your email address.</p>
    </div>
  );
}
