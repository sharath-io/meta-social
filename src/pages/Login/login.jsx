import { useContext, useState } from "react"
import { AuthContext}  from '../../contexts/authContext';

import './login.css';
import { NavLink } from "react-router-dom";

export function Login(){
    const {authState,userLogin} = useContext(AuthContext);

    const [userData, setUserData] = useState({
        username: '',
        password:''
    })
   
    const guestUserData = {
        username: "adarshvardhan",
        password: "adarshvardhan123",
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

    if(authState.isLoggedIn)
      return <div></div>
   
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
              <NavLink to='/signup'>Sign up</NavLink>
            </div>
        </div>
    )
}