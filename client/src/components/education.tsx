import { motion } from "framer-motion";
import { resumeData } from "@/data/resume-data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Education</h2>
          <p className="text-xl text-secondary">My academic journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow ${edu.dotColor}`}></div>
                  <div className="ml-20 bg-gray-50 rounded-xl p-6 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-dark">{edu.degree}</h3>
                      <span className="text-sm text-accent font-medium">{edu.period}</span>
                    </div>
                    {edu.institution && (
                      <p className="text-secondary mb-2">{edu.institution}</p>
                    )}
                    <p className={`font-semibold ${edu.gradeColor}`}>{edu.grade}</p>
                    {edu.details && (
                      <p className="text-sm text-secondary mt-2">{edu.details}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
