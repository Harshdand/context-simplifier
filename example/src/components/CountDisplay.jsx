import React from 'react'
import { getContextValue } from 'context-simplifier'

const CountDisplay = () => {
  const count = getContextValue('count')
  const countReducer = getContextValue('countReducer')

  return (
    <>
      <div>Count: {count}</div>
      <div>Count with reducer: {countReducer}</div>
    </>
  )
}

export default CountDisplay
