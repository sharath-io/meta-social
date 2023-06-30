import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import axios from 'axios';
import './postCard.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { PostContext } from '../../contexts/postContext';
import {addToBookmarks} from '../../utils/addToBookmarks';
import {removeFromBookmarks} from '../../utils/removeFromBookmarks';
import { EditPostModal } from './editPostModal';
import {deletePost} from '../../utils/deletePost';

export function PostCard({post}){
    const {_id,username,content,likes} = post;
    const {authState} = useContext(AuthContext);
    const {postState,postDispatch} = useContext(PostContext);
    const [showOptions, setShowOptions] = useState(false);
    const [showEditPost,setShowEditPost] = useState(false);

    const bookmarkHandler =() =>{
      postState.bookmarks.filter((post) => post._id ===_id).length>0 
                    ? removeFromBookmarks(authState.token,_id,postDispatch)
                    : addToBookmarks(authState.token,_id,postDispatch);
     }

     const addLike = (encodedToken,postId) =>{
      return axios.post(`/api/posts/like/${postId}`,
      {},
      {
        headers:{
          authorization: encodedToken,
        }
      })
     }

     const addLikeToThePost = async(encodedToken,postId,postDispatch) => {
      try{
        const {data,status} = await addLike(encodedToken,postId);
        if(status === 201){
          postDispatch({type:'SET_ALL_POSTS', payload:data.posts})
        }

      }catch(e){
        console.log(e);
      }
     }

     const unLikeThePost = (encodedToken,postId) =>{
      return axios.post(`/api/posts/dislike/${postId}`,
      {},
      {
        headers:{
          authorization: encodedToken,
        }
      })
     }

     const  removeLikeToThePost = async(encodedToken,postId,postDispatch) => {
      try{
        const {data,status} = await unLikeThePost(encodedToken,postId);
        if(status === 201){
          postDispatch({type:'SET_ALL_POSTS', payload:data.posts})
        }

      }catch(e){
        console.log(e);
      }
     }


     const likeHandler = () =>{
      isLiked()
       ? removeLikeToThePost(authState?.token,_id,postDispatch)
       : addLikeToThePost(authState?.token,_id,postDispatch) 
     }

     const isLiked =() => likes?.likedBy.filter(({_id}) => authState.user._id === _id).length!==0

     const toggleShowOptions = ()=> setShowOptions(!showOptions)

    return (
            <li className="post-card" key={_id}>
              <div>
               <div className="post-edit-delete">
                 <p>created by : {username}</p>
                 {post.username === authState.user.username && <button className="edit-delete" onClick={toggleShowOptions}><MoreHorizIcon/></button>}
                 {
                  showOptions && 
                  <div className='options-modal'>
                    <button onClick={()=>{
                      setShowEditPost(true)
                      toggleShowOptions()
                    }}>Edit</button>
                    <hr/>
                    <button onClick={()=>{
                      deletePost(authState.token,_id,postDispatch)
                    }}>Delete</button>
                  </div>
                 }
                 </div>
                 { showEditPost && 
                  <div className="modal">
                    <EditPostModal post ={post} showEditPost={showEditPost} setShowEditPost={setShowEditPost}/>
                  </div>
                 }
                 
               </div>
               <p>{content}</p>
               <div className="action-items">
                <button onClick={likeHandler}>
                  {
                    isLiked()
                    ? <FavoriteIcon className='fill-icon'/>
                    : <FavoriteBorderIcon/>
                     
                  }{post?.likes?.likeCount}
                  </button>
                 
                 <button><ChatBubbleOutlineIcon/></button>
                 <button onClick={bookmarkHandler}>
                  {
                    postState.bookmarks.filter((post) => post._id ===_id).length>0 
                    ? <BookmarkIcon className='fill-icon'/>
                    : <BookmarkBorderIcon/>
                  }
                  </button>
                 <button><ShareIcon/></button>
               </div>
            </li>
    )
}