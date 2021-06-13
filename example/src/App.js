import React from 'react'
import { createContextProvider } from 'context-simplifier'

import Counter from './components/Counter'
import CountDisplay from './components/CountDisplay'
import Layout from './components/Layout'
import CounterReducer from './components/CounterReducer'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const App = () => {
  const CountProvider = createContextProvider('count', 0)
  const CountReducerProvider = createContextProvider('countReducer', 0, reducer)

  return (
    <CountReducerProvider>
      <CountProvider>
        <Counter />
        <CounterReducer />
        <Layout>
          <CountDisplay />
        </Layout>
      </CountProvider>
    </CountReducerProvider>
  )
}

export default App
