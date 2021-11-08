import Axios from "axios";

const item = Axios.create({
    baseURL:" http://localhost:3001/item"
})
export {item};