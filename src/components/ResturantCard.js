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

  const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

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
      <h4> {costForTwo}</h4>
    </div>
  );
};

export default ResturantCard;