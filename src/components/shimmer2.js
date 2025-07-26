const Shimmer2 = () => {
    return (

        <div className="resmenu-container m-15 mx-100">
            <div className="resmenu-header m-7 h-18 bg-gray-100 p-14 rounded-xl shadow-xl"></div>

            {
                [...Array(8)].map((_, i) => <div key={i} className="shimmer_card2 m-4 bg-gray-100 py-4 px-12 rounded-md shadow-2xl"></div>)
            }
        
        </div>
    )
}

export default Shimmer2; 