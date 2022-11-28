import { useState } from "react";
import { createContext } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
const [account,setaccount] = useState();
const [person , setperson] = useState({});
const [text , settext] = useState('');
const [users,setUsers] = useState([]);
return (
    <AccountContext.Provider value={{
        account,
        setaccount,
        person,
        text , 
        users,
        setUsers,
        settext,
        setperson
    }}>
          {children}
    </AccountContext.Provider>
);
}

export default AccountProvider ;