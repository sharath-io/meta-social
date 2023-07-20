import { useContext, useState } from "react"

import './home.css';
import { PostContext } from "../../index"
import {createPost} from '../../utils/createPost';
import { PostCard } from "../../components/PostCard/postCard";
import { AuthContext } from "../../contexts/authContext";
import { getSortedPosts } from "../../utils/getSortedPosts";

export function Home(){
    const {authState} = useContext(AuthContext);
    const {postState, postDispatch} = useContext(PostContext);
    const [inputText, setInputText] = useState('');
    const [sortType,setSortType] = useState('Latest');

    const loggedInUser = postState.users.find(({username})=> username===authState.user.username)

    const postsOfFollowed = postState.posts.filter(post => loggedInUser?.following.some(({username})=> username===post?.username)
                                    ||  post.username===loggedInUser?.username);

    const sortedPosts = getSortedPosts(postsOfFollowed,sortType);

    const handleSortingChange = (event) => setSortType(event.target.value);

    const isPostDisabled = inputText.trim()==='';

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
                    <button onClick={() => onPostClick(inputText,authState.token)} className={isPostDisabled ? "new-post-btn post-diabled" : "new-post-btn" } disabled={isPostDisabled}>Post</button>
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
                            sortedPosts.map(post => <PostCard post={post} key={post.id}/>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}