/*
  Warnings:

  - Added the required column `collectiveId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `githubLink` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "collectiveId" INTEGER NOT NULL,
ADD COLUMN     "githubLink" TEXT NOT NULL;
