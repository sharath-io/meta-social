import { useContext } from "react"
import { PostContext } from "../contexts/postContext"
import { PostCard } from "../components/PostCard/postCard";
import { AuthContext } from "../contexts/authContext";

export function Liked(){
    const {postState} = useContext(PostContext);
    const {authState} = useContext(AuthContext);
    const likedPosts = postState.posts.filter(post => post.likes.likedBy.find(user => user.username === authState.user.username))
    return (
        <div>

            <div className='display-content'>
             <div className='content-heading'>Liked posts</div>
            </div>

            <div className="main-content">

                <div>
                    {likedPosts?.length>0
                   ? <ul>
                        {
                            likedPosts?.map(post => <PostCard post={post} key={post.id}/>)
                        }
                    </ul>
                  : <p>Not liked anything ?</p>
                 }
                </div>
                
            </div>

            
            
        </div>
    )
}


/*
likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },


*/