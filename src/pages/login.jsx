
import { useContext } from "react"
import {useNavigate, useLocation} from 'react-router';
import { AuthContext}  from '../contexts/authContext';

export function Login(){
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    function handleLogin(){
        setIsLoggedIn(!isLoggedIn)
        navigate(location?.state?.from?.pathname);
    }
    
    return (
        <div>
            login first 
            <button onClick={handleLogin}>{isLoggedIn ? 'Logout' : 'login'}</button>
        </div>
    )
}