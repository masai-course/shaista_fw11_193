import { useState } from "react"

export const useMergeState =() =>{
const initState = {
  username: "",
  email: "",
  password: "",
}
const [ state, setState ] = useState(initState)  

return(
  <>
      <form>
        <input placeholder="name" type="text"
          onChange={e => setState({ username: e.target.value })} />
        <input placeholder="email" type="email"
          onChange={e => setState({ email: e.target.value })} />
        <input placeholder="password" type="password"
          onChange={e => setState({ password: e.target.value })} />
        <input type="submit" value="Submit" />
      </form>
  </>
 
)

}