import { useEffect, useState } from "react"
import { useUser } from "../contexts/UserContext"
export function Home(){
    const {currentUser, setCurrentUser} = useUser();
    const [currentUserName, setCurrentUserName] = useState(null);
    useEffect(()=>{
        if(currentUser!=null){
            setCurrentUserName(currentUser.data.first_name);
        }
    })

    return (
            <div>
                <h1>{currentUser!=null ? `Hello ${currentUserName}` : 'Home'}</h1>
            </div>

    )
}