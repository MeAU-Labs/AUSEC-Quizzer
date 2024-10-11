import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { userSchema } from "~/server/schemas/user";

export const userRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.object({}))
    .output(userSchema)
    .query(async ({ ctx }) => {
      return await ctx.db.user.findUniqueOrThrow({
        where: { id: ctx.session.user.id },
      });
    }),
});
