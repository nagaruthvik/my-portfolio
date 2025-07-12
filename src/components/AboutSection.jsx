import { motion } from "framer-motion";
import { useRef } from "react";
import { profilepic } from "../assets";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGithub,
  SiLinkedin,
  SiHtml5,
} from "react-icons/si";

export default function AboutSection() {
  const constraintsRef = useRef(null);
  const techStack = [
    { label: "Html5", Icon: SiHtml5 },
    { label: "React", Icon: SiReact },
    { label: "Node.js", Icon: SiNodedotjs },
    { label: "MongoDB", Icon: SiMongodb },
    { label: "Express", Icon: SiExpress },
    { label: "Tailwind", Icon: SiTailwindcss },
  ];



  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50"></div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-900/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl animate-pulse delay-1000"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Interactive profile section */}
          <div
            ref={constraintsRef}
            className="flex-shrink-0 relative group w-64 h-64 lg:w-80 lg:h-80 mx-auto"
          >
            {/* Holographic profile image */}
            <motion.div
              drag
              dragConstraints={constraintsRef}
              whileHover={{ scale: 1.05 }}
              className="absolute inset-0 rounded-full overflow-hidden border-2 border-indigo-400/30 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm shadow-lg shadow-indigo-500/20"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${profilepic})` }}
                />
              </div>
              <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-indigo-400/50 animate-spin-slow pointer-events-none"></div>
            </motion.div>

            {/* Floating tech badges */}
            <motion.div
              initial={{ x: -20, y: -20 }}
              animate={{
                x: [-20, -30, -20],
                y: [-20, -10, -20],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-gray-800 border border-indigo-400/30 flex items-center justify-center shadow-lg shadow-indigo-500/20"
            >
              <span className="text-2xl">
                  <a
                  href="https://github.com/nagaruthvik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <SiGithub />
                </a>
              </span>
            </motion.div>

            <motion.div
              initial={{ x: 20, y: -20 }}
              animate={{
                x: [20, 30, 20],
                y: [-20, -30, -20],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-gray-800 border border-indigo-400/30 flex items-center justify-center shadow-lg shadow-indigo-500/20"
            >
              <span className="text-2xl">
                <a
                  href="https://www.linkedin.com/in/naga-ruthvik-ramisetti-a29b69237/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <SiLinkedin />
                </a>
              </span>
            </motion.div>

            <motion.div
              initial={{ x: -20, y: 20 }}
              animate={{
                x: [-20, -30, -20],
                y: [20, 30, 20],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-gray-800 border border-indigo-400/30 flex items-center justify-center shadow-lg shadow-indigo-500/20"
            >
              <span className="text-2xl">🛠️</span>
            </motion.div>
          </div>

          {/* Text content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
              About{" "}
              <span className="glitch" data-text="Me">
                Me
              </span>
            </h2>

            {/* Professional intro */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                I'm a{" "}
                <span className="text-indigo-400 font-medium">
                  Fullstack Developer
                </span>{" "}
                with a strong passion for creating impactful and user-centric
                applications using the{" "}
                <span className="text-purple-400 font-medium">MERN stack</span>{" "}
                (MongoDB, Express.js, React.js, and Node.js).
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                I enjoy bringing ideas to life through{" "}
                <span className="text-cyan-400">clean code</span>,{" "}
                <span className="text-cyan-400">scalable architecture</span>,
                and <span className="text-cyan-400">intuitive interfaces</span>.
                Whether it's building full-stack web apps, solving real-world
                problems, or continuously learning new technologies, I thrive on
                turning concepts into functional, meaningful digital
                experiences.
              </p>
            </div>

            {/* Education section */}
            <div className="pt-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-300 flex items-center">
                <span className="mr-3">🎓</span> Education
              </h3>

              <div className="pl-10 relative">
                {/* Timeline element */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>

                {/* Education item */}
                <div className="relative pb-8">
                  <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-1">
                    Lovely Professional University (LPU), Phagwara
                  </h4>
                  <p className="text-gray-400">
                    B.Tech, Computer Science Engineering (CSE)
                  </p>
                  <p className="text-sm text-indigo-300 mt-2">2020 - 2024</p>
                </div>
                 <div className="relative pb-8">
                  <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-1">
                  Narayana jr college
                  </h4>
                  <p className="text-gray-400">
                   Class XII
                  </p>
                  <p className="text-sm text-indigo-300 mt-2">2016 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack floating bubbles */}
        <div className="mt-24 grid grid-cols-3 md:grid-cols-6 gap-6">
          {techStack.map(({ label, Icon }, index) => (
            <motion.div
              key={label}
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-gray-800/50 backdrop-blur-sm border border-indigo-400/20 
                     rounded-xl p-4 flex flex-col items-center justify-center 
                     hover:bg-indigo-900/30 transition-colors duration-300"
            >
              <Icon className="text-3xl mb-2" />{" "}
              {/* 👈 actual logo, not an emoji */}
              <span className="text-sm font-medium text-gray-300">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
