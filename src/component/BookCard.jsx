import React from 'react';

const BookCard = ({ book }) => {
 
    const {name, author, price, photo} = book;
    return (
        <div className="card p-5 border-2 border-[rgba(19, 19, 19, 0.15)] bg-white shadow">
             <figure className="bg-[#F3F3F3] rounded-lg p-8">
                    <img src={photo} className="w-36 h-44 mx-auto rounded-lg" alt={name} />
                </figure>
            <div className="card-body mt-4 p-0">
                <h2 className="card-title text-primary text-2xl font-bold">{name}</h2>
                <p className='text-secondary text-xl font-semibold'>{author}</p>
                <p className='text-secondary text-lg'><span className='text-primary font-semibold'>Price:</span> ${price}</p>
            </div>
        </div>
    );
};

export default BookCard;