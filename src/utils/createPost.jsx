import axios from 'axios';

export const createPost =(inputText,token) =>{
    return axios.post('/api/posts', 
        {
            postData:{
                content: inputText
            },
        },
        {
            headers: {
                authorization: token,
              },
    })
}