import axios from 'axios';

export const updateUserHandler = async(userDetails,encodedToken,postDispatch) => {
    console.log('before api call ', userDetails); // 
    try{
        const response = await axios.post('/api/users/edit',
        {userDetails},
        {
            headers:{
                authorization: encodedToken,
            }
        });
        if(response.status ===201){
            console.log('after api call', response);
            postDispatch({type:'EDIT_USER',payload: response.data.user})
        } 
    }catch(e){
        console.log(e);
    }
}