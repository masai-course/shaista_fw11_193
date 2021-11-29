import { LOGIN_FAILURE,LOGIN_SUCCESS } from "./actionType";
const initialState={
    isAuth:token?true:false,
    token:token || ""
}
export const Authreducer = (state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_SUCCESS:
        return{
            ...state,
            isAuth:true,
            token:payload
        }
          case LOGIN_FAILURE:
        return{
            ...state,
            isAuth:false,
            token:""
        }
        default:
        return state;
    }
}