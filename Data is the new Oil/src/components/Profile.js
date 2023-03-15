import { useEffect, useState } from "react"

const Profile = (props) => {
    const[count,setCount] = useState(0)
    // For creating multiple state variables we do :
    const[count2,setCount2] = useState(0)
    /* best place to make an API call is useEffect hook because
    it will fetch the API data one the UI is rendered so, that you don't have to wait
    for the data coming from the API. */
   useEffect(()=>{
    //Using setInterval and checking about unmounting inside it
    const timer = setInterval(()=>{
        console.log("Interval of class component")
    },1000)

    return (()=>{
        clearInterval(timer)
    })

   })
    return(
        <div>
            <h1>This is a Profile Functional Component</h1>            
            <h2>{props.name}</h2>
            <h2>Count in functional Component: {count}</h2>
            <h2>Multiple state variable created {count2}</h2>
            <button onClick={()=>{
                setCount(count+1)
                setCount2(count2+1)
            }}>Click</button>
        </div>
    )
}

export default Profile