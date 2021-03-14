/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[collectiveId]` on the table `Project`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "ownerEmail" DROP NOT NULL,
ALTER COLUMN "longDescription" DROP NOT NULL,
ALTER COLUMN "coverImage" DROP NOT NULL,
ALTER COLUMN "stripeId" DROP NOT NULL,
ALTER COLUMN "videoLink" DROP NOT NULL,
ALTER COLUMN "websiteLink" DROP NOT NULL,
ALTER COLUMN "goalAmount" DROP NOT NULL,
ALTER COLUMN "githubLink" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Project.collectiveId_unique" ON "Project"("collectiveId");
