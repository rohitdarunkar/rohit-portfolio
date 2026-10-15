import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  /* ========================================
     SCROLL DETECTION
  ======================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links
        .map((link) => document.getElementById(link.toLowerCase()))
        .filter(Boolean);

      /*
        Find the section closest to the navbar.
        This works better for large sections like Projects.
      */
      let currentSection = "home";
      let smallestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        const distance = Math.abs(rect.top - 100);

        if (
          rect.top <= window.innerHeight * 0.65 &&
          distance < smallestDistance
        ) {
          smallestDistance = distance;
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /* ========================================
     DARK MODE
  ======================================== */

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  /* ========================================
     NAVIGATION
  ======================================== */

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        transition-all
        duration-500
        ${
          scrolled
            ? darkMode
              ? "bg-black/45 border-white/10"
              : "bg-[#f8f5ef]/35 border-black/10"
            : darkMode
              ? "bg-black/95 border-white/10"
              : "bg-[#f8f5ef]/95 border-black/10"
        }
        backdrop-blur-md
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-[88px]
          max-w-[1280px]
          items-center
          justify-between
          px-6
          md:px-10
          lg:px-12
        "
      >

        {/* ========================================
            LOGO
        ======================================== */}

        <motion.a
          href="#home"
          onClick={handleNavigation}
          whileHover={{
            scale: 1.02,
          }}
          className={`
            text-[28px]
            font-black
            tracking-[-1.5px]
            no-underline
            transition-colors
            duration-300
            md:text-[30px]
            ${
              darkMode
                ? "text-white"
                : "text-[#111111]"
            }
          `}
        >
          Rohit<span className="text-[#f4513b]">.</span>
        </motion.a>


        {/* ========================================
            DESKTOP NAVIGATION
        ======================================== */}

        <nav className="hidden items-center gap-9 md:flex">

          {links.map((link) => {
            const sectionId = link.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link}
                href={`#${sectionId}`}
                className={`
                  relative
                  py-2
                  text-[15px]
                  font-semibold
                  transition-colors
                  duration-200
                  ${
                    isActive
                      ? darkMode
                        ? "text-white"
                        : "text-[#f4513b]"
                      : darkMode
                        ? "text-white/80 hover:text-white"
                        : "text-[#111111] hover:text-[#f4513b]"
                  }
                `}
              >
                {link}

                {/* ACTIVE LINE */}

                <motion.span
                  initial={false}
                  animate={{
                    width: isActive ? "100%" : "0%",
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    bg-[#f4513b]
                  "
                />
              </a>
            );
          })}

        </nav>


        {/* ========================================
            RIGHT SIDE
        ======================================== */}

        <div className="flex items-center gap-3">

          {/* DARK MODE */}

          <motion.button
            onClick={toggleDarkMode}
            whileTap={{
              scale: 0.9,
              rotate: 20,
            }}
            whileHover={{
              scale: 1.05,
            }}
            aria-label="Toggle dark mode"
            className={`
              flex
              h-[48px]
              w-[48px]
              items-center
              justify-center
              rounded-full
              border
              text-[20px]
              transition-all
              duration-300
              ${
                darkMode
                  ? "border-white/20 text-white hover:border-[#f4513b]"
                  : "border-black/15 text-[#111111] hover:border-[#f4513b]"
              }
            `}
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.span
                key={darkMode ? "sun" : "moon"}
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.5,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {darkMode ? "☀" : "☾"}
              </motion.span>
            </AnimatePresence>
          </motion.button>


          {/* MOBILE MENU */}

          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            whileTap={{
              scale: 0.9,
            }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className={`
              flex
              h-[48px]
              w-[48px]
              items-center
              justify-center
              rounded-full
              border
              text-[20px]
              transition-all
              duration-300
              md:hidden
              ${
                darkMode
                  ? "border-white/20 text-white"
                  : "border-black/15 text-[#111111]"
              }
            `}
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.span
                key={menuOpen ? "close" : "menu"}
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {menuOpen ? "✕" : "☰"}
              </motion.span>
            </AnimatePresence>
          </motion.button>

        </div>
      </div>


      {/* ========================================
          MOBILE MENU
      ======================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              overflow-hidden
              border-t
              md:hidden
              backdrop-blur-xl
              ${
                darkMode
                  ? "bg-black/90 border-white/10"
                  : "bg-[#f8f5ef]/90 border-black/10"
              }
            `}
          >
            <div className="flex flex-col px-6 py-6">

              {links.map((link, index) => {
                const sectionId = link.toLowerCase();
                const isActive =
                  activeSection === sectionId;

                return (
                  <motion.a
                    key={link}
                    href={`#${sectionId}`}
                    onClick={handleNavigation}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.05,
                    }}
                    className={`
                      border-b
                      py-4
                      text-lg
                      font-semibold
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? "text-[#f4513b]"
                          : darkMode
                            ? "border-white/10 text-white hover:text-[#f4513b]"
                            : "border-black/10 text-[#111111] hover:text-[#f4513b]"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">

                      <span>
                        {link}
                      </span>

                      {isActive && (
                        <span className="text-sm text-[#f4513b]">
                          ●
                        </span>
                      )}

                    </div>
                  </motion.a>
                );
              })}

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}