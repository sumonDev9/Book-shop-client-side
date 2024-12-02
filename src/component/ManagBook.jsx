import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from 'sweetalert2';
import { MdOutlineEdit } from 'react-icons/md';
const ManagBook = () => {
    const loadedBook = useLoaderData();
    const [books, setBooks] = useState(loadedBook);

    const handleBookDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                // delete form the database
                fetch(`http://localhost:5000/book/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingBook = books.filter(book => book._id !== id);
                            setBooks(remainingBook);
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className='flex mx-4 mt-4 items-center justify-between'>
                <h1 className='text-primary font-bold text-2xl ml-12 pt-5'>Book List</h1>
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
            </div>
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
                                books.map((book, index) => <tr key={book._id} className='text-base font-medium text-secondary'>
                                    <th>{index + 1}</th>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <td className='text-center flex gap-2 items-center'>
                                        <Link to={`/admin/manageBook/editbook/${book._id}`} >
                                            <MdOutlineEdit  className='text-2xl cursor-pointer' />
                                        </Link>
                                        <button>
                                            <RiDeleteBin5Line onClick={() => handleBookDelete(book._id)} className='text-rose-700 text-2xl cursor-pointer' />
                                        </button>
                                    </td>
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