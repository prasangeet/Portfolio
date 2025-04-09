"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-80 md:h-96 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 z-10 rounded-lg"></div>
              <Image
                src="/portfolioPhoto.jpg"
                alt="Developer Portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-30 animate-float"></div>
            <div
              className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-30 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-100">Who am I?</h3>
            <p className="text-gray-300 leading-relaxed">
              I’m Prasangeet Dongre, a curious mind and a builder at heart,
              currently pursuing Chemical Engineering at IIT Jodhpur. While my
              academic foundation is rooted in core engineering, my passion lies
              in code — not just writing it, but designing systems that make
              sense, scale well, and solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Over time, I’ve found myself drawn toward the beautiful complexity
              of software development — from backend architecture and database
              design to DevOps and AI-driven tools. I enjoy tackling tough
              challenges, especially ones that blend structure with creativity.
              Whether it's building in-house tools, optimizing algorithms, or
              integrating AI into everyday workflows, I like pushing boundaries
              and learning along the way.
            </p>
            <p className="text-gray-300 leading-relaxed">
              
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
