import React, { useEffect, useState } from "react";

const recommendations = [
  {
    id: 1,
    name: "Prof. Surya Pratap Singh ",
    role: "Assistant Professor at IIT dharwad",
    text: "recommendation",
    img: "https://via.placeholder.com/80",
    proof: "https://drive.google.com/file/d/your-proof-id/view",
  },
  {
    id: 2,
    name: "Prof. Anand Konjengbam",
    role: "Assistant Professor at IIT dharwad",
    text: "recommendation",
    img: "https://via.placeholder.com/80",
    proof: "https://drive.google.com/file/d/your-proof-id/view",
  },
  {
    id: 3,
    name: "Vivek Deshpande",
    role: "Chief Operating Officer at AI Adventures",
    text: "I supervised Hrishikesh Karande during his Machine Learning Internship, where he worked on LLM and OCR projects. He quickly grasped complex concepts, showed strong technical skills, and consistently delivered high-quality work.",
    img: `${import.meta.env.BASE_URL}VIVEK_DESHPANDE.jpg`,
    proof: "https://drive.google.com/file/d/your-proof-id/view",
  },
  {
    id: 4,
    name: "RAM Karnati",
    role: "Project Manager, Freelance Client",
    text: "I had the opportunity to work with Hrishikesh Karande on a short-term AI project, and his contribution was immediately impactful. What stood out most was his exceptional brainstorming capacity—he consistently brought fresh, innovative ideas to the table that elevated our approach and helped clarify our strategic direction. His technical knowledge combined with a creative mindset made him a valuable collaborator. I would gladly work with him again and recommend him to teams seeking a forward-thinking AI developer.",
    img: `${import.meta.env.BASE_URL}RAM_KARNATI.jpg`,
    proof: "https://drive.google.com/file/d/your-proof-id/view",
  },
  {
    id: 5,
    name: "Dr. A. Mehta",
    role: "Research Advisor, IIT Dharwad",
    text: "Hrishikesh’s persistence and problem-solving mindset are commendable. His contributions in backend optimization were invaluable.",
    img: "https://via.placeholder.com/80",
    proof: "https://drive.google.com/file/d/your-proof-id/view",
  },
];

const Recommendations = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % recommendations.length);
    }, 4000); // auto change every 4 sec
    return () => clearInterval(interval);
  }, []);

  const visibleRecommendations = recommendations
    .concat(recommendations)
    .slice(startIndex, startIndex + visibleCount);

  return (
    <section
      id="recommendations"
      className="bg-gradient-to-b from-[#1c1c1c] to-[#2b2b2b] text-gray-100 py-20 px-6 lg:px-20"
    >
      <h2 className="text-4xl font-semibold text-center mb-8">
        Verified <span className="text-[#e99b63]">Recommendations</span>
      </h2>
      <p className="text-center text-gray-400 mb-12 text-sm">
        Authentic feedback from professors and professionals who’ve worked with me.
      </p>

      <div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-in-out"
        onMouseEnter={() => clearInterval()}
      >
        {visibleRecommendations.map((rec, index) => (
          <div
            key={index}
            className="bg-[#2a2a2b]/90 p-6 rounded-2xl shadow-[0_0_20px_rgba(233,155,99,0.15)] 
              border border-[#3a3a3a] flex flex-col items-center text-center
              hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={rec.img}
              alt={rec.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-[#e99b63]"
            />
            <div className="flex items-center justify-center gap-2 mb-3">
              <i className="bx bxs-badge-check text-[#e99b63] text-xl"></i>
              <span className="text-sm text-gray-400">Verified</span>
            </div>
            <p className="text-gray-300 italic leading-relaxed mb-4">“{rec.text}”</p>
            <h3 className="text-lg font-semibold text-[#e99b63]">{rec.name}</h3>
            <p className="text-sm text-gray-400">{rec.role}</p>
            <a
              href={rec.proof}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-[#e99b63] hover:underline"
            >
              🔗 View Verified Letter
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
