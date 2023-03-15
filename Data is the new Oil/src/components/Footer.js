import { useContext } from "react"
import UserContext from "../utils/UserContext"
const Footer = () => {
    const { user } = useContext(UserContext)
    return (
        <div className="h-12 w-full bg-gray-700 mt-4 p-28">
            <h1 className="font-bold text-3xl text-white text-center ">Made by {user.name} - {user.email}❤</h1>
        </div>
    )
}

export default Footer