/*
  Warnings:

  - You are about to drop the column `answer` on the `QuizQuestion` table. All the data in the column will be lost.
  - Added the required column `correctAnswerIndex` to the `QuizQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizQuestion" DROP COLUMN "answer",
ADD COLUMN     "correctAnswerIndex" INTEGER NOT NULL;
