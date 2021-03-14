/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

const request = require('graphql-request')

dotenv.config()

const db = new PrismaClient()

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:

  const fundingRound = await db.fundingRound.findMany()
  if (!fundingRound.length) {
    const now = new Date()
    const futureDate = new Date(now.getFullYear(), now.getMonth() + 2, 1)
    await db.fundingRound.create({
      data: { matchingAmountPool: 100000, endDate: futureDate },
    })
  }

  const endpoint =
    'https://api.opencollective.com/graphql/v1/4a271fea8dff86cc3ce81d29124efe0bdda659fc'
  const query = `
  query TaggedCollectiveQuery($offset: Int, $tags: [String], $orderBy: CollectiveOrderField, $limit: Int, $isActive: Boolean) {
    allCollectives(type: COLLECTIVE, orderBy: $orderBy, orderDirection: DESC, offset: $offset, tags: $tags, limit: $limit, isActive: $isActive) {
      limit
      offset
      total
      collectives {
        id
        backgroundImageUrl(height: 200)
        description
        longDescription
        imageUrl(height: 128)
        name
        slug
        type
        website
        githubHandle
        stats {
          id
          yearlyBudget
          backers {
            all
          }
        }
      }
    }
  }
  `
  const variables = { tags: 'design' }
  return request(endpoint, query, variables)
    .then((data) => data.allCollectives.collectives)
    .then((projects) => projects.filter(Boolean))
    .then((data) =>
      data.map((data) => ({
        collectiveId: data.id,
        name: data.name,
        logo: data.imageUrl,
        shortDescription: data.description,
        longDescription: data.longDescription,
        coverImage: data.backgroundImageUrl,
        websiteLink: data.website,
        githubLink: data.githubHandle,
      }))
    )
    .then((projects) => {
      return projects.map((project) => {
        console.log(project)
        return db.project.upsert({
          create: project,
          update: project,
          where: { collectiveId: project.collectiveId },
        })
      })
    })

  // const existingProject = await db.project.findMany()
  // if (existingProject.length < 2) {
  //   const testData1 = {
  //     name: 'Speaker Series',
  //     ownerEmail: 'test@test.com',
  //     logo: '',
  //     shortDescription: 'Bringing the best speakers from around the globe.',
  //     longDescription:
  //       'This will be our biggest drive to grow the conversation around our mission around the world. We plan on bringing together speakers from diverse backgrounds to discuss the ideas related to our mission.',
  //     coverImage:
  //       'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  //     stripeId: 'acct_1GoC8zCed2AVwHSp',
  //     goalAmount: 200000,
  //     videoLink: 'https://www.youtube.com/embed/_xRbnobzs2Y',
  //     websiteLink: 'https://www.radicalxchange.org/',
  //   }

  //   const testData2 = {
  //     name: 'Website upgrades',
  //     ownerEmail: 'test@test.com',
  //     logo: '',
  //     shortDescription:
  //       'This will bring some much needed upgrades to the site.',
  //     longDescription:
  //       "There are a few enhancements we have been meaning to do on the website but haven't had the capacity to do. ",
  //     coverImage:
  //       'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
  //     stripeId: 'acct_1GoC8zCed2AVwHSp',
  //     videoLink: 'https://www.youtube.com/embed/_xRbnobzs2Y',
  //     goalAmount: 100000,
  //     websiteLink: 'https://www.radicalxchange.org/',
  //   }
  //   await db.project.create({ data: testData1 })
  //   await db.project.create({ data: testData2 })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
