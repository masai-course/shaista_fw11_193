import {INC_COUNT, DEC_COUNT,ADD_TODO,ADD_TODO_LOADING,ADD_TODO_SUCCESS,ADD_TODO_ERROR,GET_TODO_LOADING,GET_TODO_ERROR,GET_TODO_SUCCESS} from "./actionTypes";
const initState = {
    count:0,
    todos:{
        loading:false,
        data:[],
        error:false
    }
}
export const reducer = (state=initState,{type,payload})=>{
    console.log(state);
    switch(type){
        case INC_COUNT:
            return {
                ...state,
                count:state.count + payload
            }
        case DEC_COUNT:
            return {
                ...state,
                count:state.count - payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos,payload]
            }
        case ADD_TODO_LOADING:
            return {
                ...state,
                todos:{
                    ...state.todos,
                    loading:true
                }
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos:{ 
                    ...state.todos,
                    loading:false,
                    data:[...state.todos.data,payload]
                }
            }
        case ADD_TODO_ERROR:
           return {
                ...state,
                todos:{
                    ...state.todos,
                    loading:false,
                    error:true
                }
            }
        case GET_TODO_LOADING:
            return {
                ...state,
                todos:{
                    ...state.todos,
                    loading:true
                }
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos:{ 
                    ...state.todos,
                    loading:false,
                    data:payload
                }
            }
        case GET_TODO_ERROR:
            return {
                ...state,
                todos:{
                    ...state.todos,
                    loading:false,
                    error:true
                }
            }
        default:
            return state
    }
}