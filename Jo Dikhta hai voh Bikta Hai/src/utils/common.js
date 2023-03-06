//Creating the filterData function
export function filterData(searchText,restaurants){
    //console.log("This is the searchText ",searchText);
    return restaurants.filter((restaurant) => {
        return restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    });
}