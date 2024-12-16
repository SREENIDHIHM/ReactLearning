import { useEffect, useState } from "react";
const useOnlineStatus = () =>{
    // check if online or offline

    const [onlineStatus ,setOnlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
        
    },[]);

    // boolean Value
    return onlineStatus;
}

export default useOnlineStatus;