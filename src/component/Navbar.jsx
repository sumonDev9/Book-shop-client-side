import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/order">Orders</NavLink></li>
        <li><NavLink to="/admin">Admin</NavLink></li>
    </>
    return (
        <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul 
                    tabIndex={0}
                    className="menu menu-sm text-white dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 z-[9999] shadow">
                    {link}
                </ul>
            </div>
            <a className="text-lg md:text-xl lg:text-2xl text-[#111111] font-semibold italic">Book shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">
                {link}
            </ul>
        </div>
        <div className="navbar-end gap-4">  
             <img src='https://i.ibb.co/g4FYYzY/user.png' alt="" />
            
            <div>
             <button className="px-3 py-2 bg-bgbton text-white font-semibold rounded-md">Login</button>
            </div>
        </div>
    </div>
    );
};

export default Navbar;