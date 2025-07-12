import { motion } from "framer-motion";
import { useRef } from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Event Meeting Scheduling Platform",
      description: [
        "Designed a responsive landing page with secure user authentication using JWT/session-based login",
        "Implemented full meeting management — create, update, delete events — with real-time conflict checks and user availability handling",
        "Added features like event customization, password-protected access, and sharable event links for attendees",
        "Built a mobile-friendly event page and calendar view using React, Node.js, Express, and MongoDB",
      ],
      tags: [
        "React.js",
        "Javascript",
        "HTML",
        "CSS",
        "ExpressJs",
        "NodeJs",
        "MongoDB",
        "Git",
      ],
      live : "https://meeting-event-scheduling-platform.vercel.app/",
      repo: "https://github.com/nagaruthvik/Meeting-Event-Scheduling-Platform",
    },
    {
      title: "Ticketing System",
      description: [
        "Developed a complete ticketing system using Node.js, Express, and MongoDB for seamless backend operations",
        "Created a dynamic ticket dashboard with status-based filtering, ticket assignment logic, and role-based (admin/team) access",
        "Integrated real-time chat support with missed message alerts and stored chat history in MongoDB",
        "Deployed a responsive dummy site with a customizable chatbot widget for interactive, real-time user testing",
      ],
      tags: [
        "React.js",
        "HTML",
        "CSS",
        "Javascript",
        "ExpressJs",
        "NodeJs",
        "MongoDB",
        "API",
        "Git",
      ],
      live : "https://ticket-management-system-amber.vercel.app/",
      repo: "https://github.com/nagaruthvik/Ticket-management-system",
    },
    {
      title: "Restaurant Management System",
      description: [
        "Built a full-stack restaurant system using React, Express, and MongoDB, featuring separate customer and admin apps",
        "Customer app lets users browse 5 menu categories, place orders, and search items with a smooth, responsive UI",
        "Admin panel supports real-time table and order management with dine-in/takeaway options and dynamic status tracking",
        "Analytics dashboard provides visual insights into sales, orders, and key performance metrics for restaurant operations",
      ],
      tags: [
        "React.js",
        "HTML",
        "CSS",
        "API",
        "Javascript",
        "ExpressJs",
        "NodeJs",
        "MongoDB",
        "Git",
      ],
      live : "https://restaurant-management-system-q8um.vercel.app/",
      repo: "https://github.com/nagaruthvik/restaurant-management-system",
    },
    {
      title: "Pocket Notes Application",
      description: [
        "Designed a note management system with group categorization for better organization",
        "Enabled dynamic creation of groups with customizable colors and storage using local storage",
        "Handled state management with Context API and useContext to keep data flowing cleanly between components without the mess",
      ],
      tags: ["HTML", "React.js", "CSS", "Javascript", "API", "Local Storage"],
      repo: "https://github.com/nagaruthvik/Pocket-Notes-App",
      live : "https://pocket-notes-app-blond.vercel.app/",
    },
    {
      title: "SuperApp",
      description: [
        "Built a multi-feature website using React, offering user registration, entertainment category selection, weather updates, news articles, a stopwatch timer, and note-taking all in one place",
        "Used Local Storage for persisting user data and preferences across sessions",
        "Integrated external APIs for real-time weather, news, and movie info to deliver dynamic content and a richer user experience",
      ],
      tags: ["React.js", "HTML", "CSS", "API", "Local Storage", "Git"],
      live : "https://super-app-five-tau.vercel.app/",
      repo: "https://github.com/nagaruthvik/Super-App",
    },
    {
      title: "Job Index",
      description: [
        "Built a job-posting platform using MongoDB, Express.js, React, and Node.js with secure login and role-based access",
        "Allowed authenticated users to create and manage job listings through a protected interface",
        "Implemented a powerful search system for unauthenticated users to filter jobs by title and required skills",
        "Exposed detailed job descriptions to public users, simplifying access to relevant listings",
      ],
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "React.js",
        "ExpressJs",
        "NodeJs",
        "MongoDB",
        "API",
        "Git",
      ],
      live : "https://job-finder-website-pink.vercel.app/",
      repo: "https://github.com/nagaruthvik/Job-finder-website",
    },
  ];
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Projects Heading - Fixed at top */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 pt-8 pb-4 text-center text-4xl md:text-5xl font-bold bg-gradient-to-b from-gray-900 via-gray-900/90 to-transparent"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
          MY{" "}
          <span className="glitch" data-text="Projects">
            Projects
          </span>
        </span>
      </motion.h2>

      {/* Projects Container with hidden scrollbar */}
      <div className="h-[calc(100vh-6rem)] w-full overflow-y-auto snap-y snap-mandatory custom-scrollbar">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-[calc(100vh-6rem)] w-full flex items-center justify-center snap-start"
          >
            <ProjectPage project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectPage({ project, index }) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0, filter: "blur(4px)" }}
      whileInView={{
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          delay: index * 0.1,
          type: "spring",
          stiffness: 80,
          damping: 18,
        },
      }}
      viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      className="w-full max-w-5xl mx-6 p-8 md:p-10 rounded-2xl border border-indigo-500/20 bg-gray-800/70 backdrop-blur-sm shadow-xl"
    >
      <header className="flex justify-between mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {project.title}
        </h3>
        <div className="flex gap-4 items-center">
          { (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-green-300 hover:text-white transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 19v.01M5 12h.01M19 12h.01M16.24 7.76l.01.01M7.76 16.24l.01.01M7.76 7.76l.01.01M16.24 16.24l.01.01"
                />
              </svg>
              <span className="text-sm">Live</span>
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-300 hover:text-white transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span className="text-sm">Repo</span>
            </a>
          )}
        </div>
      </header>

      <ul className="mb-8 space-y-3 text-gray-300">
        {project.description.map((line, i) => (
          <motion.li
            key={i}
            initial={{ x: 20, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { delay: index * 0.1 + 0.3 + i * 0.1 },
            }}
            className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-indigo-400"
          >
            {line}
          </motion.li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { delay: index * 0.1 + 0.6 + i * 0.05 },
            }}
            className="px-3 py-1 text-xs bg-indigo-900/50 text-indigo-100 rounded-full border border-indigo-400/30"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
