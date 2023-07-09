import './profileCard.css';
import { PostCard } from '../PostCard/postCard';
import { EditProfileModal } from './editProfileModal';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';

export function ProfileCard({userDetails, userPosts}){
    const {authState} = useContext(AuthContext);
    const {avatar,username,firstName,bio,website}  = userDetails;
    const [hideEdit,setHideEdit] = useState(true);

    return (
        <div>
            <img src={avatar} alt={username} className="profile-avatar"/>
            <div className="user-heading">
              <h2>{firstName}</h2>
              {authState.user.username === username &&
              <button className='edit-profile-btn' onClick={()=>setHideEdit(false)}>Edit Profile</button>}
              {!hideEdit && 
                <div className="modal">
                  <EditProfileModal hideEdit={hideEdit} setHideEdit={setHideEdit} userDetails={userDetails}/>
                </div>
              } 
            </div>
            <p>@{username}</p>

            <div className='bio-info'>
               <p>{bio}</p>
               <p><b>{website}</b></p>
            </div>
            <ul>
              {
                userPosts.map(post => <PostCard post={post} key={post.id}/>)
              }
            </ul>
        </div>
    )
}