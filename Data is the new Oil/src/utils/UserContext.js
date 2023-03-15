import { createContext } from "react";
const UserContext = createContext({
    user: {
    name:"Dummy",
    email:"dummy@dummy.com"
   }
})

//React doesn't track the name of our Context Provider. So, to assign the name of our context provider we just do:
UserContext.displayName = "UserContext";
export default UserContext