import { db } from 'src/lib/db'
import { foreignKeyReplacement } from '../utils'

export const projects = () => {
  return db.project.findMany()
}

export const project = ({ id }) => {
  return db.project.findOne({
    where: { id },
  })
}

export const createProject = ({ input }) => {
  return db.project.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateProject = ({ id, input }) => {
  return db.project.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteProject = ({ id }) => {
  return db.project.delete({
    where: { id },
  })
}

export const Project = {
  donations: (_obj, { root }) =>
    db.project.findOne({ where: { id: root.id } }).donations(),
}
