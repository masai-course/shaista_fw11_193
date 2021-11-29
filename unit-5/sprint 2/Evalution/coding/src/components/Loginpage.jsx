import { Login } from "./Login";
import {useDispatch,useSelector} from "react-redux"
import { loginSucess,loginFail } from "../auth/action";
//import {Redirect} from "react-router-dom"
export function Loginpage(){
    const isAuth = useSelector((state)=>state.isAuth);
    const dispatch = useDispatch();
    const handleLogin=({email,password})=>{
        if(password==="abcdef"){
            const action = loginSucess("faketoken")
            dispatch(action);
        }else{
            const action = loginFail("invalid")
            dispatch(action);
        }
    }
    if(isAuth){
        return <div>
        <Login handleLogin = {handleLogin}/>
        </div>
    }
    return (
        <div>
        <Login handleLogin = {handleLogin}/>
        </div>
    )
}