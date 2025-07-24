import { IMG_CDN_URL } from "../utlis/constants";
const ItemCards = ({items}) => {
console.log(items);

    return (
        <div>
           { items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 flex justify-between">
                <div className="w-9/12">
                    <h2>{item.card.info.name}</h2>
                    <span> ₹ {item.card.info.price/100}</span>
                    <h4>⭐{item.card.info.ratings.aggregatedRating.rating}</h4>
                    <p>{item.card.info.description}</p>
                </div>
                <div className="w-3/12"> 
                    <img src={IMG_CDN_URL +item.card.info.imageId} className="w-30"/>
                </div>
                

            </div>

           ))}
        </div>
    )
}
export default ItemCards;
