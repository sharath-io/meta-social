import { useContext, useState,useEffect } from "react"

import './home.css';
import { PostContext } from "../../index"
import {createPost} from '../../utils/createPost';
import { PostCard } from "../../components/PostCard/postCard";
import { AuthContext } from "../../contexts/authContext";

export function Home(){
    const {authState} = useContext(AuthContext);
    const {postState, postDispatch} = useContext(PostContext);
    const userPosts = postState.posts.filter(({username}) => username === authState.user.username);
    const [displayUserPosts,setDisplayUserPosts] = useState(userPosts);
    const [inputText, setInputText] = useState('');
    const [sortType,setSortType] = useState('Latest');


    const getDisplayPosts = (sortType) =>{
        if(sortType === 'Latest')
        setDisplayUserPosts([...displayUserPosts].sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)))
        else
        setDisplayUserPosts([...displayUserPosts].sort((a,b) => b.likes.likeCount - a.likes.likeCount));
    }

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

     const handleSortingChange = (event) => setSortType(event.target.value);

     useEffect(()=>{
        getDisplayPosts(sortType);
        // eslint-disable-next-line
     },[sortType])

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
                <div className="post-heading-section">
                   <h1>{`${sortType} Posts`}</h1>
                   <select onChange={handleSortingChange}>
                      <option value="Latest">Latest Posts</option>
                      <option value="Trending">Trending Posts</option>
                   </select>
                </div>

                <div>
                    <ul>
                        {
                            displayUserPosts.map(post => <PostCard post={post} key={post.id}/>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}