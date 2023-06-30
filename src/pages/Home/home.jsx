import { useContext, useState } from "react"
import { PostContext } from "../../contexts/postContext"
import { PostCard } from "../../components/PostCard/postCard";
import {createPost} from '../../utils/createPost';

import './home.css';
import { AuthContext } from "../../contexts/authContext";

export function Home(){
    const {authState} = useContext(AuthContext);
    const {postState, postDispatch} = useContext(PostContext)
    const [inputText, setInputText] = useState('');

    const onPostClick = async(inputText,token) =>{
        try{
            const {data, status} = await createPost(inputText,token);
            if(status===201){
                postDispatch({type:'ADD_NEW_POST', payload:data.posts.reverse()});
                setInputText('');
            }
        }catch(e){
            console.log(e);
        }
     }

    return (
        <div>
            <div className='display-content'>
             <div className='content-heading'>Home page</div>
            </div>

            <div className="main-content">
                <div className="create-post">
                    <textarea placeholder="write a post" className="text-area" value={inputText} onChange={(e)=> setInputText(e.target.value)}></textarea>
                    <button onClick={() => onPostClick(inputText,authState.token)}>Post</button>
                </div>
                <div>
                    <ul>
                        {
                            postState.posts.map(post => <PostCard post={post} key={post.id}/>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}