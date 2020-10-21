import axios from "axios"
const fetchUsers = () => {
    return async (dispatch) => {
     try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({type: 'STORE_USERS', payload: res.data})
     } catch (error) {
         console.log(error)
     }
    }
}
export default fetchUsers;