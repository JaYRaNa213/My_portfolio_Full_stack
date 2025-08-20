import { motion } from "framer-motion";
import { Code, Bot, Settings, GraduationCap } from "lucide-react";
import { resumeData } from "@/data/resume-data";

export default function About() {
  return (
    <section id="about" className="pt-20 pb-16 bg-black dark:bg-white text-white dark:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-350 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate Computer Science student with hands-on experience in full-stack development and AI integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/djtq2eywl/image/upload/v1755679897/240d7r_hne4cd.jpg"
              alt="Modern tech setup"
              className="rounded-lg shadow-lg w-full h-auto border border-gray-200 dark:border-gray-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">My Journey</h3>
            <p className="text-gray-350 dark:text-gray-400 mb-6 leading-relaxed">
              Currently pursuing Computer Science & Engineering at Rajkiya Engineering College Kannauj (AKTU) 
              with a CGPA of 7.8. I have a strong foundation in both theoretical concepts and practical application, 
              having completed a Diploma in Mechanical Engineering before transitioning to Computer Science.
            </p>
            <p className="text-gray-350 dark:text-gray-400 mb-6 leading-relaxed">
              My passion lies in creating innovative solutions that bridge the gap between traditional business 
              needs and modern technology. I specialize in full-stack web development, AI integration, and 
              automation workflows.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeData.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg mr-3">
                    {highlight.icon === 'code' && <Code className="w-4 h-4 text-black dark:text-white" />}
                    {highlight.icon === 'robot' && <Bot className="w-4 h-4 text-black dark:text-white" />}
                    {highlight.icon === 'settings' && <Settings className="w-4 h-4 text-black dark:text-white" />}
                    {highlight.icon === 'graduation' && <GraduationCap className="w-4 h-4 text-black dark:text-white" />}
                  </div>
                  <span className="text-gray-400 dark:text-gray-400">{highlight.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
