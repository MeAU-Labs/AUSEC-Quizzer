"use client";
import { LoadingSpinner } from "../loading-spinner";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function SubmitDialog({
  onSubmit,
  isOpen,
  setIsOpen,
  isSubmitting,
  ...props
}: React.ComponentProps<typeof Button> & {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full" {...props}>
          Submit quiz
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Submit Quiz</DialogTitle>
          <DialogDescription>
            Are you sure you want to submit the quiz? Make sure to double check
            your answers, for you cannot make another attempt.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            type="submit"
            className="flex items-center gap-2"
            onClick={onSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner className="h-4 w-4" /> <p>Submitting quiz</p>
              </>
            ) : (
              <p>Submit quiz</p>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
