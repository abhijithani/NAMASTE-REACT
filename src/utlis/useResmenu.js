import { useState, useEffect } from "react";
import { RESMENU_URL } from "./constants";

const useResmenu = (resId) => {

    const [resinfo , setresinfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data =  await fetch(RESMENU_URL + resId);
        const json = await data.json();
        setresinfo(json.data);


    }

    return resinfo;
};
export default useResmenu;