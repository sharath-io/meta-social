import { useContext, useState } from "react"

import { PostContext } from "../index";
import { getSortedPosts } from "../utils/getSortedPosts";
import { PostCard } from "../components/PostCard/postCard";

export function Explore(){
    const {postState} = useContext(PostContext);
    const [sortType,setSortType] = useState('Latest');

    const sortedPosts = getSortedPosts(postState.posts,sortType);

    const handleSortingChange = (event) => setSortType(event.target.value);

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
                            sortedPosts.map(post => <PostCard post={post} key={post.id}/>)
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