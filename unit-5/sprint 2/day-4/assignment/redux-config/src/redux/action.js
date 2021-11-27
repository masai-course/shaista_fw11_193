import {ADD_TODO} from "./actionType.js";

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

