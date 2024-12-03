import React from 'react';
import Swal from 'sweetalert2';

const AddBook = () => {
    
    const handleAddBook = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const author = form.author.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const newBook = {name, author, price, photo};
       
        // send to data server
        fetch("http://localhost:5000/book", {
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        .then(res => res.json())
        .then(data => {
            form.reset();
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'The book has been added successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
        })
    }

    return (
        <div>
            <h1 className='text-primary font-bold text-2xl ml-12 pt-5'>Add Book</h1>
            <div className='max-w-5xl p-10 mx-auto rounded-xl mt-10 bg-white shadow-lg'>
                <form onSubmit={handleAddBook}>
                    <div className='mx-auto flex gap-5'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-primary font-bold text-lg">Book Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Book Name" className="input w-full input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-primary text-lg font-bold">Author Name</span>
                            </label>
                            <input type="text" name="author" placeholder="Author Name" className="input w-full input-bordered" />
                        </div>
                    </div>
                    <div className='mx-auto flex mt-6 gap-5'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-primary text-lg font-bold">Add Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Enter Price" className="input w-full input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-primary text-lg font-bold">Add Book Cover Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input w-full input-bordered" />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button  className='bg-bgbton text-white rounded-md p-2 mt-5'>Add Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;