import LoginForm from "~/components/home/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          AUSEC Quiz- tagline
        </h3>
        <Card>
          <CardHeader>
            <CardDescription>
              Enter your team ID to start the quiz!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </HydrateClient>
  );
}
