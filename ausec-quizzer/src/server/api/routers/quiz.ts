import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { answerSchema, quizQuestionSchema } from "~/server/schemas/quiz";

export const quizRouter = createTRPCRouter({
  getQuizQuestions: protectedProcedure
    .input(z.object({}))
    .output(z.array(quizQuestionSchema))
    .query(async ({ ctx, input }) => {
      return await ctx.db.quizQuestion.findMany({});
    }),
  submitQuiz: protectedProcedure
    .input(z.array(answerSchema))
    .mutation(async ({ ctx, input }) => {}),
});
