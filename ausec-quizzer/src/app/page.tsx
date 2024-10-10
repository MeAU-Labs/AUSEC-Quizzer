import { getServerAuthSession } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <HydrateClient>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          AUSEC Quiz- tagline
        </h3>
      </div>
    </HydrateClient>
  );
}
