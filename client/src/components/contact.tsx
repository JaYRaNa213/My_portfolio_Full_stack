import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin, Code, User, Target, Bot, GraduationCap } from "lucide-react";
import { resumeData } from "@/data/resume-data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Let's Connect</h2>
          <p className="text-xl text-secondary">Open to internships and entry-level opportunities</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-dark mb-6">Get In Touch</h3>
            <p className="text-secondary mb-8 leading-relaxed">
              I'm actively seeking Full Stack Developer and AI Developer internships or entry-level roles. 
              Let's discuss how my expertise in web development, automation workflows, and AI integration 
              can contribute to your team.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-dark font-semibold">Phone</p>
                  <p className="text-secondary">{resumeData.personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-dark font-semibold">Email</p>
                  <p className="text-secondary">{resumeData.personalInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href={resumeData.personalInfo.links.github} className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={resumeData.personalInfo.links.linkedin} className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={resumeData.personalInfo.links.leetcode} className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg transition-colors">
                <Code className="w-5 h-5" />
              </a>
              <a href={resumeData.personalInfo.links.portfolio} className="bg-primary hover:bg-primary/90 text-white p-3 rounded-lg transition-colors">
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
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-dark mb-4">Career Goals</h3>
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
                  <div className="bg-accent/10 p-2 rounded-lg mr-3 mt-1">
                    {goal.icon === 'target' && <Target className="w-4 h-4 text-accent" />}
                    {goal.icon === 'robot' && <Bot className="w-4 h-4 text-accent" />}
                    {goal.icon === 'graduation' && <GraduationCap className="w-4 h-4 text-accent" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">{goal.title}</h4>
                    <p className="text-secondary text-sm">{goal.description}</p>
                  </div>
                </motion.div>
              ))}

              <div className="bg-accent/10 p-4 rounded-lg mt-6">
                <p className="text-accent text-sm font-medium text-center">
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
