import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = document.getElementById("main-content");

    if (!container) return;

    const updateProgress = () => {
      const maxScroll =
        container.scrollHeight - container.clientHeight;

      if (maxScroll <= 0) {
        setProgress(100);
        return;
      }

      const currentProgress =
        (container.scrollTop / maxScroll) * 100;

      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    updateProgress();

    container.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      container.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[9999] h-[3px]">
      {/* TRACK */}
      <div className="absolute inset-0 bg-black/10" />

      {/* PROGRESS */}
      <div
        className="absolute left-0 top-0 h-full bg-[#f4513d] transition-[width] duration-150 ease-out"
        style={{
          width: `${Math.max(progress, 3)}%`,
        }}
      />
    </div>
  );
}