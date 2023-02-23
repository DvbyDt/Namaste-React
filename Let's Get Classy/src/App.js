import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./Components/Footer";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
//Creating Routes
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

/*
    Header
      - Logo
      - NavItems
        - About
        - Cart
    Body
       - SearchBar
       - restaurant  List
           - restaurant Card (many cards)
               - Image
               - Name
               - Rating
                - Cuisines
    
    Footer
        - links
        - contact us
        - copyright
*/

//Config Driven UI
const AppLayout = () => {
    return (
        <>
            <Header />
            {/*If I don't specify Outlet here it will just keep on showing me Header, Body and Footer
            even though I navigate to About Us and COntact Pages. */}            
            <Outlet />
            <Footer />
        </>
    )
}

//appRoutes will always be created below Applayout component because everything happens in a 
//sequential manner if you create it above it will not route to AppLayout because it hasn't been declared yet. 
const appRoutes = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        //It's like a wildcard if you enter a wrong path it will show the Error component be it: /xyz or/qweqwe OR /valid/safdasfasf
        errorElement: <Error />,
        children:[
         {
            path:"/",
            element:<Body/>,            
         },
         {
            path:"/AboutUs",
            element:<AboutUs />,
            //Creating nested Routes
            children:[
                {
                    path:"Profile", //If we do /profile then it will take it as localhost:/profile
                    //but if we want it to be added to the parent's path then just specify path:profile.
                    element:<Profile />
                }
            ]            
         },
         {
            path:"/Contact",
            element:<Contact/>
         },
         {
            //For Dynamic Routing
            path:"/restaurant/:resId",//This : is necessary as it provides useParmas hooks to use this id.
            element:<RestaurantMenu/>
         }
    ]
    },    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//This is used when you just want to render the AppLayout but we want to render based on the path.
//root.render(<AppLayout />);

//Therefore,we have to render using appRoutes
root.render(<RouterProvider router={appRoutes}/>)




