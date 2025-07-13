const ResturantCard = (props) => {
  const{resData} = props;

  const {
    imageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData;
  return (
    <div className="res-card">
      <div className="res-logo">
        <img
          className="res-logo-image"
          alt="resimage"
          src={imageId} />

      </div>
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} </h4>
      <h4>{costForTwo} </h4>
    </div>
  )

};

export default ResturantCard;