import { useState,useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/common";
import useGetRestaurants from "../utils/useGetRestaurants";
import useIsOnline from "../utils/useIsOnline";
import { IoSearch } from "react-icons/io5"

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
    const {allRestaurants,filteredRestaurants,setAllRestaurants,setFilteredRestaurants} = useGetRestaurants([])    

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
        <div className="mt-16 mb-16 flex justify-center ml-12 mr-12">
            <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <IoSearch/>
                </span>
                <input 
                 type="text"
                 className="placeholder:italic placeholder:text-slate-400 block bg-white border
                 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500
                 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                 placeholder="Search for Restaurants"
                 value={searchText}
                 onChange = {(e)=>{
                    setSearchText(e.target.value)
                    // console.log("render Search")
                 }}
            />
            </label>
            <button onClick={() => {
                //Toggling Between Search Clicks
                // if(searchClicked === "true") {setSearchClicked("false")}
                // else{setSearchClicked("true")}}}

                //For filtering the data
                const data = filterData(searchText,allRestaurants);
                
                //Updating the restaurant list
                setFilteredRestaurants(data);
            }}
            className="ml-10 bg-blue-900 text-white py-1 px-3 rounded-lg hover:transition hover:duration-300 hover:opacity-80">
            Search</button>
        </div>
        {/* <h1>{searchClicked}</h1> */}
        <div className="flex-wrap flex justify-center">
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