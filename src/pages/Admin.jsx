import React from 'react';
import Navbar from '../component/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const Admin = () => {
    return (
        <div>
           <nav className="bg-white shadow-lg">
                <Navbar></Navbar>
            </nav>
            <main>
                <div className='grid grid-cols-6 md:min-h-[500px] md:grid-cols-12'>
                    <div className='col-span-2  space-y-3 text-center bg-bgbton text-white'>
                    <h2 className='pt-5 text-3xl font-extrabold'>Book shop</h2>
                     <NavLink to='/admin/manageBook' className='flex pl-8 justify-start p-2 items-center gap-3'>
                        <img src="https://i.ibb.co/QJKJ48Y/grid-1.png" className='w-5' alt="" />
                        <p>Manage books</p>
                     </NavLink>
                     <NavLink to="/admin/addbook" className='flex pl-8 justity-start p-2 items-center gap-3'>
                        <img src="https://i.ibb.co/y6R6RYJ/plus-1.png" className='w-5' alt="" />
                        <p>Add Book</p>
                     </NavLink>
                   </div>
                    <div className='col-span-10 bg-[#F4F7FC]'>
                    <Outlet></Outlet>
                    </div>
                </div>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Admin;