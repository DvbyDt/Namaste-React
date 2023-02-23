const Shimmer = () => {
    return(
        <div className="restaurantList">
            {Array(10).fill("").map((e,index)=>(   //This event is required because for every e there should be a different index.
            //If I just specify map(index) it won't work and show error that the key should be unique.           
                <div key= {index} className="ShimmerCard">
                    <div className="ShimmerImage"></div>
                    <h2 className="ShimmerName"></h2>
                    <p className="ShimmerCuisines"></p>
                    <p className="ShimmerTime"></p>
                </div>
            ))}
        </div>
    );
}

export default Shimmer