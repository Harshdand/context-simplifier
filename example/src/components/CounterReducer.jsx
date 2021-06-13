import React from 'react'
import { getContextAction } from 'context-simplifier'

const CounterReducer = () => {
  console.log('counter reducer render')
  const dispatch = getContextAction('countReducer')

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default CounterReducer
