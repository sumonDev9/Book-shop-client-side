import Banner from "../component/Banner";
import Navbar from "../component/Navbar";


const Home = () => {
    return (
        <div>
            <nav className="bg-white shadow-lg">
                <Navbar></Navbar>
            </nav>
            <Banner></Banner>
        </div>
    );
};

export default Home;