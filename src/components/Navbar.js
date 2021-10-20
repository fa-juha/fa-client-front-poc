import React from 'react'
import { Link } from 'react-router-dom'
import logo from './fa_red.png'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' role='navigation'>
             
            <Link to='/' ><img src={logo} alt="FA" width="30%"/></Link>

            <div className='pr-8 md:block hidden'>
                <Link to="/overview" className="p-4">Overview</Link>
                <Link to="/menu" className="p-4">Transactions</Link>
                <Link to="/about" className="p-4">Performance</Link>
                <Link to="/contact" className="p-4">Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar