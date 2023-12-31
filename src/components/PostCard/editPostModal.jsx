import { useContext, useState } from 'react';
import './postCard.css';
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext,PostContext } from '../../index';
import {updatePostHandler} from '../../utils/updatePostHandler';

export function EditPostModal({post,showEditPost,setShowEditPost}){
    const {authState} = useContext(AuthContext);
    const {postDispatch} = useContext(PostContext);

    const toggleShowEditPost = ()=> setShowEditPost(!showEditPost);
    const {_id,content} =post
    const [postContent,setPostContent] = useState(content);


    return (
        <div onClick={(event)=>event.stopPropagation() }>  
          <div className="overlay" onClick={toggleShowEditPost}></div>
          <div className="modal-content" key={_id}>
             <div className="modal-heading">
               <h3>Edit your Post </h3>  
               <CloseIcon onClick={toggleShowEditPost}/>
              </div>
              <textarea value={postContent} onChange={(e)=>setPostContent(e.target.value)}></textarea>
              <button onClick={()=>{
                updatePostHandler(authState.token,postDispatch,_id,postContent)
                toggleShowEditPost();
              }} className="update-post-btn">Update</button>
          </div>

        </div>
    )
}