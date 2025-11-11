import React, { useEffect, useState } from "react";

const HireMe = () => {
  const [status, setStatus] = useState("idle");

  // --- Typing animation setup ---
  const words = ["Grow", "Develop", "Scale", "Stand Out"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        reverse ? prev - 1 : prev + 1
      );

      if (!reverse && subIndex === words[index].length + 2) {
        setReverse(true);
      } else if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, reverse ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // --- Form handling ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000); // hides after 4s
    } else {
      setStatus("error");
    }
  };

  return (
    <main
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 
      px-6 py-16 bg-gradient-to-br from-[#232323] via-[#1c1c1c] to-[#2d2d2d] text-gray-100 relative"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,155,99,0.15),transparent_70%)] pointer-events-none"></div>

      {/* Left Column — Text + Animation */}
      <div className="flex flex-col items-start justify-center max-w-md z-10">
        <h1 className="text-5xl font-semibold mb-6 leading-snug">
          I help businesses <br/>
          {" "}
          <span className="text-[#e99b63]">
            {`${words[index].substring(0, subIndex)}|`}
          </span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Whether you’re building your brand, scaling your startup, or 
          refining your digital presence — I craft solutions that make 
          technology your biggest growth advantage.
        </p>
      </div>

      {/* Right Column — Form */}
      <section
        className="relative w-full max-w-lg bg-[#2a2a2b]/90 backdrop-blur-md p-8 
        rounded-2xl shadow-[0_0_30px_rgba(233,155,99,0.2)] flex flex-col gap-6 z-10"
      >
        <h2 className="text-3xl font-semibold text-center mb-2">Hire Me 🤝</h2>
        <p className="text-center text-gray-400 mb-6">
          Let's collaborate! Tell me briefly about your project.
        </p>

        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xqawkbnn"
          method="POST"
          className="flex flex-col gap-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1b] border border-gray-600 
              focus:outline-none focus:border-[#e99b63]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1b] border border-gray-600 
              focus:outline-none focus:border-[#e99b63]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1b] border border-gray-600 
              focus:outline-none focus:border-[#e99b63]"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-[#e99b63] text-black font-semibold py-3 px-8 rounded-full 
              transition-all duration-300 hover:bg-[#ffb27a]"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-400 text-center text-sm mt-3 animate-fade-in">
            ✅ Message successfully sent to Hrishi!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center text-sm mt-3 animate-fade-in">
            ❌ Oops! Something went wrong. Please try again.
          </p>
        )}
      </section>
    </main>
  );
};

export default HireMe;
