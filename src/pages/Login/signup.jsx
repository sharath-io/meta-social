import { useContext, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

import './login.css';
import { AuthContext } from '../../contexts/authContext';

export function Signup(){
    const {userSignup} = useContext(AuthContext); 
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const toggleVisibility =() => setIsPasswordVisible(!isPasswordVisible);
    const toggleConfirmPassword =()=> setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    const [userDetails, setUserDetails] = useState({
        firstName: '', 
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword:'',
        avatar: 'https://i.pravatar.cc/150?img=11',
        backgroundImage: 'https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
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
            <div className='password-container'>
               <input type={isPasswordVisible ? 'text' : "password"} placeholder={isPasswordVisible ? "enter password" : "********"}
                  onChange={(e)=> setUserDetails(prev => ({...prev, password:e.target.value}))}/>
                 {isPasswordVisible ? <FaEye onClick={toggleVisibility} className='password-icon'/>  : <FaEyeSlash onClick={toggleVisibility} className='password-icon'/>} 
            </div>
            <label>Confirm Password: </label>
            <div className='password-container'>
              <input type={isConfirmPasswordVisible ? 'text' : "password"} placeholder={isConfirmPasswordVisible ? "enter password" : "********"}
                  onChange={(e)=> setUserDetails(prev => ({...prev, confirmPassword:e.target.value}))}/>
              {isConfirmPasswordVisible ? <FaEye onClick={toggleConfirmPassword} className='password-icon'/>  : <FaEyeSlash onClick={toggleConfirmPassword} className='password-icon'/>} 
            </div>
            <button onClick={signupHandler}>Register</button>
            <div>
                <span>Already have an account? </span>
                <NavLink to='/login'>Login</NavLink>
            </div>
            
        </div>
    )
}