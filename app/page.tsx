import LoginForm from "@/components/home/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        AUSEC Quiz- tagline
      </h3>
      <Card>
        <CardHeader>
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
