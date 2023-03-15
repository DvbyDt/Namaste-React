import { useParams } from "react-router-dom"
import { ImageCDNURL } from "../constants";
import MenuShimmer from "./MenuShimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurant = useRestaurantMenu(resId)

    return (!restaurant) ? <MenuShimmer/> : (
        <>
        <div className="mt-10 mb-10 p-10 flex justify-evenly bg-gray-900">
            <img src={ImageCDNURL+restaurant?.cloudinaryImageId} className="h-60" />
            {/* <h1>Resturant Id: {resId}</h1> */}
            <div className="flex flex-col justify-evenly -ml-20">
                <h1 className="text-white font-bold text-3xl">{restaurant?.name}</h1>            
                {/* <h2>{restaurant?.cuisines.join(", ")}</h2> */}
                <h4 className="text-gray-300 text-lg">{restaurant?.area}</h4>
                <h4 className="text-gray-100 text-base">{restaurant?.avgRating} stars | {restaurant?.sla?.deliveryTime} mins | {restaurant?.costForTwoMsg}</h4>            </div>
            <div className="flex flex-col justify-evenly border-white border pr-5">
                <h3 className="text-white font-bold text-xl pl-8">OFFERS</h3>
                <h3 className="list-none pl-8">
                    {Object.values(restaurant?.offerMeta).map((offer)=>{
                        return <li key={offer?.offer_info?.offer_ids} className="text-white">{offer?.header} | {offer?.coupon_code}</li>
                    }
                    )}
                </h3>
            </div>           
        </div>
        <div className="flex flex-col justify-center">
            <h2 className="font-bold text-center text-3xl mb-12">Checkout Our Menu:</h2>
            {//This Object.values is used to convert list of objects into an array so, that we can travese through it 
            //and apply the map().
            Object.values(restaurant?.menu?.items).map((item)=>{
                return <li key={item.id} className="list-none text-center pb-10">{item?.name}</li>
            })}
        </div>
        </>
    )
}
export default RestaurantMenu