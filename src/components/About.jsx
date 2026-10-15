import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-visible bg-[#f8f5ef] px-6 py-10 text-[#111111] md:px-10 md:py-12 lg:px-16 lg:py-10"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#075d5b]">
            About me
          </p>
        </motion.div>

        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-[850px] text-[clamp(3.2rem,6.3vw,6.2rem)] font-black leading-[0.84] tracking-[-0.055em]">
              Turning
              <br />
              <span className="text-[#f4513d]">ideas</span>
              <br />
              into
              <br />
              experiences.
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <div className="border-t border-[#111111]/20 pt-5">

              <p className="max-w-[600px] text-lg font-medium leading-7 text-[#174f65]">
                I'm Rohit Darunkar, a MERN Stack Developer who enjoys building
                applications that are both technically solid and easy to use.
              </p>

              <p className="mt-4 max-w-[600px] text-sm leading-6 text-[#174f65]/85">
                My work spans the full development process — from designing
                responsive interfaces with React to building APIs, handling
                application logic, and working with databases using Node.js,
                Express, and MongoDB.
              </p>

              <p className="mt-3 max-w-[600px] text-sm leading-6 text-[#174f65]/85">
                I care about writing clean, maintainable code and creating
                interfaces that feel intuitive rather than simply functional.
                I'm constantly learning, experimenting with new technologies,
                and looking for better ways to solve problems.
              </p>

            </div>
          </motion.div>
        </div>

        {/* WHAT I BRING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 border-t border-[#111111]/20 pt-6"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.7fr_1.3fr]">

            {/* LABEL */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#075d5b]">
                What I bring
              </p>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <h3 className="text-xl font-bold">
                  Strong fundamentals
                </h3>

                <p className="mt-2 max-w-[400px] text-sm leading-6 text-[#174f65]/80">
                  A solid foundation in JavaScript, React, Node.js, APIs,
                  databases, and problem solving.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Product mindset
                </h3>

                <p className="mt-2 max-w-[400px] text-sm leading-6 text-[#174f65]/80">
                  I think beyond the code and focus on usability, performance,
                  responsiveness, and the overall experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Clean development
                </h3>

                <p className="mt-2 max-w-[400px] text-sm leading-6 text-[#174f65]/80">
                  I prefer structured, reusable code that is easier to
                  understand, maintain, and extend.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Always learning
                </h3>

                <p className="mt-2 max-w-[400px] text-sm leading-6 text-[#174f65]/80">
                  I enjoy exploring new tools and technologies and applying
                  them to real projects.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* BOTTOM INFO */}
        <div className="mt-8 grid grid-cols-1 gap-5 border-t border-[#111111]/20 pt-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* FOCUS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#075d5b]">
              Focus
            </span>

            <h3 className="text-xl font-bold">
              Full-stack
              <br />
              development
            </h3>
          </motion.div>

          {/* STACK */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#075d5b]">
              Stack
            </span>

            <h3 className="text-xl font-bold">
              React
              <br />
              Node.js
            </h3>
          </motion.div>

          {/* APPROACH */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#075d5b]">
              Approach
            </span>

            <h3 className="text-xl font-bold">
              Clean
              <br />
              & scalable
            </h3>
          </motion.div>

          {/* GOAL */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#075d5b]">
              Goal
            </span>

            <h3 className="text-xl font-bold">
              Better
              <br />
              digital products
            </h3>
          </motion.div>

        </div>
      </div>

      {/* ORANGE DECORATION */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute -right-8 top-24 h-24 w-24 rounded-full bg-[#f4513d] md:h-32 md:w-32"
      />

      {/* TEAL DECORATION */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pointer-events-none absolute bottom-8 left-4 h-5 w-5 rounded-full bg-[#70c9c0] md:left-10"
      />
    </section>
  );
}