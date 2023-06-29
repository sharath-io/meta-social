import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"

export const Logout =() =>{
    const {userLogout} = useContext(AuthContext);
    return (
      
            <div>
                     <button onClick={userLogout}>Logout</button>
            </div>

    )
}