import { IMG_CDN_URL } from "../utlis/constants";

const ResturantCard = ({ resData }) => {
  const info = resData?.card?.card?.info;
  console.log(resData);
  
  if (!info) return null;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId
  } = info;

  return (
    <div className="res-card m-4 p-3 w-[230px] bg-white  hover:bg-gray-200 border-gray-100 rounded-xl shadow-xl" >
      <div className="res-logo">
        <img 
          className="res-logo-image rounded-2xl"
          alt="resimage"

        src={IMG_CDN_URL + cloudinaryImageId}
      />
      </div>
      <h2 className="font-semibold py-2 text-lg">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4> {avgRating} ⭐</h4>
      <h4> {sla?.slaString}</h4>
      <h4> {costForTwo/100} FOR TW0</h4>
    </div>
  );
};

//HIGHER ORDER COMPON

export const WithPromotedLabel = (ResturantCard) => {
   
  return (props) =>{
    return (
      <div>
        <label  className="absolute bg-black text-white rounded-lg m-2 p-2"> Promoted
        </label>
        <ResturantCard  {...props}/>
      </div>
    )
  }
}

export default ResturantCard;