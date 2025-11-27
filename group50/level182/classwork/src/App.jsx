import { useState, useReducer } from 'react'

function App() {

  function reducer(state, action) {


    if (action.type === "add") {
      return { count: state.count - (-1) }
    }


    if (action.type === "minus") {
      return { count: state.count - (+1) }
    }

    if (action.type === "reset") {
      return { count: state.count = 0 }
    }
  }

  let [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <>
      <button onClick={() => {
        dispatch({ type: "add" })
      }}>+</button >


      <h1>{state.count}</h1>

      <button onClick={() => {
        dispatch({ type: "minus" })
      }}>-</button>

      <button onClick={() => {
        dispatch({ type: "reset" })
      }}>reset</button>
    </>
  )
}

export default App
