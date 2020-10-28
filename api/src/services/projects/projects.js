import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const projects = () => {
  return db.project.findMany()
}

export const project = ({ id }) => {
  return db.project.findOne({
    where: { id },
  })
}

export const createProject = ({ input }) => {
  requireAuth()
  return db.project.create({
    data: input,
  })
}

export const updateProject = ({ id, input }) => {
  requireAuth()
  return db.project.update({
    data: input,
    where: { id },
  })
}

export const deleteProject = ({ id }) => {
  requireAuth()
  return db.project.delete({
    where: { id },
  })
}

export const Project = {
  donations: (_obj, { root }) =>
    db.project.findOne({ where: { id: root.id } }).donations(),
}
