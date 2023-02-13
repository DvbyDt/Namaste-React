import { useState,useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

//Creating the filterData function
function filterData(searchText,restaurants){
    //console.log("This is the searchText ",searchText);
    return restaurants.filter((restaurant) => {
        return restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    });
}


const Body = () => {
    //local variable in JS
    //const searchText="KFC";

    //local variable in React can be created using useState hooks
    /*useState function returns an array and the first element of the array is the local state variable and second one is 
    the setlocal_variable_name method which is used to change the value of the local state variable. 
    
    //Destructing will also work
    const searchvar = useState("")
    const[seearch,setSearch] = searchvar;
    */

    const[searchText,setSearchText] = useState("");

    //To check if the search is clicked
    //const[searchClicked,setSearchClicked] = useState("false");

    //For filtering the Restuarant List
    //Now that we are getting the data from the API using fetch we don't need this restaurantList in useState.  //useState(restaurantList);
    //const[restaurants,setRestaurants] = useState([]); 
    //If you useState() it will throw undefined map() error and the same error will be thrown if you don't return from filterData.

    //Making the search work
    const[allRestaurants,setAllRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants] = useState([]); 

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
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9844618&lng=77.7064137&page_type=DESKTOP_WEB_LISTING");
        //Now converting this data stream into a readable JSON format
        const jsonInput = await data.json();
        console.log(jsonInput);
        //console.log(jsonInput.data.cards[2].data.data.cards);
        //Optional Chaining
        setAllRestaurants(jsonInput?.data?.cards[2]?.data?.data?.cards);
        //data.cards[2].data.data
        //Since, filtered Restaurants was empty so, for the first time setting it equal to allRestaurant
        setFilteredRestaurants(jsonInput?.data?.cards[2]?.data?.data?.cards);
    }
    
    //how to avoid rendering a component:
    if(!allRestaurants) return null;//This is also called as early exit

    //if(filteredRestaurants?.length === 0 && allRestaurants?.length != 0) return <h1>No Restaurants matches your search!!</h1>

    return (allRestaurants?.length === 0) ? <Shimmer/> : (
        <>
        <div className="seach-Container">
            <input 
                 type="text"
                 className="searchInput"
                 placeholder="Search"
                 value={searchText}
                 onChange = {(e)=>{
                    setSearchText(e.target.value)
                 }}
            />
            <button className="searchBtn" onClick={() => {
                //Toggling Between Search Clicks
                // if(searchClicked === "true") {setSearchClicked("false")}
                // else{setSearchClicked("true")}}}

                //For filtering the data
                const data = filterData(searchText,allRestaurants);
                
                //Updating the restaurant list
                setFilteredRestaurants(data);
            }}>
            Search</button>
        </div>
        {/* <h1>{searchClicked}</h1> */}
        <div className="restaurantList">
        {
            //Always expressions work inside curly braces in React.
            (filteredRestaurants?.length === 0) ? <h1>No Restaurants matches your search!!</h1> : (
            filteredRestaurants?.map((resturants) => {
                return <RestaurantCard {...resturants.data} key={resturants.data.id}/>}
            ))
        }
        </div>
        <Shimmer />
        </>
    )
}

export default Body