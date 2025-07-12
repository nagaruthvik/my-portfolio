import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiSend, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import axios from "axios";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    controls.start({
      background: ["#0f172a", "#1e1b4b", "#0f172a"],
      transition: { duration: 1.5 },
    });
    console.log(formData);
    setIsSubmitted(true);
   

    const api = await axios.post(
      `${import.meta.env.VITE_API_URL}api/contact`,
      formData
    );
    setFormData({
      name :"",
      email:"",
      message :""
    })

    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Particle background effect
  useEffect(() => {
    if (!sectionRef.current) return;

    const canvas = document.createElement("canvas");
    canvasRef.current = canvas;
    const ctx = canvas.getContext("2d");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "0";
    canvas.style.opacity = "0.15";
    sectionRef.current.appendChild(canvas);

    const resizeCanvas = () => {
      if (!sectionRef.current) return;
      canvas.width = sectionRef.current.offsetWidth;
      canvas.height = sectionRef.current.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const particleCount = Math.floor(window.innerWidth / 10);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `hsla(${Math.random() * 60 + 240}, 100%, 70%, ${
          Math.random() * 0.5 + 0.1
        })`,
      });
    }

    let animationId;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) cancelAnimationFrame(animationId);
      if (
        canvasRef.current &&
        sectionRef.current?.contains(canvasRef.current)
      ) {
        sectionRef.current.removeChild(canvasRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden"
      id="contact"
    >
      {/* Floating background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-900/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 h-full flex flex-col justify-center">
        {/* Section title with glitch effect */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
            Contact{" "}
            <span className="glitch" data-text="Me">
              Me
            </span>
          </span>
        </motion.h2>

        {/* Holographic contact panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          animate={controls}
          className="relative mx-auto w-full max-w-3xl rounded-2xl border border-indigo-400/30 bg-gray-800/50 backdrop-blur-sm shadow-xl overflow-hidden p-1"
        >
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl border-[1px] border-dashed border-indigo-400/30 pointer-events-none animate-spin-slow"></div>

          {/* Grid overlay */}
          <div className="absolute inset-0 grid-overlay opacity-20"></div>

          {/* Main content */}
          <div className="relative z-10 p-8 md:p-10">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-300">
                  I'll get back to you soon. Meanwhile, check out my social
                  profiles below.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Build Something Amazing
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                        placeholder="Enter your name"
                      />
                      <div className="absolute inset-0 rounded-lg border border-indigo-400/20 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                        placeholder="your.email@example.com"
                      />
                      <div className="absolute inset-0 rounded-lg border border-indigo-400/20 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                        placeholder="Tell me about your project..."
                      ></textarea>
                      <div className="absolute inset-0 rounded-lg border border-indigo-400/20 pointer-events-none"></div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium text-white flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <FiSend className="h-5 w-5" />
                  </motion.button>
                </form>
              </>
            )}
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mt-16"
        >
          <a
            href="mailto:nagaruthvik66@gmail.com"
            title="nagaruthvik66@gmail.com"
            className="text-gray-300 hover:text-indigo-400 transition-colors"
          >
            <FiMail className="h-6 w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/naga-ruthvik-ramisetti-a29b69237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/nagaruthvik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
