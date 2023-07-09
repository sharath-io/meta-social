import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';

import {postReducer} from '../reducers/postReducer';
import { AuthContext } from "./authContext";

export const PostContext = createContext();

export function PostProvider({children}){
    const {authState} = useContext(AuthContext);
    const [postState, postDispatch] = useReducer(postReducer, {
        users:[],
        posts:[],
        bookmarks:[],
    });

    const getAllUsers = async () =>{
        try{
            const {status,data} = await axios.get('/api/users');
            if(status===200)
              postDispatch({type:'SET_ALL_USERS', payload: data.users});
        }catch(e){
            console.log(e);
        }
    }

   const getAllPosts = async () =>{
    try{
        const {status,data} = await axios.get('/api/posts');
        if(status===200){
            postDispatch({type:'SET_ALL_POSTS', payload: data.posts})
        }
    }catch(e){
        console.log(e);
    }
   }

   const getAllBookmarks = async () =>{
    try{
        const {status,bookmarks}  = await axios.get('/api/users/bookmark');
        if(status ===200){
            postDispatch({type:'GET_ALL_BOOKMARKS',payload:bookmarks})
        }
    }catch(e){
        console.log(e);
    }
   }

   useEffect(()=>{
    getAllUsers();
    getAllPosts();
    getAllBookmarks();
   },[authState.token])


    return (
        <PostContext.Provider value={{postState, postDispatch}}>
         {children}
        </PostContext.Provider>
    )
}