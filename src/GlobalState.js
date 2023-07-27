import { createContext } from "react"
import AdminApi from "./api/AdminApi";
import SubjectsApi from "./api/SubjectsApi";
import UsersApi from "./api/UsersApi";


export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    let token = JSON.parse(JSON.stringify(localStorage.getItem('token')))


    const state = {


        AdminApi: AdminApi(),
        token: token,
        SubjectsApi: SubjectsApi(),
        UsersApi: UsersApi()
    
    }

        return(
            <GlobalState.Provider value={state}>
                {children}
            
            </GlobalState.Provider>
        )
            
    }
    
