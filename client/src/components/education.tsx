import { motion } from "framer-motion";
import { resumeData } from "@/data/resume-data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-black-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Education</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400">My academic journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-black dark:bg-white"></div>

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
                  <div className="ml-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-black dark:text-white">{edu.degree}</h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{edu.period}</span>
                    </div>
                    {edu.institution && (
                      <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                    )}
                    <p className={`font-semibold ${edu.gradeColor}`}>{edu.grade}</p>
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
