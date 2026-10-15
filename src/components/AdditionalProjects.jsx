import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const moreProjects = [
  {
    name: "Pincode Lookup App",
    github: "https://github.com/rohitdarunkar/pincode-lookup-app",
    live: "https://pincode-lookup-app-mauve.vercel.app/",
  },
  {
    name: "Signup Profile",
    github: "https://github.com/rohitdarunkar/Signup-Profile",
    live: "https://signup-profile-zeta.vercel.app/",
  },
  {
    name: "Crypto Table",
    github: "https://github.com/rohitdarunkar/crypto-table",
    live: "https://crypto-table-sage.vercel.app/",
  },
  {
    name: "Signup Form",
    github: "https://github.com/rohitdarunkar/signup-form",
    live: "https://signup-form-inky-tau.pages.dev/",
  },
  {
    name: "Movie App",
    github: "https://github.com/rohitdarunkar/movie-app",
    live: "https://movie-app-alpha-three-18.vercel.app/",
  },
  {
    name: "NASA APOD",
    github: "https://github.com/rohitdarunkar/NASA",
    live: "https://nasa-3hv.pages.dev/",
  },
  {
    name: "Time Zone App",
    github: "https://github.com/rohitdarunkar/Time-Zone",
    live: "https://time-zone.pages.dev/",
  },
  {
    name: "Searching Post Offices",
    github: "https://github.com/rohitdarunkar/Searching-Post-Offices",
    live: "https://searching-post-offices.pages.dev/",
  },
  {
    name: "Todo List",
    github: "https://github.com/rohitdarunkar/Todo-list",
    live: "https://displayarrayfetchedfromapi.pages.dev/",
  },
  {
    name: "Display Array From API",
    github: "https://github.com/rohitdarunkar/displayarrayfetchedfromAPI",
    live: "https://displayarrayfetchedfromapi.pages.dev/",
  },
  {
    name: "Coin Tracker",
    github: "https://github.com/rohitdarunkar/Coin-tracker",
    live: "https://coin-tracker-e32.pages.dev/",
  },
  {
    name: "Sports Day",
    github: "https://github.com/rohitdarunkar/Sports-day",
    live: "https://sports-day.pages.dev/",
  },
  {
    name: "Signup Page HTML CSS JS",
    github: "https://github.com/rohitdarunkar/Signup-page-HTML-CSS-JS-",
    live: "https://signup-page-html-css-js.pages.dev/",
  },
  {
    name: "Counter App",
    github: "https://github.com/rohitdarunkar/counter",
    live: "https://counter-4lf.pages.dev/",
  },
  {
    name: "John And Friends",
    github: "https://github.com/rohitdarunkar/John_and_friends",
    live: "https://john-and-friends.pages.dev/",
  },
  {
    name: "Instagram Clone",
    github: "https://github.com/rohitdarunkar/Instagram_clone",
    live: "https://admirable-entremet-64b2bf.netlify.app/",
  },
];

function ProjectRow({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.03, 0.25),
      }}
      whileHover={{ x: 4 }}
      className="group border-t border-[#111111]/15 py-6 pr-3"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        {/* PROJECT NAME */}
        <div className="flex items-center gap-5">
          <span className="text-xs font-bold tracking-[0.2em] text-[#075d5b]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="text-xl font-bold tracking-[-0.02em] md:text-2xl">
            {project.name}
          </h3>
        </div>

        {/* LINKS */}
        <div className="flex shrink-0 gap-3">

          {/* LIVE */}
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              bg-[#f4513d]
              px-5
              py-3
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            View
            <span>↗</span>
          </a>

          {/* GITHUB */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              border
              border-[#111111]/20
              px-5
              py-3
              text-sm
              font-bold
              transition-all
              duration-300
              hover:bg-[#111111]
              hover:text-white
            "
          >
            GitHub
            <span>↗</span>
          </a>

        </div>
      </div>
    </motion.div>
  );
}

export default function AdditionalProjects() {
  const projectListRef = useRef(null);

  // Start at 10% as requested
  const [scrollProgress, setScrollProgress] = useState(10);

  useEffect(() => {
    const container = projectListRef.current;

    if (!container) return;

    const updateProgress = () => {
      const maxScroll =
        container.scrollHeight - container.clientHeight;

      if (maxScroll <= 0) {
        setScrollProgress(100);
        return;
      }

      const progress =
        (container.scrollTop / maxScroll) * 100;

      // Always show at least 10% at the beginning
      setScrollProgress(Math.max(10, Math.min(100, progress)));
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
    <section
      id="additional-projects"
      className="
        relative
        flex
        h-screen
        min-h-screen
        w-full
        flex-col
        overflow-hidden
        bg-[#f8f5ef]
        px-6
        py-16
        text-[#111111]
        md:px-10
        md:py-20
        lg:px-16
      "
    >
      <div className="mx-auto flex min-h-0 w-full max-w-[1440px] flex-1 flex-col">

        {/* ========================================
            HEADER
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            grid
            shrink-0
            grid-cols-1
            gap-8
            border-b
            border-[#111111]/15
            pb-10
            lg:grid-cols-[1fr_0.7fr]
            lg:gap-16
          "
        >
          {/* LEFT */}
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#075d5b]">
              More projects
            </p>

            <h1
              className="
                max-w-[850px]
                text-[clamp(4rem,7vw,7.5rem)]
                font-black
                leading-[0.84]
                tracking-[-0.06em]
              "
            >
              Additional
              <br />
              <span className="text-[#f4513d]">work.</span>
            </h1>
          </div>

          {/* RIGHT */}
          <div className="flex items-end pb-1">
            <p className="max-w-[520px] text-lg leading-8 text-[#174f65]">
              A collection of smaller applications and experiments built
              across React, JavaScript, APIs, frontend development, and
              full-stack technologies.
            </p>
          </div>
        </motion.div>

        {/* ========================================
            SCROLLABLE PROJECT LIST
        ======================================== */}

        <div className="relative min-h-0 flex-1">

          <div
            ref={projectListRef}
            className="
              h-full
              overflow-y-auto
              overflow-x-hidden
              pr-2

              [scrollbar-width:none]
              [-ms-overflow-style:none]

              [&::-webkit-scrollbar]:hidden
            "
          >
            {moreProjects.map((project, index) => (
              <ProjectRow
                key={project.name}
                project={project}
                index={index}
              />
            ))}

            {/* BOTTOM MESSAGE */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-t border-[#111111]/15 py-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#075d5b]">
                Always building something new
              </p>
            </motion.div>
          </div>

          {/* ========================================
              SCROLL PROGRESS LINE
          ======================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              z-20
              h-[3px]
              w-full
              overflow-hidden
              bg-[#111111]/10
            "
          >
            <motion.div
              className="h-full bg-[#f4513d]"
              animate={{
                width: `${scrollProgress}%`,
              }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
            />
          </div>

        </div>
      </div>

      {/* ========================================
          ORANGE DECORATION
      ======================================== */}

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          pointer-events-none
          absolute
          right-[-20px]
          top-[32%]
          h-24
          w-24
          rounded-full
          bg-[#f4513d]
          md:right-[-25px]
          md:h-32
          md:w-32
        "
      />

      {/* ========================================
          TEAL DECORATION
      ======================================== */}

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="
          pointer-events-none
          absolute
          bottom-12
          left-4
          h-5
          w-5
          rounded-full
          bg-[#70c9c0]
          md:left-10
        "
      />
    </section>
  );
}