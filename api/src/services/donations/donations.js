import { db } from 'src/lib/db'
import { connectRelations } from '../utils'

export const donations = () => {
  return db.donation.findMany()
}

export const donation = ({ id }) => {
  return db.donation.findOne({
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
    db.donation.findOne({ where: { id: root.id } }).donor(),
  recipient: (_obj, { root }) =>
    db.donation.findOne({ where: { id: root.id } }).recipient(),
}

export const getMatchesFromDB = () => {
  db.donations.aggregate({
    sum: { amount: true },
  })
}

// TODO: use goal amount to cap the amount of matching received when goal met.
// TODO: get real data into this
export const getMatchingAmounts = (projects, availableMatchingFunds) => {
  const initialMatchAmounts = projects.map((project) => {
    const totals = project.contributions.reduce(
      (cumulative, current) => {
        const contributionsTotal =
          cumulative.contributionsTotal + current.amount
        const sumOfSqrts = cumulative.sumOfSqrts + Math.sqrt(current.amount)
        const matchingAmount = Math.pow(sumOfSqrts, 2)
        return {
          contributionsTotal,
          sumOfSqrts,
          matchingAmount,
        }
      },
      { contributionsTotal: 0, sumOfSqrts: 0, matchingAmount: 0 }
    )

    return {
      projectId: project.projectId,
      contributionsTotal: totals.contributionsTotal,
      matchingAmount: totals.matchingAmount,
    }
  })

  const totalMatchingForProjects = initialMatchAmounts.reduce(
    (acc, curr) => acc + curr.matchingAmount,
    0
  )
  const divisor = availableMatchingFunds / totalMatchingForProjects
  const normalizedTotals = initialMatchAmounts.map((project) => ({
    ...project,
    matchingAmount: Number((project.matchingAmount * divisor).toFixed(2)),
  }))
  return normalizedTotals
}
