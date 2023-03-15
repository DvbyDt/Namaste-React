//import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import ProfileClass from "./ProfileClass"
import React from "react"
//Using Context inside class Component
import UserContext from "../utils/UserContext"
//rewriting this whole component as a Class based component
// const AboutUs = () => {
//     return (
//     <div>
//         <h1>This is about us Page.</h1>
//         <p>it contains info about React-Router-Dom and Outlets etc for designing SPAs</p>
//         { /* <Outlet /> 
//         Simply importing the Profile Functional Component */}
//         <Profile name="Dhruv"/> 
//         <ProfileClass name="DhruvClass"/>
//     </div>
//     )
// }

class AboutUs extends React.Component{
    constructor(props){
        super(props)
        //console.log("Parent Constructor")
    }

    componentDidMount(){
        //console.log("Parent ComponentDidMount")
    }

    render(){
        //console.log("Parent render")
        return(
            <>
               {/* This is how to use Context inside of class based components as there is no useContext we make use of 
               UserContext.Consumer  and in the value have the object that we have i.e. user extracted.*/}
                <UserContext.Consumer>
                    {
                    ({user})=>{
                        return (<h1>{user.name} - {user.email}</h1>)
                     }
                    }
                </UserContext.Consumer>
                <div>
                    <h1>This is about us Page.</h1>
                    <p>it contains info about React-Router-Dom and Outlets etc for designing SPAs</p>
                    { /* <Outlet /> 
//         Simply importing the Profile Functional Component */}
                    <Profile name="Dhruv"/>
                    <ProfileClass name="firstChild"/>
                    {/* <ProfileClass name="secondChild"/> */}
                </div>
            </> 
        )
    }
}

export default AboutUs