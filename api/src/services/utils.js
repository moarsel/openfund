export const foreignKeyReplacement = (input) => {
  let output = input
  const foreignKeys = Object.keys(input).filter((k) => k.match(/Id$/))
  foreignKeys.forEach((key) => {
    const modelName = key.replace(/Id$/, '')
    const value = input[key]
    delete output[key]
    output = Object.assign(output, {
      [modelName]: { connect: { id: value } },
    })
  })
  return output
}

export function isDefined(value) {
  return value !== null && typeof value !== 'undefined'
}

export function connectRelations(data, relations) {
  const d = { ...data } // it would be better to deep clone the data

  Object.keys(relations).forEach((key) => {
    if (Object.values(relations[key]).filter(isDefined).length > 0) {
      d[key] = { connect: relations[key] }
    }
  })
  return d
}

// TODO: use goal amount to cap the amount of matching received when goal met.
// TODO: get real data into this
export const calculateMatchingAmounts = (projects, availableMatchingFunds) => {
  const initialMatchAmounts = projects.map((project) => {
    const combinedContributions = sumContributionsByUser(project.donations)
    const totals = combinedContributions.reduce(
      (cumulative, current) => {
        const contributionsTotal =
          cumulative.contributionsTotal + current.amount
        const sumOfSqrts = cumulative.sumOfSqrts + Math.sqrt(current.amount)
        const currentMatchingAmount = Math.pow(sumOfSqrts, 2)
        return {
          contributionsTotal,
          sumOfSqrts,
          currentMatchingAmount,
        }
      },
      { contributionsTotal: 0, sumOfSqrts: 0, currentMatchingAmount: 0 }
    )

    return {
      id: project.id,
      contributionsTotal: totals.contributionsTotal,
      currentMatchingAmount: totals.currentMatchingAmount,
      contributorCount: combinedContributions.length,
    }
  })

  const totalMatchingForProjects = initialMatchAmounts.reduce(
    (acc, curr) => acc + curr.currentMatchingAmount,
    0
  )

  const divisor = availableMatchingFunds / totalMatchingForProjects
  const normalizedTotals = initialMatchAmounts.map((project) => ({
    ...project,
    currentMatchingAmount: Number(
      (project.currentMatchingAmount * divisor).toFixed(2)
    ),
  }))
  return normalizedTotals
}

export const sumContributionsByUser = (donations) => {
  return Object.values(
    donations.reduce((acc, curr) => {
      const sum = acc[curr.userId]
        ? acc[curr.userId].amount + curr.amount
        : curr.amount
      return { ...acc, [curr.userId]: { ...curr, amount: sum } }
    }, {})
  )
}
