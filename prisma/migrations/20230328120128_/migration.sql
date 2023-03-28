/*
  Warnings:

  - You are about to drop the column `carModelId` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `barndId` on the `CarModel` table. All the data in the column will be lost.
  - You are about to drop the column `count` on the `CarModel` table. All the data in the column will be lost.
  - You are about to drop the `Barnd` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `barnd` to the `CarModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carModelId` to the `CarModel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_carModelId_fkey";

-- DropForeignKey
ALTER TABLE "CarModel" DROP CONSTRAINT "CarModel_barndId_fkey";

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "carModelId";

-- AlterTable
ALTER TABLE "CarModel" DROP COLUMN "barndId",
DROP COLUMN "count",
ADD COLUMN     "barnd" TEXT NOT NULL,
ADD COLUMN     "carModelId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Barnd";

-- DropTable
DROP TABLE "Brand";

-- AddForeignKey
ALTER TABLE "CarModel" ADD CONSTRAINT "CarModel_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
