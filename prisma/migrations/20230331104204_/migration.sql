-- CreateEnum
CREATE TYPE "CARSTATUS" AS ENUM ('REPAIRING', 'AVAILABLE');

-- CreateEnum
CREATE TYPE "PRICECATEGORY" AS ENUM ('BASIC', 'STANDARD', 'MEDIUM', 'PREMIUM');

-- CreateEnum
CREATE TYPE "RENTALSTATUS" AS ENUM ('LASTS', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('USER', 'GLOBAL_ADMIN');

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "carMileage" DOUBLE PRECISION NOT NULL,
    "dayRentalPrice" DOUBLE PRECISION NOT NULL,
    "fuelConsumption" INTEGER NOT NULL,
    "startrentalDate" TIMESTAMP(3),
    "overRentalDate" TIMESTAMP(3),
    "carStatus" "CARSTATUS" NOT NULL,
    "carModelId" INTEGER,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rental" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "status" "RENTALSTATUS" NOT NULL,
    "dateEndRental" TIMESTAMP(3) NOT NULL,
    "dateStartRental" TIMESTAMP(3) NOT NULL,
    "UserId" INTEGER,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarModel" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "priceCategory" "PRICECATEGORY" NOT NULL,
    "barnd" TEXT NOT NULL,

    CONSTRAINT "CarModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "birthDate" TIMESTAMP(3),
    "expirationDateDrivingLicense" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "roles" "ROLE" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLogin" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "roles" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserLogin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserLogin_refreshToken_key" ON "UserLogin"("refreshToken");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "CarModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLogin" ADD CONSTRAINT "UserLogin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
