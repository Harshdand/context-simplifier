# context-simplifier

[![NPM](https://img.shields.io/npm/v/context-simplifier.svg)](https://www.npmjs.com/package/context-simplifier) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save context-simplifier
```

```bash
yarn add context-simplifier
```

## Usage

### To create a new context with provider use `createContextProvider`

```jsx
import React, { Component } from 'react'
import { createContextProvider } from 'context-simplifier'

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
```

### To use the context value use `getContextValue`

```jsx
import React from 'react'
import { getContextValue } from 'context-simplifier'

const CountDisplay = () => {
  const count = getContextValue('count')

  return <div>{count}</div>
}

export default CountDisplay
```

### To use context action to update context value use `getContextAction`

```jsx
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
```

## License

MIT © [Harshdand](https://github.com/Harshdand)
