import { createContext} from "react";
import usePersistState from '../hooks/usePersistState';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = usePersistState({});
    console.log(user)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;