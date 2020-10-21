import {createStore, combineReducers, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import usersReducer from "./reducers/usersReducer"

import apiUsersReducer from "./reducers/apiUsersReducer"
const rootReducers = combineReducers({
    users: usersReducer,
    api: apiUsersReducer
})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export default store;