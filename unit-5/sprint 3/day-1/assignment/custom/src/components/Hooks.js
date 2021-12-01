
import { useFetch } from "./useFetch";
import { useMergeState } from "./useMerge";
export const Fetch = () => {
  const { data, error, loading } = useFetch("https://reqres.in/api/users");
  import { useMergeState } from "./useMerge";
  return loading ? (
    "Loading..."
  ) : error ? (
    "Error.."
  ) : (
    <div className="App">
      Hello World {data?.data[0].first_name}
    </div>
  );
}

export const useMergeState = (initState) => {
  return (
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

