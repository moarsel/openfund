import { db } from 'src/lib/db'

export const fundingRounds = () => {
  return db.fundingRound.findMany()
}

export const fundingRound = () => {
  return db.fundingRound.findMany().then((f) => f.find(Boolean))
}
