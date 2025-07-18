import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { RESMENU_URL } from "../utlis/constants";
import { RESMENU_IMG } from "../utlis/constants";
import Shimmer2 from "./shimmer2";

const Resmenu = () => {
  const [resinfo, setresinfo] = useState();

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(RESMENU_URL + resId)

    const json = await data.json();
    console.log(json);
    setresinfo(json.data);
  }

  if (resinfo == null) return <Shimmer2 />;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    imageId
  } = resinfo?.cards[2]?.card?.card?.info;

  const { itemCards } = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];


  return (
    <div className="resmenu-container">
      <div className="resmenu-header">
        <h1> {name} </h1>
        <h3>{cuisines.join(" ,")} </h3>
        <p>
          <span>{avgRating} STARS</span>
          <span style={{ marginLeft: "20px" }}>RS {costForTwo / 100} for two</span>
        </p>
      </div>
      <div className="dish-container">
        {itemCards.map((item) => (
          <div className="dishes"

            key={item.card.info.id}>
            {item.card.info.name} -{" RS"} {item.card.info.price / 100}

            <div className="menu_pic">
              <img src={RESMENU_IMG + item.card.info.imageId}
              className="resmenu_img"
                alt={"image"}
              />
              
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Resmenu;