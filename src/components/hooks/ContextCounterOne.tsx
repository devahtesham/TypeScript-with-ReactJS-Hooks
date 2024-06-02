import React, { useContext } from 'react'
import { CounterContext, ObjToSendType } from '../context/CounterContext'

const ContextCounterOne = () => {
  const { count1, increment1, decrement1 } = useContext(CounterContext) as ObjToSendType
  return (
    <>
      <h1>Counter 1</h1>
      <div>
        <h1>{count1}</h1>
        <button onClick={increment1}>+</button>
        <button onClick={decrement1}>-</button>
      </div>
    </>
  )
}

export default ContextCounterOne