import { ReactNode, createContext, useState } from "react";

type ChildrenProps = {
    children: ReactNode
}

export interface ObjToSendType {
    count1: number,
    count2: number,
    increment1: () => void,
    decrement1: () => void,
    increment2: () => void,
    decrement2: () => void,
}

export const CounterContext = createContext<ObjToSendType | null>(null)





const CounterContextProvider = ({ children }: ChildrenProps) => {
    const [count1, setCount1] = useState<number>(0)
    const [count2, setCount2] = useState<number>(0)

    const increment1 = () => {
        setCount1(prev => prev + 1)
    }
    const increment2 = () => {
        setCount2(prev => prev + 1)
    }

    const decrement1 = () => {
        setCount1(prev => prev - 1)
    }
    const decrement2 = () => {
        setCount2(prev => prev - 1)
    }

    const objToSend: ObjToSendType = {
        count1,
        count2,
        increment1,
        decrement1,
        increment2,
        decrement2
    }
    return (
        <CounterContext.Provider value={objToSend}>{children}</CounterContext.Provider>
    )
}

export default CounterContextProvider