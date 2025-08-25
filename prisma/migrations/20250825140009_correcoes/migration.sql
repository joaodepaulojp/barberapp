/*
  Warnings:

  - You are about to drop the column `duration` on the `BarberShopService` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `BarberShopService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."BarberShopService" DROP COLUMN "duration",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
