/*
  Warnings:

  - You are about to drop the column `hash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `User` table. All the data in the column will be lost.
  - Added the required column `expirationDateDrivingLicense` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthDate` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "hash",
DROP COLUMN "zipCode",
ADD COLUMN     "expirationDateDrivingLicense" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "birthDate" SET NOT NULL;
