import { useEffect, useRef, useState } from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import { motion } from "framer-motion";
import WorkExperience from "./components/WorkExperience";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const canvasRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Name animation
    const nameElement = nameRef.current;
    const letters = "AAGHIKNRRTUV";
    let interval = null;

    const handleMouseOver = () => {
      if (!nameElement) return;

      let iteration = 0;
      const originalText = nameElement.dataset.value;

      clearInterval(interval);

      interval = setInterval(() => {
        nameElement.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) return originalText[index];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    nameElement?.addEventListener("mouseover", handleMouseOver);

    // Canvas particles
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        ctx.fillStyle = "rgba(99, 102, 241, 0.8)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }

      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition < aboutRef.current.offsetTop) {
        setActiveSection("home");
      } else if (scrollPosition < experienceRef.current.offsetTop) {
        setActiveSection("about");
      } else if (scrollPosition < projectsRef.current.offsetTop) {
        setActiveSection("experience");
      } else if (scrollPosition < contactRef.current.offsetTop) {
        setActiveSection("projects");
      } else {
        setActiveSection("contact");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      nameElement?.removeEventListener("mouseover", handleMouseOver);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative bg-gray-900 text-white custom-scrollbar">
      {/* Home Section */}
      <section
        ref={homeRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <div className="relative h-screen w-full overflow-hidden bg-gray-900 text-white">
          {/* Animated background canvas */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full opacity-20"
          />

          {/* Custom cursor effect */}
          <div
            className={`fixed w-8 h-8 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-100 ease-out ${
              isHovering
                ? "bg-indigo-500 mix-blend-exclusion scale-150"
                : "bg-white mix-blend-difference scale-100"
            }`}
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          />

          {/* Main content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 ">
            <div className="text-center space-y-8">
              {/* Animated name */}
              <h1
                ref={nameRef}
                data-value="R NAGA RUTHVIK"
                className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 hover:from-pink-500 hover:to-yellow-500 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                R NAGA RUTHVIK
              </h1>

              {/* Glitch effect title */}
              <div ref={titleRef} className="relative">
                <h2
                  className="text-2xl md:text-4xl font-mono text-indigo-300 glitch"
                  data-text="Fullstack_Developer"
                >
                  Fullstack_Developer
                </h2>
                <div className="absolute inset-0 flex justify-center">
                  <h2
                    className="text-2xl md:text-4xl font-mono text-pink-500 glitch-layer"
                    data-text="Fullstack_Developer"
                  >
                    Fullstack_Developer
                  </h2>
                </div>
                <div className="absolute inset-0 flex justify-center">
                  <h2
                    className="text-2xl md:text-4xl font-mono text-cyan-400 glitch-layer"
                    data-text="Fullstack_Developer"
                  >
                    Fullstack_Developer
                  </h2>
                </div>
              </div>

              {/* Holographic buttons */}
              <div className="flex justify-center space-x-6 mt-12">
                <button
                  className="holographic-btn px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-holo"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onClick={() => scrollToSection(projectsRef)}
                >
                  View Work
                </button>
                <button
                  className="holographic-btn px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-holo"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onClick={() => scrollToSection(contactRef)}
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Floating tech icons */}
            {/* <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-10">
              {["react", "node", "threejs", "ai", "blockchain"].map(
                (tech, i) => (
                  <div
                    key={tech}
                    className="tech-icon w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-2xl hover:scale-125 hover:text-indigo-400 transition-all duration-300"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {tech.charAt(0).toUpperCase()}
                  </div>
                )
              )}
            </div> */}

            {/* Scrolling indicator */}
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 grid-overlay pointer-events-none"></div>
        </div>
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-2 bg-indigo-400 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </section>
      <section ref={aboutRef} className="relative min-h-screen">
        <AboutSection />
      </section>
      <section ref={experienceRef} className="relative">
        <WorkExperience />
      </section>
      <section ref={projectsRef} className="relative">
        <ProjectsSection />
      </section>
      <section ref={contactRef} className="relative">
        <ContactSection />
      </section>
      {/* Navigation Dots (fixed position) */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        <button
          onClick={() => scrollToSection(homeRef)}
          className={`w-3 h-3 rounded-full block ${
            activeSection === "home" ? "bg-indigo-400 scale-125" : "bg-gray-500"
          }`}
        />
        <button
          onClick={() => scrollToSection(aboutRef)}
          className={`w-3 h-3 rounded-full block ${
            activeSection === "about"
              ? "bg-indigo-400 scale-125"
              : "bg-gray-500"
          }`}
        />
        <button
          onClick={() => scrollToSection(experienceRef)}
          className={`w-3 h-3 rounded-full block ${
            activeSection === "experience"
              ? "bg-indigo-400 scale-125"
              : "bg-gray-500"
          }`}
        />
        <button
          onClick={() => scrollToSection(projectsRef)}
          className={`w-3 h-3 rounded-full block ${
            activeSection === "projects"
              ? "bg-indigo-400 scale-125"
              : "bg-gray-500"
          }`}
        />
        <button
          onClick={() => scrollToSection(contactRef)}
          className={`w-3 h-3 rounded-full block ${
            activeSection === "contact"
              ? "bg-indigo-400 scale-125"
              : "bg-gray-500"
          }`}
        />
      </div>

      {/* Custom cursor (needs to stay at root level) */}
      <div
        className={`fixed w-8 h-8 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-100 ease-out ${
          isHovering
            ? "bg-indigo-500 mix-blend-exclusion scale-150"
            : "bg-white mix-blend-difference scale-100"
        }`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    </div>
  );
}
