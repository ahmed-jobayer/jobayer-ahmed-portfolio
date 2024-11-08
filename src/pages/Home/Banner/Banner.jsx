import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoChevronDownCircle } from "react-icons/io5";




const Banner = () => {
    return (
        <div className=" text-white min-h-screen grid grid-cols-2 bg-cover bg-fixed bg-center" style={{backgroundImage:`url('/src/assets/hero-dark.jpg')`}}>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl mb-8 font-permanentMarker">Jobayer Ahmed</h1>
                <div className="flex text-4xl gap-6">
                <a href="https://github.com/ahmed-jobayer" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/ahmed-jobayer/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://x.com/ahmed__jobayer" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <img src="/src/assets/defaultNavLogo.svg" alt="React Logo" className="max-w-[450px] animate-spin-slow" />
            </div>
            <div className="col-span-2 flex justify-center text-5xl ">
            <IoChevronDownCircle />
            </div>
        </div>
    );
};

export default Banner;