"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { api } from "~/trpc/react";
import SignOut from "./signout";

const formSchema = z.object({
  questions: z.array(
    z.object({
      id: z.number(),
      answer: z.string(),
    }),
  ),
});

export default function QuizPage() {
  const [user] = api.user.get.useSuspenseQuery({});
  const [questions] = api.quiz.getQuizQuestions.useSuspenseQuery(
    {},
    { refetchOnMount: false },
  );

  console.log("questions", questions);

  const { handleSubmit, control } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data);
    // Submit the form data here, e.g., using a mutation to send answers to the server
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="space-y-3">
              <Label className="font-bold">{question.question}</Label>
              <Controller
                name={`questions.${question.id}.answer`}
                control={control}
                defaultValue=""
                rules={{ required: "Please select an option" }}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="space-y-2"
                  >
                    {question.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={option}
                          id={`${question.id}-${index}`}
                        />
                        <Label htmlFor={`${question.id}-${index}`}>
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              />
            </div>
          ))}
          <Button type="submit" className="w-full">
            Submit Quiz
          </Button>
        </form>
      </div>
    </div>
  );
}
