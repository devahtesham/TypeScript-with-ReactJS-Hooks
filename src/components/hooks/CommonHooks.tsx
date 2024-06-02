import React, { useEffect, useState, useRef, useCallback,useMemo } from 'react'
import UserData from './UserData';

const CommonHooks = () => {
    console.log("I AM CUSTOM HOOKS COMPONENT !!!!");

    const [count, setCount] = useState<number>(0);
    const [age, setAge] = useState<number>(19)
    const [isToggle, SetIsToggle] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);



    useEffect(() => {
        console.log("CUSTOM HOOKS COMPONENT mount");

        return () => {
            console.log("CUSTOM HOOKS COMPONENT unmount");
        }
    }, [isToggle])

    const increment = () => {
        setCount(state => state + 1)
    }
    const decrement = () => {
        setCount(state => state + 1)
    }

    // example of useCallback Hook
    const ageUpdateHandler = useCallback(() => {
        setAge(25)
    }, [age])

    // example of useMemo Hook
    const isEven = useMemo(()=>{
        console.log("HEAVY OPERATION HAS DONE")
        let i=0
        while(i<1000000001){
            i+=1
        }
       if( count % 2 === 0) return true
    },[count])

    return (
        <>
            <h1>====== start: example of useState and useMemo Hook</h1>
            <div>Counter</div>
            <button onClick={increment}>+</button>
            <h3>{isEven ? "Even" : "Odd"}</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <h1>====== end: example of useState and useMemo Hook</h1>

            <h1>====== start: example of useRef and useEffect Hook</h1>
            <div>
                <input type="text" placeholder='Write Something to reflect below' ref={inputRef} />
                {/* This component need to be re-render to show the below input Ref value */}
                <h2>{inputRef.current?.value}</h2>
            </div>
            <button onClick={() => SetIsToggle(!isToggle)}>Toggle button</button>
            <span>{isToggle ? "Toggle True":"Toggle False"}</span>
            <h1>====== end: example of useRef and useEffect Hook</h1>

            <h1>====== start: example of useCallback Hook</h1>
            <UserData age={age} ageUpdateHandler={ageUpdateHandler} />
            <h1>====== end: example of useCallback Hook</h1>
        </>
    )
}

export default CommonHooks