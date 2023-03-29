/*
  Warnings:

  - You are about to drop the column `carModelId` on the `CarModel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CarModel" DROP CONSTRAINT "CarModel_carModelId_fkey";

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "carModelId" INTEGER;

-- AlterTable
ALTER TABLE "CarModel" DROP COLUMN "carModelId";

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "CarModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
