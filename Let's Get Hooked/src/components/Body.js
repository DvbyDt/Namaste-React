import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

//Creating the filterData function
function filterData(searchText,restaurants){
    //console.log("This is the searchText ",searchText);
    return restaurants.filter((restaurant) => {
        return restaurant.data.name.includes(searchText)
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
    const[restaurants,setRestaurants] = useState(restaurantList);
    return (
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
                const data = filterData(searchText,restaurants);
                
                //Updating the resturant list
                setRestaurants(data);
            }}>
            Search</button>
        </div>
        {/* <h1>{searchClicked}</h1> */}
        <div className="restaurantList">
        {
            restaurants.map((resturants) => {
                return <RestaurantCard {...resturants.data} key={resturants.data.id}/>}
            )
        }
        </div>
        </>
    )
}

export default Body