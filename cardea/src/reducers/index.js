// combineReducers
import { combineReducers } from "redux"

//imports 
import authReducer from "./auth"


const rootReducer = combineReducers({
    authReducer,
})

export default rootReducer