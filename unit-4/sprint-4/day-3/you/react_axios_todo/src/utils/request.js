import Axios from 'axios';

const todo = Axios.create({
    baseURL:"http://localhost:3001/todo",
    hearders:{ 
        authentication:"shaista"
    }
})

export {todo}