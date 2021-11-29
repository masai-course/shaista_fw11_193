import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export function Data(){
    const isAuth = useSelector((state)=>state.isAuth)
    console.log(isAuth);
  //  const token = useSelector((state)=>state.token)
    if(!isAuth){
        return<Redirect to = "/login"/>
    }
    else{
        return(
            <div>
           <Data/>
            </div>
        )
    }
}