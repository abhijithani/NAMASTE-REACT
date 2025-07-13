import { useState } from "react";
import ResturantCard from "./ResturantCard";
import resList from "../utlis/mockdata";

const Body = () => {
  //local state variable - super powerfull variable
  const [ListOfRestaurants, setListOfResturants] = useState(resList)

  return (
    <div className="body">
      <div className="filter">
        <button className="filter_btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfResturants(filteredList)

          }}
        >Top Rated Resturants</button>
      </div>

      <div className="res-container">
        {ListOfRestaurants.map((resturant) => (
          <ResturantCard key={resturant.id} resData={resturant} />
        ))}

      </div>
    </div>
  )
}

export default Body; 
