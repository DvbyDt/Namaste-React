import { useContext } from "react";
import { ImageCDNURL } from "../constants";
import UserContext from "../utils/UserContext";

//Creating a restaurant  Card Component
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    maxDeliveryTime,
    /** For Props drilling */
    // authorName, 
    // email
    }) => {   
            const {user} = useContext(UserContext)
            return (
            <div className="w-64 h-[26rem] border-2 border-white-600 m-5 p-5 hover:shadow-lg hover:shadow-gray-300 transition ease-in-out delay-75 object-contain ">
                {/* This is static mapping */}
                {/* <img src={ImageCDNURL+restaurant List[0]?.data?.cloudinaryImageId}></img>
                <h2>{restaurant List[0]?.data?.name}</h2>
                <p>{restaurant List[0]?.data?.cuisines}</p>
                <p>Delivery Time: {restaurant List[0]?.data.maxDeliveryTime} mins</p> */}

                <img src={ImageCDNURL+cloudinaryImageId} className="w-50"></img> 
                <h2 className="font-bold text-2xl pt-5">{name}</h2>
                <p className="pt-2 pb-2 text-gray-500">{cuisines.join(", ")}</p>
                <p className="text-indigo-700">Delivery Time: {maxDeliveryTime} mins</p>
                {/* Props Drilling:
                <h5>{authorName}</h5>
                <h6>{email}</h6>  */}
                {/* Using useContext */}
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
            )
}

export default RestaurantCard