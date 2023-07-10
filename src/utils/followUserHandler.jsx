import axios from 'axios';

export const followUserHandler = async (encodedToken,followUserId,postDispatch) =>{
    try{
        const {data,status} = await axios.post(`/api/users/follow/${followUserId}`,
        {},
        {
            headers: {
                authorization: encodedToken
            }
        })
        if(status===200){
            postDispatch({type:"UPDATE_USER", payload:data.followUser})
            postDispatch({type:"UPDATE_USER",payload:data.user})
        }
    }catch(e){
        console.log(e)
    }
}