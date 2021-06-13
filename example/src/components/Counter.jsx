import React from 'react'
import { getContextAction } from 'context-simplifier'

const Counter = () => {
  const setCount = getContextAction('count')

  const increment = () => {
    setCount((oldValue) => oldValue + 1)
  }

  const decrement = () => {
    setCount((oldValue) => oldValue - 1)
  }

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter
