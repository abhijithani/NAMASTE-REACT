
import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 * - Logo
 * - Nav items
 * Body
 * -reasturants container
 * -resstuaranst cards
 * Header
 * -Copyright
 * -links
 * -adderess
 * -contact
 * 
 * 
 *  
 * 
 */


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"
          src= "https://cbx-prod.b-cdn.net/COLOURBOX38603643.jpg?width=800&height=800&quality=70" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

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

}

const resList = [
   {
    id: "7",
    name: "Pizza Hub",
    cuisines: ["Pizza", "Italian", "Desserts"],
    avgRating: 4.2,
    deliveryTime: "35 mins",
    costForTwo: "₹350 for two",
    imageId:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s",
    location: "Panampilly Nagar, Kochi",
  },
  {
    id: "1",
    name: "Burger Palace",
    cuisines: ["Burgers", "American", "Fast Food"],
    avgRating: 4.3,
    deliveryTime: "30 mins",
    costForTwo: "₹250 for two",
    imageId:
      "https://www.lurch.de/media/9a/7b/89/1693989554/Burger%20Classic%20Cheese.jpg?ts=1693989554",
    location: "MG Road, Kochi",
  },
  {
    id: "2",
    name: "Samosa Street",
    cuisines: ["Snacks", "Street Food", "Indian"],
    avgRating: 4.5,
    deliveryTime: "20 mins",
    costForTwo: "₹100 for two",
    imageId:
      "https://www.seattleindiabistro.com/wp-content/uploads/2023/09/Indian-Food-Samosa.png",
    location: "Edappally, Kochi",
  },
  {
    id: "3",
    name: "Kathi Roll Express",
    cuisines: ["Rolls", "North Indian", "Fast Food"],
    avgRating: 4.0,
    deliveryTime: "25 mins",
    costForTwo: "₹180 for two",
    imageId:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/ef9bnvcgs3a1wphqe4i5",
    location: "Palarivattom, Kochi",
  },

  {
    id: "5",
    name: "Kerala Sadya House",
    cuisines: ["Kerala", "South Indian", "Meals"],
    avgRating: 4.7,
    deliveryTime: "30 mins",
    costForTwo: "₹200 for two",
    imageId:
      "https://img.etimg.com/thumb/msid-113312973,width-640,height-480,imgsize-75668,resizemode-4/onam-sadhya-2024.jpg",
    location: "Kakkanad, Kochi",
  },
  {
  id: "6",
  name: "Spice Junction",
  cuisines: ["North Indian", "Chinese", "Tandoor"],
  avgRating: 4.5,
  deliveryTime: "25 mins",
  costForTwo: "₹400 for two",
  imageId: "https://piquantpost.com/cdn/shop/articles/L7mf1OnW7q9LU527FCVDM_cd6afb0e-86b1-442c-af2c-b72948582c9f_800x.jpg?v=1606230829",
  location: "Edappally, Kochi",
},
{
  id: "8",
  name: "Sushi World",
  cuisines: ["Japanese", "Asian", "Seafood"],
  avgRating: 4.7,
  deliveryTime: "40 mins",
  costForTwo: "₹700 for two",
  imageId: "https://tb-static.uber.com/prod/image-proc/processed_images/cf388115f51502ed8e887e611ea789b5/50446f64f31cbefe66558fc47f50a9d6.jpeg",
  location: "Panampilly Nagar, Kochi",
}

];


const Body = () => {
  return (
    <div className="body">
      <div className="search"> search</div>
      <div className="res-container">

       {resList.map((resturant) => (
        <ResturantCard key={resturant.id} resData = {resturant}/>
       ))}
       
      </div>
    </div>
  )
}


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
