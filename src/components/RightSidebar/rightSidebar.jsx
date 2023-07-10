import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './rightSidebar.css';
import { PostContext } from '../../contexts/postContext';
import { AuthContext } from '../../contexts/authContext';
import {isFollowed} from '../../utils/isFollowed';
import {followUserHandler} from '../../utils/followUserHandler';
import {unFollowUserHandler} from '../../utils/unFollowUserHandler';

export function RightSidebar(){
    const {postState, postDispatch} = useContext(PostContext);
    const {authState} = useContext(AuthContext);
    const navigate = useNavigate();

    const userData = postState.users.find(user => user.username === authState.user.username)

    const usersToFollow = postState.users.filter(user => user.username!== userData.username)
                           .filter(eachUser => !userData.following.find(data => data.username===eachUser.username))
   
    console.log('users to follow', usersToFollow);
   
    return (
        <div  className="right-sidebar">
            {
            usersToFollow.length > 0
            ?  <div>
                <h2>who to follow</h2>
                <ul>
                {
                   usersToFollow.map(({_id,username,firstName,avatar}) => 
                   <li className="user-follow-container" key={_id}   onClick={()=> navigate(`/profile/${username}`)}>
                        <div className='user-details'>
                          <img src={avatar} alt={username} className="follow-avatar"/>
                          <div>
                           <p className="user-firstname">{firstName}</p>
                           <p>@{username}</p>
                          </div>
                        </div>
                        <button onClick={(e)=> {
                            e.stopPropagation();
                            isFollowed(userData,postState.users,_id)
                            ? unFollowUserHandler(authState.token,_id,postDispatch)
                            : followUserHandler(authState.token,_id,postDispatch)
                        }}>{isFollowed(userData,postState.users,_id) ? 'Unfollow' : 'follow'}</button>
                    </li>)
                }
             </ul>
             </div>
             : <h3>No  suggested users to follow</h3>
           }
        </div>
    )
}