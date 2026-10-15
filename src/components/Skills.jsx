import { motion } from "framer-motion";

const experience = [
  { name: "React", years: "2+ years" },
  { name: "JavaScript", years: "4+ years" },
  { name: "HTML / CSS", years: "6+ years" },
  { name: "Tailwind CSS", years: "4+ years" },
  { name: "Node.js", years: "2+ years" },
  { name: "Express.js", years: "2+ years" },
  { name: "MongoDB", years: "4+ years" },
  { name: "Firebase", years: "2+ years" },
  { name: "Git / GitHub", years: "4+ years" },
  { name: "Framer Motion", years: "2+ years" },
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive, interactive interfaces with a strong focus on usability, structure, and clean component architecture.",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
    accent: "#f4513d",
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Developing APIs and server-side applications with a focus on reliable application logic and maintainable code.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "API Integration",
    ],
    accent: "#70c9c0",
  },
  {
    number: "03",
    title: "Database",
    description:
      "Working with databases to structure, store, retrieve, and manage application data efficiently.",
    skills: [
      "MongoDB",
      "Firebase",
      "Firestore",
      "Database Design",
    ],
    accent: "#f4513d",
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description:
      "Using modern development tools and workflows to build, test, manage, and deploy web applications.",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "VS Code",
      "Framer Motion",
    ],
    accent: "#70c9c0",
  },
];

function ExperienceBox() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="flex h-full min-h-0 flex-col"
    >
      <div className="border-t border-[#111111]/20 pt-6">

        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#075d5b]">
            Experience
          </p>

          <span className="text-xs uppercase tracking-[0.18em] text-[#111111]/40">
            Years
          </span>
        </div>

        {/* EXPERIENCE SCROLL BOX */}
        <div
          className="
            h-[260px]
            overflow-y-auto
            border-y
            border-[#111111]/15
            pr-2
            scrollbar-thin
          "
        >
          {experience.map((item, index) => (
            <div
              key={item.name}
              className="
                group
                flex
                items-center
                justify-between
                gap-6
                border-b
                border-[#111111]/10
                px-2
                py-4
                transition-colors
                duration-300
                hover:bg-[#111111]/[0.03]
              "
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="w-6 text-xs font-semibold text-[#111111]/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="truncate text-base font-bold">
                  {item.name}
                </span>
              </div>

              <span className="shrink-0 text-sm font-semibold text-[#174f65]">
                {item.years}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#111111]/40">
          Scroll to explore
        </p>
      </div>
    </motion.div>
  );
}

function SkillGroup({ group, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="border-b border-[#111111]/15 py-7 last:border-b-0"
    >
      <div className="grid grid-cols-[45px_0.7fr_1.3fr] gap-5 md:grid-cols-[55px_0.55fr_1.45fr] md:gap-8">

        {/* NUMBER */}
        <div>
          <span
            className="text-xs font-bold tracking-[0.2em]"
            style={{ color: group.accent }}
          >
            {group.number}
          </span>
        </div>

        {/* TITLE */}
        <div>
          <h2 className="text-2xl font-black tracking-[-0.035em] md:text-3xl">
            {group.title}
          </h2>
        </div>

        {/* CONTENT */}
        <div>
          <p className="max-w-[620px] text-sm leading-6 text-[#174f65] md:text-base">
            {group.description}
          </p>

          {/* SKILLS */}
          <div className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="
                  border
                  border-[#111111]/15
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.1em]
                  transition-colors
                  duration-300
                  hover:border-[#075d5b]/50
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        flex
        min-h-[calc(100vh-88px)]
        w-full
        overflow-hidden
        bg-[#f8f5ef]
        px-6
        py-10
        text-[#111111]
        md:px-10
        md:py-12
        lg:px-16
      "
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">

        {/* ================================
            HEADER
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[1fr_0.8fr]
            lg:gap-16
          "
        >
          {/* LEFT HEADER */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#075d5b]">
              Skills & technologies
            </p>

            <h1
              className="
                max-w-[700px]
                text-[clamp(4rem,7vw,7rem)]
                font-black
                leading-[0.82]
                tracking-[-0.06em]
              "
            >
              What I
              <br />
              <span className="text-[#f4513d]">work</span>
              <br />
              with.
            </h1>
          </div>

          {/* RIGHT HEADER + EXPERIENCE */}
          <div className="flex flex-col justify-end">
            <p className="mb-8 max-w-[520px] text-base leading-7 text-[#174f65]">
              The technologies and tools I use to turn ideas into responsive,
              scalable, and maintainable web applications.
            </p>

            <ExperienceBox />
          </div>
        </motion.div>

        {/* ================================
            ORIGINAL SKILLS
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex min-h-0 flex-1 flex-col"
        >
          <div className="mb-4 border-t border-[#111111]/20 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#075d5b]">
              My skills
            </p>
          </div>

          {/* MAIN SKILLS SCROLL BOX */}
          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              border-y
              border-[#111111]/15
              pr-2
              scrollbar-thin
            "
          >
            {skillGroups.map((group, index) => (
              <SkillGroup
                key={group.number}
                group={group}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* ================================
            BOTTOM STATS
        ================================= */}

        <div className="mt-6 hidden border-t border-[#111111]/15 pt-5 md:grid md:grid-cols-3 md:gap-8">

          <div>
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#075d5b]">
              Core
            </span>

            <h3 className="text-lg font-bold">
              MERN Stack
            </h3>
          </div>

          <div>
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#075d5b]">
              Strength
            </span>

            <h3 className="text-lg font-bold">
              Full-stack development
            </h3>
          </div>

          <div>
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#075d5b]">
              Mindset
            </span>

            <h3 className="text-lg font-bold">
              Learn. Build. Improve.
            </h3>
          </div>

        </div>
      </div>

      {/* ================================
          ORANGE DECORATION
      ================================= */}

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          pointer-events-none
          absolute
          -right-8
          top-[30%]
          h-24
          w-24
          rounded-full
          bg-[#f4513d]
          md:h-32
          md:w-32
        "
      />

      {/* ================================
          TEAL DECORATION
      ================================= */}

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="
          pointer-events-none
          absolute
          bottom-10
          left-5
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