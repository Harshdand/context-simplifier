import React from 'react'
import { getContextValue } from 'context-simplifier'

const CountDisplay = () => {
  const count = getContextValue('count')

  return <div>{count}</div>
}

export default CountDisplay
