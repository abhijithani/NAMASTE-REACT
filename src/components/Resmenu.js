import { useParams } from "react-router-dom";
import { RESMENU_IMG } from "../utlis/constants";
import Shimmer2 from "./shimmer2";
import useResmenu from "../utlis/useResmenu";
const Resmenu = () => {

  const { resId } = useParams();

  const resinfo = useResmenu(resId);

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
    <div className="resmenu-container m-15 mx-100">
      <div className="resmenu-header m-7 bg-amber-200 p-8 rounded-xl">
        <h1 className="font-semibold"> {name} </h1>
        <h3>{cuisines.join(" ,")} </h3>
        <p>
          <span>{avgRating} STARS</span>
          <span style={{ marginLeft: "20px" }}>RS {costForTwo / 100} for two</span>
        </p>
      </div>
      <div className="dish-container m-10">
        {itemCards.map((item) => (

          <div className="dishes flex  justify-between m-7 bg-amber-200 p-4 items-center rounded-xl "
            key={item.card.info.id}>

            {item.card.info.name} -{" RS"} {item.card.info.price / 100}

            <div className="menu_pic">
              <img src={RESMENU_IMG + item.card.info.imageId}
              className="resmenu_img  w-24"
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