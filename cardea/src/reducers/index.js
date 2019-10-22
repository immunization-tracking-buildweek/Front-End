// combineReducers
import { combineReducers } from "redux"

//imports 
import { 
    authUserLoginReducer, 
    authUserRegisterReducer 
} from "./auth"


const rootReducer = combineReducers({
    authUserLoginReducer,
    authUserRegisterReducer
})

export default rootReducer