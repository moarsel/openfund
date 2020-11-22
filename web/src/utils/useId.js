import React, { useLayoutEffect } from 'react'

let id = 0
const genId = () => ++id

export const useId = (idFromProps) => {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  const initialId = idFromProps || genId()

  const [id, setId] = React.useState(initialId)

  useLayoutEffect(() => {
    if (id === null) {
      setId(genId())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return id != null ? String(id) : undefined
}
