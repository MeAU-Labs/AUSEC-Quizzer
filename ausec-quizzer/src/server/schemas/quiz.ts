import { z } from "zod";

export const quizQuestionSchema = z.object({
  id: z.number(),
  question: z.string(),
  options: z.array(z.string()),
});

export const answerSchema = z.object({
  id: z.number(),
  answerIndex: z.number(),
});
