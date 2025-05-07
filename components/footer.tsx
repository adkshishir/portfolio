"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-subtle opacity-50"></div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Shishir Adhikari</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer specializing in modern web technologies and scalable applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <Link
                  href="mailto:adhikarishishir50@gmail.com"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  adhikarishishir50@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Linkedin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <Link
                  href="https://linkedin.com/in/shishir-adhikari"
                  target="_blank"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Shishir Adhikari
                </Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Github className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <Link
                  href="https://github.com/adkshishir"
                  target="_blank"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  github.com/adkshishir
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Let's Connect</h3>
            <p className="text-sm text-muted-foreground">Interested in working together? Feel free to reach out!</p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/adkshishir"
                target="_blank"
                className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/30 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/shishir-adhikari"
                target="_blank"
                className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/30 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:adhikarishishir50@gmail.com"
                className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/30 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-6 border-t text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shishir Adhikari. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
