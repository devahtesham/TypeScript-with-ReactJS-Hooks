import React, { ChangeEvent, useReducer } from 'react'

// initial state
interface USER_DATA {
    name: string,
    age: number | string,
    gender: string
}

// type constants
const enum REDUCER_ACTION_TYPES {
    USER_NAME,
    USER_AGE,
    USER_GENDER
}

// action type
interface REDUCER_ACTION {
    type: REDUCER_ACTION_TYPES,
    payload?: string | number
}

// initial state
const initialState: USER_DATA = {
    name: "",
    age: "",
    gender: ""
}

// reducer function
const reducer = (state: USER_DATA, action: REDUCER_ACTION): USER_DATA => {
    switch (action.type) {
        case REDUCER_ACTION_TYPES.USER_NAME:
            return {
                ...state,
                name: action.payload as string
            }
        case REDUCER_ACTION_TYPES.USER_AGE:
            return {
                ...state,
                age: action.payload as number | string
            }
        case REDUCER_ACTION_TYPES.USER_GENDER:
            return {
                ...state,
                gender: action.payload as string
            }
        default:
            return state
    }
}

const UseReducer = () => {
    console.log("I am useReducer component !!!");

    const [user, dispatch] = useReducer(reducer, initialState);

    const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPES.USER_NAME,
            payload: e.target.value
        })
    }

    const ageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPES.USER_AGE,
            payload: e.target.value
        })
    }

    const genderChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPES.USER_GENDER,
            payload: e.target.value
        })
    }

    const clickHandler = ()=>{
        console.log(user);
    }

    return (
        <>
            <div className="username">
                <label htmlFor="name">Enter Your Name</label>
                <input type="text" placeholder='Your Name' onChange={nameChangeHandler} value={user.name} />
            </div>
            <div className="age">
                <label htmlFor="age">Enter Your Age</label>
                <input type="text" placeholder='Your Age' onChange={ageChangeHandler} value={user.age} />
            </div>
            <div className="gender">
                <label htmlFor="gender">Enter Your Gender</label>
                <input type="text" placeholder='Your Gender' onChange={genderChangeHandler} value={user.gender} />
            </div>
            <button onClick={clickHandler}>Click</button>
        </>
    )
}

export default UseReducer
