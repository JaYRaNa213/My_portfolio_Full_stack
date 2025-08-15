import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin, Code, User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/resume-data";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-black dark:bg-white text-white dark:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {resumeData.personalInfo.name}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-6 text-gray-300 dark:text-gray-700"
            >
              {resumeData.personalInfo.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg mb-8 text-gray-300 dark:text-gray-700 max-w-2xl"
            >
              {resumeData.personalInfo.summary}
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <div className="flex items-center justify-center lg:justify-start">
                <Phone className="w-4 h-4 mr-2" />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail className="w-4 h-4 mr-2" />
                <span>{resumeData.personalInfo.email}</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-4 mb-8"
            >
              <a href={resumeData.personalInfo.links.github} className="bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 p-3 rounded-full transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={resumeData.personalInfo.links.linkedin} className="bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 p-3 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={resumeData.personalInfo.links.leetcode} className="bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 p-3 rounded-full transition-colors">
                <Code className="w-5 h-5" />
              </a>
              <a href={resumeData.personalInfo.links.portfolio} className="bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 p-3 rounded-full transition-colors">
                <User className="w-5 h-5" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white dark:border-black text-white dark:text-black px-8 py-3 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
              alt="Professional developer workspace"
              className="rounded-lg shadow-xl w-full max-w-md h-auto border border-gray-200 dark:border-gray-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
