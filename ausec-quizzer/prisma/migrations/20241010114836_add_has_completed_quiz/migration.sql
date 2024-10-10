-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hasCompletedQuiz" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "score" SET DEFAULT 0;
