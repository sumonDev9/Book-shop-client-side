import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
const ManagBook = () => {
    const loadedBook = useLoaderData();
    const [books, setBooks] = useState(loadedBook);
    return (
        <div>
            <h1 className='text-primary font-bold text-2xl ml-12 pt-5'>Book List: {books.length}</h1>
            <div className='bg-white m-4'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-base font-medium text-primary'>
                                <th>SL No</th>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                       {
                        books.map((user, index) => <tr key={user._id}  className='text-base font-medium text-secondary'>
                        <th>{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.author}</td>
                        <td>{user.price}</td>
                        <td className='text-center'><RiDeleteBin5Line className='text-rose-700 text-2xl cursor-pointer' /></td>
                    </tr>)
                       }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManagBook;