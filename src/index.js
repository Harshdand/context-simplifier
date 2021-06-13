import React, {
  createContext as reactCreateContext,
  useContext,
  useState
} from 'react'

const contexts = {}

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const createContextProvider = (name, initialValue) => {
  if (contexts[name]) {
    const { provider } = contexts[name]
    return provider
  }

  contexts[name] = {
    name,
    stateContext: reactCreateContext(),
    actionContext: reactCreateContext()
  }

  const useStateHook = () => {
    return useContext(contexts[name].stateContext)
  }

  const useActionHook = () => {
    return useContext(contexts[name].actionContext)
  }

  const Provider = ({ children }) => {
    const [state, setState] = useState(initialValue)
    const StateContext = contexts[name].stateContext
    const ActionContext = contexts[name].actionContext
    const contextName = contexts[name].name

    return (
      <StateContext.Provider contextName={`${contextName} state`} value={state}>
        <ActionContext.Provider
          contextName={`${contextName} action`}
          value={setState}
        >
          {children}
        </ActionContext.Provider>
      </StateContext.Provider>
    )
  }

  const fnName = `${capitalize(name)}Provider`

  Object.defineProperty(Provider, 'name', { value: fnName })

  contexts[name].provider = Provider
  contexts[name].stateHook = useStateHook
  contexts[name].actionHook = useActionHook

  return contexts[name].provider
}

const getContextValue = (name) => {
  if (contexts[name]) {
    const { stateHook } = contexts[name]
    return stateHook()
  } else {
    throw new Error(`Context with name ${name} doesnt exist`)
  }
}

const getContextAction = (name) => {
  if (contexts[name]) {
    const { actionHook } = contexts[name]
    return actionHook()
  } else {
    throw new Error(`Context with name ${name} doesnt exist`)
  }
}

export { createContextProvider, getContextValue, getContextAction }
