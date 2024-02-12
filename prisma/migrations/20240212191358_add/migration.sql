/*
  Warnings:

  - Added the required column `channelId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "channelId" INTEGER NOT NULL;
