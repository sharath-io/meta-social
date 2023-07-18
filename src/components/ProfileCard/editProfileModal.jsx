import { useContext,useState } from 'react';
import { AuthContext,PostContext } from '../../index';
import './profileCard.css';
import CloseIcon from '@mui/icons-material/Close';
import { updateUserHandler } from '../../utils/updateUserHandler';

export function EditProfileModal({hideEdit,setHideEdit,profileData}){
    const {authState} = useContext(AuthContext);
    const {postDispatch} = useContext(PostContext);
    const toggleShowEditProfile= ()=> setHideEdit(!hideEdit);

    const [updatedProfileData,setUpdatedProfileData] = useState({
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      username: profileData.username,
      bio: profileData.bio,
      website: profileData.website,
    })

    const handleUserDetailsChange =(e) =>{
      setUpdatedProfileData(user => ({...user,[e.target.name]: e.target.value}))
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
             <input type="text" value={updatedProfileData.firstName} name="firstName" onChange={handleUserDetailsChange} required/>
             <label>lastName</label>
             <input type="text" value={updatedProfileData.lastName} name="lastName" onChange={handleUserDetailsChange} />
             <label>username</label>
             <input type="text" value={updatedProfileData.username} name="username" onChange={handleUserDetailsChange} />
             <label>bio</label>
             <textarea type="text" value={updatedProfileData.bio} name="bio"  onChange={handleUserDetailsChange}></textarea>
             <label>Website</label>
             <input type="text" value={updatedProfileData.website} name="website"  onChange={handleUserDetailsChange}/>
             <button onClick={()=>{
;                updateUserHandler(updatedProfileData,authState.token,postDispatch)
                 toggleShowEditProfile();
             }} className="update-profile-btn">Update</button>
             </form>
          </div>
      </div>
    )
}