import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/contextProvider.jsx";

export default function guestLayout(){
    const {token}= useStateContext();
    if (token){
        return <Navigate to={"/"}/>
    }
    return(
        <div>
            <div>
            guest
            </div>
            <Outlet/>
        </div>
    )
}
