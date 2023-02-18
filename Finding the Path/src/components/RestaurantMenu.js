import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../../../Khana Khazana/src/constants";
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
    const { resId } = useParams();
    //Getting the data of this particular restaurant using the useEffect hook
    useEffect(()=>{//Callback Method and a dependency Array
        getRestaurantDetails()
    },[])    

    //For printing the values from the API coming from the Server.
    const[restaurant,setRestaurant] = useState(null);//As on initial render we are showing a lot many things so, safer bet is to keep this as null at initial render.

    async function getRestaurantDetails(){
        //Fetching data from stream and storing it in data stream 
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=28.9844618&lng=77.7064137&menuId="+resId); 
        //Converting that data into a json input
        const jsonInput = await data.json();
        console.log(jsonInput.data);
        setRestaurant(jsonInput.data)
    }

    return (!restaurant) ? <Shimmer/> : (
        <>
        <div className="resturant-topBanner">
            <img src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
            {/* <h1>Resturant Id: {resId}</h1> */}
            <div className="resturant-basicInfo">
                <h1>{restaurant?.name}</h1>            
                {/* <h2>{restaurant?.cuisines.join(", ")}</h2> */}
                <h4>{restaurant?.area}</h4>
                <h4>{restaurant?.avgRating} stars</h4>
                <h4>{restaurant?.sla?.deliveryTime} mins</h4>
                <h4>{restaurant?.costForTwoMsg}</h4>
            </div>
            <div className="resturant-offers">
                <h3>OFFERS</h3>
                <h3>
                    {Object.values(restaurant?.offerMeta).map((offer)=>{
                    return <li key={offer?.offer_info?.offer_ids}>{offer?.header} | {offer?.coupon_code}</li>
                    }
                    )}
                </h3>
            </div>           
        </div>
        <div className="restaurant-Menu">
            <h2>Checkout Our Menu:</h2>
            {//This Object.values is used to convert list of objects into an array so, that we can travese through it 
            //and apply the map().
            Object.values(restaurant?.menu?.items).map((item)=>{
                return <li key={item.id}>{item?.name}</li>
            })}
        </div>
        </>
    )
}
export default RestaurantMenu