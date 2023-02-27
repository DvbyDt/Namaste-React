//import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import ProfileClass from "./ProfileClass"
import React from "react"
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
            <div>
                <h1>This is about us Page.</h1>
                <p>it contains info about React-Router-Dom and Outlets etc for designing SPAs</p>
                 { /* <Outlet /> 
//         Simply importing the Profile Functional Component */}
                <Profile name="Dhruv"/>
                <ProfileClass name="firstChild"/>
                {/* <ProfileClass name="secondChild"/> */}
             </div>
        )
    }
}

export default AboutUs