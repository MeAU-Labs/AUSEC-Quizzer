"use client";
import { signOut } from "next-auth/react";
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

export default function SignOut() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Exit quiz</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Exit Quiz</DialogTitle>
          <DialogDescription>
            Are you sure you want to exit the quiz? Your progress will be lost,
            and you&apos;ll have to start all over again.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit" variant="destructive" onClick={() => signOut()}>
            Exit quiz
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
