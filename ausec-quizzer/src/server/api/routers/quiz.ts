import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { answerSchema, quizQuestionSchema } from "~/server/schemas/quiz";

export const quizRouter = createTRPCRouter({
  getQuizQuestions: protectedProcedure
    .input(z.object({}))
    .output(z.array(quizQuestionSchema))
    .query(async ({ ctx }) => {
      return await ctx.db.quizQuestion.findMany({});
    }),
  submitQuiz: protectedProcedure
    .input(z.array(answerSchema))
    .mutation(async ({ ctx, input }) => {
      if (ctx.session.user.hasCompletedQuiz) return;
      let score = 0;

      const allQuestions = await ctx.db.quizQuestion.findMany({});

      for (const answer of input) {
        const question = allQuestions.find(
          (question) => question.id === answer.id,
        );

        if (question?.correctAnswerIndex === answer.answerIndex) {
          score++;
        }
      }

      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { score: score, hasCompletedQuiz: true },
      });
    }),
});
