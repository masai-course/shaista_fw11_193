import { ADD_COUNT,SUB_COUNT,ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_ERROR, ADD_TODO_LOADING} from "./actionsType"

export const addCount = (data) => ({type: ADD_COUNT,payload:data});
export const subCount = (data) => ({type: SUB_COUNT,payload:data});
export const addTodo = (data) => ({type: ADD_TODO,payload:data});
export const addTodoSuccess = (data) => ({type:ADD_TODO_SUCCESS
,payload:data})
export const addTodoLoading = () =>({type:ADD_TODO_LOADING})
export const addTodoError = (err) => ({type: ADD_TODO_ERROR,payload:err})
