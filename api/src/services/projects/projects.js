import { db } from 'src/lib/db'
import { requireAuth, requirePermission } from 'src/lib/auth'

export const projects = (args) => {
  return db.project.findMany(args)
}

export const project = ({ id }) => {
  return db.project.findOne({
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

// export const projectWithContributions = async ({ id }) => {
//   const project = await db.project.findOne({
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
    db.project.findOne({ where: { id: root.id } }).donations(),
}
