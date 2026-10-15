import { motion } from "framer-motion";

import blogspace from "../images/blogspace.png";
import financeTracker from "../images/finance-tracker.png";
import socialmedia from "../images/Screenshot (79).png";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    number: "01",
    category: "FULL-STACK WEB APPLICATION",
    title: "MERN Blogging Platform",

    image: blogspace,

    description:
      "A full-stack blogging platform built with the MERN stack, featuring authentication, blog creation, editing, deletion, and a responsive interface designed for a smooth publishing experience.",

    tech: ["REACT", "NODE.JS", "EXPRESS", "MONGODB"],

    live: "https://mern-blogging-app-ebon.vercel.app",

    backend: "https://mern-blogging-app-8fhs.onrender.com/",

    github: "https://github.com/rohitdarunkar/MERN-blogging-app",

    accent: "orange",

    built:
      "A full-stack blogging platform where users can authenticate, create posts, edit existing content, and delete their own posts.",

    challenge:
      "Handling authentication and protecting actions that should only be available to authorized users.",

    approach:
      "Built REST APIs with protected backend routes and connected them to the React frontend through structured API requests.",
  },

  {
    number: "02",
    category: "FINANCE & ANALYTICS",
    title: "Finance Tracker",

    image: financeTracker,

    description:
      "A personal finance dashboard for tracking income and expenses with clear analytics, visual charts, and an intuitive interface for understanding spending patterns.",

    tech: ["REACT", "CHART.JS", "FIREBASE"],

    live: "https://finance-tracker-dusky-two.vercel.app/login",

    github: "https://github.com/rohitdarunkar/finance-tracker",

    accent: "teal",

    built:
      "A personal finance dashboard for recording income and expenses while presenting the information through clear summaries and visual analytics.",

    challenge:
      "Keeping transaction data organized while making financial information easy to understand at a glance.",

    approach:
      "Structured the application around stored transactions and used calculated totals and visual charts to turn raw financial data into useful insights.",
  },

  {
    number: "03",
    category: "SOCIAL MEDIA APPLICATION",
    title: "Social Media Application",

    image: socialmedia,

    description:
      "A modern social media platform with authentication, post creation, likes, comments, user profiles, and a responsive interface designed for an engaging user experience.",

    tech: ["REACT", "NODE.JS", "MONGODB"],

    live: "https://social-media-app-eight-delta.vercel.app/",

    github: "https://github.com/rohitdarunkar/social-media-app",

    accent: "orange",

    built:
      "A social platform focused on sharing content, interacting with posts, and giving users a simple profile-based experience.",

    challenge:
      "Organizing multiple types of user interactions while keeping the interface clean and responsive.",

    approach:
      "Used reusable React components and structured application data to keep posts, interactions, and user information manageable.",
  },
];

/* =========================================================
   PROJECT INTRO PAGE
========================================================= */

function ProjectsIntro() {
  return (
    <section
      className="
        relative
        flex
        min-h-[calc(100vh-88px)]
        w-full
        items-center
        overflow-hidden
        bg-[#f8f5ef]
        px-6
        py-12
        text-[#111111]
        md:px-10
        lg:px-16
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          gap-10
          lg:grid-cols-[0.8fr_1.2fr]
          lg:items-center
          lg:gap-20
        "
      >
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="mb-7 text-sm font-semibold uppercase tracking-[0.3em] text-[#075d5b]">
            Selected work
          </p>

          <h1
            className="
              max-w-[700px]
              text-[clamp(4rem,7.5vw,7.5rem)]
              font-black
              leading-[0.82]
              tracking-[-0.06em]
            "
          >
            Things
            <br />
            I've
            <br />
            <span className="text-[#f4513d]">
              built.
            </span>
          </h1>

          {/* SMALL DESCRIPTION UNDER HEADING */}

          <div className="mt-8 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#f4513d]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#075d5b]">
              3 selected projects
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE — SCROLL BOX */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-10"
        >
          {/* TOP DESCRIPTION */}

          <div className="mb-5 border-t border-[#111111]/20 pt-5">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <p className="max-w-[650px] text-base leading-7 text-[#174f65] md:text-lg">
                A selection of projects where I combined development,
                problem-solving, and design to build practical digital
                experiences.
              </p>

              <span className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-[#075d5b]">
                03 Projects
              </span>
            </div>
          </div>

          {/* SCROLLABLE CASE STUDY BOX */}

          <div
            className="
              relative
              h-[420px]
              overflow-y-auto
              border
              border-[#111111]/15
              bg-white/40
              backdrop-blur-sm
              scrollbar-thin
              md:h-[450px]
            "
            style={{
              scrollbarWidth: "thin",
            }}
          >
            {/* SCROLL HINT */}

            <div
              className="
                pointer-events-none
                sticky
                right-0
                top-0
                z-20
                flex
                justify-end
              "
            >
              <span
                className="
                  mr-4
                  mt-4
                  border
                  border-[#111111]/15
                  bg-[#f8f5ef]/90
                  px-3
                  py-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#075d5b]
                  backdrop-blur-sm
                "
              >
                Scroll
              </span>
            </div>

            {/* PROJECT OVERVIEWS */}

            <div className="px-6 pb-8 md:px-8">
              {projects.map((project, index) => (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                    rootMargin: "-20px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="
                    border-b
                    border-[#111111]/15
                    py-8
                    last:border-b-0
                    md:py-10
                  "
                >
                  {/* PROJECT HEADER */}

                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-start gap-4">
                      <span
                        className={`pt-1 text-xs font-bold tracking-[0.2em] ${
                          project.accent === "teal"
                            ? "text-[#70c9c0]"
                            : "text-[#f4513d]"
                        }`}
                      >
                        {project.number}
                      </span>

                      <div>
                        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#075d5b]">
                          {project.category}
                        </p>

                        <h2
                          className="
                            text-2xl
                            font-black
                            leading-tight
                            tracking-[-0.035em]
                            md:text-3xl
                          "
                        >
                          {project.title}
                        </h2>
                      </div>
                    </div>

                    {/* ACCENT */}

                    <span
                      className={`mt-1 h-3 w-3 shrink-0 rounded-full ${
                        project.accent === "teal"
                          ? "bg-[#70c9c0]"
                          : "bg-[#f4513d]"
                      }`}
                    />
                  </div>

                  {/* BUILT */}

                  <div className="mt-7">
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#075d5b]">
                      Built
                    </p>

                    <p className="max-w-[700px] text-sm leading-6 text-[#174f65] md:text-[15px]">
                      {project.built}
                    </p>
                  </div>

                  {/* TECHNOLOGIES */}

                  <div className="mt-6">
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#075d5b]">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((technology) => (
                        <span
                          key={technology}
                          className="
                            border
                            border-[#111111]/15
                            px-3
                            py-1.5
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.14em]
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CHALLENGE + APPROACH */}

                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#075d5b]">
                        Challenge
                      </p>

                      <p className="text-sm leading-6 text-[#174f65]">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#075d5b]">
                        Approach
                      </p>

                      <p className="text-sm leading-6 text-[#174f65]">
                        {project.approach}
                      </p>
                    </div>
                  </div>

                  {/* VIEW PROJECT — SCROLL TO FULL PROJECT */}

                  <div className="mt-6">
                    <a
                      href={`#project-${project.number}`}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#111111]
                        transition-colors
                        duration-300
                        hover:text-[#f4513d]
                      "
                    >
                      View project
                      <span className="text-base">
                        ↓
                      </span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ORANGE DECORATION */}

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          pointer-events-none
          absolute
          -right-10
          top-[20%]
          h-24
          w-24
          rounded-full
          bg-[#f4513d]
          md:h-32
          md:w-32
        "
      />

      {/* TEAL DECORATION */}

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
          bottom-[12%]
          left-[-10px]
          h-6
          w-6
          rounded-full
          bg-[#70c9c0]
          md:h-8
          md:w-8
        "
      />

      {/* PAGE INDICATOR */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-8
          right-10
          hidden
          text-[110px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-black/5
          md:block
        "
      >
        00
      </div>
    </section>
  );
}

/* =========================================================
   INDIVIDUAL PROJECT
========================================================= */

function ProjectCard({ project, index }) {
  return (
    <section
      id={`project-${project.number}`}
      className="
        relative
        flex
        min-h-[calc(100vh-88px)]
        w-full
        scroll-mt-[88px]
        items-center
        overflow-hidden
        border-t
        border-[#111111]/15
        bg-[#f8f5ef]
        px-6
        py-16
        text-[#111111]
        md:px-10
        md:py-12
        lg:px-16
      "
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* TOP INFORMATION */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.18fr_0.82fr]">
          {/* NUMBER */}

          <div>
            <span
              className={`text-sm font-bold tracking-[0.25em] ${
                project.accent === "teal"
                  ? "text-[#70c9c0]"
                  : "text-[#f4513d]"
              }`}
            >
              {project.number}
            </span>
          </div>

          {/* MAIN */}

          <div>
            {/* CATEGORY */}

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#075d5b]">
              {project.category}
            </p>

            {/* TITLE */}

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                text-[clamp(3rem,5.5vw,5.8rem)]
                font-black
                leading-[0.88]
                tracking-[-0.055em]
              "
            >
              {project.title}
            </motion.h2>

            {/* IMAGE */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                mt-6
                overflow-hidden
                bg-[#e8e4dc]
              "
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="
                  block
                  h-[220px]
                  w-full
                  object-contain
                  bg-[#e8e4dc]
                  md:h-[300px]
                  lg:h-[330px]
                "
              />
            </motion.div>

            {/* BOTTOM */}

            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-6
                lg:grid-cols-[1fr_auto]
                lg:items-end
              "
            >
              {/* DESCRIPTION */}

              <div>
                <p className="max-w-[900px] text-base leading-7 text-[#174f65]">
                  {project.description}
                </p>

                {/* TECH */}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="
                        border
                        border-[#111111]/15
                        px-3
                        py-2
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-2 lg:justify-end">
                {/* LIVE DEMO */}

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
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Live Demo
                  <span>↗</span>
                </a>

                {/* BACKEND */}

                {project.backend && (
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      border
                      border-[#111111]/20
                      bg-[#f8f5ef]
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      hover:border-[#f4513d]
                      hover:text-[#f4513d]
                    "
                  >
                    Backend
                    <span>↗</span>
                  </a>
                )}

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
                    bg-[#f8f5ef]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    hover:border-[#f4513d]
                    hover:text-[#f4513d]
                  "
                >
                  GitHub
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT DECORATION */}

      <div
        className={`
          pointer-events-none
          absolute
          right-[-25px]
          top-[18%]
          h-20
          w-20
          rounded-full
          md:h-24
          md:w-24
          ${
            project.accent === "teal"
              ? "bg-[#70c9c0]"
              : "bg-[#f4513d]"
          }
        `}
      />

      {/* PAGE NUMBER */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-5
          right-10
          hidden
          text-[110px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-black/5
          md:block
        "
      >
        {project.number}
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS
========================================================= */

export default function Projects() {
  return (
    <div id="projects">
      {/* FULL PAGE INTRO */}

      <ProjectsIntro />

      {/* ONE FULL PAGE PER PROJECT */}

      {projects.map((project, index) => (
        <ProjectCard
          key={project.number}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
}