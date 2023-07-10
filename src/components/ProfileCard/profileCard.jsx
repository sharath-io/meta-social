import './profileCard.css';
import { PostCard } from '../PostCard/postCard';
import { EditProfileModal } from './editProfileModal';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { PostContext } from '../../contexts/postContext';
import { isFollowed } from '../../utils/isFollowed';
import {followUserHandler} from '../../utils/followUserHandler';
import {unFollowUserHandler} from '../../utils/unFollowUserHandler';

export function ProfileCard({profileData, userPosts}){
    const {authState} = useContext(AuthContext);
    const {postState,postDispatch} = useContext(PostContext);
    const {_id,avatar,username,firstName,bio,website,followers,following}  = profileData;
    const [hideEdit,setHideEdit] = useState(true);

    return (
        <div>
            <img src={avatar} alt={username} className="profile-avatar"/>
            <div className="user-heading">
              <h2>{firstName}</h2>
              {authState.user.username === username 
              ? <button className='edit-profile-btn' onClick={()=>setHideEdit(false)}>Edit Profile</button>
              : <button className='edit-profile-btn'
                       onClick={()=> {
                                 isFollowed(authState.user,postState.users,_id)
                                ? unFollowUserHandler(authState.token,_id,postDispatch)
                                : followUserHandler(authState.token,_id,postDispatch) }
                       }>{isFollowed(authState.user,postState.users,_id) ? 'Unfollow' : 'follow'}</button>
            }
              {!hideEdit && 
                <div className="modal">
                  <EditProfileModal hideEdit={hideEdit} setHideEdit={setHideEdit} profileData={profileData}/>
                </div>
              } 
            </div>
            <p>@{username}</p>

            <div className='bio-info'>
               <p>{bio}</p>
               <p><b>{website}</b></p>
               <div className="followers-following">
                <p><b>{following?.length}</b>Following</p>
                <p><b>{followers?.length}</b>Followers</p>
               </div>
            </div>
            
            <ul>
              {
                userPosts.map(post => <PostCard post={post} key={post.id}/>)
              }
            </ul>
        </div>
    )
}