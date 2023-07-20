import {avatarDB} from './profileAssets/index';

export function EditProfileImage({setUpdatedProfileData, setShowProfileOptions}){
return (
    <div>
        <div className="profile-overlay" onClick={()=> setShowProfileOptions(false)}></div>
        <div className='profile-modal-content'>
            <h3>select avatar</h3>
            <ul className='avatar-list'>
             {
              avatarDB.map(profileAvatar => <li className='avatar-option'>
                <img src={profileAvatar} alt='profile' className='new-profile-option' onClick={()=>{
                         setUpdatedProfileData(prev => ({...prev,avatar: profileAvatar}))
                         setShowProfileOptions(false)
                }}
                         />
                 </li>)
             } 
            </ul>
        </div>
    </div>
)
}