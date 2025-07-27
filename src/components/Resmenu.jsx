import { useParams } from "react-router-dom";
import { RESMENU_IMG } from "../utlis/constants";
import Shimmer2 from "./Shimmer2";
import useResmenu from "../utlis/useResmenu";
import MenuCategories from "./MenuCategories";
import { useState } from "react";

const Resmenu = () => {

  const { resId } = useParams();

  const resinfo = useResmenu(resId);

  const [showIndex, setshowIndex] = useState(null);

  if (resinfo == null) {
    return <Shimmer2 />;
  }


  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resinfo?.cards[2]?.card?.card?.info;


  const Categories = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  // console.log(Categories);

  if (!Array.isArray(Categories)) return <Shimmer2 />;


  console.log(resinfo);



  return (
    <div className="justify-center  ">
      <div className="resmenu-container m-15 mx-100">
        <div className="resmenu-header m-7 bg-white p-8 rounded-xl shadow-xl">
          <h1 className="font-semibold"> {name} </h1>
          <h3 className="text-orange-500 font-semibold underline">{cuisines.join(" ,")} </h3>
          <p>
            <span>{avgRating} ⭐</span>
            <span > ₹ {costForTwo / 100} for two</span>
          </p>
        </div>


        <div className="dish-container m-10">
          {Categories?.map((category, index) => (
            <MenuCategories
              key={category?.card?.card?.categoryId}
              data={category?.card?.card}
              showItems={index == showIndex ? true : false}
              setshowIndexx={() => setshowIndex((prev) => prev == index ? null : index)}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Resmenu;