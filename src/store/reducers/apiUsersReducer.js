const initState = {
    allUsers: []
}
const apiUsersReducer = (state = initState, action) => {
    switch(action.type){
        case 'STORE_USERS': 
        return {allUsers: action.payload}
        default: 
        return state;
    }
}
export default apiUsersReducer;