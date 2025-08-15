import { motion } from "framer-motion";
import { Code, Layers, Database, Wrench, Bot, Globe } from "lucide-react";
import { resumeData } from "@/data/resume-data";

export default function Skills() {
  const iconMap = {
    code: Code,
    layers: Layers,
    database: Database,
    wrench: Wrench,
    robot: Bot,
    globe: Globe,
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Technical Skills</h2>
          <p className="text-xl text-secondary">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((skillCategory, index) => {
            const IconComponent = iconMap[skillCategory.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-4 ${skillCategory.bgColor}`}>
                    <IconComponent className={`w-5 h-5 ${skillCategory.textColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-dark">{skillCategory.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform ${skillCategory.skillBg} ${skillCategory.skillText}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
