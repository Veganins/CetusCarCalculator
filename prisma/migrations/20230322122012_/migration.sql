/*
  Warnings:

  - A unique constraint covering the columns `[refreshToken]` on the table `UserLogin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserLogin_refreshToken_key" ON "UserLogin"("refreshToken");
