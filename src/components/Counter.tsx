import React from 'react'

type CounterProps = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Counter = (props: CounterProps) => {
    console.log("i am Counter ");
    const { count, setCount } = props
    return (
        <>
            <div>Counter:- {count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default Counter