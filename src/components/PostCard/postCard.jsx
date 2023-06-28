import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import axios from 'axios';
import './postCard.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { PostContext } from '../../contexts/postContext';

export function PostCard({post}){
    const {_id,username,content} = post;
    const {authState} = useContext(AuthContext);
    const {postState,postDispatch} = useContext(PostContext);
    console.log(post._id);

    const postToBookmarks =(encodedToken,postId) => {
      return axios.post(`/api/users/bookmark/${postId}`,
                {},
                {
                  headers:{
                    authorization:encodedToken,
                }}
           );
         }
    const addToBookmarks = async(encodedToken,postId,postDispatch) =>{
      try{
        const {data,status} = await postToBookmarks(encodedToken,postId)
      if(status === 200){
        postDispatch({type:'GET_ALL_BOOKMARKS',payload:data.bookmarks.reverse()})
      }
      }catch(e){
        console.log(e);
    }}
    const removeAndGetBookmarks = (encodedToken,postId) =>{
      return axios.post(`/api/users/remove-bookmark/${postId}`,
                {},
                {
                  headers:{
                    authorization:encodedToken,
                }}
           );
         }
    const removeFromBookmarks = async(encodedToken,postId,postDispatch) =>{
      try{
        const {data,status} = await removeAndGetBookmarks(encodedToken,postId,postDispatch);
        if(status === 200){
          postDispatch({type:'GET_ALL_BOOKMARKS',payload:data.bookmarks.reverse()})
        }
      }catch(e){
        console.log(e);
      }
    }
    const bookmarkHandler =() =>{
      postState.bookmarks.filter((post) => post._id ===_id).length>0 
                    ? removeFromBookmarks(authState.token,_id,postDispatch)
                    : addToBookmarks(authState.token,_id,postDispatch);
     }





    return (
            <li className="post-card" key={_id}>
               <p>created by :  {username}</p>
               <p>{content}</p>
               <div className="action-items">
                 <button><FavoriteBorderIcon/></button>
                 <button><ChatBubbleOutlineIcon/></button>
                 <button onClick={bookmarkHandler}>
                  {
                    postState.bookmarks.filter((post) => post._id ===_id).length>0 
                    ? <BookmarkIcon style={{color: '#27ae60'}}/>
                    : <BookmarkBorderIcon/>
                  }
                  </button>
                 <button><ShareIcon/></button>
               </div>
            </li>
    )
}