import axios from 'axios';


export const deletePost = async (encodedToken,postId,postDispatch) =>{
    try{
        const {data, status} = await axios.delete(`/api/posts/${postId}` , 
        {
            
            headers:{
                authorization: encodedToken
            }
        });
        if(status===201){
            postDispatch({type:'DELETE_POST', payload:data.posts.reverse()});
        }
    }catch(e){
        console.log(e);
    }
 }