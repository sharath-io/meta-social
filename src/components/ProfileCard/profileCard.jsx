import './profileCard.css';
import { PostCard } from '../PostCard/postCard';

export function ProfileCard({userDetails, userPosts}){
    const {avatar,username,firstName,bio,website}  = userDetails;

    return (
        <div>
            <img src={avatar} alt={username} className="profile-avatar"/>
            <h2>{firstName}</h2>
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