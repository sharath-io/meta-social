import { useContext, useState,useEffect } from "react"

import { PostContext } from "../index";
import { PostCard } from "../components/PostCard/postCard";

export function Explore(){
    const {postState} = useContext(PostContext);
    const [displayPosts,setDisplayPosts] = useState(postState.posts);
    const [sortType,setSortType] = useState('Latest');

    const getDisplayPosts = (sortType) =>{
        if(sortType === 'Latest')
        setDisplayPosts([...displayPosts].sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)))
        else
        setDisplayPosts([...displayPosts].sort((a,b) => b.likes.likeCount - a.likes.likeCount));
    }

     const handleSortingChange = (event) => setSortType(event.target.value);

     useEffect(()=>{
        getDisplayPosts(sortType);
        // eslint-disable-next-line
     },[sortType])

    return (
        <div>
            <div className='display-content'>
             <div className='content-heading'>Explore page</div>
            </div>

            <div className="main-content">
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
                            displayPosts.map(post => <PostCard post={post} key={post.id}/>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}













// export function Explore(){
//     return (
//         <div>

//             <div className='display-content'>
//              <div className='content-heading'>Explore page</div>
//             </div>

//             <div className="main-content">
//               <p> this is about explore page</p>
//             </div>

//         </div>
//     )
// }