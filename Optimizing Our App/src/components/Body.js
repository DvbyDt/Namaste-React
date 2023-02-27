import { useState,useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/common";
import useGetRestaurants from "../utils/useGetRestaurants";
import useIsOnline from "../utils/useIsOnline";

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

    //Using custom hook to get restaurants data
    const {allRestaurants,filteredRestaurants} = useGetRestaurants([])    

    //Develop an online and offline functionality
    const isOnline = useIsOnline()

    if(!isOnline) 
    return (
        <>
            <h1>Oops!!!</h1>
            <p>Looks Like Something has gone wrong.</p>
        </>
    )
    
    //how to avoid rendering a component:
    if(!allRestaurants) return null;
    //This is also called as early exit

    //if(filteredRestaurants?.length === 0 && allRestaurants?.length != 0) return <h1>No Restaurants matches your search!!</h1>

    return (allRestaurants?.length === 0) ? <Shimmer/> : (
        <>
        <div className="search-Container">
            <input 
                 type="text"
                 className="searchInput"
                 placeholder="Search"
                 value={searchText}
                 onChange = {(e)=>{
                    setSearchText(e.target.value)
                    // console.log("render Search")
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
                return (<Link to={"/restaurant/"+resturants.data.id} key={resturants.data.id}>
                    <RestaurantCard {...resturants.data} />
                </Link>)}
            ))
        }
        </div>
        {/* {console.log("Body Render")} */}
        </>
    )
}

export default Body