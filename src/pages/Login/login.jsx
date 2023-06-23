import { useContext, useState } from "react"
import {useNavigate} from 'react-router';
import { AuthContext}  from '../../contexts/authContext';

import './login.css';

export function Login(){
    const {userLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '',
        password:''
    })
   
    const guestUserData = {
        username: "adarshbalika",
        password: "adarshBalika123",
    }

    const loginHandler=(e)=>{
        e.preventDefault();
        userLogin(userData);
    }

    const guestLoginHandler = (e)=>{
        e.preventDefault();
        setUserData(guestUserData);
        userLogin(guestUserData);
    }

   
    return (
        <div className="login-container">
            <label>Username: </label>
            <input type="text" value={userData.username} onChange={(e)=> setUserData(prev => ({...prev, username:e.target.value}))}/>
            <label>Password: </label>
            <input type="password" value={userData.password} onChange={(e)=> setUserData(prev => ({...prev, password:e.target.value}))}/>
            <button onClick={loginHandler}>Login</button>
            <button onClick={guestLoginHandler}>Login as Guest</button>
            <div>
              <span>Don't have an account? </span>
              <button onClick={()=> navigate('/signup')}>Sign up here</button>
            </div>
        </div>
    )
}