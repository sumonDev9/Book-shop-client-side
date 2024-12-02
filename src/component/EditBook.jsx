import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditBook = () => {

    const book = useLoaderData();
    const {_id, name, author, price, photo} = book;

    const handleEditBook = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const author = form.author.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const newBook = {name, author, price, photo};
       
        // send to data server
        fetch(`http://localhost:5000/book/${_id}`, {
            method:'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        .then(res => res.json())
        .then(data => {
              if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'The book has been updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
        })
    }


    return (
        <div>
        <h1 className='text-primary font-bold text-2xl ml-12 pt-5'>Edit Book: <span className='text-secondary text-xl'>{name}</span></h1>
        <div className='max-w-5xl p-10 mx-auto rounded-xl mt-10 bg-white shadow-lg'>
            <form onSubmit={handleEditBook}>
                <div className='mx-auto flex gap-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-primary font-bold text-lg">Book Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Book Name" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-primary text-lg font-bold">Author Name</span>
                        </label>
                        <input type="text" name="author" defaultValue={author} placeholder="Author Name" className="input w-full input-bordered" />
                    </div>
                </div>
                <div className='mx-auto flex mt-6 gap-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-primary text-lg font-bold">Add Price</span>
                        </label>
                        <input type="number" name="price" defaultValue={price} placeholder="Enter Price" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-primary text-lg font-bold">Add Book Cover Photo</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="photo url" className="input w-full input-bordered" />
                    </div>
                </div>
                <div className='flex justify-end gap-3'>
                    <Link to='/admin/manageBook' className='bg-bgbton text-white rounded-md p-2 mt-5'>Back</Link>
                    <button type='submit' className='bg-bgbton text-white rounded-md p-2 mt-5'>Edit Book</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default EditBook;