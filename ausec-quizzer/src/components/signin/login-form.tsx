"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react"; // Import the signIn function from NextAuth
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoadingSpinner } from "../loading-spinner";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const signinSchema = z.object({
  email: z
    .string({ required_error: "Please enter your email address." })
    .email({ message: "Please enter a valid email address." }),
  csrfToken: z.string(),
  callbackUrl: z.optional(z.string()),
});

export default function LoginForm({
  csrfToken,
}: {
  csrfToken: string | undefined;
}) {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  // 1. Define your form.
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: { email: "", csrfToken, callbackUrl: String(callbackUrl) },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signinSchema>) {
    await signIn("email", {
      redirect: true,
      email: values.email,
      callbackUrl: String(callbackUrl),
    });
  }

  return (
    <Form {...form}>
      <form
        method="POST"
        action="/api/auth/signin/email"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="csrfToken"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="callbackUrl"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full flex-col gap-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Email</FormLabel>
                <FormControl>
                  <Input placeholder="team@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is the email linked to your team.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="flex w-full items-center gap-2"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <LoadingSpinner className="h-4 w-4" /> <p>Sending start link</p>
              </>
            ) : (
              <p>Send start link</p>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
