import { ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, SUB_COUNT } from "./actionsType";
import { ADD_COUNT } from "./actionsType";
const initState ={
    count:0,
    todos:[],
}
export const reducer = (state = initState, {type,payload}) =>{
    switch (type){
        case ADD_COUNT:
        return{
            ...state,
            count: state.count +payload,
        }
        case SUB_COUNT:
        return{
            ...state,
            count: state.count - payload,
        }
         case ADD_TODO:
        return{
            ...state,
            todos: [...state.todos,  payload]
        }
         case ADD_TODO_LOADING:
        return{
            ...state,
            todos:{
                ...state.todos,
                     loading:true,
            },
         
        }
         case ADD_TODO_SUCCESS:
        return{
             ...state,
            todos:{
                ...state.todos,
                       data: [...state.todos.data,  payload]
            },
        }
         case ADD_TODO_ERROR:
        return{
          ...state,
            todos:{
                ...state.todos,
                    error:true,
            },
        }
        default:
        return state;
    }
}