import { useContext,useState } from 'react';
import { AuthContext,PostContext } from '../../index';
import './profileCard.css';
import CloseIcon from '@mui/icons-material/Close';
import { updateUserHandler } from '../../utils/updateUserHandler';

export function EditProfileModal({hideEdit,setHideEdit,userDetails}){
    const {authState} = useContext(AuthContext);
    const {postDispatch} = useContext(PostContext);
    const toggleShowEditProfile= ()=> setHideEdit(!hideEdit);

    const [profileData,setProfileData] = useState({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      username: userDetails.username,
      bio: userDetails.bio,
      website: userDetails.website,
    })

    const handleUserDetailsChange =(e) =>{
      setProfileData(user => ({...user,[e.target.name]: e.target.value}))
    }

    return (
        <div onClick={(event)=>event.stopPropagation() }>  
          <div className="overlay" onClick={toggleShowEditProfile}></div>
          <div className="modal-content">
             <div className="modal-heading">
               <h3>Edit Your user Profile</h3>
               <CloseIcon onClick={toggleShowEditProfile}/>
             </div>
             <form className="edit-profile-form">
             <label>firstName</label>
             <input type="text" value={profileData.firstName} name="firstName" onChange={handleUserDetailsChange}/>
             <label>lastName</label>
             <input type="text" value={profileData.lastName} name="lastName" onChange={handleUserDetailsChange} />
             <label>username</label>
             <input type="text" value={profileData.username} name="username" onChange={handleUserDetailsChange} />
             <label>bio</label>
             <input type="text" value={profileData.bio} name="bio"  onChange={handleUserDetailsChange}/>
             <label>Website</label>
             <input type="text" value={profileData.website} name="website"  onChange={handleUserDetailsChange}/>
             <button onClick={()=>{
;                updateUserHandler(profileData,authState.token,postDispatch,)
                toggleShowEditProfile();
             }}>Update</button>
             </form>
          </div>
      </div>
    )
}