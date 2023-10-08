import { useParams,useNavigate } from "react-router"
import { useUser } from "../contexts/UserContext";
import { useEffect } from "react";

export function DashBoard(){
    const {id} = useParams();
    const {currentUser,setCurrentUser} = useUser();
    const navigate = useNavigate();
    useEffect(()=>{
        if(currentUser == null){
            navigate('/', {replace:true});
        }
    })
    
    return(
        <div className="title">
            <h1 className="text-center"><small>Dashboard</small></h1>
        </div>
    )
}