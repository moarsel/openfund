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
