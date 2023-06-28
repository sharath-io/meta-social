import { createContext, useEffect, useReducer } from "react";
import axios from 'axios';

export const PostContext = createContext();


const postReducer = (postState,action) =>{
    switch(action.type){
        case 'INITIAL_POSTS': return {...postState, posts: action.payload}
        case'ADD_NEW_POST': return {...postState,posts:action.payload}
        case 'GET_ALL_BOOKMARKS': return {...postState,bookmarks:action.payload}
        default: return postState;
    }

}

export function PostProvider({children}){
    const [postState, postDispatch] = useReducer(postReducer, {
        posts:[],
        bookmarks:[]
    })


   const getAllPosts = async () =>{
    try{
        const {status,data} = await axios.get('/api/posts');
        if(status===200){
            postDispatch({type:'INITIAL_POSTS', payload: data.posts})
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
    getAllPosts();
    getAllBookmarks();
   },[])


    return (
        <PostContext.Provider value={{postState, postDispatch}}>
         {children}
        </PostContext.Provider>
    )
}