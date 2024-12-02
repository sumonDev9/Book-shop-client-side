import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from 'sweetalert2';
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
                if(data.deletedCount){
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
                        books.map((book, index) => <tr key={book._id}  className='text-base font-medium text-secondary'>
                        <th>{index + 1}</th>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td className='text-center'><RiDeleteBin5Line onClick={() => handleBookDelete(book._id) } className='text-rose-700 text-2xl cursor-pointer' /></td>
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