import { useContext } from "react";
import { useParams } from "react-router-dom"

import { PostContext } from "../../contexts/postContext";
import { ProfileCard } from "../../components/ProfileCard/profileCard";

export function Profile(){
    const {username} = useParams();
    const {postState} = useContext(PostContext);
    const userDetails = postState.users.find(user => user.username===username);
    
    return (
        <div>

            <div className='display-content'>
             <div className='content-heading'>@{userDetails.username}</div>
            </div>

            <div className="main-content">
               <div>
                <ProfileCard userDetails={userDetails} key={userDetails._id}/>
               </div>  
            </div>
        </div>
    )
}