import { IMG_CDN_URL } from "../utlis/constants";

const ResturantCard = ({ resData }) => {
  const info = resData?.card?.card?.info;

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
    <div className="res-card">
      <div className="res-logo">
        <img 
          className="res-logo-image"
          alt="resimage"

        src={IMG_CDN_URL + cloudinaryImageId}
      />
      </div>
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4> {avgRating} Stars</h4>
      <h4> {sla?.slaString}</h4>
      <h4> {costForTwo/100}FOR TW0</h4>
    </div>
  );
};

export default ResturantCard;