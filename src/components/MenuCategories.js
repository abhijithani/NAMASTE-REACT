import ItemCards from "./ItemCards";

const MenuCategories = ({data}) => {
// console.log(data);

    return ( 
        <div className="m-3 bg-gray-100 py-4 px-8 rounded-md shadow-2xl">  
        <div className="  flex justify-between">
            <span>{data?.title} </span>
            <span>⬇️</span>

        </div>
       <div>
            <ItemCards items = {data?.itemCards} />
       </div>
         
        </div>
    ) 
}

export default MenuCategories;