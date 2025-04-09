"use client"

import { motion } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiAdobephotoshop,
  SiRedux,
  SiPython,
  SiDjango,
  SiPytorch,
  SiTensorflow,
  SiPostgresql,
  SiCplusplus,
} from "react-icons/si"

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "C++", icon: SiCplusplus, color: "#E34F26" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Python", icon: SiPython, color: "#31A8FF" },
    { name: "Django", icon: SiDjango, color: "#764ABC" },
    { name: "Pytorch", icon: SiPytorch, color: "#FB5625" },
    { name: "Tensorflow", icon: SiTensorflow, color: "#F7DF1E" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#31A8FF" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the development and ML world. Here are the main tools and
            technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300 mb-4 group">
                <skill.icon
                  className="w-10 h-10 text-gray-400 group-hover:text-opacity-100 transition-all duration-300"
                  style={{ color: skill.color, filter: "grayscale(60%)" }}
                  onMouseOver={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                  onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(60%)")}
                />
              </div>
              <span className="text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

