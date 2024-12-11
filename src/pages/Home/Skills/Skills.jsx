import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: FaHtml5, 
    },
    {
      name: "CSS3",
      icon: FaCss3,  
    },
    {
      name: "Javascript",
      icon: IoLogoJavascript,  
    },
    {
      name: "React",
      icon: FaReact,  
    },
    {
      name: "Node.js",
      icon: FaNode,  
    },
    {
      name: "Express.js",
      icon: SiExpress,  
    },
    {
      name: "MongoDB",
      icon: SiMongodb,  
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,  
    },
    {
      name: "Vite",
      icon: SiVite,  
    },
    {
      name: "Git",
      icon: FaGitAlt,  
    },
    {
      name: "GitHub",
      icon: FaGithub,  
    },
  ];

  return (
    <div id="skills" className="container mx-auto ">
      <h2 className="text-center font-permanentMarker text-4xl">Skills</h2>
      <div className="grid grid-cols-3  min-h-screen text-center">
        {skills.map((skill, i) => (
         <div key={i} className="flex flex-col items-center justify-center">
         <div className="text-6xl">
           {/* Render the icon component */}
           <skill.icon />
         </div>
         <p className="mt-2">{skill.name}</p>
       </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

















