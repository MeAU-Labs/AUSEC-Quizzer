/*
  Warnings:

  - A unique constraint covering the columns `[teamEmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_teamEmail_key" ON "User"("teamEmail");
