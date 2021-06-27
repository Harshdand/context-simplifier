# context-simplifier
### Utility to simplify context api usage in react

[![NPM](https://img.shields.io/npm/v/context-simplifier.svg)](https://www.npmjs.com/package/context-simplifier) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save context-simplifier
```

```bash
yarn add context-simplifier
```
<br/>

## API

## `createContextProvider(contextName, initialValue, reducerFunction)` ⇒ `provider`

Creates a context and returns the provider.

| Param           | Type                           | Description                                                                                               |
| --------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| contextName     | <code>string:required</code>   | Context name must be string without any spaces or special characters. **Examples**: `count, countContext` |
| initialValue    | <code>any:optional</code>      | Initial Value for the context                                                                             |
| reducerFunction | <code>function:optional</code> | Reducer function to update context value. Reducer function will receive two params `state` and `action`   |

<br/>

## `getContextValue(contextName)` ⇒ `contextValue`

Creates a context and returns the provider.

| Param       | Type                         | Description                                 |
| ----------- | ---------------------------- | ------------------------------------------- |
| contextName | <code>string:required</code> | Provide the context name to fetch its value |

<br/>

## `getContextAction(contextName)` ⇒ `contextSetterFunction`

Creates a context and returns the provider.

| Param       | Type                         | Description                                         |
| ----------- | ---------------------------- | --------------------------------------------------- |
| contextName | <code>string:required</code> | Provide the context name to get its setter function |

<br/>

## Usage

### To create new context

Use `createContextProvider` to create new context. It will return the provider for the created context

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

<hr/>

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

<hr/>

### To get the setter for updating the context value

Use `getContextAction` to get the setter function which can be used to update the context value

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
