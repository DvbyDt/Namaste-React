const Shimmer = () => {
    return(
        <>
         {/* Search Shimmer */}
             <div className="mt-16 mb-16 flex justify-center ml-12 mr-12 animate-pulse">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <input className="block bg-gray-600 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" name="search"/>
                </label>
                <button className="w-16 h-8 ml-10 bg-blue-900 text-white py-1 px-3 rounded-lg hover:transition hover:duration-300 hover:opacity-80">
                </button>
            </div>
          <div className="flex flex-wrap">           
            {Array(10).fill("").map((e,index)=>(   //This event is required because for every e there should be a different index.
            //If I just specify map(index) it won't work and show error that the key should be unique. 
            <div key= {index}>          
                <div className="animate-pulse flex-wrap flex w-64 h-[26rem] border-2 border-white-600 m-5 p-5 hover:shadow-lg hover:shadow-gray-300 transition ease-in-out delay-75 object-contain bg-gray-800">
                    <div className="w-50"></div>
                    <h2 className="font-bold text-2xl pt-5"></h2>
                    <p className="pt-2 pb-2 text-gray-500"></p>
                    <p className="text-indigo-700"></p>
                </div>
            </div>
            ))}
          </div>
        </>
    );
}

export default Shimmer