"use client";
import LoginForm from "~/components/signin/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";
import { APP_NAME } from "~/utils/constants";

import { getCsrfToken } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { use } from "react";

const errors = {
  Signin: "Try signing in with a different account.",
  OAuthSignin: "Try signing in with a different account.",
  OAuthCallback: "Try signing in with a different account.",
  OAuthCreateAccount: "Try signing in with a different account.",
  EmailCreateAccount: "Try signing in with a different account.",
  Callback: "Try signing in with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "The e-mail could not be sent.",
  CredentialsSignin: "Sign in failed. Check your team email.",
  SessionRequired: "Please sign in to access this page.",
  default: "Unable to sign in.",
};

export default function SignInPage() {
  const searchParams = useSearchParams();

  const csrfToken = use(getCsrfToken());

  const error = searchParams.get("error");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Start the {APP_NAME} quiz
      </h3>
      <Card>
        <CardHeader>
          <CardDescription>
            Enter your team email to start the quiz!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm csrfToken={csrfToken} />
        </CardContent>
      </Card>
      {error && (
        <p className="text-center text-sm font-semibold text-destructive">
          {errors[error] ?? errors.default}
        </p>
      )}
    </div>
  );
}
