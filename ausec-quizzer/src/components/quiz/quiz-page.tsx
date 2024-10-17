"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signOut } from "next-auth/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { api } from "~/trpc/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import SignOut from "./signout";
import SubmitDialog from "./submit-dialog";

const formSchema = z.object({
  answers: z.array(
    z.object({
      id: z.number(),
      answerIndex: z.number(),
    }),
  ),
});

export default function QuizPage() {
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [user] = api.user.get.useSuspenseQuery({});
  const [questions] = api.quiz.getQuizQuestions.useSuspenseQuery(
    {},
    { refetchOnMount: false },
  );

  const submitQuizMutation = api.quiz.submitQuiz.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answers: questions.map((question) => ({
        id: question.id,
        answerIndex: undefined,
      })),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data);

    await submitQuizMutation.mutateAsync(data.answers);
    // Submit the form data here, e.g., using a mutation to send answers to the server
    setIsSubmitDialogOpen(false);

    await signOut({ callbackUrl: "/thanks", redirect: true });
  };

  return (
    <div className="flex h-full w-full flex-1 flex-col">
      <div className="w-full bg-secondary py-4">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-6">
          <p>{user.email}</p>
          <SignOut />
        </div>
      </div>
      <div className="mx-auto w-full max-w-4xl flex-grow py-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            ref={formRef}
          >
            {questions.map((question) => (
              <FormField
                key={`question-${question.id}`}
                control={form.control}
                name={`answers.${questions.findIndex((q) => q.id === question.id)}.answerIndex`}
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-md">
                      {question.question}
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={String(field.value)}
                        onValueChange={(value) => field.onChange(Number(value))}
                        className="flex flex-col space-y-1"
                      >
                        {question.options.map((option, index) => (
                          <FormItem
                            key={`$question-${question.id}-${index}`}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem value={String(index)} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {option}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <SubmitDialog
              isOpen={isSubmitDialogOpen}
              setIsOpen={setIsSubmitDialogOpen}
              onSubmit={() => {
                if (formRef.current) {
                  formRef.current.dispatchEvent(
                    new Event("submit", { bubbles: true }),
                  );
                }
              }}
              isSubmitting={form.formState.isSubmitting}
              disabled={!form.formState.isValid || form.formState.isSubmitting}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}
