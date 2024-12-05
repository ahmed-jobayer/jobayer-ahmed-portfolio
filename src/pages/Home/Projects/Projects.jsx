import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from the public folder
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div id="projects" className="container mx-auto my-10">
      <h2 className="text-4xl font-permanentMarker text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white w-80 rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 mx-auto"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-32 object-cover rounded-xl"
            />

            {/* Project Name */}
            <h2 className="text-xl font-bold text-center">{project.name}</h2>

            {/* Project Description */}
            <p className="text-gray-400 text-center text-sm">{project.description}</p>

            {/* Links */}
            <div className="flex flex-col items-center gap-2">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 flex items-center gap-2 hover:underline"
              >
                Live Demo <BiLinkExternal />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 flex items-center gap-2 hover:underline"
              >
                View on GitHub <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
