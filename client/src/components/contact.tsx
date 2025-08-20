import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin, Code, User, Target, Bot, GraduationCap } from "lucide-react";
import { resumeData } from "@/data/resume-data";

export default function Contact() {
  return (
    <section id="contact" className="py-20  dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-200 dark:text-gray-400">Open to internships and entry-level opportunities</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-6">Get In Touch</h3>
            <p className="text-gray-100 dark:text-gray-400 mb-8 leading-relaxed">
              I'm actively seeking Full Stack Developer and AI Developer internships or entry-level roles. 
              Let's discuss how my expertise in web development, automation workflows, and AI integration 
              can contribute to your team.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mr-4">
                  <Phone className="w-5 h-5 text-black dark:text-white" />
                </div>
                <div>
                  <p className="text-black dark:text-white font-semibold">Phone</p>
                  <p className="text-gray-300 dark:text-gray-400">{resumeData.personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mr-4">
                  <Mail className="w-5 h-5 text-black dark:text-white" />
                </div>
                <div>
                  <p className="text-black dark:text-white font-semibold">Email</p>
                  <p className="text-gray-300 dark:text-gray-400">{resumeData.personalInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href={resumeData.personalInfo.links.github} className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 p-3 rounded-lg transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={resumeData.personalInfo.links.linkedin} className="bg-gray-700 dark:bg-gray-300 text-white dark:text-black hover:bg-gray-600 dark:hover:bg-gray-400 p-3 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={resumeData.personalInfo.links.leetcode} className="bg-gray-600 dark:bg-gray-400 text-white dark:text-black hover:bg-gray-500 dark:hover:bg-gray-500 p-3 rounded-lg transition-colors">
                <Code className="w-5 h-5" />
              </a>
              <a href={resumeData.personalInfo.links.portfolio} className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300 p-3 rounded-lg transition-colors">
                <User className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Career Goals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Career Goals</h3>
            <div className="space-y-4">
              {resumeData.careerGoals.map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg mr-3 mt-1">
                    {goal.icon === 'target' && <Target className="w-4 h-4 text-black dark:text-white" />}
                    {goal.icon === 'robot' && <Bot className="w-4 h-4 text-black dark:text-white" />}
                    {goal.icon === 'graduation' && <GraduationCap className="w-4 h-4 text-black dark:text-white" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white">{goal.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{goal.description}</p>
                  </div>
                </motion.div>
              ))}

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-6">
                <p className="text-black dark:text-white text-sm font-medium text-center">
                  "Passionate about creating innovative solutions that bridge traditional business needs with modern technology"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
