import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import { 
    IoLocationSharp,
    IoHome,
    IoInformationCircle,
    IoPersonOutline,
    IoCartSharp,
    IoBagHandleSharp,
    IoLogIn,
    IoLogOut
 } from "react-icons/io5";
import UserContext from "../utils/UserContext";

const Title = () => {
    return(
        <div>
            <Link to="/">
                <img 
                    className="h-40 p-2 rounded-full"
                    src="https://i.pinimg.com/280x280_RS/40/19/e5/4019e5bef4a45510fdf497a5c8615384.jpg" 
                    alt="logo" 
                />
            </Link>
        </div>
    )
}


const Header = () => {
    //consider you have a title declared using simple JS variable
    //const titleName = "Khana Khazana"

    //Now using local state variable
    //const [titleName,setTitleName] = useState("Khana Khazana")

    //Developing login logout functionality
    const[isloggedIn , setIsLoggedIn] = useState(true);//Since, down also you will be using a boolean then you can keep this as boolean otherwise you have to keep it as a string.
    const { user } = useContext(UserContext)
    return (
        <div className="flex justify-between items-center px-10 shadow-md mb-2">            
            <Title />
            {/* <h1>{titleName}</h1>
            <button className="exampleTest" onClick={()=>{
                if(titleName === "Khana Khazana"){
                    setTitleName("new Food App")
                }else{
                    setTitleName("Khana Khazana")
                }
                
            }}>Click Me </button> */}
            <span className="location flex items-center"><IoLocationSharp /><p className="ml-2 text-gray-600"> Meerut, Uttar Pradesh, India </p></span>
            <div className="w-1/2">
                <ul className="flex justify-between items-center mr-1">
                    <Link to="/"><li className="px-2 hover:text-orange-400 hover:transition flex items-center"><IoHome className="mr-2"/> Home</li></Link>
                    <Link to="/AboutUS"><li className="px-2 hover:text-orange-400 hover:transition flex items-center"><IoInformationCircle className="mr-2"/>About Us</li></Link>
                    <Link to="/Contact"><li className="px-2 hover:text-orange-400 hover:transition flex items-center"><IoPersonOutline className="mr-2"/>Contact</li></Link>
                    <li>{user.name}</li>
                    <li className="px-2 flex items-center"><IoCartSharp className="mr-2"/>Cart</li>                    
                    <Link to="/instamart"><li className="px-2 hover:text-orange-400 hover:transition flex items-center"><IoBagHandleSharp className="mr-2"/>InstaMart</li></Link>                    
                    {
                        (isloggedIn ? 
                            (<button onClick={()=>{
                                setIsLoggedIn(false)}}
                                className="bg-pink-700 text-white py-1 px-3 rounded-lg hover:transition hover:duration-300 hover:opacity-80 flex items-center">
                             <IoLogIn className="mr-2"/>Login</button>) :
                            (<button onClick={()=>{
                                setIsLoggedIn(true)}}
                                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:transition hover:duration-300 hover:opacity-80 flex items-center">
                             <IoLogOut className="mr-2"/>Logout</button>))
                    }
                </ul>                
            </div>            
        </div>
    )
}

/*Exporting this title */
/* Default export will work for only one thing */
export default Header;

//For exporting mulitple things we use named exports