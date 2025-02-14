import { type ErrorType } from "next-auth/core/pages/error";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";
import { APP_NAME } from "~/utils/constants";

interface ErrorView {
  status: number;
  heading: string;
  message: JSX.Element;
  signin?: JSX.Element;
}

export default async function AuthErrorPage({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const session = await getServerAuthSession();

  if (session) {
    redirect("/");
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const error = searchParams?.error as ErrorType; // Explicitly cast the type

  const errors: Record<ErrorType, ErrorView> = {
    default: {
      status: 200,
      heading: "Unknown Error",
      message: (
        <div className="flex flex-col gap-4">
          <p>An unexpected error occurred.</p>
          <Link href="/">
            <Button variant="outline">Go back to {APP_NAME}</Button>
          </Link>
        </div>
      ),
    },
    configuration: {
      status: 500,
      heading: "Server error",
      message: (
        <div className="flex flex-col gap-2">
          <p>There is a problem with the server configuration.</p>
          <p>Check the server logs for more information.</p>
        </div>
      ),
    },
    accessdenied: {
      status: 403,
      heading: "Access Denied",
      message: (
        <div className="flex flex-col gap-4">
          <p>
            You do not have permission to sign in. Your team email might be
            invalid, or you might have already completed the quiz.
          </p>
          <Link href="/auth/signin">
            <Button variant="outline">Sign in</Button>
          </Link>
        </div>
      ),
    },
    verification: {
      status: 403,
      heading: "Unable to sign in",
      message: (
        <div>
          <p>The sign in link is no longer valid.</p>
          <p>It may have been used already or it may have expired.</p>
        </div>
      ),
      signin: (
        <Link href="/auth/signin">
          <Button variant="outline">Sign in</Button>
        </Link>
      ),
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  const errorKey = (error || "default").toLowerCase() as ErrorType;

  // TODO: set appropriate status also?
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const { heading, message, signin } = errors[errorKey] ?? errors.default;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-lg font-semibold">{heading}</h1>
      <div className="text-sm">{message}</div>
      {signin}
    </div>
  );
}
