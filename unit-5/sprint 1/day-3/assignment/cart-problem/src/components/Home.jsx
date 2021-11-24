import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

function Home() {

    const [products, setproducts] = useState([]);
    //const [count,setCount]=useState(1)

    const fetchdata = async () => {

        const data = await axios.get('http://localhost:3001/data')
        console.log(data)
        setproducts(data.data)

    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div >
             {products.map(data => (
            <div className="Display" >
           <div>
           <p> </p>
             <img src={data.image_url} alt="" />
          </div>
          <div>
               <p> <b> Product name: </b>{data.product_name}</p>
               <p> <b>Product description:</b>{data.description}</p>
               <p> <b>Producr Price:</b>{data.price}</p>
             </div>
               <button onClick={async()=>{
                 await axios.push('http://localhost:3002/card',data.data)
        
               }
                   
               }>Add to Card</button>
            </div>
             ))
                    }
        </div>
    )
}

export default Home