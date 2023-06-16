import { useContext } from "react"
import {Navigate, useLocation} from 'react-router';

import { AuthContext } from ".."

export function RequiredAuth({children}){
    const {isLoggedIn} = useContext(AuthContext);
    const location = useLocation();
    return isLoggedIn ? (children) : <Navigate to="/login" state={{from: location}}/>
}