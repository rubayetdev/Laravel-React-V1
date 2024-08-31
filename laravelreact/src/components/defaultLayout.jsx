import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/contextProvider.jsx";

export default function defaultLayout(){
    const {user,token}= useStateContext();
    if (!token){
      return <Navigate to={"/login"}/>
    }
    return (
        <div>
            <div>
                default
            </div>
            <Outlet/>
        </div>
    )
}
