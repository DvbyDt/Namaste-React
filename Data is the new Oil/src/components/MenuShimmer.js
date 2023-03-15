const MenuShimmer = () => {
    return(
        <>
            <div className="animate-pulse mt-10 mb-10 p-10 flex justify-evenly bg-gray-700">
                <div className="h-60 w-80 bg-gray-500" ></div>
                <div className="flex flex-col justify-evenly -ml-20">
                    <div className="w-20 h-10 bg-gray-600"></div> 
                    <div className="w-20 h-10 bg-gray-600"></div>
                    <div className="w-52 h-10 bg-gray-600"></div>            
                </div>
                <div className="animate-pulse flex flex-col justify-evenly  pr-5 w-96 bg-gray-500">
                </div>
            </div>
        </>
    )
}

export default MenuShimmer