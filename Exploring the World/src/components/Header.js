import { useState } from "react"

const Title = () => {
    return(
        <div>
            <a href="/">
                <img 
                    className="logo"
                    src="https://i.pinimg.com/280x280_RS/40/19/e5/4019e5bef4a45510fdf497a5c8615384.jpg" 
                    alt="logo" 
                />
            </a>
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
    return (
        <div className="header">            
            <Title />
            {/* <h1>{titleName}</h1>
            <button className="exampleTest" onClick={()=>{
                if(titleName === "Khana Khazana"){
                    setTitleName("new Food App")
                }else{
                    setTitleName("Khana Khazana")
                }
                
            }}>Click Me </button> */}
            <span className="location"><b>Location:</b> Meerut, Uttar Pradesh, India</span>
            <div className="nav-items">
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    {
                        (isloggedIn ? 
                            (<button onClick={()=>{
                                setIsLoggedIn(false)}}>
                             Login</button>) :
                            (<button onClick={()=>{
                                setIsLoggedIn(true)}}>
                             Logout</button>))
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