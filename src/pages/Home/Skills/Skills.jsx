
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


const Skills = () => {
  return (
    <div className="container mx-auto ">
        <h2 className="text-center font-permanentMarker text-4xl">Skills</h2>
      <div className="grid grid-cols-3  min-h-screen text-center">
        <div className="flex items-center justify-center">
          <div>
            <FaHtml5 className="text-6xl"></FaHtml5>
            <p>HTML5</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <FaCss3 className="text-6xl"></FaCss3>
            <p>CSS3</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <IoLogoJavascript className="text-6xl"></IoLogoJavascript>
            <p>Javascript</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <FaReact className="text-6xl"></FaReact>
            <p>React</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <FaGitAlt className="text-6xl"></FaGitAlt>
            <p>Git</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <FaGithub className="text-6xl"></FaGithub>
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
