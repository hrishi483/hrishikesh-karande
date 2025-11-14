import React from "react";

const projects = [ 
  {
    id: 1,
    title: "Legal Agents",
    video: "https://drive.google.com/file/d/1c0ndCB1odtt3mfpZECx5zRjJ6T1YMvA-/preview",
    description: "This project is a web-based simulation of the TV show SUITS where each character is represented as an autonomous AI agent. Each agent has both long-term memory (LTM) and short-term memory (STM), allowing them to stay true to their personalities and evolve over time — just like in the series.",
    tech: ["Langchain", "FAISS", "python", "Optik"],
  },
  {
    id: 2,
    title: "AI-Powered Analyst Agent",
    image: "https://drive.google.com/thumbnail?id=1QZFmx-sLY_CUOZDczqzPc6Ws_RDVdpc7&sz=w1000",
    description: "This project is a web-based simulation of the TV show SUITS, where each character is represented as an autonomous AI agent. Each agent has both long-term memory (LTM) and short-term memory (STM), allowing them to stay true to their personalities and evolve over time — just like in the series.",
    tech: ["Python", "Langgraph", "Langserver", "google cloud models"],
  },
];



const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-[#1c1c1c] to-[#2a2a2b] text-gray-100 py-20 px-6 lg:px-20"
    >
        <h2 className="text-4xl font-semibold text-center mb-16 tracking-wide">
          My <span className="text-[#e99b63]">Projects</span>
        </h2>
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10 lg:gap-16`}
          >
            {/* Project Media */}
          <div className="w-180 h-100 mx-auto relative rounded-xl overflow-hidden bg-black flex items-center justify-center">

            {/* Video for index 0 */}
             {project.video && (
              <iframe
                src={project.video}
                allow="autoplay"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}


            {/* Image for index 1 */}
            {project.image && (
               <a
                  href="https://drive.google.com/file/d/1QZFmx-sLY_CUOZDczqzPc6Ws_RDVdpc7/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-40 h-40 mx-auto overflow-hidden rounded-xl bg-black flex items-center justify-center cursor-pointer">
                    <img
                      src="https://drive.google.com/thumbnail?id=1QZFmx-sLY_CUOZDczqzPc6Ws_RDVdpc7&sz=w1000"
                      alt="Project Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
            )}

          </div>


            {/* Description */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-[#e99b63]">
                {project.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#333333] text-sm px-3 py-1 rounded-full border border-[#444]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

