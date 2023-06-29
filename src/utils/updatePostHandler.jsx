import axios from 'axios';


export const updatePostHandler = async(encodedToken,postDispatch,postId,postContent) =>{
    try{
        const {data, status} = await axios.post(`/api/posts/edit/${postId}` , 
        {
            postData:{
                content:postContent
            },
        },
        {
            headers:{
                authorization: encodedToken
            }
        });
        if(status===201){
            postDispatch({type:'EDIT_POST', payload:data.posts.reverse()});
        }
    }catch(e){
        console.log(e);
    }
 }