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
    return (
        <div className="header">
            <Title />
            <span className="location"><b>Location:</b> Meerut, Uttar Pradesh, India</span>
            <div className="nav-items">
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>            
        </div>
    )
}

/*Exporting this title */
/* Default export will work for only one thing */
export default Header;

//For exporting mulitple things we use named exports