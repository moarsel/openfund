import { db } from 'src/lib/db'
import { foreignKeyReplacement } from '../utils'

export const donations = () => {
  return db.donation.findMany()
}

export const donation = ({ id }) => {
  return db.donation.findOne({
    where: { id },
  })
}

export const createDonation = ({ input }) => {
  return db.donation.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateDonation = ({ id, input }) => {
  return db.donation.update({
    data: foreignKeyReplacement(input),
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
    db.donation.findOne({ where: { id: root.id } }).donor(),
  recipient: (_obj, { root }) =>
    db.donation.findOne({ where: { id: root.id } }).recipient(),
}
