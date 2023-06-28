import axios from 'axios';

export const addToBookmarks = async(encodedToken,postId,postDispatch) =>{
    try{
      const {data,status} = await axios.post(`/api/users/bookmark/${postId}`,
        {},
         {
          headers:{
            authorization:encodedToken,
         }}
       );
    if(status === 200){
      postDispatch({type:'GET_ALL_BOOKMARKS',payload:data.bookmarks.reverse()})
    }
    }catch(e){
      console.log(e);
  }}