-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "authId" TEXT,
    "customerId" TEXT,
    "email" TEXT NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "donationTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transactionId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "stripeId" TEXT NOT NULL,
    "videoLink" TEXT NOT NULL,
    "websiteLink" TEXT NOT NULL,
    "goalAmount" INTEGER NOT NULL,
    "currentMatchingAmount" INTEGER NOT NULL DEFAULT 0,
    "contributorCount" INTEGER NOT NULL DEFAULT 0,
    "contributionsTotal" INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FundingRound" (
    "id" SERIAL NOT NULL,
    "matchingAmountPool" INTEGER NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.authId_unique" ON "User"("authId");

-- CreateIndex
CREATE UNIQUE INDEX "User.customerId_unique" ON "User"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Donation" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
