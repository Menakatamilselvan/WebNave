import './Navbar.css'
import React from 'react'
import {Link} from 'react=router-dom'



function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <Link to = '/'>Home</Link>
                </ul>
                <ul>
                    <Link to = '/'>About</Link>
                </ul>
                <ul>
                    <Link to = '/'>Gallery</Link>
                </ul>
                <ul>
                    <Link to = '/'>Contact</Link>
                </ul>
                <ul>
                    <Link to = '/'>Notfound</Link>
                </ul>
            </nav>
        
        </>
        
    )
}


export default Navbar;