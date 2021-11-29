import {createStore,combineReducers} from 'redux';
import {Authreducer} from "../auth/reducer.js"
import {reducer} from "./reducer.js"
const rootReducer = combineReducers({
    auth:Authreducer,
    app:reducer
})
// import {reducer} from "./reducer.js";
export const store = createStore(rootReducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())