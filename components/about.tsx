"use client"

import { motion } from "framer-motion"
import { Code, Layout, Database, Server, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-subtle"></div>
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block rounded-full px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 mb-4"
            >
              About Me
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
              <span className="text-gradient">Passionate</span> Full Stack Developer
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Detail-oriented Full Stack Developer with expertise in modern JavaScript frameworks and backend
              technologies. Experienced in creating responsive web applications with clean, maintainable code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-purple-200 dark:border-purple-800 bg-background p-1">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Shishir Adhikari"
                  width={600}
                  height={500}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">My Expertise</h3>
              <p className="text-muted-foreground">
                Passionate about delivering high-quality software solutions that enhance user experience. I specialize
                in building scalable web applications using modern technologies.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <Layout className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Frontend Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Building responsive and interactive user interfaces with Next.js, React, and Svelte
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <Server className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Backend Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Developing robust server-side applications with NestJS, Node.js, and Express
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <Database className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Database Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating efficient database schemas with MySQL, PostgreSQL, and Prisma ORM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Clean Code</h4>
                    <p className="text-sm text-muted-foreground">
                      Writing maintainable, well-documented, and efficient code
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Performance Optimization</h4>
                    <p className="text-sm text-muted-foreground">Enhancing application speed and efficiency</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
