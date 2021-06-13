import React from 'react'
import { createContextProvider } from 'context-simplifier'

import Counter from './components/Counter'
import CountDisplay from './components/CountDisplay'
import Layout from './components/Layout'

const App = () => {
  const CountProvider = createContextProvider('count', 0)

  return (
    <>
      <CountProvider>
        <Counter />
        <Layout>
          <CountDisplay />
        </Layout>
      </CountProvider>
    </>
  )
}

export default App
