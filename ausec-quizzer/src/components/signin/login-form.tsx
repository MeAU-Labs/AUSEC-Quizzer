"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react"; // Import the signIn function from NextAuth
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const formSchema = z.object({
  teamId: z.string().min(1, {
    message: "team ID is required.",
  }),
});

export default function LoginForm() {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamId: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Call the signIn method with the teamId
    const result = await signIn("credentials", {
      redirect: true,
      teamId: values.teamId,
      callbackUrl: String(callbackUrl),
    });

    if (result?.error) {
      console.error("Error signing in:", result.error);
    } else {
      console.log("Signed in successfully!");
      // You can add logic here to redirect or show a success message
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="teamId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team ID</FormLabel>
              <FormControl>
                <Input placeholder="98765432" {...field} />
              </FormControl>
              <FormDescription>
                This is your team ID generated upon registration.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Start Quiz
        </Button>
      </form>
    </Form>
  );
}
