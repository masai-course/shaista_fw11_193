import Axios from "axios";

const order = Axios.create({
    baseURL:" http://localhost:3002/item"
})
export {order};