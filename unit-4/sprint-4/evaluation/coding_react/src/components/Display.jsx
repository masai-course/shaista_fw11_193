import { useState } from "react";
import { item } from "./fetch";
import { order } from "./order";
import './dis.css'
export function Inventory() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [text, setText] = useState([]);
    var [count, setCount] = useState(0);
    //var [clr,setClr] =useState("none")

    const getItem = async () => {
        item.get('/')
            .then(response => {
                console.log(response);
                const out = response.data;
                setData(out);
            });
    }
    const getorder = async () => {
        order.get('/')
            .then(response => {
                console.log(response);
                const out = response.data;
                setData1(out);
            });
    }

    const handledAddcurr = async () => {
        await item.post("/", {
            name: text,
            status:true,
        })

    }
    const handledAddord = async () => {
        await order.post("/", {
            name: text,
            status:false,
        })
    }
    const display = () => {
        setCount(count + 1);
        if (count % 2 !== 0) {
            getItem()
            var x = document.getElementById("myDiv");
            var y = document.getElementById("myDiv1");
            if (x.style.display === "none") {
                x.style.display = "block";
                y.style.display = "none";
            } else {
                x.style.display = "none";
            }
        } else {
            getorder()
            var z = document.getElementById("myDiv1");
            var l = document.getElementById("myDiv");
            if (z.style.display === "block") {
                z.style.display = "none";
            } else {
                z.style.display = "block";
                l.style.display = "none";
            }
        }


        console.log(count);
    }
    return (
        <>
        
            <br/>
            <h1>Add Items</h1>
            <div>
                <input className="int" type="text" placeholder="Add item" onChange={(e) => {
                    setText(e.target.value)
                }} />
                <button onClick={handledAddcurr}>Current list</button>
                <button onClick={handledAddord}>Order list </button>
            </div>
            <br/>
             <br/>
              <br/>
               <br/>
            <button onClick={display}>Display list</button>

            <div id="myDiv">
              <h1> Current List </h1>
               
                    <div className="marg">
                <table   className="box">
                    <tr>
                        <th>ITEMS</th>
                        <th>Status</th>  
                    </tr>
                     {data.map((items) => (
                    <tr key={items.id}>
                        <td>{items.name}</td>
                        <td> <input type="checkbox" value="true"/></td>
                    </tr>
                    ))}
                </table>
               
                   </div>
               

            </div>
            <div id="myDiv1">
            <h1> Order List </h1>
           
                 <div className="marg">
                <table  className="box">
                    <tr>
                        <th>Items</th>
                        <th>Status</th>  
                    </tr>
                      {data1.map((items) => (
                    <tr  key={items.id}>
                        <td>{items.name}</td>
                        <td> <input type="checkbox"/></td>
                    </tr>
                     ))}
                </table>
                  </div>
               
                   
            

            </div>
        </>
    );

}