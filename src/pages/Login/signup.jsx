import { useContext, useState } from 'react';
import {NavLink} from 'react-router-dom';

import './login.css';
import { AuthContext } from '../../contexts/authContext';

export function Signup(){
    const {userSignup} = useContext(AuthContext); 

    const [userDetails, setUserDetails] = useState({
        firstName: '', 
        lastName: '',
        email: '',
        username: '',
        password: ''
    });

    const signupHandler = (e) =>{
        e.preventDefault();
        userSignup(userDetails);
    }

    return (
           
        <div  className="login-container">
            <label>First name: </label>
            <input type="text" onChange={(e)=> setUserDetails(prev => ({...prev, firstName:e.target.value}))}/>
            <label>Last name: </label>
            <input type="text" onChange={(e)=> setUserDetails(prev => ({...prev, lastName:e.target.value}))}/>
            <label>Email: </label>
            <input type="text" onChange={(e)=> setUserDetails(prev => ({...prev, email:e.target.value}))}/>
            <label>Username </label>
            <input type="text" onChange={(e)=> setUserDetails(prev => ({...prev, username:e.target.value}))}/>
            <label>Password: </label>
            <input type="password" onChange={(e)=> setUserDetails(prev => ({...prev, password:e.target.value}))}/>
            <button onClick={signupHandler}>Register</button>
            <div>
                <span>Already have an account? </span>
                <NavLink to='/login'>Login</NavLink>
            </div>
            
        </div>
    )
}