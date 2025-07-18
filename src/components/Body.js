import React, { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer" ;
import { Link } from "react-router-dom";

const Body = () => {
  //local state variable - super powerfull variable
  const [ListOfRestaurants, setListOfResturants] = useState([]);
  const [FilteredListOfRestaurants , setFilteresListOfRestaurant] = useState([])

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/search/v3?lat=9.9406&lng=76.2653&str=kochi&trackingId=undefined&submitAction=ENTER&queryUniqueId=1cc348be-b2a2-27ae-bb1f-26cc7bb59e34&selectedPLTab=RESTAURANT "
    );
    const json = await data.json();

    console.log(json);
    setListOfResturants(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
    setFilteresListOfRestaurant(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards)
  };

  //conditional rendering

  return ListOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter"> 
        <div className="search">
          <input type="search" 
            className="search_box"
            value={searchText}
            onChange={(e) => {
             setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() =>{
              console.log(searchText);
              
              const filteredList = ListOfRestaurants.filter((res) => 
                res?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              )

              setFilteresListOfRestaurant(filteredList);
            }
          }

          >search</button>
        </div>
        <button className="filter_btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res?.card?.card?.info?.avgRating > 4
            );
           setFilteresListOfRestaurant(filteredList)

          }}
        >Top Rated Resturants</button>
      </div>

      <div className="res-container">
        {FilteredListOfRestaurants.map((restaurant) => (

          <Link
          to = {"/restaurants/" + restaurant?.card?.card?.info?.id}
          key={restaurant?.card?.card?.info?.id}
          className="res-links"
          
          >
           <ResturantCard
             key={restaurant?.card?.card?.info?.id}
            resData={restaurant}
          />
          </Link>
         
        ))}

      </div>
    </div>
  )
}

export default Body; 
