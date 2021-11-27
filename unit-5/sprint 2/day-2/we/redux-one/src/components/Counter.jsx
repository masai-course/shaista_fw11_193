import { store } from '../store/store';
import {useDispatch, useSelector} from "react-redux"
import { addCount } from '../store/actions';

export const Counter=()=> {
  console.log(store)
 const dispatch = useDispatch();
 const state = useSelector( store => store.count)
  return (
    <div className="App">
      <h1>Count: {state}</h1>
      <button onClick={
        ()=>{
          dispatch(addCount(1));
        }
      }
      >Add 1</button>
      <button>Sub 1</button>
      </div>
  )}