import { useState,useEffect } from "react"
import { RestaurantMenuURL } from "../constants"

const useRestaurantMenu = (resId) => {
    //1. Change the data based on the parameter i.e. resID
    //For printing the values from the API coming from the Server.
    //const[restaurant,setRestaurant] = useState(null);//As on initial render we are showing a lot many things so, safer bet is to keep this as null at initial render.
    const[restaurant,setRestaurant] = useState(null)
    
    //2. Fetch the data from the API
    //Getting the data of this particular restaurant using the useEffect hook
    useEffect(()=>{
        getRestaurantMenu()
        //Callback Method and a dependency Array
    },[])

    async function getRestaurantMenu(){
        const response = await fetch(RestaurantMenuURL+resId)
        const json = await response.json()
        setRestaurant(json.data)       
    }

    //3. Will Return restaurantMenu data
    return restaurant
}
export default useRestaurantMenu