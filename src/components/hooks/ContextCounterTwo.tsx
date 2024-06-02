import React, { useContext } from 'react'
import { CounterContext, ObjToSendType } from '../context/CounterContext'

const ContextCounterTwo = () => {
  const { count2, increment2, decrement2 } = useContext(CounterContext) as ObjToSendType
  return (
    <>
      <h1>Counter 2</h1>
      <div>
        <h1>{count2}</h1>
        <button onClick={increment2}>+</button>
        <button onClick={decrement2}>-</button>
      </div>
    </>
  )
}

export default ContextCounterTwo