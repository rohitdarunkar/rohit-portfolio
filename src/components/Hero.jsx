import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
// Hero character image is served from public/rohit-character.png.

export default function Hero() {
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const characterX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const characterY = useTransform(smoothY, [-1, 1], [-8, 8]);
  const characterRotate = useTransform(smoothX, [-1, 1], [-2, 2]);

  const handleMouseMove = (event) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        min-h-[calc(100vh-88px)]
        w-full
        overflow-hidden
        bg-[#f8f5ef]
        text-[#111111]
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[-15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#f4513d]/5
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[-15%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#70c9c0]/10
          blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1380px]
          px-6
          pt-32
          pb-12
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[1.05fr_0.9fr_0.85fr]
            xl:gap-8
          "
        >

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20 min-w-0"
          >
            {/* LABEL */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                mb-8
                text-sm
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#155e63]
              "
            >
              Web Development · MERN Stack
            </motion.p>

            {/* MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-black
                leading-[0.88]
                tracking-[-0.055em]
                text-[#111111]
                text-[64px]
                sm:text-[72px]
                md:text-[80px]
                lg:text-[70px]
                xl:text-[78px]
                2xl:text-[86px]
              "
            >
              Building
              <br />

              digital
              <br />

              <span className="text-[#f4513d]">
                experiences
              </span>
              <br />

              that feel
              <br />

              effortless.
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="
                mt-8
                max-w-[570px]
                text-base
                leading-[1.6]
                text-[#164f69]
                sm:text-lg
              "
            >
              I'm{" "}
              <strong className="text-[#111111]">
                Rohit Darunkar
              </strong>
              , a{" "}
              <strong className="text-[#155e63]">
                MERN Stack Developer
              </strong>{" "}
              creating{" "}
              <strong className="text-[#111111]">
                scalable applications
              </strong>
              , thoughtful interfaces and modern web
              experiences.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              {/* PROJECTS */}
              <motion.a
                href="#projects"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-md
                  bg-[#f4513d]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#f4513d]/10
                "
              >
                View my work
                <span className="text-lg">
                  ↗
                </span>
              </motion.a>

              {/* CONTACT */}
              <motion.a
                href="#contact"
                whileHover={{
                  x: 3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  border-b
                  border-[#155e63]
                  pb-1
                  text-sm
                  font-semibold
                  text-[#155e63]
                  transition-colors
                  duration-300
                  hover:border-[#f4513d]
                  hover:text-[#f4513d]
                "
              >
                Let's connect
                <span>
                  →
                </span>
              </motion.a>

              {/* RESUME */}
              <motion.a
                href={`${import.meta.env.BASE_URL}Rohit_Darunkar_Resume.pdf`}
                download="Rohit Darunkar Resume.pdf"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  border-b
                  border-[#111111]/30
                  pb-1
                  text-sm
                  font-semibold
                  text-[#111111]
                  transition-colors
                  duration-300
                  hover:border-[#f4513d]
                  hover:text-[#f4513d]
                "
              >
                Resume
                <span>
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>


          {/* ================= CENTER ================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[500px]
              items-center
              justify-center
              lg:min-h-[560px]
            "
          >
            {/* MINT BACKGROUND */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[500px]
                w-[330px]
                rounded-t-[190px]
                rounded-b-[28px]
                bg-[#dcefeb]
                sm:h-[520px]
                sm:w-[360px]
                lg:h-[520px]
                lg:w-[350px]
                xl:h-[540px]
                xl:w-[370px]
              "
            />

            {/* TURQUOISE DOT */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[11%]
                left-[7%]
                z-30
                h-6
                w-6
                rounded-full
                bg-[#72c8bf]
              "
            />

            {/* ORANGE DOT */}
            <motion.div
              animate={{
                y: [0, 8, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[2%]
                top-[7%]
                z-30
                h-14
                w-14
                rounded-full
                bg-[#f4513d]
              "
            />

            {/* CHARACTER */}
            <motion.img
              src={`${import.meta.env.BASE_URL}rohit-character.png`}
              alt="Rohit Darunkar working on a laptop"
              style={{
                x: characterX,
                y: characterY,
                rotate: characterRotate,
              }}
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.025,
              }}
              className="
                relative
                z-20
                w-[380px]
                max-w-none
                object-contain
                translate-y-6
                sm:w-[410px]
                lg:w-[380px]
                xl:w-[410px]
              "
            />
          </motion.div>


          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-20
              min-w-0
              lg:pl-2
            "
          >
            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="
                font-black
                leading-[0.92]
                tracking-[-0.045em]
                text-[#111111]
                text-[54px]
                sm:text-[62px]
                md:text-[68px]
                lg:text-[58px]
                xl:text-[64px]
                2xl:text-[70px]
              "
            >
              CODE
              <br />

              <span className="text-[#f4513d]">
                +
              </span>
              <br />

              CREATIVITY
            </motion.h2>

            {/* DIVIDER */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="
                mt-8
                mb-7
                h-px
                max-w-[380px]
                bg-[#d8d4ce]
              "
            />

            {/* FEATURES */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
              className="
                space-y-3
                text-base
                text-[#164f69]
                sm:text-lg
              "
            >
              <p>
                Full-stack applications
              </p>

              <p>
                Responsive interfaces
              </p>

              <p>
                Modern web development
              </p>
            </motion.div>

            {/* SOCIALS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1,
              }}
              className="mt-7 flex items-center gap-4"
            >
              {/* GITHUB */}
              <motion.a
                href="https://github.com/rohitdarunkar"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d8d4ce]
                  text-xs
                  font-bold
                  text-[#111111]
                  transition-colors
                  duration-300
                  hover:border-[#f4513d]
                  hover:text-[#f4513d]
                "
              >
                GH
              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                href="https://www.linkedin.com/in/rohit-darunkar/"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d8d4ce]
                  text-xs
                  font-bold
                  text-[#111111]
                  transition-colors
                  duration-300
                  hover:border-[#155e63]
                  hover:text-[#155e63]
                "
              >
                IN
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}