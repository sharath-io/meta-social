import { useContext } from 'react';
import './rightSidebar.css';
import { PostContext } from '../../contexts/postContext';
import { AuthContext } from '../../contexts/authContext';

export function RightSidebar(){
    const {postState} = useContext(PostContext);
    const {authState} = useContext(AuthContext);
    const usersToFollow = postState.users.filter(user => user.username!== authState.user.username);
    console.log(usersToFollow);
    return (
        <div  className="right-sidebar">
            <h2>who to follow</h2>
            <ul>
                {
                   usersToFollow.map(({id,username,firstName,avatar}) => 
                   <li className="user-follow-container" key={id}>
                        <div className='user-details'>
                          <img src={avatar} alt={username} className="follow-avatar"/>
                          <div>
                           <p>{firstName}</p>
                           <p>@{username}</p>
                          </div>
                        </div>
                        <button>Follow</button>
                    </li>)
                }
            </ul>
        </div>
        
    )
}