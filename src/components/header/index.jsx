import React from 'react'
import './styles.scss'
import { Link, Outlet } from "react-router-dom";
const Header = () => {

    const classes = `page-navbar navbar bg-white py-0 navbar-expand-lg navbar-light`;
    return (
        <div>
            <header>
                <div className='text-center top-nav-alert bg-secondary-clr py-3 text-white'>
                    <p>
                        NOW OPEN in CAMBRIDGE, MA! Order Online for Quick & Easy Pickup!

                    </p>
                </div>
                <nav className={classes}>
                    <div className='container-fluid flex flex-wrap items-center  justify-between px-6 '>

                        <a to="/" className="text-xl pr-2">
                            <img src='/static/logo192.png' alt="Depth 'N Green" className="h-20" />
                        </a>
                        <div>
                            <ul className='navbar-nav flex flex-wrap list-style-none mx-auto '>
                                <li className='nav-item p-2'>
                                    <Link to="/" className='nav-link nav-menu'>Home</Link>
                                </li>
                                <li className='nav-item p-2'>
                                    <Link to="/cafe" className='nav-link nav-menu'>Cafe</Link>
                                </li>
                                <li className='nav-item p-2'>
                                    <Link to="/catering" className='nav-link nav-menu'>Catering</Link>
                                </li>
                                <li className='nav-item p-2'>
                                    <Link to="/products" className='nav-link nav-menu'>Products</Link>
                                </li>
                                <li className='nav-item p-2'>
                                    <Link to="/about" className='nav-link nav-menu'>About</Link>
                                </li>
                                <li className='nav-item p-2'>
                                    <Link to="/contact" className='nav-link nav-menu'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>                           
                            <span className="mr-2 font-bold">Cart</span>

                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Header