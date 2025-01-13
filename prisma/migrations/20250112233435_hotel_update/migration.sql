/*
  Warnings:

  - You are about to drop the column `rating` on the `hotel` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `hotel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `hotel` DROP FOREIGN KEY `Hotel_userId_fkey`;

-- DropIndex
DROP INDEX `Hotel_userId_fkey` ON `hotel`;

-- AlterTable
ALTER TABLE `hotel` DROP COLUMN `rating`,
    DROP COLUMN `userId`,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `location` VARCHAR(191) NULL;
