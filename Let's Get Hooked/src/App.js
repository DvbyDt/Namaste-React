import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./Components/Footer";

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
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);




