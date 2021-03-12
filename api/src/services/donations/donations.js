import { db } from 'src/lib/db'
import { connectRelations } from '../utils'

export const donations = () => {
  return db.donation.findMany()
}

export const donation = ({ id }) => {
  return db.donation.findUnique({
    where: { id },
  })
}

export const createDonation = (input) => {
  const { userId, projectId, ...data } = input
  return db.donation.create({
    data: connectRelations(data, {
      donor: { id: userId },
      recipient: { id: projectId },
    }),
  })
}

export const updateDonation = ({ id, input }) => {
  return db.donation.update({
    data: input,
    where: { id },
  })
}

export const deleteDonation = ({ id }) => {
  return db.donation.delete({
    where: { id },
  })
}

export const Donation = {
  donor: (_obj, { root }) =>
    db.donation.findUnique({ where: { id: root.id } }).donor(),
  recipient: (_obj, { root }) =>
    db.donation.findUnique({ where: { id: root.id } }).recipient(),
}
