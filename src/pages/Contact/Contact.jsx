import { FaGithub, FaLinkedin, FaPhoneAlt, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Contact = () => {



  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-6 container mx-auto">
      {/* Main content */}
      <div className="flex flex-col gap-16 lg:gap-72 lg:flex-row w-full lg:justify-between lg:items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 font-poiretOne  flex flex-col">
          <div className="text-7xl font-bold">
            <h1 className="">Want to </h1>
            <h1 className="text-center">start a new</h1>
            <h1 className="text-end">project?</h1>
          </div>
          <p className="mt-4 text-lg text-end">Or just say hello.</p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="flex flex-col space-y-8">
            {/* Contact Info */}
            <div className="text-[#AEA7AA]">
              <a
                href="mailto: jobayerahmed.dev@gmail.com"
                className="text-xl font-medium  pb-1 border-b"
              >
                jobayerahmed.dev@gmail.com
              </a>
              <div className="flex items-center mt-2 text-lg">
              <FaPhoneAlt />
              <span className="mx-1">&</span>
              <FaWhatsappSquare className="mr-2" />
              +8801580320721
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-4xl">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
