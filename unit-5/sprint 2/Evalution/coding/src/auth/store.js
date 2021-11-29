import {createStore} from 'redux';
import { Authreducer } from './reducer';
export const store = createStore(Authreducer);
console.log(store.getState())