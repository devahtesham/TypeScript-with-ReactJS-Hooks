import React,{memo} from 'react'

type UserDataProps = {
    age: number,
    ageUpdateHandler: () => void
}

const UserData = ({ age, ageUpdateHandler }: UserDataProps) => {
    console.log("I am UserData Comp !");
    return (
       <>
        <h1>User Data</h1>
        <h3>User Age:- {age}</h3>
        <button onClick={ageUpdateHandler}>Update Age</button>
       </>
    )
}

export default memo(UserData)