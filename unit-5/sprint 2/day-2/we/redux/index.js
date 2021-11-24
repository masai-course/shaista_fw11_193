 
 import { createStore } from "redux";
 class Store{
    constructor(reducer,initState){
        this.reducer = reducer
        this.state= initState
    }
    getState(){
        return this.state;
    }

dispatch(action){
    this.state = this.reducer(this.state, action)
}
}
//const {createStore} = require("redux")
const reducer = (state,{type,payload})=>{
    switch (type) {
        case "INC_COUNT":
             return{
                 ...state,
            count:state.count + payload,
        };
        case "DEC_COUNT":
             return{
                 ...state,
            count:state.count - payload,
        };
        case "ADD_TODO":
             return{
                 ...state,
            todos:[...state.todos,payload],
        };
            
    
        default:
            return {};
    }
   
}
const init ={count:0,todos:[]};
const store = createStore(reducer,init);
console.log(store.getState());
store.dispatch({type: "INC_COUNT",payload:1})
console.log(store.getState());
store.dispatch({type: "DEC_COUNT",payload:1})
console.log(store.getState());
store.dispatch({
    type:"ADD_TODO",payload:{id:1,status:false,title:"Learn Redux"}
})
console.log(store.getState());