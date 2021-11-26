import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import "./product.css"

export const  Child=()=> {

    const [products, setproducts] = useState([]);


    const fetchdata = async () => {

        const data = await axios.get('http://localhost:3001/products')
        console.log(data)
        setproducts(data.data)

    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div >
            <div  className="item" >
               
                    {products.map(data => (
                        <div key={data.id} className="tems"> 
                           <img className="imgs" src={data.image} alt="" />
                           <p><b>Name of product:</b> {data.title}</p>
                          <p> <b>Price:</b> {data.price}</p>
                     <p><b>Category:</b> {data.category}</p>
                        </div>
                            
                    ))
                    }
              
            </div>
        </div>
    )
}

