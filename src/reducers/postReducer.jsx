export const postReducer = (postState,action) =>{
    switch(action.type){
        case 'SET_ALL_POSTS': return {...postState, posts:action.payload}
        case 'ADD_NEW_POST': return {...postState, posts:action.payload}
        case 'GET_ALL_BOOKMARKS': return {...postState, bookmarks:action.payload}
        case 'EDIT_POST': return {...postState,posts:action.payload}
        case 'DELETE_POST': return {...postState,posts:action.payload}
        case 'SET_ALL_USERS' : return {...postState,users:action.payload}
        case 'EDIT_USER': return {...postState, users: postState.users.map((user) => 
                                       user._id===action.payload._id ? action.payload : user)}
        case 'UPDATE_USER': return {...postState, users: postState.users.map(user => 
                                       user._id===action.payload._id ? action.payload : user
             )}
        default: return postState;
    }
}