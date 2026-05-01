import React, { useState } from "react";
import MermaidDiagram from "./MermaidDiagram";
const projects = [ 
  {
    id: 1,
    title: "Agentic RAG System",
    type: "mermaid",
    mermaid: `
    graph TD;
      __start__([Start])
      load_memory
      retrieve_docs
      filter_docs
      check_answerability
      detect_ambiguity
      focused_retrieval
      rerank_docs
      generate_answer
      generate_clarification
      no_answer
      save_memory
      __end__([End])

      __start__ --> load_memory --> retrieve_docs --> filter_docs

      filter_docs -->|has_context| check_answerability
      filter_docs -->|no_context| no_answer

      check_answerability -->|answerable| detect_ambiguity
      check_answerability -->|not_answerable| no_answer

      detect_ambiguity -->|ambiguous| generate_clarification
      detect_ambiguity -->|clear| rerank_docs
      detect_ambiguity --> focused_retrieval

      focused_retrieval --> rerank_docs --> generate_answer

      generate_answer --> save_memory
      generate_clarification --> save_memory
      no_answer --> save_memory

      save_memory --> __end__
    `,
    description:
      "Designed an agentic RAG system with ambiguity detection, fallback retrieval, and clarification loops to improve answer reliability. The system dynamically adapts retrieval strategy based on query confidence and context availability.",
    tech: ["LangGraph", "RAG", "LLMs", "FastAPI"],
  },
  {
    id: 2,
    title: "Legal Agents",
    video: "https://drive.google.com/file/d/1c0ndCB1odtt3mfpZECx5zRjJ6T1YMvA-/preview",
    description: "This project is a web-based simulation of the TV show SUITS where each character is represented as an autonomous AI agent. Each agent has both long-term memory (LTM) and short-term memory (STM), allowing them to stay true to their personalities and evolve over time — just like in the series.",
    tech: ["Langchain", "FAISS", "python", "Optik"],
  },
{
  id: 3,
  title: "ML-Model for Plant Disease Detection",
  video: "https://drive.google.com/file/d/1sXImvKznbd_TJZLwrNTUGJGMvFd3S9NY/preview",
  description:
    "A deep-learning based plant disease classification system built using a Convolutional Neural Network (CNN) trained in PyTorch. The model analyzes leaf images and predicts the presence of diseases with high accuracy. The project includes dataset preprocessing, augmentation, model training, evaluation, and deployment as an interactive web interface for real-time predictions.",
  tech: ["PyTorch", "CNN", "Python", "NumPy", "Pandas", "Matplotlib", "Torchvision"],
}

];



const Projects = () => {
  const [fullscreenChart, setFullscreenChart] = useState(null);
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
            <div className="w-full lg:w-[600px] h-[350px] relative rounded-xl overflow-hidden bg-black flex items-center justify-center">
              {project.type === "mermaid" && (
                  <div className="flex items-start gap-2 w-full h-full overflow-auto">

                    {/* Diagram */}
                    <div className="flex-1 overflow-auto">
                      <MermaidDiagram chart={project.mermaid} />
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => setFullscreenChart(project.mermaid)}
                      className="bg-[#333] hover:bg-[#444] text-white px-3 py-2 text-sm rounded-md h-fit"
                    >
                      ⛶
                    </button>

                  </div>
                )}

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
        {fullscreenChart && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">

          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setFullscreenChart(null)}
              className="text-white text-xl bg-[#333] px-3 py-1 rounded-md"
            >
              ✕
            </button>
          </div>

          {/* Fullscreen Diagram */}
          <div className="flex-1 overflow-auto p-6">
            <div className="min-w-[900px]">
              <MermaidDiagram chart={fullscreenChart} />
            </div>
          </div>

        </div>
      )}
      </div>
    </section>
  );
};

export default Projects;

