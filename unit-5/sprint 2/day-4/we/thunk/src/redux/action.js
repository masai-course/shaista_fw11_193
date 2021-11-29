import {INC_COUNT,DEC_COUNT,ADD_TODO,ADD_TODO_SUCCESS,ADD_TODO_LOADING,ADD_TODO_ERROR,GET_TODO_ERROR,GET_TODO_LOADING,GET_TODO_SUCCESS} from "./actionTypes";
import axios from "axios";
export const incCount = (data) =>({type:INC_COUNT,payload:data});

export const decCount = (data) =>({type:DEC_COUNT,payload:data});

export const addTodo = (todo) =>({type:ADD_TODO,payload:todo})

export const addTodoLoading =()=>({type:ADD_TODO_LOADING})
export const addTodoSucess =(data)=>({type:ADD_TODO_SUCCESS,payload:data})
export const addTodoError =(e)=>({type:ADD_TODO_ERROR,payload:e})

export const getTodoLoading =()=>({type:GET_TODO_LOADING})
export const getTodoSuccess =(data)=>({type:GET_TODO_SUCCESS,payload:data})
export const getTodoError =(e)=>({type:GET_TODO_ERROR,payload:e})

export const getTodos = () => async (dispatch) =>{
     dispatch(getTodoLoading())
        try{
            const {data} = await axios.get("http://localhost:3001/todos")
            dispatch(getTodoSuccess(data));
        }catch(e){
            dispatch(getTodoError(e))
        }   
}