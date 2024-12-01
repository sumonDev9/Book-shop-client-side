import { useLoaderData } from "react-router-dom";
import Banner from "../component/Banner";
import Navbar from "../component/Navbar";
import BookCard from "../component/BookCard";
import Footer from "../component/Footer";


const Home = () => {
    const books = useLoaderData();
 
    return (
        <div>
            <nav className="bg-white shadow-lg">
                <Navbar></Navbar>
            </nav>
            <Banner></Banner>
            <main className="w-11/12 mx-auto">
                <section className="py-10 lg:py-20">
                    <h2 className="text-3xl mb-5 italic text-center text-primary font-extrabold">Book</h2>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                     books.map(book => <BookCard key={book._id} book={book}></BookCard>)   
                    }
                </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;