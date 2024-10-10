import LoginForm from "@/components/home/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      <Card>
        <CardHeader>
          <CardTitle>Start Quiz</CardTitle>
          <CardDescription>
            Enter your team ID to start the quiz!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
