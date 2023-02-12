import { ImageCDNURL } from "../constants";

//Creating a restaurant  Card Component
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    maxDeliveryTime }) => {   
            return (
            <div className="restaurantCard">
                {/* This is static mapping */}
                {/* <img src={ImageCDNURL+restaurant List[0]?.data?.cloudinaryImageId}></img>
                <h2>{restaurant List[0]?.data?.name}</h2>
                <p>{restaurant List[0]?.data?.cuisines}</p>
                <p>Delivery Time: {restaurant List[0]?.data.maxDeliveryTime} mins</p> */}

                <img src={ImageCDNURL+cloudinaryImageId}></img> 
                <h2>{name}</h2>
                <p>{cuisines.join(", ")}</p>
                <p>Delivery Time: {maxDeliveryTime} mins</p>               
            </div>
            )
}

export default RestaurantCard