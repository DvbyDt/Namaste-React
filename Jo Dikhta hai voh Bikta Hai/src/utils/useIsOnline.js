import { useState,useEffect } from "react"

const useIsOnline = () => {
    //State variable to check if online or offline
    const[isOnline,setIsOnline] = useState(true)

    //Checking the status using an event listener inside of an useEffect because we want to call it only once and that
    // can be achieved with the help of useEffect() hook and window.addEventListener("online")
    useEffect(()=>{
        const handleOnline = window.addEventListener("online",()=>{
            setIsOnline(true)
        })

        const handleOffline = window.addEventListener("offline",()=>{
            setIsOnline(false)
        })

        //since, we have added EventListener we have to remove them before exciting the component otherwise they will be present in the memory.
        return(()=>{
            removeEventListener("online",handleOnline)// the reason handleOnline and offline is created because someone else might have 
            removeEventListener("offline",handleOffline)// created another event online with some event listener attached to it that's why you want to remove the event that you had created that's why we are using handleOnline and handleOffline
        })
    },[])


    //returning the status of online or offline
    return isOnline

}

export default useIsOnline