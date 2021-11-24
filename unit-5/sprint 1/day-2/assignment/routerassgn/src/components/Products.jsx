import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import "./pro.css"
import { Link } from 'react-router-dom'
function Products() {

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
            <div className="Display" >
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Prize</th>
                        <th>id</th>
                    </tr>
                    {products.map(data => (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                               
                                <td>{data.price}</td>
                                 <td>{data.id} <Link to={`/products/${data.id}`} > more details</Link></td>
                            </tr>

                    ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Products