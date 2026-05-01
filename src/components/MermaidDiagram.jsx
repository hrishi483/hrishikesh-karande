import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

const MermaidDiagram = ({ chart }) => {
  const ref = useRef(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
    });

    const renderDiagram = async () => {
      try {
        const uniqueId = "mermaid-" + Date.now(); // ✅ FIX

        const { svg } = await mermaid.render(
          uniqueId,
          chart
        );

        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (err) {
        console.error("Mermaid render error:", err);
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <div className="w-full overflow-auto">
      <div ref={ref} />
    </div>
  );
};

export default MermaidDiagram;