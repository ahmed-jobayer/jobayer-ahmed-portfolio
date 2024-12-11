import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-[#61dbfb] flex justify-center p-4 text-4xl gap-8 text-black">
         <a className="hover:scale-125 duration-300" href="https://github.com/ahmed-jobayer" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
         <a className="hover:scale-125 duration-300" href="https://www.linkedin.com/in/ahmed-jobayer/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
         <a className="hover:scale-125 duration-300" href="https://x.com/ahmed__jobayer" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
        </div>
    );
};

export default Footer;