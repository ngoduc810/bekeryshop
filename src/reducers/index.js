import { combineReducers } from "redux"
import searchReduce from "./add"
import addCart from "./addCart";
import slideReduce from "./slidePage";
import userReducer from "./user";


const rootReducer = combineReducers({
    add: searchReduce,
    slide: slideReduce,
    user: userReducer,
    addCart: addCart,
})

export default rootReducer;