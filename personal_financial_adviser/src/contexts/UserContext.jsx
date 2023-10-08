import {createContext, useState, useContext} from 'react';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);




export function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);

    return <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
    </UserContext.Provider>
}