import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import registerService from "../services/registerService";
import User from "../type/user-types";

interface Props {
    children: ReactNode
}
interface AppContextType {
    users: User[];
    setUsers: Dispatch<SetStateAction<User[]>>;
}
export const AppContext = createContext<AppContextType>({
    users: [],
    setUsers: () => { },
})

export const AppProvider = ({ children }: Props) => {
    const [users, setUsers] = useState<User[]>([]);

    const getListUsers = async () => {
        const result = await registerService.getUser()
        setUsers(result.users)
    }

    useEffect(() => {
        getListUsers()
    }, [])

    return <AppContext.Provider value={{ users, setUsers }}>
        {children}
    </AppContext.Provider>

}