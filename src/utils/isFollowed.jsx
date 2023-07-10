export function isFollowed(loggedInUser,users,userId){
    return users?.find(({_id})=> _id===loggedInUser?._id)
                ?.following.find(({_id})=> _id===userId) 
            ? true
            : false
}