import axios from 'axios';
import { createContext, useReducer } from "react";
import {useLocation,useNavigate} from 'react-router-dom';

export const AuthContext = createContext();

const authReducer = (state,action) =>{
  switch(action.type){
    case 'SET_LOGGEDIN_TRUE' : return {...state,isLoggedIn: action.payload}
    case 'SET_LOGGEDIN_FALSE' : return {...state,isLoggedIn: action.payload}
    case 'SET_USER' : return {...state,user:action.payload}
    case 'SET_TOKEN': return {...state,toekn:action.payload}
    default: return state;
  }
}

export function AuthProvider({children}){

  const location = useLocation();
  const navigate = useNavigate();


  const [authState,authDispatch] = useReducer(authReducer, {
    isLoggedIn:false,
    user:{},
    token:''
  })

  const userSignup = async (signUpData) => {
    try{
      const {status, data} = await axios.post('/api/auth/signup', signUpData);
      if(status===201){
        localStorage.setItem('token', data.encodedToken);
        authDispatch({type:'SET_LOGGEDIN_TRUE', payload: true})
        authDispatch({type:'SET_USER', payload:data.createdUser});
        authDispatch({type:'SET_TOKEN', payload:data.encodedToken});
        navigate('/');
      }
    }catch(e){
      console.error(e);
    }
  }


  const userLogin = async (loginData) =>{
    try{
      const {status, data} = await axios.post('/api/auth/login', loginData);
      if(status===200){
        localStorage.setItem('token', data.encodedToken);
        authDispatch({type:'SET_LOGGEDIN_TRUE', payload: true})
        authDispatch({type:'SET_USER', payload:data.foundUser});
        authDispatch({type:'SET_TOKEN', payload:data.encodedToken});
        navigate(location.state.from.pathname ? location.state.from.pathname : '/');
      }
    }catch(e){
      console.error(e);
    }
  }

  const userLogout =()=>{
    localStorage.removeItem('token');
        authDispatch({type:'SET_LOGGEDIN_FALSE', payload: false})
        authDispatch({type:'SET_USER', payload:{}});
        authDispatch({type:'SET_TOKEN', payload:''});
        navigate('/');
  }


    
    return (
      <AuthContext.Provider value={{ authState, userLogin, userSignup, userLogout}}>
        {children}
      </AuthContext.Provider>
    )
}