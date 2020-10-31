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

  const existingProject = await db.project.findMany()
  if (!existingProject.length) {
    const testData1 = {
      name: 'Speaker Series',
      ownerEmail: 'test@test.com',
      logo: '',
      shortDescription: 'Bringing the best speakers from around the globe.',
      longDescription:
        'This will be our biggest drive to grow the conversation around our mission around the world. We plan on bringing together speakers from diverse backgrounds to discuss the ideas related to our mission.',
      coverImage:
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      stripeId: 'acct_1GoC8zCed2AVwHSp',
      goalAmount: 200000,
      videoLink: 'https://www.youtube.com/embed/_xRbnobzs2Y',
      websiteLink: 'https://www.radicalxchange.org/',
    }

    const testData2 = {
      name: 'Website upgrades',
      ownerEmail: 'test@test.com',
      logo: '',
      shortDescription:
        'This will bring some much needed upgrades to the site.',
      longDescription:
        "There are a few enhancements we have been meaning to do on the website but haven't had the capacity to do. ",
      coverImage:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      stripeId: 'acct_1GoC8zCed2AVwHSp',
      goalAmount: 100000,
      websiteLink: 'https://www.radicalxchange.org/',
    }
    await db.user.create({ data: testData1 })
    await db.user.create({ data: testData2 })
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
