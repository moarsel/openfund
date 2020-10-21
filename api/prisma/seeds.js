/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  //
  const existingUser = await db.user.findMany({
    where: { email: 'admin@email.com' },
  })
  if (!existingUser.length) {
    await db.user.create({ data: { name: 'Admin', email: 'admin@email.com' } })
  }

  const existingProject = await db.business.findMany({
    where: { ownerEmail: 'admin@email.com' },
  })
  if (!existingProject.length) {
    const testData = {
      name: 'Test',
      ownerEmail: 'Test',
      logo: 'Test',
      shortDescription: 'Test project',
      longDescription: 'Example of a test business for testing',
      coverImage: 'Test',
      stripeId: 'Test',
      goalAmount: 100,
      videoLink: 'youtube.com/watch?abcdef',
      websiteLink: 'www.example.com',
    }
    await db.user.create({ data: testData })
  }

  console.info('No data to seed. See api/prisma/seeds.js for info.')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
