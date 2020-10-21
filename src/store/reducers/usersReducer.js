const initState = {
    users: [
        {id: '1', name: 'Shakil', address: 'Batkhela'}
    ]
}
const usersReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_USER': 
        return {users: [action.payload, ...state.users]}
        case 'DELETE_USER': 
        const newUsers = state.users.filter(user => user.id !== action.id)
        return {users: newUsers}
        default: 
        return state;
    }
}
export default usersReducer;