import {useState,useEffect} from "react";
import axios from "axios";
export const Slider = () => {
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    useEffect(()=>{
        axios.get("http://localhost:3001/questions",{
            params:{
                _page:page,
                _limit:1
            }
        })
        .then(
            res=>setData(res.data)
        ).catch(err=>{
            console.error(err)
        })
    },[page])
    return (<div>
            <div>
                {data.map((e,i)=><div key={i}>
                        <div data-testid="question" >{e.question}</div>
                        <div id="answer">{e.answer}</div>
                    </div>)
                }
            </div>

      <button  data-testid="prebtn"  onClick={()=>{setPage(page-1)}}>Prev</button>
      <button  data-testid="nextbtn" onClick={()=>{setPage(page+1)}}>Next</button>
    </div>)
}