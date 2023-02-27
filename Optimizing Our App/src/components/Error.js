import { useRouteError } from "react-router-dom";//useRouteError is a hook.

const Error = () => {
    //This hook returns any error that occurs while loading or performing some operations in the page.
    const err = useRouteError();
    //console.log(err);
    return(
        <>
            <h1>OOPS!!</h1>
            <h2>Looks like something went wrong.....</h2>
            <h2>{err.status}</h2>
            <h3>{err.statusText}</h3>
        </>
    )
}

export default Error