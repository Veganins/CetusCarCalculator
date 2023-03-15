/*
  Warnings:

  - Added the required column `refreshToken` to the `UserLogin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserLogin" ADD COLUMN     "refreshToken" TEXT NOT NULL;
