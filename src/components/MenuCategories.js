import { useState } from "react";
import ItemCards from "./ItemCards";

const MenuCategories = ({data}) => {
// console.log(data);

const [showItems , setshowItems]  = useState(false)

const handleClick = () => {
    setshowItems(!showItems);
    
}

    return ( 
        <div className="m-3 bg-gray-100 py-4 px-4 rounded-md shadow-2xl">  
        <div className="  flex justify-between font-bold text-lg cursor-pointer" onClick={handleClick}>
            <span>{data?.title}  ({data.itemCards.length})</span>
            <span>⬇️</span>

        </div>
       <div>
           { showItems && <ItemCards items = {data?.itemCards} /> } 
       </div>
         
        </div>
    ) 
}

export default MenuCategories;