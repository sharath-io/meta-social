import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios';

import { PostContext } from "../../contexts/postContext";
import { ProfileCard } from "../../components/ProfileCard/profileCard";

export function Profile(){
    const {username} = useParams();
    const {postState} = useContext(PostContext);
    const [profileData, setProfileData] = useState({});

    const userId = postState.users.find(user => user.username===username)._id

    const getUserDetails = async() =>{
        try{
            const {data, status} = await axios.get(`/api/users/${userId}`)
            if(status === 200){
                setProfileData(data?.user);
            }
        }catch(e){
            console.error(e);
        }
    }

    const userPosts = postState.posts.filter(post => post.username===profileData.username);

    useEffect(()=>{
        getUserDetails();
     // eslint-disable-next-line 
    },[username, postState.users]);
    
    return (
        <div>

            <div className='display-content'>
             <div className='content-heading'>@{profileData.username} ({userPosts.length} posts)</div>
            </div>

            <div className="main-content">
               <div>
                <ProfileCard profileData={profileData} userPosts={userPosts} />
               </div>  
            </div>
        </div>
    )
}








/*
key={profileData._id}
*/