import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoChevronDownCircle } from "react-icons/io5";

const Banner = () => {
  return (
    <div
      id="banner"
      className="text-white min-h-screen grid grid-cols-1 md:grid-cols-2 bg-cover bg-fixed bg-center pt-36 sm:pt-24"
      style={{ backgroundImage: "url('/images/hero-dark.jpg')" }}
    >
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 font-permanentMarker">
          Jobayer Ahmed
        </h1>
        <div className="flex text-3xl sm:text-4xl gap-4 sm:gap-6">
          <a
            href="https://github.com/ahmed-jobayer"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-jobayer/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/ahmed__jobayer"
            target="_blank"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </div>

      {/* React Logo */}
      <div className="hidden sm:flex items-center justify-center mt-12 md:mt-0">
        <FaReact className="animate-spin-slow text-[#61DBFB]" size={180} />
      </div>

      {/* down arrow */}
      <div className="col-span-1 md:col-span-2 flex justify-center text-4xl sm:text-5xl mt-8">
        <IoChevronDownCircle />
      </div>
    </div>
  );
};

export default Banner;
