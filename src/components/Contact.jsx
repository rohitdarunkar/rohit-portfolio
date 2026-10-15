import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rohitdarunkarwork@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Job Opportunity / Interview - ${name || "Recruiter"}`
    );

    const body = encodeURIComponent(
      `Hi Rohit,

My name is ${name || "Recruiter"}.

Email: ${email || "Not provided"}

${
        message ||
        "I would like to discuss an opportunity with you."
      }

Best regards,
${name || "Recruiter"}`
    );

    window.location.href =
      `mailto:rohitdarunkarwork@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#111111] px-6 py-24 text-[#f8f5ef] md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* ========================================
            HEADER
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#70c9c0]">
            Get in touch
          </p>

          <h1 className="max-w-[1100px] text-[clamp(4rem,9vw,9rem)] font-black leading-[0.82] tracking-[-0.065em]">
            Let's talk
            <br />
            about
            <br />
            <span className="text-[#f4513d]">opportunities.</span>
          </h1>
        </motion.div>

        {/* ========================================
            MAIN CONTACT CONTENT
        ======================================== */}

        <div className="mt-20 grid grid-cols-1 gap-16 border-t border-white/15 pt-10 lg:grid-cols-[1fr_0.8fr]">

          {/* ======================================
              LEFT SIDE
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="max-w-[650px] text-xl leading-8 text-white/65 md:text-2xl">
              I'm currently open to opportunities in software development,
              full-stack development, and frontend development. If you're a
              recruiter or hiring manager, I'd be happy to connect.
            </p>

            {/* EMAIL */}
            <div className="mt-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#70c9c0]">
                Email
              </p>

              <div className="flex flex-wrap items-center gap-4">

                {/* EMAIL ADDRESS */}
                <a
                  href="mailto:rohitdarunkarwork@gmail.com"
                  className="break-all text-2xl font-bold transition-colors duration-300 hover:text-[#f4513d] md:text-3xl"
                >
                  rohitdarunkarwork@gmail.com
                </a>

                {/* COPY BUTTON */}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:border-[#70c9c0] hover:text-[#70c9c0]"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>

              </div>
            </div>

            {/* RESUME */}
            <div className="mt-10">
              <a
                href="/Rohit-Darunkar-Resume.pdf"
                download="Rohit Darunkar Resume.pdf"
                className="inline-flex items-center gap-3 bg-[#f4513d] px-7 py-4 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1"
              >
                Download Resume
                <span>↗</span>
              </a>
            </div>
          </motion.div>

          {/* ======================================
              RIGHT SIDE
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#70c9c0]">
              Find me online
            </p>

            <div className="border-t border-white/15">

              {/* GITHUB */}
              <a
                href="https://github.com/rohitdarunkar"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/15 py-6 transition-colors duration-300 hover:text-[#f4513d]"
              >
                <span className="text-2xl font-bold">
                  GitHub
                </span>

                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  ↗
                </span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/rohit-darunkar/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/15 py-6 transition-colors duration-300 hover:text-[#70c9c0]"
              >
                <span className="text-2xl font-bold">
                  LinkedIn
                </span>

                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  ↗
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:rohitdarunkarwork@gmail.com"
                className="group flex items-center justify-between border-b border-white/15 py-6 transition-colors duration-300 hover:text-[#f4513d]"
              >
                <span className="text-2xl font-bold">
                  Email
                </span>

                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  ↗
                </span>
              </a>

            </div>
          </motion.div>
        </div>

        {/* ========================================
            CONTACT FORM
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-white/15 pt-10"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            {/* FORM INTRO */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#70c9c0]">
                Start a conversation
              </p>

              <h2 className="text-4xl font-black leading-[0.95] md:text-5xl">
                Interested in
                <br />
                working
                <br />
                <span className="text-[#f4513d]">together?</span>
              </h2>

              <p className="mt-6 max-w-[450px] text-base leading-7 text-white/50">
                If you're a recruiter, hiring manager, or company interested
                in my profile, send me a message and I'll get back to you.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="border-b border-white/20 pb-4">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent text-lg text-white outline-none placeholder:text-white/25"
                />
              </div>

              {/* EMAIL */}
              <div className="mt-8 border-b border-white/20 pb-4">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-lg text-white outline-none placeholder:text-white/25"
                />
              </div>

              {/* MESSAGE */}
              <div className="mt-8 border-b border-white/20 pb-4">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell me about the opportunity..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none bg-transparent text-lg text-white outline-none placeholder:text-white/25"
                />
              </div>

              {/* SEND MESSAGE */}
              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-3 bg-[#f4513d] px-8 py-4 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1"
              >
                Send Message
                <span>↗</span>
              </button>

              <p className="mt-4 text-xs text-white/30">
                This will open your email client with the message ready to
                send.
              </p>

            </form>
          </div>
        </motion.div>

        {/* ========================================
            FOOTER
        ======================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-white/15 pt-8"
        >
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Open to opportunities
            </p>

            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              © {new Date().getFullYear()} Rohit Darunkar
            </p>

          </div>
        </motion.div>

      </div>

      {/* ========================================
          ORANGE DECORATIVE CIRCLE
      ======================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          top-24
          h-24
          w-24
          rounded-full
          bg-[#f4513d]
          md:h-32
          md:w-32
        "
      />

      {/* ========================================
          TEAL DECORATIVE CIRCLE
      ======================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-20
          left-[-15px]
          h-16
          w-16
          rounded-full
          bg-[#70c9c0]
        "
      />

    </section>
  );
}