import { LOGIN_FAILURE,LOGIN_SUCCESS } from "./actionType";
function loginSucess({token}){
    return{
        type:LOGIN_SUCCESS,
        payload:token
    }
}
function loginFail({err}){
    return{
        type:LOGIN_FAILURE,
        payload:err
    }
}
export {loginFail,loginSucess}