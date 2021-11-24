import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to = "/HOME">Home</Link>
            <Link to = "/showCart">showCart</Link>
        </div>
    )
}

export default Navbar