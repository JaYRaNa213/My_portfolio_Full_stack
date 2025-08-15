import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/resume-data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Featured Projects</h2>
          <p className="text-xl text-secondary">Some of my notable work and contributions</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">{project.title}</h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-dark mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-4">
                  {project.impact.map((impact, impactIndex) => (
                    <div key={impactIndex} className="flex items-center text-accent mb-1">
                      {impact.includes("reduction") || impact.includes("boost") ? (
                        impact.includes("boost") ? (
                          <ArrowUp className="w-4 h-4 mr-2" />
                        ) : (
                          <TrendingUp className="w-4 h-4 mr-2" />
                        )
                      ) : (
                        <TrendingUp className="w-4 h-4 mr-2" />
                      )}
                      <span className="text-sm font-semibold">{impact}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
