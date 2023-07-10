import axios from 'axios';

export const updateUserHandler = async(userData,encodedToken,postDispatch) => {
    try{
        const {data,status} = await axios.post(`/api/users/edit`,
        {userData},
        {
            headers:{
                authorization: encodedToken,
            }
        });
        if(status ===201){
            postDispatch({type:'EDIT_USER',payload: data.user})
        } 
    }catch(e){
        console.log(e);
    }
}