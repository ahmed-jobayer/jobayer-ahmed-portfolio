import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div >
                <Banner></Banner>
                <AboutMe></AboutMe>
                <Skills></Skills>
                <Projects></Projects>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;