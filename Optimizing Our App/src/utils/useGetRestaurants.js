import { useState,useEffect } from "react";
import { GetRestaurantURL } from "../constants"

const useGetRestaurants = () => {

    //State variables of all and filteredRestaurants
    //To check if the search is clicked
    //const[searchClicked,setSearchClicked] = useState("false");

    //For filtering the Restuarant List
    //Now that we are getting the data from the API using fetch we don't need this restaurantList in useState.  //useState(restaurantList);
    //const[restaurants,setRestaurants] = useState([]); 
    //If you useState() it will throw undefined map() error and the same error will be thrown if you don't return from filterData.

    //Making the search work
    const[allRestaurants,setAllRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants] = useState([]); 

    //Fetch the list of Restaurants using useEffect() hook.
    /*
    Can't call API inside the Body component because it will make API call on every state change in our case key press.
    That's why we are using the useEffect() hook. It takes two parameters one is the callback function and another one 
    is the dependency array. The need for the dependency array is because the callback function will be called after every 
    re-render and if you want to stop this you will have to use a dependency array.

    If the dependency array is [] it will be called just once i.e. on the initial render.
    So, for making the API call we should make it in the callback function and just have an empty dependency array.
    */
    useEffect(()=>{
        //console.log("Call the dependency array")
        getResturants()
    },[]);

    //For making an API call
    async function getResturants(){
        //Fetching the data stream from swiggy API.
        const data = await fetch(GetRestaurantURL);
        //Now converting this data stream into a readable JSON format
        const jsonInput = await data.json();
        //console.log(jsonInput);
        //console.log(jsonInput.data.cards[2].data.data.cards);
        //Optional Chaining
        setAllRestaurants(jsonInput?.data?.cards[2]?.data?.data?.cards);
        //data.cards[2].data.data
        //Since, filtered Restaurants was empty so, for the first time setting it equal to allRestaurant
        setFilteredRestaurants(jsonInput?.data?.cards[2]?.data?.data?.cards);
    }

    //Return List of Restaurants which contains both filtered and all resturants
    return {allRestaurants,filteredRestaurants}

}

export default useGetRestaurants