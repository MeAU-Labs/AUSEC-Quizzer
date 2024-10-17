import { redirect } from "next/navigation";
import QuizPage from "~/components/quiz/quiz-page";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Quiz() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/auth/signin");
  }

  void api.user.get.prefetch({});
  void api.quiz.getQuizQuestions.prefetch({});

  return (
    <HydrateClient>
      <QuizPage />
    </HydrateClient>
  );
}
