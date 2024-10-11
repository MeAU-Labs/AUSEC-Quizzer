import { FEEDBACK_EMAIL } from "~/utils/constants";

export default async function QuizThanksPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <h1>Thanks for participating in this quiz!</h1>
      <p>
        Want to report issues? Send feedback{" "}
        <a className="text-primary" href={`mailto:${FEEDBACK_EMAIL}`}>
          here
        </a>
      </p>
    </div>
  );
}
