import {loadData,saveData} from '../utils/localStorage'
import {ADD_TODO} from './actionType';

const initialState = {
    todo:loadData("todo")||[
        {
            id:1,
            title:"Learn Redux",
            status:false
        }
    ]
}
export const reducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case ADD_TODO:{
            const updatedTodo = [...state.todo,payload]
            saveData("todo",updatedTodo);
            return {
                ...state,
                todo: updatedTodo
            }
        }
        
        default:
            return state;
    }
}