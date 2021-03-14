import { db } from 'src/lib/db'
import { requireAuth, requirePermission } from 'src/lib/auth'
import { request } from 'graphql-request'

export const projects = (args) => {
  return db.project.findMany(args)
}

export const project = ({ id }) => {
  return db.project.findUnique({
    where: { id },
  })
}

export const createProject = ({ input }) => {
  requirePermission('admin')
  return db.project.create({
    data: input,
  })
}

export const updateProject = ({ id, input }) => {
  requirePermission('admin')
  return db.project.update({
    data: input,
    where: { id },
  })
}

export const updateAllProjects = (input) => {
  requireAuth()
  const promises = input.map((project) => {
    const { id, ...data } = project
    return db.project.update({ data: data, where: { id: id } })
  })
  return db.$transaction(promises)
}

export const deleteProject = ({ id }) => {
  requirePermission('admin')
  return db.project.delete({
    where: { id },
  })
}

export const queryProjectsFromOSC = () => {
  // Run GraphQL queries/mutations using a static function
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
}

// export const projectWithContributions = async ({ id }) => {
//   const project = await db.project.findUnique({
//     where: { id },
//   })
//   const contributorCount = await db.donation.count({
//     where: { projectId: id },
//     distinct: ['userId'],
//   })

//   const contributionSum = await db.donation.aggregate({
//     where: { projectId: id },
//     sum: { amount: true },
//   })

//   return {
//     ...project,
//     contributorCount,
//     contributionSum: contributionSum.sum.amount,
//   }
// }

export const Project = {
  donations: (_obj, { root }) =>
    db.project.findUnique({ where: { id: root.id } }).donations(),
}
