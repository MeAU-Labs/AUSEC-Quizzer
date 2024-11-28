/*
  Warnings:

  - You are about to drop the column `userId` on the `Session` table. All the data in the column will be lost.
  - Added the required column `userid` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "userId",
ADD COLUMN     "userid" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "HighScore" (
    "userid" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "achievedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HighScore_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "UserSessionCount" (
    "userid" TEXT NOT NULL,
    "sessionCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserSessionCount_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "EmailLink" (
    "userid" TEXT NOT NULL,
    "emailSentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailLink_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "EmailScore" (
    "userid" TEXT NOT NULL,
    "emailSentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailScore_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "SuspiciousActivity" (
    "userid" TEXT NOT NULL,
    "flaggedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "flaggedByAdmin" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "SuspiciousActivity_pkey" PRIMARY KEY ("userid")
);

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HighScore" ADD CONSTRAINT "HighScore_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSessionCount" ADD CONSTRAINT "UserSessionCount_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailLink" ADD CONSTRAINT "EmailLink_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailScore" ADD CONSTRAINT "EmailScore_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuspiciousActivity" ADD CONSTRAINT "SuspiciousActivity_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
