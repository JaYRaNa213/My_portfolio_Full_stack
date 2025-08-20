import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/resume-data";

export default function Projects() {
  return (
    <section id="projects" className="py-20  dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400">
            Some of my notable work and contributions
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-40 object-cover"
              />

              <div className="p-5 pb-14">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">
  {project.description}
</p>


                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-black dark:text-white mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-2 py-0.5 rounded text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-4">
                  {project.impact.map((impact, i) => (
                    <div
                      key={i}
                      className="flex items-center text-gray-600 dark:text-gray-400 mb-1"
                    >
                      {impact.includes("boost") ? (
                        <ArrowUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      )}
                      <span className="text-xs font-semibold text-black dark:text-white">
                        {impact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3"
                >
                  <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
              )}

              {/* {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3"
                >
                  <Button
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </a> */}
              {/* )} */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
