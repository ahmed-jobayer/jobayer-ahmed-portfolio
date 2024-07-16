import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div >
                <Banner></Banner>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;