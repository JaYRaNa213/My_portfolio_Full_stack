import { motion } from "framer-motion";
import { Award, BarChart } from "lucide-react";
import { resumeData } from "@/data/resume-data";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20  dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Certificates & Achievements</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400">Professional certifications and learning milestones</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${cert.bgGradient} rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-start">
                <div className={`${cert.iconBg} p-3 rounded-lg mr-4 flex-shrink-0`}>
                  {cert.icon === 'award' ? (
                    <Award className="text-white dark:text-black text-xl w-5 h-5" />
                  ) : (
                    <BarChart className="text-white dark:text-black text-xl w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{cert.title}</h3>
                  <p className={`font-semibold mb-3 ${cert.issuerColor}`}>{cert.issuer}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
