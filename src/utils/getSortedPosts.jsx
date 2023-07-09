export const getSortedPosts = (posts,sortType) =>{
    if(sortType === 'Latest')
    return [...posts].sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    else
    return [...posts].sort((a,b) => b.likes.likeCount - a.likes.likeCount)
}