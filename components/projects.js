"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Task Management Tool",
      description:
        "A productivity app for managing tasks, projects, and team collaboration with drag-and-drop functionality.",
      image: "/flowforge.png",
      tags: ["nextjs", "javascript", "nodejs", "firebase", "tailwind"],
      github: "https://github.com/prasangeet/FlowForge",
      demo: "https://flow-forge-delta.vercel.app",
    },
    {
      id: 2,
      title: "CSR Connect",
      description:
        "CSR Connect is a platform that bridges the gap between corporate social responsibility (CSR) initiatives and academic research aligned with the UN Sustainable Development Goals (SDGs). It automates the process of mapping CSR activities to relevant SDGs and helps companies connect with research projects for meaningful social impact.",
      image: "/csr-connect.png",
      tags: ["nextjs", "django", "postgresql"],
      github: "https://github.com/prasangeet/CSRconnect",
      demo: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern portfolio website for creative professionals with smooth animations and responsive design.",
      image: "/portfolio.png",
      tags: ["nextjs", "tailwind", "framer"],
      github: "https://github.com/prasangeet/Portfolio",
      demo: "https://prasangeetdongre.vercel.app",
    },
    {
      id: 4,
      title: "Pathfinding Visualizer",
      description:
       "Develop a platform using Dijkstra’s algorithm to compute the most valid and shortest routes. The system will use C++ for computation, Django for backend, PostgreSQL for data storage, and Next.js for frontend. OpenStreetMap vector tiles will be used for visualization.",
      image: "/pathfinding.png",
      tags: ["nextjs", "c++", "algorithms", "graphs", "django", "postgresql"],
      github: "https://github.com/prasangeet/Pathfinding",
      demo: "#",
    }
  ];

  const filters = [
    { name: "All", value: "all" },
    { name: "React", value: "react" },
    { name: "Next.js", value: "nextjs" },
    { name: "NLP", value: "nlp" },
    { name: "Node.js", value: "nodejs" },
    { name: "Django", value: "django" },
    { name: "Algorithms", value: "algorithms" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece
            of development that showcases my skills and passion for building
            exceptional web applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-4 justify-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-500 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
