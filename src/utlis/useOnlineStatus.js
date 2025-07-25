import { useEffect , useState } from "react";

const useOnlineStatus = () => {

const [useronline ,setuseronline] = useState(true);

    useEffect( () => {

        window.addEventListener("offline", (event) => {
            setuseronline(false);
        })

        window.addEventListener("online", (event) => {
            setuseronline(true);
         })
    },[])
    return useronline;
}
export default useOnlineStatus;  