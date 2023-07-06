import { useContext } from "react"
import { PostContext } from "../contexts/postContext"
import { PostCard } from "../components/PostCard/postCard";

export function Bookmark(){
    const {postState} = useContext(PostContext);

    const getPost =(id) => postState.posts?.find(post=> post._id===id);
    return (
        <div>

            <div className='display-content'>
             <div className='content-heading'>Bookmark page</div>
            </div>

            <div className="main-content">
               <p> this is about bookmark page</p>

                <div>
                    {postState.bookmarks?.length>0
                   ? <ul>
                        {
                            postState.bookmarks?.map(post => <PostCard post={getPost(post._id)} key={post._id}/>)
                        }
                    </ul>
                  : <p>Empty bookmarks</p>
                 }
                </div>
            </div>
            
        </div>
    )
}