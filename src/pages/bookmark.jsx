import { useContext } from "react"
import { PostContext } from "../contexts/postContext"
import { PostCard } from "../components/PostCard/postCard";

export function Bookmark(){
    const {postState} = useContext(PostContext);
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
                            postState.bookmarks?.map(post => <PostCard post={post} key={post.id}/>)
                        }
                    </ul>
                  : <p>Empty bookmarks</p>
                 }
                </div>
            </div>
            
        </div>
    )
}