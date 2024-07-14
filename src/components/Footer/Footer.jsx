import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-[#61dbfb] flex justify-center p-4 text-4xl gap-8 text-black">
         <a href="https://github.com/ahmed-jobayer" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
         <a href="https://www.linkedin.com/in/ahmed-jobayer/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
         <a href="https://x.com/ahmed__jobayer" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
        </div>
    );
};

export default Footer;