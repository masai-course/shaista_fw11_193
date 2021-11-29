import {useDispatch,useSelector} from "react-redux"
import {incCount,decCount} from "../redux/action"
export const Counter=()=>{
    const dispatch = useDispatch();
    const state = useSelector(store=>store.count)
    return (<div>
        <h1>Counter:{state}</h1>
        <button onClick={
            ()=>{dispatch(incCount(1))}
        }>Add 1</button>
        <button onClick={()=>{dispatch(decCount(1))}}>Sub 1</button>
    </div>)
}